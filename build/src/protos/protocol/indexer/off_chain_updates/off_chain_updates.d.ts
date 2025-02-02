import { IndexerOrder, IndexerOrderSDKType, IndexerOrderId, IndexerOrderIdSDKType } from '../protocol/v1/clob.js';
import { OrderRemovalReason } from '../shared/removal_reason.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../../helpers.js';
/**
 * OrderPlacementStatus is an enum for the resulting status after an order is
 * placed.
 */
export declare enum OrderPlaceV1_OrderPlacementStatus {
    /** ORDER_PLACEMENT_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    ORDER_PLACEMENT_STATUS_UNSPECIFIED = 0,
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
    ORDER_PLACEMENT_STATUS_BEST_EFFORT_OPENED = 1,
    /**
     * ORDER_PLACEMENT_STATUS_OPENED - An opened order is one that is confirmed to be placed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will be included in any future
     * order matches.
     * This status is used internally by the indexer and will not be sent
     * out by protocol.
     */
    ORDER_PLACEMENT_STATUS_OPENED = 2,
    UNRECOGNIZED = -1
}
export declare const OrderPlaceV1_OrderPlacementStatusSDKType: typeof OrderPlaceV1_OrderPlacementStatus;
export declare function orderPlaceV1_OrderPlacementStatusFromJSON(object: any): OrderPlaceV1_OrderPlacementStatus;
export declare function orderPlaceV1_OrderPlacementStatusToJSON(object: OrderPlaceV1_OrderPlacementStatus): string;
/**
 * OrderRemovalStatus is an enum for the resulting status after an order is
 * removed.
 */
export declare enum OrderRemoveV1_OrderRemovalStatus {
    /** ORDER_REMOVAL_STATUS_UNSPECIFIED - Default value, this is invalid and unused. */
    ORDER_REMOVAL_STATUS_UNSPECIFIED = 0,
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
    ORDER_REMOVAL_STATUS_BEST_EFFORT_CANCELED = 1,
    /**
     * ORDER_REMOVAL_STATUS_CANCELED - A canceled order is one that is confirmed to be removed on all dYdX nodes
     * (discounting dishonest dYdX nodes) and will not be included in any future
     * order matches.
     * The cases where this happens includes:
     * - the order is expired.
     */
    ORDER_REMOVAL_STATUS_CANCELED = 2,
    /** ORDER_REMOVAL_STATUS_FILLED - An order was fully-filled. Only sent by the Indexer for stateful orders. */
    ORDER_REMOVAL_STATUS_FILLED = 3,
    UNRECOGNIZED = -1
}
export declare const OrderRemoveV1_OrderRemovalStatusSDKType: typeof OrderRemoveV1_OrderRemovalStatus;
export declare function orderRemoveV1_OrderRemovalStatusFromJSON(object: any): OrderRemoveV1_OrderRemovalStatus;
export declare function orderRemoveV1_OrderRemovalStatusToJSON(object: OrderRemoveV1_OrderRemovalStatus): string;
/** OrderPlace messages contain the order placed/replaced. */
export interface OrderPlaceV1 {
    order?: IndexerOrder;
    placementStatus: OrderPlaceV1_OrderPlacementStatus;
    /** The timestamp of the order placement. */
    timeStamp?: Date;
}
/** OrderPlace messages contain the order placed/replaced. */
export interface OrderPlaceV1SDKType {
    order?: IndexerOrderSDKType;
    placement_status: OrderPlaceV1_OrderPlacementStatus;
    time_stamp?: Date;
}
/**
 * OrderRemove messages contain the id of the order removed, the reason for the
 * removal and the resulting status from the removal.
 */
export interface OrderRemoveV1 {
    removedOrderId?: IndexerOrderId;
    reason: OrderRemovalReason;
    removalStatus: OrderRemoveV1_OrderRemovalStatus;
    /** The timestamp of the order removal. */
    timeStamp?: Date;
}
/**
 * OrderRemove messages contain the id of the order removed, the reason for the
 * removal and the resulting status from the removal.
 */
export interface OrderRemoveV1SDKType {
    removed_order_id?: IndexerOrderIdSDKType;
    reason: OrderRemovalReason;
    removal_status: OrderRemoveV1_OrderRemovalStatus;
    time_stamp?: Date;
}
/**
 * OrderUpdate messages contain the id of the order being updated, and the
 * updated total filled quantums of the order.
 */
export interface OrderUpdateV1 {
    orderId?: IndexerOrderId;
    totalFilledQuantums: Long;
}
/**
 * OrderUpdate messages contain the id of the order being updated, and the
 * updated total filled quantums of the order.
 */
export interface OrderUpdateV1SDKType {
    order_id?: IndexerOrderIdSDKType;
    total_filled_quantums: Long;
}
/** OrderReplace messages contain the old order ID and the replacement order. */
export interface OrderReplaceV1 {
    /** vault replaces orders with a different order ID */
    oldOrderId?: IndexerOrderId;
    order?: IndexerOrder;
    placementStatus: OrderPlaceV1_OrderPlacementStatus;
    timeStamp?: Date;
}
/** OrderReplace messages contain the old order ID and the replacement order. */
export interface OrderReplaceV1SDKType {
    old_order_id?: IndexerOrderIdSDKType;
    order?: IndexerOrderSDKType;
    placement_status: OrderPlaceV1_OrderPlacementStatus;
    time_stamp?: Date;
}
/**
 * An OffChainUpdate message is the message type which will be sent on Kafka to
 * the Indexer.
 */
export interface OffChainUpdateV1 {
    orderPlace?: OrderPlaceV1;
    orderRemove?: OrderRemoveV1;
    orderUpdate?: OrderUpdateV1;
    orderReplace?: OrderReplaceV1;
}
/**
 * An OffChainUpdate message is the message type which will be sent on Kafka to
 * the Indexer.
 */
export interface OffChainUpdateV1SDKType {
    order_place?: OrderPlaceV1SDKType;
    order_remove?: OrderRemoveV1SDKType;
    order_update?: OrderUpdateV1SDKType;
    order_replace?: OrderReplaceV1SDKType;
}
export declare const OrderPlaceV1: {
    encode(message: OrderPlaceV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderPlaceV1;
    fromPartial(object: DeepPartial<OrderPlaceV1>): OrderPlaceV1;
};
export declare const OrderRemoveV1: {
    encode(message: OrderRemoveV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderRemoveV1;
    fromPartial(object: DeepPartial<OrderRemoveV1>): OrderRemoveV1;
};
export declare const OrderUpdateV1: {
    encode(message: OrderUpdateV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderUpdateV1;
    fromPartial(object: DeepPartial<OrderUpdateV1>): OrderUpdateV1;
};
export declare const OrderReplaceV1: {
    encode(message: OrderReplaceV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderReplaceV1;
    fromPartial(object: DeepPartial<OrderReplaceV1>): OrderReplaceV1;
};
export declare const OffChainUpdateV1: {
    encode(message: OffChainUpdateV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OffChainUpdateV1;
    fromPartial(object: DeepPartial<OffChainUpdateV1>): OffChainUpdateV1;
};
