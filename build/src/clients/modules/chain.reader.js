import ReaderBaseClient from '../base/reader.client.js';
export default class ChainReaderClient extends ReaderBaseClient {
    /**
     * @description Get the current time of the Indexer
     * @returns {TimeResponse} isoString and epoch
     */
    async getTime() {
        const uri = '/v4/time';
        return this.get(uri);
    }
    /**
     * @description Get the block height of the most recent block processed by the Indexer
     * @returns {HeightResponse} block height and time
     */
    async getHeight() {
        const uri = '/v4/height';
        return this.get(uri);
    }
    /**
     * @description Screen an address to see if it is restricted
     * @param {string} address evm or dydx address
     * @returns {ComplianceResponse} whether the specified address is restricted
     */
    async screen(address) {
        const uri = '/v4/screen';
        return this.get(uri, { address });
    }
}
//# sourceMappingURL=chain.reader.js.map