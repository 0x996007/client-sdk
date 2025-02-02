import { Duration, DurationSDKType } from '../../google/protobuf/duration.js';
import { Long, DeepPartial } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/**
 * EventParams stores parameters about which events to recognize and which
 * tokens to mint.
 */
export interface EventParams {
    /** The denom of the token to mint. */
    denom: string;
    /** The numerical chain ID of the Ethereum chain to query. */
    ethChainId: Long;
    /** The address of the Ethereum contract to monitor for logs. */
    ethAddress: string;
}
/**
 * EventParams stores parameters about which events to recognize and which
 * tokens to mint.
 */
export interface EventParamsSDKType {
    denom: string;
    eth_chain_id: Long;
    eth_address: string;
}
/** ProposeParams stores parameters for proposing to the module. */
export interface ProposeParams {
    /**
     * The maximum number of bridge events to propose per block.
     * Limits the number of events to propose in a single block
     * in-order to smooth out the flow of events.
     */
    maxBridgesPerBlock: number;
    /**
     * The minimum duration to wait between a finalized bridge and
     * proposing it. This allows other validators to have enough time to
     * also recognize its occurence. Therefore the bridge daemon should
     * pool for new finalized events at least as often as this parameter.
     */
    proposeDelayDuration?: Duration;
    /**
     * Do not propose any events if a [0, 1_000_000) random number generator
     * generates a number smaller than this number.
     * Setting this parameter to 1_000_000 means always skipping proposing events.
     */
    skipRatePpm: number;
    /**
     * Do not propose any events if the timestamp of the proposal block is
     * behind the proposers' wall-clock by at least this duration.
     */
    skipIfBlockDelayedByDuration?: Duration;
}
/** ProposeParams stores parameters for proposing to the module. */
export interface ProposeParamsSDKType {
    max_bridges_per_block: number;
    propose_delay_duration?: DurationSDKType;
    skip_rate_ppm: number;
    skip_if_block_delayed_by_duration?: DurationSDKType;
}
/** SafetyParams stores safety parameters for the module. */
export interface SafetyParams {
    /** True if bridging is disabled. */
    isDisabled: boolean;
    /**
     * The number of blocks that bridges accepted in-consensus will be pending
     * until the minted tokens are granted.
     */
    delayBlocks: number;
}
/** SafetyParams stores safety parameters for the module. */
export interface SafetyParamsSDKType {
    is_disabled: boolean;
    delay_blocks: number;
}
export declare const EventParams: {
    encode(message: EventParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventParams;
    fromPartial(object: DeepPartial<EventParams>): EventParams;
};
export declare const ProposeParams: {
    encode(message: ProposeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposeParams;
    fromPartial(object: DeepPartial<ProposeParams>): ProposeParams;
};
export declare const SafetyParams: {
    encode(message: SafetyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SafetyParams;
    fromPartial(object: DeepPartial<SafetyParams>): SafetyParams;
};
