/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.listLimitParams = this.listLimitParams.bind(this);
        this.capacityByDenom = this.capacityByDenom.bind(this);
        this.allPendingSendPackets = this.allPendingSendPackets.bind(this);
    }
    /* List all limit params. */
    async listLimitParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/ratelimit/list_limit_params`;
        return await this.req.get(endpoint);
    }
    /* Query capacity by denom. */
    async capacityByDenom(params) {
        const options = {
            params: {},
        };
        if (typeof params?.denom !== 'undefined') {
            options.params.denom = params.denom;
        }
        const endpoint = `dydxprotocol/v4/ratelimit/capacity_by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Get all pending send packets */
    async allPendingSendPackets(_params = {}) {
        const endpoint = `dydxprotocol/v4/ratelimit/get_all_pending_send_packet`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map