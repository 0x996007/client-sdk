import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseAccountAuthenticator() {
    return {
        id: Long.UZERO,
        type: '',
        config: new Uint8Array(),
    };
}
export const AccountAuthenticator = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.config.length !== 0) {
            writer.uint32(26).bytes(message.config);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountAuthenticator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.config = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountAuthenticator();
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.type = object.type ?? '';
        message.config = object.config ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=models.js.map