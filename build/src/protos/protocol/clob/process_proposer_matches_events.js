import { OrderId } from './order.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseProcessProposerMatchesEvents() {
    return {
        placedLongTermOrderIds: [],
        expiredStatefulOrderIds: [],
        orderIdsFilledInLastBlock: [],
        placedStatefulCancellationOrderIds: [],
        removedStatefulOrderIds: [],
        conditionalOrderIdsTriggeredInLastBlock: [],
        placedConditionalOrderIds: [],
        blockHeight: 0,
    };
}
export const ProcessProposerMatchesEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.placedLongTermOrderIds) {
            OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.expiredStatefulOrderIds) {
            OrderId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.orderIdsFilledInLastBlock) {
            OrderId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.placedStatefulCancellationOrderIds) {
            OrderId.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.removedStatefulOrderIds) {
            OrderId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.conditionalOrderIdsTriggeredInLastBlock) {
            OrderId.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.placedConditionalOrderIds) {
            OrderId.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(64).uint32(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessProposerMatchesEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placedLongTermOrderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiredStatefulOrderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.orderIdsFilledInLastBlock.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.placedStatefulCancellationOrderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.removedStatefulOrderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.conditionalOrderIdsTriggeredInLastBlock.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.placedConditionalOrderIds.push(OrderId.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.blockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProcessProposerMatchesEvents();
        message.placedLongTermOrderIds =
            object.placedLongTermOrderIds?.map((e) => OrderId.fromPartial(e)) || [];
        message.expiredStatefulOrderIds =
            object.expiredStatefulOrderIds?.map((e) => OrderId.fromPartial(e)) || [];
        message.orderIdsFilledInLastBlock =
            object.orderIdsFilledInLastBlock?.map((e) => OrderId.fromPartial(e)) ||
                [];
        message.placedStatefulCancellationOrderIds =
            object.placedStatefulCancellationOrderIds?.map((e) => OrderId.fromPartial(e)) || [];
        message.removedStatefulOrderIds =
            object.removedStatefulOrderIds?.map((e) => OrderId.fromPartial(e)) || [];
        message.conditionalOrderIdsTriggeredInLastBlock =
            object.conditionalOrderIdsTriggeredInLastBlock?.map((e) => OrderId.fromPartial(e)) || [];
        message.placedConditionalOrderIds =
            object.placedConditionalOrderIds?.map((e) => OrderId.fromPartial(e)) ||
                [];
        message.blockHeight = object.blockHeight ?? 0;
        return message;
    },
};
//# sourceMappingURL=process_proposer_matches_events.js.map