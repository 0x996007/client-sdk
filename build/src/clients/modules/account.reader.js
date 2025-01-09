import { TickerType, } from '../../types.js';
import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data related to a particular address.
 */
export default class AccountReaderClient extends ReaderBaseClient {
    // ------ Subaccount ------ //
    async getSubaccounts(address, limit) {
        const uri = `/v4/addresses/${address}`;
        return this.get(uri, { limit });
    }
    async getSubaccount(address, subaccountNumber) {
        const uri = `/v4/addresses/${address}/subaccountNumber/${subaccountNumber}`;
        return this.get(uri);
    }
    async getParentSubaccount(address, parentSubaccountNumber) {
        const uri = `/v4/addresses/${address}/subaccountNumber/${parentSubaccountNumber}`;
        return this.get(uri);
    }
    // ------ Positions ------ //
    async getSubaccountPerpetualPositions(address, subaccountNumber, status, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        const uri = '/v4/perpetualPositions';
        return this.get(uri, {
            address,
            subaccountNumber,
            status,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
        });
    }
    async getSubaccountAssetPositions(address, subaccountNumber, status, limit, createdBeforeOrAtHeight, createdBeforeOrAt) {
        const uri = '/v4/assetPositions';
        return this.get(uri, {
            address,
            subaccountNumber,
            status,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
        });
    }
    // ------ Transfers ------ //
    async getTransfersBetween(sourceAddress, sourceSubaccountNumber, recipientAddress, recipientSubaccountNumber, createdBeforeOrAtHeight, createdBeforeOrAt) {
        const uri = '/v4/transfers/between';
        return this.get(uri, {
            sourceAddress,
            sourceSubaccountNumber,
            recipientAddress,
            recipientSubaccountNumber,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
        });
    }
    async getSubaccountTransfers(address, subaccountNumber, limit, createdBeforeOrAtHeight, createdBeforeOrAt, page) {
        const uri = '/v4/transfers';
        return this.get(uri, {
            address,
            subaccountNumber,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            page,
        });
    }
    async getParentSubaccountNumberTransfers(address, parentSubaccountNumber, limit, createdBeforeOrAtHeight, createdBeforeOrAt, page) {
        const uri = '/v4/transfers/parentSubaccountNumber';
        return this.get(uri, {
            address,
            parentSubaccountNumber,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            page,
        });
    }
    // ------ Orders ------ //
    async getSubaccountOrders(address, subaccountNumber, ticker, tickerType = TickerType.PERPETUAL, side, status, type, limit, goodTilBlockBeforeOrAt, goodTilBlockTimeBeforeOrAt, returnLatestOrders) {
        const uri = '/v4/orders';
        return this.get(uri, {
            address,
            subaccountNumber,
            ticker,
            tickerType,
            side,
            status,
            type,
            limit,
            goodTilBlockBeforeOrAt,
            goodTilBlockTimeBeforeOrAt,
            returnLatestOrders,
        });
    }
    async getParentSubaccountNumberOrders(address, parentSubaccountNumber, ticker, side, status, type, limit, goodTilBlockBeforeOrAt, goodTilBlockTimeBeforeOrAt, returnLatestOrders) {
        const uri = '/v4/orders/parentSubaccountNumber';
        return this.get(uri, {
            address,
            parentSubaccountNumber,
            ticker,
            side,
            status,
            type,
            limit,
            goodTilBlockBeforeOrAt,
            goodTilBlockTimeBeforeOrAt,
            returnLatestOrders,
        });
    }
    async getOrder(orderId) {
        const uri = `/v4/orders/${orderId}`;
        return this.get(uri);
    }
    // ------ Fills ------ //
    async getSubaccountFills(address, subaccountNumber, ticker, tickerType = TickerType.PERPETUAL, limit, createdBeforeOrAtHeight, createdBeforeOrAt, page) {
        const uri = '/v4/fills';
        return this.get(uri, {
            address,
            subaccountNumber,
            ticker,
            tickerType,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            page,
        });
    }
    async getParentSubaccountNumberFills(address, parentSubaccountNumber, ticker, tickerType = TickerType.PERPETUAL, limit, createdBeforeOrAtHeight, createdBeforeOrAt, page) {
        const uri = '/v4/fills/parentSubaccountNumber';
        return this.get(uri, {
            address,
            parentSubaccountNumber,
            ticker,
            tickerType,
            limit,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            page,
        });
    }
    // ------ Pnl ------ //
    async getSubaccountHistoricalPNLs(address, subaccountNumber, createdBeforeOrAtHeight, createdBeforeOrAt, createdOnOrAfterHeight, createdOnOrAfter, limit, page) {
        const uri = '/v4/historical-pnl';
        return this.get(uri, {
            address,
            subaccountNumber,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            createdOnOrAfterHeight,
            createdOnOrAfter,
            limit,
            page,
        });
    }
    async getParentSubaccountNumberHistoricalPNLs(address, parentSubaccountNumber, createdBeforeOrAtHeight, createdBeforeOrAt, createdOnOrAfterHeight, createdOnOrAfter, limit, page) {
        const uri = '/v4//historical-pnl/parentSubaccount';
        return this.get(uri, {
            address,
            parentSubaccountNumber,
            createdBeforeOrAtHeight,
            createdBeforeOrAt,
            createdOnOrAfterHeight,
            createdOnOrAfter,
            limit,
            page,
        });
    }
    // ------ Rewards ------ //
    async getHistoricalTradingRewardsAggregations(address, period, limit, startingBeforeOrAt, startingBeforeOrAtHeight) {
        const uri = `/v4/historicalTradingRewardAggregations/${address}`;
        return this.get(uri, {
            period,
            limit,
            startingBeforeOrAt,
            startingBeforeOrAtHeight,
        });
    }
    async getHistoricalBlockTradingRewards(address, limit, startingBeforeOrAt, startingBeforeOrAtHeight) {
        const uri = `/v4/historicalBlockTradingRewards/${address}`;
        return this.get(uri, {
            limit,
            startingBeforeOrAt,
            startingBeforeOrAtHeight,
        });
    }
}
//# sourceMappingURL=account.reader.js.map