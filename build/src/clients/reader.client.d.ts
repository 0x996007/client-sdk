import { IndexerConfig } from '../types.js';
import AccountReader from './modules/account.reader.js';
import MarketsReader from './modules/markets.reader.js';
import ChainReader from './modules/chain.reader.js';
import VaultReader from './modules/vault.reader.js';
/**
 * @description Client for Indexer
 */
export declare class ReaderClient {
    readonly config: IndexerConfig;
    readonly apiTimeout: number;
    readonly _markets: MarketsReader;
    readonly _account: AccountReader;
    readonly _utility: ChainReader;
    readonly _vault: VaultReader;
    constructor(config: IndexerConfig, apiTimeout?: number);
    /**
     * @description Get the public module, used for interacting with public endpoints.
     *
     * @returns The public module
     */
    get marketsReader(): MarketsReader;
    /**
     * @description Get the private module, used for interacting with private endpoints.
     *
     * @returns The private module
     */
    get accountReader(): AccountReader;
    /**
     * @description Get the utility module, used for interacting with non-market public endpoints.
     */
    get chainReader(): ChainReader;
    /**
     * @description Get the vault module, used for interacting with vault endpoints.
     *
     * @returns The vault module
     */
    get vaultReader(): VaultReader;
}
