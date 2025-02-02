import { OrderId, OrderIdSDKType } from './order.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/**
 * ProcessProposerMatchesEvents is used for communicating which events occurred
 * in the last block that require updating the state of the memclob in the
 * Commit blocker. It contains information about the following state updates:
 * - Long term order IDs that were placed in the last block.
 * - Stateful order IDs that were expired in the last block.
 * - Order IDs that were filled in the last block.
 * - Stateful cancellations order IDs that were placed in the last block.
 * - Stateful order IDs forcefully removed in the last block.
 * - Conditional order IDs triggered in the last block.
 * - Conditional order IDs placed, but not triggered in the last block.
 * - The height of the block in which the events occurred.
 */
export interface ProcessProposerMatchesEvents {
    /** @deprecated */
    placedLongTermOrderIds: OrderId[];
    expiredStatefulOrderIds: OrderId[];
    orderIdsFilledInLastBlock: OrderId[];
    /** @deprecated */
    placedStatefulCancellationOrderIds: OrderId[];
    removedStatefulOrderIds: OrderId[];
    conditionalOrderIdsTriggeredInLastBlock: OrderId[];
    /** @deprecated */
    placedConditionalOrderIds: OrderId[];
    blockHeight: number;
}
/**
 * ProcessProposerMatchesEvents is used for communicating which events occurred
 * in the last block that require updating the state of the memclob in the
 * Commit blocker. It contains information about the following state updates:
 * - Long term order IDs that were placed in the last block.
 * - Stateful order IDs that were expired in the last block.
 * - Order IDs that were filled in the last block.
 * - Stateful cancellations order IDs that were placed in the last block.
 * - Stateful order IDs forcefully removed in the last block.
 * - Conditional order IDs triggered in the last block.
 * - Conditional order IDs placed, but not triggered in the last block.
 * - The height of the block in which the events occurred.
 */
export interface ProcessProposerMatchesEventsSDKType {
    /** @deprecated */
    placed_long_term_order_ids: OrderIdSDKType[];
    expired_stateful_order_ids: OrderIdSDKType[];
    order_ids_filled_in_last_block: OrderIdSDKType[];
    /** @deprecated */
    placed_stateful_cancellation_order_ids: OrderIdSDKType[];
    removed_stateful_order_ids: OrderIdSDKType[];
    conditional_order_ids_triggered_in_last_block: OrderIdSDKType[];
    /** @deprecated */
    placed_conditional_order_ids: OrderIdSDKType[];
    block_height: number;
}
export declare const ProcessProposerMatchesEvents: {
    encode(message: ProcessProposerMatchesEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessProposerMatchesEvents;
    fromPartial(object: DeepPartial<ProcessProposerMatchesEvents>): ProcessProposerMatchesEvents;
};
