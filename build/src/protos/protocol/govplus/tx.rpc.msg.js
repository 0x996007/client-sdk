import * as _m0 from 'protobufjs/minimal.js';
import { MsgSlashValidator, MsgSlashValidatorResponse } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.slashValidator = this.slashValidator.bind(this);
    }
    slashValidator(request) {
        const data = MsgSlashValidator.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.govplus.Msg', 'SlashValidator', data);
        return promise.then((data) => MsgSlashValidatorResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map