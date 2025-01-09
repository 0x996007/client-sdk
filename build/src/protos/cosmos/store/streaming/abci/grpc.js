/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { RequestFinalizeBlock, ResponseFinalizeBlock, ResponseCommit, } from '../../../../tendermint/abci/types.js';
import { StoreKVPair } from '../../v1beta1/listening.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../../helpers.js';
function createBaseListenFinalizeBlockRequest() {
    return {
        req: undefined,
        res: undefined,
    };
}
export const ListenFinalizeBlockRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.req !== undefined) {
            RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
        }
        if (message.res !== undefined) {
            ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenFinalizeBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListenFinalizeBlockRequest();
        message.req =
            object.req !== undefined && object.req !== null
                ? RequestFinalizeBlock.fromPartial(object.req)
                : undefined;
        message.res =
            object.res !== undefined && object.res !== null
                ? ResponseFinalizeBlock.fromPartial(object.res)
                : undefined;
        return message;
    },
};
function createBaseListenFinalizeBlockResponse() {
    return {};
}
export const ListenFinalizeBlockResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenFinalizeBlockResponse();
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
        const message = createBaseListenFinalizeBlockResponse();
        return message;
    },
};
function createBaseListenCommitRequest() {
    return {
        blockHeight: Long.ZERO,
        res: undefined,
        changeSet: [],
    };
}
export const ListenCommitRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        if (message.res !== undefined) {
            ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.changeSet) {
            StoreKVPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenCommitRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.res = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListenCommitRequest();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? Long.fromValue(object.blockHeight)
                : Long.ZERO;
        message.res =
            object.res !== undefined && object.res !== null
                ? ResponseCommit.fromPartial(object.res)
                : undefined;
        message.changeSet =
            object.changeSet?.map((e) => StoreKVPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListenCommitResponse() {
    return {};
}
export const ListenCommitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenCommitResponse();
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
        const message = createBaseListenCommitResponse();
        return message;
    },
};
//# sourceMappingURL=grpc.js.map