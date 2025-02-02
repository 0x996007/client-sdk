import { Proof, ProofSDKType } from '../crypto/proof.js';
import { Consensus, ConsensusSDKType } from '../version/types.js';
import { BlockIDFlag, ValidatorSet, ValidatorSetSDKType } from './validator.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare const SignedMsgTypeSDKType: typeof SignedMsgType;
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof?: Proof;
}
export interface PartSDKType {
    index: number;
    bytes: Uint8Array;
    proof?: ProofSDKType;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader?: PartSetHeader;
}
/** BlockID */
export interface BlockIDSDKType {
    hash: Uint8Array;
    part_set_header?: PartSetHeaderSDKType;
}
/** Header defines the structure of a block header. */
export interface Header {
    /** basic block info */
    version?: Consensus;
    chainId: string;
    height: Long;
    time?: Date;
    /** prev block info */
    lastBlockId?: BlockID;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
/** Header defines the structure of a block header. */
export interface HeaderSDKType {
    version?: ConsensusSDKType;
    chain_id: string;
    height: Long;
    time?: Date;
    last_block_id?: BlockIDSDKType;
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    validators_hash: Uint8Array;
    next_validators_hash: Uint8Array;
    consensus_hash: Uint8Array;
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    evidence_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: Long;
    round: number;
    /** zero if vote is nil. */
    blockId?: BlockID;
    timestamp?: Date;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    /**
     * Vote signature by the validator if they participated in consensus for the
     * associated block.
     */
    signature: Uint8Array;
    /**
     * Vote extension provided by the application. Only valid for precommit
     * messages.
     */
    extension: Uint8Array;
    /**
     * Vote extension signature by the validator if they participated in
     * consensus for the associated block.
     * Only valid for precommit messages.
     */
    extensionSignature: Uint8Array;
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
    type: SignedMsgType;
    height: Long;
    round: number;
    block_id?: BlockIDSDKType;
    timestamp?: Date;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
    extension: Uint8Array;
    extension_signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: Long;
    round: number;
    blockId?: BlockID;
    signatures: CommitSig[];
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
    height: Long;
    round: number;
    block_id?: BlockIDSDKType;
    signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp?: Date;
    signature: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp?: Date;
    signature: Uint8Array;
}
export interface ExtendedCommit {
    height: Long;
    round: number;
    blockId?: BlockID;
    extendedSignatures: ExtendedCommitSig[];
}
export interface ExtendedCommitSDKType {
    height: Long;
    round: number;
    block_id?: BlockIDSDKType;
    extended_signatures: ExtendedCommitSigSDKType[];
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp?: Date;
    signature: Uint8Array;
    /** Vote extension data */
    extension: Uint8Array;
    /** Vote extension signature */
    extensionSignature: Uint8Array;
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp?: Date;
    signature: Uint8Array;
    extension: Uint8Array;
    extension_signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: Long;
    round: number;
    polRound: number;
    blockId?: BlockID;
    timestamp?: Date;
    signature: Uint8Array;
}
export interface ProposalSDKType {
    type: SignedMsgType;
    height: Long;
    round: number;
    pol_round: number;
    block_id?: BlockIDSDKType;
    timestamp?: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header;
    commit?: Commit;
}
export interface SignedHeaderSDKType {
    header?: HeaderSDKType;
    commit?: CommitSDKType;
}
export interface LightBlock {
    signedHeader?: SignedHeader;
    validatorSet?: ValidatorSet;
}
export interface LightBlockSDKType {
    signed_header?: SignedHeaderSDKType;
    validator_set?: ValidatorSetSDKType;
}
export interface BlockMeta {
    blockId?: BlockID;
    blockSize: Long;
    header?: Header;
    numTxs: Long;
}
export interface BlockMetaSDKType {
    block_id?: BlockIDSDKType;
    block_size: Long;
    header?: HeaderSDKType;
    num_txs: Long;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof?: Proof;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof?: ProofSDKType;
}
export declare const PartSetHeader: {
    encode(message: PartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader;
    fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader;
};
export declare const Part: {
    encode(message: Part, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Part;
    fromPartial(object: DeepPartial<Part>): Part;
};
export declare const BlockID: {
    encode(message: BlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockID;
    fromPartial(object: DeepPartial<BlockID>): BlockID;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromPartial(object: DeepPartial<Header>): Header;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data;
    fromPartial(object: DeepPartial<Data>): Data;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
export declare const Commit: {
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commit;
    fromPartial(object: DeepPartial<Commit>): Commit;
};
export declare const CommitSig: {
    encode(message: CommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig;
    fromPartial(object: DeepPartial<CommitSig>): CommitSig;
};
export declare const ExtendedCommit: {
    encode(message: ExtendedCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommit;
    fromPartial(object: DeepPartial<ExtendedCommit>): ExtendedCommit;
};
export declare const ExtendedCommitSig: {
    encode(message: ExtendedCommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitSig;
    fromPartial(object: DeepPartial<ExtendedCommitSig>): ExtendedCommitSig;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const SignedHeader: {
    encode(message: SignedHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader;
    fromPartial(object: DeepPartial<SignedHeader>): SignedHeader;
};
export declare const LightBlock: {
    encode(message: LightBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock;
    fromPartial(object: DeepPartial<LightBlock>): LightBlock;
};
export declare const BlockMeta: {
    encode(message: BlockMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta;
    fromPartial(object: DeepPartial<BlockMeta>): BlockMeta;
};
export declare const TxProof: {
    encode(message: TxProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxProof;
    fromPartial(object: DeepPartial<TxProof>): TxProof;
};
