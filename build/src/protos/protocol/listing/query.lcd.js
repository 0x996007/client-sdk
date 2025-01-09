/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.marketsHardCap = this.marketsHardCap.bind(this);
        this.listingVaultDepositParams = this.listingVaultDepositParams.bind(this);
    }
    /* Queries for the hard cap number of listed markets */
    async marketsHardCap(_params = {}) {
        const endpoint = `dydxprotocol/listing/markets_hard_cap`;
        return await this.req.get(endpoint);
    }
    /* Queries the listing vault deposit params */
    async listingVaultDepositParams(_params = {}) {
        const endpoint = `dydxprotocol/listing/vault_deposit_params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map