import { Rpc } from '../../helpers.js';
import { MsgUpdateDowntimeParams, MsgUpdateDowntimeParamsResponse, MsgUpdateSynchronyParams, MsgUpdateSynchronyParamsResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** UpdateDowntimeParams updates the DowntimeParams in state. */
    updateDowntimeParams(request: MsgUpdateDowntimeParams): Promise<MsgUpdateDowntimeParamsResponse>;
    /** UpdateSynchronyParams updates the SynchronyParams in state. */
    updateSynchronyParams(request: MsgUpdateSynchronyParams): Promise<MsgUpdateSynchronyParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateDowntimeParams(request: MsgUpdateDowntimeParams): Promise<MsgUpdateDowntimeParamsResponse>;
    updateSynchronyParams(request: MsgUpdateSynchronyParams): Promise<MsgUpdateSynchronyParamsResponse>;
}
