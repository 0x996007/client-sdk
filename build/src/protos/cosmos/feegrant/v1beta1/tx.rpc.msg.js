import * as _m0 from 'protobufjs/minimal.js';
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse, MsgPruneAllowances, MsgPruneAllowancesResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
        this.pruneAllowances = this.pruneAllowances.bind(this);
    }
    grantAllowance(request) {
        const data = MsgGrantAllowance.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Msg', 'GrantAllowance', data);
        return promise.then((data) => MsgGrantAllowanceResponse.decode(new _m0.Reader(data)));
    }
    revokeAllowance(request) {
        const data = MsgRevokeAllowance.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Msg', 'RevokeAllowance', data);
        return promise.then((data) => MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)));
    }
    pruneAllowances(request) {
        const data = MsgPruneAllowances.encode(request).finish();
        const promise = this.rpc.request('cosmos.feegrant.v1beta1.Msg', 'PruneAllowances', data);
        return promise.then((data) => MsgPruneAllowancesResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map