/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DelayedMessage } from './delayed_message.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryNextDelayedMessageIdRequest() {
    return {};
}
export const QueryNextDelayedMessageIdRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextDelayedMessageIdRequest();
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
        const message = createBaseQueryNextDelayedMessageIdRequest();
        return message;
    },
};
function createBaseQueryNextDelayedMessageIdResponse() {
    return {
        nextDelayedMessageId: 0,
    };
}
export const QueryNextDelayedMessageIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextDelayedMessageId !== 0) {
            writer.uint32(8).uint32(message.nextDelayedMessageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextDelayedMessageIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextDelayedMessageId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryNextDelayedMessageIdResponse();
        message.nextDelayedMessageId = object.nextDelayedMessageId ?? 0;
        return message;
    },
};
function createBaseQueryMessageRequest() {
    return {
        id: 0,
    };
}
export const QueryMessageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMessageRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryMessageResponse() {
    return {
        message: undefined,
    };
}
export const QueryMessageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            DelayedMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = DelayedMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMessageResponse();
        message.message =
            object.message !== undefined && object.message !== null
                ? DelayedMessage.fromPartial(object.message)
                : undefined;
        return message;
    },
};
function createBaseQueryBlockMessageIdsRequest() {
    return {
        blockHeight: 0,
    };
}
export const QueryBlockMessageIdsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockMessageIdsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBlockMessageIdsRequest();
        message.blockHeight = object.blockHeight ?? 0;
        return message;
    },
};
function createBaseQueryBlockMessageIdsResponse() {
    return {
        messageIds: [],
    };
}
export const QueryBlockMessageIdsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.messageIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockMessageIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.messageIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.messageIds.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBlockMessageIdsResponse();
        message.messageIds = object.messageIds?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map