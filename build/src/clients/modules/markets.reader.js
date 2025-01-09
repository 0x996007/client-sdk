import { TimePeriod } from '../../types.js';
import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class MarketsReaderClient extends ReaderBaseClient {
    async getPerpetualMarkets(market) {
        const uri = '/v4/perpetualMarkets';
        return this.get(uri, { ticker: market });
    }
    async getPerpetualMarketOrderbook(market) {
        const uri = `/v4/orderbooks/perpetualMarket/${market}`;
        return this.get(uri);
    }
    async getPerpetualMarketTrades(market, startingBeforeOrAtHeight, startingBeforeOrAt, limit, page) {
        const uri = `/v4/trades/perpetualMarket/${market}`;
        return this.get(uri, {
            createdBeforeOrAtHeight: startingBeforeOrAtHeight,
            createdBeforeOrAt: startingBeforeOrAt,
            limit,
            page,
        });
    }
    async getPerpetualMarketCandles(market, resolution, fromISO, toISO, limit) {
        const uri = `/v4/candles/perpetualMarkets/${market}`;
        return this.get(uri, {
            resolution,
            fromISO,
            toISO,
            limit,
        });
    }
    async getPerpetualMarketHistoricalFunding(market, effectiveBeforeOrAt, effectiveBeforeOrAtHeight, limit) {
        const uri = `/v4/historicalFunding/${market}`;
        return this.get(uri, {
            effectiveBeforeOrAt,
            effectiveBeforeOrAtHeight,
            limit,
        });
    }
    async getPerpetualMarketSparklines(period = TimePeriod.ONE_DAY) {
        const uri = '/v4/sparklines';
        return this.get(uri, {
            timePeriod: period,
        });
    }
}
//# sourceMappingURL=markets.reader.js.map