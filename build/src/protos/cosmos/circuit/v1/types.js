/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _m0 from 'protobufjs/minimal.js';
/** Level is the permission level. */
export var Permissions_Level;
(function (Permissions_Level) {
    /**
     * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
     * breaker permissions.
     */
    Permissions_Level[Permissions_Level["LEVEL_NONE_UNSPECIFIED"] = 0] = "LEVEL_NONE_UNSPECIFIED";
    /**
     * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
     * trip or reset the circuit breaker for some Msg type URLs. If this level
     * is chosen, a non-empty list of Msg type URLs must be provided in
     * limit_type_urls.
     */
    Permissions_Level[Permissions_Level["LEVEL_SOME_MSGS"] = 1] = "LEVEL_SOME_MSGS";
    /**
     * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
     * breaker for Msg's of all type URLs.
     */
    Permissions_Level[Permissions_Level["LEVEL_ALL_MSGS"] = 2] = "LEVEL_ALL_MSGS";
    /**
     * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
     * actions and can grant permissions to other accounts.
     */
    Permissions_Level[Permissions_Level["LEVEL_SUPER_ADMIN"] = 3] = "LEVEL_SUPER_ADMIN";
    Permissions_Level[Permissions_Level["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permissions_Level || (Permissions_Level = {}));
export const Permissions_LevelSDKType = Permissions_Level;
export function permissions_LevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'LEVEL_NONE_UNSPECIFIED':
            return Permissions_Level.LEVEL_NONE_UNSPECIFIED;
        case 1:
        case 'LEVEL_SOME_MSGS':
            return Permissions_Level.LEVEL_SOME_MSGS;
        case 2:
        case 'LEVEL_ALL_MSGS':
            return Permissions_Level.LEVEL_ALL_MSGS;
        case 3:
        case 'LEVEL_SUPER_ADMIN':
            return Permissions_Level.LEVEL_SUPER_ADMIN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permissions_Level.UNRECOGNIZED;
    }
}
export function permissions_LevelToJSON(object) {
    switch (object) {
        case Permissions_Level.LEVEL_NONE_UNSPECIFIED:
            return 'LEVEL_NONE_UNSPECIFIED';
        case Permissions_Level.LEVEL_SOME_MSGS:
            return 'LEVEL_SOME_MSGS';
        case Permissions_Level.LEVEL_ALL_MSGS:
            return 'LEVEL_ALL_MSGS';
        case Permissions_Level.LEVEL_SUPER_ADMIN:
            return 'LEVEL_SUPER_ADMIN';
        case Permissions_Level.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBasePermissions() {
    return {
        level: 0,
        limitTypeUrls: [],
    };
}
export const Permissions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        for (const v of message.limitTypeUrls) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                case 2:
                    message.limitTypeUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePermissions();
        message.level = object.level ?? 0;
        message.limitTypeUrls = object.limitTypeUrls?.map((e) => e) || [];
        return message;
    },
};
function createBaseGenesisAccountPermissions() {
    return {
        address: '',
        permissions: undefined,
    };
}
export const GenesisAccountPermissions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.permissions !== undefined) {
            Permissions.encode(message.permissions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisAccountPermissions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.permissions = Permissions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisAccountPermissions();
        message.address = object.address ?? '';
        message.permissions =
            object.permissions !== undefined && object.permissions !== null
                ? Permissions.fromPartial(object.permissions)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        accountPermissions: [],
        disabledTypeUrls: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accountPermissions) {
            GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.disabledTypeUrls) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountPermissions.push(GenesisAccountPermissions.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.disabledTypeUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.accountPermissions =
            object.accountPermissions?.map((e) => GenesisAccountPermissions.fromPartial(e)) || [];
        message.disabledTypeUrls = object.disabledTypeUrls?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=types.js.map