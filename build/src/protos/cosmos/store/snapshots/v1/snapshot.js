import { Long } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseSnapshot() {
    return {
        height: Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: undefined,
    };
}
export const Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.UZERO;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? Metadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return {
        chunkHashes: [],
    };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkHashes.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.chunkHashes = object.chunkHashes?.map((e) => e) || [];
        return message;
    },
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extensionPayload: undefined,
    };
}
export const SnapshotItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.store !== undefined) {
            SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store =
            object.store !== undefined && object.store !== null
                ? SnapshotStoreItem.fromPartial(object.store)
                : undefined;
        message.iavl =
            object.iavl !== undefined && object.iavl !== null
                ? SnapshotIAVLItem.fromPartial(object.iavl)
                : undefined;
        message.extension =
            object.extension !== undefined && object.extension !== null
                ? SnapshotExtensionMeta.fromPartial(object.extension)
                : undefined;
        message.extensionPayload =
            object.extensionPayload !== undefined && object.extensionPayload !== null
                ? SnapshotExtensionPayload.fromPartial(object.extensionPayload)
                : undefined;
        return message;
    },
};
function createBaseSnapshotStoreItem() {
    return {
        name: '',
    };
}
export const SnapshotStoreItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotStoreItem();
        message.name = object.name ?? '';
        return message;
    },
};
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: Long.ZERO,
        height: 0,
    };
}
export const SnapshotIAVLItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (!message.version.isZero()) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotIAVLItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.version =
            object.version !== undefined && object.version !== null
                ? Long.fromValue(object.version)
                : Long.ZERO;
        message.height = object.height ?? 0;
        return message;
    },
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: '',
        format: 0,
    };
}
export const SnapshotExtensionMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionMeta();
        message.name = object.name ?? '';
        message.format = object.format ?? 0;
        return message;
    },
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array(),
    };
}
export const SnapshotExtensionPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=snapshot.js.map