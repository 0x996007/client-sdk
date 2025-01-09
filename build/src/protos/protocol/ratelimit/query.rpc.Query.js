import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { ListLimitParamsRequest, ListLimitParamsResponse, QueryCapacityByDenomRequest, QueryCapacityByDenomResponse, QueryAllPendingSendPacketsRequest, QueryAllPendingSendPacketsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.listLimitParams = this.listLimitParams.bind(this);
        this.capacityByDenom = this.capacityByDenom.bind(this);
        this.allPendingSendPackets = this.allPendingSendPackets.bind(this);
    }
    listLimitParams(request = {}) {
        const data = ListLimitParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.ratelimit.Query', 'ListLimitParams', data);
        return promise.then((data) => ListLimitParamsResponse.decode(new _m0.Reader(data)));
    }
    capacityByDenom(request) {
        const data = QueryCapacityByDenomRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.ratelimit.Query', 'CapacityByDenom', data);
        return promise.then((data) => QueryCapacityByDenomResponse.decode(new _m0.Reader(data)));
    }
    allPendingSendPackets(request = {}) {
        const data = QueryAllPendingSendPacketsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.ratelimit.Query', 'AllPendingSendPackets', data);
        return promise.then((data) => QueryAllPendingSendPacketsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        listLimitParams(request) {
            return queryService.listLimitParams(request);
        },
        capacityByDenom(request) {
            return queryService.capacityByDenom(request);
        },
        allPendingSendPackets(request) {
            return queryService.allPendingSendPackets(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map