export default class ReaderBaseClient {
    readonly host: string;
    readonly apiTimeout: number;
    constructor(host: string, apiTimeout?: number | null);
    get<T>(requestPath: string, params?: object): Promise<T>;
    post<T>(requestPath: string, params?: object, body?: unknown | null, headers?: object): Promise<T>;
}
