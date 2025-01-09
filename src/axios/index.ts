import axios, { AxiosRequestConfig } from 'axios';
import { WrappedError } from '../libs/errors.lib.js';

export enum RequestMethod {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  DELETE = 'DELETE',
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
export class AxiosError extends WrappedError {}

/**
 * @description Axios error with response error fields.
 */
export class AxiosServerError extends AxiosError {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data: unknown;

  constructor(response: AxiosErrorResponse, originalError: AxiosOriginalError) {
    super(
      `${response.status}: ${response.statusText} - ${JSON.stringify(response.data, null, 2)}`,
      originalError,
    );
    this.status = response.status;
    this.statusText = response.statusText;
    this.data = response.data;
  }
}

export interface Response<T> {
  status: number;
  data: T;
  headers: object;
}

async function axiosRequest<T>(
  options: AxiosRequestConfig,
): Promise<Response<T>> {
  try {
    return await axios(options);
  } catch (error) {
    if (error.isAxiosError) {
      if (error.response) {
        throw new AxiosServerError(error.response, error);
      }
      throw new AxiosError(`Axios: ${error.message}`, error);
    }
    throw error;
  }
}

export function request<T>(
  url: string,
  method: RequestMethod = RequestMethod.GET,
  body?: unknown | null,
  headers: object = {},
): Promise<Response<T>> {
  return axiosRequest({
    url,
    method,
    data: body,
    headers,
  });
}
