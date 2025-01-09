import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseBridgeEventInfo() {
    return {
        nextId: 0,
        ethBlockHeight: Long.UZERO,
    };
}
export const BridgeEventInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextId !== 0) {
            writer.uint32(8).uint32(message.nextId);
        }
        if (!message.ethBlockHeight.isZero()) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeEventInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextId = reader.uint32();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBridgeEventInfo();
        message.nextId = object.nextId ?? 0;
        message.ethBlockHeight =
            object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
                ? Long.fromValue(object.ethBlockHeight)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=bridge_event_info.js.map