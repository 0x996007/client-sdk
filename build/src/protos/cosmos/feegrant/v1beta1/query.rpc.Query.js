import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    allowance(request) {
        const data = QueryAllowanceRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Query', 'Allowance', data);
        return promise.then((data) => QueryAllowanceResponse.decode(new _m0.Reader(data)));
    }
    allowances(request) {
        const data = QueryAllowancesRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Query', 'Allowances', data);
        return promise.then((data) => QueryAllowancesResponse.decode(new _m0.Reader(data)));
    }
    allowancesByGranter(request) {
        const data = QueryAllowancesByGranterRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Query', 'AllowancesByGranter', data);
        return promise.then((data) => QueryAllowancesByGranterResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        allowance(request) {
            return queryService.allowance(request);
        },
        allowances(request) {
            return queryService.allowances(request);
        },
        allowancesByGranter(request) {
            return queryService.allowancesByGranter(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map