import Long from 'long';
import { PerpetualMarketType } from '../protos/types.js';

export type GovAddNewMarketParams = {
  // common
  id: number;
  ticker: string;

  // x/prices
  priceExponent: number;
  minPriceChange: number;
  minExchanges: number;
  exchangeConfigJson: string;

  // x/perpetuals
  liquidityTier: number;
  atomicResolution: number;
  marketType: PerpetualMarketType;

  // x/clob
  quantumConversionExponent: number;
  stepBaseQuantums: Long;
  subticksPerTick: number;

  // x/delaymsg
  delayBlocks: number;
};
