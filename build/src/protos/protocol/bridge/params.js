import { Duration } from '../../google/protobuf/duration.js';
import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseEventParams() {
    return {
        denom: '',
        ethChainId: Long.UZERO,
        ethAddress: '',
    };
}
export const EventParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (!message.ethChainId.isZero()) {
            writer.uint32(16).uint64(message.ethChainId);
        }
        if (message.ethAddress !== '') {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.ethChainId = reader.uint64();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventParams();
        message.denom = object.denom ?? '';
        message.ethChainId =
            object.ethChainId !== undefined && object.ethChainId !== null
                ? Long.fromValue(object.ethChainId)
                : Long.UZERO;
        message.ethAddress = object.ethAddress ?? '';
        return message;
    },
};
function createBaseProposeParams() {
    return {
        maxBridgesPerBlock: 0,
        proposeDelayDuration: undefined,
        skipRatePpm: 0,
        skipIfBlockDelayedByDuration: undefined,
    };
}
export const ProposeParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxBridgesPerBlock !== 0) {
            writer.uint32(8).uint32(message.maxBridgesPerBlock);
        }
        if (message.proposeDelayDuration !== undefined) {
            Duration.encode(message.proposeDelayDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.skipRatePpm !== 0) {
            writer.uint32(24).uint32(message.skipRatePpm);
        }
        if (message.skipIfBlockDelayedByDuration !== undefined) {
            Duration.encode(message.skipIfBlockDelayedByDuration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBridgesPerBlock = reader.uint32();
                    break;
                case 2:
                    message.proposeDelayDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.skipRatePpm = reader.uint32();
                    break;
                case 4:
                    message.skipIfBlockDelayedByDuration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposeParams();
        message.maxBridgesPerBlock = object.maxBridgesPerBlock ?? 0;
        message.proposeDelayDuration =
            object.proposeDelayDuration !== undefined &&
                object.proposeDelayDuration !== null
                ? Duration.fromPartial(object.proposeDelayDuration)
                : undefined;
        message.skipRatePpm = object.skipRatePpm ?? 0;
        message.skipIfBlockDelayedByDuration =
            object.skipIfBlockDelayedByDuration !== undefined &&
                object.skipIfBlockDelayedByDuration !== null
                ? Duration.fromPartial(object.skipIfBlockDelayedByDuration)
                : undefined;
        return message;
    },
};
function createBaseSafetyParams() {
    return {
        isDisabled: false,
        delayBlocks: 0,
    };
}
export const SafetyParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isDisabled === true) {
            writer.uint32(8).bool(message.isDisabled);
        }
        if (message.delayBlocks !== 0) {
            writer.uint32(16).uint32(message.delayBlocks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSafetyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isDisabled = reader.bool();
                    break;
                case 2:
                    message.delayBlocks = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSafetyParams();
        message.isDisabled = object.isDisabled ?? false;
        message.delayBlocks = object.delayBlocks ?? 0;
        return message;
    },
};
//# sourceMappingURL=params.js.map