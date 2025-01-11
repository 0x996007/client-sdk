import { Method } from '@cosmjs/tendermint-rpc';
export declare enum OrderFlags {
    SHORT_TERM = 0,
    LONG_TERM = 64,
    CONDITIONAL = 32
}
export type BroadcastMode = Method.BroadcastTxAsync | Method.BroadcastTxSync | Method.BroadcastTxCommit;
export declare enum SelectedGasDenom {
    NATIVE = "NATIVE",
    USDC = "USDC"
}
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
export declare enum ClobPairId {
    PERPETUAL_PAIR_BTC_USD = 0,
    PERPETUAL_PAIR_ETH_USD = 1
}
