import { LCDClient } from '@osmonauts/lcd';
import { QueryMarketsHardCap, QueryMarketsHardCapResponseSDKType, QueryListingVaultDepositParams, QueryListingVaultDepositParamsResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    marketsHardCap(_params?: QueryMarketsHardCap): Promise<QueryMarketsHardCapResponseSDKType>;
    listingVaultDepositParams(_params?: QueryListingVaultDepositParams): Promise<QueryListingVaultDepositParamsResponseSDKType>;
}
