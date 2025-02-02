import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/** PerpetualFeeParams defines the parameters for perpetual fees. */
export interface PerpetualFeeParams {
    /** Sorted fee tiers (lowest requirements first). */
    tiers: PerpetualFeeTier[];
}
/** PerpetualFeeParams defines the parameters for perpetual fees. */
export interface PerpetualFeeParamsSDKType {
    tiers: PerpetualFeeTierSDKType[];
}
/** A fee tier for perpetuals */
export interface PerpetualFeeTier {
    /** Human-readable name of the tier, e.g. "Gold". */
    name: string;
    /** The trader's absolute volume requirement in quote quantums. */
    absoluteVolumeRequirement: Long;
    /** The total volume share requirement. */
    totalVolumeShareRequirementPpm: number;
    /** The maker volume share requirement. */
    makerVolumeShareRequirementPpm: number;
    /** The maker fee once this tier is reached. */
    makerFeePpm: number;
    /** The taker fee once this tier is reached. */
    takerFeePpm: number;
}
/** A fee tier for perpetuals */
export interface PerpetualFeeTierSDKType {
    name: string;
    absolute_volume_requirement: Long;
    total_volume_share_requirement_ppm: number;
    maker_volume_share_requirement_ppm: number;
    maker_fee_ppm: number;
    taker_fee_ppm: number;
}
export declare const PerpetualFeeParams: {
    encode(message: PerpetualFeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualFeeParams;
    fromPartial(object: DeepPartial<PerpetualFeeParams>): PerpetualFeeParams;
};
export declare const PerpetualFeeTier: {
    encode(message: PerpetualFeeTier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualFeeTier;
    fromPartial(object: DeepPartial<PerpetualFeeTier>): PerpetualFeeTier;
};
