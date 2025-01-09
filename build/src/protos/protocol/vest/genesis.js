import { VestEntry } from './vest_entry.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        vestEntries: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vestEntries) {
            VestEntry.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.vestEntries.push(VestEntry.decode(reader, reader.uint32()));
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
        message.vestEntries =
            object.vestEntries?.map((e) => VestEntry.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map