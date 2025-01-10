import { WrappedError } from '../libs/errors.lib.js';
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
/**
 * @description An error thrown by axios.
 *
 * Depending on your use case, if logging errors, you may want to catch axios errors and sanitize
 * them to remove the request and response objects, or sensitive fields. For example:
 *
 *   this.originalError = _.omit(originalError.toJSON(), 'config')
 */
export declare class AxiosError extends WrappedError {
}
/**
 * @description Axios error with response error fields.
 */
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
