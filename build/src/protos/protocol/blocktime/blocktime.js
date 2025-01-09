import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Duration } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp } from '../../helpers.js';
function createBaseBlockInfo() {
    return {
        height: 0,
        timestamp: undefined,
    };
}
export const BlockInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint32(message.height);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint32();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockInfo();
        message.height = object.height ?? 0;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function createBaseAllDowntimeInfo() {
    return {
        infos: [],
    };
}
export const AllDowntimeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.infos) {
            AllDowntimeInfo_DowntimeInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllDowntimeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infos.push(AllDowntimeInfo_DowntimeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllDowntimeInfo();
        message.infos =
            object.infos?.map((e) => AllDowntimeInfo_DowntimeInfo.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseAllDowntimeInfo_DowntimeInfo() {
    return {
        duration: undefined,
        blockInfo: undefined,
    };
}
export const AllDowntimeInfo_DowntimeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockInfo !== undefined) {
            BlockInfo.encode(message.blockInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllDowntimeInfo_DowntimeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockInfo = BlockInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllDowntimeInfo_DowntimeInfo();
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.blockInfo =
            object.blockInfo !== undefined && object.blockInfo !== null
                ? BlockInfo.fromPartial(object.blockInfo)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=blocktime.js.map