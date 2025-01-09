import { Uint53 } from '@cosmjs/math';
import { calculateFee, GasPrice, } from '@cosmjs/stargate';
import { Method } from '@cosmjs/tendermint-rpc';
import Long from 'long';
import protobuf from 'protobufjs';
import { GAS_MULTIPLIER, SelectedGasDenom, OrderFlags, } from '../../types.js';
import { UnexpectedClientError } from '../../libs/errors.lib.js';
import { generateRegistry } from '../../libs/registry.lib.js';
import { MsgBuilder } from '../base/msg.builder.js';
import { Order_ConditionType, } from '../../protos/protocol/clob/order.js';
// Required for encoding and decoding queries that are of type Long.
// Must be done once but since the individal modules should be usable
// - must be set in each module that encounters encoding/decoding Longs.
// Reference: https://github.com/protobufjs/protobuf.js/issues/921
protobuf.util.Long = Long;
protobuf.configure();
export class PostExecutor {
    composer;
    registry;
    chainId;
    get;
    denoms;
    defaultClientMemo;
    selectedGasDenom = SelectedGasDenom.USDC;
    defaultGasPrice;
    defaultDydxGasPrice;
    useTimestampNonce = false;
    accountNumberCache = new Map();
    constructor(get, chainId, denoms, defaultClientMemo, useTimestampNonce) {
        this.get = get;
        this.chainId = chainId;
        this.registry = generateRegistry();
        this.composer = new MsgBuilder();
        this.denoms = denoms;
        this.defaultClientMemo = defaultClientMemo;
        this.defaultGasPrice = GasPrice.fromString(`0.025${denoms.USDC_GAS_DENOM !== undefined ? denoms.USDC_GAS_DENOM : denoms.USDC_DENOM}`);
        this.defaultDydxGasPrice = GasPrice.fromString(`25000000000${denoms.CHAINTOKEN_GAS_DENOM !== undefined
            ? denoms.CHAINTOKEN_GAS_DENOM
            : denoms.CHAINTOKEN_DENOM}`);
        if (useTimestampNonce === true)
            this.useTimestampNonce = useTimestampNonce;
    }
    /**
     * @description Retrieves the account number for the given wallet address and populates the accountNumberCache.
     * The account number is required for txOptions when signing a transaction.
     * Pre-populating the cache avoids a round-trip request during the first transaction creation in the session, preventing it from being a performance blocker.
     */
    async populateAccountNumberCache(address) {
        if (this.accountNumberCache.has(address))
            return;
        const account = await this.get.getAccount(address);
        this.accountNumberCache.set(address, account);
    }
    setSelectedGasDenom(selectedGasDenom) {
        this.selectedGasDenom = selectedGasDenom;
    }
    getGasPrice() {
        return this.selectedGasDenom === SelectedGasDenom.USDC
            ? this.defaultGasPrice
            : this.defaultDydxGasPrice;
    }
    /**
     * @description Simulate a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Fee for broadcasting a transaction.
     */
    async simulate(wallet, messaging, gasPrice = this.getGasPrice(), memo, account) {
        let msgs;
        // protocol expects timestamp nonce in UTC milliseconds, which is the unit returned by Date.now()
        let sequence = Date.now();
        if (this.useTimestampNonce) {
            msgs = await messaging();
        }
        else {
            const msgsPromise = messaging();
            const accountPromise = account
                ? await account()
                : this.account(wallet.address);
            const msgsAndAccount = await Promise.all([msgsPromise, accountPromise]);
            msgs = msgsAndAccount[0];
            sequence = msgsAndAccount[1].sequence;
        }
        return this.simulateTransaction(wallet.pubKey, sequence, msgs, gasPrice, memo);
    }
    /**
     * @description Sign a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Signature.
     */
    async sign(wallet, messaging, zeroFee, gasPrice = this.getGasPrice(), memo, account) {
        const msgsPromise = await messaging();
        const accountPromise = account
            ? await account()
            : this.account(wallet.address);
        const msgsAndAccount = await Promise.all([msgsPromise, accountPromise]);
        const msgs = msgsAndAccount[0];
        return this.signTransaction(wallet, msgs, msgsAndAccount[1], zeroFee, gasPrice, memo);
    }
    /**
     * @description Send a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Tx Hash.
     */
    async send(wallet, messaging, zeroFee, gasPrice = this.getGasPrice(), memo, broadcastMode, account, gasAdjustment = GAS_MULTIPLIER) {
        const msgsPromise = messaging();
        const accountPromise = account
            ? await account()
            : this.account(wallet.address);
        const msgsAndAccount = await Promise.all([msgsPromise, accountPromise]);
        const msgs = msgsAndAccount[0];
        return this.signAndSendTransaction(wallet, msgsAndAccount[1], msgs, zeroFee, gasPrice, memo ?? this.defaultClientMemo, broadcastMode ?? this.defaultBroadcastMode(msgs), gasAdjustment);
    }
    /**
     * @description Calculate the default broadcast mode.
     */
    defaultBroadcastMode(msgs) {
        if (msgs.length === 1 &&
            (msgs[0].typeUrl === '/protocol.clob.MsgPlaceOrder' ||
                msgs[0].typeUrl === '/protocol.clob.MsgCancelOrder')) {
            const orderFlags = msgs[0].typeUrl === '/protocol.clob.MsgPlaceOrder'
                ? msgs[0].value.order?.orderId?.orderFlags
                : msgs[0].value.orderId?.orderFlags;
            switch (orderFlags) {
                case OrderFlags.SHORT_TERM:
                    return Method.BroadcastTxSync;
                case OrderFlags.LONG_TERM:
                case OrderFlags.CONDITIONAL:
                    return Method.BroadcastTxCommit;
                default:
                    break;
            }
        }
        return Method.BroadcastTxSync;
    }
    /**
     * @description Sign and send a message
     *
     * @returns The Tx Response.
     */
    async signTransaction(wallet, messages, account, zeroFee, gasPrice = this.getGasPrice(), memo, gasAdjustment = GAS_MULTIPLIER) {
        // protocol expects timestamp nonce in UTC milliseconds, which is the unit returned by Date.now()
        const sequence = this.useTimestampNonce ? Date.now() : account.sequence;
        // Simulate transaction if no fee is specified.
        const fee = zeroFee
            ? {
                amount: [],
                gas: '1000000',
            }
            : await this.simulateTransaction(wallet.pubKey, sequence, messages, gasPrice, memo, gasAdjustment);
        const txOptions = {
            sequence,
            accountNumber: account.accountNumber,
            chainId: this.chainId,
        };
        // Generate signed transaction.
        return wallet.signTransaction(messages, txOptions, fee, memo);
    }
    /**
     * @description Retrieve an account structure for transactions.
     * For short term orders, the sequence doesn't matter. Use cached if available.
     * For long term and conditional orders, a round trip to validator must be made.
     * when timestamp nonce is supported, no need to fetch account sequence number
     */
    async account(address, orderFlags) {
        if (orderFlags === OrderFlags.SHORT_TERM || this.useTimestampNonce) {
            if (this.accountNumberCache.has(address)) {
                // If order is SHORT_TERM or if timestamp nonce is enabled, the sequence doesn't matter
                return this.accountNumberCache.get(address);
            }
        }
        const account = await this.get.getAccount(address);
        this.accountNumberCache.set(address, account);
        return account;
    }
    /**
     * @description Sign and send a message
     *
     * @returns The Tx Response.
     */
    async signAndSendTransaction(wallet, account, messages, zeroFee, gasPrice = this.getGasPrice(), memo, broadcastMode, gasAdjustment = GAS_MULTIPLIER) {
        const signedTransaction = await this.signTransaction(wallet, messages, account, zeroFee, gasPrice, memo, gasAdjustment);
        return this.sendSignedTransaction(signedTransaction, broadcastMode);
    }
    /**
     * @description Send signed transaction.
     *
     * @returns The Tx Response.
     */
    async sendSignedTransaction(signedTransaction, broadcastMode) {
        return this.get.tendermintClient.broadcastTransaction(signedTransaction, broadcastMode !== undefined ? broadcastMode : Method.BroadcastTxSync);
    }
    /**
     * @description Simulate broadcasting a transaction.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Fee for broadcasting a transaction.
     */
    async simulateTransaction(pubKey, sequence, messages, gasPrice = this.getGasPrice(), memo, gasAdjustment = GAS_MULTIPLIER) {
        // Get simulated response.
        const encodedMessages = messages.map((message) => this.registry.encodeAsAny(message));
        const simulationResponse = await this.get.stargateQueryClient.tx.simulate(encodedMessages, memo, pubKey, sequence);
        // The promise should have been rejected if the gasInfo was undefined.
        if (simulationResponse.gasInfo === undefined) {
            throw new UnexpectedClientError();
        }
        // Calculate and return fee from gasEstimate.
        const gasEstimate = Uint53.fromString(simulationResponse.gasInfo.gasUsed.toString()).toNumber();
        const fee = calculateFee(Math.floor(gasEstimate * gasAdjustment), gasPrice);
        // TODO(TRCL-2550): Temporary workaround before IBC denom is supported in '@cosmjs/stargate'.
        // The '@cosmjs/stargate' does not support denom with '/', so currently GAS_PRICE is
        // represented in 'uusdc', and the output of `calculateFee` is in '', which is replaced
        // below by USDC_DENOM string.
        const amount = fee.amount.map((coin) => {
            if (coin.denom === 'uusdc') {
                return {
                    amount: coin.amount,
                    denom: this.denoms.USDC_DENOM,
                };
            }
            return coin;
        });
        return {
            ...fee,
            amount,
        };
    }
    // ------ State-Changing Requests ------ //
    async placeOrder(subaccount, clientId, clobPairId, side, quantums, subticks, timeInForce, orderFlags, reduceOnly, goodTilBlock, goodTilBlockTime, clientMetadata = 0, conditionType = Order_ConditionType.CONDITION_TYPE_UNSPECIFIED, conditionalOrderTriggerSubticks = Long.fromInt(0), broadcastMode) {
        const msg = await this.placeOrderMsg(subaccount.address, subaccount.subaccountNumber, clientId, clobPairId, side, quantums, subticks, timeInForce, orderFlags, reduceOnly, goodTilBlock, goodTilBlockTime, clientMetadata, conditionType, conditionalOrderTriggerSubticks);
        const account = this.account(subaccount.address, orderFlags);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), true, undefined, undefined, broadcastMode, () => account);
    }
    async placeOrderMsg(address, subaccountNumber, clientId, clobPairId, side, quantums, subticks, timeInForce, orderFlags, reduceOnly, goodTilBlock, goodTilBlockTime, clientMetadata = 0, conditionType = Order_ConditionType.CONDITION_TYPE_UNSPECIFIED, conditionalOrderTriggerSubticks = Long.fromInt(0)) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgPlaceOrder(address, subaccountNumber, clientId, clobPairId, orderFlags, goodTilBlock ?? 0, goodTilBlockTime ?? 0, side, quantums, subticks, timeInForce, reduceOnly, clientMetadata, conditionType, conditionalOrderTriggerSubticks);
            resolve(msg);
        });
    }
    async placeOrderObject(subaccount, placeOrder, broadcastMode) {
        return this.placeOrder(subaccount, placeOrder.clientId, placeOrder.clobPairId, placeOrder.side, placeOrder.quantums, placeOrder.subticks, placeOrder.timeInForce, placeOrder.orderFlags, placeOrder.reduceOnly, placeOrder.goodTilBlock, placeOrder.goodTilBlockTime, placeOrder.clientMetadata, placeOrder.conditionType ??
            Order_ConditionType.CONDITION_TYPE_UNSPECIFIED, placeOrder.conditionalOrderTriggerSubticks ?? Long.fromInt(0), broadcastMode);
    }
    async cancelOrder(subaccount, clientId, orderFlags, clobPairId, goodTilBlock, goodTilBlockTime, broadcastMode) {
        const msg = await this.cancelOrderMsg(subaccount.address, subaccount.subaccountNumber, clientId, orderFlags, clobPairId, goodTilBlock ?? 0, goodTilBlockTime ?? 0);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), true, undefined, undefined, broadcastMode);
    }
    async cancelOrderMsg(address, subaccountNumber, clientId, orderFlags, clobPairId, goodTilBlock, goodTilBlockTime) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgCancelOrder(address, subaccountNumber, clientId, clobPairId, orderFlags, goodTilBlock ?? 0, goodTilBlockTime ?? 0);
            resolve(msg);
        });
    }
    async cancelOrderObject(subaccount, cancelOrder, broadcastMode) {
        return this.cancelOrder(subaccount, cancelOrder.clientId, cancelOrder.orderFlags, cancelOrder.clobPairId, cancelOrder.goodTilBlock, cancelOrder.goodTilBlockTime, broadcastMode);
    }
    async batchCancelShortTermOrders(subaccount, shortTermOrders, goodTilBlock, broadcastMode) {
        const msg = await this.batchCancelShortTermOrdersMsg(subaccount.address, subaccount.subaccountNumber, shortTermOrders, goodTilBlock);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), true, undefined, undefined, broadcastMode);
    }
    async batchCancelShortTermOrdersMsg(address, subaccountNumber, shortTermOrders, goodTilBlock) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgBatchCancelShortTermOrders(address, subaccountNumber, shortTermOrders, goodTilBlock);
            resolve(msg);
        });
    }
    async transfer(subaccount, recipientAddress, recipientSubaccountNumber, assetId, amount, broadcastMode) {
        const msg = await this.transferMsg(subaccount.address, subaccount.subaccountNumber, recipientAddress, recipientSubaccountNumber, assetId, amount);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode);
    }
    async transferMsg(address, subaccountNumber, recipientAddress, recipientSubaccountNumber, assetId, amount) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgTransfer(address, subaccountNumber, recipientAddress, recipientSubaccountNumber, assetId, amount);
            resolve(msg);
        });
    }
    async deposit(subaccount, assetId, quantums, broadcastMode) {
        const msg = await this.depositMsg(subaccount.address, subaccount.subaccountNumber, assetId, quantums);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode);
    }
    async depositMsg(address, subaccountNumber, assetId, quantums) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgDepositToSubaccount(address, subaccountNumber, assetId, quantums);
            resolve(msg);
        });
    }
    async withdraw(subaccount, assetId, quantums, recipient, broadcastMode) {
        const msg = await this.withdrawMsg(subaccount.address, subaccount.subaccountNumber, assetId, quantums, recipient);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode);
    }
    async withdrawMsg(address, subaccountNumber, assetId, quantums, recipient) {
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgWithdrawFromSubaccount(address, subaccountNumber, assetId, quantums, recipient);
            resolve(msg);
        });
    }
    async sendToken(subaccount, recipient, coinDenom, quantums, zeroFee = true, broadcastMode) {
        const msg = await this.sendTokenMsg(subaccount.address, recipient, coinDenom, quantums);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), zeroFee, coinDenom === this.denoms.CHAINTOKEN_DENOM
            ? this.defaultDydxGasPrice
            : this.defaultGasPrice, undefined, broadcastMode);
    }
    async sendTokenMsg(address, recipient, coinDenom, quantums) {
        if (coinDenom !== this.denoms.CHAINTOKEN_DENOM &&
            coinDenom !== this.denoms.USDC_DENOM) {
            throw new Error('Unsupported coinDenom');
        }
        return new Promise((resolve) => {
            const msg = this.composer.composeMsgSendToken(address, recipient, coinDenom, quantums);
            resolve(msg);
        });
    }
    async delegate(subaccount, delegator, validator, amount, broadcastMode) {
        const msg = this.composer.composeMsgDelegate(delegator, validator, {
            denom: this.denoms.CHAINTOKEN_DENOM,
            amount,
        });
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, this.defaultDydxGasPrice, undefined, broadcastMode);
    }
    delegateMsg(delegator, validator, amount) {
        return this.composer.composeMsgDelegate(delegator, validator, {
            denom: this.denoms.CHAINTOKEN_DENOM,
            amount,
        });
    }
    async undelegate(subaccount, delegator, validator, amount, broadcastMode) {
        const msg = this.composer.composeMsgUndelegate(delegator, validator, {
            denom: this.denoms.CHAINTOKEN_DENOM,
            amount,
        });
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, this.defaultDydxGasPrice, undefined, broadcastMode);
    }
    undelegateMsg(delegator, validator, amount) {
        return this.composer.composeMsgUndelegate(delegator, validator, {
            denom: this.denoms.CHAINTOKEN_DENOM,
            amount,
        });
    }
    async withdrawDelegatorReward(subaccount, delegator, validator, broadcastMode) {
        const msg = this.composer.composeMsgWithdrawDelegatorReward(delegator, validator);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, this.defaultGasPrice, undefined, broadcastMode);
    }
    withdrawDelegatorRewardMsg(delegator, validator) {
        return this.composer.composeMsgWithdrawDelegatorReward(delegator, validator);
    }
    // vaults
    async depositToMegavault(subaccount, quoteQuantums, broadcastMode) {
        const msg = await this.depositToMegavaultMsg(subaccount.address, subaccount.subaccountNumber, quoteQuantums);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode);
    }
    depositToMegavaultMsg(...args) {
        return this.composer.composeMsgDepositToMegavault(...args);
    }
    async withdrawFromMegavault(subaccount, shares, minQuoteQuantums, broadcastMode) {
        const msg = await this.withdrawFromMegavaultMsg(subaccount.address, subaccount.subaccountNumber, shares, minQuoteQuantums);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode);
    }
    withdrawFromMegavaultMsg(...args) {
        return this.composer.composeMsgWithdrawFromMegavault(...args);
    }
    async registerAffiliate(subaccount, affiliate, broadcastMode, gasAdjustment = 2) {
        const msg = this.registerAffiliateMsg(subaccount.address, affiliate);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, undefined, broadcastMode, undefined, gasAdjustment);
    }
    registerAffiliateMsg(...args) {
        return this.composer.composeMsgRegisterAffiliate(...args);
    }
    launchMarketMsg(...args) {
        return this.composer.composeMsgCreateMarketPermissionless(...args);
    }
    async createMarketPermissionless(ticker, subaccount, broadcastMode, gasAdjustment, memo) {
        const msg = this.launchMarketMsg(subaccount.address, ticker, subaccount.subaccountNumber);
        return this.send(subaccount.wallet, () => Promise.resolve([msg]), false, undefined, memo, broadcastMode, undefined, gasAdjustment);
    }
}
//# sourceMappingURL=post.executor.js.map