import { Timestamp } from '../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp } from '../../helpers.js';
function createBaseVestEntry() {
    return {
        vesterAccount: '',
        treasuryAccount: '',
        denom: '',
        startTime: undefined,
        endTime: undefined,
    };
}
export const VestEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vesterAccount !== '') {
            writer.uint32(10).string(message.vesterAccount);
        }
        if (message.treasuryAccount !== '') {
            writer.uint32(18).string(message.treasuryAccount);
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVestEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vesterAccount = reader.string();
                    break;
                case 2:
                    message.treasuryAccount = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVestEntry();
        message.vesterAccount = object.vesterAccount ?? '';
        message.treasuryAccount = object.treasuryAccount ?? '';
        message.denom = object.denom ?? '';
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        return message;
    },
};
//# sourceMappingURL=vest_entry.js.map