import * as _m0 from 'protobufjs/minimal.js';
import { MsgRegisterAffiliate, MsgRegisterAffiliateResponse, MsgUpdateAffiliateTiers, MsgUpdateAffiliateTiersResponse, MsgUpdateAffiliateWhitelist, MsgUpdateAffiliateWhitelistResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerAffiliate = this.registerAffiliate.bind(this);
        this.updateAffiliateTiers = this.updateAffiliateTiers.bind(this);
        this.updateAffiliateWhitelist = this.updateAffiliateWhitelist.bind(this);
    }
    registerAffiliate(request) {
        const data = MsgRegisterAffiliate.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Msg', 'RegisterAffiliate', data);
        return promise.then((data) => MsgRegisterAffiliateResponse.decode(new _m0.Reader(data)));
    }
    updateAffiliateTiers(request) {
        const data = MsgUpdateAffiliateTiers.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Msg', 'UpdateAffiliateTiers', data);
        return promise.then((data) => MsgUpdateAffiliateTiersResponse.decode(new _m0.Reader(data)));
    }
    updateAffiliateWhitelist(request) {
        const data = MsgUpdateAffiliateWhitelist.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.affiliates.Msg', 'UpdateAffiliateWhitelist', data);
        return promise.then((data) => MsgUpdateAffiliateWhitelistResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map