/* eslint-disable @typescript-eslint/no-explicit-any */
import { IndexerSubaccountId, IndexerPerpetualPosition, IndexerAssetPosition, } from '../protocol/v1/subaccount.js';
import { IndexerOrder, IndexerOrderId, } from '../protocol/v1/clob.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../helpers.js';
/** Type is the type for funding values. */
export var FundingEventV1_Type;
(function (FundingEventV1_Type) {
    /** TYPE_UNSPECIFIED - Unspecified type. */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /**
     * TYPE_PREMIUM_SAMPLE - Premium sample is the combined value from all premium votes during a
     * `funding-sample` epoch.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_PREMIUM_SAMPLE"] = 1] = "TYPE_PREMIUM_SAMPLE";
    /**
     * TYPE_FUNDING_RATE_AND_INDEX - Funding rate is the final funding rate combining all premium samples
     * during a `funding-tick` epoch.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_FUNDING_RATE_AND_INDEX"] = 2] = "TYPE_FUNDING_RATE_AND_INDEX";
    /**
     * TYPE_PREMIUM_VOTE - TODO(DEC-1513): Investigate whether premium vote values need to be
     * sent to indexer.
     */
    FundingEventV1_Type[FundingEventV1_Type["TYPE_PREMIUM_VOTE"] = 3] = "TYPE_PREMIUM_VOTE";
    FundingEventV1_Type[FundingEventV1_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FundingEventV1_Type || (FundingEventV1_Type = {}));
export const FundingEventV1_TypeSDKType = FundingEventV1_Type;
export function fundingEventV1_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return FundingEventV1_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'TYPE_PREMIUM_SAMPLE':
            return FundingEventV1_Type.TYPE_PREMIUM_SAMPLE;
        case 2:
        case 'TYPE_FUNDING_RATE_AND_INDEX':
            return FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX;
        case 3:
        case 'TYPE_PREMIUM_VOTE':
            return FundingEventV1_Type.TYPE_PREMIUM_VOTE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FundingEventV1_Type.UNRECOGNIZED;
    }
}
export function fundingEventV1_TypeToJSON(object) {
    switch (object) {
        case FundingEventV1_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case FundingEventV1_Type.TYPE_PREMIUM_SAMPLE:
            return 'TYPE_PREMIUM_SAMPLE';
        case FundingEventV1_Type.TYPE_FUNDING_RATE_AND_INDEX:
            return 'TYPE_FUNDING_RATE_AND_INDEX';
        case FundingEventV1_Type.TYPE_PREMIUM_VOTE:
            return 'TYPE_PREMIUM_VOTE';
        case FundingEventV1_Type.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseFundingUpdateV1() {
    return {
        perpetualId: 0,
        fundingValuePpm: 0,
        fundingIndex: new Uint8Array(),
    };
}
export const FundingUpdateV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.fundingValuePpm !== 0) {
            writer.uint32(16).int32(message.fundingValuePpm);
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(26).bytes(message.fundingIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingUpdateV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.fundingValuePpm = reader.int32();
                    break;
                case 3:
                    message.fundingIndex = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFundingUpdateV1();
        message.perpetualId = object.perpetualId ?? 0;
        message.fundingValuePpm = object.fundingValuePpm ?? 0;
        message.fundingIndex = object.fundingIndex ?? new Uint8Array();
        return message;
    },
};
function createBaseFundingEventV1() {
    return {
        updates: [],
        type: 0,
    };
}
export const FundingEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.updates) {
            FundingUpdateV1.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundingEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(FundingUpdateV1.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFundingEventV1();
        message.updates =
            object.updates?.map((e) => FundingUpdateV1.fromPartial(e)) || [];
        message.type = object.type ?? 0;
        return message;
    },
};
function createBaseMarketEventV1() {
    return {
        marketId: 0,
        priceUpdate: undefined,
        marketCreate: undefined,
        marketModify: undefined,
    };
}
export const MarketEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== 0) {
            writer.uint32(8).uint32(message.marketId);
        }
        if (message.priceUpdate !== undefined) {
            MarketPriceUpdateEventV1.encode(message.priceUpdate, writer.uint32(18).fork()).ldelim();
        }
        if (message.marketCreate !== undefined) {
            MarketCreateEventV1.encode(message.marketCreate, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketModify !== undefined) {
            MarketModifyEventV1.encode(message.marketModify, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint32();
                    break;
                case 2:
                    message.priceUpdate = MarketPriceUpdateEventV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.marketCreate = MarketCreateEventV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketModify = MarketModifyEventV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketEventV1();
        message.marketId = object.marketId ?? 0;
        message.priceUpdate =
            object.priceUpdate !== undefined && object.priceUpdate !== null
                ? MarketPriceUpdateEventV1.fromPartial(object.priceUpdate)
                : undefined;
        message.marketCreate =
            object.marketCreate !== undefined && object.marketCreate !== null
                ? MarketCreateEventV1.fromPartial(object.marketCreate)
                : undefined;
        message.marketModify =
            object.marketModify !== undefined && object.marketModify !== null
                ? MarketModifyEventV1.fromPartial(object.marketModify)
                : undefined;
        return message;
    },
};
function createBaseMarketPriceUpdateEventV1() {
    return {
        priceWithExponent: Long.UZERO,
    };
}
export const MarketPriceUpdateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.priceWithExponent.isZero()) {
            writer.uint32(8).uint64(message.priceWithExponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketPriceUpdateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceWithExponent = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketPriceUpdateEventV1();
        message.priceWithExponent =
            object.priceWithExponent !== undefined &&
                object.priceWithExponent !== null
                ? Long.fromValue(object.priceWithExponent)
                : Long.UZERO;
        return message;
    },
};
function createBaseMarketBaseEventV1() {
    return {
        pair: '',
        minPriceChangePpm: 0,
    };
}
export const MarketBaseEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== '') {
            writer.uint32(10).string(message.pair);
        }
        if (message.minPriceChangePpm !== 0) {
            writer.uint32(16).uint32(message.minPriceChangePpm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketBaseEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pair = reader.string();
                    break;
                case 2:
                    message.minPriceChangePpm = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketBaseEventV1();
        message.pair = object.pair ?? '';
        message.minPriceChangePpm = object.minPriceChangePpm ?? 0;
        return message;
    },
};
function createBaseMarketCreateEventV1() {
    return {
        base: undefined,
        exponent: 0,
    };
}
export const MarketCreateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base !== undefined) {
            MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
        }
        if (message.exponent !== 0) {
            writer.uint32(16).sint32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketCreateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = MarketBaseEventV1.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.exponent = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketCreateEventV1();
        message.base =
            object.base !== undefined && object.base !== null
                ? MarketBaseEventV1.fromPartial(object.base)
                : undefined;
        message.exponent = object.exponent ?? 0;
        return message;
    },
};
function createBaseMarketModifyEventV1() {
    return {
        base: undefined,
    };
}
export const MarketModifyEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base !== undefined) {
            MarketBaseEventV1.encode(message.base, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketModifyEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = MarketBaseEventV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketModifyEventV1();
        message.base =
            object.base !== undefined && object.base !== null
                ? MarketBaseEventV1.fromPartial(object.base)
                : undefined;
        return message;
    },
};
function createBaseSourceOfFunds() {
    return {
        subaccountId: undefined,
        address: undefined,
    };
}
export const SourceOfFunds = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== undefined) {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceOfFunds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSourceOfFunds();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? IndexerSubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.address = object.address ?? undefined;
        return message;
    },
};
function createBaseTransferEventV1() {
    return {
        senderSubaccountId: undefined,
        recipientSubaccountId: undefined,
        assetId: 0,
        amount: Long.UZERO,
        sender: undefined,
        recipient: undefined,
    };
}
export const TransferEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderSubaccountId !== undefined) {
            IndexerSubaccountId.encode(message.senderSubaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipientSubaccountId !== undefined) {
            IndexerSubaccountId.encode(message.recipientSubaccountId, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (!message.amount.isZero()) {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.sender !== undefined) {
            SourceOfFunds.encode(message.sender, writer.uint32(42).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            SourceOfFunds.encode(message.recipient, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderSubaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.recipientSubaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
                    message.amount = reader.uint64();
                    break;
                case 5:
                    message.sender = SourceOfFunds.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.recipient = SourceOfFunds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTransferEventV1();
        message.senderSubaccountId =
            object.senderSubaccountId !== undefined &&
                object.senderSubaccountId !== null
                ? IndexerSubaccountId.fromPartial(object.senderSubaccountId)
                : undefined;
        message.recipientSubaccountId =
            object.recipientSubaccountId !== undefined &&
                object.recipientSubaccountId !== null
                ? IndexerSubaccountId.fromPartial(object.recipientSubaccountId)
                : undefined;
        message.assetId = object.assetId ?? 0;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Long.fromValue(object.amount)
                : Long.UZERO;
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? SourceOfFunds.fromPartial(object.sender)
                : undefined;
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? SourceOfFunds.fromPartial(object.recipient)
                : undefined;
        return message;
    },
};
function createBaseOrderFillEventV1() {
    return {
        makerOrder: undefined,
        order: undefined,
        liquidationOrder: undefined,
        fillAmount: Long.UZERO,
        makerFee: Long.ZERO,
        takerFee: Long.ZERO,
        totalFilledMaker: Long.UZERO,
        totalFilledTaker: Long.UZERO,
        affiliateRevShare: Long.UZERO,
    };
}
export const OrderFillEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.makerOrder !== undefined) {
            IndexerOrder.encode(message.makerOrder, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        if (message.liquidationOrder !== undefined) {
            LiquidationOrderV1.encode(message.liquidationOrder, writer.uint32(34).fork()).ldelim();
        }
        if (!message.fillAmount.isZero()) {
            writer.uint32(24).uint64(message.fillAmount);
        }
        if (!message.makerFee.isZero()) {
            writer.uint32(40).sint64(message.makerFee);
        }
        if (!message.takerFee.isZero()) {
            writer.uint32(48).sint64(message.takerFee);
        }
        if (!message.totalFilledMaker.isZero()) {
            writer.uint32(56).uint64(message.totalFilledMaker);
        }
        if (!message.totalFilledTaker.isZero()) {
            writer.uint32(64).uint64(message.totalFilledTaker);
        }
        if (!message.affiliateRevShare.isZero()) {
            writer.uint32(72).uint64(message.affiliateRevShare);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderFillEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.makerOrder = IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.liquidationOrder = LiquidationOrderV1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fillAmount = reader.uint64();
                    break;
                case 5:
                    message.makerFee = reader.sint64();
                    break;
                case 6:
                    message.takerFee = reader.sint64();
                    break;
                case 7:
                    message.totalFilledMaker = reader.uint64();
                    break;
                case 8:
                    message.totalFilledTaker = reader.uint64();
                    break;
                case 9:
                    message.affiliateRevShare = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderFillEventV1();
        message.makerOrder =
            object.makerOrder !== undefined && object.makerOrder !== null
                ? IndexerOrder.fromPartial(object.makerOrder)
                : undefined;
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        message.liquidationOrder =
            object.liquidationOrder !== undefined && object.liquidationOrder !== null
                ? LiquidationOrderV1.fromPartial(object.liquidationOrder)
                : undefined;
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        message.makerFee =
            object.makerFee !== undefined && object.makerFee !== null
                ? Long.fromValue(object.makerFee)
                : Long.ZERO;
        message.takerFee =
            object.takerFee !== undefined && object.takerFee !== null
                ? Long.fromValue(object.takerFee)
                : Long.ZERO;
        message.totalFilledMaker =
            object.totalFilledMaker !== undefined && object.totalFilledMaker !== null
                ? Long.fromValue(object.totalFilledMaker)
                : Long.UZERO;
        message.totalFilledTaker =
            object.totalFilledTaker !== undefined && object.totalFilledTaker !== null
                ? Long.fromValue(object.totalFilledTaker)
                : Long.UZERO;
        message.affiliateRevShare =
            object.affiliateRevShare !== undefined &&
                object.affiliateRevShare !== null
                ? Long.fromValue(object.affiliateRevShare)
                : Long.UZERO;
        return message;
    },
};
function createBaseDeleveragingEventV1() {
    return {
        liquidated: undefined,
        offsetting: undefined,
        perpetualId: 0,
        fillAmount: Long.UZERO,
        totalQuoteQuantums: Long.UZERO,
        isBuy: false,
        isFinalSettlement: false,
    };
}
export const DeleveragingEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidated !== undefined) {
            IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.offsetting !== undefined) {
            IndexerSubaccountId.encode(message.offsetting, writer.uint32(18).fork()).ldelim();
        }
        if (message.perpetualId !== 0) {
            writer.uint32(24).uint32(message.perpetualId);
        }
        if (!message.fillAmount.isZero()) {
            writer.uint32(32).uint64(message.fillAmount);
        }
        if (!message.totalQuoteQuantums.isZero()) {
            writer.uint32(40).uint64(message.totalQuoteQuantums);
        }
        if (message.isBuy === true) {
            writer.uint32(48).bool(message.isBuy);
        }
        if (message.isFinalSettlement === true) {
            writer.uint32(56).bool(message.isFinalSettlement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleveragingEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.offsetting = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.perpetualId = reader.uint32();
                    break;
                case 4:
                    message.fillAmount = reader.uint64();
                    break;
                case 5:
                    message.totalQuoteQuantums = reader.uint64();
                    break;
                case 6:
                    message.isBuy = reader.bool();
                    break;
                case 7:
                    message.isFinalSettlement = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeleveragingEventV1();
        message.liquidated =
            object.liquidated !== undefined && object.liquidated !== null
                ? IndexerSubaccountId.fromPartial(object.liquidated)
                : undefined;
        message.offsetting =
            object.offsetting !== undefined && object.offsetting !== null
                ? IndexerSubaccountId.fromPartial(object.offsetting)
                : undefined;
        message.perpetualId = object.perpetualId ?? 0;
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        message.totalQuoteQuantums =
            object.totalQuoteQuantums !== undefined &&
                object.totalQuoteQuantums !== null
                ? Long.fromValue(object.totalQuoteQuantums)
                : Long.UZERO;
        message.isBuy = object.isBuy ?? false;
        message.isFinalSettlement = object.isFinalSettlement ?? false;
        return message;
    },
};
function createBaseLiquidationOrderV1() {
    return {
        liquidated: undefined,
        clobPairId: 0,
        perpetualId: 0,
        totalSize: Long.UZERO,
        isBuy: false,
        subticks: Long.UZERO,
    };
}
export const LiquidationOrderV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidated !== undefined) {
            IndexerSubaccountId.encode(message.liquidated, writer.uint32(10).fork()).ldelim();
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.perpetualId !== 0) {
            writer.uint32(24).uint32(message.perpetualId);
        }
        if (!message.totalSize.isZero()) {
            writer.uint32(32).uint64(message.totalSize);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (!message.subticks.isZero()) {
            writer.uint32(48).uint64(message.subticks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidationOrderV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidated = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.perpetualId = reader.uint32();
                    break;
                case 4:
                    message.totalSize = reader.uint64();
                    break;
                case 5:
                    message.isBuy = reader.bool();
                    break;
                case 6:
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
        const message = createBaseLiquidationOrderV1();
        message.liquidated =
            object.liquidated !== undefined && object.liquidated !== null
                ? IndexerSubaccountId.fromPartial(object.liquidated)
                : undefined;
        message.clobPairId = object.clobPairId ?? 0;
        message.perpetualId = object.perpetualId ?? 0;
        message.totalSize =
            object.totalSize !== undefined && object.totalSize !== null
                ? Long.fromValue(object.totalSize)
                : Long.UZERO;
        message.isBuy = object.isBuy ?? false;
        message.subticks =
            object.subticks !== undefined && object.subticks !== null
                ? Long.fromValue(object.subticks)
                : Long.UZERO;
        return message;
    },
};
function createBaseSubaccountUpdateEventV1() {
    return {
        subaccountId: undefined,
        updatedPerpetualPositions: [],
        updatedAssetPositions: [],
    };
}
export const SubaccountUpdateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            IndexerSubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.updatedPerpetualPositions) {
            IndexerPerpetualPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.updatedAssetPositions) {
            IndexerAssetPosition.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountUpdateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = IndexerSubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.updatedPerpetualPositions.push(IndexerPerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAssetPositions.push(IndexerAssetPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountUpdateEventV1();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? IndexerSubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.updatedPerpetualPositions =
            object.updatedPerpetualPositions?.map((e) => IndexerPerpetualPosition.fromPartial(e)) || [];
        message.updatedAssetPositions =
            object.updatedAssetPositions?.map((e) => IndexerAssetPosition.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStatefulOrderEventV1() {
    return {
        orderPlace: undefined,
        orderRemoval: undefined,
        conditionalOrderPlacement: undefined,
        conditionalOrderTriggered: undefined,
        longTermOrderPlacement: undefined,
        orderReplacement: undefined,
    };
}
export const StatefulOrderEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderPlace !== undefined) {
            StatefulOrderEventV1_StatefulOrderPlacementV1.encode(message.orderPlace, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderRemoval !== undefined) {
            StatefulOrderEventV1_StatefulOrderRemovalV1.encode(message.orderRemoval, writer.uint32(34).fork()).ldelim();
        }
        if (message.conditionalOrderPlacement !== undefined) {
            StatefulOrderEventV1_ConditionalOrderPlacementV1.encode(message.conditionalOrderPlacement, writer.uint32(42).fork()).ldelim();
        }
        if (message.conditionalOrderTriggered !== undefined) {
            StatefulOrderEventV1_ConditionalOrderTriggeredV1.encode(message.conditionalOrderTriggered, writer.uint32(50).fork()).ldelim();
        }
        if (message.longTermOrderPlacement !== undefined) {
            StatefulOrderEventV1_LongTermOrderPlacementV1.encode(message.longTermOrderPlacement, writer.uint32(58).fork()).ldelim();
        }
        if (message.orderReplacement !== undefined) {
            StatefulOrderEventV1_LongTermOrderReplacementV1.encode(message.orderReplacement, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlace =
                        StatefulOrderEventV1_StatefulOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderRemoval =
                        StatefulOrderEventV1_StatefulOrderRemovalV1.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.conditionalOrderPlacement =
                        StatefulOrderEventV1_ConditionalOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.conditionalOrderTriggered =
                        StatefulOrderEventV1_ConditionalOrderTriggeredV1.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.longTermOrderPlacement =
                        StatefulOrderEventV1_LongTermOrderPlacementV1.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.orderReplacement =
                        StatefulOrderEventV1_LongTermOrderReplacementV1.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1();
        message.orderPlace =
            object.orderPlace !== undefined && object.orderPlace !== null
                ? StatefulOrderEventV1_StatefulOrderPlacementV1.fromPartial(object.orderPlace)
                : undefined;
        message.orderRemoval =
            object.orderRemoval !== undefined && object.orderRemoval !== null
                ? StatefulOrderEventV1_StatefulOrderRemovalV1.fromPartial(object.orderRemoval)
                : undefined;
        message.conditionalOrderPlacement =
            object.conditionalOrderPlacement !== undefined &&
                object.conditionalOrderPlacement !== null
                ? StatefulOrderEventV1_ConditionalOrderPlacementV1.fromPartial(object.conditionalOrderPlacement)
                : undefined;
        message.conditionalOrderTriggered =
            object.conditionalOrderTriggered !== undefined &&
                object.conditionalOrderTriggered !== null
                ? StatefulOrderEventV1_ConditionalOrderTriggeredV1.fromPartial(object.conditionalOrderTriggered)
                : undefined;
        message.longTermOrderPlacement =
            object.longTermOrderPlacement !== undefined &&
                object.longTermOrderPlacement !== null
                ? StatefulOrderEventV1_LongTermOrderPlacementV1.fromPartial(object.longTermOrderPlacement)
                : undefined;
        message.orderReplacement =
            object.orderReplacement !== undefined && object.orderReplacement !== null
                ? StatefulOrderEventV1_LongTermOrderReplacementV1.fromPartial(object.orderReplacement)
                : undefined;
        return message;
    },
};
function createBaseStatefulOrderEventV1_StatefulOrderPlacementV1() {
    return {
        order: undefined,
    };
}
export const StatefulOrderEventV1_StatefulOrderPlacementV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_StatefulOrderPlacementV1();
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseStatefulOrderEventV1_StatefulOrderRemovalV1() {
    return {
        removedOrderId: undefined,
        reason: 0,
    };
}
export const StatefulOrderEventV1_StatefulOrderRemovalV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.removedOrderId !== undefined) {
            IndexerOrderId.encode(message.removedOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.removedOrderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_StatefulOrderRemovalV1();
        message.removedOrderId =
            object.removedOrderId !== undefined && object.removedOrderId !== null
                ? IndexerOrderId.fromPartial(object.removedOrderId)
                : undefined;
        message.reason = object.reason ?? 0;
        return message;
    },
};
function createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1() {
    return {
        order: undefined,
    };
}
export const StatefulOrderEventV1_ConditionalOrderPlacementV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_ConditionalOrderPlacementV1();
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1() {
    return {
        triggeredOrderId: undefined,
    };
}
export const StatefulOrderEventV1_ConditionalOrderTriggeredV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggeredOrderId !== undefined) {
            IndexerOrderId.encode(message.triggeredOrderId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggeredOrderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_ConditionalOrderTriggeredV1();
        message.triggeredOrderId =
            object.triggeredOrderId !== undefined && object.triggeredOrderId !== null
                ? IndexerOrderId.fromPartial(object.triggeredOrderId)
                : undefined;
        return message;
    },
};
function createBaseStatefulOrderEventV1_LongTermOrderPlacementV1() {
    return {
        order: undefined,
    };
}
export const StatefulOrderEventV1_LongTermOrderPlacementV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_LongTermOrderPlacementV1();
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseStatefulOrderEventV1_LongTermOrderReplacementV1() {
    return {
        oldOrderId: undefined,
        order: undefined,
    };
}
export const StatefulOrderEventV1_LongTermOrderReplacementV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.oldOrderId !== undefined) {
            IndexerOrderId.encode(message.oldOrderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.order !== undefined) {
            IndexerOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oldOrderId = IndexerOrderId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.order = IndexerOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatefulOrderEventV1_LongTermOrderReplacementV1();
        message.oldOrderId =
            object.oldOrderId !== undefined && object.oldOrderId !== null
                ? IndexerOrderId.fromPartial(object.oldOrderId)
                : undefined;
        message.order =
            object.order !== undefined && object.order !== null
                ? IndexerOrder.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseAssetCreateEventV1() {
    return {
        id: 0,
        symbol: '',
        hasMarket: false,
        marketId: 0,
        atomicResolution: 0,
    };
}
export const AssetCreateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.symbol !== '') {
            writer.uint32(18).string(message.symbol);
        }
        if (message.hasMarket === true) {
            writer.uint32(24).bool(message.hasMarket);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(40).sint32(message.atomicResolution);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetCreateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.hasMarket = reader.bool();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.atomicResolution = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetCreateEventV1();
        message.id = object.id ?? 0;
        message.symbol = object.symbol ?? '';
        message.hasMarket = object.hasMarket ?? false;
        message.marketId = object.marketId ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        return message;
    },
};
function createBasePerpetualMarketCreateEventV1() {
    return {
        id: 0,
        clobPairId: 0,
        ticker: '',
        marketId: 0,
        status: 0,
        quantumConversionExponent: 0,
        atomicResolution: 0,
        subticksPerTick: 0,
        stepBaseQuantums: Long.UZERO,
        liquidityTier: 0,
    };
}
export const PerpetualMarketCreateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.ticker !== '') {
            writer.uint32(26).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(48).sint32(message.quantumConversionExponent);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(64).uint32(message.subticksPerTick);
        }
        if (!message.stepBaseQuantums.isZero()) {
            writer.uint32(72).uint64(message.stepBaseQuantums);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(80).uint32(message.liquidityTier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketCreateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                case 8:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 9:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                case 10:
                    message.liquidityTier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketCreateEventV1();
        message.id = object.id ?? 0;
        message.clobPairId = object.clobPairId ?? 0;
        message.ticker = object.ticker ?? '';
        message.marketId = object.marketId ?? 0;
        message.status = object.status ?? 0;
        message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        message.subticksPerTick = object.subticksPerTick ?? 0;
        message.stepBaseQuantums =
            object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null
                ? Long.fromValue(object.stepBaseQuantums)
                : Long.UZERO;
        message.liquidityTier = object.liquidityTier ?? 0;
        return message;
    },
};
function createBasePerpetualMarketCreateEventV2() {
    return {
        id: 0,
        clobPairId: 0,
        ticker: '',
        marketId: 0,
        status: 0,
        quantumConversionExponent: 0,
        atomicResolution: 0,
        subticksPerTick: 0,
        stepBaseQuantums: Long.UZERO,
        liquidityTier: 0,
        marketType: 0,
    };
}
export const PerpetualMarketCreateEventV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.ticker !== '') {
            writer.uint32(26).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(32).uint32(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(48).sint32(message.quantumConversionExponent);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(56).sint32(message.atomicResolution);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(64).uint32(message.subticksPerTick);
        }
        if (!message.stepBaseQuantums.isZero()) {
            writer.uint32(72).uint64(message.stepBaseQuantums);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(80).uint32(message.liquidityTier);
        }
        if (message.marketType !== 0) {
            writer.uint32(88).int32(message.marketType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketCreateEventV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.marketId = reader.uint32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 7:
                    message.atomicResolution = reader.sint32();
                    break;
                case 8:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 9:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                case 10:
                    message.liquidityTier = reader.uint32();
                    break;
                case 11:
                    message.marketType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketCreateEventV2();
        message.id = object.id ?? 0;
        message.clobPairId = object.clobPairId ?? 0;
        message.ticker = object.ticker ?? '';
        message.marketId = object.marketId ?? 0;
        message.status = object.status ?? 0;
        message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        message.subticksPerTick = object.subticksPerTick ?? 0;
        message.stepBaseQuantums =
            object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null
                ? Long.fromValue(object.stepBaseQuantums)
                : Long.UZERO;
        message.liquidityTier = object.liquidityTier ?? 0;
        message.marketType = object.marketType ?? 0;
        return message;
    },
};
function createBaseLiquidityTierUpsertEventV1() {
    return {
        id: 0,
        name: '',
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: Long.UZERO,
    };
}
export const LiquidityTierUpsertEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.initialMarginPpm !== 0) {
            writer.uint32(24).uint32(message.initialMarginPpm);
        }
        if (message.maintenanceFractionPpm !== 0) {
            writer.uint32(32).uint32(message.maintenanceFractionPpm);
        }
        if (!message.basePositionNotional.isZero()) {
            writer.uint32(40).uint64(message.basePositionNotional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityTierUpsertEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.initialMarginPpm = reader.uint32();
                    break;
                case 4:
                    message.maintenanceFractionPpm = reader.uint32();
                    break;
                case 5:
                    message.basePositionNotional = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityTierUpsertEventV1();
        message.id = object.id ?? 0;
        message.name = object.name ?? '';
        message.initialMarginPpm = object.initialMarginPpm ?? 0;
        message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
        message.basePositionNotional =
            object.basePositionNotional !== undefined &&
                object.basePositionNotional !== null
                ? Long.fromValue(object.basePositionNotional)
                : Long.UZERO;
        return message;
    },
};
function createBaseUpdateClobPairEventV1() {
    return {
        clobPairId: 0,
        status: 0,
        quantumConversionExponent: 0,
        subticksPerTick: 0,
        stepBaseQuantums: Long.UZERO,
    };
}
export const UpdateClobPairEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clobPairId !== 0) {
            writer.uint32(8).uint32(message.clobPairId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.quantumConversionExponent !== 0) {
            writer.uint32(24).sint32(message.quantumConversionExponent);
        }
        if (message.subticksPerTick !== 0) {
            writer.uint32(32).uint32(message.subticksPerTick);
        }
        if (!message.stepBaseQuantums.isZero()) {
            writer.uint32(40).uint64(message.stepBaseQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateClobPairEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairId = reader.uint32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.quantumConversionExponent = reader.sint32();
                    break;
                case 4:
                    message.subticksPerTick = reader.uint32();
                    break;
                case 5:
                    message.stepBaseQuantums = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateClobPairEventV1();
        message.clobPairId = object.clobPairId ?? 0;
        message.status = object.status ?? 0;
        message.quantumConversionExponent = object.quantumConversionExponent ?? 0;
        message.subticksPerTick = object.subticksPerTick ?? 0;
        message.stepBaseQuantums =
            object.stepBaseQuantums !== undefined && object.stepBaseQuantums !== null
                ? Long.fromValue(object.stepBaseQuantums)
                : Long.UZERO;
        return message;
    },
};
function createBaseUpdatePerpetualEventV1() {
    return {
        id: 0,
        ticker: '',
        marketId: 0,
        atomicResolution: 0,
        liquidityTier: 0,
    };
}
export const UpdatePerpetualEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(24).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(32).sint32(message.atomicResolution);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(40).uint32(message.liquidityTier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePerpetualEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.marketId = reader.uint32();
                    break;
                case 4:
                    message.atomicResolution = reader.sint32();
                    break;
                case 5:
                    message.liquidityTier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdatePerpetualEventV1();
        message.id = object.id ?? 0;
        message.ticker = object.ticker ?? '';
        message.marketId = object.marketId ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        message.liquidityTier = object.liquidityTier ?? 0;
        return message;
    },
};
function createBaseUpdatePerpetualEventV2() {
    return {
        id: 0,
        ticker: '',
        marketId: 0,
        atomicResolution: 0,
        liquidityTier: 0,
        marketType: 0,
    };
}
export const UpdatePerpetualEventV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.marketId !== 0) {
            writer.uint32(24).uint32(message.marketId);
        }
        if (message.atomicResolution !== 0) {
            writer.uint32(32).sint32(message.atomicResolution);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(40).uint32(message.liquidityTier);
        }
        if (message.marketType !== 0) {
            writer.uint32(48).int32(message.marketType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePerpetualEventV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.marketId = reader.uint32();
                    break;
                case 4:
                    message.atomicResolution = reader.sint32();
                    break;
                case 5:
                    message.liquidityTier = reader.uint32();
                    break;
                case 6:
                    message.marketType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdatePerpetualEventV2();
        message.id = object.id ?? 0;
        message.ticker = object.ticker ?? '';
        message.marketId = object.marketId ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        message.liquidityTier = object.liquidityTier ?? 0;
        message.marketType = object.marketType ?? 0;
        return message;
    },
};
function createBaseTradingRewardsEventV1() {
    return {
        tradingRewards: [],
    };
}
export const TradingRewardsEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tradingRewards) {
            AddressTradingReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardsEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingRewards.push(AddressTradingReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardsEventV1();
        message.tradingRewards =
            object.tradingRewards?.map((e) => AddressTradingReward.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseAddressTradingReward() {
    return {
        owner: '',
        denomAmount: new Uint8Array(),
    };
}
export const AddressTradingReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denomAmount.length !== 0) {
            writer.uint32(18).bytes(message.denomAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressTradingReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denomAmount = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddressTradingReward();
        message.owner = object.owner ?? '';
        message.denomAmount = object.denomAmount ?? new Uint8Array();
        return message;
    },
};
function createBaseOpenInterestUpdateEventV1() {
    return {
        openInterestUpdates: [],
    };
}
export const OpenInterestUpdateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.openInterestUpdates) {
            OpenInterestUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenInterestUpdateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.openInterestUpdates.push(OpenInterestUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOpenInterestUpdateEventV1();
        message.openInterestUpdates =
            object.openInterestUpdates?.map((e) => OpenInterestUpdate.fromPartial(e)) || [];
        return message;
    },
};
function createBaseOpenInterestUpdate() {
    return {
        perpetualId: 0,
        openInterest: new Uint8Array(),
    };
}
export const OpenInterestUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (message.openInterest.length !== 0) {
            writer.uint32(18).bytes(message.openInterest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenInterestUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.openInterest = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOpenInterestUpdate();
        message.perpetualId = object.perpetualId ?? 0;
        message.openInterest = object.openInterest ?? new Uint8Array();
        return message;
    },
};
function createBaseLiquidityTierUpsertEventV2() {
    return {
        id: 0,
        name: '',
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: Long.UZERO,
        openInterestLowerCap: Long.UZERO,
        openInterestUpperCap: Long.UZERO,
    };
}
export const LiquidityTierUpsertEventV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.initialMarginPpm !== 0) {
            writer.uint32(24).uint32(message.initialMarginPpm);
        }
        if (message.maintenanceFractionPpm !== 0) {
            writer.uint32(32).uint32(message.maintenanceFractionPpm);
        }
        if (!message.basePositionNotional.isZero()) {
            writer.uint32(40).uint64(message.basePositionNotional);
        }
        if (!message.openInterestLowerCap.isZero()) {
            writer.uint32(48).uint64(message.openInterestLowerCap);
        }
        if (!message.openInterestUpperCap.isZero()) {
            writer.uint32(56).uint64(message.openInterestUpperCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityTierUpsertEventV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.initialMarginPpm = reader.uint32();
                    break;
                case 4:
                    message.maintenanceFractionPpm = reader.uint32();
                    break;
                case 5:
                    message.basePositionNotional = reader.uint64();
                    break;
                case 6:
                    message.openInterestLowerCap = reader.uint64();
                    break;
                case 7:
                    message.openInterestUpperCap = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityTierUpsertEventV2();
        message.id = object.id ?? 0;
        message.name = object.name ?? '';
        message.initialMarginPpm = object.initialMarginPpm ?? 0;
        message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
        message.basePositionNotional =
            object.basePositionNotional !== undefined &&
                object.basePositionNotional !== null
                ? Long.fromValue(object.basePositionNotional)
                : Long.UZERO;
        message.openInterestLowerCap =
            object.openInterestLowerCap !== undefined &&
                object.openInterestLowerCap !== null
                ? Long.fromValue(object.openInterestLowerCap)
                : Long.UZERO;
        message.openInterestUpperCap =
            object.openInterestUpperCap !== undefined &&
                object.openInterestUpperCap !== null
                ? Long.fromValue(object.openInterestUpperCap)
                : Long.UZERO;
        return message;
    },
};
function createBaseRegisterAffiliateEventV1() {
    return {
        referee: '',
        affiliate: '',
    };
}
export const RegisterAffiliateEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.referee !== '') {
            writer.uint32(10).string(message.referee);
        }
        if (message.affiliate !== '') {
            writer.uint32(18).string(message.affiliate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAffiliateEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referee = reader.string();
                    break;
                case 2:
                    message.affiliate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRegisterAffiliateEventV1();
        message.referee = object.referee ?? '';
        message.affiliate = object.affiliate ?? '';
        return message;
    },
};
function createBaseUpsertVaultEventV1() {
    return {
        address: '',
        clobPairId: 0,
        status: 0,
    };
}
export const UpsertVaultEventV1 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.clobPairId !== 0) {
            writer.uint32(16).uint32(message.clobPairId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpsertVaultEventV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.clobPairId = reader.uint32();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpsertVaultEventV1();
        message.address = object.address ?? '';
        message.clobPairId = object.clobPairId ?? 0;
        message.status = object.status ?? 0;
        return message;
    },
};
//# sourceMappingURL=events.js.map