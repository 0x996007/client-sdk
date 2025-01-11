import { DEFAULT_API_TIMEOUT, getServerNetwork } from '../../common/index.js';
import { generateQueryPath } from '../../utils/request.util.js';
import { RequestMethod, request } from '../../axios/index.js';
export default class ReaderBaseClient {
    host;
    apiTimeout;
    constructor(network, apiTimeout) {
        this.host = getServerNetwork(network).reader;
        this.apiTimeout = apiTimeout || DEFAULT_API_TIMEOUT;
    }
    async get(requestPath, params = {}) {
        const url = `${this.host}${generateQueryPath(requestPath, params)}`;
        const response = await request(url);
        return response.data;
    }
    async post(requestPath, params = {}, body, headers = {}) {
        const url = `${this.host}${generateQueryPath(requestPath, params)}`;
        const res = await request(url, RequestMethod.POST, body, headers);
        return res.data;
    }
}
//# sourceMappingURL=reader.client.js.map