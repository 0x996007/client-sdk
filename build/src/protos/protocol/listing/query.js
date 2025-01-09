/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ListingVaultDepositParams, } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryMarketsHardCap() {
    return {};
}
export const QueryMarketsHardCap = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsHardCap();
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
        const message = createBaseQueryMarketsHardCap();
        return message;
    },
};
function createBaseQueryMarketsHardCapResponse() {
    return {
        hardCap: 0,
    };
}
export const QueryMarketsHardCapResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hardCap !== 0) {
            writer.uint32(8).uint32(message.hardCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsHardCapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardCap = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketsHardCapResponse();
        message.hardCap = object.hardCap ?? 0;
        return message;
    },
};
function createBaseQueryListingVaultDepositParams() {
    return {};
}
export const QueryListingVaultDepositParams = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingVaultDepositParams();
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
        const message = createBaseQueryListingVaultDepositParams();
        return message;
    },
};
function createBaseQueryListingVaultDepositParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryListingVaultDepositParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            ListingVaultDepositParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingVaultDepositParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = ListingVaultDepositParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryListingVaultDepositParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? ListingVaultDepositParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map