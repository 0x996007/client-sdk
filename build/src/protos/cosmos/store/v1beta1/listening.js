import { ResponseCommit, RequestFinalizeBlock, ResponseFinalizeBlock, } from '../../../tendermint/abci/types.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseStoreKVPair() {
    return {
        storeKey: '',
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array(),
    };
}
export const StoreKVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storeKey !== '') {
            writer.uint32(10).string(message.storeKey);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeKey = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.storeKey = object.storeKey ?? '';
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
};
function createBaseBlockMetadata() {
    return {
        responseCommit: undefined,
        requestFinalizeBlock: undefined,
        responseFinalizeBlock: undefined,
    };
}
export const BlockMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.responseCommit !== undefined) {
            ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
        }
        if (message.requestFinalizeBlock !== undefined) {
            RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.responseFinalizeBlock !== undefined) {
            ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.requestFinalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.responseFinalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata();
        message.responseCommit =
            object.responseCommit !== undefined && object.responseCommit !== null
                ? ResponseCommit.fromPartial(object.responseCommit)
                : undefined;
        message.requestFinalizeBlock =
            object.requestFinalizeBlock !== undefined &&
                object.requestFinalizeBlock !== null
                ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock)
                : undefined;
        message.responseFinalizeBlock =
            object.responseFinalizeBlock !== undefined &&
                object.responseFinalizeBlock !== null
                ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=listening.js.map