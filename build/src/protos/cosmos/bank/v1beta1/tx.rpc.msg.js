import * as _m0 from 'protobufjs/minimal.js';
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
        this.multiSend = this.multiSend.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.setSendEnabled = this.setSendEnabled.bind(this);
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'Send', data);
        return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
    }
    multiSend(request) {
        const data = MsgMultiSend.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'MultiSend', data);
        return promise.then((data) => MsgMultiSendResponse.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
    setSendEnabled(request) {
        const data = MsgSetSendEnabled.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'SetSendEnabled', data);
        return promise.then((data) => MsgSetSendEnabledResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map