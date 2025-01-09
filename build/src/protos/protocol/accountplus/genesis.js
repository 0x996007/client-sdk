import { AccountAuthenticator } from './models.js';
import { AccountState } from './accountplus.js';
import { Params } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseAuthenticatorData() {
    return {
        address: '',
        authenticators: [],
    };
}
export const AuthenticatorData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.authenticators) {
            AccountAuthenticator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthenticatorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.authenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuthenticatorData();
        message.address = object.address ?? '';
        message.authenticators =
            object.authenticators?.map((e) => AccountAuthenticator.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseGenesisState() {
    return {
        accounts: [],
        params: undefined,
        nextAuthenticatorId: Long.UZERO,
        authenticatorData: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            AccountState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (!message.nextAuthenticatorId.isZero()) {
            writer.uint32(24).uint64(message.nextAuthenticatorId);
        }
        for (const v of message.authenticatorData) {
            AuthenticatorData.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(AccountState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextAuthenticatorId = reader.uint64();
                    break;
                case 4:
                    message.authenticatorData.push(AuthenticatorData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.accounts =
            object.accounts?.map((e) => AccountState.fromPartial(e)) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        message.nextAuthenticatorId =
            object.nextAuthenticatorId !== undefined &&
                object.nextAuthenticatorId !== null
                ? Long.fromValue(object.nextAuthenticatorId)
                : Long.UZERO;
        message.authenticatorData =
            object.authenticatorData?.map((e) => AuthenticatorData.fromPartial(e)) ||
                [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map