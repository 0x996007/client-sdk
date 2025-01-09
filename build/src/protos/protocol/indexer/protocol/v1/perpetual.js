/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Market type of perpetual.
 * Defined in perpetual.
 */
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
//# sourceMappingURL=perpetual.js.map