import * as _m0 from 'protobufjs/minimal.js';
function createBaseMarketMapperRevenueShareParams() {
    return {
        address: '',
        revenueSharePpm: 0,
        validDays: 0,
    };
}
export const MarketMapperRevenueShareParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.revenueSharePpm !== 0) {
            writer.uint32(16).uint32(message.revenueSharePpm);
        }
        if (message.validDays !== 0) {
            writer.uint32(24).uint32(message.validDays);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMapperRevenueShareParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.revenueSharePpm = reader.uint32();
                    break;
                case 3:
                    message.validDays = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketMapperRevenueShareParams();
        message.address = object.address ?? '';
        message.revenueSharePpm = object.revenueSharePpm ?? 0;
        message.validDays = object.validDays ?? 0;
        return message;
    },
};
//# sourceMappingURL=params.js.map