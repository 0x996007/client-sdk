/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coin } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
export var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    /** AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION - AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION defines an authorization type for Msg/MsgCancelUnbondingDelegation */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION"] = 4] = "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (AuthorizationType = {}));
export const AuthorizationTypeSDKType = AuthorizationType;
export function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'AUTHORIZATION_TYPE_UNSPECIFIED':
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'AUTHORIZATION_TYPE_DELEGATE':
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case 'AUTHORIZATION_TYPE_UNDELEGATE':
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case 'AUTHORIZATION_TYPE_REDELEGATE':
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case 4:
        case 'AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION':
            return AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
export function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return 'AUTHORIZATION_TYPE_UNSPECIFIED';
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return 'AUTHORIZATION_TYPE_DELEGATE';
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return 'AUTHORIZATION_TYPE_UNDELEGATE';
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return 'AUTHORIZATION_TYPE_REDELEGATE';
        case AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION:
            return 'AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION';
        case AuthorizationType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseStakeAuthorization() {
    return {
        maxTokens: undefined,
        allowList: undefined,
        denyList: undefined,
        authorizationType: 0,
    };
}
export const StakeAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxTokens !== undefined) {
            Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowList !== undefined) {
            StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
        }
        if (message.denyList !== undefined) {
            StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorizationType !== 0) {
            writer.uint32(32).int32(message.authorizationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxTokens = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authorizationType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization();
        message.maxTokens =
            object.maxTokens !== undefined && object.maxTokens !== null
                ? Coin.fromPartial(object.maxTokens)
                : undefined;
        message.allowList =
            object.allowList !== undefined && object.allowList !== null
                ? StakeAuthorization_Validators.fromPartial(object.allowList)
                : undefined;
        message.denyList =
            object.denyList !== undefined && object.denyList !== null
                ? StakeAuthorization_Validators.fromPartial(object.denyList)
                : undefined;
        message.authorizationType = object.authorizationType ?? 0;
        return message;
    },
};
function createBaseStakeAuthorization_Validators() {
    return {
        address: [],
    };
}
export const StakeAuthorization_Validators = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization_Validators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=authz.js.map