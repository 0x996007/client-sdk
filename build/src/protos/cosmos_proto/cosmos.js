/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _m0 from 'protobufjs/minimal.js';
export var ScalarType;
(function (ScalarType) {
    ScalarType[ScalarType["SCALAR_TYPE_UNSPECIFIED"] = 0] = "SCALAR_TYPE_UNSPECIFIED";
    ScalarType[ScalarType["SCALAR_TYPE_STRING"] = 1] = "SCALAR_TYPE_STRING";
    ScalarType[ScalarType["SCALAR_TYPE_BYTES"] = 2] = "SCALAR_TYPE_BYTES";
    ScalarType[ScalarType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalarType || (ScalarType = {}));
export const ScalarTypeSDKType = ScalarType;
export function scalarTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SCALAR_TYPE_UNSPECIFIED':
            return ScalarType.SCALAR_TYPE_UNSPECIFIED;
        case 1:
        case 'SCALAR_TYPE_STRING':
            return ScalarType.SCALAR_TYPE_STRING;
        case 2:
        case 'SCALAR_TYPE_BYTES':
            return ScalarType.SCALAR_TYPE_BYTES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ScalarType.UNRECOGNIZED;
    }
}
export function scalarTypeToJSON(object) {
    switch (object) {
        case ScalarType.SCALAR_TYPE_UNSPECIFIED:
            return 'SCALAR_TYPE_UNSPECIFIED';
        case ScalarType.SCALAR_TYPE_STRING:
            return 'SCALAR_TYPE_STRING';
        case ScalarType.SCALAR_TYPE_BYTES:
            return 'SCALAR_TYPE_BYTES';
        case ScalarType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseInterfaceDescriptor() {
    return {
        name: '',
        description: '',
    };
}
export const InterfaceDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};
function createBaseScalarDescriptor() {
    return {
        name: '',
        description: '',
        fieldType: [],
    };
}
export const ScalarDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.fieldType) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScalarDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fieldType.push(reader.int32());
                        }
                    }
                    else {
                        message.fieldType.push(reader.int32());
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
        const message = createBaseScalarDescriptor();
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        message.fieldType = object.fieldType?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=cosmos.js.map