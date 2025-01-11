import { DEFAULT_API_TIMEOUT, getServerNetwork } from '../../common/index.js';
import { generateQueryPath } from '../../utils/request.util.js';
import { RequestMethod, request } from '../../axios/index.js';

export default class ReaderBaseClient {
  readonly host: string;
  readonly apiTimeout: number;

  constructor(network: string, apiTimeout?: number | null) {
    this.host = getServerNetwork(network).reader;
    this.apiTimeout = apiTimeout || DEFAULT_API_TIMEOUT;
  }

  async get<T>(requestPath: string, params: object = {}): Promise<T> {
    const url = `${this.host}${generateQueryPath(requestPath, params)}`;
    const response = await request<T>(url);
    return response.data;
  }

  async post<T>(
    requestPath: string,
    params: object = {},
    body?: unknown | null,
    headers: object = {},
  ): Promise<T> {
    const url = `${this.host}${generateQueryPath(requestPath, params)}`;
    const res = await request<T>(url, RequestMethod.POST, body, headers);
    return res.data;
  }
}
