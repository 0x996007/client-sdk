/* eslint-disable prefer-const */
import { Any } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseConfig() {
    return {
        modules: [],
        golangBindings: [],
    };
}
export const Config = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modules) {
            ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.golangBindings) {
            GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.modules =
            object.modules?.map((e) => ModuleConfig.fromPartial(e)) || [];
        message.golangBindings =
            object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
        return message;
    },
};
function createBaseModuleConfig() {
    return {
        name: '',
        config: undefined,
        golangBindings: [],
    };
}
export const ModuleConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.golangBindings) {
            GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleConfig();
        message.name = object.name ?? '';
        message.config =
            object.config !== undefined && object.config !== null
                ? Any.fromPartial(object.config)
                : undefined;
        message.golangBindings =
            object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGolangBinding() {
    return {
        interfaceType: '',
        implementation: '',
    };
}
export const GolangBinding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.interfaceType !== '') {
            writer.uint32(10).string(message.interfaceType);
        }
        if (message.implementation !== '') {
            writer.uint32(18).string(message.implementation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGolangBinding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceType = reader.string();
                    break;
                case 2:
                    message.implementation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGolangBinding();
        message.interfaceType = object.interfaceType ?? '';
        message.implementation = object.implementation ?? '';
        return message;
    },
};
//# sourceMappingURL=config.js.map