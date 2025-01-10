import { LCDClient } from '@osmonauts/lcd';
import { QueryMarketPriceRequest, QueryMarketPriceResponseSDKType, QueryAllMarketPricesRequest, QueryAllMarketPricesResponseSDKType, QueryMarketParamRequest, QueryMarketParamResponseSDKType, QueryAllMarketParamsRequest, QueryAllMarketParamsResponseSDKType, QueryNextMarketIdRequest, QueryNextMarketIdResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    marketPrice(params: QueryMarketPriceRequest): Promise<QueryMarketPriceResponseSDKType>;
    allMarketPrices(params?: QueryAllMarketPricesRequest): Promise<QueryAllMarketPricesResponseSDKType>;
    marketParam(params: QueryMarketParamRequest): Promise<QueryMarketParamResponseSDKType>;
    allMarketParams(params?: QueryAllMarketParamsRequest): Promise<QueryAllMarketParamsResponseSDKType>;
    nextMarketId(_params?: QueryNextMarketIdRequest): Promise<QueryNextMarketIdResponseSDKType>;
}
