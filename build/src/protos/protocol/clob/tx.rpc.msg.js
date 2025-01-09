import * as _m0 from 'protobufjs/minimal.js';
import { MsgProposedOperations, MsgProposedOperationsResponse, MsgPlaceOrder, MsgPlaceOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgBatchCancel, MsgBatchCancelResponse, MsgCreateClobPair, MsgCreateClobPairResponse, MsgUpdateClobPair, MsgUpdateClobPairResponse, MsgUpdateEquityTierLimitConfiguration, MsgUpdateEquityTierLimitConfigurationResponse, MsgUpdateBlockRateLimitConfiguration, MsgUpdateBlockRateLimitConfigurationResponse, MsgUpdateLiquidationsConfig, MsgUpdateLiquidationsConfigResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.proposedOperations = this.proposedOperations.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.batchCancel = this.batchCancel.bind(this);
        this.createClobPair = this.createClobPair.bind(this);
        this.updateClobPair = this.updateClobPair.bind(this);
        this.updateEquityTierLimitConfiguration =
            this.updateEquityTierLimitConfiguration.bind(this);
        this.updateBlockRateLimitConfiguration =
            this.updateBlockRateLimitConfiguration.bind(this);
        this.updateLiquidationsConfig = this.updateLiquidationsConfig.bind(this);
    }
    proposedOperations(request) {
        const data = MsgProposedOperations.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'ProposedOperations', data);
        return promise.then((data) => MsgProposedOperationsResponse.decode(new _m0.Reader(data)));
    }
    placeOrder(request) {
        const data = MsgPlaceOrder.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'PlaceOrder', data);
        return promise.then((data) => MsgPlaceOrderResponse.decode(new _m0.Reader(data)));
    }
    cancelOrder(request) {
        const data = MsgCancelOrder.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'CancelOrder', data);
        return promise.then((data) => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
    }
    batchCancel(request) {
        const data = MsgBatchCancel.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'BatchCancel', data);
        return promise.then((data) => MsgBatchCancelResponse.decode(new _m0.Reader(data)));
    }
    createClobPair(request) {
        const data = MsgCreateClobPair.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'CreateClobPair', data);
        return promise.then((data) => MsgCreateClobPairResponse.decode(new _m0.Reader(data)));
    }
    updateClobPair(request) {
        const data = MsgUpdateClobPair.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'UpdateClobPair', data);
        return promise.then((data) => MsgUpdateClobPairResponse.decode(new _m0.Reader(data)));
    }
    updateEquityTierLimitConfiguration(request) {
        const data = MsgUpdateEquityTierLimitConfiguration.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'UpdateEquityTierLimitConfiguration', data);
        return promise.then((data) => MsgUpdateEquityTierLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    updateBlockRateLimitConfiguration(request) {
        const data = MsgUpdateBlockRateLimitConfiguration.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'UpdateBlockRateLimitConfiguration', data);
        return promise.then((data) => MsgUpdateBlockRateLimitConfigurationResponse.decode(new _m0.Reader(data)));
    }
    updateLiquidationsConfig(request) {
        const data = MsgUpdateLiquidationsConfig.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.clob.Msg', 'UpdateLiquidationsConfig', data);
        return promise.then((data) => MsgUpdateLiquidationsConfigResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map