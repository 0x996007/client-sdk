import { ConsensusParams, ConsensusParamsSDKType } from '../types/params.js';
import { ProofOps, ProofOpsSDKType } from '../crypto/proof.js';
import { PublicKey, PublicKeySDKType } from '../crypto/keys.js';
import { BlockIDFlag } from '../types/validator.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum ResponseProcessProposal_ProposalStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare const ResponseProcessProposal_ProposalStatusSDKType: typeof ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string;
export declare enum ResponseVerifyVoteExtension_VerifyStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    /**
     * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
     * Incorrectly implementing this thus has liveness implications as it may affect
     * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
     * Honest nodes should never be rejected.
     */
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare const ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof ResponseVerifyVoteExtension_VerifyStatus;
export declare function responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): ResponseVerifyVoteExtension_VerifyStatus;
export declare function responseVerifyVoteExtension_VerifyStatusToJSON(object: ResponseVerifyVoteExtension_VerifyStatus): string;
export declare enum MisbehaviorType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const MisbehaviorTypeSDKType: typeof MisbehaviorType;
export declare function misbehaviorTypeFromJSON(object: any): MisbehaviorType;
export declare function misbehaviorTypeToJSON(object: MisbehaviorType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    checkTx?: RequestCheckTx;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
    prepareProposal?: RequestPrepareProposal;
    processProposal?: RequestProcessProposal;
    extendVote?: RequestExtendVote;
    verifyVoteExtension?: RequestVerifyVoteExtension;
    finalizeBlock?: RequestFinalizeBlock;
}
export interface RequestSDKType {
    echo?: RequestEchoSDKType;
    flush?: RequestFlushSDKType;
    info?: RequestInfoSDKType;
    init_chain?: RequestInitChainSDKType;
    query?: RequestQuerySDKType;
    check_tx?: RequestCheckTxSDKType;
    commit?: RequestCommitSDKType;
    list_snapshots?: RequestListSnapshotsSDKType;
    offer_snapshot?: RequestOfferSnapshotSDKType;
    load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
    prepare_proposal?: RequestPrepareProposalSDKType;
    process_proposal?: RequestProcessProposalSDKType;
    extend_vote?: RequestExtendVoteSDKType;
    verify_vote_extension?: RequestVerifyVoteExtensionSDKType;
    finalize_block?: RequestFinalizeBlockSDKType;
}
export interface RequestEcho {
    message: string;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    blockVersion: Long;
    p2pVersion: Long;
    abciVersion: string;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: Long;
    p2p_version: Long;
    abci_version: string;
}
export interface RequestInitChain {
    time?: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: Long;
}
export interface RequestInitChainSDKType {
    time?: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: Long;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxSDKType {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCommit {
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
    snapshot?: SnapshotSDKType;
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: Long;
    format: number;
    chunk: number;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: Long;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestPrepareProposal {
    /** the modified transactions cannot exceed this size. */
    maxTxBytes: Long;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    localLastCommit?: ExtendedCommitInfo;
    misbehavior: Misbehavior[];
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposerAddress: Uint8Array;
}
export interface RequestPrepareProposalSDKType {
    max_tx_bytes: Long;
    txs: Uint8Array[];
    local_last_commit?: ExtendedCommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    proposer_address: Uint8Array;
}
export interface RequestProcessProposal {
    txs: Uint8Array[];
    proposedLastCommit?: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface RequestProcessProposalSDKType {
    txs: Uint8Array[];
    proposed_last_commit?: CommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    hash: Uint8Array;
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVote {
    /** the hash of the block that this vote may be referring to */
    hash: Uint8Array;
    /** the height of the extended vote */
    height: Long;
    /** info of the block that this vote may be referring to */
    time?: Date;
    txs: Uint8Array[];
    proposedLastCommit?: CommitInfo;
    misbehavior: Misbehavior[];
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVoteSDKType {
    hash: Uint8Array;
    height: Long;
    time?: Date;
    txs: Uint8Array[];
    proposed_last_commit?: CommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    next_validators_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
    /** the hash of the block that this received vote corresponds to */
    hash: Uint8Array;
    /** the validator that signed the vote extension */
    validatorAddress: Uint8Array;
    height: Long;
    voteExtension: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtensionSDKType {
    hash: Uint8Array;
    validator_address: Uint8Array;
    height: Long;
    vote_extension: Uint8Array;
}
export interface RequestFinalizeBlock {
    txs: Uint8Array[];
    decidedLastCommit?: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the decided block. */
    hash: Uint8Array;
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** proposer_address is the address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface RequestFinalizeBlockSDKType {
    txs: Uint8Array[];
    decided_last_commit?: CommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    hash: Uint8Array;
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    proposer_address: Uint8Array;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    checkTx?: ResponseCheckTx;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
    prepareProposal?: ResponsePrepareProposal;
    processProposal?: ResponseProcessProposal;
    extendVote?: ResponseExtendVote;
    verifyVoteExtension?: ResponseVerifyVoteExtension;
    finalizeBlock?: ResponseFinalizeBlock;
}
export interface ResponseSDKType {
    exception?: ResponseExceptionSDKType;
    echo?: ResponseEchoSDKType;
    flush?: ResponseFlushSDKType;
    info?: ResponseInfoSDKType;
    init_chain?: ResponseInitChainSDKType;
    query?: ResponseQuerySDKType;
    check_tx?: ResponseCheckTxSDKType;
    commit?: ResponseCommitSDKType;
    list_snapshots?: ResponseListSnapshotsSDKType;
    offer_snapshot?: ResponseOfferSnapshotSDKType;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
    prepare_proposal?: ResponsePrepareProposalSDKType;
    process_proposal?: ResponseProcessProposalSDKType;
    extend_vote?: ResponseExtendVoteSDKType;
    verify_vote_extension?: ResponseVerifyVoteExtensionSDKType;
    finalize_block?: ResponseFinalizeBlockSDKType;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: Long;
    lastBlockHeight: Long;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: Long;
    last_block_height: Long;
    last_block_app_hash: Uint8Array;
}
export interface ResponseInitChain {
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseInitChainSDKType {
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    codespace: string;
}
export interface ResponseQuerySDKType {
    code: number;
    log: string;
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
    codespace: string;
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseCommit {
    retainHeight: Long;
}
export interface ResponseCommitSDKType {
    retain_height: Long;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsSDKType {
    snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotSDKType {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkSDKType {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkSDKType {
    result: ResponseApplySnapshotChunk_Result;
    refetch_chunks: number[];
    reject_senders: string[];
}
export interface ResponsePrepareProposal {
    txs: Uint8Array[];
}
export interface ResponsePrepareProposalSDKType {
    txs: Uint8Array[];
}
export interface ResponseProcessProposal {
    status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalSDKType {
    status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseExtendVote {
    voteExtension: Uint8Array;
}
export interface ResponseExtendVoteSDKType {
    vote_extension: Uint8Array;
}
export interface ResponseVerifyVoteExtension {
    status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseVerifyVoteExtensionSDKType {
    status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseFinalizeBlock {
    /** set of block events emmitted as part of executing the block */
    events: Event[];
    /**
     * the result of executing each transaction including the events
     * the particular transction emitted. This should match the order
     * of the transactions delivered in the block itself
     */
    txResults: ExecTxResult[];
    /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
    validatorUpdates: ValidatorUpdate[];
    /** updates to the consensus params, if any. */
    consensusParamUpdates?: ConsensusParams;
    /**
     * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
     * deterministic. It is up to the application to decide which algorithm to use.
     */
    appHash: Uint8Array;
}
export interface ResponseFinalizeBlockSDKType {
    events: EventSDKType[];
    tx_results: ExecTxResultSDKType[];
    validator_updates: ValidatorUpdateSDKType[];
    consensus_param_updates?: ConsensusParamsSDKType;
    app_hash: Uint8Array;
}
export interface CommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface CommitInfoSDKType {
    round: number;
    votes: VoteInfoSDKType[];
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfo {
    /** The round at which the block proposer decided in the previous height. */
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     */
    votes: ExtendedVoteInfo[];
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfoSDKType {
    round: number;
    votes: ExtendedVoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: string;
    value: string;
    index: boolean;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResult {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResultSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ExecTxResult;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ExecTxResultSDKType;
}
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: Long;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    power: Long;
}
export interface ValidatorUpdate {
    pubKey?: PublicKey;
    power: Long;
}
export interface ValidatorUpdateSDKType {
    pub_key?: PublicKeySDKType;
    power: Long;
}
export interface VoteInfo {
    validator?: Validator;
    blockIdFlag: BlockIDFlag;
}
export interface VoteInfoSDKType {
    validator?: ValidatorSDKType;
    block_id_flag: BlockIDFlag;
}
export interface ExtendedVoteInfo {
    /** The validator that sent the vote. */
    validator?: Validator;
    /** Non-deterministic extension provided by the sending validator's application. */
    voteExtension: Uint8Array;
    /** Vote extension signature created by CometBFT */
    extensionSignature: Uint8Array;
    /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
    blockIdFlag: BlockIDFlag;
}
export interface ExtendedVoteInfoSDKType {
    validator?: ValidatorSDKType;
    vote_extension: Uint8Array;
    extension_signature: Uint8Array;
    block_id_flag: BlockIDFlag;
}
export interface Misbehavior {
    type: MisbehaviorType;
    /** The offending validator */
    validator?: Validator;
    /** The height when the offense occurred */
    height: Long;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: Long;
}
export interface MisbehaviorSDKType {
    type: MisbehaviorType;
    validator?: ValidatorSDKType;
    height: Long;
    time?: Date;
    total_voting_power: Long;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: Long;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromPartial(object: DeepPartial<Request>): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromPartial(object: DeepPartial<RequestEcho>): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromPartial(_: DeepPartial<RequestFlush>): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromPartial(object: DeepPartial<RequestInfo>): RequestInfo;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromPartial(object: DeepPartial<RequestQuery>): RequestQuery;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromPartial(_: DeepPartial<RequestCommit>): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
};
export declare const RequestPrepareProposal: {
    encode(message: RequestPrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPrepareProposal;
    fromPartial(object: DeepPartial<RequestPrepareProposal>): RequestPrepareProposal;
};
export declare const RequestProcessProposal: {
    encode(message: RequestProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposal;
    fromPartial(object: DeepPartial<RequestProcessProposal>): RequestProcessProposal;
};
export declare const RequestExtendVote: {
    encode(message: RequestExtendVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestExtendVote;
    fromPartial(object: DeepPartial<RequestExtendVote>): RequestExtendVote;
};
export declare const RequestVerifyVoteExtension: {
    encode(message: RequestVerifyVoteExtension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestVerifyVoteExtension;
    fromPartial(object: DeepPartial<RequestVerifyVoteExtension>): RequestVerifyVoteExtension;
};
export declare const RequestFinalizeBlock: {
    encode(message: RequestFinalizeBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFinalizeBlock;
    fromPartial(object: DeepPartial<RequestFinalizeBlock>): RequestFinalizeBlock;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromPartial(object: DeepPartial<Response>): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromPartial(object: DeepPartial<ResponseException>): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
};
export declare const ResponsePrepareProposal: {
    encode(message: ResponsePrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePrepareProposal;
    fromPartial(object: DeepPartial<ResponsePrepareProposal>): ResponsePrepareProposal;
};
export declare const ResponseProcessProposal: {
    encode(message: ResponseProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseProcessProposal;
    fromPartial(object: DeepPartial<ResponseProcessProposal>): ResponseProcessProposal;
};
export declare const ResponseExtendVote: {
    encode(message: ResponseExtendVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseExtendVote;
    fromPartial(object: DeepPartial<ResponseExtendVote>): ResponseExtendVote;
};
export declare const ResponseVerifyVoteExtension: {
    encode(message: ResponseVerifyVoteExtension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseVerifyVoteExtension;
    fromPartial(object: DeepPartial<ResponseVerifyVoteExtension>): ResponseVerifyVoteExtension;
};
export declare const ResponseFinalizeBlock: {
    encode(message: ResponseFinalizeBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFinalizeBlock;
    fromPartial(object: DeepPartial<ResponseFinalizeBlock>): ResponseFinalizeBlock;
};
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromPartial(object: DeepPartial<CommitInfo>): CommitInfo;
};
export declare const ExtendedCommitInfo: {
    encode(message: ExtendedCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo;
    fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromPartial(object: DeepPartial<EventAttribute>): EventAttribute;
};
export declare const ExecTxResult: {
    encode(message: ExecTxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecTxResult;
    fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromPartial(object: DeepPartial<VoteInfo>): VoteInfo;
};
export declare const ExtendedVoteInfo: {
    encode(message: ExtendedVoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo;
    fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo;
};
export declare const Misbehavior: {
    encode(message: Misbehavior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior;
    fromPartial(object: DeepPartial<Misbehavior>): Misbehavior;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
