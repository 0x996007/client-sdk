/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.marketPrice = this.marketPrice.bind(this);
        this.allMarketPrices = this.allMarketPrices.bind(this);
        this.marketParam = this.marketParam.bind(this);
        this.allMarketParams = this.allMarketParams.bind(this);
        this.nextMarketId = this.nextMarketId.bind(this);
    }
    /* Queries a MarketPrice by id. */
    async marketPrice(params) {
        const endpoint = `dydxprotocol/prices/market/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of MarketPrice items. */
    async allMarketPrices(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/prices/market`;
        return await this.req.get(endpoint, options);
    }
    /* Queries a MarketParam by id. */
    async marketParam(params) {
        const endpoint = `dydxprotocol/prices/params/market/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of MarketParam items. */
    async allMarketParams(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/prices/params/market`;
        return await this.req.get(endpoint, options);
    }
    /* Queries the next market id. */
    async nextMarketId(_params = {}) {
        const endpoint = `dydxprotocol/prices/next_market_id`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map