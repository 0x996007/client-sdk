/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { EventParams, ProposeParams, SafetyParams, } from './params.js';
import { BridgeEventInfo, } from './bridge_event_info.js';
import { MsgCompleteBridge } from './tx.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryEventParamsRequest() {
    return {};
}
export const QueryEventParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEventParamsRequest();
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
        const message = createBaseQueryEventParamsRequest();
        return message;
    },
};
function createBaseQueryEventParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryEventParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            EventParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEventParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = EventParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEventParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? EventParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryProposeParamsRequest() {
    return {};
}
export const QueryProposeParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposeParamsRequest();
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
        const message = createBaseQueryProposeParamsRequest();
        return message;
    },
};
function createBaseQueryProposeParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryProposeParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            ProposeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = ProposeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposeParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? ProposeParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQuerySafetyParamsRequest() {
    return {};
}
export const QuerySafetyParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySafetyParamsRequest();
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
        const message = createBaseQuerySafetyParamsRequest();
        return message;
    },
};
function createBaseQuerySafetyParamsResponse() {
    return {
        params: undefined,
    };
}
export const QuerySafetyParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            SafetyParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySafetyParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = SafetyParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySafetyParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? SafetyParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryAcknowledgedEventInfoRequest() {
    return {};
}
export const QueryAcknowledgedEventInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAcknowledgedEventInfoRequest();
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
        const message = createBaseQueryAcknowledgedEventInfoRequest();
        return message;
    },
};
function createBaseQueryAcknowledgedEventInfoResponse() {
    return {
        info: undefined,
    };
}
export const QueryAcknowledgedEventInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            BridgeEventInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAcknowledgedEventInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = BridgeEventInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAcknowledgedEventInfoResponse();
        message.info =
            object.info !== undefined && object.info !== null
                ? BridgeEventInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
function createBaseQueryRecognizedEventInfoRequest() {
    return {};
}
export const QueryRecognizedEventInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRecognizedEventInfoRequest();
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
        const message = createBaseQueryRecognizedEventInfoRequest();
        return message;
    },
};
function createBaseQueryRecognizedEventInfoResponse() {
    return {
        info: undefined,
    };
}
export const QueryRecognizedEventInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            BridgeEventInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRecognizedEventInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = BridgeEventInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRecognizedEventInfoResponse();
        message.info =
            object.info !== undefined && object.info !== null
                ? BridgeEventInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
};
function createBaseQueryDelayedCompleteBridgeMessagesRequest() {
    return {
        address: '',
    };
}
export const QueryDelayedCompleteBridgeMessagesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelayedCompleteBridgeMessagesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelayedCompleteBridgeMessagesRequest();
        message.address = object.address ?? '';
        return message;
    },
};
function createBaseQueryDelayedCompleteBridgeMessagesResponse() {
    return {
        messages: [],
    };
}
export const QueryDelayedCompleteBridgeMessagesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            DelayedCompleteBridgeMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelayedCompleteBridgeMessagesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(DelayedCompleteBridgeMessage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelayedCompleteBridgeMessagesResponse();
        message.messages =
            object.messages?.map((e) => DelayedCompleteBridgeMessage.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelayedCompleteBridgeMessage() {
    return {
        message: undefined,
        blockHeight: 0,
    };
}
export const DelayedCompleteBridgeMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            MsgCompleteBridge.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(16).uint32(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedCompleteBridgeMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = MsgCompleteBridge.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = createBaseDelayedCompleteBridgeMessage();
        message.message =
            object.message !== undefined && object.message !== null
                ? MsgCompleteBridge.fromPartial(object.message)
                : undefined;
        message.blockHeight = object.blockHeight ?? 0;
        return message;
    },
};
//# sourceMappingURL=query.js.map