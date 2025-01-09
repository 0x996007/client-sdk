/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.clobPair = this.clobPair.bind(this);
        this.clobPairAll = this.clobPairAll.bind(this);
        this.equityTierLimitConfiguration =
            this.equityTierLimitConfiguration.bind(this);
        this.blockRateLimitConfiguration =
            this.blockRateLimitConfiguration.bind(this);
        this.liquidationsConfiguration = this.liquidationsConfiguration.bind(this);
        this.nextClobPairId = this.nextClobPairId.bind(this);
    }
    /* Queries a ClobPair by id. */
    async clobPair(params) {
        const endpoint = `dydxprotocol/clob/clob_pair/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of ClobPair items. */
    async clobPairAll(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/clob/clob_pair`;
        return await this.req.get(endpoint, options);
    }
    /* Queries EquityTierLimitConfiguration. */
    async equityTierLimitConfiguration(_params = {}) {
        const endpoint = `dydxprotocol/clob/equity_tier`;
        return await this.req.get(endpoint);
    }
    /* Queries BlockRateLimitConfiguration. */
    async blockRateLimitConfiguration(_params = {}) {
        const endpoint = `dydxprotocol/clob/block_rate`;
        return await this.req.get(endpoint);
    }
    /* Queries LiquidationsConfiguration. */
    async liquidationsConfiguration(_params = {}) {
        const endpoint = `dydxprotocol/clob/liquidations_config`;
        return await this.req.get(endpoint);
    }
    /* Queries the next clob pair id. */
    async nextClobPairId(_params = {}) {
        const endpoint = `dydxprotocol/clob/next_clob_pair_id`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map