import { Long } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        maxMetadataLen: Long.UZERO,
        authority: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxMetadataLen.isZero()) {
            writer.uint32(8).uint64(message.maxMetadataLen);
        }
        if (message.authority !== '') {
            writer.uint32(18).string(message.authority);
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
                    message.maxMetadataLen = reader.uint64();
                    break;
                case 2:
                    message.authority = reader.string();
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
        message.maxMetadataLen =
            object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
                ? Long.fromValue(object.maxMetadataLen)
                : Long.UZERO;
        message.authority = object.authority ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map