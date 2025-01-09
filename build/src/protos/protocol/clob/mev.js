import { SubaccountId, } from '../subaccounts/subaccount.js';
import { ClobPair } from './clob_pair.js';
import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMEVMatch() {
    return {
        takerOrderSubaccountId: undefined,
        takerFeePpm: 0,
        makerOrderSubaccountId: undefined,
        makerOrderSubticks: Long.UZERO,
        makerOrderIsBuy: false,
        makerFeePpm: 0,
        clobPairId: 0,
        fillAmount: Long.UZERO,
    };
}
export const MEVMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.takerOrderSubaccountId !== undefined) {
            SubaccountId.encode(message.takerOrderSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.takerFeePpm !== 0) {
            writer.uint32(16).int32(message.takerFeePpm);
        }
        if (message.makerOrderSubaccountId !== undefined) {
            SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
        }
        if (!message.makerOrderSubticks.isZero()) {
            writer.uint32(32).uint64(message.makerOrderSubticks);
        }
        if (message.makerOrderIsBuy === true) {
            writer.uint32(40).bool(message.makerOrderIsBuy);
        }
        if (message.makerFeePpm !== 0) {
            writer.uint32(48).int32(message.makerFeePpm);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(56).uint32(message.clobPairId);
        }
        if (!message.fillAmount.isZero()) {
            writer.uint32(64).uint64(message.fillAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMEVMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerOrderSubaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.takerFeePpm = reader.int32();
                    break;
                case 3:
                    message.makerOrderSubaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.makerOrderSubticks = reader.uint64();
                    break;
                case 5:
                    message.makerOrderIsBuy = reader.bool();
                    break;
                case 6:
                    message.makerFeePpm = reader.int32();
                    break;
                case 7:
                    message.clobPairId = reader.uint32();
                    break;
                case 8:
                    message.fillAmount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMEVMatch();
        message.takerOrderSubaccountId =
            object.takerOrderSubaccountId !== undefined &&
                object.takerOrderSubaccountId !== null
                ? SubaccountId.fromPartial(object.takerOrderSubaccountId)
                : undefined;
        message.takerFeePpm = object.takerFeePpm ?? 0;
        message.makerOrderSubaccountId =
            object.makerOrderSubaccountId !== undefined &&
                object.makerOrderSubaccountId !== null
                ? SubaccountId.fromPartial(object.makerOrderSubaccountId)
                : undefined;
        message.makerOrderSubticks =
            object.makerOrderSubticks !== undefined &&
                object.makerOrderSubticks !== null
                ? Long.fromValue(object.makerOrderSubticks)
                : Long.UZERO;
        message.makerOrderIsBuy = object.makerOrderIsBuy ?? false;
        message.makerFeePpm = object.makerFeePpm ?? 0;
        message.clobPairId = object.clobPairId ?? 0;
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        return message;
    },
};
function createBaseMEVLiquidationMatch() {
    return {
        liquidatedSubaccountId: undefined,
        insuranceFundDeltaQuoteQuantums: Long.ZERO,
        makerOrderSubaccountId: undefined,
        makerOrderSubticks: Long.UZERO,
        makerOrderIsBuy: false,
        makerFeePpm: 0,
        clobPairId: 0,
        fillAmount: Long.UZERO,
    };
}
export const MEVLiquidationMatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidatedSubaccountId !== undefined) {
            SubaccountId.encode(message.liquidatedSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.insuranceFundDeltaQuoteQuantums.isZero()) {
            writer.uint32(16).int64(message.insuranceFundDeltaQuoteQuantums);
        }
        if (message.makerOrderSubaccountId !== undefined) {
            SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
        }
        if (!message.makerOrderSubticks.isZero()) {
            writer.uint32(32).uint64(message.makerOrderSubticks);
        }
        if (message.makerOrderIsBuy === true) {
            writer.uint32(40).bool(message.makerOrderIsBuy);
        }
        if (message.makerFeePpm !== 0) {
            writer.uint32(48).int32(message.makerFeePpm);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(56).uint32(message.clobPairId);
        }
        if (!message.fillAmount.isZero()) {
            writer.uint32(64).uint64(message.fillAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMEVLiquidationMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidatedSubaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.insuranceFundDeltaQuoteQuantums = reader.int64();
                    break;
                case 3:
                    message.makerOrderSubaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.makerOrderSubticks = reader.uint64();
                    break;
                case 5:
                    message.makerOrderIsBuy = reader.bool();
                    break;
                case 6:
                    message.makerFeePpm = reader.int32();
                    break;
                case 7:
                    message.clobPairId = reader.uint32();
                    break;
                case 8:
                    message.fillAmount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMEVLiquidationMatch();
        message.liquidatedSubaccountId =
            object.liquidatedSubaccountId !== undefined &&
                object.liquidatedSubaccountId !== null
                ? SubaccountId.fromPartial(object.liquidatedSubaccountId)
                : undefined;
        message.insuranceFundDeltaQuoteQuantums =
            object.insuranceFundDeltaQuoteQuantums !== undefined &&
                object.insuranceFundDeltaQuoteQuantums !== null
                ? Long.fromValue(object.insuranceFundDeltaQuoteQuantums)
                : Long.ZERO;
        message.makerOrderSubaccountId =
            object.makerOrderSubaccountId !== undefined &&
                object.makerOrderSubaccountId !== null
                ? SubaccountId.fromPartial(object.makerOrderSubaccountId)
                : undefined;
        message.makerOrderSubticks =
            object.makerOrderSubticks !== undefined &&
                object.makerOrderSubticks !== null
                ? Long.fromValue(object.makerOrderSubticks)
                : Long.UZERO;
        message.makerOrderIsBuy = object.makerOrderIsBuy ?? false;
        message.makerFeePpm = object.makerFeePpm ?? 0;
        message.clobPairId = object.clobPairId ?? 0;
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        return message;
    },
};
function createBaseClobMidPrice() {
    return {
        clobPair: undefined,
        subticks: Long.UZERO,
    };
}
export const ClobMidPrice = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clobPair !== undefined) {
            ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
        }
        if (!message.subticks.isZero()) {
            writer.uint32(16).uint64(message.subticks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClobMidPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair = ClobPair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subticks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClobMidPrice();
        message.clobPair =
            object.clobPair !== undefined && object.clobPair !== null
                ? ClobPair.fromPartial(object.clobPair)
                : undefined;
        message.subticks =
            object.subticks !== undefined && object.subticks !== null
                ? Long.fromValue(object.subticks)
                : Long.UZERO;
        return message;
    },
};
function createBaseValidatorMevMatches() {
    return {
        matches: [],
        liquidationMatches: [],
    };
}
export const ValidatorMevMatches = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.matches) {
            MEVMatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.liquidationMatches) {
            MEVLiquidationMatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMevMatches();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matches.push(MEVMatch.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.liquidationMatches.push(MEVLiquidationMatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorMevMatches();
        message.matches = object.matches?.map((e) => MEVMatch.fromPartial(e)) || [];
        message.liquidationMatches =
            object.liquidationMatches?.map((e) => MEVLiquidationMatch.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMevNodeToNodeMetrics() {
    return {
        validatorMevMatches: undefined,
        clobMidPrices: [],
        bpMevMatches: undefined,
        proposalReceiveTime: Long.UZERO,
    };
}
export const MevNodeToNodeMetrics = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorMevMatches !== undefined) {
            ValidatorMevMatches.encode(message.validatorMevMatches, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clobMidPrices) {
            ClobMidPrice.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.bpMevMatches !== undefined) {
            ValidatorMevMatches.encode(message.bpMevMatches, writer.uint32(26).fork()).ldelim();
        }
        if (!message.proposalReceiveTime.isZero()) {
            writer.uint32(32).uint64(message.proposalReceiveTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMevNodeToNodeMetrics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorMevMatches = ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobMidPrices.push(ClobMidPrice.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.bpMevMatches = ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proposalReceiveTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMevNodeToNodeMetrics();
        message.validatorMevMatches =
            object.validatorMevMatches !== undefined &&
                object.validatorMevMatches !== null
                ? ValidatorMevMatches.fromPartial(object.validatorMevMatches)
                : undefined;
        message.clobMidPrices =
            object.clobMidPrices?.map((e) => ClobMidPrice.fromPartial(e)) || [];
        message.bpMevMatches =
            object.bpMevMatches !== undefined && object.bpMevMatches !== null
                ? ValidatorMevMatches.fromPartial(object.bpMevMatches)
                : undefined;
        message.proposalReceiveTime =
            object.proposalReceiveTime !== undefined &&
                object.proposalReceiveTime !== null
                ? Long.fromValue(object.proposalReceiveTime)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=mev.js.map