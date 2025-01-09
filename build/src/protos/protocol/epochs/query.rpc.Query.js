import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryGetEpochInfoRequest, QueryEpochInfoResponse, QueryAllEpochInfoRequest, QueryEpochInfoAllResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.epochInfo = this.epochInfo.bind(this);
        this.epochInfoAll = this.epochInfoAll.bind(this);
    }
    epochInfo(request) {
        const data = QueryGetEpochInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.epochs.Query', 'EpochInfo', data);
        return promise.then((data) => QueryEpochInfoResponse.decode(new _m0.Reader(data)));
    }
    epochInfoAll(request = {
        pagination: undefined,
    }) {
        const data = QueryAllEpochInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.epochs.Query', 'EpochInfoAll', data);
        return promise.then((data) => QueryEpochInfoAllResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        epochInfo(request) {
            return queryService.epochInfo(request);
        },
        epochInfoAll(request) {
            return queryService.epochInfoAll(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map