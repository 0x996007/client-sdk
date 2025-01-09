/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _m0 from 'protobufjs/minimal.js';
/** VaultType represents different types of vaults. */
export var VaultType;
(function (VaultType) {
    /** VAULT_TYPE_UNSPECIFIED - Default value, invalid and unused. */
    VaultType[VaultType["VAULT_TYPE_UNSPECIFIED"] = 0] = "VAULT_TYPE_UNSPECIFIED";
    /** VAULT_TYPE_CLOB - Vault is associated with a CLOB pair. */
    VaultType[VaultType["VAULT_TYPE_CLOB"] = 1] = "VAULT_TYPE_CLOB";
    VaultType[VaultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VaultType || (VaultType = {}));
export const VaultTypeSDKType = VaultType;
export function vaultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'VAULT_TYPE_UNSPECIFIED':
            return VaultType.VAULT_TYPE_UNSPECIFIED;
        case 1:
        case 'VAULT_TYPE_CLOB':
            return VaultType.VAULT_TYPE_CLOB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return VaultType.UNRECOGNIZED;
    }
}
export function vaultTypeToJSON(object) {
    switch (object) {
        case VaultType.VAULT_TYPE_UNSPECIFIED:
            return 'VAULT_TYPE_UNSPECIFIED';
        case VaultType.VAULT_TYPE_CLOB:
            return 'VAULT_TYPE_CLOB';
        case VaultType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** VaultStatus represents the status of a vault. */
export var VaultStatus;
(function (VaultStatus) {
    /** VAULT_STATUS_UNSPECIFIED - Default value, invalid and unused. */
    VaultStatus[VaultStatus["VAULT_STATUS_UNSPECIFIED"] = 0] = "VAULT_STATUS_UNSPECIFIED";
    /**
     * VAULT_STATUS_DEACTIVATED - Don’t place orders. Does not count toward global vault balances.
     * A vault can only be set to this status if its equity is non-positive.
     */
    VaultStatus[VaultStatus["VAULT_STATUS_DEACTIVATED"] = 1] = "VAULT_STATUS_DEACTIVATED";
    /** VAULT_STATUS_STAND_BY - Don’t place orders. Does count towards global vault balances. */
    VaultStatus[VaultStatus["VAULT_STATUS_STAND_BY"] = 2] = "VAULT_STATUS_STAND_BY";
    /** VAULT_STATUS_QUOTING - Places orders on both sides of the book. */
    VaultStatus[VaultStatus["VAULT_STATUS_QUOTING"] = 3] = "VAULT_STATUS_QUOTING";
    /** VAULT_STATUS_CLOSE_ONLY - Only place orders that close the position. */
    VaultStatus[VaultStatus["VAULT_STATUS_CLOSE_ONLY"] = 4] = "VAULT_STATUS_CLOSE_ONLY";
    VaultStatus[VaultStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VaultStatus || (VaultStatus = {}));
export const VaultStatusSDKType = VaultStatus;
export function vaultStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'VAULT_STATUS_UNSPECIFIED':
            return VaultStatus.VAULT_STATUS_UNSPECIFIED;
        case 1:
        case 'VAULT_STATUS_DEACTIVATED':
            return VaultStatus.VAULT_STATUS_DEACTIVATED;
        case 2:
        case 'VAULT_STATUS_STAND_BY':
            return VaultStatus.VAULT_STATUS_STAND_BY;
        case 3:
        case 'VAULT_STATUS_QUOTING':
            return VaultStatus.VAULT_STATUS_QUOTING;
        case 4:
        case 'VAULT_STATUS_CLOSE_ONLY':
            return VaultStatus.VAULT_STATUS_CLOSE_ONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return VaultStatus.UNRECOGNIZED;
    }
}
export function vaultStatusToJSON(object) {
    switch (object) {
        case VaultStatus.VAULT_STATUS_UNSPECIFIED:
            return 'VAULT_STATUS_UNSPECIFIED';
        case VaultStatus.VAULT_STATUS_DEACTIVATED:
            return 'VAULT_STATUS_DEACTIVATED';
        case VaultStatus.VAULT_STATUS_STAND_BY:
            return 'VAULT_STATUS_STAND_BY';
        case VaultStatus.VAULT_STATUS_QUOTING:
            return 'VAULT_STATUS_QUOTING';
        case VaultStatus.VAULT_STATUS_CLOSE_ONLY:
            return 'VAULT_STATUS_CLOSE_ONLY';
        case VaultStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseVaultId() {
    return {
        type: 0,
        number: 0,
    };
}
export const VaultId = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.number = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVaultId();
        message.type = object.type ?? 0;
        message.number = object.number ?? 0;
        return message;
    },
};
//# sourceMappingURL=vault.js.map