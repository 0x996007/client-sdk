import * as _m0 from 'protobufjs/minimal.js';
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevenueShareResponse, MsgSetMarketMapperRevShareDetailsForMarket, MsgSetMarketMapperRevShareDetailsForMarketResponse, MsgUpdateUnconditionalRevShareConfig, MsgUpdateUnconditionalRevShareConfigResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setMarketMapperRevenueShare =
            this.setMarketMapperRevenueShare.bind(this);
        this.setMarketMapperRevShareDetailsForMarket =
            this.setMarketMapperRevShareDetailsForMarket.bind(this);
        this.updateUnconditionalRevShareConfig =
            this.updateUnconditionalRevShareConfig.bind(this);
    }
    setMarketMapperRevenueShare(request) {
        const data = MsgSetMarketMapperRevenueShare.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Msg', 'SetMarketMapperRevenueShare', data);
        return promise.then((data) => MsgSetMarketMapperRevenueShareResponse.decode(new _m0.Reader(data)));
    }
    setMarketMapperRevShareDetailsForMarket(request) {
        const data = MsgSetMarketMapperRevShareDetailsForMarket.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Msg', 'SetMarketMapperRevShareDetailsForMarket', data);
        return promise.then((data) => MsgSetMarketMapperRevShareDetailsForMarketResponse.decode(new _m0.Reader(data)));
    }
    updateUnconditionalRevShareConfig(request) {
        const data = MsgUpdateUnconditionalRevShareConfig.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.revshare.Msg', 'UpdateUnconditionalRevShareConfig', data);
        return promise.then((data) => MsgUpdateUnconditionalRevShareConfigResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map