import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.account = this.account.bind(this);
        this.accounts = this.accounts.bind(this);
        this.disabledList = this.disabledList.bind(this);
    }
    account(request) {
        const data = QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Query', 'Account', data);
        return promise.then((data) => AccountResponse.decode(new _m0.Reader(data)));
    }
    accounts(request = {
        pagination: undefined,
    }) {
        const data = QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Query', 'Accounts', data);
        return promise.then((data) => AccountsResponse.decode(new _m0.Reader(data)));
    }
    disabledList(request = {}) {
        const data = QueryDisabledListRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Query', 'DisabledList', data);
        return promise.then((data) => DisabledListResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        account(request) {
            return queryService.account(request);
        },
        accounts(request) {
            return queryService.accounts(request);
        },
        disabledList(request) {
            return queryService.disabledList(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map