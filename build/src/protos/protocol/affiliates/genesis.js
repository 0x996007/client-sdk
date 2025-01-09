import { AffiliateTiers } from './affiliates.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        affiliateTiers: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.affiliateTiers !== undefined) {
            AffiliateTiers.encode(message.affiliateTiers, writer.uint32(10).fork()).ldelim();
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
                    message.affiliateTiers = AffiliateTiers.decode(reader, reader.uint32());
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
        message.affiliateTiers =
            object.affiliateTiers !== undefined && object.affiliateTiers !== null
                ? AffiliateTiers.fromPartial(object.affiliateTiers)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map