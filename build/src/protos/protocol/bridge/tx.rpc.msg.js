import * as _m0 from 'protobufjs/minimal.js';
import { MsgAcknowledgeBridges, MsgAcknowledgeBridgesResponse, MsgCompleteBridge, MsgCompleteBridgeResponse, MsgUpdateEventParams, MsgUpdateEventParamsResponse, MsgUpdateProposeParams, MsgUpdateProposeParamsResponse, MsgUpdateSafetyParams, MsgUpdateSafetyParamsResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.acknowledgeBridges = this.acknowledgeBridges.bind(this);
        this.completeBridge = this.completeBridge.bind(this);
        this.updateEventParams = this.updateEventParams.bind(this);
        this.updateProposeParams = this.updateProposeParams.bind(this);
        this.updateSafetyParams = this.updateSafetyParams.bind(this);
    }
    acknowledgeBridges(request) {
        const data = MsgAcknowledgeBridges.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Msg', 'AcknowledgeBridges', data);
        return promise.then((data) => MsgAcknowledgeBridgesResponse.decode(new _m0.Reader(data)));
    }
    completeBridge(request) {
        const data = MsgCompleteBridge.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Msg', 'CompleteBridge', data);
        return promise.then((data) => MsgCompleteBridgeResponse.decode(new _m0.Reader(data)));
    }
    updateEventParams(request) {
        const data = MsgUpdateEventParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Msg', 'UpdateEventParams', data);
        return promise.then((data) => MsgUpdateEventParamsResponse.decode(new _m0.Reader(data)));
    }
    updateProposeParams(request) {
        const data = MsgUpdateProposeParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Msg', 'UpdateProposeParams', data);
        return promise.then((data) => MsgUpdateProposeParamsResponse.decode(new _m0.Reader(data)));
    }
    updateSafetyParams(request) {
        const data = MsgUpdateSafetyParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Msg', 'UpdateSafetyParams', data);
        return promise.then((data) => MsgUpdateSafetyParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map