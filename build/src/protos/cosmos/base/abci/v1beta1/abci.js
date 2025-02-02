import { Any } from '../../../../google/protobuf/any.js';
import { Event } from '../../../../tendermint/abci/types.js';
import { Block } from '../../../../tendermint/types/block.js';
import { Long } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseTxResponse() {
    return {
        height: Long.ZERO,
        txhash: '',
        codespace: '',
        code: 0,
        data: '',
        rawLog: '',
        logs: [],
        info: '',
        gasWanted: Long.ZERO,
        gasUsed: Long.ZERO,
        tx: undefined,
        timestamp: '',
        events: [],
    };
}
export const TxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== '') {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== '') {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== '') {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== '') {
            writer.uint32(50).string(message.rawLog);
        }
        for (const v of message.logs) {
            ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== '') {
            writer.uint32(66).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== '') {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.rawLog = reader.string();
                    break;
                case 7:
                    message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = reader.int64();
                    break;
                case 10:
                    message.gasUsed = reader.int64();
                    break;
                case 11:
                    message.tx = Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.ZERO;
        message.txhash = object.txhash ?? '';
        message.codespace = object.codespace ?? '';
        message.code = object.code ?? 0;
        message.data = object.data ?? '';
        message.rawLog = object.rawLog ?? '';
        message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
        message.info = object.info ?? '';
        message.gasWanted =
            object.gasWanted !== undefined && object.gasWanted !== null
                ? Long.fromValue(object.gasWanted)
                : Long.ZERO;
        message.gasUsed =
            object.gasUsed !== undefined && object.gasUsed !== null
                ? Long.fromValue(object.gasUsed)
                : Long.ZERO;
        message.tx =
            object.tx !== undefined && object.tx !== null
                ? Any.fromPartial(object.tx)
                : undefined;
        message.timestamp = object.timestamp ?? '';
        message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
        return message;
    },
};
function createBaseABCIMessageLog() {
    return {
        msgIndex: 0,
        log: '',
        events: [],
    };
}
export const ABCIMessageLog = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== '') {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgIndex = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(StringEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseABCIMessageLog();
        message.msgIndex = object.msgIndex ?? 0;
        message.log = object.log ?? '';
        message.events =
            object.events?.map((e) => StringEvent.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStringEvent() {
    return {
        type: '',
        attributes: [],
    };
}
export const StringEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStringEvent();
        message.type = object.type ?? '';
        message.attributes =
            object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAttribute() {
    return {
        key: '',
        value: '',
    };
}
export const Attribute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
        const message = createBaseAttribute();
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};
function createBaseGasInfo() {
    return {
        gasWanted: Long.UZERO,
        gasUsed: Long.UZERO,
    };
}
export const GasInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gasWanted.isZero()) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasWanted = reader.uint64();
                    break;
                case 2:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gasWanted =
            object.gasWanted !== undefined && object.gasWanted !== null
                ? Long.fromValue(object.gasWanted)
                : Long.UZERO;
        message.gasUsed =
            object.gasUsed !== undefined && object.gasUsed !== null
                ? Long.fromValue(object.gasUsed)
                : Long.UZERO;
        return message;
    },
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: '',
        events: [],
        msgResponses: [],
    };
}
export const Result = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== '') {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? '';
        message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
        message.msgResponses =
            object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSimulationResponse() {
    return {
        gasInfo: undefined,
        result: undefined,
    };
}
export const SimulationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gasInfo =
            object.gasInfo !== undefined && object.gasInfo !== null
                ? GasInfo.fromPartial(object.gasInfo)
                : undefined;
        message.result =
            object.result !== undefined && object.result !== null
                ? Result.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseMsgData() {
    return {
        msgType: '',
        data: new Uint8Array(),
    };
}
export const MsgData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgType !== '') {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgData();
        message.msgType = object.msgType ?? '';
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseTxMsgData() {
    return {
        data: [],
        msgResponses: [],
    };
}
export const TxMsgData = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.data) {
            MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
        message.msgResponses =
            object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSearchTxsResult() {
    return {
        totalCount: Long.UZERO,
        count: Long.UZERO,
        pageNumber: Long.UZERO,
        pageTotal: Long.UZERO,
        limit: Long.UZERO,
        txs: [],
    };
}
export const SearchTxsResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (!message.count.isZero()) {
            writer.uint32(16).uint64(message.count);
        }
        if (!message.pageNumber.isZero()) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (!message.pageTotal.isZero()) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (!message.limit.isZero()) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.pageNumber = reader.uint64();
                    break;
                case 4:
                    message.pageTotal = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(TxResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSearchTxsResult();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? Long.fromValue(object.totalCount)
                : Long.UZERO;
        message.count =
            object.count !== undefined && object.count !== null
                ? Long.fromValue(object.count)
                : Long.UZERO;
        message.pageNumber =
            object.pageNumber !== undefined && object.pageNumber !== null
                ? Long.fromValue(object.pageNumber)
                : Long.UZERO;
        message.pageTotal =
            object.pageTotal !== undefined && object.pageTotal !== null
                ? Long.fromValue(object.pageTotal)
                : Long.UZERO;
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Long.fromValue(object.limit)
                : Long.UZERO;
        message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSearchBlocksResult() {
    return {
        totalCount: Long.ZERO,
        count: Long.ZERO,
        pageNumber: Long.ZERO,
        pageTotal: Long.ZERO,
        limit: Long.ZERO,
        blocks: [],
    };
}
export const SearchBlocksResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).int64(message.totalCount);
        }
        if (!message.count.isZero()) {
            writer.uint32(16).int64(message.count);
        }
        if (!message.pageNumber.isZero()) {
            writer.uint32(24).int64(message.pageNumber);
        }
        if (!message.pageTotal.isZero()) {
            writer.uint32(32).int64(message.pageTotal);
        }
        if (!message.limit.isZero()) {
            writer.uint32(40).int64(message.limit);
        }
        for (const v of message.blocks) {
            Block.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchBlocksResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.int64();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                case 3:
                    message.pageNumber = reader.int64();
                    break;
                case 4:
                    message.pageTotal = reader.int64();
                    break;
                case 5:
                    message.limit = reader.int64();
                    break;
                case 6:
                    message.blocks.push(Block.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSearchBlocksResult();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? Long.fromValue(object.totalCount)
                : Long.ZERO;
        message.count =
            object.count !== undefined && object.count !== null
                ? Long.fromValue(object.count)
                : Long.ZERO;
        message.pageNumber =
            object.pageNumber !== undefined && object.pageNumber !== null
                ? Long.fromValue(object.pageNumber)
                : Long.ZERO;
        message.pageTotal =
            object.pageTotal !== undefined && object.pageTotal !== null
                ? Long.fromValue(object.pageTotal)
                : Long.ZERO;
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Long.fromValue(object.limit)
                : Long.ZERO;
        message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=abci.js.map