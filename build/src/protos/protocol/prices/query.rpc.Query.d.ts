import { Rpc } from '../../helpers.js';
import { QueryClient } from '@cosmjs/stargate';
import { QueryMarketPriceRequest, QueryMarketPriceResponse, QueryAllMarketPricesRequest, QueryAllMarketPricesResponse, QueryMarketParamRequest, QueryMarketParamResponse, QueryAllMarketParamsRequest, QueryAllMarketParamsResponse, QueryNextMarketIdRequest, QueryNextMarketIdResponse } from './query.js';
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a MarketPrice by id. */
    marketPrice(request: QueryMarketPriceRequest): Promise<QueryMarketPriceResponse>;
    /** Queries a list of MarketPrice items. */
    allMarketPrices(request?: QueryAllMarketPricesRequest): Promise<QueryAllMarketPricesResponse>;
    /** Queries a MarketParam by id. */
    marketParam(request: QueryMarketParamRequest): Promise<QueryMarketParamResponse>;
    /** Queries a list of MarketParam items. */
    allMarketParams(request?: QueryAllMarketParamsRequest): Promise<QueryAllMarketParamsResponse>;
    /** Queries the next market id. */
    nextMarketId(request?: QueryNextMarketIdRequest): Promise<QueryNextMarketIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    marketPrice(request: QueryMarketPriceRequest): Promise<QueryMarketPriceResponse>;
    allMarketPrices(request?: QueryAllMarketPricesRequest): Promise<QueryAllMarketPricesResponse>;
    marketParam(request: QueryMarketParamRequest): Promise<QueryMarketParamResponse>;
    allMarketParams(request?: QueryAllMarketParamsRequest): Promise<QueryAllMarketParamsResponse>;
    nextMarketId(request?: QueryNextMarketIdRequest): Promise<QueryNextMarketIdResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    marketPrice(request: QueryMarketPriceRequest): Promise<QueryMarketPriceResponse>;
    allMarketPrices(request?: QueryAllMarketPricesRequest): Promise<QueryAllMarketPricesResponse>;
    marketParam(request: QueryMarketParamRequest): Promise<QueryMarketParamResponse>;
    allMarketParams(request?: QueryAllMarketParamsRequest): Promise<QueryAllMarketParamsResponse>;
    nextMarketId(request?: QueryNextMarketIdRequest): Promise<QueryNextMarketIdResponse>;
};
