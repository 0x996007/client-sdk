import { Rpc } from '../../helpers.js';
import { MsgSlashValidator, MsgSlashValidatorResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * SlashValidator is exposed to allow slashing of a misbehaving validator via
     * governance.
     */
    slashValidator(request: MsgSlashValidator): Promise<MsgSlashValidatorResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    slashValidator(request: MsgSlashValidator): Promise<MsgSlashValidatorResponse>;
}
