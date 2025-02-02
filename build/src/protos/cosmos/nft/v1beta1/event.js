import * as _m0 from 'protobufjs/minimal.js';
function createBaseEventSend() {
    return {
        classId: '',
        id: '',
        sender: '',
        receiver: '',
    };
}
export const EventSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== '') {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== '') {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSend();
        message.classId = object.classId ?? '';
        message.id = object.id ?? '';
        message.sender = object.sender ?? '';
        message.receiver = object.receiver ?? '';
        return message;
    },
};
function createBaseEventMint() {
    return {
        classId: '',
        id: '',
        owner: '',
    };
}
export const EventMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== '') {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.classId = object.classId ?? '';
        message.id = object.id ?? '';
        message.owner = object.owner ?? '';
        return message;
    },
};
function createBaseEventBurn() {
    return {
        classId: '',
        id: '',
        owner: '',
    };
}
export const EventBurn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== '') {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBurn();
        message.classId = object.classId ?? '';
        message.id = object.id ?? '';
        message.owner = object.owner ?? '';
        return message;
    },
};
//# sourceMappingURL=event.js.map