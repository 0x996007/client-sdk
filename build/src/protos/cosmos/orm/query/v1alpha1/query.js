import { PageRequest, PageResponse, } from '../../../base/query/v1beta1/pagination.js';
import { Any } from '../../../../google/protobuf/any.js';
import { Timestamp } from '../../../../google/protobuf/timestamp.js';
import { Duration, } from '../../../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, Long, fromTimestamp, } from '../../../../helpers.js';
function createBaseGetRequest() {
    return {
        messageName: '',
        index: '',
        values: [],
    };
}
export const GetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageName !== '') {
            writer.uint32(10).string(message.messageName);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        for (const v of message.values) {
            IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.values.push(IndexValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetRequest();
        message.messageName = object.messageName ?? '';
        message.index = object.index ?? '';
        message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetResponse() {
    return {
        result: undefined,
    };
}
export const GetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            Any.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.result =
            object.result !== undefined && object.result !== null
                ? Any.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseListRequest() {
    return {
        messageName: '',
        index: '',
        prefix: undefined,
        range: undefined,
        pagination: undefined,
    };
}
export const ListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageName !== '') {
            writer.uint32(10).string(message.messageName);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.prefix !== undefined) {
            ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        if (message.range !== undefined) {
            ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageName = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.range = ListRequest_Range.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = createBaseListRequest();
        message.messageName = object.messageName ?? '';
        message.index = object.index ?? '';
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? ListRequest_Prefix.fromPartial(object.prefix)
                : undefined;
        message.range =
            object.range !== undefined && object.range !== null
                ? ListRequest_Range.fromPartial(object.range)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseListRequest_Prefix() {
    return {
        values: [],
    };
}
export const ListRequest_Prefix = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest_Prefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(IndexValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListRequest_Prefix();
        message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListRequest_Range() {
    return {
        start: [],
        end: [],
    };
}
export const ListRequest_Range = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.start) {
            IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.end) {
            IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest_Range();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start.push(IndexValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.end.push(IndexValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListRequest_Range();
        message.start = object.start?.map((e) => IndexValue.fromPartial(e)) || [];
        message.end = object.end?.map((e) => IndexValue.fromPartial(e)) || [];
        return message;
    },
};
function createBaseListResponse() {
    return {
        results: [],
        pagination: undefined,
    };
}
export const ListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
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
        const message = createBaseListResponse();
        message.results = object.results?.map((e) => Any.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseIndexValue() {
    return {
        uint: undefined,
        int: undefined,
        str: undefined,
        bytes: undefined,
        enum: undefined,
        bool: undefined,
        timestamp: undefined,
        duration: undefined,
    };
}
export const IndexValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uint !== undefined) {
            writer.uint32(8).uint64(message.uint);
        }
        if (message.int !== undefined) {
            writer.uint32(16).int64(message.int);
        }
        if (message.str !== undefined) {
            writer.uint32(26).string(message.str);
        }
        if (message.bytes !== undefined) {
            writer.uint32(34).bytes(message.bytes);
        }
        if (message.enum !== undefined) {
            writer.uint32(42).string(message.enum);
        }
        if (message.bool !== undefined) {
            writer.uint32(48).bool(message.bool);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uint = reader.uint64();
                    break;
                case 2:
                    message.int = reader.int64();
                    break;
                case 3:
                    message.str = reader.string();
                    break;
                case 4:
                    message.bytes = reader.bytes();
                    break;
                case 5:
                    message.enum = reader.string();
                    break;
                case 6:
                    message.bool = reader.bool();
                    break;
                case 7:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIndexValue();
        message.uint =
            object.uint !== undefined && object.uint !== null
                ? Long.fromValue(object.uint)
                : undefined;
        message.int =
            object.int !== undefined && object.int !== null
                ? Long.fromValue(object.int)
                : undefined;
        message.str = object.str ?? undefined;
        message.bytes = object.bytes ?? undefined;
        message.enum = object.enum ?? undefined;
        message.bool = object.bool ?? undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map