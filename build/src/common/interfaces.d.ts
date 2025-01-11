import Long from 'long';
import { Order_ConditionType, Order_Side, Order_TimeInForce } from '../protos/types.js';
import { BroadcastMode, OrderFlags, SelectedGasDenom } from './enums.js';
import { StdFee } from '@cosmjs/stargate';
export interface DenomToken {
    denom: SelectedGasDenom;
    address: string;
    symbol: string;
    decimals: number;
}
export interface ServerNetwork {
    id: string;
    reader: string;
    executor: string;
    socket: string;
    gasDenomConfig: {
        [SelectedGasDenom.NATIVE]: DenomToken;
        [SelectedGasDenom.USDC]: DenomToken;
    };
    defaultClientMemo?: string;
    useTimestampNonce?: boolean;
}
export interface DepositToken {
    id: number;
    chainId: number;
    symbol: string;
    address: string;
    contractAddress: string;
    decimals: number;
}
export interface PartialTransactionOptions {
    accountNumber: number;
    chainId: string;
}
export interface TransactionOptions extends PartialTransactionOptions {
    sequence: number;
}
export interface IBasicOrder {
    clientId: number;
    orderFlags: OrderFlags;
    clobPairId: number;
    goodTilBlock?: number;
    goodTilBlockTime?: number;
}
export interface IPlaceOrder extends IBasicOrder {
    side: Order_Side;
    quantums: Long;
    subticks: Long;
    timeInForce: Order_TimeInForce;
    reduceOnly: boolean;
    clientMetadata: number;
    conditionType?: Order_ConditionType;
    conditionalOrderTriggerSubticks?: Long;
}
export interface ICancelOrder extends IBasicOrder {
}
export interface IBatchCancelOrder {
    shortTermOrders: {
        clobPairId: number;
        clientIds: number[];
    }[];
    goodTilBlock: number;
}
export interface BroadcastOptions {
    broadcastPollIntervalMs: number;
    broadcastTimeoutMs: number;
}
export interface TimeResponse {
    iso: string;
    epoch: number;
}
export interface HeightResponse {
    height: number;
    time: string;
}
export interface ComplianceResponse {
    restricted: boolean;
}
export interface BroadcastOptions {
    broadcastPollIntervalMs: number;
    broadcastTimeoutMs: number;
}
export interface ApiOptions {
    faucetHost?: string;
    indexerHost?: string;
    timeout?: number;
}
export interface Options {
    transactionOptions?: TransactionOptions;
    memo?: string;
    broadcastMode?: BroadcastMode;
    fee?: StdFee;
}
