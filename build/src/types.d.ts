import Long from 'long';
import { PageRequest } from './protos/cosmos/base/query/v1beta1/pagination.js';
import { PerpetualMarketType } from './protos/protocol/perpetuals/perpetual.js';
import { Coin } from '@cosmjs/proto-signing';
import { Method } from '@cosmjs/tendermint-rpc';
import { Order_ConditionType, Order_Side, Order_TimeInForce } from './protos/protocol/clob/order.js';
import { BigNumber } from 'bignumber.js';
import { StdFee } from '@cosmjs/stargate';
export type Integer = BigNumber;
export type GenericParams = {
    [name: string]: any;
};
export type Data = any;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface PartialTransactionOptions {
    accountNumber: number;
    chainId: string;
}
export interface TransactionOptions extends PartialTransactionOptions {
    sequence: number;
}
export declare enum OrderFlags {
    SHORT_TERM = 0,
    LONG_TERM = 64,
    CONDITIONAL = 32
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
export interface DenomConfig {
    USDC_DENOM: string;
    USDC_DECIMALS: number;
    USDC_GAS_DENOM?: string;
    CHAINTOKEN_DENOM: string;
    CHAINTOKEN_DECIMALS: number;
    CHAINTOKEN_GAS_DENOM?: string;
}
export type BroadcastMode = Method.BroadcastTxAsync | Method.BroadcastTxSync | Method.BroadcastTxCommit;
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
export type GovAddNewMarketParams = {
    id: number;
    ticker: string;
    priceExponent: number;
    minPriceChange: number;
    minExchanges: number;
    exchangeConfigJson: string;
    liquidityTier: number;
    atomicResolution: number;
    marketType: PerpetualMarketType;
    quantumConversionExponent: number;
    stepBaseQuantums: Long;
    subticksPerTick: number;
    delayBlocks: number;
};
export declare const DEV_CHAIN_ID = "dydxprotocol-testnet";
export declare const STAGING_CHAIN_ID = "dydxprotocol-testnet";
export declare const TESTNET_CHAIN_ID = "dydx-testnet-4";
export declare const LOCAL_CHAIN_ID = "localdydxprotocol";
export declare const MAINNET_CHAIN_ID = "dydx-mainnet-1";
export declare enum IndexerApiHost {
    TESTNET = "https://indexer.v4testnet.dydx.exchange/",
    STAGING = "https://indexer.v4staging.dydx.exchange/",
    LOCAL = "http://localhost:3002",
    MAINNET = "https://indexer.dydx.trade"
}
export declare enum IndexerWSHost {
    TESTNET = "wss://indexer.v4testnet.dydx.exchange/v4/ws",
    STAGING = "wss://indexer.v4staging.dydx.exchange/v4/ws",
    LOCAL = "ws://localhost:3003",
    MAINNET = "wss://indexer.dydx.trade/v4/ws"
}
export declare enum FaucetApiHost {
    TESTNET = "https://faucet.v4testnet.dydx.exchange"
}
export declare enum ValidatorApiHost {
    TESTNET = "https://test-dydx-rpc.kingnodes.com",
    STAGING = "https://validator.v4staging.dydx.exchange",
    LOCAL = "http://localhost:26657",
    MAINNET = "https://dydx-ops-rpc.kingnodes.com:443"
}
export declare enum NetworkId {
    TESTNET = "dydx-testnet-4",
    MAINNET = "dydx-mainnet-1"
}
export declare const NETWORK_ID_TESTNET: string;
export declare const NETWORK_ID_MAINNET: string;
export declare enum SelectedGasDenom {
    NATIVE = "NATIVE",
    USDC = "USDC"
}
export declare const TYPE_URL_MSG_SEND = "/cosmos.bank.v1beta1.MsgSend";
export declare const TYPE_URL_MSG_SUBMIT_PROPOSAL = "/cosmos.gov.v1.MsgSubmitProposal";
export declare const TYPE_URL_MSG_PLACE_ORDER = "/dydxprotocol.clob.MsgPlaceOrder";
export declare const TYPE_URL_MSG_CANCEL_ORDER = "/dydxprotocol.clob.MsgCancelOrder";
export declare const TYPE_URL_BATCH_CANCEL = "/dydxprotocol.clob.MsgBatchCancel";
export declare const TYPE_URL_MSG_CREATE_CLOB_PAIR = "/dydxprotocol.clob.MsgCreateClobPair";
export declare const TYPE_URL_MSG_UPDATE_CLOB_PAIR = "/dydxprotocol.clob.MsgUpdateClobPair";
export declare const TYPE_URL_MSG_DELAY_MESSAGE = "/dydxprotocol.delaymsg.MsgDelayMessage";
export declare const TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS = "/dydxprotocol.listing.MsgCreateMarketPermissionless";
export declare const TYPE_URL_MSG_CREATE_PERPETUAL = "/dydxprotocol.perpetuals.MsgCreatePerpetual";
export declare const TYPE_URL_MSG_CREATE_ORACLE_MARKET = "/dydxprotocol.prices.MsgCreateOracleMarket";
export declare const TYPE_URL_MSG_CREATE_TRANSFER = "/dydxprotocol.sending.MsgCreateTransfer";
export declare const TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT = "/dydxprotocol.sending.MsgWithdrawFromSubaccount";
export declare const TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT = "/dydxprotocol.sending.MsgDepositToSubaccount";
export declare const TYPE_URL_MSG_REGISTER_AFFILIATE = "/dydxprotocol.affiliates.MsgRegisterAffiliate";
export declare const TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT = "/dydxprotocol.vault.MsgDepositToMegavault";
export declare const TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT = "/dydxprotocol.vault.MsgWithdrawFromMegavault";
export declare const TYPE_URL_MSG_DELEGATE = "/cosmos.staking.v1beta1.MsgDelegate";
export declare const TYPE_URL_MSG_UNDELEGATE = "/cosmos.staking.v1beta1.MsgUndelegate";
export declare const TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
export declare const GOV_MODULE_ADDRESS = "dydx10d07y265gmmuvt4z0w9aw880jnsr700jnmapky";
export declare const DELAYMSG_MODULE_ADDRESS = "dydx1mkkvp26dngu6n8rmalaxyp3gwkjuzztq5zx6tr";
export declare const MEGAVAULT_MODULE_ADDRESS = "dydx18tkxrnrkqc2t0lr3zxr5g6a4hdvqksylxqje4r";
export declare enum MarketStatisticDay {
    ONE = "1",
    SEVEN = "7",
    THIRTY = "30"
}
export declare enum OrderType {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP_LIMIT = "STOP_LIMIT",
    TAKE_PROFIT_LIMIT = "TAKE_PROFIT",
    STOP_MARKET = "STOP_MARKET",
    TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET"
}
export declare enum OrderSide {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum OrderTimeInForce {
    GTT = "GTT",
    IOC = "IOC",
    FOK = "FOK"
}
export declare enum OrderExecution {
    DEFAULT = "DEFAULT",
    IOC = "IOC",
    FOK = "FOK",
    POST_ONLY = "POST_ONLY"
}
export declare enum OrderStatus {
    BEST_EFFORT_OPENED = "BEST_EFFORT_OPENED",
    OPEN = "OPEN",
    FILLED = "FILLED",
    BEST_EFFORT_CANCELED = "BEST_EFFORT_CANCELED",
    CANCELED = "CANCELED"
}
export declare enum TickerType {
    PERPETUAL = "PERPETUAL"
}
export declare enum PositionStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    LIQUIDATED = "LIQUIDATED"
}
export declare enum TimePeriod {
    ONE_DAY = "ONE_DAY",
    SEVEN_DAYS = "SEVEN_DAYS"
}
export declare enum PnlTickInterval {
    HOUR = "hour",
    day = "day"
}
export declare enum TradingRewardAggregationPeriod {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY"
}
export declare const DEFAULT_API_TIMEOUT: number;
export declare const MAX_MEMO_CHARACTERS: number;
export declare const SHORT_BLOCK_WINDOW: number;
export declare const SHORT_BLOCK_FORWARD: number;
export declare const BECH32_PREFIX = "dydx";
export declare const NOBLE_BECH32_PREFIX = "noble";
export declare const BROADCAST_POLL_INTERVAL_MS: number;
export declare const BROADCAST_TIMEOUT_MS: number;
export declare const API_TIMEOUT_DEFAULT_MS: number;
export declare const GAS_MULTIPLIER: number;
export declare const ZERO_FEE: StdFee;
export declare const MAX_UINT_32 = 4294967295;
export declare const MAX_SUBACCOUNT_NUMBER = 128000;
export declare const DEFAULT_SEQUENCE: number;
export declare const SERIALIZED_INT_ZERO: Uint8Array;
export declare const PAGE_REQUEST: PageRequest;
export declare class IndexerConfig {
    restEndpoint: string;
    websocketEndpoint: string;
    constructor(restEndpoint: string, websocketEndpoint: string);
}
export declare class ValidatorConfig {
    restEndpoint: string;
    chainId: string;
    denoms: DenomConfig;
    broadcastOptions?: BroadcastOptions;
    defaultClientMemo?: string;
    useTimestampNonce?: boolean;
    constructor(restEndpoint: string, chainId: string, denoms: DenomConfig, broadcastOptions?: BroadcastOptions, defaultClientMemo?: string, useTimestampNonce?: boolean);
}
export declare class Network {
    env: string;
    indexerConfig: IndexerConfig;
    validatorConfig: ValidatorConfig;
    constructor(env: string, indexerConfig: IndexerConfig, validatorConfig: ValidatorConfig);
    static testnet(): Network;
    static staging(): Network;
    static local(): Network;
    static mainnet(): Network;
    getString(): string;
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
export declare enum ClobPairId {
    PERPETUAL_PAIR_BTC_USD = 0,
    PERPETUAL_PAIR_ETH_USD = 1
}
