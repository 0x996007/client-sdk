/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { MarketParam } from './market_param.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseMsgCreateOracleMarket() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgCreateOracleMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            MarketParam.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOracleMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = MarketParam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateOracleMarket();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? MarketParam.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgCreateOracleMarketResponse() {
    return {};
}
export const MsgCreateOracleMarketResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOracleMarketResponse();
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
        const message = createBaseMsgCreateOracleMarketResponse();
        return message;
    },
};
function createBaseMsgUpdateMarketPrices() {
    return {
        marketPriceUpdates: [],
    };
}
export const MsgUpdateMarketPrices = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketPriceUpdates) {
            MsgUpdateMarketPrices_MarketPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPriceUpdates.push(MsgUpdateMarketPrices_MarketPrice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateMarketPrices();
        message.marketPriceUpdates =
            object.marketPriceUpdates?.map((e) => MsgUpdateMarketPrices_MarketPrice.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateMarketPrices_MarketPrice() {
    return {
        marketId: 0,
        price: Long.UZERO,
    };
}
export const MsgUpdateMarketPrices_MarketPrice = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        if (!message.price.isZero()) {
            writer.uint32(16).uint64(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketPrices_MarketPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.price = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateMarketPrices_MarketPrice();
        message.marketId = object.marketId ?? 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? Long.fromValue(object.price)
                : Long.UZERO;
        return message;
    },
};
function createBaseMsgUpdateMarketPricesResponse() {
    return {};
}
export const MsgUpdateMarketPricesResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketPricesResponse();
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
        const message = createBaseMsgUpdateMarketPricesResponse();
        return message;
    },
};
function createBaseMsgUpdateMarketParam() {
    return {
        authority: '',
        marketParam: undefined,
    };
}
export const MsgUpdateMarketParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.marketParam !== undefined) {
            MarketParam.encode(message.marketParam, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.marketParam = MarketParam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateMarketParam();
        message.authority = object.authority ?? '';
        message.marketParam =
            object.marketParam !== undefined && object.marketParam !== null
                ? MarketParam.fromPartial(object.marketParam)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateMarketParamResponse() {
    return {};
}
export const MsgUpdateMarketParamResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketParamResponse();
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
        const message = createBaseMsgUpdateMarketParamResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map