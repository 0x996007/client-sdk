/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.vault = this.vault.bind(this);
        this.allVaults = this.allVaults.bind(this);
        this.megavaultTotalShares = this.megavaultTotalShares.bind(this);
        this.megavaultOwnerShares = this.megavaultOwnerShares.bind(this);
        this.megavaultAllOwnerShares = this.megavaultAllOwnerShares.bind(this);
        this.vaultParams = this.vaultParams.bind(this);
    }
    /* Queries the Params. */
    async params(_params = {}) {
        const endpoint = `dydxprotocol/vault/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a Vault by type and number. */
    async vault(params) {
        const endpoint = `dydxprotocol/vault/vault/${params.type}/${params.number}`;
        return await this.req.get(endpoint);
    }
    /* Queries all vaults. */
    async allVaults(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/vault/vault`;
        return await this.req.get(endpoint, options);
    }
    /* Queries total shares of megavault. */
    async megavaultTotalShares(_params = {}) {
        const endpoint = `dydxprotocol/vault/megavault/total_shares`;
        return await this.req.get(endpoint);
    }
    /* Queries owner shares of megavault. */
    async megavaultOwnerShares(params) {
        const endpoint = `dydxprotocol/vault/megavault/owner_shares/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* Queries all owner shares of megavault. */
    async megavaultAllOwnerShares(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/vault/megavault/all_owner_shares`;
        return await this.req.get(endpoint, options);
    }
    /* Queries vault params of a vault. */
    async vaultParams(params) {
        const endpoint = `dydxprotocol/vault/params/${params.type}/${params.number}`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map