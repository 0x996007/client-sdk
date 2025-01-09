import { Timestamp } from '../../../google/protobuf/timestamp.js';
import { Long, toTimestamp, fromTimestamp, } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseCommitInfo() {
    return {
        version: Long.ZERO,
        storeInfos: [],
        timestamp: undefined,
    };
}
export const CommitInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version =
            object.version !== undefined && object.version !== null
                ? Long.fromValue(object.version)
                : Long.ZERO;
        message.storeInfos =
            object.storeInfos?.map((e) => StoreInfo.fromPartial(e)) || [];
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function createBaseStoreInfo() {
    return {
        name: '',
        commitId: undefined,
    };
}
export const StoreInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = CommitID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? '';
        message.commitId =
            object.commitId !== undefined && object.commitId !== null
                ? CommitID.fromPartial(object.commitId)
                : undefined;
        return message;
    },
};
function createBaseCommitID() {
    return {
        version: Long.ZERO,
        hash: new Uint8Array(),
    };
}
export const CommitID = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version =
            object.version !== undefined && object.version !== null
                ? Long.fromValue(object.version)
                : Long.ZERO;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=commit_info.js.map