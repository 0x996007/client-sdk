import { Duration, DurationSDKType } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** LimitParams defines rate limit params on a denom. */
export interface LimitParams {
    /**
     * denom is the denomination of the token being rate limited.
     * e.g. ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5
     */
    denom: string;
    /**
     * limiters is a list of rate-limiters on this denom. All limiters
     * must be satified for a withdrawal to proceed.
     */
    limiters: Limiter[];
}
/** LimitParams defines rate limit params on a denom. */
export interface LimitParamsSDKType {
    denom: string;
    limiters: LimiterSDKType[];
}
/** Limiter defines one rate-limiter on a specfic denom. */
export interface Limiter {
    /**
     * period is the rolling time period for which the limit applies
     * e.g. 3600 (an hour)
     */
    period?: Duration;
    /**
     * baseline_minimum is the minimum maximum withdrawal coin amount within the
     * time period.
     * e.g. 100_000_000_000 uusdc for 100k USDC; 5e22 adv4tnt for 50k DV4TNT
     */
    baselineMinimum: Uint8Array;
    /**
     * baseline_tvl_ppm is the maximum ratio of TVL withdrawable in
     * the time period, in part-per-million.
     * e.g. 100_000 (10%)
     */
    baselineTvlPpm: number;
}
/** Limiter defines one rate-limiter on a specfic denom. */
export interface LimiterSDKType {
    period?: DurationSDKType;
    baseline_minimum: Uint8Array;
    baseline_tvl_ppm: number;
}
export declare const LimitParams: {
    encode(message: LimitParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LimitParams;
    fromPartial(object: DeepPartial<LimitParams>): LimitParams;
};
export declare const Limiter: {
    encode(message: Limiter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Limiter;
    fromPartial(object: DeepPartial<Limiter>): Limiter;
};
