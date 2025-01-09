/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _m0 from 'protobufjs/minimal.js';
/** StorageType */
export var StorageType;
(function (StorageType) {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent storage where all
     * data is stored in the regular Merkle-tree backed KV-store.
     */
    StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
    StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType || (StorageType = {}));
export const StorageTypeSDKType = StorageType;
export function storageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'STORAGE_TYPE_DEFAULT_UNSPECIFIED':
            return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
        case 1:
        case 'STORAGE_TYPE_MEMORY':
            return StorageType.STORAGE_TYPE_MEMORY;
        case 2:
        case 'STORAGE_TYPE_TRANSIENT':
            return StorageType.STORAGE_TYPE_TRANSIENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StorageType.UNRECOGNIZED;
    }
}
export function storageTypeToJSON(object) {
    switch (object) {
        case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
            return 'STORAGE_TYPE_DEFAULT_UNSPECIFIED';
        case StorageType.STORAGE_TYPE_MEMORY:
            return 'STORAGE_TYPE_MEMORY';
        case StorageType.STORAGE_TYPE_TRANSIENT:
            return 'STORAGE_TYPE_TRANSIENT';
        case StorageType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseModuleSchemaDescriptor() {
    return {
        schemaFile: [],
        prefix: new Uint8Array(),
    };
}
export const ModuleSchemaDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.schemaFile) {
            ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleSchemaDescriptor();
        message.schemaFile =
            object.schemaFile?.map((e) => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
        message.prefix = object.prefix ?? new Uint8Array();
        return message;
    },
};
function createBaseModuleSchemaDescriptor_FileEntry() {
    return {
        id: 0,
        protoFileName: '',
        storageType: 0,
    };
}
export const ModuleSchemaDescriptor_FileEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.protoFileName !== '') {
            writer.uint32(18).string(message.protoFileName);
        }
        if (message.storageType !== 0) {
            writer.uint32(24).int32(message.storageType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.protoFileName = reader.string();
                    break;
                case 3:
                    message.storageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        message.id = object.id ?? 0;
        message.protoFileName = object.protoFileName ?? '';
        message.storageType = object.storageType ?? 0;
        return message;
    },
};
//# sourceMappingURL=schema.js.map