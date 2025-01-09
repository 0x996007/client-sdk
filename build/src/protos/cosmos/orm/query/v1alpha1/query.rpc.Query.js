import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { GetRequest, GetResponse, ListRequest, ListResponse } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
    }
    get(request) {
        const data = GetRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.orm.query.v1alpha1.Query', 'Get', data);
        return promise.then((data) => GetResponse.decode(new _m0.Reader(data)));
    }
    list(request) {
        const data = ListRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.orm.query.v1alpha1.Query', 'List', data);
        return promise.then((data) => ListResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        get(request) {
            return queryService.get(request);
        },
        list(request) {
            return queryService.list(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map