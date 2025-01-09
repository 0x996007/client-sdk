import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../helpers.js';
function createBaseMinter() {
    return {
        inflation: '',
        annualProvisions: '',
    };
}
export const Minter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.inflation !== '') {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annualProvisions !== '') {
            writer.uint32(18).string(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annualProvisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.inflation = object.inflation ?? '';
        message.annualProvisions = object.annualProvisions ?? '';
        return message;
    },
};
function createBaseParams() {
    return {
        mintDenom: '',
        inflationRateChange: '',
        inflationMax: '',
        inflationMin: '',
        goalBonded: '',
        blocksPerYear: Long.UZERO,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintDenom !== '') {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.inflationRateChange !== '') {
            writer.uint32(18).string(message.inflationRateChange);
        }
        if (message.inflationMax !== '') {
            writer.uint32(26).string(message.inflationMax);
        }
        if (message.inflationMin !== '') {
            writer.uint32(34).string(message.inflationMin);
        }
        if (message.goalBonded !== '') {
            writer.uint32(42).string(message.goalBonded);
        }
        if (!message.blocksPerYear.isZero()) {
            writer.uint32(48).uint64(message.blocksPerYear);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.inflationRateChange = reader.string();
                    break;
                case 3:
                    message.inflationMax = reader.string();
                    break;
                case 4:
                    message.inflationMin = reader.string();
                    break;
                case 5:
                    message.goalBonded = reader.string();
                    break;
                case 6:
                    message.blocksPerYear = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? '';
        message.inflationRateChange = object.inflationRateChange ?? '';
        message.inflationMax = object.inflationMax ?? '';
        message.inflationMin = object.inflationMin ?? '';
        message.goalBonded = object.goalBonded ?? '';
        message.blocksPerYear =
            object.blocksPerYear !== undefined && object.blocksPerYear !== null
                ? Long.fromValue(object.blocksPerYear)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=mint.js.map