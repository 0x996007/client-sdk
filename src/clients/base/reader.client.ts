import { DEFAULT_API_TIMEOUT } from '../../types.js';
import { generateQueryPath } from '../../utils/request.util.js';
import { RequestMethod, request } from '../../axios/index.js';

export default class ReaderBaseClient {
  readonly host: string;
  readonly apiTimeout: number;

  constructor(host: string, apiTimeout?: number | null) {
    if (host.endsWith('/')) {
      this.host = host.slice(0, -1);
    } else {
      this.host = host;
    }
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
