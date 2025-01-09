import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMarketPrice() {
    return {
        id: 0,
        exponent: 0,
        price: Long.UZERO,
    };
}
export const MarketPrice = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).sint32(message.exponent);
        }
        if (!message.price.isZero()) {
            writer.uint32(24).uint64(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.exponent = reader.sint32();
                    break;
                case 3:
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
        const message = createBaseMarketPrice();
        message.id = object.id ?? 0;
        message.exponent = object.exponent ?? 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? Long.fromValue(object.price)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=market_price.js.map