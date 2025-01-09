/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Params } from './params.js';
import { AccountAuthenticator } from './models.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseGetAuthenticatorsRequest() {
    return {
        account: '',
    };
}
export const GetAuthenticatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorsRequest();
        message.account = object.account ?? '';
        return message;
    },
};
function createBaseGetAuthenticatorsResponse() {
    return {
        accountAuthenticators: [],
    };
}
export const GetAuthenticatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accountAuthenticators) {
            AccountAuthenticator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAuthenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorsResponse();
        message.accountAuthenticators =
            object.accountAuthenticators?.map((e) => AccountAuthenticator.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetAuthenticatorRequest() {
    return {
        account: '',
        authenticatorId: Long.UZERO,
    };
}
export const GetAuthenticatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (!message.authenticatorId.isZero()) {
            writer.uint32(16).uint64(message.authenticatorId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.authenticatorId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorRequest();
        message.account = object.account ?? '';
        message.authenticatorId =
            object.authenticatorId !== undefined && object.authenticatorId !== null
                ? Long.fromValue(object.authenticatorId)
                : Long.UZERO;
        return message;
    },
};
function createBaseGetAuthenticatorResponse() {
    return {
        accountAuthenticator: undefined,
    };
}
export const GetAuthenticatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAuthenticator !== undefined) {
            AccountAuthenticator.encode(message.accountAuthenticator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAuthenticator = AccountAuthenticator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatorResponse();
        message.accountAuthenticator =
            object.accountAuthenticator !== undefined &&
                object.accountAuthenticator !== null
                ? AccountAuthenticator.fromPartial(object.accountAuthenticator)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map