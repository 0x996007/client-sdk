import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryVaultRequest, QueryVaultResponse, QueryAllVaultsRequest, QueryAllVaultsResponse, QueryMegavaultTotalSharesRequest, QueryMegavaultTotalSharesResponse, QueryMegavaultOwnerSharesRequest, QueryMegavaultOwnerSharesResponse, QueryMegavaultAllOwnerSharesRequest, QueryMegavaultAllOwnerSharesResponse, QueryVaultParamsRequest, QueryVaultParamsResponse, QueryMegavaultWithdrawalInfoRequest, QueryMegavaultWithdrawalInfoResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.vault = this.vault.bind(this);
        this.allVaults = this.allVaults.bind(this);
        this.megavaultTotalShares = this.megavaultTotalShares.bind(this);
        this.megavaultOwnerShares = this.megavaultOwnerShares.bind(this);
        this.megavaultAllOwnerShares = this.megavaultAllOwnerShares.bind(this);
        this.vaultParams = this.vaultParams.bind(this);
        this.megavaultWithdrawalInfo = this.megavaultWithdrawalInfo.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    vault(request) {
        const data = QueryVaultRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'Vault', data);
        return promise.then((data) => QueryVaultResponse.decode(new _m0.Reader(data)));
    }
    allVaults(request = {
        pagination: undefined,
    }) {
        const data = QueryAllVaultsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'AllVaults', data);
        return promise.then((data) => QueryAllVaultsResponse.decode(new _m0.Reader(data)));
    }
    megavaultTotalShares(request = {}) {
        const data = QueryMegavaultTotalSharesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'MegavaultTotalShares', data);
        return promise.then((data) => QueryMegavaultTotalSharesResponse.decode(new _m0.Reader(data)));
    }
    megavaultOwnerShares(request) {
        const data = QueryMegavaultOwnerSharesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'MegavaultOwnerShares', data);
        return promise.then((data) => QueryMegavaultOwnerSharesResponse.decode(new _m0.Reader(data)));
    }
    megavaultAllOwnerShares(request = {
        pagination: undefined,
    }) {
        const data = QueryMegavaultAllOwnerSharesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'MegavaultAllOwnerShares', data);
        return promise.then((data) => QueryMegavaultAllOwnerSharesResponse.decode(new _m0.Reader(data)));
    }
    vaultParams(request) {
        const data = QueryVaultParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'VaultParams', data);
        return promise.then((data) => QueryVaultParamsResponse.decode(new _m0.Reader(data)));
    }
    megavaultWithdrawalInfo(request) {
        const data = QueryMegavaultWithdrawalInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Query', 'MegavaultWithdrawalInfo', data);
        return promise.then((data) => QueryMegavaultWithdrawalInfoResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        vault(request) {
            return queryService.vault(request);
        },
        allVaults(request) {
            return queryService.allVaults(request);
        },
        megavaultTotalShares(request) {
            return queryService.megavaultTotalShares(request);
        },
        megavaultOwnerShares(request) {
            return queryService.megavaultOwnerShares(request);
        },
        megavaultAllOwnerShares(request) {
            return queryService.megavaultAllOwnerShares(request);
        },
        vaultParams(request) {
            return queryService.vaultParams(request);
        },
        megavaultWithdrawalInfo(request) {
            return queryService.megavaultWithdrawalInfo(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map