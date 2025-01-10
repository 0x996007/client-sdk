import { Duration, DurationSDKType } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** DowntimeParams defines the parameters for downtime. */
export interface DowntimeParams {
    /**
     * Durations tracked for downtime. The durations must be sorted from
     * shortest to longest and must all be positive.
     */
    durations: Duration[];
}
/** DowntimeParams defines the parameters for downtime. */
export interface DowntimeParamsSDKType {
    durations: DurationSDKType[];
}
/** SynchronyParams defines the parameters for block synchrony. */
export interface SynchronyParams {
    /**
     * next_block_delay replaces the locally configured timeout_commit in
     * CometBFT. It determines the amount of time the CometBFT waits after the
     * `CommitTime` (subjective time when +2/3 precommits were received), before
     * moving to next height.
     * If the application sends next_block_delay = 0 to the consensus engine, the
     * latter defaults back to using timeout_commit.
     */
    nextBlockDelay?: Duration;
}
/** SynchronyParams defines the parameters for block synchrony. */
export interface SynchronyParamsSDKType {
    next_block_delay?: DurationSDKType;
}
export declare const DowntimeParams: {
    encode(message: DowntimeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DowntimeParams;
    fromPartial(object: DeepPartial<DowntimeParams>): DowntimeParams;
};
export declare const SynchronyParams: {
    encode(message: SynchronyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SynchronyParams;
    fromPartial(object: DeepPartial<SynchronyParams>): SynchronyParams;
};
