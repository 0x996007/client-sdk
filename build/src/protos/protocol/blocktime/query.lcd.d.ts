import { LCDClient } from '@osmonauts/lcd';
import { QueryDowntimeParamsRequest, QueryDowntimeParamsResponseSDKType, QueryAllDowntimeInfoRequest, QueryAllDowntimeInfoResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    downtimeParams(_params?: QueryDowntimeParamsRequest): Promise<QueryDowntimeParamsResponseSDKType>;
    allDowntimeInfo(_params?: QueryAllDowntimeInfoRequest): Promise<QueryAllDowntimeInfoResponseSDKType>;
}
