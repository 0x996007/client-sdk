import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines the sending module's genesis state. */
export interface GenesisState {
}
/** GenesisState defines the sending module's genesis state. */
export interface GenesisStateSDKType {
}
export declare const GenesisState: {
    encode(_: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(_: DeepPartial<GenesisState>): GenesisState;
};
