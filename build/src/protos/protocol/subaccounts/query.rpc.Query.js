import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryGetSubaccountRequest, QuerySubaccountResponse, QueryAllSubaccountRequest, QuerySubaccountAllResponse, QueryGetWithdrawalAndTransfersBlockedInfoRequest, QueryGetWithdrawalAndTransfersBlockedInfoResponse, QueryCollateralPoolAddressRequest, QueryCollateralPoolAddressResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.subaccount = this.subaccount.bind(this);
        this.subaccountAll = this.subaccountAll.bind(this);
        this.getWithdrawalAndTransfersBlockedInfo =
            this.getWithdrawalAndTransfersBlockedInfo.bind(this);
        this.collateralPoolAddress = this.collateralPoolAddress.bind(this);
    }
    subaccount(request) {
        const data = QueryGetSubaccountRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.subaccounts.Query', 'Subaccount', data);
        return promise.then((data) => QuerySubaccountResponse.decode(new _m0.Reader(data)));
    }
    subaccountAll(request = {
        pagination: undefined,
    }) {
        const data = QueryAllSubaccountRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.subaccounts.Query', 'SubaccountAll', data);
        return promise.then((data) => QuerySubaccountAllResponse.decode(new _m0.Reader(data)));
    }
    getWithdrawalAndTransfersBlockedInfo(request) {
        const data = QueryGetWithdrawalAndTransfersBlockedInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.subaccounts.Query', 'GetWithdrawalAndTransfersBlockedInfo', data);
        return promise.then((data) => QueryGetWithdrawalAndTransfersBlockedInfoResponse.decode(new _m0.Reader(data)));
    }
    collateralPoolAddress(request) {
        const data = QueryCollateralPoolAddressRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.subaccounts.Query', 'CollateralPoolAddress', data);
        return promise.then((data) => QueryCollateralPoolAddressResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        subaccount(request) {
            return queryService.subaccount(request);
        },
        subaccountAll(request) {
            return queryService.subaccountAll(request);
        },
        getWithdrawalAndTransfersBlockedInfo(request) {
            return queryService.getWithdrawalAndTransfersBlockedInfo(request);
        },
        collateralPoolAddress(request) {
            return queryService.collateralPoolAddress(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map