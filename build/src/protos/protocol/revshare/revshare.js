import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMarketMapperRevShareDetails() {
    return {
        expirationTs: Long.UZERO,
    };
}
export const MarketMapperRevShareDetails = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.expirationTs.isZero()) {
            writer.uint32(8).uint64(message.expirationTs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMapperRevShareDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expirationTs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketMapperRevShareDetails();
        message.expirationTs =
            object.expirationTs !== undefined && object.expirationTs !== null
                ? Long.fromValue(object.expirationTs)
                : Long.UZERO;
        return message;
    },
};
function createBaseUnconditionalRevShareConfig() {
    return {
        configs: [],
    };
}
export const UnconditionalRevShareConfig = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.configs) {
            UnconditionalRevShareConfig_RecipientConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnconditionalRevShareConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configs.push(UnconditionalRevShareConfig_RecipientConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnconditionalRevShareConfig();
        message.configs =
            object.configs?.map((e) => UnconditionalRevShareConfig_RecipientConfig.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUnconditionalRevShareConfig_RecipientConfig() {
    return {
        address: '',
        sharePpm: 0,
    };
}
export const UnconditionalRevShareConfig_RecipientConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.sharePpm !== 0) {
            writer.uint32(16).uint32(message.sharePpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnconditionalRevShareConfig_RecipientConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.sharePpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnconditionalRevShareConfig_RecipientConfig();
        message.address = object.address ?? '';
        message.sharePpm = object.sharePpm ?? 0;
        return message;
    },
};
//# sourceMappingURL=revshare.js.map