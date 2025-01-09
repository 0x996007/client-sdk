import { VestEntry } from './vest_entry.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryVestEntryRequest() {
    return {
        vesterAccount: '',
    };
}
export const QueryVestEntryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vesterAccount !== '') {
            writer.uint32(10).string(message.vesterAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVestEntryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vesterAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVestEntryRequest();
        message.vesterAccount = object.vesterAccount ?? '';
        return message;
    },
};
function createBaseQueryVestEntryResponse() {
    return {
        entry: undefined,
    };
}
export const QueryVestEntryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entry !== undefined) {
            VestEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVestEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = VestEntry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVestEntryResponse();
        message.entry =
            object.entry !== undefined && object.entry !== null
                ? VestEntry.fromPartial(object.entry)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map