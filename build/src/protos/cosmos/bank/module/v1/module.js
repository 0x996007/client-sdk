import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        blockedModuleAccountsOverride: [],
        authority: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.blockedModuleAccountsOverride) {
            writer.uint32(10).string(v);
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
                    message.blockedModuleAccountsOverride.push(reader.string());
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
        message.blockedModuleAccountsOverride =
            object.blockedModuleAccountsOverride?.map((e) => e) || [];
        message.authority = object.authority ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map