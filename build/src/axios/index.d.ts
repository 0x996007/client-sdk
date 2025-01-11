import { WrappedError } from '../common/errors.js';
export declare enum RequestMethod {
    POST = "POST",
    PUT = "PUT",
    GET = "GET",
    DELETE = "DELETE"
}
interface AxiosOriginalError extends Error {
    isAxiosError: true;
    toJSON(): unknown;
}
interface AxiosErrorResponse {
    status: number;
    statusText: string;
    data: unknown;
}
export declare class AxiosError extends WrappedError {
}
export declare class AxiosServerError extends AxiosError {
    readonly status: number;
    readonly statusText: string;
    readonly data: unknown;
    constructor(response: AxiosErrorResponse, originalError: AxiosOriginalError);
}
export interface Response<T> {
    status: number;
    data: T;
    headers: object;
}
export declare function request<T>(url: string, method?: RequestMethod, body?: unknown | null, headers?: object): Promise<Response<T>>;
export {};
