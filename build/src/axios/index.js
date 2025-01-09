import axios from 'axios';
import { WrappedError } from '../libs/errors.lib.js';
export var RequestMethod;
(function (RequestMethod) {
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["GET"] = "GET";
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod || (RequestMethod = {}));
/**
 * @description An error thrown by axios.
 *
 * Depending on your use case, if logging errors, you may want to catch axios errors and sanitize
 * them to remove the request and response objects, or sensitive fields. For example:
 *
 *   this.originalError = _.omit(originalError.toJSON(), 'config')
 */
export class AxiosError extends WrappedError {
}
/**
 * @description Axios error with response error fields.
 */
export class AxiosServerError extends AxiosError {
    status;
    statusText;
    data;
    constructor(response, originalError) {
        super(`${response.status}: ${response.statusText} - ${JSON.stringify(response.data, null, 2)}`, originalError);
        this.status = response.status;
        this.statusText = response.statusText;
        this.data = response.data;
    }
}
async function axiosRequest(options) {
    try {
        return await axios(options);
    }
    catch (error) {
        if (error.isAxiosError) {
            if (error.response) {
                throw new AxiosServerError(error.response, error);
            }
            throw new AxiosError(`Axios: ${error.message}`, error);
        }
        throw error;
    }
}
export function request(url, method = RequestMethod.GET, body, headers = {}) {
    return axiosRequest({
        url,
        method,
        data: body,
        headers,
    });
}
//# sourceMappingURL=index.js.map