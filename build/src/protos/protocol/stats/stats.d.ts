import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/** BlockStats is used to store stats transiently within the scope of a block. */
export interface BlockStats {
    /** The fills that occured on this block. */
    fills: BlockStats_Fill[];
}
/** BlockStats is used to store stats transiently within the scope of a block. */
export interface BlockStatsSDKType {
    fills: BlockStats_FillSDKType[];
}
/** Fill records data about a fill on this block. */
export interface BlockStats_Fill {
    /** Taker wallet address */
    taker: string;
    /** Maker wallet address */
    maker: string;
    /** Notional USDC filled in quantums */
    notional: Long;
}
/** Fill records data about a fill on this block. */
export interface BlockStats_FillSDKType {
    taker: string;
    maker: string;
    notional: Long;
}
/** StatsMetadata stores metadata for the x/stats module */
export interface StatsMetadata {
    /**
     * The oldest epoch that is included in the stats. The next epoch to be
     * removed from the window.
     */
    trailingEpoch: number;
}
/** StatsMetadata stores metadata for the x/stats module */
export interface StatsMetadataSDKType {
    trailing_epoch: number;
}
/** EpochStats stores stats for a particular epoch */
export interface EpochStats {
    /** Epoch end time */
    epochEndTime?: Date;
    /** Stats for each user in this epoch. Sorted by user. */
    stats: EpochStats_UserWithStats[];
}
/** EpochStats stores stats for a particular epoch */
export interface EpochStatsSDKType {
    epoch_end_time?: Date;
    stats: EpochStats_UserWithStatsSDKType[];
}
/** A user and its associated stats */
export interface EpochStats_UserWithStats {
    user: string;
    stats?: UserStats;
}
/** A user and its associated stats */
export interface EpochStats_UserWithStatsSDKType {
    user: string;
    stats?: UserStatsSDKType;
}
/** GlobalStats stores global stats */
export interface GlobalStats {
    /** Notional USDC traded in quantums */
    notionalTraded: Long;
}
/** GlobalStats stores global stats */
export interface GlobalStatsSDKType {
    notional_traded: Long;
}
/** UserStats stores stats for a User */
export interface UserStats {
    /** Taker USDC in quantums */
    takerNotional: Long;
    /** Maker USDC in quantums */
    makerNotional: Long;
}
/** UserStats stores stats for a User */
export interface UserStatsSDKType {
    taker_notional: Long;
    maker_notional: Long;
}
/** CachedStakeAmount stores the last calculated total staked amount for address */
export interface CachedStakeAmount {
    /** Last calculated total staked amount by the delegator (in coin amount). */
    stakedAmount: Uint8Array;
    /**
     * Block time at which the calculation is cached (in Unix Epoch seconds)
     * Rounded down to nearest second.
     */
    cachedAt: Long;
}
/** CachedStakeAmount stores the last calculated total staked amount for address */
export interface CachedStakeAmountSDKType {
    staked_amount: Uint8Array;
    cached_at: Long;
}
export declare const BlockStats: {
    encode(message: BlockStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockStats;
    fromPartial(object: DeepPartial<BlockStats>): BlockStats;
};
export declare const BlockStats_Fill: {
    encode(message: BlockStats_Fill, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockStats_Fill;
    fromPartial(object: DeepPartial<BlockStats_Fill>): BlockStats_Fill;
};
export declare const StatsMetadata: {
    encode(message: StatsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatsMetadata;
    fromPartial(object: DeepPartial<StatsMetadata>): StatsMetadata;
};
export declare const EpochStats: {
    encode(message: EpochStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochStats;
    fromPartial(object: DeepPartial<EpochStats>): EpochStats;
};
export declare const EpochStats_UserWithStats: {
    encode(message: EpochStats_UserWithStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochStats_UserWithStats;
    fromPartial(object: DeepPartial<EpochStats_UserWithStats>): EpochStats_UserWithStats;
};
export declare const GlobalStats: {
    encode(message: GlobalStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStats;
    fromPartial(object: DeepPartial<GlobalStats>): GlobalStats;
};
export declare const UserStats: {
    encode(message: UserStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserStats;
    fromPartial(object: DeepPartial<UserStats>): UserStats;
};
export declare const CachedStakeAmount: {
    encode(message: CachedStakeAmount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CachedStakeAmount;
    fromPartial(object: DeepPartial<CachedStakeAmount>): CachedStakeAmount;
};
