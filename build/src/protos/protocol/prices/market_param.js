import * as _m0 from 'protobufjs/minimal.js';
function createBaseMarketParam() {
    return {
        id: 0,
        pair: '',
        exponent: 0,
        minExchanges: 0,
        minPriceChangePpm: 0,
        exchangeConfigJson: '',
    };
}
export const MarketParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.pair !== '') {
            writer.uint32(18).string(message.pair);
        }
        if (message.exponent !== 0) {
            writer.uint32(24).sint32(message.exponent);
        }
        if (message.minExchanges !== 0) {
            writer.uint32(32).uint32(message.minExchanges);
        }
        if (message.minPriceChangePpm !== 0) {
            writer.uint32(40).uint32(message.minPriceChangePpm);
        }
        if (message.exchangeConfigJson !== '') {
            writer.uint32(50).string(message.exchangeConfigJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.pair = reader.string();
                    break;
                case 3:
                    message.exponent = reader.sint32();
                    break;
                case 4:
                    message.minExchanges = reader.uint32();
                    break;
                case 5:
                    message.minPriceChangePpm = reader.uint32();
                    break;
                case 6:
                    message.exchangeConfigJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketParam();
        message.id = object.id ?? 0;
        message.pair = object.pair ?? '';
        message.exponent = object.exponent ?? 0;
        message.minExchanges = object.minExchanges ?? 0;
        message.minPriceChangePpm = object.minPriceChangePpm ?? 0;
        message.exchangeConfigJson = object.exchangeConfigJson ?? '';
        return message;
    },
};
//# sourceMappingURL=market_param.js.map