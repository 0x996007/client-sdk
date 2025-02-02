/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Any } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgGrantAllowance() {
    return {
        granter: '',
        grantee: '',
        allowance: undefined,
    };
}
export const MsgGrantAllowance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== '') {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== '') {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGrantAllowance();
        message.granter = object.granter ?? '';
        message.grantee = object.grantee ?? '';
        message.allowance =
            object.allowance !== undefined && object.allowance !== null
                ? Any.fromPartial(object.allowance)
                : undefined;
        return message;
    },
};
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
export const MsgGrantAllowanceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
};
function createBaseMsgRevokeAllowance() {
    return {
        granter: '',
        grantee: '',
    };
}
export const MsgRevokeAllowance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== '') {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== '') {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeAllowance();
        message.granter = object.granter ?? '';
        message.grantee = object.grantee ?? '';
        return message;
    },
};
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
export const MsgRevokeAllowanceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
};
function createBaseMsgPruneAllowances() {
    return {
        pruner: '',
    };
}
export const MsgPruneAllowances = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pruner !== '') {
            writer.uint32(10).string(message.pruner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAllowances();
        message.pruner = object.pruner ?? '';
        return message;
    },
};
function createBaseMsgPruneAllowancesResponse() {
    return {};
}
export const MsgPruneAllowancesResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowancesResponse();
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
        const message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map