import { Rpc } from '../../helpers.js';
import { MsgAddAuthenticator, MsgAddAuthenticatorResponse, MsgRemoveAuthenticator, MsgRemoveAuthenticatorResponse, MsgSetActiveState, MsgSetActiveStateResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /** AddAuthenticator adds an authenticator to an account. */
    addAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    /** RemoveAuthenticator removes an authenticator from an account. */
    removeAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    /**
     * SetActiveState sets the active state of the authenticator.
     * Primarily used for circuit breaking.
     */
    setActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    removeAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    setActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
