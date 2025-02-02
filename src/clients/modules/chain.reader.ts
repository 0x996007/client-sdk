import ReaderBaseClient from '../base/reader.client.js';
import type {
  ComplianceResponse,
  HeightResponse,
  TimeResponse,
} from '../../common/index.js';

export default class ChainReaderClient extends ReaderBaseClient {
  /**
   * @description Get the current time of the Indexer
   * @returns {TimeResponse} isoString and epoch
   */
  async getTime(): Promise<TimeResponse> {
    const uri = '/v4/time';
    return this.get(uri);
  }

  /**
   * @description Get the block height of the most recent block processed by the Indexer
   * @returns {HeightResponse} block height and time
   */
  async getHeight(): Promise<HeightResponse> {
    const uri = '/v4/height';
    return this.get(uri);
  }

  /**
   * @description Screen an address to see if it is restricted
   * @param {string} address evm or dydx address
   * @returns {ComplianceResponse} whether the specified address is restricted
   */
  async screen(address: string): Promise<ComplianceResponse> {
    const uri = '/v4/screen';
    return this.get(uri, { address });
  }
}
