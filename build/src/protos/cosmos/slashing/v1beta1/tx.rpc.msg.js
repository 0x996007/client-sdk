import * as _m0 from 'protobufjs/minimal.js';
import { MsgUnjail, MsgUnjailResponse, MsgUpdateParams, MsgUpdateParamsResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.unjail = this.unjail.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    unjail(request) {
        const data = MsgUnjail.encode(request).finish();
        const promise = this.rpc.request('cosmos.slashing.v1beta1.Msg', 'Unjail', data);
        return promise.then((data) => MsgUnjailResponse.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('cosmos.slashing.v1beta1.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map