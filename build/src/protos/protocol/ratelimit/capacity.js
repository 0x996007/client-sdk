import { Limiter } from './limit_params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseDenomCapacity() {
    return {
        denom: '',
        capacityList: [],
    };
}
export const DenomCapacity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        for (const v of message.capacityList) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomCapacity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.capacityList.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomCapacity();
        message.denom = object.denom ?? '';
        message.capacityList = object.capacityList?.map((e) => e) || [];
        return message;
    },
};
function createBaseLimiterCapacity() {
    return {
        limiter: undefined,
        capacity: new Uint8Array(),
    };
}
export const LimiterCapacity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limiter !== undefined) {
            Limiter.encode(message.limiter, writer.uint32(10).fork()).ldelim();
        }
        if (message.capacity.length !== 0) {
            writer.uint32(18).bytes(message.capacity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimiterCapacity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limiter = Limiter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.capacity = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLimiterCapacity();
        message.limiter =
            object.limiter !== undefined && object.limiter !== null
                ? Limiter.fromPartial(object.limiter)
                : undefined;
        message.capacity = object.capacity ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=capacity.js.map