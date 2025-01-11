export var OrderFlags;
(function (OrderFlags) {
    OrderFlags[OrderFlags["SHORT_TERM"] = 0] = "SHORT_TERM";
    OrderFlags[OrderFlags["LONG_TERM"] = 64] = "LONG_TERM";
    OrderFlags[OrderFlags["CONDITIONAL"] = 32] = "CONDITIONAL";
})(OrderFlags || (OrderFlags = {}));
export var SelectedGasDenom;
(function (SelectedGasDenom) {
    SelectedGasDenom["NATIVE"] = "NATIVE";
    SelectedGasDenom["USDC"] = "USDC";
})(SelectedGasDenom || (SelectedGasDenom = {}));
export var MarketStatisticDay;
(function (MarketStatisticDay) {
    MarketStatisticDay["ONE"] = "1";
    MarketStatisticDay["SEVEN"] = "7";
    MarketStatisticDay["THIRTY"] = "30";
})(MarketStatisticDay || (MarketStatisticDay = {}));
// ------------ Orders Start------------
export var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT";
    OrderType["STOP_MARKET"] = "STOP_MARKET";
    OrderType["TAKE_PROFIT_MARKET"] = "TAKE_PROFIT_MARKET";
})(OrderType || (OrderType = {}));
export var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide || (OrderSide = {}));
export var OrderTimeInForce;
(function (OrderTimeInForce) {
    OrderTimeInForce["GTT"] = "GTT";
    OrderTimeInForce["IOC"] = "IOC";
    OrderTimeInForce["FOK"] = "FOK";
})(OrderTimeInForce || (OrderTimeInForce = {}));
export var OrderExecution;
(function (OrderExecution) {
    OrderExecution["DEFAULT"] = "DEFAULT";
    OrderExecution["IOC"] = "IOC";
    OrderExecution["FOK"] = "FOK";
    OrderExecution["POST_ONLY"] = "POST_ONLY";
})(OrderExecution || (OrderExecution = {}));
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
// ------------ Orders End------------
// ----------- Time Periods Start -------------
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
// ----------- Time Periods End -------------
export var ClobPairId;
(function (ClobPairId) {
    ClobPairId[ClobPairId["PERPETUAL_PAIR_BTC_USD"] = 0] = "PERPETUAL_PAIR_BTC_USD";
    ClobPairId[ClobPairId["PERPETUAL_PAIR_ETH_USD"] = 1] = "PERPETUAL_PAIR_ETH_USD";
})(ClobPairId || (ClobPairId = {}));
//# sourceMappingURL=enums.js.map