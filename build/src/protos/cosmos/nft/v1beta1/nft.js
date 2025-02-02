import { Any } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseClass() {
    return {
        id: '',
        name: '',
        symbol: '',
        description: '',
        uri: '',
        uriHash: '',
        data: undefined,
    };
}
export const Class = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== '') {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.uri !== '') {
            writer.uint32(42).string(message.uri);
        }
        if (message.uriHash !== '') {
            writer.uint32(50).string(message.uriHash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.uri = reader.string();
                    break;
                case 6:
                    message.uriHash = reader.string();
                    break;
                case 7:
                    message.data = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        message.symbol = object.symbol ?? '';
        message.description = object.description ?? '';
        message.uri = object.uri ?? '';
        message.uriHash = object.uriHash ?? '';
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        return message;
    },
};
function createBaseNFT() {
    return {
        classId: '',
        id: '',
        uri: '',
        uriHash: '',
        data: undefined,
    };
}
export const NFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== '') {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.uri !== '') {
            writer.uint32(26).string(message.uri);
        }
        if (message.uriHash !== '') {
            writer.uint32(34).string(message.uriHash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFT();
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
                    message.uri = reader.string();
                    break;
                case 4:
                    message.uriHash = reader.string();
                    break;
                case 10:
                    message.data = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNFT();
        message.classId = object.classId ?? '';
        message.id = object.id ?? '';
        message.uri = object.uri ?? '';
        message.uriHash = object.uriHash ?? '';
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=nft.js.map