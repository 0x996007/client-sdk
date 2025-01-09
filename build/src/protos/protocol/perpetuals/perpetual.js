/* eslint-disable @typescript-eslint/no-explicit-any */
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
export var PerpetualMarketType;
(function (PerpetualMarketType) {
    /** PERPETUAL_MARKET_TYPE_UNSPECIFIED - Unspecified market type. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_UNSPECIFIED"] = 0] = "PERPETUAL_MARKET_TYPE_UNSPECIFIED";
    /** PERPETUAL_MARKET_TYPE_CROSS - Market type for cross margin perpetual markets. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_CROSS"] = 1] = "PERPETUAL_MARKET_TYPE_CROSS";
    /** PERPETUAL_MARKET_TYPE_ISOLATED - Market type for isolated margin perpetual markets. */
    PerpetualMarketType[PerpetualMarketType["PERPETUAL_MARKET_TYPE_ISOLATED"] = 2] = "PERPETUAL_MARKET_TYPE_ISOLATED";
    PerpetualMarketType[PerpetualMarketType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PerpetualMarketType || (PerpetualMarketType = {}));
export const PerpetualMarketTypeSDKType = PerpetualMarketType;
export function perpetualMarketTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'PERPETUAL_MARKET_TYPE_UNSPECIFIED':
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_UNSPECIFIED;
        case 1:
        case 'PERPETUAL_MARKET_TYPE_CROSS':
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_CROSS;
        case 2:
        case 'PERPETUAL_MARKET_TYPE_ISOLATED':
            return PerpetualMarketType.PERPETUAL_MARKET_TYPE_ISOLATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PerpetualMarketType.UNRECOGNIZED;
    }
}
export function perpetualMarketTypeToJSON(object) {
    switch (object) {
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_UNSPECIFIED:
            return 'PERPETUAL_MARKET_TYPE_UNSPECIFIED';
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_CROSS:
            return 'PERPETUAL_MARKET_TYPE_CROSS';
        case PerpetualMarketType.PERPETUAL_MARKET_TYPE_ISOLATED:
            return 'PERPETUAL_MARKET_TYPE_ISOLATED';
        case PerpetualMarketType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBasePerpetual() {
    return {
        params: undefined,
        fundingIndex: new Uint8Array(),
        openInterest: new Uint8Array(),
    };
}
export const Perpetual = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            PerpetualParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingIndex.length !== 0) {
            writer.uint32(18).bytes(message.fundingIndex);
        }
        if (message.openInterest.length !== 0) {
            writer.uint32(26).bytes(message.openInterest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetual();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = PerpetualParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fundingIndex = reader.bytes();
                    break;
                case 3:
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
        const message = createBasePerpetual();
        message.params =
            object.params !== undefined && object.params !== null
                ? PerpetualParams.fromPartial(object.params)
                : undefined;
        message.fundingIndex = object.fundingIndex ?? new Uint8Array();
        message.openInterest = object.openInterest ?? new Uint8Array();
        return message;
    },
};
function createBasePerpetualParams() {
    return {
        id: 0,
        ticker: '',
        marketId: 0,
        atomicResolution: 0,
        defaultFundingPpm: 0,
        liquidityTier: 0,
        marketType: 0,
    };
}
export const PerpetualParams = {
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
        if (message.defaultFundingPpm !== 0) {
            writer.uint32(40).sint32(message.defaultFundingPpm);
        }
        if (message.liquidityTier !== 0) {
            writer.uint32(48).uint32(message.liquidityTier);
        }
        if (message.marketType !== 0) {
            writer.uint32(56).int32(message.marketType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualParams();
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
                    message.defaultFundingPpm = reader.sint32();
                    break;
                case 6:
                    message.liquidityTier = reader.uint32();
                    break;
                case 7:
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
        const message = createBasePerpetualParams();
        message.id = object.id ?? 0;
        message.ticker = object.ticker ?? '';
        message.marketId = object.marketId ?? 0;
        message.atomicResolution = object.atomicResolution ?? 0;
        message.defaultFundingPpm = object.defaultFundingPpm ?? 0;
        message.liquidityTier = object.liquidityTier ?? 0;
        message.marketType = object.marketType ?? 0;
        return message;
    },
};
function createBaseMarketPremiums() {
    return {
        perpetualId: 0,
        premiums: [],
    };
}
export const MarketPremiums = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        writer.uint32(18).fork();
        for (const v of message.premiums) {
            writer.sint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketPremiums();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.premiums.push(reader.sint32());
                        }
                    }
                    else {
                        message.premiums.push(reader.sint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketPremiums();
        message.perpetualId = object.perpetualId ?? 0;
        message.premiums = object.premiums?.map((e) => e) || [];
        return message;
    },
};
function createBasePremiumStore() {
    return {
        allMarketPremiums: [],
        numPremiums: 0,
    };
}
export const PremiumStore = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allMarketPremiums) {
            MarketPremiums.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numPremiums !== 0) {
            writer.uint32(16).uint32(message.numPremiums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePremiumStore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allMarketPremiums.push(MarketPremiums.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numPremiums = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePremiumStore();
        message.allMarketPremiums =
            object.allMarketPremiums?.map((e) => MarketPremiums.fromPartial(e)) || [];
        message.numPremiums = object.numPremiums ?? 0;
        return message;
    },
};
function createBaseLiquidityTier() {
    return {
        id: 0,
        name: '',
        initialMarginPpm: 0,
        maintenanceFractionPpm: 0,
        basePositionNotional: Long.UZERO,
        impactNotional: Long.UZERO,
        openInterestLowerCap: Long.UZERO,
        openInterestUpperCap: Long.UZERO,
    };
}
export const LiquidityTier = {
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
        if (!message.impactNotional.isZero()) {
            writer.uint32(48).uint64(message.impactNotional);
        }
        if (!message.openInterestLowerCap.isZero()) {
            writer.uint32(56).uint64(message.openInterestLowerCap);
        }
        if (!message.openInterestUpperCap.isZero()) {
            writer.uint32(64).uint64(message.openInterestUpperCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityTier();
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
                    message.impactNotional = reader.uint64();
                    break;
                case 7:
                    message.openInterestLowerCap = reader.uint64();
                    break;
                case 8:
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
        const message = createBaseLiquidityTier();
        message.id = object.id ?? 0;
        message.name = object.name ?? '';
        message.initialMarginPpm = object.initialMarginPpm ?? 0;
        message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
        message.basePositionNotional =
            object.basePositionNotional !== undefined &&
                object.basePositionNotional !== null
                ? Long.fromValue(object.basePositionNotional)
                : Long.UZERO;
        message.impactNotional =
            object.impactNotional !== undefined && object.impactNotional !== null
                ? Long.fromValue(object.impactNotional)
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
//# sourceMappingURL=perpetual.js.map