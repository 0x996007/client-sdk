/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.affiliateInfo = this.affiliateInfo.bind(this);
        this.referredBy = this.referredBy.bind(this);
        this.allAffiliateTiers = this.allAffiliateTiers.bind(this);
        this.affiliateWhitelist = this.affiliateWhitelist.bind(this);
    }
    /* Query AffiliateInfo returns the affiliate info for a given address. */
    async affiliateInfo(params) {
        const endpoint = `dydxprotocol/affiliates/affiliate_info/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* Query ReferredBy returns the affiliate that referred a given address. */
    async referredBy(params) {
        const endpoint = `dydxprotocol/affiliates/referred_by/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* Query AllAffiliateTiers returns all affiliate tiers. */
    async allAffiliateTiers(_params = {}) {
        const endpoint = `dydxprotocol/affiliates/all_affiliate_tiers`;
        return await this.req.get(endpoint);
    }
    /* Query AffiliateWhitelist returns the affiliate whitelist. */
    async affiliateWhitelist(_params = {}) {
        const endpoint = `dydxprotocol/affiliates/affiliate_whitelist`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map