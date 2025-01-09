import * as _m0 from 'protobufjs/minimal.js';
function createBaseParameterChangeProposal() {
    return {
        title: '',
        description: '',
        changes: [],
    };
}
export const ParameterChangeProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.changes) {
            ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParameterChangeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.changes.push(ParamChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParameterChangeProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.changes =
            object.changes?.map((e) => ParamChange.fromPartial(e)) || [];
        return message;
    },
};
function createBaseParamChange() {
    return {
        subspace: '',
        key: '',
        value: '',
    };
}
export const ParamChange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subspace !== '') {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== '') {
            writer.uint32(18).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamChange();
        message.subspace = object.subspace ?? '';
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};
//# sourceMappingURL=params.js.map