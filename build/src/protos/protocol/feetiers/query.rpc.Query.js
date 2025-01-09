import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryPerpetualFeeParamsRequest, QueryPerpetualFeeParamsResponse, QueryUserFeeTierRequest, QueryUserFeeTierResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.perpetualFeeParams = this.perpetualFeeParams.bind(this);
        this.userFeeTier = this.userFeeTier.bind(this);
    }
    perpetualFeeParams(request = {}) {
        const data = QueryPerpetualFeeParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.feetiers.Query', 'PerpetualFeeParams', data);
        return promise.then((data) => QueryPerpetualFeeParamsResponse.decode(new _m0.Reader(data)));
    }
    userFeeTier(request) {
        const data = QueryUserFeeTierRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.feetiers.Query', 'UserFeeTier', data);
        return promise.then((data) => QueryUserFeeTierResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        perpetualFeeParams(request) {
            return queryService.perpetualFeeParams(request);
        },
        userFeeTier(request) {
            return queryService.userFeeTier(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map