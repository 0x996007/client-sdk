import * as _m0 from 'protobufjs/minimal.js';
import { MsgAddPremiumVotes, MsgAddPremiumVotesResponse, MsgCreatePerpetual, MsgCreatePerpetualResponse, MsgSetLiquidityTier, MsgSetLiquidityTierResponse, MsgUpdatePerpetualParams, MsgUpdatePerpetualParamsResponse, MsgUpdateParams, MsgUpdateParamsResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.addPremiumVotes = this.addPremiumVotes.bind(this);
        this.createPerpetual = this.createPerpetual.bind(this);
        this.setLiquidityTier = this.setLiquidityTier.bind(this);
        this.updatePerpetualParams = this.updatePerpetualParams.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    addPremiumVotes(request) {
        const data = MsgAddPremiumVotes.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.perpetuals.Msg', 'AddPremiumVotes', data);
        return promise.then((data) => MsgAddPremiumVotesResponse.decode(new _m0.Reader(data)));
    }
    createPerpetual(request) {
        const data = MsgCreatePerpetual.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.perpetuals.Msg', 'CreatePerpetual', data);
        return promise.then((data) => MsgCreatePerpetualResponse.decode(new _m0.Reader(data)));
    }
    setLiquidityTier(request) {
        const data = MsgSetLiquidityTier.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.perpetuals.Msg', 'SetLiquidityTier', data);
        return promise.then((data) => MsgSetLiquidityTierResponse.decode(new _m0.Reader(data)));
    }
    updatePerpetualParams(request) {
        const data = MsgUpdatePerpetualParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.perpetuals.Msg', 'UpdatePerpetualParams', data);
        return promise.then((data) => MsgUpdatePerpetualParamsResponse.decode(new _m0.Reader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.perpetuals.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map