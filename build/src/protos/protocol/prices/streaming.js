import { MarketPrice } from './market_price.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseStreamPriceUpdate() {
    return {
        marketId: 0,
        price: undefined,
        snapshot: false,
    };
}
export const StreamPriceUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        if (message.price !== undefined) {
            MarketPrice.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.snapshot === true) {
            writer.uint32(24).bool(message.snapshot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamPriceUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.price = MarketPrice.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.snapshot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamPriceUpdate();
        message.marketId = object.marketId ?? 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? MarketPrice.fromPartial(object.price)
                : undefined;
        message.snapshot = object.snapshot ?? false;
        return message;
    },
};
//# sourceMappingURL=streaming.js.map