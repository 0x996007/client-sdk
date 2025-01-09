import { Duration } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseDowntimeParams() {
    return {
        durations: [],
    };
}
export const DowntimeParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.durations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDowntimeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.durations.push(Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDowntimeParams();
        message.durations =
            object.durations?.map((e) => Duration.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSynchronyParams() {
    return {
        nextBlockDelay: undefined,
    };
}
export const SynchronyParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextBlockDelay !== undefined) {
            Duration.encode(message.nextBlockDelay, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSynchronyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextBlockDelay = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSynchronyParams();
        message.nextBlockDelay =
            object.nextBlockDelay !== undefined && object.nextBlockDelay !== null
                ? Duration.fromPartial(object.nextBlockDelay)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=params.js.map