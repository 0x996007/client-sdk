import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../../helpers.js';
/** Module is the config object of the slashing module. */
export interface Module {
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
}
/** Module is the config object of the slashing module. */
export interface ModuleSDKType {
    authority: string;
}
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromPartial(object: DeepPartial<Module>): Module;
};
