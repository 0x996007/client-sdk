import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        hooksOrder: [],
        authority: '',
        bech32PrefixValidator: '',
        bech32PrefixConsensus: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.hooksOrder) {
            writer.uint32(10).string(v);
        }
        if (message.authority !== '') {
            writer.uint32(18).string(message.authority);
        }
        if (message.bech32PrefixValidator !== '') {
            writer.uint32(26).string(message.bech32PrefixValidator);
        }
        if (message.bech32PrefixConsensus !== '') {
            writer.uint32(34).string(message.bech32PrefixConsensus);
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
                    message.hooksOrder.push(reader.string());
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                case 3:
                    message.bech32PrefixValidator = reader.string();
                    break;
                case 4:
                    message.bech32PrefixConsensus = reader.string();
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
        message.hooksOrder = object.hooksOrder?.map((e) => e) || [];
        message.authority = object.authority ?? '';
        message.bech32PrefixValidator = object.bech32PrefixValidator ?? '';
        message.bech32PrefixConsensus = object.bech32PrefixConsensus ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map