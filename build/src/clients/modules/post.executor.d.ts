import { EncodeObject } from '@cosmjs/proto-signing';
import { Account, GasPrice, IndexedTx, StdFee } from '@cosmjs/stargate';
import { BroadcastTxAsyncResponse, BroadcastTxSyncResponse } from '@cosmjs/tendermint-rpc/build/tendermint37';
import Long from 'long';
import { SelectedGasDenom, OrderFlags, BroadcastMode, IPlaceOrder, ICancelOrder, ServerNetwork, DenomToken } from '../../common/index.js';
import { MsgBuilder } from '../base/msg.builder.js';
import { QueryExecutor } from './query.executor.js';
import { ClientWallet } from '../base/client.wallet.js';
import { OrderBatch, Order_ConditionType, Order_Side, Order_TimeInForce } from '../../protos/types.js';
import { SubaccountInfo } from '../base/sub-account.info.js';
export declare class PostExecutor {
    readonly composer: MsgBuilder;
    private readonly registry;
    private readonly chainId;
    private readonly network;
    readonly get: QueryExecutor;
    readonly defaultClientMemo?: string;
    selectedGasDenom: SelectedGasDenom;
    useTimestampNonce: boolean;
    private accountNumberCache;
    constructor(query: QueryExecutor, network: ServerNetwork);
    getGasDenomToken(denom?: SelectedGasDenom): DenomToken | undefined;
    /**
     * @description Retrieves the account number for the given wallet address and populates the accountNumberCache.
     * The account number is required for txOptions when signing a transaction.
     * Pre-populating the cache avoids a round-trip request during the first transaction creation in the session, preventing it from being a performance blocker.
     */
    populateAccountNumberCache(address: string): Promise<void>;
    setSelectedGasDenom(denom: SelectedGasDenom): void;
    getGasPrice(denom?: SelectedGasDenom): GasPrice;
    /**
     * @description Simulate a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Fee for broadcasting a transaction.
     */
    simulate(wallet: ClientWallet, messaging: () => Promise<EncodeObject[]>, gasPrice?: GasPrice, memo?: string, account?: () => Promise<Account>): Promise<StdFee>;
    /**
     * @description Sign a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Signature.
     */
    sign(wallet: ClientWallet, messaging: () => Promise<EncodeObject[]>, zeroFee: boolean, gasPrice?: GasPrice, memo?: string, account?: () => Promise<Account>): Promise<Uint8Array>;
    /**
     * @description Send a transaction
     * the calling function is responsible for creating the messages.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Tx Hash.
     */
    send(wallet: ClientWallet, messaging: () => Promise<EncodeObject[]>, zeroFee: boolean, gasPrice?: GasPrice, memo?: string, broadcastMode?: BroadcastMode, account?: () => Promise<Account>, gasAdjustment?: number): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    /**
     * @description Calculate the default broadcast mode.
     */
    private defaultBroadcastMode;
    /**
     * @description Sign and send a message
     *
     * @returns The Tx Response.
     */
    private signTransaction;
    /**
     * @description Retrieve an account structure for transactions.
     * For short term orders, the sequence doesn't matter. Use cached if available.
     * For long term and conditional orders, a round trip to validator must be made.
     * when timestamp nonce is supported, no need to fetch account sequence number
     */
    account(address: string, orderFlags?: OrderFlags): Promise<Account>;
    /**
     * @description Sign and send a message
     *
     * @returns The Tx Response.
     */
    private signAndSendTransaction;
    /**
     * @description Send signed transaction.
     *
     * @returns The Tx Response.
     */
    sendSignedTransaction(signedTransaction: Uint8Array, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    /**
     * @description Simulate broadcasting a transaction.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error
     * at any point.
     * @returns The Fee for broadcasting a transaction.
     */
    private simulateTransaction;
    placeOrder(subaccount: SubaccountInfo, clientId: number, clobPairId: number, side: Order_Side, quantums: Long, subticks: Long, timeInForce: Order_TimeInForce, orderFlags: number, reduceOnly: boolean, goodTilBlock?: number, goodTilBlockTime?: number, clientMetadata?: number, conditionType?: Order_ConditionType, conditionalOrderTriggerSubticks?: Long, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    placeOrderMsg(address: string, subaccountNumber: number, clientId: number, clobPairId: number, side: Order_Side, quantums: Long, subticks: Long, timeInForce: Order_TimeInForce, orderFlags: number, reduceOnly: boolean, goodTilBlock?: number, goodTilBlockTime?: number, clientMetadata?: number, conditionType?: Order_ConditionType, conditionalOrderTriggerSubticks?: Long): Promise<EncodeObject>;
    placeOrderObject(subaccount: SubaccountInfo, placeOrder: IPlaceOrder, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    cancelOrder(subaccount: SubaccountInfo, clientId: number, orderFlags: OrderFlags, clobPairId: number, goodTilBlock?: number, goodTilBlockTime?: number, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    cancelOrderMsg(address: string, subaccountNumber: number, clientId: number, orderFlags: OrderFlags, clobPairId: number, goodTilBlock?: number, goodTilBlockTime?: number): Promise<EncodeObject>;
    cancelOrderObject(subaccount: SubaccountInfo, cancelOrder: ICancelOrder, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    batchCancelShortTermOrders(subaccount: SubaccountInfo, shortTermOrders: OrderBatch[], goodTilBlock: number, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    batchCancelShortTermOrdersMsg(address: string, subaccountNumber: number, shortTermOrders: OrderBatch[], goodTilBlock: number): Promise<EncodeObject>;
    transfer(subaccount: SubaccountInfo, recipientAddress: string, recipientSubaccountNumber: number, assetId: number, amount: Long, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    transferMsg(address: string, subaccountNumber: number, recipientAddress: string, recipientSubaccountNumber: number, assetId: number, amount: Long): Promise<EncodeObject>;
    deposit(subaccount: SubaccountInfo, assetId: number, quantums: Long, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    depositMsg(address: string, subaccountNumber: number, assetId: number, quantums: Long): Promise<EncodeObject>;
    withdraw(subaccount: SubaccountInfo, assetId: number, quantums: Long, recipient?: string, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    withdrawMsg(address: string, subaccountNumber: number, assetId: number, quantums: Long, recipient?: string): Promise<EncodeObject>;
    sendToken(subaccount: SubaccountInfo, recipient: string, coinDenom: string, quantums: string, zeroFee?: boolean, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    sendTokenMsg(address: string, recipient: string, coinDenom: string, quantums: string): Promise<EncodeObject>;
    delegate(subaccount: SubaccountInfo, delegator: string, validator: string, amount: string, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    delegateMsg(delegator: string, validator: string, amount: string): EncodeObject;
    undelegate(subaccount: SubaccountInfo, delegator: string, validator: string, amount: string, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    undelegateMsg(delegator: string, validator: string, amount: string): EncodeObject;
    withdrawDelegatorReward(subaccount: SubaccountInfo, delegator: string, validator: string, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    withdrawDelegatorRewardMsg(delegator: string, validator: string): EncodeObject;
    depositToMegavault(subaccount: SubaccountInfo, quoteQuantums: Uint8Array, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    depositToMegavaultMsg(...args: Parameters<MsgBuilder['composeMsgDepositToMegavault']>): EncodeObject;
    withdrawFromMegavault(subaccount: SubaccountInfo, shares: Uint8Array, minQuoteQuantums: Uint8Array, broadcastMode?: BroadcastMode): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    withdrawFromMegavaultMsg(...args: Parameters<MsgBuilder['composeMsgWithdrawFromMegavault']>): EncodeObject;
    registerAffiliate(subaccount: SubaccountInfo, affiliate: string, broadcastMode?: BroadcastMode, gasAdjustment?: number): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
    registerAffiliateMsg(...args: Parameters<MsgBuilder['composeMsgRegisterAffiliate']>): EncodeObject;
    launchMarketMsg(...args: Parameters<MsgBuilder['composeMsgCreateMarketPermissionless']>): EncodeObject;
    createMarketPermissionless(ticker: string, subaccount: SubaccountInfo, broadcastMode?: BroadcastMode, gasAdjustment?: number, memo?: string): Promise<BroadcastTxAsyncResponse | BroadcastTxSyncResponse | IndexedTx>;
}
