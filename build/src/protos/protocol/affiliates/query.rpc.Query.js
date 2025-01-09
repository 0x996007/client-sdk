import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { AffiliateInfoRequest, AffiliateInfoResponse, ReferredByRequest, ReferredByResponse, AllAffiliateTiersRequest, AllAffiliateTiersResponse, AffiliateWhitelistRequest, AffiliateWhitelistResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.affiliateInfo = this.affiliateInfo.bind(this);
        this.referredBy = this.referredBy.bind(this);
        this.allAffiliateTiers = this.allAffiliateTiers.bind(this);
        this.affiliateWhitelist = this.affiliateWhitelist.bind(this);
    }
    affiliateInfo(request) {
        const data = AffiliateInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Query', 'AffiliateInfo', data);
        return promise.then((data) => AffiliateInfoResponse.decode(new _m0.Reader(data)));
    }
    referredBy(request) {
        const data = ReferredByRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Query', 'ReferredBy', data);
        return promise.then((data) => ReferredByResponse.decode(new _m0.Reader(data)));
    }
    allAffiliateTiers(request = {}) {
        const data = AllAffiliateTiersRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Query', 'AllAffiliateTiers', data);
        return promise.then((data) => AllAffiliateTiersResponse.decode(new _m0.Reader(data)));
    }
    affiliateWhitelist(request = {}) {
        const data = AffiliateWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Query', 'AffiliateWhitelist', data);
        return promise.then((data) => AffiliateWhitelistResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        affiliateInfo(request) {
            return queryService.affiliateInfo(request);
        },
        referredBy(request) {
            return queryService.referredBy(request);
        },
        allAffiliateTiers(request) {
            return queryService.allAffiliateTiers(request);
        },
        affiliateWhitelist(request) {
            return queryService.affiliateWhitelist(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map