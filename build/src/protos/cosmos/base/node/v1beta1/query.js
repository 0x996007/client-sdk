/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Timestamp } from '../../../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long, toTimestamp, fromTimestamp, } from '../../../../helpers.js';
function createBaseConfigRequest() {
    return {};
}
export const ConfigRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
};
function createBaseConfigResponse() {
    return {
        minimumGasPrice: '',
        pruningKeepRecent: '',
        pruningInterval: '',
    };
}
export const ConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minimumGasPrice !== '') {
            writer.uint32(10).string(message.minimumGasPrice);
        }
        if (message.pruningKeepRecent !== '') {
            writer.uint32(18).string(message.pruningKeepRecent);
        }
        if (message.pruningInterval !== '') {
            writer.uint32(26).string(message.pruningInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumGasPrice = reader.string();
                    break;
                case 2:
                    message.pruningKeepRecent = reader.string();
                    break;
                case 3:
                    message.pruningInterval = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimumGasPrice = object.minimumGasPrice ?? '';
        message.pruningKeepRecent = object.pruningKeepRecent ?? '';
        message.pruningInterval = object.pruningInterval ?? '';
        return message;
    },
};
function createBaseStatusRequest() {
    return {};
}
export const StatusRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusRequest();
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
        const message = createBaseStatusRequest();
        return message;
    },
};
function createBaseStatusResponse() {
    return {
        earliestStoreHeight: Long.UZERO,
        height: Long.UZERO,
        timestamp: undefined,
        appHash: new Uint8Array(),
        validatorHash: new Uint8Array(),
    };
}
export const StatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.earliestStoreHeight.isZero()) {
            writer.uint32(8).uint64(message.earliestStoreHeight);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(34).bytes(message.appHash);
        }
        if (message.validatorHash.length !== 0) {
            writer.uint32(42).bytes(message.validatorHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.earliestStoreHeight = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.appHash = reader.bytes();
                    break;
                case 5:
                    message.validatorHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatusResponse();
        message.earliestStoreHeight =
            object.earliestStoreHeight !== undefined &&
                object.earliestStoreHeight !== null
                ? Long.fromValue(object.earliestStoreHeight)
                : Long.UZERO;
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.UZERO;
        message.timestamp = object.timestamp ?? undefined;
        message.appHash = object.appHash ?? new Uint8Array();
        message.validatorHash = object.validatorHash ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=query.js.map