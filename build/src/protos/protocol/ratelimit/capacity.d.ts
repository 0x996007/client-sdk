import { Limiter, LimiterSDKType } from './limit_params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** DenomCapacity stores a list of rate limit capacity for a denom. */
export interface DenomCapacity {
    /**
     * denom is the denomination of the token being rate limited.
     * e.g. ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5
     */
    denom: string;
    /**
     * capacity_list is a list of capacity amount tracked for each `Limiter`
     * on the denom. This list has a 1:1 mapping to `limiter` list under
     * `LimitParams`.
     */
    capacityList: Uint8Array[];
}
/** DenomCapacity stores a list of rate limit capacity for a denom. */
export interface DenomCapacitySDKType {
    denom: string;
    capacity_list: Uint8Array[];
}
/** LimiterCapacity contains a pair of limiter and its corresponding capacity. */
export interface LimiterCapacity {
    limiter?: Limiter;
    capacity: Uint8Array;
}
/** LimiterCapacity contains a pair of limiter and its corresponding capacity. */
export interface LimiterCapacitySDKType {
    limiter?: LimiterSDKType;
    capacity: Uint8Array;
}
export declare const DenomCapacity: {
    encode(message: DenomCapacity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomCapacity;
    fromPartial(object: DeepPartial<DenomCapacity>): DenomCapacity;
};
export declare const LimiterCapacity: {
    encode(message: LimiterCapacity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimiterCapacity;
    fromPartial(object: DeepPartial<LimiterCapacity>): LimiterCapacity;
};
