/* eslint-disable @typescript-eslint/no-empty-object-type */
import Long from 'long';
import { PageRequest } from './protos/cosmos/base/query/v1beta1/pagination.js';
import { PerpetualMarketType } from './protos/protocol/perpetuals/perpetual.js';
import { Coin } from '@cosmjs/proto-signing';
import { Method } from '@cosmjs/tendermint-rpc';
import {
  Order_ConditionType,
  Order_Side,
  Order_TimeInForce,
} from './protos/protocol/clob/order.js';
import { BigNumber } from 'bignumber.js';
import { StdFee } from '@cosmjs/stargate';

export type Integer = BigNumber;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericParams = { [name: string]: any };

// TODO: Find a better way.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Data = any;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Information for signing a transaction while offline - without sequence.
export interface PartialTransactionOptions {
  accountNumber: number;
  chainId: string;
}

// Information for signing a transaction while offline.
export interface TransactionOptions extends PartialTransactionOptions {
  sequence: number;
}

// OrderFlags, just a number in proto, defined as enum for convenience
export enum OrderFlags {
  SHORT_TERM = 0,
  LONG_TERM = 64,
  CONDITIONAL = 32,
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

export interface DenomConfig {
  USDC_DENOM: string;
  USDC_DECIMALS: number;
  USDC_GAS_DENOM?: string;

  CHAINTOKEN_DENOM: string;
  CHAINTOKEN_DECIMALS: number;
  CHAINTOKEN_GAS_DENOM?: string;
}

// Specify when a broadcast should return:
// 1. Immediately
// 2. Once the transaction is added to the memPool
// 3. Once the transaction is committed to a block
// See https://docs.cosmos.network/master/run-node/txs.html for more information
export type BroadcastMode =
  | Method.BroadcastTxAsync
  | Method.BroadcastTxSync
  | Method.BroadcastTxCommit;

// ------ Utility Endpoint Responses ------ //
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

// ------------ Squid ------------ //
export type SquidIBCPayload = {
  msgTypeUrl: '/ibc.applications.transfer.v1.MsgTransfer';
  msg: Partial<{
    sourcePort: string;
    sourceChannel: string;
    token: Coin;
    sender: string;
    receiver: string;
    timeoutTimestamp: Long;
    memo: string;
  }>;
};

// ------------ x/gov: Add New Market ------------ //

export type GovAddNewMarketParams = {
  // common
  id: number;
  ticker: string;

  // x/prices
  priceExponent: number;
  minPriceChange: number;
  minExchanges: number;
  exchangeConfigJson: string;

  // x/perpetuals
  liquidityTier: number;
  atomicResolution: number;
  marketType: PerpetualMarketType;

  // x/clob
  quantumConversionExponent: number;
  stepBaseQuantums: Long;
  subticksPerTick: number;

  // x/delaymsg
  delayBlocks: number;
};

// Chain ID
export const DEV_CHAIN_ID = 'dydxprotocol-testnet';
export const STAGING_CHAIN_ID = 'dydxprotocol-testnet';
export const TESTNET_CHAIN_ID = 'dydx-testnet-4';
export const LOCAL_CHAIN_ID = 'localdydxprotocol';
// For the deployment by DYDX token holders
export const MAINNET_CHAIN_ID = 'dydx-mainnet-1';

// ------------ API URLs ------------
export enum IndexerApiHost {
  TESTNET = 'https://indexer.v4testnet.dydx.exchange/',
  STAGING = 'https://indexer.v4staging.dydx.exchange/',
  LOCAL = 'http://localhost:3002',
  // For the deployment by DYDX token holders
  MAINNET = 'https://indexer.dydx.trade',
}

export enum IndexerWSHost {
  TESTNET = 'wss://indexer.v4testnet.dydx.exchange/v4/ws',
  STAGING = 'wss://indexer.v4staging.dydx.exchange/v4/ws',
  LOCAL = 'ws://localhost:3003',
  // For the deployment by DYDX token holders
  MAINNET = 'wss://indexer.dydx.trade/v4/ws',
}

export enum FaucetApiHost {
  TESTNET = 'https://faucet.v4testnet.dydx.exchange',
}

export enum ValidatorApiHost {
  TESTNET = 'https://test-dydx-rpc.kingnodes.com',
  STAGING = 'https://validator.v4staging.dydx.exchange',
  LOCAL = 'http://localhost:26657',
  // For the deployment by DYDX token holders
  MAINNET = 'https://dydx-ops-rpc.kingnodes.com:443',
}

// ------------ Network IDs ------------

export enum NetworkId {
  TESTNET = 'dydx-testnet-4',
  // For the deployment by DYDX token holders
  MAINNET = 'dydx-mainnet-1',
}
export const NETWORK_ID_TESTNET: string = 'dydxprotocol-testnet';
// For the deployment by DYDX token holders
export const NETWORK_ID_MAINNET: string = 'dydx-mainnet-1';

// ------------ Gas Denoms ------------
export enum SelectedGasDenom {
  NATIVE = 'NATIVE',
  USDC = 'USDC',
}

// ------------ MsgType URLs ------------
// Default CosmosSDK
// x/bank
export const TYPE_URL_MSG_SEND = '/cosmos.bank.v1beta1.MsgSend';

// x/gov
export const TYPE_URL_MSG_SUBMIT_PROPOSAL = '/cosmos.gov.v1.MsgSubmitProposal';

// dYdX Specific
// x/clob
export const TYPE_URL_MSG_PLACE_ORDER = '/dydxprotocol.clob.MsgPlaceOrder';
export const TYPE_URL_MSG_CANCEL_ORDER = '/dydxprotocol.clob.MsgCancelOrder';
export const TYPE_URL_BATCH_CANCEL = '/dydxprotocol.clob.MsgBatchCancel';
export const TYPE_URL_MSG_CREATE_CLOB_PAIR =
  '/dydxprotocol.clob.MsgCreateClobPair';
export const TYPE_URL_MSG_UPDATE_CLOB_PAIR =
  '/dydxprotocol.clob.MsgUpdateClobPair';

// x/delaymsg
export const TYPE_URL_MSG_DELAY_MESSAGE =
  '/dydxprotocol.delaymsg.MsgDelayMessage';

// x/listing
export const TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS =
  '/dydxprotocol.listing.MsgCreateMarketPermissionless';

// x/perpetuals
export const TYPE_URL_MSG_CREATE_PERPETUAL =
  '/dydxprotocol.perpetuals.MsgCreatePerpetual';

// x/prices
export const TYPE_URL_MSG_CREATE_ORACLE_MARKET =
  '/dydxprotocol.prices.MsgCreateOracleMarket';

// x/sending
export const TYPE_URL_MSG_CREATE_TRANSFER =
  '/dydxprotocol.sending.MsgCreateTransfer';
export const TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT =
  '/dydxprotocol.sending.MsgWithdrawFromSubaccount';
export const TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT =
  '/dydxprotocol.sending.MsgDepositToSubaccount';

// x/affiliates
export const TYPE_URL_MSG_REGISTER_AFFILIATE =
  '/dydxprotocol.affiliates.MsgRegisterAffiliate';

// x/vault
export const TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT =
  '/dydxprotocol.vault.MsgDepositToMegavault';
export const TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT =
  '/dydxprotocol.vault.MsgWithdrawFromMegavault';

// x/staking
export const TYPE_URL_MSG_DELEGATE = '/cosmos.staking.v1beta1.MsgDelegate';
export const TYPE_URL_MSG_UNDELEGATE = '/cosmos.staking.v1beta1.MsgUndelegate';

// x/distribution
export const TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD =
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';

// ------------ Chain Constants ------------
// The following are same across different networks / deployments.
export const GOV_MODULE_ADDRESS = 'dydx10d07y265gmmuvt4z0w9aw880jnsr700jnmapky';
export const DELAYMSG_MODULE_ADDRESS =
  'dydx1mkkvp26dngu6n8rmalaxyp3gwkjuzztq5zx6tr';
export const MEGAVAULT_MODULE_ADDRESS =
  'dydx18tkxrnrkqc2t0lr3zxr5g6a4hdvqksylxqje4r';

// ------------ Market Statistic Day Types ------------
export enum MarketStatisticDay {
  ONE = '1',
  SEVEN = '7',
  THIRTY = '30',
}

// ------------ Order Types ------------
// This should match OrderType in Abacus
export enum OrderType {
  LIMIT = 'LIMIT',
  MARKET = 'MARKET',
  STOP_LIMIT = 'STOP_LIMIT',
  TAKE_PROFIT_LIMIT = 'TAKE_PROFIT',
  STOP_MARKET = 'STOP_MARKET',
  TAKE_PROFIT_MARKET = 'TAKE_PROFIT_MARKET',
}

// ------------ Order Side ------------
// This should match OrderSide in Abacus
export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

// ------------ Order TimeInForce ------------
// This should match OrderTimeInForce in Abacus
export enum OrderTimeInForce {
  GTT = 'GTT',
  IOC = 'IOC',
  FOK = 'FOK',
}

// ------------ Order Execution ------------
// This should match OrderExecution in Abacus
export enum OrderExecution {
  DEFAULT = 'DEFAULT',
  IOC = 'IOC',
  FOK = 'FOK',
  POST_ONLY = 'POST_ONLY',
}

// ------------ Order Status ------------
// This should match OrderStatus in Abacus
export enum OrderStatus {
  BEST_EFFORT_OPENED = 'BEST_EFFORT_OPENED',
  OPEN = 'OPEN',
  FILLED = 'FILLED',
  BEST_EFFORT_CANCELED = 'BEST_EFFORT_CANCELED',
  CANCELED = 'CANCELED',
}

export enum TickerType {
  PERPETUAL = 'PERPETUAL', // Only PERPETUAL is supported right now
}

export enum PositionStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  LIQUIDATED = 'LIQUIDATED',
}

// ----------- Time Period for Sparklines -------------

export enum TimePeriod {
  ONE_DAY = 'ONE_DAY',
  SEVEN_DAYS = 'SEVEN_DAYS',
}

export enum PnlTickInterval {
  HOUR = 'hour',
  day = 'day',
}

export enum TradingRewardAggregationPeriod {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

// ------------ API Defaults ------------
export const DEFAULT_API_TIMEOUT: number = 3_000;

export const MAX_MEMO_CHARACTERS: number = 256;

export const SHORT_BLOCK_WINDOW: number = 20;

export const SHORT_BLOCK_FORWARD: number = 3;

// Bech32 Prefix
export const BECH32_PREFIX = 'dydx';
export const NOBLE_BECH32_PREFIX = 'noble';

// Broadcast Defaults
export const BROADCAST_POLL_INTERVAL_MS: number = 300;
export const BROADCAST_TIMEOUT_MS: number = 8_000;

// API Defaults
export const API_TIMEOUT_DEFAULT_MS: number = 5_000;

// Gas
export const GAS_MULTIPLIER: number = 1.6;

export const ZERO_FEE: StdFee = {
  amount: [],
  gas: '0',
};

// Validation
export const MAX_UINT_32 = 4_294_967_295;
export const MAX_SUBACCOUNT_NUMBER = 128_000;

export const DEFAULT_SEQUENCE: number = 0;

export const SERIALIZED_INT_ZERO: Uint8Array = Uint8Array.from([0x02]);

// Querying
export const PAGE_REQUEST: PageRequest = {
  key: new Uint8Array(),
  offset: Long.UZERO,
  limit: Long.MAX_UNSIGNED_VALUE,
  countTotal: true,
  reverse: false,
};

export class IndexerConfig {
  public restEndpoint: string;
  public websocketEndpoint: string;

  constructor(restEndpoint: string, websocketEndpoint: string) {
    this.restEndpoint = restEndpoint;
    this.websocketEndpoint = websocketEndpoint;
  }
}

export class ValidatorConfig {
  public restEndpoint: string;
  public chainId: string;
  public denoms: DenomConfig;
  public broadcastOptions?: BroadcastOptions;
  public defaultClientMemo?: string;
  public useTimestampNonce?: boolean;

  constructor(
    restEndpoint: string,
    chainId: string,
    denoms: DenomConfig,
    broadcastOptions?: BroadcastOptions,
    defaultClientMemo?: string,
    useTimestampNonce?: boolean,
  ) {
    this.restEndpoint = restEndpoint?.endsWith('/')
      ? restEndpoint.slice(0, -1)
      : restEndpoint;
    this.chainId = chainId;

    this.denoms = denoms;
    this.broadcastOptions = broadcastOptions;
    this.defaultClientMemo = defaultClientMemo;
    this.useTimestampNonce = useTimestampNonce;
  }
}

export class Network {
  constructor(
    public env: string,
    public indexerConfig: IndexerConfig,
    public validatorConfig: ValidatorConfig,
  ) {}

  static testnet(): Network {
    const indexerConfig = new IndexerConfig(
      IndexerApiHost.TESTNET,
      IndexerWSHost.TESTNET,
    );
    const validatorConfig = new ValidatorConfig(
      ValidatorApiHost.TESTNET,
      TESTNET_CHAIN_ID,
      {
        CHAINTOKEN_DENOM: 'adv4tnt',
        USDC_DENOM:
          'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        USDC_GAS_DENOM: 'uusdc',
        USDC_DECIMALS: 6,
        CHAINTOKEN_DECIMALS: 18,
      },
      undefined,
      'Client Example',
    );
    return new Network('testnet', indexerConfig, validatorConfig);
  }

  static staging(): Network {
    const indexerConfig = new IndexerConfig(
      IndexerApiHost.STAGING,
      IndexerWSHost.STAGING,
    );
    const validatorConfig = new ValidatorConfig(
      ValidatorApiHost.STAGING,
      TESTNET_CHAIN_ID,
      {
        CHAINTOKEN_DENOM: 'adv4tnt',
        USDC_DENOM:
          'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        USDC_GAS_DENOM: 'uusdc',
        USDC_DECIMALS: 6,
        CHAINTOKEN_DECIMALS: 18,
      },
      undefined,
      'Client Example',
    );
    return new Network('staging', indexerConfig, validatorConfig);
  }

  static local(): Network {
    const indexerConfig = new IndexerConfig(
      IndexerApiHost.LOCAL,
      IndexerWSHost.LOCAL,
    );
    const validatorConfig = new ValidatorConfig(
      ValidatorApiHost.LOCAL,
      LOCAL_CHAIN_ID,
      {
        CHAINTOKEN_DENOM: 'adv4tnt',
        USDC_DENOM:
          'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        USDC_GAS_DENOM: 'uusdc',
        USDC_DECIMALS: 6,
        CHAINTOKEN_DECIMALS: 18,
      },
      undefined,
      'Client Example',
    );
    return new Network('local', indexerConfig, validatorConfig);
  }

  // For the deployment by DYDX token holders.
  static mainnet(): Network {
    const indexerConfig = new IndexerConfig(
      IndexerApiHost.MAINNET,
      IndexerWSHost.MAINNET,
    );
    const validatorConfig = new ValidatorConfig(
      ValidatorApiHost.MAINNET,
      MAINNET_CHAIN_ID,
      {
        CHAINTOKEN_DENOM: 'adydx',
        USDC_DENOM:
          'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        USDC_GAS_DENOM: 'uusdc',
        USDC_DECIMALS: 6,
        CHAINTOKEN_DECIMALS: 18,
      },
      undefined,
      'Client Example',
    );
    return new Network('mainnet', indexerConfig, validatorConfig);
  }

  getString(): string {
    return this.env;
  }
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

export enum ClobPairId {
  PERPETUAL_PAIR_BTC_USD = 0,
  PERPETUAL_PAIR_ETH_USD = 1,
}
