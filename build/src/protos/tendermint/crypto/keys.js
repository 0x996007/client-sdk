import * as _m0 from 'protobufjs/minimal.js';
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined,
    };
}
export const PublicKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePublicKey();
        message.ed25519 = object.ed25519 ?? undefined;
        message.secp256k1 = object.secp256k1 ?? undefined;
        return message;
    },
};
//# sourceMappingURL=keys.js.map