/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PerpetualFeeParams } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgUpdatePerpetualFeeParams() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgUpdatePerpetualFeeParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            PerpetualFeeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePerpetualFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = PerpetualFeeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdatePerpetualFeeParams();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? PerpetualFeeParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdatePerpetualFeeParamsResponse() {
    return {};
}
export const MsgUpdatePerpetualFeeParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePerpetualFeeParamsResponse();
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
        const message = createBaseMsgUpdatePerpetualFeeParamsResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map