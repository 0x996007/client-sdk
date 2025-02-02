import * as _m0 from 'protobufjs/minimal.js';
function createBaseAny() {
    return {
        typeUrl: '',
        value: new Uint8Array(),
    };
}
export const Any = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.typeUrl !== '') {
            writer.uint32(10).string(message.typeUrl);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAny();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typeUrl = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAny();
        message.typeUrl = object.typeUrl ?? '';
        message.value = object.value ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=any.js.map