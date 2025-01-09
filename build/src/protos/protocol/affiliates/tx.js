/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { AffiliateTiers, AffiliateWhitelist, } from './affiliates.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgRegisterAffiliate() {
    return {
        referee: '',
        affiliate: '',
    };
}
export const MsgRegisterAffiliate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.referee !== '') {
            writer.uint32(10).string(message.referee);
        }
        if (message.affiliate !== '') {
            writer.uint32(18).string(message.affiliate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAffiliate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referee = reader.string();
                    break;
                case 2:
                    message.affiliate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterAffiliate();
        message.referee = object.referee ?? '';
        message.affiliate = object.affiliate ?? '';
        return message;
    },
};
function createBaseMsgRegisterAffiliateResponse() {
    return {};
}
export const MsgRegisterAffiliateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAffiliateResponse();
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
        const message = createBaseMsgRegisterAffiliateResponse();
        return message;
    },
};
function createBaseMsgUpdateAffiliateTiers() {
    return {
        authority: '',
        tiers: undefined,
    };
}
export const MsgUpdateAffiliateTiers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.tiers !== undefined) {
            AffiliateTiers.encode(message.tiers, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAffiliateTiers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpdateAffiliateTiers();
        message.authority = object.authority ?? '';
        message.tiers =
            object.tiers !== undefined && object.tiers !== null
                ? AffiliateTiers.fromPartial(object.tiers)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateAffiliateTiersResponse() {
    return {};
}
export const MsgUpdateAffiliateTiersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAffiliateTiersResponse();
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
        const message = createBaseMsgUpdateAffiliateTiersResponse();
        return message;
    },
};
function createBaseMsgUpdateAffiliateWhitelist() {
    return {
        authority: '',
        whitelist: undefined,
    };
}
export const MsgUpdateAffiliateWhitelist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.whitelist !== undefined) {
            AffiliateWhitelist.encode(message.whitelist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAffiliateWhitelist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpdateAffiliateWhitelist();
        message.authority = object.authority ?? '';
        message.whitelist =
            object.whitelist !== undefined && object.whitelist !== null
                ? AffiliateWhitelist.fromPartial(object.whitelist)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateAffiliateWhitelistResponse() {
    return {};
}
export const MsgUpdateAffiliateWhitelistResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAffiliateWhitelistResponse();
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
        const message = createBaseMsgUpdateAffiliateWhitelistResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map