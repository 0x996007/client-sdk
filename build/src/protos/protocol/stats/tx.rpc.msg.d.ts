import { Rpc } from '../../helpers.js';
import { MsgUpdateParams, MsgUpdateParamsResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** UpdateParams updates the Params in state. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
