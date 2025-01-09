import * as _m0 from 'protobufjs/minimal.js';
function createBaseParams() {
    return {
        treasuryAccount: '',
        denom: '',
        denomExponent: 0,
        marketId: 0,
        feeMultiplierPpm: 0,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.treasuryAccount !== '') {
            writer.uint32(10).string(message.treasuryAccount);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.denomExponent !== 0) {
            writer.uint32(24).sint32(message.denomExponent);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.feeMultiplierPpm !== 0) {
            writer.uint32(40).uint32(message.feeMultiplierPpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.treasuryAccount = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.denomExponent = reader.sint32();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.feeMultiplierPpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.treasuryAccount = object.treasuryAccount ?? '';
        message.denom = object.denom ?? '';
        message.denomExponent = object.denomExponent ?? 0;
        message.marketId = object.marketId ?? 0;
        message.feeMultiplierPpm = object.feeMultiplierPpm ?? 0;
        return message;
    },
};
//# sourceMappingURL=params.js.map