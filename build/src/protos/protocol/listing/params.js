import * as _m0 from 'protobufjs/minimal.js';
function createBaseListingVaultDepositParams() {
    return {
        newVaultDepositAmount: new Uint8Array(),
        mainVaultDepositAmount: new Uint8Array(),
        numBlocksToLockShares: 0,
    };
}
export const ListingVaultDepositParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newVaultDepositAmount.length !== 0) {
            writer.uint32(10).bytes(message.newVaultDepositAmount);
        }
        if (message.mainVaultDepositAmount.length !== 0) {
            writer.uint32(18).bytes(message.mainVaultDepositAmount);
        }
        if (message.numBlocksToLockShares !== 0) {
            writer.uint32(24).uint32(message.numBlocksToLockShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListingVaultDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newVaultDepositAmount = reader.bytes();
                    break;
                case 2:
                    message.mainVaultDepositAmount = reader.bytes();
                    break;
                case 3:
                    message.numBlocksToLockShares = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListingVaultDepositParams();
        message.newVaultDepositAmount =
            object.newVaultDepositAmount ?? new Uint8Array();
        message.mainVaultDepositAmount =
            object.mainVaultDepositAmount ?? new Uint8Array();
        message.numBlocksToLockShares = object.numBlocksToLockShares ?? 0;
        return message;
    },
};
//# sourceMappingURL=params.js.map