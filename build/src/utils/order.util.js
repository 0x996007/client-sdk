import { BigNumber } from 'bignumber.js';
import Long from 'long';
import { OrderExecution, OrderFlags, OrderSide, OrderTimeInForce, OrderType, DEFAULT_SEQUENCE, } from '../common/index.js';
import { Order_ConditionType, Order_Side, Order_TimeInForce, } from '../protos/types.js';
/**
 * @description Either return undefined or insert default sequence value into
 * `partialTransactionOptions` if it does not exist.
 *
 * @returns undefined or full TransactionOptions.
 */
export function convertPartialTransactionOptionsToFull(partialTransactionOptions) {
    if (partialTransactionOptions === undefined) {
        return undefined;
    }
    return {
        sequence: DEFAULT_SEQUENCE,
        ...partialTransactionOptions,
    };
}
export function round(input, base) {
    return BigNumber(input)
        .div(BigNumber(base))
        .integerValue(BigNumber.ROUND_FLOOR)
        .times(BigNumber(base))
        .toNumber();
}
export function calculateQuantums(size, atomicResolution, stepBaseQuantums) {
    const rawQuantums = BigNumber(size).times(BigNumber(10).pow(BigNumber(atomicResolution).negated()));
    const quantums = round(rawQuantums.toNumber(), stepBaseQuantums);
    // stepBaseQuantums functions as minimum order size
    const result = Math.max(quantums, stepBaseQuantums);
    return Long.fromNumber(result);
}
export function calculateVaultQuantums(size) {
    return BigInt(BigNumber(size).times(1_000_000).toFixed(0, BigNumber.ROUND_FLOOR));
}
export function calculateSubticks(price, atomicResolution, quantumConversionExponent, subticksPerTick) {
    const QUOTE_QUANTUMS_ATOMIC_RESOLUTION = -6;
    const exponent = atomicResolution -
        quantumConversionExponent -
        QUOTE_QUANTUMS_ATOMIC_RESOLUTION;
    const rawSubticks = BigNumber(price).times(BigNumber(10).pow(exponent));
    const subticks = round(rawSubticks.toNumber(), subticksPerTick);
    const result = Math.max(subticks, subticksPerTick);
    return Long.fromNumber(result);
}
export function calculateSide(side) {
    return side === OrderSide.BUY ? Order_Side.SIDE_BUY : Order_Side.SIDE_SELL;
}
export function calculateTimeInForce(type, timeInForce, execution, postOnly) {
    switch (type) {
        case OrderType.MARKET:
            switch (timeInForce) {
                case OrderTimeInForce.FOK:
                    return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
                default:
                    return Order_TimeInForce.TIME_IN_FORCE_IOC;
            }
        case OrderType.LIMIT:
            switch (timeInForce) {
                case OrderTimeInForce.GTT:
                    if (postOnly == null) {
                        throw new Error('postOnly must be set if order type is LIMIT and timeInForce is GTT');
                    }
                    return postOnly
                        ? Order_TimeInForce.TIME_IN_FORCE_POST_ONLY
                        : Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
                case OrderTimeInForce.FOK:
                    return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
                case OrderTimeInForce.IOC:
                    return Order_TimeInForce.TIME_IN_FORCE_IOC;
                default:
                    throw new Error('Unexpected code path: timeInForce');
            }
        case OrderType.STOP_LIMIT:
        case OrderType.TAKE_PROFIT_LIMIT:
            if (execution == null) {
                throw new Error('execution must be set if order type is STOP_LIMIT or TAKE_PROFIT_LIMIT');
            }
            switch (execution) {
                case OrderExecution.DEFAULT:
                    return Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
                case OrderExecution.POST_ONLY:
                    return Order_TimeInForce.TIME_IN_FORCE_POST_ONLY;
                case OrderExecution.FOK:
                    return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
                case OrderExecution.IOC:
                    return Order_TimeInForce.TIME_IN_FORCE_IOC;
                default:
                    throw new Error('Unexpected code path: timeInForce');
            }
        case OrderType.STOP_MARKET:
        case OrderType.TAKE_PROFIT_MARKET:
            if (execution == null) {
                throw new Error('execution must be set if order type is STOP_MARKET or TAKE_PROFIT_MARKET');
            }
            switch (execution) {
                case OrderExecution.DEFAULT:
                    throw new Error('Execution value DEFAULT not supported for STOP_MARKET or TAKE_PROFIT_MARKET');
                case OrderExecution.POST_ONLY:
                    throw new Error('Execution value POST_ONLY not supported for STOP_MARKET or TAKE_PROFIT_MARKET');
                case OrderExecution.FOK:
                    return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
                case OrderExecution.IOC:
                    return Order_TimeInForce.TIME_IN_FORCE_IOC;
                default:
                    throw new Error('Unexpected code path: timeInForce');
            }
        default:
            throw new Error('Unexpected code path: timeInForce');
    }
}
export function calculateOrderFlags(type, timeInForce) {
    switch (type) {
        case OrderType.MARKET:
            return OrderFlags.SHORT_TERM;
        case OrderType.LIMIT:
            if (timeInForce === undefined) {
                throw new Error('timeInForce must be set if orderType is LIMIT');
            }
            if (timeInForce === OrderTimeInForce.GTT) {
                return OrderFlags.LONG_TERM;
            }
            else {
                return OrderFlags.SHORT_TERM;
            }
        case OrderType.STOP_LIMIT:
        case OrderType.TAKE_PROFIT_LIMIT:
        case OrderType.STOP_MARKET:
        case OrderType.TAKE_PROFIT_MARKET:
            return OrderFlags.CONDITIONAL;
        default:
            throw new Error('Unexpected code path: orderFlags');
    }
}
export function calculateClientMetadata(orderType) {
    switch (orderType) {
        case OrderType.MARKET:
        case OrderType.STOP_MARKET:
        case OrderType.TAKE_PROFIT_MARKET:
            return 1;
        default:
            return 0;
    }
}
export function calculateConditionType(orderType) {
    switch (orderType) {
        case OrderType.LIMIT:
            return Order_ConditionType.CONDITION_TYPE_UNSPECIFIED;
        case OrderType.MARKET:
            return Order_ConditionType.CONDITION_TYPE_UNSPECIFIED;
        case OrderType.STOP_LIMIT:
        case OrderType.STOP_MARKET:
            return Order_ConditionType.CONDITION_TYPE_STOP_LOSS;
        case OrderType.TAKE_PROFIT_LIMIT:
        case OrderType.TAKE_PROFIT_MARKET:
            return Order_ConditionType.CONDITION_TYPE_TAKE_PROFIT;
        default:
            return Order_ConditionType.CONDITION_TYPE_UNSPECIFIED;
    }
}
export function calculateConditionalOrderTriggerSubticks(orderType, atomicResolution, quantumConversionExponent, subticksPerTick, triggerPrice) {
    switch (orderType) {
        case OrderType.LIMIT:
        case OrderType.MARKET:
            return Long.fromNumber(0);
        case OrderType.STOP_LIMIT:
        case OrderType.STOP_MARKET:
        case OrderType.TAKE_PROFIT_LIMIT:
        case OrderType.TAKE_PROFIT_MARKET:
            if (triggerPrice === undefined) {
                throw new Error('triggerPrice must be set if orderType is STOP_LIMIT, STOP_MARKET, TAKE_PROFIT_LIMIT, or TAKE_PROFIT_MARKET');
            }
            return calculateSubticks(triggerPrice, atomicResolution, quantumConversionExponent, subticksPerTick);
        default:
            return Long.fromNumber(0);
    }
}
//# sourceMappingURL=order.util.js.map