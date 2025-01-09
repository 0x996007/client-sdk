import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class VaultClient extends ReaderBaseClient {
    async getMegavaultHistoricalPnl(resolution) {
        const uri = '/v4/vault/v1/megavault/historicalPnl';
        return this.get(uri, { resolution });
    }
    async getVaultsHistoricalPnl(resolution) {
        const uri = '/v4/vault/v1/vaults/historicalPnl';
        return this.get(uri, { resolution });
    }
    async getMegavaultPositions() {
        const uri = '/v4/vault/v1/megavault/positions';
        return this.get(uri);
    }
}
//# sourceMappingURL=vault.reader.js.map