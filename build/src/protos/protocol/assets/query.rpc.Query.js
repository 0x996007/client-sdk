import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryAssetRequest, QueryAssetResponse, QueryAllAssetsRequest, QueryAllAssetsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.asset = this.asset.bind(this);
        this.allAssets = this.allAssets.bind(this);
    }
    asset(request) {
        const data = QueryAssetRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.assets.Query', 'Asset', data);
        return promise.then((data) => QueryAssetResponse.decode(new _m0.Reader(data)));
    }
    allAssets(request = {
        pagination: undefined,
    }) {
        const data = QueryAllAssetsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.assets.Query', 'AllAssets', data);
        return promise.then((data) => QueryAllAssetsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        asset(request) {
            return queryService.asset(request);
        },
        allAssets(request) {
            return queryService.allAssets(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map