import { Timestamp } from '../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long, toTimestamp, fromTimestamp, } from '../../helpers.js';
function createBaseBlockStats() {
    return {
        fills: [],
    };
}
export const BlockStats = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fills) {
            BlockStats_Fill.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fills.push(BlockStats_Fill.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockStats();
        message.fills =
            object.fills?.map((e) => BlockStats_Fill.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBlockStats_Fill() {
    return {
        taker: '',
        maker: '',
        notional: Long.UZERO,
    };
}
export const BlockStats_Fill = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.taker !== '') {
            writer.uint32(10).string(message.taker);
        }
        if (message.maker !== '') {
            writer.uint32(18).string(message.maker);
        }
        if (!message.notional.isZero()) {
            writer.uint32(24).uint64(message.notional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockStats_Fill();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taker = reader.string();
                    break;
                case 2:
                    message.maker = reader.string();
                    break;
                case 3:
                    message.notional = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockStats_Fill();
        message.taker = object.taker ?? '';
        message.maker = object.maker ?? '';
        message.notional =
            object.notional !== undefined && object.notional !== null
                ? Long.fromValue(object.notional)
                : Long.UZERO;
        return message;
    },
};
function createBaseStatsMetadata() {
    return {
        trailingEpoch: 0,
    };
}
export const StatsMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trailingEpoch !== 0) {
            writer.uint32(8).uint32(message.trailingEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatsMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trailingEpoch = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatsMetadata();
        message.trailingEpoch = object.trailingEpoch ?? 0;
        return message;
    },
};
function createBaseEpochStats() {
    return {
        epochEndTime: undefined,
        stats: [],
    };
}
export const EpochStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochEndTime !== undefined) {
            Timestamp.encode(toTimestamp(message.epochEndTime), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.stats) {
            EpochStats_UserWithStats.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stats.push(EpochStats_UserWithStats.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochStats();
        message.epochEndTime = object.epochEndTime ?? undefined;
        message.stats =
            object.stats?.map((e) => EpochStats_UserWithStats.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEpochStats_UserWithStats() {
    return {
        user: '',
        stats: undefined,
    };
}
export const EpochStats_UserWithStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== '') {
            writer.uint32(10).string(message.user);
        }
        if (message.stats !== undefined) {
            UserStats.encode(message.stats, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochStats_UserWithStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.stats = UserStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochStats_UserWithStats();
        message.user = object.user ?? '';
        message.stats =
            object.stats !== undefined && object.stats !== null
                ? UserStats.fromPartial(object.stats)
                : undefined;
        return message;
    },
};
function createBaseGlobalStats() {
    return {
        notionalTraded: Long.UZERO,
    };
}
export const GlobalStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.notionalTraded.isZero()) {
            writer.uint32(8).uint64(message.notionalTraded);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGlobalStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notionalTraded = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGlobalStats();
        message.notionalTraded =
            object.notionalTraded !== undefined && object.notionalTraded !== null
                ? Long.fromValue(object.notionalTraded)
                : Long.UZERO;
        return message;
    },
};
function createBaseUserStats() {
    return {
        takerNotional: Long.UZERO,
        makerNotional: Long.UZERO,
    };
}
export const UserStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.takerNotional.isZero()) {
            writer.uint32(8).uint64(message.takerNotional);
        }
        if (!message.makerNotional.isZero()) {
            writer.uint32(16).uint64(message.makerNotional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerNotional = reader.uint64();
                    break;
                case 2:
                    message.makerNotional = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserStats();
        message.takerNotional =
            object.takerNotional !== undefined && object.takerNotional !== null
                ? Long.fromValue(object.takerNotional)
                : Long.UZERO;
        message.makerNotional =
            object.makerNotional !== undefined && object.makerNotional !== null
                ? Long.fromValue(object.makerNotional)
                : Long.UZERO;
        return message;
    },
};
function createBaseCachedStakeAmount() {
    return {
        stakedAmount: new Uint8Array(),
        cachedAt: Long.ZERO,
    };
}
export const CachedStakeAmount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stakedAmount.length !== 0) {
            writer.uint32(10).bytes(message.stakedAmount);
        }
        if (!message.cachedAt.isZero()) {
            writer.uint32(16).int64(message.cachedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCachedStakeAmount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakedAmount = reader.bytes();
                    break;
                case 2:
                    message.cachedAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCachedStakeAmount();
        message.stakedAmount = object.stakedAmount ?? new Uint8Array();
        message.cachedAt =
            object.cachedAt !== undefined && object.cachedAt !== null
                ? Long.fromValue(object.cachedAt)
                : Long.ZERO;
        return message;
    },
};
//# sourceMappingURL=stats.js.map