import { VestEntry, VestEntrySDKType } from './vest_entry.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines the vest module's genesis state. */
export interface GenesisState {
    /** The vest entries at genesis. */
    vestEntries: VestEntry[];
}
/** GenesisState defines the vest module's genesis state. */
export interface GenesisStateSDKType {
    vest_entries: VestEntrySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
