import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryMarketsHardCap, QueryMarketsHardCapResponse, QueryListingVaultDepositParams, QueryListingVaultDepositParamsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.marketsHardCap = this.marketsHardCap.bind(this);
        this.listingVaultDepositParams = this.listingVaultDepositParams.bind(this);
    }
    marketsHardCap(request = {}) {
        const data = QueryMarketsHardCap.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Query', 'MarketsHardCap', data);
        return promise.then((data) => QueryMarketsHardCapResponse.decode(new _m0.Reader(data)));
    }
    listingVaultDepositParams(request = {}) {
        const data = QueryListingVaultDepositParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Query', 'ListingVaultDepositParams', data);
        return promise.then((data) => QueryListingVaultDepositParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        marketsHardCap(request) {
            return queryService.marketsHardCap(request);
        },
        listingVaultDepositParams(request) {
            return queryService.listingVaultDepositParams(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map