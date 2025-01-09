import { Duration } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseLimitParams() {
    return {
        denom: '',
        limiters: [],
    };
}
export const LimitParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        for (const v of message.limiters) {
            Limiter.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.limiters.push(Limiter.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLimitParams();
        message.denom = object.denom ?? '';
        message.limiters =
            object.limiters?.map((e) => Limiter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLimiter() {
    return {
        period: undefined,
        baselineMinimum: new Uint8Array(),
        baselineTvlPpm: 0,
    };
}
export const Limiter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.period !== undefined) {
            Duration.encode(message.period, writer.uint32(10).fork()).ldelim();
        }
        if (message.baselineMinimum.length !== 0) {
            writer.uint32(26).bytes(message.baselineMinimum);
        }
        if (message.baselineTvlPpm !== 0) {
            writer.uint32(32).uint32(message.baselineTvlPpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimiter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.period = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.baselineMinimum = reader.bytes();
                    break;
                case 4:
                    message.baselineTvlPpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLimiter();
        message.period =
            object.period !== undefined && object.period !== null
                ? Duration.fromPartial(object.period)
                : undefined;
        message.baselineMinimum = object.baselineMinimum ?? new Uint8Array();
        message.baselineTvlPpm = object.baselineTvlPpm ?? 0;
        return message;
    },
};
//# sourceMappingURL=limit_params.js.map