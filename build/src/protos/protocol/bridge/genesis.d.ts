import { EventParams, EventParamsSDKType, ProposeParams, ProposeParamsSDKType, SafetyParams, SafetyParamsSDKType } from './params.js';
import { BridgeEventInfo, BridgeEventInfoSDKType } from './bridge_event_info.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines the bridge module's genesis state. */
export interface GenesisState {
    /** The parameters of the module. */
    eventParams?: EventParams;
    proposeParams?: ProposeParams;
    safetyParams?: SafetyParams;
    /**
     * Acknowledged event info that stores:
     * - the next event ID to be added to consensus.
     * - Ethereum block height of the most recently acknowledged bridge event.
     */
    acknowledgedEventInfo?: BridgeEventInfo;
}
/** GenesisState defines the bridge module's genesis state. */
export interface GenesisStateSDKType {
    event_params?: EventParamsSDKType;
    propose_params?: ProposeParamsSDKType;
    safety_params?: SafetyParamsSDKType;
    acknowledged_event_info?: BridgeEventInfoSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
