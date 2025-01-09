/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { MarketMapperRevenueShareParams, } from './params.js';
import { MarketMapperRevShareDetails, UnconditionalRevShareConfig, } from './revshare.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryMarketMapperRevenueShareParams() {
    return {};
}
export const QueryMarketMapperRevenueShareParams = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapperRevenueShareParams();
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
        const message = createBaseQueryMarketMapperRevenueShareParams();
        return message;
    },
};
function createBaseQueryMarketMapperRevenueShareParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryMarketMapperRevenueShareParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            MarketMapperRevenueShareParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapperRevenueShareParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = MarketMapperRevenueShareParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketMapperRevenueShareParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? MarketMapperRevenueShareParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryMarketMapperRevShareDetails() {
    return {
        marketId: 0,
    };
}
export const QueryMarketMapperRevShareDetails = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapperRevShareDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketMapperRevShareDetails();
        message.marketId = object.marketId ?? 0;
        return message;
    },
};
function createBaseQueryMarketMapperRevShareDetailsResponse() {
    return {
        details: undefined,
    };
}
export const QueryMarketMapperRevShareDetailsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.details !== undefined) {
            MarketMapperRevShareDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapperRevShareDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.details = MarketMapperRevShareDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketMapperRevShareDetailsResponse();
        message.details =
            object.details !== undefined && object.details !== null
                ? MarketMapperRevShareDetails.fromPartial(object.details)
                : undefined;
        return message;
    },
};
function createBaseQueryUnconditionalRevShareConfig() {
    return {};
}
export const QueryUnconditionalRevShareConfig = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnconditionalRevShareConfig();
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
        const message = createBaseQueryUnconditionalRevShareConfig();
        return message;
    },
};
function createBaseQueryUnconditionalRevShareConfigResponse() {
    return {
        config: undefined,
    };
}
export const QueryUnconditionalRevShareConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            UnconditionalRevShareConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnconditionalRevShareConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = UnconditionalRevShareConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnconditionalRevShareConfigResponse();
        message.config =
            object.config !== undefined && object.config !== null
                ? UnconditionalRevShareConfig.fromPartial(object.config)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map