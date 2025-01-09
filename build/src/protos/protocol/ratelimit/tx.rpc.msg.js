import * as _m0 from 'protobufjs/minimal.js';
import { MsgSetLimitParams, MsgSetLimitParamsResponse } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setLimitParams = this.setLimitParams.bind(this);
    }
    setLimitParams(request) {
        const data = MsgSetLimitParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.ratelimit.Msg', 'SetLimitParams', data);
        return promise.then((data) => MsgSetLimitParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map