import { Rpc } from '../../helpers.js';
import { QueryClient } from '@cosmjs/stargate';
import { QueryMarketMapperRevenueShareParams, QueryMarketMapperRevenueShareParamsResponse, QueryMarketMapperRevShareDetails, QueryMarketMapperRevShareDetailsResponse, QueryUnconditionalRevShareConfig, QueryUnconditionalRevShareConfigResponse } from './query.js';
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * MarketMapperRevenueShareParams queries the revenue share params for the
     * market mapper
     */
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    /** Queries market mapper revenue share details for a specific market */
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
    /** Queries unconditional revenue share config */
    unconditionalRevShareConfig(request?: QueryUnconditionalRevShareConfig): Promise<QueryUnconditionalRevShareConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
    unconditionalRevShareConfig(request?: QueryUnconditionalRevShareConfig): Promise<QueryUnconditionalRevShareConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    marketMapperRevenueShareParams(request?: QueryMarketMapperRevenueShareParams): Promise<QueryMarketMapperRevenueShareParamsResponse>;
    marketMapperRevShareDetails(request: QueryMarketMapperRevShareDetails): Promise<QueryMarketMapperRevShareDetailsResponse>;
    unconditionalRevShareConfig(request?: QueryUnconditionalRevShareConfig): Promise<QueryUnconditionalRevShareConfigResponse>;
};
