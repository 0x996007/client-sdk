import { OrderSide, OrderStatus, OrderType, PositionStatus, TickerType, TradingRewardAggregationPeriod } from '../../types.js';
import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data related to a particular address.
 */
export default class AccountReaderClient extends ReaderBaseClient {
    getSubaccounts<T>(address: string, limit?: number): Promise<T>;
    getSubaccount<T>(address: string, subaccountNumber: number): Promise<T>;
    getParentSubaccount<T>(address: string, parentSubaccountNumber: number): Promise<T>;
    getSubaccountPerpetualPositions<T>(address: string, subaccountNumber: number, status?: PositionStatus | null, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null): Promise<T>;
    getSubaccountAssetPositions<T>(address: string, subaccountNumber: number, status?: PositionStatus | null, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null): Promise<T>;
    getTransfersBetween<T>(sourceAddress: string, sourceSubaccountNumber: string, recipientAddress: string, recipientSubaccountNumber: string, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null): Promise<T>;
    getSubaccountTransfers<T>(address: string, subaccountNumber: number, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, page?: number | null): Promise<T>;
    getParentSubaccountNumberTransfers<T>(address: string, parentSubaccountNumber: number, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, page?: number | null): Promise<T>;
    getSubaccountOrders<T>(address: string, subaccountNumber: number, ticker?: string | null, tickerType?: TickerType, side?: OrderSide | null, status?: OrderStatus | null, type?: OrderType | null, limit?: number | null, goodTilBlockBeforeOrAt?: number | null, goodTilBlockTimeBeforeOrAt?: string | null, returnLatestOrders?: boolean | null): Promise<T>;
    getParentSubaccountNumberOrders<T>(address: string, parentSubaccountNumber: number, ticker?: string | null, side?: OrderSide | null, status?: OrderStatus | null, type?: OrderType | null, limit?: number | null, goodTilBlockBeforeOrAt?: number | null, goodTilBlockTimeBeforeOrAt?: string | null, returnLatestOrders?: boolean | null): Promise<T>;
    getOrder<T>(orderId: string): Promise<T>;
    getSubaccountFills<T>(address: string, subaccountNumber: number, ticker?: string | null, tickerType?: TickerType, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, page?: number | null): Promise<T>;
    getParentSubaccountNumberFills<T>(address: string, parentSubaccountNumber: number, ticker?: string | null, tickerType?: TickerType, limit?: number | null, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, page?: number | null): Promise<T>;
    getSubaccountHistoricalPNLs<T>(address: string, subaccountNumber: number, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, createdOnOrAfterHeight?: number | null, createdOnOrAfter?: string | null, limit?: number | null, page?: number | null): Promise<T>;
    getParentSubaccountNumberHistoricalPNLs<T>(address: string, parentSubaccountNumber: number, createdBeforeOrAtHeight?: number | null, createdBeforeOrAt?: string | null, createdOnOrAfterHeight?: number | null, createdOnOrAfter?: string | null, limit?: number | null, page?: number | null): Promise<T>;
    getHistoricalTradingRewardsAggregations<T>(address: string, period: TradingRewardAggregationPeriod, limit?: number, startingBeforeOrAt?: string, startingBeforeOrAtHeight?: string): Promise<T>;
    getHistoricalBlockTradingRewards<T>(address: string, limit?: number, startingBeforeOrAt?: string, startingBeforeOrAtHeight?: string): Promise<T>;
}
