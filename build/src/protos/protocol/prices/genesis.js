import { MarketParam } from './market_param.js';
import { MarketPrice } from './market_price.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        marketParams: [],
        marketPrices: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.marketParams) {
            MarketParam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.marketPrices) {
            MarketPrice.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketParams.push(MarketParam.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.marketPrices.push(MarketPrice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.marketParams =
            object.marketParams?.map((e) => MarketParam.fromPartial(e)) || [];
        message.marketPrices =
            object.marketPrices?.map((e) => MarketPrice.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map