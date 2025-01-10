import { LCDClient } from '@osmonauts/lcd';
import { ListLimitParamsRequest, ListLimitParamsResponseSDKType, QueryCapacityByDenomRequest, QueryCapacityByDenomResponseSDKType, QueryAllPendingSendPacketsRequest, QueryAllPendingSendPacketsResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    listLimitParams(_params?: ListLimitParamsRequest): Promise<ListLimitParamsResponseSDKType>;
    capacityByDenom(params: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponseSDKType>;
    allPendingSendPackets(_params?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponseSDKType>;
}
