import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, GetAuthenticatorRequest, GetAuthenticatorResponse, GetAuthenticatorsRequest, GetAuthenticatorsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.getAuthenticator = this.getAuthenticator.bind(this);
        this.getAuthenticators = this.getAuthenticators.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    getAuthenticator(request) {
        const data = GetAuthenticatorRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Query', 'GetAuthenticator', data);
        return promise.then((data) => GetAuthenticatorResponse.decode(new _m0.Reader(data)));
    }
    getAuthenticators(request) {
        const data = GetAuthenticatorsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Query', 'GetAuthenticators', data);
        return promise.then((data) => GetAuthenticatorsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        getAuthenticator(request) {
            return queryService.getAuthenticator(request);
        },
        getAuthenticators(request) {
            return queryService.getAuthenticators(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map