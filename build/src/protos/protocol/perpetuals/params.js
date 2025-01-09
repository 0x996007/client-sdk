import * as _m0 from 'protobufjs/minimal.js';
function createBaseParams() {
    return {
        fundingRateClampFactorPpm: 0,
        premiumVoteClampFactorPpm: 0,
        minNumVotesPerSample: 0,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fundingRateClampFactorPpm !== 0) {
            writer.uint32(8).uint32(message.fundingRateClampFactorPpm);
        }
        if (message.premiumVoteClampFactorPpm !== 0) {
            writer.uint32(16).uint32(message.premiumVoteClampFactorPpm);
        }
        if (message.minNumVotesPerSample !== 0) {
            writer.uint32(24).uint32(message.minNumVotesPerSample);
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
                    message.fundingRateClampFactorPpm = reader.uint32();
                    break;
                case 2:
                    message.premiumVoteClampFactorPpm = reader.uint32();
                    break;
                case 3:
                    message.minNumVotesPerSample = reader.uint32();
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
        message.fundingRateClampFactorPpm = object.fundingRateClampFactorPpm ?? 0;
        message.premiumVoteClampFactorPpm = object.premiumVoteClampFactorPpm ?? 0;
        message.minNumVotesPerSample = object.minNumVotesPerSample ?? 0;
        return message;
    },
};
//# sourceMappingURL=params.js.map