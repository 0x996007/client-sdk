import Long from 'long';
import {
  Order_ConditionType,
  Order_Side,
  Order_TimeInForce,
} from '../protos/types.js';
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

// Information for signing a transaction while offline - without sequence.
export interface PartialTransactionOptions {
  accountNumber: number;
  chainId: string;
}

// Information for signing a transaction while offline.
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ICancelOrder extends IBasicOrder {}

export interface IBatchCancelOrder {
  shortTermOrders: { clobPairId: number; clientIds: number[] }[];
  goodTilBlock: number;
}

// How long to wait and how often to check when calling Broadcast with
// Method.BroadcastTxCommit
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

// How long to wait and how often to check when calling Broadcast with
// Method.BroadcastTxCommit
export interface BroadcastOptions {
  broadcastPollIntervalMs: number;
  broadcastTimeoutMs: number;
}

// Options for connecting to centralized APIs like indexer or faucet.
export interface ApiOptions {
  faucetHost?: string;
  indexerHost?: string;
  timeout?: number;
}

// Defines the options for a transaction.
export interface Options {
  transactionOptions?: TransactionOptions;
  memo?: string;
  broadcastMode?: BroadcastMode;
  fee?: StdFee;
}
