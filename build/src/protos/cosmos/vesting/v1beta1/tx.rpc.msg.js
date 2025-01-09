import * as _m0 from 'protobufjs/minimal.js';
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
        this.createPermanentLockedAccount =
            this.createPermanentLockedAccount.bind(this);
        this.createPeriodicVestingAccount =
            this.createPeriodicVestingAccount.bind(this);
    }
    createVestingAccount(request) {
        const data = MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request('cosmos.vesting.v1beta1.Msg', 'CreateVestingAccount', data);
        return promise.then((data) => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
    }
    createPermanentLockedAccount(request) {
        const data = MsgCreatePermanentLockedAccount.encode(request).finish();
        const promise = this.rpc.request('cosmos.vesting.v1beta1.Msg', 'CreatePermanentLockedAccount', data);
        return promise.then((data) => MsgCreatePermanentLockedAccountResponse.decode(new _m0.Reader(data)));
    }
    createPeriodicVestingAccount(request) {
        const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
        const promise = this.rpc.request('cosmos.vesting.v1beta1.Msg', 'CreatePeriodicVestingAccount', data);
        return promise.then((data) => MsgCreatePeriodicVestingAccountResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map