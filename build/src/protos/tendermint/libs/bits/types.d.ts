import { Long, DeepPartial } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
export interface BitArray {
    bits: Long;
    elems: Long[];
}
export interface BitArraySDKType {
    bits: Long;
    elems: Long[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BitArray;
    fromPartial(object: DeepPartial<BitArray>): BitArray;
};
