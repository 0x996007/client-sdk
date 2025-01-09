import * as _m0 from 'protobufjs/minimal.js';
import { MsgUpdateDowntimeParams, MsgUpdateDowntimeParamsResponse, MsgUpdateSynchronyParams, MsgUpdateSynchronyParamsResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.updateDowntimeParams = this.updateDowntimeParams.bind(this);
        this.updateSynchronyParams = this.updateSynchronyParams.bind(this);
    }
    updateDowntimeParams(request) {
        const data = MsgUpdateDowntimeParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.blocktime.Msg', 'UpdateDowntimeParams', data);
        return promise.then((data) => MsgUpdateDowntimeParamsResponse.decode(new _m0.Reader(data)));
    }
    updateSynchronyParams(request) {
        const data = MsgUpdateSynchronyParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.blocktime.Msg', 'UpdateSynchronyParams', data);
        return promise.then((data) => MsgUpdateSynchronyParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map