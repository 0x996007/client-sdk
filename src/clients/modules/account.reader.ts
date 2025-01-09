import {
  OrderSide,
  OrderStatus,
  OrderType,
  PositionStatus,
  TickerType,
  TradingRewardAggregationPeriod,
} from '../../types.js';
import ReaderBaseClient from '../base/reader.client.js';

/**
 * @description REST endpoints for data related to a particular address.
 */
export default class AccountReaderClient extends ReaderBaseClient {
  // ------ Subaccount ------ //

  async getSubaccounts<T>(address: string, limit?: number): Promise<T> {
    const uri = `/v4/addresses/${address}`;
    return this.get<T>(uri, { limit });
  }

  async getSubaccount<T>(
    address: string,
    subaccountNumber: number,
  ): Promise<T> {
    const uri = `/v4/addresses/${address}/subaccountNumber/${subaccountNumber}`;
    return this.get<T>(uri);
  }

  async getParentSubaccount<T>(
    address: string,
    parentSubaccountNumber: number,
  ): Promise<T> {
    const uri = `/v4/addresses/${address}/subaccountNumber/${parentSubaccountNumber}`;
    return this.get<T>(uri);
  }

  // ------ Positions ------ //

  async getSubaccountPerpetualPositions<T>(
    address: string,
    subaccountNumber: number,
    status?: PositionStatus | null,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
  ): Promise<T> {
    const uri = '/v4/perpetualPositions';
    return this.get<T>(uri, {
      address,
      subaccountNumber,
      status,
      limit,
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
    });
  }

  async getSubaccountAssetPositions<T>(
    address: string,
    subaccountNumber: number,
    status?: PositionStatus | null,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
  ): Promise<T> {
    const uri = '/v4/assetPositions';
    return this.get<T>(uri, {
      address,
      subaccountNumber,
      status,
      limit,
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
    });
  }

  // ------ Transfers ------ //

  async getTransfersBetween<T>(
    sourceAddress: string,
    sourceSubaccountNumber: string,
    recipientAddress: string,
    recipientSubaccountNumber: string,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
  ): Promise<T> {
    const uri = '/v4/transfers/between';
    return this.get<T>(uri, {
      sourceAddress,
      sourceSubaccountNumber,
      recipientAddress,
      recipientSubaccountNumber,
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
    });
  }

  async getSubaccountTransfers<T>(
    address: string,
    subaccountNumber: number,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4/transfers';
    return this.get<T>(uri, {
      address,
      subaccountNumber,
      limit,
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
      page,
    });
  }

  async getParentSubaccountNumberTransfers<T>(
    address: string,
    parentSubaccountNumber: number,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4/transfers/parentSubaccountNumber';
    return this.get<T>(uri, {
      address,
      parentSubaccountNumber,
      limit,
      createdBeforeOrAtHeight,
      createdBeforeOrAt,
      page,
    });
  }

  // ------ Orders ------ //

  async getSubaccountOrders<T>(
    address: string,
    subaccountNumber: number,
    ticker?: string | null,
    tickerType: TickerType = TickerType.PERPETUAL,
    side?: OrderSide | null,
    status?: OrderStatus | null,
    type?: OrderType | null,
    limit?: number | null,
    goodTilBlockBeforeOrAt?: number | null,
    goodTilBlockTimeBeforeOrAt?: string | null,
    returnLatestOrders?: boolean | null,
  ): Promise<T> {
    const uri = '/v4/orders';
    return this.get<T>(uri, {
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

  async getParentSubaccountNumberOrders<T>(
    address: string,
    parentSubaccountNumber: number,
    ticker?: string | null,
    side?: OrderSide | null,
    status?: OrderStatus | null,
    type?: OrderType | null,
    limit?: number | null,
    goodTilBlockBeforeOrAt?: number | null,
    goodTilBlockTimeBeforeOrAt?: string | null,
    returnLatestOrders?: boolean | null,
  ): Promise<T> {
    const uri = '/v4/orders/parentSubaccountNumber';
    return this.get<T>(uri, {
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

  async getOrder<T>(orderId: string): Promise<T> {
    const uri = `/v4/orders/${orderId}`;
    return this.get<T>(uri);
  }

  // ------ Fills ------ //

  async getSubaccountFills<T>(
    address: string,
    subaccountNumber: number,
    ticker?: string | null,
    tickerType: TickerType = TickerType.PERPETUAL,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4/fills';
    return this.get<T>(uri, {
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

  async getParentSubaccountNumberFills<T>(
    address: string,
    parentSubaccountNumber: number,
    ticker?: string | null,
    tickerType: TickerType = TickerType.PERPETUAL,
    limit?: number | null,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4/fills/parentSubaccountNumber';
    return this.get<T>(uri, {
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

  async getSubaccountHistoricalPNLs<T>(
    address: string,
    subaccountNumber: number,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    createdOnOrAfterHeight?: number | null,
    createdOnOrAfter?: string | null,
    limit?: number | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4/historical-pnl';
    return this.get<T>(uri, {
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

  async getParentSubaccountNumberHistoricalPNLs<T>(
    address: string,
    parentSubaccountNumber: number,
    createdBeforeOrAtHeight?: number | null,
    createdBeforeOrAt?: string | null,
    createdOnOrAfterHeight?: number | null,
    createdOnOrAfter?: string | null,
    limit?: number | null,
    page?: number | null,
  ): Promise<T> {
    const uri = '/v4//historical-pnl/parentSubaccount';
    return this.get<T>(uri, {
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

  async getHistoricalTradingRewardsAggregations<T>(
    address: string,
    period: TradingRewardAggregationPeriod,
    limit?: number,
    startingBeforeOrAt?: string,
    startingBeforeOrAtHeight?: string,
  ): Promise<T> {
    const uri = `/v4/historicalTradingRewardAggregations/${address}`;
    return this.get<T>(uri, {
      period,
      limit,
      startingBeforeOrAt,
      startingBeforeOrAtHeight,
    });
  }

  async getHistoricalBlockTradingRewards<T>(
    address: string,
    limit?: number,
    startingBeforeOrAt?: string,
    startingBeforeOrAtHeight?: string,
  ): Promise<T> {
    const uri = `/v4/historicalBlockTradingRewards/${address}`;
    return this.get<T>(uri, {
      limit,
      startingBeforeOrAt,
      startingBeforeOrAtHeight,
    });
  }
}
