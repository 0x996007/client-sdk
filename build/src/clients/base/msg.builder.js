import { Order_ConditionType, ClobPair_Status, } from '../../protos/types.js';
import Long from 'long';
import protobuf from 'protobufjs';
import { AUTHORITY_ADDRESSES, TYPE_URL_MSG_SEND, TYPE_URL_MSG_SUBMIT_PROPOSAL, TYPE_URL_MSG_PLACE_ORDER, TYPE_URL_MSG_CANCEL_ORDER, TYPE_URL_MSG_CREATE_CLOB_PAIR, TYPE_URL_MSG_UPDATE_CLOB_PAIR, TYPE_URL_MSG_DELAY_MESSAGE, TYPE_URL_MSG_CREATE_PERPETUAL, TYPE_URL_MSG_CREATE_ORACLE_MARKET, TYPE_URL_MSG_CREATE_TRANSFER, TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT, TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT, TYPE_URL_MSG_DELEGATE, TYPE_URL_MSG_UNDELEGATE, TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD, TYPE_URL_BATCH_CANCEL, TYPE_URL_MSG_REGISTER_AFFILIATE, TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT, TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT, TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS, } from '../../common/index.js';
protobuf.util.Long = Long;
protobuf.configure();
export class MsgBuilder {
    // ------------ x/clob ------------
    composeMsgPlaceOrder(address, subaccountNumber, clientId, clobPairId, orderFlags, goodTilBlock, goodTilBlockTime, side, quantums, subticks, timeInForce, reduceOnly, clientMetadata, conditionType = Order_ConditionType.CONDITION_TYPE_UNSPECIFIED, conditionalOrderTriggerSubticks = Long.fromInt(0)) {
        this.validateGoodTilBlockAndTime(orderFlags, goodTilBlock, goodTilBlockTime);
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const orderId = {
            subaccountId,
            clientId,
            orderFlags,
            clobPairId,
        };
        const order = {
            orderId,
            side,
            quantums,
            subticks,
            goodTilBlock: goodTilBlock === 0 ? undefined : goodTilBlock,
            goodTilBlockTime: goodTilBlock === 0 ? goodTilBlockTime : undefined,
            timeInForce,
            reduceOnly,
            clientMetadata: clientMetadata ?? 0,
            conditionType,
            conditionalOrderTriggerSubticks,
        };
        const msg = {
            order,
        };
        return {
            typeUrl: TYPE_URL_MSG_PLACE_ORDER,
            value: msg,
        };
    }
    composeMsgCancelOrder(address, subaccountNumber, clientId, clobPairId, orderFlags, goodTilBlock, goodTilBlockTime) {
        this.validateGoodTilBlockAndTime(orderFlags, goodTilBlock, goodTilBlockTime);
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const orderId = {
            subaccountId,
            clientId,
            orderFlags,
            clobPairId,
        };
        const msg = {
            orderId,
            goodTilBlock: goodTilBlock === 0 ? undefined : goodTilBlock,
            goodTilBlockTime: goodTilBlock === 0 ? goodTilBlockTime : undefined,
        };
        return {
            typeUrl: TYPE_URL_MSG_CANCEL_ORDER,
            value: msg,
        };
    }
    composeMsgBatchCancelShortTermOrders(address, subaccountNumber, shortTermCancels, goodTilBlock) {
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            subaccountId,
            shortTermCancels,
            goodTilBlock,
        };
        return {
            typeUrl: TYPE_URL_BATCH_CANCEL,
            value: msg,
        };
    }
    composeMsgCreateClobPair(clobId, perpetualId, quantumConversionExponent, stepBaseQuantums, subticksPerTick) {
        const msg = {
            // uses x/gov module account since creating the clob pair is a governance action.
            authority: AUTHORITY_ADDRESSES.gov,
            clobPair: {
                id: clobId,
                perpetualClobMetadata: {
                    perpetualId,
                },
                quantumConversionExponent,
                stepBaseQuantums,
                subticksPerTick,
                status: ClobPair_Status.STATUS_INITIALIZING,
            },
        };
        return {
            typeUrl: TYPE_URL_MSG_CREATE_CLOB_PAIR,
            value: msg,
        };
    }
    composeMsgUpdateClobPair(clobId, perpetualId, quantumConversionExponent, stepBaseQuantums, subticksPerTick) {
        const msg = {
            // uses x/delaymsg module account since updating the clob pair is a delayedmsg action.
            authority: AUTHORITY_ADDRESSES.delayMsg,
            clobPair: {
                id: clobId,
                perpetualClobMetadata: {
                    perpetualId,
                },
                quantumConversionExponent,
                stepBaseQuantums,
                subticksPerTick,
                status: ClobPair_Status.STATUS_ACTIVE,
            },
        };
        return {
            typeUrl: TYPE_URL_MSG_UPDATE_CLOB_PAIR,
            value: msg,
        };
    }
    // ------------ x/sending ------------
    composeMsgTransfer(address, subaccountNumber, recipientAddress, recipientSubaccountNumber, assetId, amount) {
        const sender = {
            owner: address,
            number: subaccountNumber,
        };
        const recipient = {
            owner: recipientAddress,
            number: recipientSubaccountNumber,
        };
        const transfer = {
            sender,
            recipient,
            assetId,
            amount,
        };
        const msg = {
            transfer,
        };
        return {
            typeUrl: TYPE_URL_MSG_CREATE_TRANSFER,
            value: msg,
        };
    }
    composeMsgDepositToSubaccount(address, subaccountNumber, assetId, quantums) {
        const recipient = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            sender: address,
            recipient,
            assetId,
            quantums,
        };
        return {
            typeUrl: TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT,
            value: msg,
        };
    }
    composeMsgWithdrawFromSubaccount(address, subaccountNumber, assetId, quantums, recipient = address) {
        const sender = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            sender,
            recipient,
            assetId,
            quantums,
        };
        return {
            typeUrl: TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT,
            value: msg,
        };
    }
    // ------------ x/bank ------------
    composeMsgSendToken(address, recipient, coinDenom, quantums) {
        const coin = {
            denom: coinDenom,
            amount: quantums,
        };
        const msg = {
            fromAddress: address,
            toAddress: recipient,
            amount: [coin],
        };
        return {
            typeUrl: TYPE_URL_MSG_SEND,
            value: msg,
        };
    }
    // ------------ x/prices ------------
    composeMsgCreateOracleMarket(marketId, pair, exponent, minExchanges, minPriceChangePpm, exchangeConfigJson) {
        const msg = {
            // uses x/gov module account since creating the oracle market is a governance action.
            authority: AUTHORITY_ADDRESSES.gov,
            params: {
                id: marketId,
                pair,
                exponent,
                minExchanges,
                minPriceChangePpm,
                exchangeConfigJson,
            },
        };
        return {
            typeUrl: TYPE_URL_MSG_CREATE_ORACLE_MARKET,
            value: msg,
        };
    }
    // ------------ x/perpetuals ------------
    composeMsgCreatePerpetual(perpetualId, marketId, ticker, atomicResolution, liquidityTier, marketType) {
        const msg = {
            // uses x/gov module account since creating the perpetual is a governance action.
            authority: AUTHORITY_ADDRESSES.gov,
            params: {
                id: perpetualId,
                marketId,
                ticker,
                atomicResolution,
                defaultFundingPpm: 0, // default funding should be 0 to start.
                liquidityTier,
                marketType,
            },
        };
        return {
            typeUrl: TYPE_URL_MSG_CREATE_PERPETUAL,
            value: msg,
        };
    }
    // ------------ x/delaymsg ------------
    composeMsgDelayMessage(embeddedMsg, delayBlocks) {
        const msg = {
            // all msgs sent to x/delay must be from x/gov module account.
            authority: AUTHORITY_ADDRESSES.gov,
            msg: embeddedMsg,
            delayBlocks,
        };
        return {
            typeUrl: TYPE_URL_MSG_DELAY_MESSAGE,
            value: msg,
        };
    }
    // ------------ x/gov ------------
    composeMsgSubmitProposal(title, initialDepositAmount, initialDepositDenomConfig, summary, messages, proposer, metadata = '', expedited = false) {
        const initialDeposit = [
            {
                amount: initialDepositAmount,
                denom: initialDepositDenomConfig,
            },
        ];
        const msg = {
            title,
            initialDeposit,
            summary,
            messages,
            proposer,
            metadata,
            expedited,
        };
        return {
            typeUrl: TYPE_URL_MSG_SUBMIT_PROPOSAL,
            value: msg,
        };
    }
    // ------------ x/vault ------------
    composeMsgDepositToMegavault(address, subaccountNumber, quoteQuantums) {
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            quoteQuantums,
            subaccountId,
        };
        return {
            typeUrl: TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT,
            value: msg,
        };
    }
    composeMsgWithdrawFromMegavault(address, subaccountNumber, shares, minQuoteQuantums) {
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            minQuoteQuantums,
            shares: { numShares: shares },
            subaccountId,
        };
        return {
            typeUrl: TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT,
            value: msg,
        };
    }
    // ------------ x/staking ------------
    composeMsgDelegate(delegator, validator, amount) {
        const msg = {
            delegatorAddress: delegator,
            validatorAddress: validator,
            amount,
        };
        return {
            typeUrl: TYPE_URL_MSG_DELEGATE,
            value: msg,
        };
    }
    composeMsgUndelegate(delegator, validator, amount) {
        const msg = {
            delegatorAddress: delegator,
            validatorAddress: validator,
            amount,
        };
        return {
            typeUrl: TYPE_URL_MSG_UNDELEGATE,
            value: msg,
        };
    }
    // ------------ x/distribution ------------
    composeMsgWithdrawDelegatorReward(delegator, validator) {
        const msg = {
            delegatorAddress: delegator,
            validatorAddress: validator,
        };
        return {
            typeUrl: TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD,
            value: msg,
        };
    }
    // ------------ x/affiliates ------------
    composeMsgRegisterAffiliate(referee, affiliate) {
        const msg = {
            referee,
            affiliate,
        };
        return {
            typeUrl: TYPE_URL_MSG_REGISTER_AFFILIATE,
            value: msg,
        };
    }
    // ------------ x/listing ------------
    composeMsgCreateMarketPermissionless(address, ticker, subaccountNumber) {
        const subaccountId = {
            owner: address,
            number: subaccountNumber,
        };
        const msg = {
            ticker,
            subaccountId,
        };
        return {
            typeUrl: TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS,
            value: msg,
        };
    }
    // ------------ util ------------
    validateGoodTilBlockAndTime(orderFlags, goodTilBlock, goodTilBlockTime) {
        if (orderFlags === 0 && goodTilBlock === 0) {
            throw new Error('goodTilBlock must be set if orderFlags is 0');
        }
        else if (orderFlags !== 0 && goodTilBlockTime === 0) {
            throw new Error('goodTilBlockTime must be set if orderFlags is not 0');
        }
    }
    wrapMessageAsAny(registry, message) {
        return registry.encodeAsAny(message);
    }
    wrapMessageArrAsAny(registry, messages) {
        const encodedMessages = messages.map((message) => this.wrapMessageAsAny(registry, message));
        return encodedMessages;
    }
}
//# sourceMappingURL=msg.builder.js.map