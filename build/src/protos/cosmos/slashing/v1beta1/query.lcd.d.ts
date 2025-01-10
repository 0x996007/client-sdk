import { LCDClient } from '@osmonauts/lcd';
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType>;
    signingInfos(params?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponseSDKType>;
}
