import { PnlTickInterval } from '../../common/index.js';
import ReaderBaseClient from '../base/reader.client.js';

/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class VaultClient extends ReaderBaseClient {
  async getMegavaultHistoricalPnl<T>(
    resolution?: PnlTickInterval | null,
  ): Promise<T> {
    const uri = '/v4/vault/v1/megavault/historicalPnl';
    return this.get<T>(uri, { resolution });
  }

  async getVaultsHistoricalPnl<T>(
    resolution?: PnlTickInterval | null,
  ): Promise<T> {
    const uri = '/v4/vault/v1/vaults/historicalPnl';
    return this.get<T>(uri, { resolution });
  }

  async getMegavaultPositions<T>(): Promise<T> {
    const uri = '/v4/vault/v1/megavault/positions';
    return this.get<T>(uri);
  }
}
