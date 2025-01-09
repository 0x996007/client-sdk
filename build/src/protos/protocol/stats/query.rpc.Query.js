import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryStatsMetadataRequest, QueryStatsMetadataResponse, QueryGlobalStatsRequest, QueryGlobalStatsResponse, QueryUserStatsRequest, QueryUserStatsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.statsMetadata = this.statsMetadata.bind(this);
        this.globalStats = this.globalStats.bind(this);
        this.userStats = this.userStats.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.stats.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    statsMetadata(request = {}) {
        const data = QueryStatsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.stats.Query', 'StatsMetadata', data);
        return promise.then((data) => QueryStatsMetadataResponse.decode(new _m0.Reader(data)));
    }
    globalStats(request = {}) {
        const data = QueryGlobalStatsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.stats.Query', 'GlobalStats', data);
        return promise.then((data) => QueryGlobalStatsResponse.decode(new _m0.Reader(data)));
    }
    userStats(request) {
        const data = QueryUserStatsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.stats.Query', 'UserStats', data);
        return promise.then((data) => QueryUserStatsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        statsMetadata(request) {
            return queryService.statsMetadata(request);
        },
        globalStats(request) {
            return queryService.globalStats(request);
        },
        userStats(request) {
            return queryService.userStats(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map