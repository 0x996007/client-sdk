import * as _m0 from 'protobufjs/minimal.js';
import { MsgSetVestEntry, MsgSetVestEntryResponse, MsgDeleteVestEntry, MsgDeleteVestEntryResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setVestEntry = this.setVestEntry.bind(this);
        this.deleteVestEntry = this.deleteVestEntry.bind(this);
    }
    setVestEntry(request) {
        const data = MsgSetVestEntry.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vest.Msg', 'SetVestEntry', data);
        return promise.then((data) => MsgSetVestEntryResponse.decode(new _m0.Reader(data)));
    }
    deleteVestEntry(request) {
        const data = MsgDeleteVestEntry.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.vest.Msg', 'DeleteVestEntry', data);
        return promise.then((data) => MsgDeleteVestEntryResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map