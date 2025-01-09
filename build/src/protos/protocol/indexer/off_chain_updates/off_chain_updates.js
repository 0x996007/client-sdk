/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { IndexerOrder, IndexerOrderId, } from '../protocol/v1/clob.js';
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp, Long, } from '../../../helpers.js';
/**
 * OrderPlacementStatus is an enum for the resulting status after an order is
 * placed.
 */
export var OrderPlaceV1_OrderPlacementStatus;
(function (OrderPlaceV1_OrderPlacementStatus) {
    /** ORDER_PLACEMENT_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_UNSPECIFIED"] = 0] = "ORDER_PLACEMENT_STATUS_UNSPECIFIED";
    /**
     * ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED - A best effort opened order is one that has only been confirmed to be
     * placed on the dYdX node sending the off-chain update message.
     * The cases where this happens includes:
     * - The dYdX node places an order in it's in-memory orderbook during the
     *   CheckTx flow.
     * A best effort placed order may not have been placed on other dYdX
     * nodes including other dYdX validator nodes and may still be excluded in
     * future order matches.
     */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED"] = 1] = "ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED";
    /**
     * ORDER_PLACEMENT_STATUS_OPENED - An opened order is one that is confirmed to be placed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will be included in any future
     * order matches.
     * This status is used internally by the indexer and will not be sent
     * out by protocol.
     */
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["ORDER_PLACEMENT_STATUS_OPENED"] = 2] = "ORDER_PLACEMENT_STATUS_OPENED";
    OrderPlaceV1_OrderPlacementStatus[OrderPlaceV1_OrderPlacementStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderPlaceV1_OrderPlacementStatus || (OrderPlaceV1_OrderPlacementStatus = {}));
export const OrderPlaceV1_OrderPlacementStatusSDKType = OrderPlaceV1_OrderPlacementStatus;
export function orderPlaceV1_OrderPlacementStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'ORDER_PLACEMENT_STATUS_UNSPECIFIED':
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_UNSPECIFIED;
        case 1:
        case 'ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED':
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED;
        case 2:
        case 'ORDER_PLACEMENT_STATUS_OPENED':
            return OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_OPENED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OrderPlaceV1_OrderPlacementStatus.UNRECOGNIZED;
    }
}
export function orderPlaceV1_OrderPlacementStatusToJSON(object) {
    switch (object) {
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_UNSPECIFIED:
            return 'ORDER_PLACEMENT_STATUS_UNSPECIFIED';
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED:
            return 'ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED';
        case OrderPlaceV1_OrderPlacementStatus.ORDER_PLACEMENT_STATUS_OPENED:
            return 'ORDER_PLACEMENT_STATUS_OPENED';
        case OrderPlaceV1_OrderPlacementStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/**
 * OrderRemovalStatus is an enum for the resulting status after an order is
 * removed.
 */
export var OrderRemoveV1_OrderRemovalStatus;
(function (OrderRemoveV1_OrderRemovalStatus) {
    /** ORDER_REMOVAL_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_UNSPECIFIED"] = 0] = "ORDER_REMOVAL_STATUS_UNSPECIFIED";
    /**
     * ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED - A best effort canceled order is one that has only been confirmed to be
     * removed on the dYdX node sending the off-chain update message.
     * The cases where this happens includes:
     * - the order was removed due to the dYdX node receiving a CancelOrder
     *   transaction for the order.
     * - the order was removed due to being undercollateralized during
     *   optimistic matching.
     * A best effort canceled order may not have been removed on other dYdX
     * nodes including other dYdX validator nodes and may still be included in
     * future order matches.
     */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED"] = 1] = "ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED";
    /**
     * ORDER_REMOVAL_STATUS_CANCELED - A canceled order is one that is confirmed to be removed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will not be included in any future
     * order matches.
     * The cases where this happens includes:
     * - the order is expired.
     */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_CANCELED"] = 2] = "ORDER_REMOVAL_STATUS_CANCELED";
    /** ORDER_REMOVAL_STATUS_FILLED - An order was fully-filled. Only sent by the Indexer for stateful orders. */
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["ORDER_REMOVAL_STATUS_FILLED"] = 3] = "ORDER_REMOVAL_STATUS_FILLED";
    OrderRemoveV1_OrderRemovalStatus[OrderRemoveV1_OrderRemovalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderRemoveV1_OrderRemovalStatus || (OrderRemoveV1_OrderRemovalStatus = {}));
export const OrderRemoveV1_OrderRemovalStatusSDKType = OrderRemoveV1_OrderRemovalStatus;
export function orderRemoveV1_OrderRemovalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'ORDER_REMOVAL_STATUS_UNSPECIFIED':
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_UNSPECIFIED;
        case 1:
        case 'ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED':
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED;
        case 2:
        case 'ORDER_REMOVAL_STATUS_CANCELED':
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_CANCELED;
        case 3:
        case 'ORDER_REMOVAL_STATUS_FILLED':
            return OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_FILLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OrderRemoveV1_OrderRemovalStatus.UNRECOGNIZED;
    }
}
export function orderRemoveV1_OrderRemovalStatusToJSON(object) {
    switch (object) {
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_UNSPECIFIED:
            return 'ORDER_REMOVAL_STATUS_UNSPECIFIED';
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED:
            return 'ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED';
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_CANCELED:
            return 'ORDER_REMOVAL_STATUS_CANCELED';
        case OrderRemoveV1_OrderRemovalStatus.ORDER_REMOVAL_STATUS_FILLED:
            return 'ORDER_REMOVAL_STATUS_FILLED';
        case OrderRemoveV1_OrderRemovalStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseOrderPlaceV1() {
    return {
        order: undefined,
        placementStatus: 0,
        timeStamp: undefined,
    };
}
export const OrderPlaceV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.placementStatus !== 0) {
            writer.uint32(16).int32(message.placementStatus);
        }
        if (message.timeStamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timeStamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderPlaceV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.placementStatus = reader.int32();
                    break;
                case 3:
                    message.timeStamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderPlaceV1();
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        message.placementStatus = object.placementStatus ?? 0;
        message.timeStamp = object.timeStamp ?? undefined;
        return message;
    },
};
function createBaseOrderRemoveV1() {
    return {
        removedOrderId: undefined,
        reason: 0,
        removalStatus: 0,
        timeStamp: undefined,
    };
}
export const OrderRemoveV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.removedOrderId !== undefined) {
            IndexerOrderId.encode(message.removedOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        if (message.removalStatus !== 0) {
            writer.uint32(24).int32(message.removalStatus);
        }
        if (message.timeStamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timeStamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderRemoveV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.removedOrderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                case 3:
                    message.removalStatus = reader.int32();
                    break;
                case 4:
                    message.timeStamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderRemoveV1();
        message.removedOrderId =
            object.removedOrderId !== undefined && object.removedOrderId !== null
                ? IndexerOrderId.fromPartial(object.removedOrderId)
                : undefined;
        message.reason = object.reason ?? 0;
        message.removalStatus = object.removalStatus ?? 0;
        message.timeStamp = object.timeStamp ?? undefined;
        return message;
    },
};
function createBaseOrderUpdateV1() {
    return {
        orderId: undefined,
        totalFilledQuantums: Long.UZERO,
    };
}
export const OrderUpdateV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== undefined) {
            IndexerOrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.totalFilledQuantums.isZero()) {
            writer.uint32(16).uint64(message.totalFilledQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderUpdateV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalFilledQuantums = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderUpdateV1();
        message.orderId =
            object.orderId !== undefined && object.orderId !== null
                ? IndexerOrderId.fromPartial(object.orderId)
                : undefined;
        message.totalFilledQuantums =
            object.totalFilledQuantums !== undefined &&
                object.totalFilledQuantums !== null
                ? Long.fromValue(object.totalFilledQuantums)
                : Long.UZERO;
        return message;
    },
};
function createBaseOrderReplaceV1() {
    return {
        oldOrderId: undefined,
        order: undefined,
        placementStatus: 0,
        timeStamp: undefined,
    };
}
export const OrderReplaceV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.oldOrderId !== undefined) {
            IndexerOrderId.encode(message.oldOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        if (message.placementStatus !== 0) {
            writer.uint32(24).int32(message.placementStatus);
        }
        if (message.timeStamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timeStamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderReplaceV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oldOrderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.placementStatus = reader.int32();
                    break;
                case 4:
                    message.timeStamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderReplaceV1();
        message.oldOrderId =
            object.oldOrderId !== undefined && object.oldOrderId !== null
                ? IndexerOrderId.fromPartial(object.oldOrderId)
                : undefined;
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        message.placementStatus = object.placementStatus ?? 0;
        message.timeStamp = object.timeStamp ?? undefined;
        return message;
    },
};
function createBaseOffChainUpdateV1() {
    return {
        orderPlace: undefined,
        orderRemove: undefined,
        orderUpdate: undefined,
        orderReplace: undefined,
    };
}
export const OffChainUpdateV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderPlace !== undefined) {
            OrderPlaceV1.encode(message.orderPlace, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderRemove !== undefined) {
            OrderRemoveV1.encode(message.orderRemove, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderUpdate !== undefined) {
            OrderUpdateV1.encode(message.orderUpdate, writer.uint32(26).fork()).ldelim();
        }
        if (message.orderReplace !== undefined) {
            OrderReplaceV1.encode(message.orderReplace, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOffChainUpdateV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlace = OrderPlaceV1.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderRemove = OrderRemoveV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderUpdate = OrderUpdateV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderReplace = OrderReplaceV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOffChainUpdateV1();
        message.orderPlace =
            object.orderPlace !== undefined && object.orderPlace !== null
                ? OrderPlaceV1.fromPartial(object.orderPlace)
                : undefined;
        message.orderRemove =
            object.orderRemove !== undefined && object.orderRemove !== null
                ? OrderRemoveV1.fromPartial(object.orderRemove)
                : undefined;
        message.orderUpdate =
            object.orderUpdate !== undefined && object.orderUpdate !== null
                ? OrderUpdateV1.fromPartial(object.orderUpdate)
                : undefined;
        message.orderReplace =
            object.orderReplace !== undefined && object.orderReplace !== null
                ? OrderReplaceV1.fromPartial(object.orderReplace)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=off_chain_updates.js.map