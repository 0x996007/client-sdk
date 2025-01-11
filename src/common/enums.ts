import { Method } from '@cosmjs/tendermint-rpc';

export enum OrderFlags {
  SHORT_TERM = 0,
  LONG_TERM = 64,
  CONDITIONAL = 32,
}

export type BroadcastMode =
  | Method.BroadcastTxAsync
  | Method.BroadcastTxSync
  | Method.BroadcastTxCommit;

export enum SelectedGasDenom {
  NATIVE = 'NATIVE',
  USDC = 'USDC',
}

export enum MarketStatisticDay {
  ONE = '1',
  SEVEN = '7',
  THIRTY = '30',
}

// ------------ Orders Start------------
export enum OrderType {
  LIMIT = 'LIMIT',
  MARKET = 'MARKET',
  STOP_LIMIT = 'STOP_LIMIT',
  TAKE_PROFIT_LIMIT = 'TAKE_PROFIT',
  STOP_MARKET = 'STOP_MARKET',
  TAKE_PROFIT_MARKET = 'TAKE_PROFIT_MARKET',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderTimeInForce {
  GTT = 'GTT',
  IOC = 'IOC',
  FOK = 'FOK',
}

export enum OrderExecution {
  DEFAULT = 'DEFAULT',
  IOC = 'IOC',
  FOK = 'FOK',
  POST_ONLY = 'POST_ONLY',
}

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
// ------------ Orders End------------
// ----------- Time Periods Start -------------

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
// ----------- Time Periods End -------------

export enum ClobPairId {
  PERPETUAL_PAIR_BTC_USD = 0,
  PERPETUAL_PAIR_ETH_USD = 1,
}
