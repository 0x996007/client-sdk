/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long, toTimestamp, fromTimestamp, } from '../../../helpers.js';
function createBaseUpdateMarketPricesRequest() {
    return {
        marketPriceUpdates: [],
    };
}
export const UpdateMarketPricesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketPriceUpdates) {
            MarketPriceUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMarketPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPriceUpdates.push(MarketPriceUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateMarketPricesRequest();
        message.marketPriceUpdates =
            object.marketPriceUpdates?.map((e) => MarketPriceUpdate.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseUpdateMarketPricesResponse() {
    return {};
}
export const UpdateMarketPricesResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMarketPricesResponse();
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
        const message = createBaseUpdateMarketPricesResponse();
        return message;
    },
};
function createBaseExchangePrice() {
    return {
        exchangeId: '',
        price: Long.UZERO,
        lastUpdateTime: undefined,
    };
}
export const ExchangePrice = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchangeId !== '') {
            writer.uint32(10).string(message.exchangeId);
        }
        if (!message.price.isZero()) {
            writer.uint32(16).uint64(message.price);
        }
        if (message.lastUpdateTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastUpdateTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangePrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeId = reader.string();
                    break;
                case 2:
                    message.price = reader.uint64();
                    break;
                case 3:
                    message.lastUpdateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExchangePrice();
        message.exchangeId = object.exchangeId ?? '';
        message.price =
            object.price !== undefined && object.price !== null
                ? Long.fromValue(object.price)
                : Long.UZERO;
        message.lastUpdateTime = object.lastUpdateTime ?? undefined;
        return message;
    },
};
function createBaseMarketPriceUpdate() {
    return {
        marketId: 0,
        exchangePrices: [],
    };
}
export const MarketPriceUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        for (const v of message.exchangePrices) {
            ExchangePrice.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketPriceUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.exchangePrices.push(ExchangePrice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketPriceUpdate();
        message.marketId = object.marketId ?? 0;
        message.exchangePrices =
            object.exchangePrices?.map((e) => ExchangePrice.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=price_feed.js.map