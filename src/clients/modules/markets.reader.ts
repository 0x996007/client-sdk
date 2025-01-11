import { TimePeriod } from '../../common/index.js';
import ReaderBaseClient from '../base/reader.client.js';

/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class MarketsReaderClient extends ReaderBaseClient {
  async getPerpetualMarkets<T>(market?: string): Promise<T> {
    const uri = '/v4/perpetualMarkets';
    return this.get<T>(uri, { ticker: market });
  }

  async getPerpetualMarketOrderbook<T>(market: string): Promise<T> {
    const uri = `/v4/orderbooks/perpetualMarket/${market}`;
    return this.get<T>(uri);
  }

  async getPerpetualMarketTrades<T>(
    market: string,
    startingBeforeOrAtHeight?: number | null,
    startingBeforeOrAt?: string | null,
    limit?: number | null,
    page?: number | null,
  ): Promise<T> {
    const uri = `/v4/trades/perpetualMarket/${market}`;
    return this.get<T>(uri, {
      createdBeforeOrAtHeight: startingBeforeOrAtHeight,
      createdBeforeOrAt: startingBeforeOrAt,
      limit,
      page,
    });
  }

  async getPerpetualMarketCandles<T>(
    market: string,
    resolution: string,
    fromISO?: string | null,
    toISO?: string | null,
    limit?: number | null,
  ): Promise<T> {
    const uri = `/v4/candles/perpetualMarkets/${market}`;
    return this.get<T>(uri, {
      resolution,
      fromISO,
      toISO,
      limit,
    });
  }

  async getPerpetualMarketHistoricalFunding<T>(
    market: string,
    effectiveBeforeOrAt?: string | null,
    effectiveBeforeOrAtHeight?: number | null,
    limit?: number | null,
  ): Promise<T> {
    const uri = `/v4/historicalFunding/${market}`;
    return this.get<T>(uri, {
      effectiveBeforeOrAt,
      effectiveBeforeOrAtHeight,
      limit,
    });
  }

  async getPerpetualMarketSparklines<T>(
    period: string = TimePeriod.ONE_DAY,
  ): Promise<T> {
    const uri = '/v4/sparklines';
    return this.get<T>(uri, {
      timePeriod: period,
    });
  }
}
