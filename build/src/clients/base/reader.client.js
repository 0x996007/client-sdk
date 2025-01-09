import { DEFAULT_API_TIMEOUT } from '../../types.js';
import { generateQueryPath } from '../../utils/request.util.js';
import { RequestMethod, request } from '../../axios/index.js';
export default class ReaderBaseClient {
    host;
    apiTimeout;
    constructor(host, apiTimeout) {
        if (host.endsWith('/')) {
            this.host = host.slice(0, -1);
        }
        else {
            this.host = host;
        }
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