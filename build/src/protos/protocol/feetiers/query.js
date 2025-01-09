/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PerpetualFeeParams, PerpetualFeeTier, } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryPerpetualFeeParamsRequest() {
    return {};
}
export const QueryPerpetualFeeParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualFeeParamsRequest();
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
        const message = createBaseQueryPerpetualFeeParamsRequest();
        return message;
    },
};
function createBaseQueryPerpetualFeeParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryPerpetualFeeParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            PerpetualFeeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualFeeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = PerpetualFeeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualFeeParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? PerpetualFeeParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryUserFeeTierRequest() {
    return {
        user: '',
    };
}
export const QueryUserFeeTierRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserFeeTierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUserFeeTierRequest();
        message.user = object.user ?? '';
        return message;
    },
};
function createBaseQueryUserFeeTierResponse() {
    return {
        index: 0,
        tier: undefined,
    };
}
export const QueryUserFeeTierResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.tier !== undefined) {
            PerpetualFeeTier.encode(message.tier, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserFeeTierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.tier = PerpetualFeeTier.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUserFeeTierResponse();
        message.index = object.index ?? 0;
        message.tier =
            object.tier !== undefined && object.tier !== null
                ? PerpetualFeeTier.fromPartial(object.tier)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map