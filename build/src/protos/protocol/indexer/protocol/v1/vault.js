/* eslint-disable @typescript-eslint/no-explicit-any */
/** VaultStatus represents the status of a vault. */
export var VaultStatus;
(function (VaultStatus) {
    /** VAULT_STATUS_UNSPECIFIED - Default value, invalid and unused. */
    VaultStatus[VaultStatus["VAULT_STATUS_UNSPECIFIED"] = 0] = "VAULT_STATUS_UNSPECIFIED";
    /** VAULT_STATUS_DEACTIVATED - Don’t place orders. Does not count toward global vault balances. */
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
//# sourceMappingURL=vault.js.map