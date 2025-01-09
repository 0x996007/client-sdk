import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryVestEntryRequest, QueryVestEntryResponse } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.vestEntry = this.vestEntry.bind(this);
    }
    vestEntry(request) {
        const data = QueryVestEntryRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vest.Query', 'VestEntry', data);
        return promise.then((data) => QueryVestEntryResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        vestEntry(request) {
            return queryService.vestEntry(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map