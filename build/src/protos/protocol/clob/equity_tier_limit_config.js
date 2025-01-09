import * as _m0 from 'protobufjs/minimal.js';
function createBaseEquityTierLimitConfiguration() {
    return {
        shortTermOrderEquityTiers: [],
        statefulOrderEquityTiers: [],
    };
}
export const EquityTierLimitConfiguration = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.shortTermOrderEquityTiers) {
            EquityTierLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.statefulOrderEquityTiers) {
            EquityTierLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquityTierLimitConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shortTermOrderEquityTiers.push(EquityTierLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.statefulOrderEquityTiers.push(EquityTierLimit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEquityTierLimitConfiguration();
        message.shortTermOrderEquityTiers =
            object.shortTermOrderEquityTiers?.map((e) => EquityTierLimit.fromPartial(e)) || [];
        message.statefulOrderEquityTiers =
            object.statefulOrderEquityTiers?.map((e) => EquityTierLimit.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEquityTierLimit() {
    return {
        usdTncRequired: new Uint8Array(),
        limit: 0,
    };
}
export const EquityTierLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.usdTncRequired.length !== 0) {
            writer.uint32(10).bytes(message.usdTncRequired);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquityTierLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.usdTncRequired = reader.bytes();
                    break;
                case 2:
                    message.limit = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEquityTierLimit();
        message.usdTncRequired = object.usdTncRequired ?? new Uint8Array();
        message.limit = object.limit ?? 0;
        return message;
    },
};
//# sourceMappingURL=equity_tier_limit_config.js.map