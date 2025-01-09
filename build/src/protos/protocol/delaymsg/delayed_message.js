import { Any } from '../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseDelayedMessage() {
    return {
        id: 0,
        msg: undefined,
        blockHeight: 0,
    };
}
export const DelayedMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.msg !== undefined) {
            Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(24).uint32(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.msg = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = createBaseDelayedMessage();
        message.id = object.id ?? 0;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? Any.fromPartial(object.msg)
                : undefined;
        message.blockHeight = object.blockHeight ?? 0;
        return message;
    },
};
//# sourceMappingURL=delayed_message.js.map