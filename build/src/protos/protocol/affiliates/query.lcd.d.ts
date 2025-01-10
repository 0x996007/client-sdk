import { LCDClient } from '@osmonauts/lcd';
import { AffiliateInfoRequest, AffiliateInfoResponseSDKType, ReferredByRequest, ReferredByResponseSDKType, AllAffiliateTiersRequest, AllAffiliateTiersResponseSDKType, AffiliateWhitelistRequest, AffiliateWhitelistResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    affiliateInfo(params: AffiliateInfoRequest): Promise<AffiliateInfoResponseSDKType>;
    referredBy(params: ReferredByRequest): Promise<ReferredByResponseSDKType>;
    allAffiliateTiers(_params?: AllAffiliateTiersRequest): Promise<AllAffiliateTiersResponseSDKType>;
    affiliateWhitelist(_params?: AffiliateWhitelistRequest): Promise<AffiliateWhitelistResponseSDKType>;
}
