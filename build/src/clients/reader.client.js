import { DEFAULT_API_TIMEOUT } from '../types.js';
import AccountReader from './modules/account.reader.js';
import MarketsReader from './modules/markets.reader.js';
import ChainReader from './modules/chain.reader.js';
import VaultReader from './modules/vault.reader.js';
/**
 * @description Client for Indexer
 */
export class ReaderClient {
    config;
    apiTimeout;
    _markets;
    _account;
    _utility;
    _vault;
    constructor(config, apiTimeout) {
        this.config = config;
        this.apiTimeout = apiTimeout ?? DEFAULT_API_TIMEOUT;
        this._markets = new MarketsReader(config.restEndpoint);
        this._account = new AccountReader(config.restEndpoint);
        this._utility = new ChainReader(config.restEndpoint);
        this._vault = new VaultReader(config.restEndpoint);
    }
    /**
     * @description Get the public module, used for interacting with public endpoints.
     *
     * @returns The public module
     */
    get marketsReader() {
        return this._markets;
    }
    /**
     * @description Get the private module, used for interacting with private endpoints.
     *
     * @returns The private module
     */
    get accountReader() {
        return this._account;
    }
    /**
     * @description Get the utility module, used for interacting with non-market public endpoints.
     */
    get chainReader() {
        return this._utility;
    }
    /**
     * @description Get the vault module, used for interacting with vault endpoints.
     *
     * @returns The vault module
     */
    get vaultReader() {
        return this._vault;
    }
}
//# sourceMappingURL=reader.client.js.map