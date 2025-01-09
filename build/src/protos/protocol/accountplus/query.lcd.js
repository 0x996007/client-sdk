/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.getAuthenticator = this.getAuthenticator.bind(this);
        this.getAuthenticators = this.getAuthenticators.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `dydxprotocol/accountplus/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a single authenticator by account and authenticator ID. */
    async getAuthenticator(params) {
        const endpoint = `dydxprotocol/accountplus/authenticator/${params.account}/${params.authenticatorId}`;
        return await this.req.get(endpoint);
    }
    /* Queries all authenticators for a given account. */
    async getAuthenticators(params) {
        const endpoint = `dydxprotocol/accountplus/authenticators/${params.account}`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map