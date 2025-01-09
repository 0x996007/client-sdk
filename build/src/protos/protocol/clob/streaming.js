import { StreamOrderbookFill, StreamOrderbookUpdate, } from './query.js';
import { StreamSubaccountUpdate, } from '../subaccounts/streaming.js';
import { StreamPriceUpdate, } from '../prices/streaming.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseStagedFinalizeBlockEvent() {
    return {
        orderFill: undefined,
        subaccountUpdate: undefined,
        orderbookUpdate: undefined,
        priceUpdate: undefined,
    };
}
export const StagedFinalizeBlockEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderFill !== undefined) {
            StreamOrderbookFill.encode(message.orderFill, writer.uint32(10).fork()).ldelim();
        }
        if (message.subaccountUpdate !== undefined) {
            StreamSubaccountUpdate.encode(message.subaccountUpdate, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderbookUpdate !== undefined) {
            StreamOrderbookUpdate.encode(message.orderbookUpdate, writer.uint32(26).fork()).ldelim();
        }
        if (message.priceUpdate !== undefined) {
            StreamPriceUpdate.encode(message.priceUpdate, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStagedFinalizeBlockEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderFill = StreamOrderbookFill.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subaccountUpdate = StreamSubaccountUpdate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderbookUpdate = StreamOrderbookUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.priceUpdate = StreamPriceUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStagedFinalizeBlockEvent();
        message.orderFill =
            object.orderFill !== undefined && object.orderFill !== null
                ? StreamOrderbookFill.fromPartial(object.orderFill)
                : undefined;
        message.subaccountUpdate =
            object.subaccountUpdate !== undefined && object.subaccountUpdate !== null
                ? StreamSubaccountUpdate.fromPartial(object.subaccountUpdate)
                : undefined;
        message.orderbookUpdate =
            object.orderbookUpdate !== undefined && object.orderbookUpdate !== null
                ? StreamOrderbookUpdate.fromPartial(object.orderbookUpdate)
                : undefined;
        message.priceUpdate =
            object.priceUpdate !== undefined && object.priceUpdate !== null
                ? StreamPriceUpdate.fromPartial(object.priceUpdate)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=streaming.js.map