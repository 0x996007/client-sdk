/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp } from '../../../helpers.js';
/** enum to specify that the IndexerTendermintEvent is a block event. */
export var IndexerTendermintEvent_BlockEvent;
(function (IndexerTendermintEvent_BlockEvent) {
    /** BLOCK_EVENT_UNSPECIFIED - Default value. This value is invalid and unused. */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_UNSPECIFIED"] = 0] = "BLOCK_EVENT_UNSPECIFIED";
    /**
     * BLOCK_EVENT_BEGIN_BLOCK - BLOCK_EVENT_BEGIN_BLOCK indicates that the event was generated during
     * BeginBlock.
     */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_BEGIN_BLOCK"] = 1] = "BLOCK_EVENT_BEGIN_BLOCK";
    /**
     * BLOCK_EVENT_END_BLOCK - BLOCK_EVENT_END_BLOCK indicates that the event was generated during
     * EndBlock.
     */
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["BLOCK_EVENT_END_BLOCK"] = 2] = "BLOCK_EVENT_END_BLOCK";
    IndexerTendermintEvent_BlockEvent[IndexerTendermintEvent_BlockEvent["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IndexerTendermintEvent_BlockEvent || (IndexerTendermintEvent_BlockEvent = {}));
export const IndexerTendermintEvent_BlockEventSDKType = IndexerTendermintEvent_BlockEvent;
export function indexerTendermintEvent_BlockEventFromJSON(object) {
    switch (object) {
        case 0:
        case 'BLOCK_EVENT_UNSPECIFIED':
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED;
        case 1:
        case 'BLOCK_EVENT_BEGIN_BLOCK':
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK;
        case 2:
        case 'BLOCK_EVENT_END_BLOCK':
            return IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IndexerTendermintEvent_BlockEvent.UNRECOGNIZED;
    }
}
export function indexerTendermintEvent_BlockEventToJSON(object) {
    switch (object) {
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_UNSPECIFIED:
            return 'BLOCK_EVENT_UNSPECIFIED';
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_BEGIN_BLOCK:
            return 'BLOCK_EVENT_BEGIN_BLOCK';
        case IndexerTendermintEvent_BlockEvent.BLOCK_EVENT_END_BLOCK:
            return 'BLOCK_EVENT_END_BLOCK';
        case IndexerTendermintEvent_BlockEvent.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseIndexerTendermintEventWrapper() {
    return {
        event: undefined,
        txnHash: '',
    };
}
export const IndexerTendermintEventWrapper = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.event !== undefined) {
            IndexerTendermintEvent.encode(message.event, writer.uint32(10).fork()).ldelim();
        }
        if (message.txnHash !== '') {
            writer.uint32(18).string(message.txnHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexerTendermintEventWrapper();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event = IndexerTendermintEvent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txnHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIndexerTendermintEventWrapper();
        message.event =
            object.event !== undefined && object.event !== null
                ? IndexerTendermintEvent.fromPartial(object.event)
                : undefined;
        message.txnHash = object.txnHash ?? '';
        return message;
    },
};
function createBaseIndexerEventsStoreValue() {
    return {
        events: [],
    };
}
export const IndexerEventsStoreValue = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            IndexerTendermintEventWrapper.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexerEventsStoreValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(IndexerTendermintEventWrapper.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIndexerEventsStoreValue();
        message.events =
            object.events?.map((e) => IndexerTendermintEventWrapper.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseIndexerTendermintEvent() {
    return {
        subtype: '',
        transactionIndex: undefined,
        blockEvent: undefined,
        eventIndex: 0,
        version: 0,
        dataBytes: new Uint8Array(),
    };
}
export const IndexerTendermintEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subtype !== '') {
            writer.uint32(10).string(message.subtype);
        }
        if (message.transactionIndex !== undefined) {
            writer.uint32(24).uint32(message.transactionIndex);
        }
        if (message.blockEvent !== undefined) {
            writer.uint32(32).int32(message.blockEvent);
        }
        if (message.eventIndex !== 0) {
            writer.uint32(40).uint32(message.eventIndex);
        }
        if (message.version !== 0) {
            writer.uint32(48).uint32(message.version);
        }
        if (message.dataBytes.length !== 0) {
            writer.uint32(58).bytes(message.dataBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexerTendermintEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subtype = reader.string();
                    break;
                case 3:
                    message.transactionIndex = reader.uint32();
                    break;
                case 4:
                    message.blockEvent = reader.int32();
                    break;
                case 5:
                    message.eventIndex = reader.uint32();
                    break;
                case 6:
                    message.version = reader.uint32();
                    break;
                case 7:
                    message.dataBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIndexerTendermintEvent();
        message.subtype = object.subtype ?? '';
        message.transactionIndex = object.transactionIndex ?? undefined;
        message.blockEvent = object.blockEvent ?? undefined;
        message.eventIndex = object.eventIndex ?? 0;
        message.version = object.version ?? 0;
        message.dataBytes = object.dataBytes ?? new Uint8Array();
        return message;
    },
};
function createBaseIndexerTendermintBlock() {
    return {
        height: 0,
        time: undefined,
        events: [],
        txHashes: [],
    };
}
export const IndexerTendermintBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint32(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            IndexerTendermintEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.txHashes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexerTendermintBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint32();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.events.push(IndexerTendermintEvent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.txHashes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIndexerTendermintBlock();
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.events =
            object.events?.map((e) => IndexerTendermintEvent.fromPartial(e)) || [];
        message.txHashes = object.txHashes?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=event.js.map