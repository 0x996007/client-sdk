/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.perpetual = this.perpetual.bind(this);
        this.allPerpetuals = this.allPerpetuals.bind(this);
        this.allLiquidityTiers = this.allLiquidityTiers.bind(this);
        this.premiumVotes = this.premiumVotes.bind(this);
        this.premiumSamples = this.premiumSamples.bind(this);
        this.params = this.params.bind(this);
        this.nextPerpetualId = this.nextPerpetualId.bind(this);
    }
    /* Queries a Perpetual by id. */
    async perpetual(params) {
        const endpoint = `dydxprotocol/perpetuals/perpetual/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Perpetual items. */
    async allPerpetuals(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/perpetuals/perpetual`;
        return await this.req.get(endpoint, options);
    }
    /* Queries a list of LiquidityTiers. */
    async allLiquidityTiers(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/perpetuals/liquidity_tiers`;
        return await this.req.get(endpoint, options);
    }
    /* Queries a list of premium votes. */
    async premiumVotes(_params = {}) {
        const endpoint = `dydxprotocol/perpetuals/premium_votes`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of premium samples. */
    async premiumSamples(_params = {}) {
        const endpoint = `dydxprotocol/perpetuals/premium_samples`;
        return await this.req.get(endpoint);
    }
    /* Queries the perpetual params. */
    async params(_params = {}) {
        const endpoint = `dydxprotocol/perpetuals/params`;
        return await this.req.get(endpoint);
    }
    /* Queries the next perpetual id. */
    async nextPerpetualId(_params = {}) {
        const endpoint = `dydxprotocol/perpetuals/next_perpetual_id`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map