import * as _m0 from 'protobufjs/minimal.js';
function createBaseParams() {
    return {
        isSmartAccountActive: false,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isSmartAccountActive === true) {
            writer.uint32(8).bool(message.isSmartAccountActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isSmartAccountActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.isSmartAccountActive = object.isSmartAccountActive ?? false;
        return message;
    },
};
//# sourceMappingURL=params.js.map