import { Duration, DurationSDKType } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
    abci?: ABCIParams;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
    abci?: ABCIParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: Long;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: Long;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: Long;
    max_gas: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: Long;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration?: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
    max_age_num_blocks: Long;
    max_age_duration?: DurationSDKType;
    max_bytes: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app: Long;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
    app: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: Long;
    blockMaxGas: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
    block_max_bytes: Long;
    block_max_gas: Long;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
    /**
     * vote_extensions_enable_height configures the first height during which
     * vote extensions will be enabled. During this specified height, and for all
     * subsequent heights, precommit messages that do not contain valid extension data
     * will be considered invalid. Prior to this height, vote extensions will not
     * be used or accepted by validators on the network.
     *
     * Once enabled, vote extensions will be created by the application in ExtendVote,
     * passed to the application for validation in VerifyVoteExtension and given
     * to the application to use when proposing a block during PrepareProposal.
     */
    voteExtensionsEnableHeight: Long;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParamsSDKType {
    vote_extensions_enable_height: Long;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromPartial(object: DeepPartial<BlockParams>): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams;
    fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams;
    fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams;
    fromPartial(object: DeepPartial<VersionParams>): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams;
    fromPartial(object: DeepPartial<HashedParams>): HashedParams;
};
export declare const ABCIParams: {
    encode(message: ABCIParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIParams;
    fromPartial(object: DeepPartial<ABCIParams>): ABCIParams;
};
