import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryDowntimeParamsRequest, QueryDowntimeParamsResponse, QueryPreviousBlockInfoRequest, QueryPreviousBlockInfoResponse, QueryAllDowntimeInfoRequest, QueryAllDowntimeInfoResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.downtimeParams = this.downtimeParams.bind(this);
        this.previousBlockInfo = this.previousBlockInfo.bind(this);
        this.allDowntimeInfo = this.allDowntimeInfo.bind(this);
    }
    downtimeParams(request = {}) {
        const data = QueryDowntimeParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.blocktime.Query', 'DowntimeParams', data);
        return promise.then((data) => QueryDowntimeParamsResponse.decode(new _m0.Reader(data)));
    }
    previousBlockInfo(request = {}) {
        const data = QueryPreviousBlockInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.blocktime.Query', 'PreviousBlockInfo', data);
        return promise.then((data) => QueryPreviousBlockInfoResponse.decode(new _m0.Reader(data)));
    }
    allDowntimeInfo(request = {}) {
        const data = QueryAllDowntimeInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.blocktime.Query', 'AllDowntimeInfo', data);
        return promise.then((data) => QueryAllDowntimeInfoResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        downtimeParams(request) {
            return queryService.downtimeParams(request);
        },
        previousBlockInfo(request) {
            return queryService.previousBlockInfo(request);
        },
        allDowntimeInfo(request) {
            return queryService.allDowntimeInfo(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map