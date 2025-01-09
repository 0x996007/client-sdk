import * as _m0 from 'protobufjs/minimal.js';
import { MsgUpdateMarketPrices, MsgUpdateMarketPricesResponse, MsgCreateOracleMarket, MsgCreateOracleMarketResponse, MsgUpdateMarketParam, MsgUpdateMarketParamResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.updateMarketPrices = this.updateMarketPrices.bind(this);
        this.createOracleMarket = this.createOracleMarket.bind(this);
        this.updateMarketParam = this.updateMarketParam.bind(this);
    }
    updateMarketPrices(request) {
        const data = MsgUpdateMarketPrices.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Msg', 'UpdateMarketPrices', data);
        return promise.then((data) => MsgUpdateMarketPricesResponse.decode(new _m0.Reader(data)));
    }
    createOracleMarket(request) {
        const data = MsgCreateOracleMarket.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Msg', 'CreateOracleMarket', data);
        return promise.then((data) => MsgCreateOracleMarketResponse.decode(new _m0.Reader(data)));
    }
    updateMarketParam(request) {
        const data = MsgUpdateMarketParam.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.prices.Msg', 'UpdateMarketParam', data);
        return promise.then((data) => MsgUpdateMarketParamResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map