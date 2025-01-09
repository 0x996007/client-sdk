/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { LimitParams } from './limit_params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgSetLimitParams() {
    return {
        authority: '',
        limitParams: undefined,
    };
}
export const MsgSetLimitParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.limitParams !== undefined) {
            LimitParams.encode(message.limitParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetLimitParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.limitParams = LimitParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetLimitParams();
        message.authority = object.authority ?? '';
        message.limitParams =
            object.limitParams !== undefined && object.limitParams !== null
                ? LimitParams.fromPartial(object.limitParams)
                : undefined;
        return message;
    },
};
function createBaseMsgSetLimitParamsResponse() {
    return {};
}
export const MsgSetLimitParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetLimitParamsResponse();
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
        const message = createBaseMsgSetLimitParamsResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map