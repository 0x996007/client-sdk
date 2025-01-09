import * as _m0 from 'protobufjs/minimal.js';
import { MsgDepositToMegavault, MsgDepositToMegavaultResponse, MsgWithdrawFromMegavault, MsgWithdrawFromMegavaultResponse, MsgUpdateDefaultQuotingParams, MsgUpdateDefaultQuotingParamsResponse, MsgUpdateOperatorParams, MsgUpdateOperatorParamsResponse, MsgSetVaultParams, MsgSetVaultParamsResponse, MsgUnlockShares, MsgUnlockSharesResponse, MsgAllocateToVault, MsgAllocateToVaultResponse, MsgRetrieveFromVault, MsgRetrieveFromVaultResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.depositToMegavault = this.depositToMegavault.bind(this);
        this.withdrawFromMegavault = this.withdrawFromMegavault.bind(this);
        this.updateDefaultQuotingParams =
            this.updateDefaultQuotingParams.bind(this);
        this.updateOperatorParams = this.updateOperatorParams.bind(this);
        this.setVaultParams = this.setVaultParams.bind(this);
        this.unlockShares = this.unlockShares.bind(this);
        this.allocateToVault = this.allocateToVault.bind(this);
        this.retrieveFromVault = this.retrieveFromVault.bind(this);
    }
    depositToMegavault(request) {
        const data = MsgDepositToMegavault.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'DepositToMegavault', data);
        return promise.then((data) => MsgDepositToMegavaultResponse.decode(new _m0.Reader(data)));
    }
    withdrawFromMegavault(request) {
        const data = MsgWithdrawFromMegavault.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'WithdrawFromMegavault', data);
        return promise.then((data) => MsgWithdrawFromMegavaultResponse.decode(new _m0.Reader(data)));
    }
    updateDefaultQuotingParams(request) {
        const data = MsgUpdateDefaultQuotingParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'UpdateDefaultQuotingParams', data);
        return promise.then((data) => MsgUpdateDefaultQuotingParamsResponse.decode(new _m0.Reader(data)));
    }
    updateOperatorParams(request) {
        const data = MsgUpdateOperatorParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'UpdateOperatorParams', data);
        return promise.then((data) => MsgUpdateOperatorParamsResponse.decode(new _m0.Reader(data)));
    }
    setVaultParams(request) {
        const data = MsgSetVaultParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'SetVaultParams', data);
        return promise.then((data) => MsgSetVaultParamsResponse.decode(new _m0.Reader(data)));
    }
    unlockShares(request) {
        const data = MsgUnlockShares.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'UnlockShares', data);
        return promise.then((data) => MsgUnlockSharesResponse.decode(new _m0.Reader(data)));
    }
    allocateToVault(request) {
        const data = MsgAllocateToVault.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'AllocateToVault', data);
        return promise.then((data) => MsgAllocateToVaultResponse.decode(new _m0.Reader(data)));
    }
    retrieveFromVault(request) {
        const data = MsgRetrieveFromVault.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vault.Msg', 'RetrieveFromVault', data);
        return promise.then((data) => MsgRetrieveFromVaultResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map