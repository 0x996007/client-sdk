import * as _m0 from 'protobufjs/minimal.js';
import { MsgSetMarketsHardCap, MsgSetMarketsHardCapResponse, MsgCreateMarketPermissionless, MsgCreateMarketPermissionlessResponse, MsgSetListingVaultDepositParams, MsgSetListingVaultDepositParamsResponse, MsgUpgradeIsolatedPerpetualToCross, MsgUpgradeIsolatedPerpetualToCrossResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setMarketsHardCap = this.setMarketsHardCap.bind(this);
        this.createMarketPermissionless =
            this.createMarketPermissionless.bind(this);
        this.setListingVaultDepositParams =
            this.setListingVaultDepositParams.bind(this);
        this.upgradeIsolatedPerpetualToCross =
            this.upgradeIsolatedPerpetualToCross.bind(this);
    }
    setMarketsHardCap(request) {
        const data = MsgSetMarketsHardCap.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Msg', 'SetMarketsHardCap', data);
        return promise.then((data) => MsgSetMarketsHardCapResponse.decode(new _m0.Reader(data)));
    }
    createMarketPermissionless(request) {
        const data = MsgCreateMarketPermissionless.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Msg', 'CreateMarketPermissionless', data);
        return promise.then((data) => MsgCreateMarketPermissionlessResponse.decode(new _m0.Reader(data)));
    }
    setListingVaultDepositParams(request) {
        const data = MsgSetListingVaultDepositParams.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Msg', 'SetListingVaultDepositParams', data);
        return promise.then((data) => MsgSetListingVaultDepositParamsResponse.decode(new _m0.Reader(data)));
    }
    upgradeIsolatedPerpetualToCross(request) {
        const data = MsgUpgradeIsolatedPerpetualToCross.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.listing.Msg', 'UpgradeIsolatedPerpetualToCross', data);
        return promise.then((data) => MsgUpgradeIsolatedPerpetualToCrossResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map