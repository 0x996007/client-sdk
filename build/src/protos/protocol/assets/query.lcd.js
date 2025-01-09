/* eslint-disable @typescript-eslint/no-explicit-any */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.asset = this.asset.bind(this);
        this.allAssets = this.allAssets.bind(this);
    }
    /* Queries a Asset by id. */
    async asset(params) {
        const endpoint = `dydxprotocol/assets/asset/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Asset items. */
    async allAssets(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/assets/asset`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map