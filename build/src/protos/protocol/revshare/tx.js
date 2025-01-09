/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { MarketMapperRevenueShareParams, } from './params.js';
import { MarketMapperRevShareDetails, UnconditionalRevShareConfig, } from './revshare.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgSetMarketMapperRevenueShare() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgSetMarketMapperRevenueShare = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            MarketMapperRevenueShareParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketMapperRevenueShare();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgSetMarketMapperRevenueShare();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? MarketMapperRevenueShareParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgSetMarketMapperRevenueShareResponse() {
    return {};
}
export const MsgSetMarketMapperRevenueShareResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketMapperRevenueShareResponse();
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
        const message = createBaseMsgSetMarketMapperRevenueShareResponse();
        return message;
    },
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarket() {
    return {
        authority: '',
        marketId: 0,
        params: undefined,
    };
}
export const MsgSetMarketMapperRevShareDetailsForMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.marketId !== 0) {
            writer.uint32(16).uint32(message.marketId);
        }
        if (message.params !== undefined) {
            MarketMapperRevShareDetails.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.marketId = reader.uint32();
                    break;
                case 3:
                    message.params = MarketMapperRevShareDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMarketMapperRevShareDetailsForMarket();
        message.authority = object.authority ?? '';
        message.marketId = object.marketId ?? 0;
        message.params =
            object.params !== undefined && object.params !== null
                ? MarketMapperRevShareDetails.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse() {
    return {};
}
export const MsgSetMarketMapperRevShareDetailsForMarketResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
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
        const message = createBaseMsgSetMarketMapperRevShareDetailsForMarketResponse();
        return message;
    },
};
function createBaseMsgUpdateUnconditionalRevShareConfig() {
    return {
        authority: '',
        config: undefined,
    };
}
export const MsgUpdateUnconditionalRevShareConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.config !== undefined) {
            UnconditionalRevShareConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateUnconditionalRevShareConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpdateUnconditionalRevShareConfig();
        message.authority = object.authority ?? '';
        message.config =
            object.config !== undefined && object.config !== null
                ? UnconditionalRevShareConfig.fromPartial(object.config)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateUnconditionalRevShareConfigResponse() {
    return {};
}
export const MsgUpdateUnconditionalRevShareConfigResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateUnconditionalRevShareConfigResponse();
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
        const message = createBaseMsgUpdateUnconditionalRevShareConfigResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map