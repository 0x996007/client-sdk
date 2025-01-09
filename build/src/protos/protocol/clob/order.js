/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubaccountId, } from '../subaccounts/subaccount.js';
import { PerpetualLiquidationInfo, } from './liquidations.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
/**
 * Represents the side of the orderbook the order will be placed on.
 * Note that Side.SIDE_UNSPECIFIED is an invalid order and cannot be
 * placed on the orderbook.
 */
export var Order_Side;
(function (Order_Side) {
    /** SIDE_UNSPECIFIED - Default value. This value is invalid and unused. */
    Order_Side[Order_Side["SIDE_UNSPECIFIED"] = 0] = "SIDE_UNSPECIFIED";
    /** SIDE_BUY - SIDE_BUY is used to represent a BUY order. */
    Order_Side[Order_Side["SIDE_BUY"] = 1] = "SIDE_BUY";
    /** SIDE_SELL - SIDE_SELL is used to represent a SELL order. */
    Order_Side[Order_Side["SIDE_SELL"] = 2] = "SIDE_SELL";
    Order_Side[Order_Side["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_Side || (Order_Side = {}));
export const Order_SideSDKType = Order_Side;
export function order_SideFromJSON(object) {
    switch (object) {
        case 0:
        case 'SIDE_UNSPECIFIED':
            return Order_Side.SIDE_UNSPECIFIED;
        case 1:
        case 'SIDE_BUY':
            return Order_Side.SIDE_BUY;
        case 2:
        case 'SIDE_SELL':
            return Order_Side.SIDE_SELL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Order_Side.UNRECOGNIZED;
    }
}
export function order_SideToJSON(object) {
    switch (object) {
        case Order_Side.SIDE_UNSPECIFIED:
            return 'SIDE_UNSPECIFIED';
        case Order_Side.SIDE_BUY:
            return 'SIDE_BUY';
        case Order_Side.SIDE_SELL:
            return 'SIDE_SELL';
        case Order_Side.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/**
 * TimeInForce indicates how long an order will remain active before it
 * is executed or expires.
 */
export var Order_TimeInForce;
(function (Order_TimeInForce) {
    /**
     * TIME_IN_FORCE_UNSPECIFIED - TIME_IN_FORCE_UNSPECIFIED represents the default behavior where an
     * order will first match with existing orders on the book, and any
     * remaining size will be added to the book as a maker order.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_UNSPECIFIED"] = 0] = "TIME_IN_FORCE_UNSPECIFIED";
    /**
     * TIME_IN_FORCE_IOC - TIME_IN_FORCE_IOC enforces that an order only be matched with
     * maker orders on the book. If the order has remaining size after
     * matching with existing orders on the book, the remaining size
     * is not placed on the book.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_IOC"] = 1] = "TIME_IN_FORCE_IOC";
    /**
     * TIME_IN_FORCE_POST_ONLY - TIME_IN_FORCE_POST_ONLY enforces that an order only be placed
     * on the book as a maker order. Note this means that validators will cancel
     * any newly-placed post only orders that would cross with other maker
     * orders.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_POST_ONLY"] = 2] = "TIME_IN_FORCE_POST_ONLY";
    /**
     * TIME_IN_FORCE_FILL_OR_KILL - TIME_IN_FORCE_FILL_OR_KILL has been deprecated and will be removed in
     * future versions.
     */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_FILL_OR_KILL"] = 3] = "TIME_IN_FORCE_FILL_OR_KILL";
    Order_TimeInForce[Order_TimeInForce["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_TimeInForce || (Order_TimeInForce = {}));
export const Order_TimeInForceSDKType = Order_TimeInForce;
export function order_TimeInForceFromJSON(object) {
    switch (object) {
        case 0:
        case 'TIME_IN_FORCE_UNSPECIFIED':
            return Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
        case 1:
        case 'TIME_IN_FORCE_IOC':
            return Order_TimeInForce.TIME_IN_FORCE_IOC;
        case 2:
        case 'TIME_IN_FORCE_POST_ONLY':
            return Order_TimeInForce.TIME_IN_FORCE_POST_ONLY;
        case 3:
        case 'TIME_IN_FORCE_FILL_OR_KILL':
            return Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Order_TimeInForce.UNRECOGNIZED;
    }
}
export function order_TimeInForceToJSON(object) {
    switch (object) {
        case Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
            return 'TIME_IN_FORCE_UNSPECIFIED';
        case Order_TimeInForce.TIME_IN_FORCE_IOC:
            return 'TIME_IN_FORCE_IOC';
        case Order_TimeInForce.TIME_IN_FORCE_POST_ONLY:
            return 'TIME_IN_FORCE_POST_ONLY';
        case Order_TimeInForce.TIME_IN_FORCE_FILL_OR_KILL:
            return 'TIME_IN_FORCE_FILL_OR_KILL';
        case Order_TimeInForce.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
export var Order_ConditionType;
(function (Order_ConditionType) {
    /**
     * CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED represents the default behavior where an
     * order will be placed immediately on the orderbook.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_UNSPECIFIED"] = 0] = "CONDITION_TYPE_UNSPECIFIED";
    /**
     * CONDITION_TYPE_STOP_LOSS - CONDITION_TYPE_STOP_LOSS represents a stop order. A stop order will
     * trigger when the oracle price moves at or above the trigger price for
     * buys, and at or below the trigger price for sells.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_STOP_LOSS"] = 1] = "CONDITION_TYPE_STOP_LOSS";
    /**
     * CONDITION_TYPE_TAKE_PROFIT - CONDITION_TYPE_TAKE_PROFIT represents a take profit order. A take profit
     * order will trigger when the oracle price moves at or below the trigger
     * price for buys and at or above the trigger price for sells.
     */
    Order_ConditionType[Order_ConditionType["CONDITION_TYPE_TAKE_PROFIT"] = 2] = "CONDITION_TYPE_TAKE_PROFIT";
    Order_ConditionType[Order_ConditionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_ConditionType || (Order_ConditionType = {}));
export const Order_ConditionTypeSDKType = Order_ConditionType;
export function order_ConditionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONDITION_TYPE_UNSPECIFIED':
            return Order_ConditionType.CONDITION_TYPE_UNSPECIFIED;
        case 1:
        case 'CONDITION_TYPE_STOP_LOSS':
            return Order_ConditionType.CONDITION_TYPE_STOP_LOSS;
        case 2:
        case 'CONDITION_TYPE_TAKE_PROFIT':
            return Order_ConditionType.CONDITION_TYPE_TAKE_PROFIT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Order_ConditionType.UNRECOGNIZED;
    }
}
export function order_ConditionTypeToJSON(object) {
    switch (object) {
        case Order_ConditionType.CONDITION_TYPE_UNSPECIFIED:
            return 'CONDITION_TYPE_UNSPECIFIED';
        case Order_ConditionType.CONDITION_TYPE_STOP_LOSS:
            return 'CONDITION_TYPE_STOP_LOSS';
        case Order_ConditionType.CONDITION_TYPE_TAKE_PROFIT:
            return 'CONDITION_TYPE_TAKE_PROFIT';
        case Order_ConditionType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseOrderId() {
    return {
        subaccountId: undefined,
        clientId: 0,
        orderFlags: 0,
        clobPairId: 0,
    };
}
export const OrderId = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== 0) {
            writer.uint32(21).fixed32(message.clientId);
        }
        if (message.orderFlags !== 0) {
            writer.uint32(24).uint32(message.orderFlags);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(32).uint32(message.clobPairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.fixed32();
                    break;
                case 3:
                    message.orderFlags = reader.uint32();
                    break;
                case 4:
                    message.clobPairId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderId();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.clientId = object.clientId ?? 0;
        message.orderFlags = object.orderFlags ?? 0;
        message.clobPairId = object.clobPairId ?? 0;
        return message;
    },
};
function createBaseOrdersFilledDuringLatestBlock() {
    return {
        orderIds: [],
    };
}
export const OrdersFilledDuringLatestBlock = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderIds) {
            OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrdersFilledDuringLatestBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrdersFilledDuringLatestBlock();
        message.orderIds =
            object.orderIds?.map((e) => OrderId.fromPartial(e)) || [];
        return message;
    },
};
function createBasePotentiallyPrunableOrders() {
    return {
        orderIds: [],
    };
}
export const PotentiallyPrunableOrders = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderIds) {
            OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePotentiallyPrunableOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePotentiallyPrunableOrders();
        message.orderIds =
            object.orderIds?.map((e) => OrderId.fromPartial(e)) || [];
        return message;
    },
};
function createBaseOrderFillState() {
    return {
        fillAmount: Long.UZERO,
        prunableBlockHeight: 0,
    };
}
export const OrderFillState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.fillAmount.isZero()) {
            writer.uint32(8).uint64(message.fillAmount);
        }
        if (message.prunableBlockHeight !== 0) {
            writer.uint32(16).uint32(message.prunableBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderFillState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fillAmount = reader.uint64();
                    break;
                case 2:
                    message.prunableBlockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderFillState();
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        message.prunableBlockHeight = object.prunableBlockHeight ?? 0;
        return message;
    },
};
function createBaseStatefulOrderTimeSliceValue() {
    return {
        orderIds: [],
    };
}
export const StatefulOrderTimeSliceValue = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orderIds) {
            OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderTimeSliceValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderTimeSliceValue();
        message.orderIds =
            object.orderIds?.map((e) => OrderId.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLongTermOrderPlacement() {
    return {
        order: undefined,
        placementIndex: undefined,
    };
}
export const LongTermOrderPlacement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementIndex !== undefined) {
            TransactionOrdering.encode(message.placementIndex, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLongTermOrderPlacement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementIndex = TransactionOrdering.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLongTermOrderPlacement();
        message.order =
            object.order !== undefined && object.order !== null
                ? Order.fromPartial(object.order)
                : undefined;
        message.placementIndex =
            object.placementIndex !== undefined && object.placementIndex !== null
                ? TransactionOrdering.fromPartial(object.placementIndex)
                : undefined;
        return message;
    },
};
function createBaseConditionalOrderPlacement() {
    return {
        order: undefined,
        placementIndex: undefined,
        triggerIndex: undefined,
    };
}
export const ConditionalOrderPlacement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementIndex !== undefined) {
            TransactionOrdering.encode(message.placementIndex, writer.uint32(18).fork()).ldelim();
        }
        if (message.triggerIndex !== undefined) {
            TransactionOrdering.encode(message.triggerIndex, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConditionalOrderPlacement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementIndex = TransactionOrdering.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.triggerIndex = TransactionOrdering.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConditionalOrderPlacement();
        message.order =
            object.order !== undefined && object.order !== null
                ? Order.fromPartial(object.order)
                : undefined;
        message.placementIndex =
            object.placementIndex !== undefined && object.placementIndex !== null
                ? TransactionOrdering.fromPartial(object.placementIndex)
                : undefined;
        message.triggerIndex =
            object.triggerIndex !== undefined && object.triggerIndex !== null
                ? TransactionOrdering.fromPartial(object.triggerIndex)
                : undefined;
        return message;
    },
};
function createBaseOrder() {
    return {
        orderId: undefined,
        side: 0,
        quantums: Long.UZERO,
        subticks: Long.UZERO,
        goodTilBlock: undefined,
        goodTilBlockTime: undefined,
        timeInForce: 0,
        reduceOnly: false,
        clientMetadata: 0,
        conditionType: 0,
        conditionalOrderTriggerSubticks: Long.UZERO,
    };
}
export const Order = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== undefined) {
            OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.side !== 0) {
            writer.uint32(16).int32(message.side);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(24).uint64(message.quantums);
        }
        if (!message.subticks.isZero()) {
            writer.uint32(32).uint64(message.subticks);
        }
        if (message.goodTilBlock !== undefined) {
            writer.uint32(40).uint32(message.goodTilBlock);
        }
        if (message.goodTilBlockTime !== undefined) {
            writer.uint32(53).fixed32(message.goodTilBlockTime);
        }
        if (message.timeInForce !== 0) {
            writer.uint32(56).int32(message.timeInForce);
        }
        if (message.reduceOnly === true) {
            writer.uint32(64).bool(message.reduceOnly);
        }
        if (message.clientMetadata !== 0) {
            writer.uint32(72).uint32(message.clientMetadata);
        }
        if (message.conditionType !== 0) {
            writer.uint32(80).int32(message.conditionType);
        }
        if (!message.conditionalOrderTriggerSubticks.isZero()) {
            writer.uint32(88).uint64(message.conditionalOrderTriggerSubticks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = OrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.side = reader.int32();
                    break;
                case 3:
                    message.quantums = reader.uint64();
                    break;
                case 4:
                    message.subticks = reader.uint64();
                    break;
                case 5:
                    message.goodTilBlock = reader.uint32();
                    break;
                case 6:
                    message.goodTilBlockTime = reader.fixed32();
                    break;
                case 7:
                    message.timeInForce = reader.int32();
                    break;
                case 8:
                    message.reduceOnly = reader.bool();
                    break;
                case 9:
                    message.clientMetadata = reader.uint32();
                    break;
                case 10:
                    message.conditionType = reader.int32();
                    break;
                case 11:
                    message.conditionalOrderTriggerSubticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrder();
        message.orderId =
            object.orderId !== undefined && object.orderId !== null
                ? OrderId.fromPartial(object.orderId)
                : undefined;
        message.side = object.side ?? 0;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.UZERO;
        message.subticks =
            object.subticks !== undefined && object.subticks !== null
                ? Long.fromValue(object.subticks)
                : Long.UZERO;
        message.goodTilBlock = object.goodTilBlock ?? undefined;
        message.goodTilBlockTime = object.goodTilBlockTime ?? undefined;
        message.timeInForce = object.timeInForce ?? 0;
        message.reduceOnly = object.reduceOnly ?? false;
        message.clientMetadata = object.clientMetadata ?? 0;
        message.conditionType = object.conditionType ?? 0;
        message.conditionalOrderTriggerSubticks =
            object.conditionalOrderTriggerSubticks !== undefined &&
                object.conditionalOrderTriggerSubticks !== null
                ? Long.fromValue(object.conditionalOrderTriggerSubticks)
                : Long.UZERO;
        return message;
    },
};
function createBaseTransactionOrdering() {
    return {
        blockHeight: 0,
        transactionIndex: 0,
    };
}
export const TransactionOrdering = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        if (message.transactionIndex !== 0) {
            writer.uint32(16).uint32(message.transactionIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransactionOrdering();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                case 2:
                    message.transactionIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTransactionOrdering();
        message.blockHeight = object.blockHeight ?? 0;
        message.transactionIndex = object.transactionIndex ?? 0;
        return message;
    },
};
function createBaseStreamLiquidationOrder() {
    return {
        liquidationInfo: undefined,
        clobPairId: 0,
        isBuy: false,
        quantums: Long.UZERO,
        subticks: Long.UZERO,
    };
}
export const StreamLiquidationOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidationInfo !== undefined) {
            PerpetualLiquidationInfo.encode(message.liquidationInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.isBuy === true) {
            writer.uint32(24).bool(message.isBuy);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(32).uint64(message.quantums);
        }
        if (!message.subticks.isZero()) {
            writer.uint32(40).uint64(message.subticks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamLiquidationOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationInfo = PerpetualLiquidationInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.isBuy = reader.bool();
                    break;
                case 4:
                    message.quantums = reader.uint64();
                    break;
                case 5:
                    message.subticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamLiquidationOrder();
        message.liquidationInfo =
            object.liquidationInfo !== undefined && object.liquidationInfo !== null
                ? PerpetualLiquidationInfo.fromPartial(object.liquidationInfo)
                : undefined;
        message.clobPairId = object.clobPairId ?? 0;
        message.isBuy = object.isBuy ?? false;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.UZERO;
        message.subticks =
            object.subticks !== undefined && object.subticks !== null
                ? Long.fromValue(object.subticks)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=order.js.map