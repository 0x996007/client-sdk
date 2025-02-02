import { MsgDepositToSubaccount, MsgWithdrawFromSubaccount, MsgSendFromModuleToAccount, } from './transfer.js';
import * as _m0 from 'protobufjs/minimal.js';
import { MsgCreateTransfer, MsgCreateTransferResponse, MsgDepositToSubaccountResponse, MsgWithdrawFromSubaccountResponse, MsgSendFromModuleToAccountResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createTransfer = this.createTransfer.bind(this);
        this.depositToSubaccount = this.depositToSubaccount.bind(this);
        this.withdrawFromSubaccount = this.withdrawFromSubaccount.bind(this);
        this.sendFromModuleToAccount = this.sendFromModuleToAccount.bind(this);
    }
    createTransfer(request) {
        const data = MsgCreateTransfer.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.sending.Msg', 'CreateTransfer', data);
        return promise.then((data) => MsgCreateTransferResponse.decode(new _m0.Reader(data)));
    }
    depositToSubaccount(request) {
        const data = MsgDepositToSubaccount.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.sending.Msg', 'DepositToSubaccount', data);
        return promise.then((data) => MsgDepositToSubaccountResponse.decode(new _m0.Reader(data)));
    }
    withdrawFromSubaccount(request) {
        const data = MsgWithdrawFromSubaccount.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.sending.Msg', 'WithdrawFromSubaccount', data);
        return promise.then((data) => MsgWithdrawFromSubaccountResponse.decode(new _m0.Reader(data)));
    }
    sendFromModuleToAccount(request) {
        const data = MsgSendFromModuleToAccount.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.sending.Msg', 'SendFromModuleToAccount', data);
        return promise.then((data) => MsgSendFromModuleToAccountResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map