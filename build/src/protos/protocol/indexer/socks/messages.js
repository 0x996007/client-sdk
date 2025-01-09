/* eslint-disable @typescript-eslint/no-explicit-any */
import { IndexerSubaccountId, } from '../protocol/v1/subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
/** TODO(IND-210): Make this proto conform and update downstream indexer logic */
export var CandleMessage_Resolution;
(function (CandleMessage_Resolution) {
    /**
     * ONE_MINUTE - buf:lint:ignore ENUM_VALUE_PREFIX
     * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
     */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_MINUTE"] = 0] = "ONE_MINUTE";
    /** FIVE_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FIVE_MINUTES"] = 1] = "FIVE_MINUTES";
    /** FIFTEEN_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FIFTEEN_MINUTES"] = 2] = "FIFTEEN_MINUTES";
    /** THIRTY_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["THIRTY_MINUTES"] = 3] = "THIRTY_MINUTES";
    /** ONE_HOUR - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_HOUR"] = 4] = "ONE_HOUR";
    /** FOUR_HOURS - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["FOUR_HOURS"] = 5] = "FOUR_HOURS";
    /** ONE_DAY - buf:lint:ignore ENUM_VALUE_PREFIX */
    CandleMessage_Resolution[CandleMessage_Resolution["ONE_DAY"] = 6] = "ONE_DAY";
    CandleMessage_Resolution[CandleMessage_Resolution["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CandleMessage_Resolution || (CandleMessage_Resolution = {}));
export const CandleMessage_ResolutionSDKType = CandleMessage_Resolution;
export function candleMessage_ResolutionFromJSON(object) {
    switch (object) {
        case 0:
        case 'ONE_MINUTE':
            return CandleMessage_Resolution.ONE_MINUTE;
        case 1:
        case 'FIVE_MINUTES':
            return CandleMessage_Resolution.FIVE_MINUTES;
        case 2:
        case 'FIFTEEN_MINUTES':
            return CandleMessage_Resolution.FIFTEEN_MINUTES;
        case 3:
        case 'THIRTY_MINUTES':
            return CandleMessage_Resolution.THIRTY_MINUTES;
        case 4:
        case 'ONE_HOUR':
            return CandleMessage_Resolution.ONE_HOUR;
        case 5:
        case 'FOUR_HOURS':
            return CandleMessage_Resolution.FOUR_HOURS;
        case 6:
        case 'ONE_DAY':
            return CandleMessage_Resolution.ONE_DAY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CandleMessage_Resolution.UNRECOGNIZED;
    }
}
export function candleMessage_ResolutionToJSON(object) {
    switch (object) {
        case CandleMessage_Resolution.ONE_MINUTE:
            return 'ONE_MINUTE';
        case CandleMessage_Resolution.FIVE_MINUTES:
            return 'FIVE_MINUTES';
        case CandleMessage_Resolution.FIFTEEN_MINUTES:
            return 'FIFTEEN_MINUTES';
        case CandleMessage_Resolution.THIRTY_MINUTES:
            return 'THIRTY_MINUTES';
        case CandleMessage_Resolution.ONE_HOUR:
            return 'ONE_HOUR';
        case CandleMessage_Resolution.FOUR_HOURS:
            return 'FOUR_HOURS';
        case CandleMessage_Resolution.ONE_DAY:
            return 'ONE_DAY';
        case CandleMessage_Resolution.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseOrderbookMessage() {
    return {
        contents: '',
        clobPairId: '',
        version: '',
    };
}
export const OrderbookMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        if (message.clobPairId !== '') {
            writer.uint32(18).string(message.clobPairId);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.clobPairId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderbookMessage();
        message.contents = object.contents ?? '';
        message.clobPairId = object.clobPairId ?? '';
        message.version = object.version ?? '';
        return message;
    },
};
function createBaseSubaccountMessage() {
    return {
        blockHeight: '',
        transactionIndex: 0,
        eventIndex: 0,
        contents: '',
        subaccountId: undefined,
        version: '',
    };
}
export const SubaccountMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== '') {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.transactionIndex !== 0) {
            writer.uint32(16).int32(message.transactionIndex);
        }
        if (message.eventIndex !== 0) {
            writer.uint32(24).uint32(message.eventIndex);
        }
        if (message.contents !== '') {
            writer.uint32(34).string(message.contents);
        }
        if (message.subaccountId !== undefined) {
            IndexerSubaccountId.encode(message.subaccountId, writer.uint32(42).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 2:
                    message.transactionIndex = reader.int32();
                    break;
                case 3:
                    message.eventIndex = reader.uint32();
                    break;
                case 4:
                    message.contents = reader.string();
                    break;
                case 5:
                    message.subaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountMessage();
        message.blockHeight = object.blockHeight ?? '';
        message.transactionIndex = object.transactionIndex ?? 0;
        message.eventIndex = object.eventIndex ?? 0;
        message.contents = object.contents ?? '';
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? IndexerSubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.version = object.version ?? '';
        return message;
    },
};
function createBaseTradeMessage() {
    return {
        blockHeight: '',
        contents: '',
        clobPairId: '',
        version: '',
    };
}
export const TradeMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== '') {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.contents !== '') {
            writer.uint32(34).string(message.contents);
        }
        if (message.clobPairId !== '') {
            writer.uint32(42).string(message.clobPairId);
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 4:
                    message.contents = reader.string();
                    break;
                case 5:
                    message.clobPairId = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradeMessage();
        message.blockHeight = object.blockHeight ?? '';
        message.contents = object.contents ?? '';
        message.clobPairId = object.clobPairId ?? '';
        message.version = object.version ?? '';
        return message;
    },
};
function createBaseMarketMessage() {
    return {
        contents: '',
        version: '',
    };
}
export const MarketMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketMessage();
        message.contents = object.contents ?? '';
        message.version = object.version ?? '';
        return message;
    },
};
function createBaseCandleMessage() {
    return {
        contents: '',
        clobPairId: '',
        resolution: 0,
        version: '',
    };
}
export const CandleMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contents !== '') {
            writer.uint32(10).string(message.contents);
        }
        if (message.clobPairId !== '') {
            writer.uint32(18).string(message.clobPairId);
        }
        if (message.resolution !== 0) {
            writer.uint32(24).int32(message.resolution);
        }
        if (message.version !== '') {
            writer.uint32(34).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandleMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                case 2:
                    message.clobPairId = reader.string();
                    break;
                case 3:
                    message.resolution = reader.int32();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCandleMessage();
        message.contents = object.contents ?? '';
        message.clobPairId = object.clobPairId ?? '';
        message.resolution = object.resolution ?? 0;
        message.version = object.version ?? '';
        return message;
    },
};
function createBaseBlockHeightMessage() {
    return {
        blockHeight: '',
        time: '',
        version: '',
    };
}
export const BlockHeightMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== '') {
            writer.uint32(10).string(message.blockHeight);
        }
        if (message.time !== '') {
            writer.uint32(18).string(message.time);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockHeightMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.string();
                    break;
                case 2:
                    message.time = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockHeightMessage();
        message.blockHeight = object.blockHeight ?? '';
        message.time = object.time ?? '';
        message.version = object.version ?? '';
        return message;
    },
};
//# sourceMappingURL=messages.js.map