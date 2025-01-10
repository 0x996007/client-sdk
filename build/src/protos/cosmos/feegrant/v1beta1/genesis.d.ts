import { Grant, GrantSDKType } from './feegrant.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
    allowances: Grant[];
}
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisStateSDKType {
    allowances: GrantSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
