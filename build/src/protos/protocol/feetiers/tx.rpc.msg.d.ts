import { Rpc } from '../../helpers.js';
import { MsgUpdatePerpetualFeeParams, MsgUpdatePerpetualFeeParamsResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** UpdatePerpetualFeeParams updates the PerpetualFeeParams in state. */
    updatePerpetualFeeParams(request: MsgUpdatePerpetualFeeParams): Promise<MsgUpdatePerpetualFeeParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updatePerpetualFeeParams(request: MsgUpdatePerpetualFeeParams): Promise<MsgUpdatePerpetualFeeParamsResponse>;
}
