import Long from 'long';
import { PerpetualMarketType } from '../protos/types.js';
export type GovAddNewMarketParams = {
    id: number;
    ticker: string;
    priceExponent: number;
    minPriceChange: number;
    minExchanges: number;
    exchangeConfigJson: string;
    liquidityTier: number;
    atomicResolution: number;
    marketType: PerpetualMarketType;
    quantumConversionExponent: number;
    stepBaseQuantums: Long;
    subticksPerTick: number;
    delayBlocks: number;
};
