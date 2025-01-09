import * as _m0 from 'protobufjs/minimal.js';
function createBaseBlockRateLimitConfiguration() {
    return {
        maxShortTermOrdersPerNBlocks: [],
        maxStatefulOrdersPerNBlocks: [],
        maxShortTermOrderCancellationsPerNBlocks: [],
        maxShortTermOrdersAndCancelsPerNBlocks: [],
    };
}
export const BlockRateLimitConfiguration = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.maxShortTermOrdersPerNBlocks) {
            MaxPerNBlocksRateLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.maxStatefulOrdersPerNBlocks) {
            MaxPerNBlocksRateLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.maxShortTermOrderCancellationsPerNBlocks) {
            MaxPerNBlocksRateLimit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.maxShortTermOrdersAndCancelsPerNBlocks) {
            MaxPerNBlocksRateLimit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockRateLimitConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxShortTermOrdersPerNBlocks.push(MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxStatefulOrdersPerNBlocks.push(MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.maxShortTermOrderCancellationsPerNBlocks.push(MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.maxShortTermOrdersAndCancelsPerNBlocks.push(MaxPerNBlocksRateLimit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockRateLimitConfiguration();
        message.maxShortTermOrdersPerNBlocks =
            object.maxShortTermOrdersPerNBlocks?.map((e) => MaxPerNBlocksRateLimit.fromPartial(e)) || [];
        message.maxStatefulOrdersPerNBlocks =
            object.maxStatefulOrdersPerNBlocks?.map((e) => MaxPerNBlocksRateLimit.fromPartial(e)) || [];
        message.maxShortTermOrderCancellationsPerNBlocks =
            object.maxShortTermOrderCancellationsPerNBlocks?.map((e) => MaxPerNBlocksRateLimit.fromPartial(e)) || [];
        message.maxShortTermOrdersAndCancelsPerNBlocks =
            object.maxShortTermOrdersAndCancelsPerNBlocks?.map((e) => MaxPerNBlocksRateLimit.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMaxPerNBlocksRateLimit() {
    return {
        numBlocks: 0,
        limit: 0,
    };
}
export const MaxPerNBlocksRateLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.numBlocks !== 0) {
            writer.uint32(8).uint32(message.numBlocks);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxPerNBlocksRateLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numBlocks = reader.uint32();
                    break;
                case 2:
                    message.limit = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMaxPerNBlocksRateLimit();
        message.numBlocks = object.numBlocks ?? 0;
        message.limit = object.limit ?? 0;
        return message;
    },
};
//# sourceMappingURL=block_rate_limit_config.js.map