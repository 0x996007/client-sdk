import * as _m0 from 'protobufjs/minimal.js';
function createBaseConfig() {
    return {
        skipAnteHandler: false,
        skipPostHandler: false,
    };
}
export const Config = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.skipAnteHandler === true) {
            writer.uint32(8).bool(message.skipAnteHandler);
        }
        if (message.skipPostHandler === true) {
            writer.uint32(16).bool(message.skipPostHandler);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skipAnteHandler = reader.bool();
                    break;
                case 2:
                    message.skipPostHandler = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.skipAnteHandler = object.skipAnteHandler ?? false;
        message.skipPostHandler = object.skipPostHandler ?? false;
        return message;
    },
};
//# sourceMappingURL=config.js.map