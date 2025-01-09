/* eslint-disable @typescript-eslint/no-empty-object-type */
import Long from 'long';
// OrderFlags, just a number in proto, defined as enum for convenience
export var OrderFlags;
(function (OrderFlags) {
    OrderFlags[OrderFlags["SHORT_TERM"] = 0] = "SHORT_TERM";
    OrderFlags[OrderFlags["LONG_TERM"] = 64] = "LONG_TERM";
    OrderFlags[OrderFlags["CONDITIONAL"] = 32] = "CONDITIONAL";
})(OrderFlags || (OrderFlags = {}));
// Chain ID
export const DEV_CHAIN_ID = 'dydxprotocol-testnet';
export const STAGING_CHAIN_ID = 'dydxprotocol-testnet';
export const TESTNET_CHAIN_ID = 'dydx-testnet-4';
export const LOCAL_CHAIN_ID = 'localdydxprotocol';
// For the deployment by DYDX token holders
export const MAINNET_CHAIN_ID = 'dydx-mainnet-1';
// ------------ API URLs ------------
export var IndexerApiHost;
(function (IndexerApiHost) {
    IndexerApiHost["TESTNET"] = "https://indexer.v4testnet.dydx.exchange/";
    IndexerApiHost["STAGING"] = "https://indexer.v4staging.dydx.exchange/";
    IndexerApiHost["LOCAL"] = "http://localhost:3002";
    // For the deployment by DYDX token holders
    IndexerApiHost["MAINNET"] = "https://indexer.dydx.trade";
})(IndexerApiHost || (IndexerApiHost = {}));
export var IndexerWSHost;
(function (IndexerWSHost) {
    IndexerWSHost["TESTNET"] = "wss://indexer.v4testnet.dydx.exchange/v4/ws";
    IndexerWSHost["STAGING"] = "wss://indexer.v4staging.dydx.exchange/v4/ws";
    IndexerWSHost["LOCAL"] = "ws://localhost:3003";
    // For the deployment by DYDX token holders
    IndexerWSHost["MAINNET"] = "wss://indexer.dydx.trade/v4/ws";
})(IndexerWSHost || (IndexerWSHost = {}));
export var FaucetApiHost;
(function (FaucetApiHost) {
    FaucetApiHost["TESTNET"] = "https://faucet.v4testnet.dydx.exchange";
})(FaucetApiHost || (FaucetApiHost = {}));
export var ValidatorApiHost;
(function (ValidatorApiHost) {
    ValidatorApiHost["TESTNET"] = "https://test-dydx-rpc.kingnodes.com";
    ValidatorApiHost["STAGING"] = "https://validator.v4staging.dydx.exchange";
    ValidatorApiHost["LOCAL"] = "http://localhost:26657";
    // For the deployment by DYDX token holders
    ValidatorApiHost["MAINNET"] = "https://dydx-ops-rpc.kingnodes.com:443";
})(ValidatorApiHost || (ValidatorApiHost = {}));
// ------------ Network IDs ------------
export var NetworkId;
(function (NetworkId) {
    NetworkId["TESTNET"] = "dydx-testnet-4";
    // For the deployment by DYDX token holders
    NetworkId["MAINNET"] = "dydx-mainnet-1";
})(NetworkId || (NetworkId = {}));
export const NETWORK_ID_TESTNET = 'dydxprotocol-testnet';
// For the deployment by DYDX token holders
export const NETWORK_ID_MAINNET = 'dydx-mainnet-1';
// ------------ Gas Denoms ------------
export var SelectedGasDenom;
(function (SelectedGasDenom) {
    SelectedGasDenom["NATIVE"] = "NATIVE";
    SelectedGasDenom["USDC"] = "USDC";
})(SelectedGasDenom || (SelectedGasDenom = {}));
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
export const TYPE_URL_MSG_CREATE_CLOB_PAIR = '/dydxprotocol.clob.MsgCreateClobPair';
export const TYPE_URL_MSG_UPDATE_CLOB_PAIR = '/dydxprotocol.clob.MsgUpdateClobPair';
// x/delaymsg
export const TYPE_URL_MSG_DELAY_MESSAGE = '/dydxprotocol.delaymsg.MsgDelayMessage';
// x/listing
export const TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS = '/dydxprotocol.listing.MsgCreateMarketPermissionless';
// x/perpetuals
export const TYPE_URL_MSG_CREATE_PERPETUAL = '/dydxprotocol.perpetuals.MsgCreatePerpetual';
// x/prices
export const TYPE_URL_MSG_CREATE_ORACLE_MARKET = '/dydxprotocol.prices.MsgCreateOracleMarket';
// x/sending
export const TYPE_URL_MSG_CREATE_TRANSFER = '/dydxprotocol.sending.MsgCreateTransfer';
export const TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT = '/dydxprotocol.sending.MsgWithdrawFromSubaccount';
export const TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT = '/dydxprotocol.sending.MsgDepositToSubaccount';
// x/affiliates
export const TYPE_URL_MSG_REGISTER_AFFILIATE = '/dydxprotocol.affiliates.MsgRegisterAffiliate';
// x/vault
export const TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT = '/dydxprotocol.vault.MsgDepositToMegavault';
export const TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT = '/dydxprotocol.vault.MsgWithdrawFromMegavault';
// x/staking
export const TYPE_URL_MSG_DELEGATE = '/cosmos.staking.v1beta1.MsgDelegate';
export const TYPE_URL_MSG_UNDELEGATE = '/cosmos.staking.v1beta1.MsgUndelegate';
// x/distribution
export const TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD = '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
// ------------ Chain Constants ------------
// The following are same across different networks / deployments.
export const GOV_MODULE_ADDRESS = 'dydx10d07y265gmmuvt4z0w9aw880jnsr700jnmapky';
export const DELAYMSG_MODULE_ADDRESS = 'dydx1mkkvp26dngu6n8rmalaxyp3gwkjuzztq5zx6tr';
export const MEGAVAULT_MODULE_ADDRESS = 'dydx18tkxrnrkqc2t0lr3zxr5g6a4hdvqksylxqje4r';
// ------------ Market Statistic Day Types ------------
export var MarketStatisticDay;
(function (MarketStatisticDay) {
    MarketStatisticDay["ONE"] = "1";
    MarketStatisticDay["SEVEN"] = "7";
    MarketStatisticDay["THIRTY"] = "30";
})(MarketStatisticDay || (MarketStatisticDay = {}));
// ------------ Order Types ------------
// This should match OrderType in Abacus
export var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT";
    OrderType["STOP_MARKET"] = "STOP_MARKET";
    OrderType["TAKE_PROFIT_MARKET"] = "TAKE_PROFIT_MARKET";
})(OrderType || (OrderType = {}));
// ------------ Order Side ------------
// This should match OrderSide in Abacus
export var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide || (OrderSide = {}));
// ------------ Order TimeInForce ------------
// This should match OrderTimeInForce in Abacus
export var OrderTimeInForce;
(function (OrderTimeInForce) {
    OrderTimeInForce["GTT"] = "GTT";
    OrderTimeInForce["IOC"] = "IOC";
    OrderTimeInForce["FOK"] = "FOK";
})(OrderTimeInForce || (OrderTimeInForce = {}));
// ------------ Order Execution ------------
// This should match OrderExecution in Abacus
export var OrderExecution;
(function (OrderExecution) {
    OrderExecution["DEFAULT"] = "DEFAULT";
    OrderExecution["IOC"] = "IOC";
    OrderExecution["FOK"] = "FOK";
    OrderExecution["POST_ONLY"] = "POST_ONLY";
})(OrderExecution || (OrderExecution = {}));
// ------------ Order Status ------------
// This should match OrderStatus in Abacus
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["BEST_EFFORT_OPENED"] = "BEST_EFFORT_OPENED";
    OrderStatus["OPEN"] = "OPEN";
    OrderStatus["FILLED"] = "FILLED";
    OrderStatus["BEST_EFFORT_CANCELED"] = "BEST_EFFORT_CANCELED";
    OrderStatus["CANCELED"] = "CANCELED";
})(OrderStatus || (OrderStatus = {}));
export var TickerType;
(function (TickerType) {
    TickerType["PERPETUAL"] = "PERPETUAL";
})(TickerType || (TickerType = {}));
export var PositionStatus;
(function (PositionStatus) {
    PositionStatus["OPEN"] = "OPEN";
    PositionStatus["CLOSED"] = "CLOSED";
    PositionStatus["LIQUIDATED"] = "LIQUIDATED";
})(PositionStatus || (PositionStatus = {}));
// ----------- Time Period for Sparklines -------------
export var TimePeriod;
(function (TimePeriod) {
    TimePeriod["ONE_DAY"] = "ONE_DAY";
    TimePeriod["SEVEN_DAYS"] = "SEVEN_DAYS";
})(TimePeriod || (TimePeriod = {}));
export var PnlTickInterval;
(function (PnlTickInterval) {
    PnlTickInterval["HOUR"] = "hour";
    PnlTickInterval["day"] = "day";
})(PnlTickInterval || (PnlTickInterval = {}));
export var TradingRewardAggregationPeriod;
(function (TradingRewardAggregationPeriod) {
    TradingRewardAggregationPeriod["DAILY"] = "DAILY";
    TradingRewardAggregationPeriod["WEEKLY"] = "WEEKLY";
    TradingRewardAggregationPeriod["MONTHLY"] = "MONTHLY";
})(TradingRewardAggregationPeriod || (TradingRewardAggregationPeriod = {}));
// ------------ API Defaults ------------
export const DEFAULT_API_TIMEOUT = 3_000;
export const MAX_MEMO_CHARACTERS = 256;
export const SHORT_BLOCK_WINDOW = 20;
export const SHORT_BLOCK_FORWARD = 3;
// Bech32 Prefix
export const BECH32_PREFIX = 'dydx';
export const NOBLE_BECH32_PREFIX = 'noble';
// Broadcast Defaults
export const BROADCAST_POLL_INTERVAL_MS = 300;
export const BROADCAST_TIMEOUT_MS = 8_000;
// API Defaults
export const API_TIMEOUT_DEFAULT_MS = 5_000;
// Gas
export const GAS_MULTIPLIER = 1.6;
export const ZERO_FEE = {
    amount: [],
    gas: '0',
};
// Validation
export const MAX_UINT_32 = 4_294_967_295;
export const MAX_SUBACCOUNT_NUMBER = 128_000;
export const DEFAULT_SEQUENCE = 0;
export const SERIALIZED_INT_ZERO = Uint8Array.from([0x02]);
// Querying
export const PAGE_REQUEST = {
    key: new Uint8Array(),
    offset: Long.UZERO,
    limit: Long.MAX_UNSIGNED_VALUE,
    countTotal: true,
    reverse: false,
};
export class IndexerConfig {
    restEndpoint;
    websocketEndpoint;
    constructor(restEndpoint, websocketEndpoint) {
        this.restEndpoint = restEndpoint;
        this.websocketEndpoint = websocketEndpoint;
    }
}
export class ValidatorConfig {
    restEndpoint;
    chainId;
    denoms;
    broadcastOptions;
    defaultClientMemo;
    useTimestampNonce;
    constructor(restEndpoint, chainId, denoms, broadcastOptions, defaultClientMemo, useTimestampNonce) {
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
    env;
    indexerConfig;
    validatorConfig;
    constructor(env, indexerConfig, validatorConfig) {
        this.env = env;
        this.indexerConfig = indexerConfig;
        this.validatorConfig = validatorConfig;
    }
    static testnet() {
        const indexerConfig = new IndexerConfig(IndexerApiHost.TESTNET, IndexerWSHost.TESTNET);
        const validatorConfig = new ValidatorConfig(ValidatorApiHost.TESTNET, TESTNET_CHAIN_ID, {
            CHAINTOKEN_DENOM: 'adv4tnt',
            USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            USDC_GAS_DENOM: 'uusdc',
            USDC_DECIMALS: 6,
            CHAINTOKEN_DECIMALS: 18,
        }, undefined, 'Client Example');
        return new Network('testnet', indexerConfig, validatorConfig);
    }
    static staging() {
        const indexerConfig = new IndexerConfig(IndexerApiHost.STAGING, IndexerWSHost.STAGING);
        const validatorConfig = new ValidatorConfig(ValidatorApiHost.STAGING, TESTNET_CHAIN_ID, {
            CHAINTOKEN_DENOM: 'adv4tnt',
            USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            USDC_GAS_DENOM: 'uusdc',
            USDC_DECIMALS: 6,
            CHAINTOKEN_DECIMALS: 18,
        }, undefined, 'Client Example');
        return new Network('staging', indexerConfig, validatorConfig);
    }
    static local() {
        const indexerConfig = new IndexerConfig(IndexerApiHost.LOCAL, IndexerWSHost.LOCAL);
        const validatorConfig = new ValidatorConfig(ValidatorApiHost.LOCAL, LOCAL_CHAIN_ID, {
            CHAINTOKEN_DENOM: 'adv4tnt',
            USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            USDC_GAS_DENOM: 'uusdc',
            USDC_DECIMALS: 6,
            CHAINTOKEN_DECIMALS: 18,
        }, undefined, 'Client Example');
        return new Network('local', indexerConfig, validatorConfig);
    }
    // For the deployment by DYDX token holders.
    static mainnet() {
        const indexerConfig = new IndexerConfig(IndexerApiHost.MAINNET, IndexerWSHost.MAINNET);
        const validatorConfig = new ValidatorConfig(ValidatorApiHost.MAINNET, MAINNET_CHAIN_ID, {
            CHAINTOKEN_DENOM: 'adydx',
            USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            USDC_GAS_DENOM: 'uusdc',
            USDC_DECIMALS: 6,
            CHAINTOKEN_DECIMALS: 18,
        }, undefined, 'Client Example');
        return new Network('mainnet', indexerConfig, validatorConfig);
    }
    getString() {
        return this.env;
    }
}
export var ClobPairId;
(function (ClobPairId) {
    ClobPairId[ClobPairId["PERPETUAL_PAIR_BTC_USD"] = 0] = "PERPETUAL_PAIR_BTC_USD";
    ClobPairId[ClobPairId["PERPETUAL_PAIR_ETH_USD"] = 1] = "PERPETUAL_PAIR_ETH_USD";
})(ClobPairId || (ClobPairId = {}));
//# sourceMappingURL=types.js.map