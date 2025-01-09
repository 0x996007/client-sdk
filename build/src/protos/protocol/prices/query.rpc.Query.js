import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryMarketPriceRequest, QueryMarketPriceResponse, QueryAllMarketPricesRequest, QueryAllMarketPricesResponse, QueryMarketParamRequest, QueryMarketParamResponse, QueryAllMarketParamsRequest, QueryAllMarketParamsResponse, QueryNextMarketIdRequest, QueryNextMarketIdResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.marketPrice = this.marketPrice.bind(this);
        this.allMarketPrices = this.allMarketPrices.bind(this);
        this.marketParam = this.marketParam.bind(this);
        this.allMarketParams = this.allMarketParams.bind(this);
        this.nextMarketId = this.nextMarketId.bind(this);
    }
    marketPrice(request) {
        const data = QueryMarketPriceRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Query', 'MarketPrice', data);
        return promise.then((data) => QueryMarketPriceResponse.decode(new _m0.Reader(data)));
    }
    allMarketPrices(request = {
        pagination: undefined,
    }) {
        const data = QueryAllMarketPricesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Query', 'AllMarketPrices', data);
        return promise.then((data) => QueryAllMarketPricesResponse.decode(new _m0.Reader(data)));
    }
    marketParam(request) {
        const data = QueryMarketParamRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Query', 'MarketParam', data);
        return promise.then((data) => QueryMarketParamResponse.decode(new _m0.Reader(data)));
    }
    allMarketParams(request = {
        pagination: undefined,
    }) {
        const data = QueryAllMarketParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Query', 'AllMarketParams', data);
        return promise.then((data) => QueryAllMarketParamsResponse.decode(new _m0.Reader(data)));
    }
    nextMarketId(request = {}) {
        const data = QueryNextMarketIdRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Query', 'NextMarketId', data);
        return promise.then((data) => QueryNextMarketIdResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        marketPrice(request) {
            return queryService.marketPrice(request);
        },
        allMarketPrices(request) {
            return queryService.allMarketPrices(request);
        },
        marketParam(request) {
            return queryService.marketParam(request);
        },
        allMarketParams(request) {
            return queryService.allMarketParams(request);
        },
        nextMarketId(request) {
            return queryService.nextMarketId(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map