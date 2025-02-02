/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PageRequest, PageResponse, } from '../../query/v1beta1/pagination.js';
import { Any } from '../../../../google/protobuf/any.js';
import { BlockID } from '../../../../tendermint/types/types.js';
import { Block as Block1 } from '../../../../tendermint/types/block.js';
import { Block as Block2 } from './types.js';
import { DefaultNodeInfo, } from '../../../../tendermint/p2p/types.js';
import { Long } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: Long.ZERO,
        pagination: undefined,
    };
}
export const GetValidatorSetByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.ZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetValidatorSetByHeightResponse() {
    return {
        blockHeight: Long.ZERO,
        validators: [],
        pagination: undefined,
    };
}
export const GetValidatorSetByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? Long.fromValue(object.blockHeight)
                : Long.ZERO;
        message.validators =
            object.validators?.map((e) => Validator.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined,
    };
}
export const GetLatestValidatorSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetResponse() {
    return {
        blockHeight: Long.ZERO,
        validators: [],
        pagination: undefined,
    };
}
export const GetLatestValidatorSetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? Long.fromValue(object.blockHeight)
                : Long.ZERO;
        message.validators =
            object.validators?.map((e) => Validator.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseValidator() {
    return {
        address: '',
        pubKey: undefined,
        votingPower: Long.ZERO,
        proposerPriority: Long.ZERO,
    };
}
export const Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.votingPower.isZero()) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (!message.proposerPriority.isZero()) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPower = reader.int64();
                    break;
                case 4:
                    message.proposerPriority = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? '';
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? Any.fromPartial(object.pubKey)
                : undefined;
        message.votingPower =
            object.votingPower !== undefined && object.votingPower !== null
                ? Long.fromValue(object.votingPower)
                : Long.ZERO;
        message.proposerPriority =
            object.proposerPriority !== undefined && object.proposerPriority !== null
                ? Long.fromValue(object.proposerPriority)
                : Long.ZERO;
        return message;
    },
};
function createBaseGetBlockByHeightRequest() {
    return {
        height: Long.ZERO,
    };
}
export const GetBlockByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.ZERO;
        return message;
    },
};
function createBaseGetBlockByHeightResponse() {
    return {
        blockId: undefined,
        block: undefined,
        sdkBlock: undefined,
    };
}
export const GetBlockByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdkBlock = Block2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? BlockID.fromPartial(object.blockId)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? Block1.fromPartial(object.block)
                : undefined;
        message.sdkBlock =
            object.sdkBlock !== undefined && object.sdkBlock !== null
                ? Block2.fromPartial(object.sdkBlock)
                : undefined;
        return message;
    },
};
function createBaseGetLatestBlockRequest() {
    return {};
}
export const GetLatestBlockRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
};
function createBaseGetLatestBlockResponse() {
    return {
        blockId: undefined,
        block: undefined,
        sdkBlock: undefined,
    };
}
export const GetLatestBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdkBlock = Block2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? BlockID.fromPartial(object.blockId)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? Block1.fromPartial(object.block)
                : undefined;
        message.sdkBlock =
            object.sdkBlock !== undefined && object.sdkBlock !== null
                ? Block2.fromPartial(object.sdkBlock)
                : undefined;
        return message;
    },
};
function createBaseGetSyncingRequest() {
    return {};
}
export const GetSyncingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
        return message;
    },
};
function createBaseGetSyncingResponse() {
    return {
        syncing: false,
    };
}
export const GetSyncingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
};
function createBaseGetNodeInfoRequest() {
    return {};
}
export const GetNodeInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
};
function createBaseGetNodeInfoResponse() {
    return {
        defaultNodeInfo: undefined,
        applicationVersion: undefined,
    };
}
export const GetNodeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultNodeInfo !== undefined) {
            DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.defaultNodeInfo =
            object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null
                ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
                : undefined;
        message.applicationVersion =
            object.applicationVersion !== undefined &&
                object.applicationVersion !== null
                ? VersionInfo.fromPartial(object.applicationVersion)
                : undefined;
        return message;
    },
};
function createBaseVersionInfo() {
    return {
        name: '',
        appName: '',
        version: '',
        gitCommit: '',
        buildTags: '',
        goVersion: '',
        buildDeps: [],
        cosmosSdkVersion: '',
    };
}
export const VersionInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== '') {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== '') {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== '') {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== '') {
            writer.uint32(50).string(message.goVersion);
        }
        for (const v of message.buildDeps) {
            Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== '') {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.appName = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.gitCommit = reader.string();
                    break;
                case 5:
                    message.buildTags = reader.string();
                    break;
                case 6:
                    message.goVersion = reader.string();
                    break;
                case 7:
                    message.buildDeps.push(Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmosSdkVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? '';
        message.appName = object.appName ?? '';
        message.version = object.version ?? '';
        message.gitCommit = object.gitCommit ?? '';
        message.buildTags = object.buildTags ?? '';
        message.goVersion = object.goVersion ?? '';
        message.buildDeps =
            object.buildDeps?.map((e) => Module.fromPartial(e)) || [];
        message.cosmosSdkVersion = object.cosmosSdkVersion ?? '';
        return message;
    },
};
function createBaseModule() {
    return {
        path: '',
        version: '',
        sum: '',
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== '') {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== '') {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? '';
        message.version = object.version ?? '';
        message.sum = object.sum ?? '';
        return message;
    },
};
function createBaseABCIQueryRequest() {
    return {
        data: new Uint8Array(),
        path: '',
        height: Long.ZERO,
        prove: false,
    };
}
export const ABCIQueryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryRequest();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? '';
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.ZERO;
        message.prove = object.prove ?? false;
        return message;
    },
};
function createBaseABCIQueryResponse() {
    return {
        code: 0,
        log: '',
        info: '',
        index: Long.ZERO,
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: Long.ZERO,
        codespace: '',
    };
}
export const ABCIQueryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== '') {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (!message.index.isZero()) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== '') {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryResponse();
        message.code = object.code ?? 0;
        message.log = object.log ?? '';
        message.info = object.info ?? '';
        message.index =
            object.index !== undefined && object.index !== null
                ? Long.fromValue(object.index)
                : Long.ZERO;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proofOps =
            object.proofOps !== undefined && object.proofOps !== null
                ? ProofOps.fromPartial(object.proofOps)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.ZERO;
        message.codespace = object.codespace ?? '';
        return message;
    },
};
function createBaseProofOp() {
    return {
        type: '',
        key: new Uint8Array(),
        data: new Uint8Array(),
    };
}
export const ProofOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? '';
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseProofOps() {
    return {
        ops: [],
    };
}
export const ProofOps = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ops) {
            ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(ProofOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map