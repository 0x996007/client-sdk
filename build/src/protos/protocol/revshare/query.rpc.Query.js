import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryMarketMapperRevenueShareParams, QueryMarketMapperRevenueShareParamsResponse, QueryMarketMapperRevShareDetails, QueryMarketMapperRevShareDetailsResponse, QueryUnconditionalRevShareConfig, QueryUnconditionalRevShareConfigResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.marketMapperRevenueShareParams =
            this.marketMapperRevenueShareParams.bind(this);
        this.marketMapperRevShareDetails =
            this.marketMapperRevShareDetails.bind(this);
        this.unconditionalRevShareConfig =
            this.unconditionalRevShareConfig.bind(this);
    }
    marketMapperRevenueShareParams(request = {}) {
        const data = QueryMarketMapperRevenueShareParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Query', 'MarketMapperRevenueShareParams', data);
        return promise.then((data) => QueryMarketMapperRevenueShareParamsResponse.decode(new _m0.Reader(data)));
    }
    marketMapperRevShareDetails(request) {
        const data = QueryMarketMapperRevShareDetails.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Query', 'MarketMapperRevShareDetails', data);
        return promise.then((data) => QueryMarketMapperRevShareDetailsResponse.decode(new _m0.Reader(data)));
    }
    unconditionalRevShareConfig(request = {}) {
        const data = QueryUnconditionalRevShareConfig.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Query', 'UnconditionalRevShareConfig', data);
        return promise.then((data) => QueryUnconditionalRevShareConfigResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        marketMapperRevenueShareParams(request) {
            return queryService.marketMapperRevenueShareParams(request);
        },
        marketMapperRevShareDetails(request) {
            return queryService.marketMapperRevShareDetails(request);
        },
        unconditionalRevShareConfig(request) {
            return queryService.unconditionalRevShareConfig(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map