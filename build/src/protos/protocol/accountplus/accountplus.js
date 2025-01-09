import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseAccountState() {
    return {
        address: '',
        timestampNonceDetails: undefined,
    };
}
export const AccountState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.timestampNonceDetails !== undefined) {
            TimestampNonceDetails.encode(message.timestampNonceDetails, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.timestampNonceDetails = TimestampNonceDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountState();
        message.address = object.address ?? '';
        message.timestampNonceDetails =
            object.timestampNonceDetails !== undefined &&
                object.timestampNonceDetails !== null
                ? TimestampNonceDetails.fromPartial(object.timestampNonceDetails)
                : undefined;
        return message;
    },
};
function createBaseTimestampNonceDetails() {
    return {
        timestampNonces: [],
        maxEjectedNonce: Long.UZERO,
    };
}
export const TimestampNonceDetails = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.timestampNonces) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.maxEjectedNonce.isZero()) {
            writer.uint32(16).uint64(message.maxEjectedNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampNonceDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.timestampNonces.push(reader.uint64());
                        }
                    }
                    else {
                        message.timestampNonces.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.maxEjectedNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTimestampNonceDetails();
        message.timestampNonces =
            object.timestampNonces?.map((e) => Long.fromValue(e)) || [];
        message.maxEjectedNonce =
            object.maxEjectedNonce !== undefined && object.maxEjectedNonce !== null
                ? Long.fromValue(object.maxEjectedNonce)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=accountplus.js.map