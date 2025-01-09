import { Subaccount } from './subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        subaccounts: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subaccounts) {
            Subaccount.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.subaccounts.push(Subaccount.decode(reader, reader.uint32()));
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
        message.subaccounts =
            object.subaccounts?.map((e) => Subaccount.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map