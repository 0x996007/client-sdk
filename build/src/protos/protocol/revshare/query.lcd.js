/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.marketMapperRevenueShareParams =
            this.marketMapperRevenueShareParams.bind(this);
        this.marketMapperRevShareDetails =
            this.marketMapperRevShareDetails.bind(this);
        this.unconditionalRevShareConfig =
            this.unconditionalRevShareConfig.bind(this);
    }
    /* MarketMapperRevenueShareParams queries the revenue share params for the
     market mapper */
    async marketMapperRevenueShareParams(_params = {}) {
        const endpoint = `dydxprotocol/revshare/market_mapper_rev_share_params`;
        return await this.req.get(endpoint);
    }
    /* Queries market mapper revenue share details for a specific market */
    async marketMapperRevShareDetails(params) {
        const endpoint = `dydxprotocol/revshare/market_mapper_rev_share_details/${params.marketId}`;
        return await this.req.get(endpoint);
    }
    /* Queries unconditional revenue share config */
    async unconditionalRevShareConfig(_params = {}) {
        const endpoint = `dydxprotocol/revshare/unconditional_rev_share`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map