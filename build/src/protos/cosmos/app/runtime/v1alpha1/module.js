/* eslint-disable prefer-const */
import * as _m0 from 'protobufjs/minimal.js';
function createBaseModule() {
    return {
        appName: '',
        beginBlockers: [],
        endBlockers: [],
        initGenesis: [],
        exportGenesis: [],
        overrideStoreKeys: [],
        orderMigrations: [],
        precommiters: [],
        prepareCheckStaters: [],
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.appName !== '') {
            writer.uint32(10).string(message.appName);
        }
        for (const v of message.beginBlockers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.endBlockers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.initGenesis) {
            writer.uint32(34).string(v);
        }
        for (const v of message.exportGenesis) {
            writer.uint32(42).string(v);
        }
        for (const v of message.overrideStoreKeys) {
            StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.orderMigrations) {
            writer.uint32(58).string(v);
        }
        for (const v of message.precommiters) {
            writer.uint32(66).string(v);
        }
        for (const v of message.prepareCheckStaters) {
            writer.uint32(74).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appName = reader.string();
                    break;
                case 2:
                    message.beginBlockers.push(reader.string());
                    break;
                case 3:
                    message.endBlockers.push(reader.string());
                    break;
                case 4:
                    message.initGenesis.push(reader.string());
                    break;
                case 5:
                    message.exportGenesis.push(reader.string());
                    break;
                case 6:
                    message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.orderMigrations.push(reader.string());
                    break;
                case 8:
                    message.precommiters.push(reader.string());
                    break;
                case 9:
                    message.prepareCheckStaters.push(reader.string());
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
        message.appName = object.appName ?? '';
        message.beginBlockers = object.beginBlockers?.map((e) => e) || [];
        message.endBlockers = object.endBlockers?.map((e) => e) || [];
        message.initGenesis = object.initGenesis?.map((e) => e) || [];
        message.exportGenesis = object.exportGenesis?.map((e) => e) || [];
        message.overrideStoreKeys =
            object.overrideStoreKeys?.map((e) => StoreKeyConfig.fromPartial(e)) || [];
        message.orderMigrations = object.orderMigrations?.map((e) => e) || [];
        message.precommiters = object.precommiters?.map((e) => e) || [];
        message.prepareCheckStaters =
            object.prepareCheckStaters?.map((e) => e) || [];
        return message;
    },
};
function createBaseStoreKeyConfig() {
    return {
        moduleName: '',
        kvStoreKey: '',
    };
}
export const StoreKeyConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moduleName !== '') {
            writer.uint32(10).string(message.moduleName);
        }
        if (message.kvStoreKey !== '') {
            writer.uint32(18).string(message.kvStoreKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKeyConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                case 2:
                    message.kvStoreKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreKeyConfig();
        message.moduleName = object.moduleName ?? '';
        message.kvStoreKey = object.kvStoreKey ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map