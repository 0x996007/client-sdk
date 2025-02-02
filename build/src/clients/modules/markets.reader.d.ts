import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class MarketsReaderClient extends ReaderBaseClient {
    getPerpetualMarkets<T>(market?: string): Promise<T>;
    getPerpetualMarketOrderbook<T>(market: string): Promise<T>;
    getPerpetualMarketTrades<T>(market: string, startingBeforeOrAtHeight?: number | null, startingBeforeOrAt?: string | null, limit?: number | null, page?: number | null): Promise<T>;
    getPerpetualMarketCandles<T>(market: string, resolution: string, fromISO?: string | null, toISO?: string | null, limit?: number | null): Promise<T>;
    getPerpetualMarketHistoricalFunding<T>(market: string, effectiveBeforeOrAt?: string | null, effectiveBeforeOrAtHeight?: number | null, limit?: number | null): Promise<T>;
    getPerpetualMarketSparklines<T>(period?: string): Promise<T>;
}
