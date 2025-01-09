import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        bech32Prefix: '',
        moduleAccountPermissions: [],
        authority: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32Prefix !== '') {
            writer.uint32(10).string(message.bech32Prefix);
        }
        for (const v of message.moduleAccountPermissions) {
            ModuleAccountPermission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.authority !== '') {
            writer.uint32(26).string(message.authority);
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
                    message.bech32Prefix = reader.string();
                    break;
                case 2:
                    message.moduleAccountPermissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        message.bech32Prefix = object.bech32Prefix ?? '';
        message.moduleAccountPermissions =
            object.moduleAccountPermissions?.map((e) => ModuleAccountPermission.fromPartial(e)) || [];
        message.authority = object.authority ?? '';
        return message;
    },
};
function createBaseModuleAccountPermission() {
    return {
        account: '',
        permissions: [],
    };
}
export const ModuleAccountPermission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.permissions) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccountPermission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.permissions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleAccountPermission();
        message.account = object.account ?? '';
        message.permissions = object.permissions?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=module.js.map