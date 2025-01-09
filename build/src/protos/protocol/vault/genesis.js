import { NumShares, OwnerShare, OwnerShareUnlocks, } from './share.js';
import { QuotingParams, OperatorParams, VaultParams, } from './params.js';
import { VaultId } from './vault.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        totalShares: undefined,
        ownerShares: [],
        vaults: [],
        defaultQuotingParams: undefined,
        allOwnerShareUnlocks: [],
        operatorParams: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalShares !== undefined) {
            NumShares.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ownerShares) {
            OwnerShare.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.vaults) {
            Vault.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaultQuotingParams !== undefined) {
            QuotingParams.encode(message.defaultQuotingParams, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.allOwnerShareUnlocks) {
            OwnerShareUnlocks.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.operatorParams !== undefined) {
            OperatorParams.encode(message.operatorParams, writer.uint32(50).fork()).ldelim();
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
                    message.totalShares = NumShares.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ownerShares.push(OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.vaults.push(Vault.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.defaultQuotingParams = QuotingParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allOwnerShareUnlocks.push(OwnerShareUnlocks.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.operatorParams = OperatorParams.decode(reader, reader.uint32());
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
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? NumShares.fromPartial(object.totalShares)
                : undefined;
        message.ownerShares =
            object.ownerShares?.map((e) => OwnerShare.fromPartial(e)) || [];
        message.vaults = object.vaults?.map((e) => Vault.fromPartial(e)) || [];
        message.defaultQuotingParams =
            object.defaultQuotingParams !== undefined &&
                object.defaultQuotingParams !== null
                ? QuotingParams.fromPartial(object.defaultQuotingParams)
                : undefined;
        message.allOwnerShareUnlocks =
            object.allOwnerShareUnlocks?.map((e) => OwnerShareUnlocks.fromPartial(e)) || [];
        message.operatorParams =
            object.operatorParams !== undefined && object.operatorParams !== null
                ? OperatorParams.fromPartial(object.operatorParams)
                : undefined;
        return message;
    },
};
function createBaseVault() {
    return {
        vaultId: undefined,
        vaultParams: undefined,
        mostRecentClientIds: [],
    };
}
export const Vault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            VaultParams.encode(message.vaultParams, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.mostRecentClientIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vaultParams = VaultParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mostRecentClientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.mostRecentClientIds.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVault();
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.vaultParams =
            object.vaultParams !== undefined && object.vaultParams !== null
                ? VaultParams.fromPartial(object.vaultParams)
                : undefined;
        message.mostRecentClientIds =
            object.mostRecentClientIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseGenesisStateV6() {
    return {
        vaults: [],
        defaultQuotingParams: undefined,
    };
}
export const GenesisStateV6 = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaults) {
            Vault.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultQuotingParams !== undefined) {
            QuotingParams.encode(message.defaultQuotingParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisStateV6();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.vaults.push(Vault.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.defaultQuotingParams = QuotingParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisStateV6();
        message.vaults = object.vaults?.map((e) => Vault.fromPartial(e)) || [];
        message.defaultQuotingParams =
            object.defaultQuotingParams !== undefined &&
                object.defaultQuotingParams !== null
                ? QuotingParams.fromPartial(object.defaultQuotingParams)
                : undefined;
        return message;
    },
};
function createBaseVaultV6() {
    return {
        vaultId: undefined,
        totalShares: undefined,
        ownerShares: [],
        vaultParams: undefined,
        mostRecentClientIds: [],
    };
}
export const VaultV6 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalShares !== undefined) {
            NumShares.encode(message.totalShares, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ownerShares) {
            OwnerShare.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            VaultParams.encode(message.vaultParams, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(42).fork();
        for (const v of message.mostRecentClientIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultV6();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalShares = NumShares.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ownerShares.push(OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.vaultParams = VaultParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mostRecentClientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.mostRecentClientIds.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVaultV6();
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? NumShares.fromPartial(object.totalShares)
                : undefined;
        message.ownerShares =
            object.ownerShares?.map((e) => OwnerShare.fromPartial(e)) || [];
        message.vaultParams =
            object.vaultParams !== undefined && object.vaultParams !== null
                ? VaultParams.fromPartial(object.vaultParams)
                : undefined;
        message.mostRecentClientIds =
            object.mostRecentClientIds?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map