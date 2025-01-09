import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseAffiliateTiers() {
    return {
        tiers: [],
    };
}
export const AffiliateTiers = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tiers) {
            AffiliateTiers_Tier.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateTiers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tiers.push(AffiliateTiers_Tier.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateTiers();
        message.tiers =
            object.tiers?.map((e) => AffiliateTiers_Tier.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAffiliateTiers_Tier() {
    return {
        reqReferredVolumeQuoteQuantums: Long.UZERO,
        reqStakedWholeCoins: 0,
        takerFeeSharePpm: 0,
    };
}
export const AffiliateTiers_Tier = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.reqReferredVolumeQuoteQuantums.isZero()) {
            writer.uint32(8).uint64(message.reqReferredVolumeQuoteQuantums);
        }
        if (message.reqStakedWholeCoins !== 0) {
            writer.uint32(16).uint32(message.reqStakedWholeCoins);
        }
        if (message.takerFeeSharePpm !== 0) {
            writer.uint32(24).uint32(message.takerFeeSharePpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateTiers_Tier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reqReferredVolumeQuoteQuantums = reader.uint64();
                    break;
                case 2:
                    message.reqStakedWholeCoins = reader.uint32();
                    break;
                case 3:
                    message.takerFeeSharePpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateTiers_Tier();
        message.reqReferredVolumeQuoteQuantums =
            object.reqReferredVolumeQuoteQuantums !== undefined &&
                object.reqReferredVolumeQuoteQuantums !== null
                ? Long.fromValue(object.reqReferredVolumeQuoteQuantums)
                : Long.UZERO;
        message.reqStakedWholeCoins = object.reqStakedWholeCoins ?? 0;
        message.takerFeeSharePpm = object.takerFeeSharePpm ?? 0;
        return message;
    },
};
function createBaseAffiliateWhitelist() {
    return {
        tiers: [],
    };
}
export const AffiliateWhitelist = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tiers) {
            AffiliateWhitelist_Tier.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateWhitelist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tiers.push(AffiliateWhitelist_Tier.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateWhitelist();
        message.tiers =
            object.tiers?.map((e) => AffiliateWhitelist_Tier.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAffiliateWhitelist_Tier() {
    return {
        addresses: [],
        takerFeeSharePpm: 0,
    };
}
export const AffiliateWhitelist_Tier = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        if (message.takerFeeSharePpm !== 0) {
            writer.uint32(16).uint32(message.takerFeeSharePpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateWhitelist_Tier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                case 2:
                    message.takerFeeSharePpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateWhitelist_Tier();
        message.addresses = object.addresses?.map((e) => e) || [];
        message.takerFeeSharePpm = object.takerFeeSharePpm ?? 0;
        return message;
    },
};
//# sourceMappingURL=affiliates.js.map