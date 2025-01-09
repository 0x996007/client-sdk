/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { AffiliateTiers, AffiliateWhitelist, } from './affiliates.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseAffiliateInfoRequest() {
    return {
        address: '',
    };
}
export const AffiliateInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateInfoRequest();
        message.address = object.address ?? '';
        return message;
    },
};
function createBaseAffiliateInfoResponse() {
    return {
        isWhitelisted: false,
        tier: 0,
        feeSharePpm: 0,
        referredVolume: new Uint8Array(),
        stakedAmount: new Uint8Array(),
    };
}
export const AffiliateInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isWhitelisted === true) {
            writer.uint32(8).bool(message.isWhitelisted);
        }
        if (message.tier !== 0) {
            writer.uint32(16).uint32(message.tier);
        }
        if (message.feeSharePpm !== 0) {
            writer.uint32(24).uint32(message.feeSharePpm);
        }
        if (message.referredVolume.length !== 0) {
            writer.uint32(34).bytes(message.referredVolume);
        }
        if (message.stakedAmount.length !== 0) {
            writer.uint32(42).bytes(message.stakedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isWhitelisted = reader.bool();
                    break;
                case 2:
                    message.tier = reader.uint32();
                    break;
                case 3:
                    message.feeSharePpm = reader.uint32();
                    break;
                case 4:
                    message.referredVolume = reader.bytes();
                    break;
                case 5:
                    message.stakedAmount = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateInfoResponse();
        message.isWhitelisted = object.isWhitelisted ?? false;
        message.tier = object.tier ?? 0;
        message.feeSharePpm = object.feeSharePpm ?? 0;
        message.referredVolume = object.referredVolume ?? new Uint8Array();
        message.stakedAmount = object.stakedAmount ?? new Uint8Array();
        return message;
    },
};
function createBaseReferredByRequest() {
    return {
        address: '',
    };
}
export const ReferredByRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReferredByRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseReferredByRequest();
        message.address = object.address ?? '';
        return message;
    },
};
function createBaseReferredByResponse() {
    return {
        affiliateAddress: '',
    };
}
export const ReferredByResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.affiliateAddress !== '') {
            writer.uint32(10).string(message.affiliateAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReferredByResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.affiliateAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseReferredByResponse();
        message.affiliateAddress = object.affiliateAddress ?? '';
        return message;
    },
};
function createBaseAllAffiliateTiersRequest() {
    return {};
}
export const AllAffiliateTiersRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAffiliateTiersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseAllAffiliateTiersRequest();
        return message;
    },
};
function createBaseAllAffiliateTiersResponse() {
    return {
        tiers: undefined,
    };
}
export const AllAffiliateTiersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tiers !== undefined) {
            AffiliateTiers.encode(message.tiers, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAffiliateTiersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tiers = AffiliateTiers.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllAffiliateTiersResponse();
        message.tiers =
            object.tiers !== undefined && object.tiers !== null
                ? AffiliateTiers.fromPartial(object.tiers)
                : undefined;
        return message;
    },
};
function createBaseAffiliateWhitelistRequest() {
    return {};
}
export const AffiliateWhitelistRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateWhitelistRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseAffiliateWhitelistRequest();
        return message;
    },
};
function createBaseAffiliateWhitelistResponse() {
    return {
        whitelist: undefined,
    };
}
export const AffiliateWhitelistResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.whitelist !== undefined) {
            AffiliateWhitelist.encode(message.whitelist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAffiliateWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.whitelist = AffiliateWhitelist.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAffiliateWhitelistResponse();
        message.whitelist =
            object.whitelist !== undefined && object.whitelist !== null
                ? AffiliateWhitelist.fromPartial(object.whitelist)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map