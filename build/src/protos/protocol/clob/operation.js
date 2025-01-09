import { ClobMatch } from './matches.js';
import { MsgPlaceOrder, MsgCancelOrder, } from './tx.js';
import { OrderId } from './order.js';
import { OrderRemoval } from './order_removals.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseOperation() {
    return {
        match: undefined,
        shortTermOrderPlacement: undefined,
        shortTermOrderCancellation: undefined,
        preexistingStatefulOrder: undefined,
    };
}
export const Operation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.match !== undefined) {
            ClobMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.shortTermOrderPlacement !== undefined) {
            MsgPlaceOrder.encode(message.shortTermOrderPlacement, writer.uint32(18).fork()).ldelim();
        }
        if (message.shortTermOrderCancellation !== undefined) {
            MsgCancelOrder.encode(message.shortTermOrderCancellation, writer.uint32(26).fork()).ldelim();
        }
        if (message.preexistingStatefulOrder !== undefined) {
            OrderId.encode(message.preexistingStatefulOrder, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermOrderPlacement = MsgPlaceOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.shortTermOrderCancellation = MsgCancelOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.preexistingStatefulOrder = OrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOperation();
        message.match =
            object.match !== undefined && object.match !== null
                ? ClobMatch.fromPartial(object.match)
                : undefined;
        message.shortTermOrderPlacement =
            object.shortTermOrderPlacement !== undefined &&
                object.shortTermOrderPlacement !== null
                ? MsgPlaceOrder.fromPartial(object.shortTermOrderPlacement)
                : undefined;
        message.shortTermOrderCancellation =
            object.shortTermOrderCancellation !== undefined &&
                object.shortTermOrderCancellation !== null
                ? MsgCancelOrder.fromPartial(object.shortTermOrderCancellation)
                : undefined;
        message.preexistingStatefulOrder =
            object.preexistingStatefulOrder !== undefined &&
                object.preexistingStatefulOrder !== null
                ? OrderId.fromPartial(object.preexistingStatefulOrder)
                : undefined;
        return message;
    },
};
function createBaseInternalOperation() {
    return {
        match: undefined,
        shortTermOrderPlacement: undefined,
        preexistingStatefulOrder: undefined,
        orderRemoval: undefined,
    };
}
export const InternalOperation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.match !== undefined) {
            ClobMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.shortTermOrderPlacement !== undefined) {
            MsgPlaceOrder.encode(message.shortTermOrderPlacement, writer.uint32(18).fork()).ldelim();
        }
        if (message.preexistingStatefulOrder !== undefined) {
            OrderId.encode(message.preexistingStatefulOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.orderRemoval !== undefined) {
            OrderRemoval.encode(message.orderRemoval, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shortTermOrderPlacement = MsgPlaceOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.preexistingStatefulOrder = OrderId.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderRemoval = OrderRemoval.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInternalOperation();
        message.match =
            object.match !== undefined && object.match !== null
                ? ClobMatch.fromPartial(object.match)
                : undefined;
        message.shortTermOrderPlacement =
            object.shortTermOrderPlacement !== undefined &&
                object.shortTermOrderPlacement !== null
                ? MsgPlaceOrder.fromPartial(object.shortTermOrderPlacement)
                : undefined;
        message.preexistingStatefulOrder =
            object.preexistingStatefulOrder !== undefined &&
                object.preexistingStatefulOrder !== null
                ? OrderId.fromPartial(object.preexistingStatefulOrder)
                : undefined;
        message.orderRemoval =
            object.orderRemoval !== undefined && object.orderRemoval !== null
                ? OrderRemoval.fromPartial(object.orderRemoval)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=operation.js.map