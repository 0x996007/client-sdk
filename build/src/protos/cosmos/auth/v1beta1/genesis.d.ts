import { Params, ParamsSDKType } from './auth.js';
import { Any, AnySDKType } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    accounts: AnySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
