import { Any } from '../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseMsgDelayMessage() {
    return {
        authority: '',
        msg: undefined,
        delayBlocks: 0,
    };
}
export const MsgDelayMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.msg !== undefined) {
            Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        if (message.delayBlocks !== 0) {
            writer.uint32(24).uint32(message.delayBlocks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelayMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.msg = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delayBlocks = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelayMessage();
        message.authority = object.authority ?? '';
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? Any.fromPartial(object.msg)
                : undefined;
        message.delayBlocks = object.delayBlocks ?? 0;
        return message;
    },
};
function createBaseMsgDelayMessageResponse() {
    return {
        id: Long.UZERO,
    };
}
export const MsgDelayMessageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelayMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelayMessageResponse();
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=tx.js.map