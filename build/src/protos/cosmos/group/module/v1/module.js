import { Duration, } from '../../../../google/protobuf/duration.js';
import { Long } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        maxExecutionPeriod: undefined,
        maxMetadataLen: Long.UZERO,
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxExecutionPeriod !== undefined) {
            Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (!message.maxMetadataLen.isZero()) {
            writer.uint32(16).uint64(message.maxMetadataLen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxMetadataLen = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.maxExecutionPeriod =
            object.maxExecutionPeriod !== undefined &&
                object.maxExecutionPeriod !== null
                ? Duration.fromPartial(object.maxExecutionPeriod)
                : undefined;
        message.maxMetadataLen =
            object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
                ? Long.fromValue(object.maxMetadataLen)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=module.js.map