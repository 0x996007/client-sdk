import { QueryClient, setupTxExtension } from '@cosmjs/stargate';
import { Tendermint37Client } from '@cosmjs/tendermint-rpc';
import Long from 'long';
import protobuf from 'protobufjs';
import { BROADCAST_POLL_INTERVAL_MS, BROADCAST_TIMEOUT_MS, } from '../types.js';
import { QueryExecutor } from './modules/query.executor.js';
import { PostExecutor } from './modules/post.executor.js';
import { WarpedTendermintClient } from './base/tendermint.client.js';
// Required for encoding and decoding queries that are of type Long.
// Must be done once but since the individal modules should be usable
// - must be set in each module that encounters encoding/decoding Longs.
// Reference: https://github.com/protobufjs/protobuf.js/issues/921
protobuf.util.Long = Long;
protobuf.configure();
export class ExecutorClient {
    config;
    _query;
    _post;
    /**
     * @description Connect to a validator client
     *
     * @returns The validator client
     */
    static async connect(config) {
        const client = new ExecutorClient(config);
        await client.initialize();
        return client;
    }
    constructor(config) {
        this.config = config;
    }
    /**
     * @description Get the query module, used for retrieving on-chain data.
     *
     * @returns The query module
     */
    get query() {
        return this._query;
    }
    /**
     * @description transaction module, used for sending transactions.
     *
     * @returns The transaction module
     */
    get post() {
        return this._post;
    }
    get selectedGasDenom() {
        if (!this._post)
            return undefined;
        return this._post.selectedGasDenom;
    }
    setSelectedGasDenom(gasDenom) {
        if (!this._post)
            throw new Error('Post module not initialized');
        this._post.setSelectedGasDenom(gasDenom);
    }
    /**
     * @description populate account number cache in the Post module for performance.
     */
    async populateAccountNumberCache(address) {
        if (!this._post)
            throw new Error('Post module not initialized');
        await this._post.populateAccountNumberCache(address);
    }
    async initialize() {
        const tendermint37Client = await Tendermint37Client.connect(this.config.restEndpoint);
        const tendermintClient = new WarpedTendermintClient(tendermint37Client, {
            broadcastPollIntervalMs: BROADCAST_POLL_INTERVAL_MS,
            broadcastTimeoutMs: BROADCAST_TIMEOUT_MS,
        });
        const queryClient = QueryClient.withExtensions(tendermint37Client, setupTxExtension);
        this._query = new QueryExecutor(tendermintClient, queryClient);
        this._post = new PostExecutor(this._query, this.config.chainId, this.config.denoms, this.config.defaultClientMemo, this.config.useTimestampNonce);
    }
}
//# sourceMappingURL=executor.client.js.map