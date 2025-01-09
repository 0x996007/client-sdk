import * as _m0 from 'protobufjs/minimal.js';
import { MsgDelayMessage, MsgDelayMessageResponse } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.delayMessage = this.delayMessage.bind(this);
    }
    delayMessage(request) {
        const data = MsgDelayMessage.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.delaymsg.Msg', 'DelayMessage', data);
        return promise.then((data) => MsgDelayMessageResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map