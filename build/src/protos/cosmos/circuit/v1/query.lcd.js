/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setPaginationParams } from '../../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.account = this.account.bind(this);
        this.accounts = this.accounts.bind(this);
        this.disabledList = this.disabledList.bind(this);
    }
    /* Account returns account permissions. */
    async account(params) {
        const endpoint = `cosmos/circuit/v1/accounts/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* Account returns account permissions. */
    async accounts(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/circuit/v1/accounts`;
        return await this.req.get(endpoint, options);
    }
    /* DisabledList returns a list of disabled message urls */
    async disabledList(_params = {}) {
        const endpoint = `cosmos/circuit/v1/disable_list`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map