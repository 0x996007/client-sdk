import { ListingVaultDepositParams, } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        hardCapForMarkets: 0,
        listingVaultDepositParams: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hardCapForMarkets !== 0) {
            writer.uint32(8).uint32(message.hardCapForMarkets);
        }
        if (message.listingVaultDepositParams !== undefined) {
            ListingVaultDepositParams.encode(message.listingVaultDepositParams, writer.uint32(18).fork()).ldelim();
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
                    message.hardCapForMarkets = reader.uint32();
                    break;
                case 2:
                    message.listingVaultDepositParams = ListingVaultDepositParams.decode(reader, reader.uint32());
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
        message.hardCapForMarkets = object.hardCapForMarkets ?? 0;
        message.listingVaultDepositParams =
            object.listingVaultDepositParams !== undefined &&
                object.listingVaultDepositParams !== null
                ? ListingVaultDepositParams.fromPartial(object.listingVaultDepositParams)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map