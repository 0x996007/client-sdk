import * as _m0 from 'protobufjs/minimal.js';
import { MsgAddAuthenticator, MsgAddAuthenticatorResponse, MsgRemoveAuthenticator, MsgRemoveAuthenticatorResponse, MsgSetActiveState, MsgSetActiveStateResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.addAuthenticator = this.addAuthenticator.bind(this);
        this.removeAuthenticator = this.removeAuthenticator.bind(this);
        this.setActiveState = this.setActiveState.bind(this);
    }
    addAuthenticator(request) {
        const data = MsgAddAuthenticator.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Msg', 'AddAuthenticator', data);
        return promise.then((data) => MsgAddAuthenticatorResponse.decode(new _m0.Reader(data)));
    }
    removeAuthenticator(request) {
        const data = MsgRemoveAuthenticator.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Msg', 'RemoveAuthenticator', data);
        return promise.then((data) => MsgRemoveAuthenticatorResponse.decode(new _m0.Reader(data)));
    }
    setActiveState(request) {
        const data = MsgSetActiveState.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.accountplus.Msg', 'SetActiveState', data);
        return promise.then((data) => MsgSetActiveStateResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map