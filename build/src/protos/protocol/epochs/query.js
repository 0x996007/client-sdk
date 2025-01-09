import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination.js';
import { EpochInfo } from './epoch_info.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryGetEpochInfoRequest() {
    return {
        name: '',
    };
}
export const QueryGetEpochInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEpochInfoRequest();
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
        const message = createBaseQueryGetEpochInfoRequest();
        message.name = object.name ?? '';
        return message;
    },
};
function createBaseQueryEpochInfoResponse() {
    return {
        epochInfo: undefined,
    };
}
export const QueryEpochInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochInfo !== undefined) {
            EpochInfo.encode(message.epochInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochInfo = EpochInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochInfoResponse();
        message.epochInfo =
            object.epochInfo !== undefined && object.epochInfo !== null
                ? EpochInfo.fromPartial(object.epochInfo)
                : undefined;
        return message;
    },
};
function createBaseQueryAllEpochInfoRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAllEpochInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEpochInfoRequest();
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
        const message = createBaseQueryAllEpochInfoRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryEpochInfoAllResponse() {
    return {
        epochInfo: [],
        pagination: undefined,
    };
}
export const QueryEpochInfoAllResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochInfo) {
            EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochInfoAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochInfo.push(EpochInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = createBaseQueryEpochInfoAllResponse();
        message.epochInfo =
            object.epochInfo?.map((e) => EpochInfo.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map