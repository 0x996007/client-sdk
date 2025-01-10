import { Rpc } from '../../helpers.js';
import { MsgSetVestEntry, MsgSetVestEntryResponse, MsgDeleteVestEntry, MsgDeleteVestEntryResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** SetVestEntry sets a VestEntry in state. */
    setVestEntry(request: MsgSetVestEntry): Promise<MsgSetVestEntryResponse>;
    /** DeleteVestEntry deletes a VestEntry from state. */
    deleteVestEntry(request: MsgDeleteVestEntry): Promise<MsgDeleteVestEntryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setVestEntry(request: MsgSetVestEntry): Promise<MsgSetVestEntryResponse>;
    deleteVestEntry(request: MsgDeleteVestEntry): Promise<MsgDeleteVestEntryResponse>;
}
