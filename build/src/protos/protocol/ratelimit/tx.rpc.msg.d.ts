import { Rpc } from '../../helpers.js';
import { MsgSetLimitParams, MsgSetLimitParamsResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** SetLimitParams sets a `LimitParams` object in state. */
    setLimitParams(request: MsgSetLimitParams): Promise<MsgSetLimitParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setLimitParams(request: MsgSetLimitParams): Promise<MsgSetLimitParamsResponse>;
}
