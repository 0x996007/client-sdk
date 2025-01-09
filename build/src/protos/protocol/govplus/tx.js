/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgSlashValidator() {
    return {
        authority: '',
        validatorAddress: '',
        infractionHeight: 0,
        tokensAtInfractionHeight: new Uint8Array(),
        slashFactor: '',
    };
}
export const MsgSlashValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.infractionHeight !== 0) {
            writer.uint32(24).uint32(message.infractionHeight);
        }
        if (message.tokensAtInfractionHeight.length !== 0) {
            writer.uint32(34).bytes(message.tokensAtInfractionHeight);
        }
        if (message.slashFactor !== '') {
            writer.uint32(42).string(message.slashFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSlashValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.infractionHeight = reader.uint32();
                    break;
                case 4:
                    message.tokensAtInfractionHeight = reader.bytes();
                    break;
                case 5:
                    message.slashFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSlashValidator();
        message.authority = object.authority ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.infractionHeight = object.infractionHeight ?? 0;
        message.tokensAtInfractionHeight =
            object.tokensAtInfractionHeight ?? new Uint8Array();
        message.slashFactor = object.slashFactor ?? '';
        return message;
    },
};
function createBaseMsgSlashValidatorResponse() {
    return {};
}
export const MsgSlashValidatorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSlashValidatorResponse();
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
        const message = createBaseMsgSlashValidatorResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map