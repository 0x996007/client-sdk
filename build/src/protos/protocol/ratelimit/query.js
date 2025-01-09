/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { LimitParams } from './limit_params.js';
import { LimiterCapacity } from './capacity.js';
import { PendingSendPacket, } from './pending_send_packet.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseListLimitParamsRequest() {
    return {};
}
export const ListLimitParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListLimitParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseListLimitParamsRequest();
        return message;
    },
};
function createBaseListLimitParamsResponse() {
    return {
        limitParamsList: [],
    };
}
export const ListLimitParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.limitParamsList) {
            LimitParams.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListLimitParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitParamsList.push(LimitParams.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListLimitParamsResponse();
        message.limitParamsList =
            object.limitParamsList?.map((e) => LimitParams.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryCapacityByDenomRequest() {
    return {
        denom: '',
    };
}
export const QueryCapacityByDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCapacityByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCapacityByDenomRequest();
        message.denom = object.denom ?? '';
        return message;
    },
};
function createBaseQueryCapacityByDenomResponse() {
    return {
        limiterCapacityList: [],
    };
}
export const QueryCapacityByDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.limiterCapacityList) {
            LimiterCapacity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCapacityByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limiterCapacityList.push(LimiterCapacity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCapacityByDenomResponse();
        message.limiterCapacityList =
            object.limiterCapacityList?.map((e) => LimiterCapacity.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseQueryAllPendingSendPacketsRequest() {
    return {};
}
export const QueryAllPendingSendPacketsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllPendingSendPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryAllPendingSendPacketsRequest();
        return message;
    },
};
function createBaseQueryAllPendingSendPacketsResponse() {
    return {
        pendingSendPackets: [],
    };
}
export const QueryAllPendingSendPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pendingSendPackets) {
            PendingSendPacket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllPendingSendPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pendingSendPackets.push(PendingSendPacket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllPendingSendPacketsResponse();
        message.pendingSendPackets =
            object.pendingSendPackets?.map((e) => PendingSendPacket.fromPartial(e)) ||
                [];
        return message;
    },
};
//# sourceMappingURL=query.js.map