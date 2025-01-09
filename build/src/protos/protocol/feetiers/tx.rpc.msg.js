import * as _m0 from 'protobufjs/minimal.js';
import { MsgUpdatePerpetualFeeParams, MsgUpdatePerpetualFeeParamsResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.updatePerpetualFeeParams = this.updatePerpetualFeeParams.bind(this);
    }
    updatePerpetualFeeParams(request) {
        const data = MsgUpdatePerpetualFeeParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.feetiers.Msg', 'UpdatePerpetualFeeParams', data);
        return promise.then((data) => MsgUpdatePerpetualFeeParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map