import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        authority: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
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
        message.authority = object.authority ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map