import { Timestamp } from '../../../google/protobuf/timestamp.js';
import { Duration, } from '../../../google/protobuf/duration.js';
import { Long, toTimestamp, fromTimestamp, } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseValidatorSigningInfo() {
    return {
        address: '',
        startHeight: Long.ZERO,
        indexOffset: Long.ZERO,
        jailedUntil: undefined,
        tombstoned: false,
        missedBlocksCounter: Long.ZERO,
    };
}
export const ValidatorSigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? '';
        message.startHeight =
            object.startHeight !== undefined && object.startHeight !== null
                ? Long.fromValue(object.startHeight)
                : Long.ZERO;
        message.indexOffset =
            object.indexOffset !== undefined && object.indexOffset !== null
                ? Long.fromValue(object.indexOffset)
                : Long.ZERO;
        message.jailedUntil = object.jailedUntil ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter =
            object.missedBlocksCounter !== undefined &&
                object.missedBlocksCounter !== null
                ? Long.fromValue(object.missedBlocksCounter)
                : Long.ZERO;
        return message;
    },
};
function createBaseParams() {
    return {
        signedBlocksWindow: Long.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: undefined,
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array(),
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signedBlocksWindow =
            object.signedBlocksWindow !== undefined &&
                object.signedBlocksWindow !== null
                ? Long.fromValue(object.signedBlocksWindow)
                : Long.ZERO;
        message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
        message.downtimeJailDuration =
            object.downtimeJailDuration !== undefined &&
                object.downtimeJailDuration !== null
                ? Duration.fromPartial(object.downtimeJailDuration)
                : undefined;
        message.slashFractionDoubleSign =
            object.slashFractionDoubleSign ?? new Uint8Array();
        message.slashFractionDowntime =
            object.slashFractionDowntime ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=slashing.js.map