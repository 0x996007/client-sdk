import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryGetClobPairRequest, QueryClobPairResponse, QueryAllClobPairRequest, QueryClobPairAllResponse, MevNodeToNodeCalculationRequest, MevNodeToNodeCalculationResponse, QueryEquityTierLimitConfigurationRequest, QueryEquityTierLimitConfigurationResponse, QueryBlockRateLimitConfigurationRequest, QueryBlockRateLimitConfigurationResponse, QueryLiquidationsConfigurationRequest, QueryLiquidationsConfigurationResponse, QueryStatefulOrderRequest, QueryStatefulOrderResponse, QueryNextClobPairIdRequest, QueryNextClobPairIdResponse, StreamOrderbookUpdatesRequest, StreamOrderbookUpdatesResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.clobPair = this.clobPair.bind(this);
        this.clobPairAll = this.clobPairAll.bind(this);
        this.mevNodeToNodeCalculation = this.mevNodeToNodeCalculation.bind(this);
        this.equityTierLimitConfiguration =
            this.equityTierLimitConfiguration.bind(this);
        this.blockRateLimitConfiguration =
            this.blockRateLimitConfiguration.bind(this);
        this.liquidationsConfiguration = this.liquidationsConfiguration.bind(this);
        this.statefulOrder = this.statefulOrder.bind(this);
        this.nextClobPairId = this.nextClobPairId.bind(this);
        this.streamOrderbookUpdates = this.streamOrderbookUpdates.bind(this);
    }
    clobPair(request) {
        const data = QueryGetClobPairRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'ClobPair', data);
        return promise.then((data) => QueryClobPairResponse.decode(new _m0.Reader(data)));
    }
    clobPairAll(request = {
        pagination: undefined,
    }) {
        const data = QueryAllClobPairRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'ClobPairAll', data);
        return promise.then((data) => QueryClobPairAllResponse.decode(new _m0.Reader(data)));
    }
    mevNodeToNodeCalculation(request) {
        const data = MevNodeToNodeCalculationRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'MevNodeToNodeCalculation', data);
        return promise.then((data) => MevNodeToNodeCalculationResponse.decode(new _m0.Reader(data)));
    }
    equityTierLimitConfiguration(request = {}) {
        const data = QueryEquityTierLimitConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'EquityTierLimitConfiguration', data);
        return promise.then((data) => QueryEquityTierLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    blockRateLimitConfiguration(request = {}) {
        const data = QueryBlockRateLimitConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'BlockRateLimitConfiguration', data);
        return promise.then((data) => QueryBlockRateLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    liquidationsConfiguration(request = {}) {
        const data = QueryLiquidationsConfigurationRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'LiquidationsConfiguration', data);
        return promise.then((data) => QueryLiquidationsConfigurationResponse.decode(new _m0.Reader(data)));
    }
    statefulOrder(request) {
        const data = QueryStatefulOrderRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'StatefulOrder', data);
        return promise.then((data) => QueryStatefulOrderResponse.decode(new _m0.Reader(data)));
    }
    nextClobPairId(request = {}) {
        const data = QueryNextClobPairIdRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'NextClobPairId', data);
        return promise.then((data) => QueryNextClobPairIdResponse.decode(new _m0.Reader(data)));
    }
    streamOrderbookUpdates(request) {
        const data = StreamOrderbookUpdatesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Query', 'StreamOrderbookUpdates', data);
        return promise.then((data) => StreamOrderbookUpdatesResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        clobPair(request) {
            return queryService.clobPair(request);
        },
        clobPairAll(request) {
            return queryService.clobPairAll(request);
        },
        mevNodeToNodeCalculation(request) {
            return queryService.mevNodeToNodeCalculation(request);
        },
        equityTierLimitConfiguration(request) {
            return queryService.equityTierLimitConfiguration(request);
        },
        blockRateLimitConfiguration(request) {
            return queryService.blockRateLimitConfiguration(request);
        },
        liquidationsConfiguration(request) {
            return queryService.liquidationsConfiguration(request);
        },
        statefulOrder(request) {
            return queryService.statefulOrder(request);
        },
        nextClobPairId(request) {
            return queryService.nextClobPairId(request);
        },
        streamOrderbookUpdates(request) {
            return queryService.streamOrderbookUpdates(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map