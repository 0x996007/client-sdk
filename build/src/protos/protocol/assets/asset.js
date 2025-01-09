import * as _m0 from 'protobufjs/minimal.js';
function createBaseAsset() {
    return {
        id: 0,
        symbol: '',
        denom: '',
        denomExponent: 0,
        hasMarket: false,
        marketId: 0,
        atomicResolution: 0,
    };
}
export const Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.symbol !== '') {
            writer.uint32(18).string(message.symbol);
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        if (message.denomExponent !== 0) {
            writer.uint32(32).sint32(message.denomExponent);
        }
        if (message.hasMarket === true) {
            writer.uint32(40).bool(message.hasMarket);
        }
        if (message.marketId !== 0) {
            writer.uint32(48).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.denomExponent = reader.sint32();
                    break;
                case 5:
                    message.hasMarket = reader.bool();
                    break;
                case 6:
                    message.marketId = reader.uint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAsset();
        message.id = object.id ?? 0;
        message.symbol = object.symbol ?? '';
        message.denom = object.denom ?? '';
        message.denomExponent = object.denomExponent ?? 0;
        message.hasMarket = object.hasMarket ?? false;
        message.marketId = object.marketId ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        return message;
    },
};
//# sourceMappingURL=asset.js.map