import { PnlTickInterval } from '../../common/index.js';
import ReaderBaseClient from '../base/reader.client.js';
/**
 * @description REST endpoints for data unrelated to a particular address.
 */
export default class VaultClient extends ReaderBaseClient {
    getMegavaultHistoricalPnl<T>(resolution?: PnlTickInterval | null): Promise<T>;
    getVaultsHistoricalPnl<T>(resolution?: PnlTickInterval | null): Promise<T>;
    getMegavaultPositions<T>(): Promise<T>;
}
