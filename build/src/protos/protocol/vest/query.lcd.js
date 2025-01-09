/* eslint-disable @typescript-eslint/no-explicit-any */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.vestEntry = this.vestEntry.bind(this);
    }
    /* Queries the VestEntry. */
    async vestEntry(params) {
        const options = {
            params: {},
        };
        if (typeof params?.vesterAccount !== 'undefined') {
            options.params.vester_account = params.vesterAccount;
        }
        const endpoint = `dydxprotocol/v4/vest/vest_entry`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map