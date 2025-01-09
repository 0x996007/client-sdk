/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { VestEntry } from './vest_entry.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgDeleteVestEntry() {
    return {
        authority: '',
        vesterAccount: '',
    };
}
export const MsgDeleteVestEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.vesterAccount !== '') {
            writer.uint32(18).string(message.vesterAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteVestEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgDeleteVestEntry();
        message.authority = object.authority ?? '';
        message.vesterAccount = object.vesterAccount ?? '';
        return message;
    },
};
function createBaseMsgDeleteVestEntryResponse() {
    return {};
}
export const MsgDeleteVestEntryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteVestEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteVestEntryResponse();
        return message;
    },
};
function createBaseMsgSetVestEntry() {
    return {
        authority: '',
        entry: undefined,
    };
}
export const MsgSetVestEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.entry !== undefined) {
            VestEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetVestEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgSetVestEntry();
        message.authority = object.authority ?? '';
        message.entry =
            object.entry !== undefined && object.entry !== null
                ? VestEntry.fromPartial(object.entry)
                : undefined;
        return message;
    },
};
function createBaseMsgSetVestEntryResponse() {
    return {};
}
export const MsgSetVestEntryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetVestEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSetVestEntryResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map