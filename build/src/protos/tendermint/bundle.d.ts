import * as _260 from './abci/types.js';
import * as _261 from './crypto/keys.js';
import * as _262 from './crypto/proof.js';
import * as _263 from './libs/bits/types.js';
import * as _264 from './p2p/types.js';
import * as _265 from './types/block.js';
import * as _266 from './types/evidence.js';
import * as _267 from './types/params.js';
import * as _268 from './types/types.js';
import * as _269 from './types/validator.js';
import * as _270 from './version/types.js';
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _260.CheckTxType;
        checkTxTypeToJSON(object: _260.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _260.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _260.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _260.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _260.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _260.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _260.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _260.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _260.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _260.MisbehaviorType;
        misbehaviorTypeToJSON(object: _260.MisbehaviorType): string;
        CheckTxType: typeof _260.CheckTxType;
        CheckTxTypeSDKType: typeof _260.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _260.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _260.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _260.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _260.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _260.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _260.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _260.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _260.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _260.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _260.MisbehaviorType;
        Request: {
            encode(message: _260.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Request;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Request>): _260.Request;
        };
        RequestEcho: {
            encode(message: _260.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestEcho;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestEcho>): _260.RequestEcho;
        };
        RequestFlush: {
            encode(_: _260.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestFlush;
            fromPartial(_: import("../helpers.js").DeepPartial<_260.RequestFlush>): _260.RequestFlush;
        };
        RequestInfo: {
            encode(message: _260.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestInfo>): _260.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _260.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestInitChain;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestInitChain>): _260.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _260.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestQuery;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestQuery>): _260.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _260.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestCheckTx;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestCheckTx>): _260.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _260.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestCommit;
            fromPartial(_: import("../helpers.js").DeepPartial<_260.RequestCommit>): _260.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _260.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestListSnapshots;
            fromPartial(_: import("../helpers.js").DeepPartial<_260.RequestListSnapshots>): _260.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _260.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestOfferSnapshot;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestOfferSnapshot>): _260.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _260.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestLoadSnapshotChunk;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestLoadSnapshotChunk>): _260.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _260.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestApplySnapshotChunk;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestApplySnapshotChunk>): _260.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _260.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestPrepareProposal;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestPrepareProposal>): _260.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _260.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestProcessProposal;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestProcessProposal>): _260.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _260.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestExtendVote;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestExtendVote>): _260.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _260.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestVerifyVoteExtension;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestVerifyVoteExtension>): _260.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _260.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.RequestFinalizeBlock;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.RequestFinalizeBlock>): _260.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _260.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Response;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Response>): _260.Response;
        };
        ResponseException: {
            encode(message: _260.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseException;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseException>): _260.ResponseException;
        };
        ResponseEcho: {
            encode(message: _260.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseEcho;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseEcho>): _260.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _260.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseFlush;
            fromPartial(_: import("../helpers.js").DeepPartial<_260.ResponseFlush>): _260.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _260.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseInfo>): _260.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _260.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseInitChain;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseInitChain>): _260.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _260.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseQuery;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseQuery>): _260.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _260.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseCheckTx;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseCheckTx>): _260.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _260.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseCommit;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseCommit>): _260.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _260.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseListSnapshots;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseListSnapshots>): _260.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _260.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseOfferSnapshot;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseOfferSnapshot>): _260.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _260.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseLoadSnapshotChunk;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseLoadSnapshotChunk>): _260.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _260.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseApplySnapshotChunk;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseApplySnapshotChunk>): _260.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _260.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponsePrepareProposal;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponsePrepareProposal>): _260.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _260.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseProcessProposal;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseProcessProposal>): _260.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _260.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseExtendVote;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseExtendVote>): _260.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _260.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseVerifyVoteExtension;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseVerifyVoteExtension>): _260.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _260.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ResponseFinalizeBlock;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ResponseFinalizeBlock>): _260.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _260.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.CommitInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.CommitInfo>): _260.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _260.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ExtendedCommitInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ExtendedCommitInfo>): _260.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _260.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Event;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Event>): _260.Event;
        };
        EventAttribute: {
            encode(message: _260.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.EventAttribute;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.EventAttribute>): _260.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _260.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ExecTxResult;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ExecTxResult>): _260.ExecTxResult;
        };
        TxResult: {
            encode(message: _260.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.TxResult;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.TxResult>): _260.TxResult;
        };
        Validator: {
            encode(message: _260.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Validator;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Validator>): _260.Validator;
        };
        ValidatorUpdate: {
            encode(message: _260.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ValidatorUpdate;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ValidatorUpdate>): _260.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _260.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.VoteInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.VoteInfo>): _260.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _260.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.ExtendedVoteInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.ExtendedVoteInfo>): _260.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _260.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Misbehavior;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Misbehavior>): _260.Misbehavior;
        };
        Snapshot: {
            encode(message: _260.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _260.Snapshot;
            fromPartial(object: import("../helpers.js").DeepPartial<_260.Snapshot>): _260.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _262.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _262.Proof;
            fromPartial(object: import("../helpers.js").DeepPartial<_262.Proof>): _262.Proof;
        };
        ValueOp: {
            encode(message: _262.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _262.ValueOp;
            fromPartial(object: import("../helpers.js").DeepPartial<_262.ValueOp>): _262.ValueOp;
        };
        DominoOp: {
            encode(message: _262.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _262.DominoOp;
            fromPartial(object: import("../helpers.js").DeepPartial<_262.DominoOp>): _262.DominoOp;
        };
        ProofOp: {
            encode(message: _262.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _262.ProofOp;
            fromPartial(object: import("../helpers.js").DeepPartial<_262.ProofOp>): _262.ProofOp;
        };
        ProofOps: {
            encode(message: _262.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _262.ProofOps;
            fromPartial(object: import("../helpers.js").DeepPartial<_262.ProofOps>): _262.ProofOps;
        };
        PublicKey: {
            encode(message: _261.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _261.PublicKey;
            fromPartial(object: import("../helpers.js").DeepPartial<_261.PublicKey>): _261.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _263.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _263.BitArray;
                fromPartial(object: import("../helpers.js").DeepPartial<_263.BitArray>): _263.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _264.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _264.NetAddress;
            fromPartial(object: import("../helpers.js").DeepPartial<_264.NetAddress>): _264.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _264.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _264.ProtocolVersion;
            fromPartial(object: import("../helpers.js").DeepPartial<_264.ProtocolVersion>): _264.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _264.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _264.DefaultNodeInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_264.DefaultNodeInfo>): _264.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _264.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _264.DefaultNodeInfoOther;
            fromPartial(object: import("../helpers.js").DeepPartial<_264.DefaultNodeInfoOther>): _264.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _269.BlockIDFlag;
        blockIDFlagToJSON(object: _269.BlockIDFlag): string;
        BlockIDFlag: typeof _269.BlockIDFlag;
        BlockIDFlagSDKType: typeof _269.BlockIDFlag;
        ValidatorSet: {
            encode(message: _269.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _269.ValidatorSet;
            fromPartial(object: import("../helpers.js").DeepPartial<_269.ValidatorSet>): _269.ValidatorSet;
        };
        Validator: {
            encode(message: _269.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _269.Validator;
            fromPartial(object: import("../helpers.js").DeepPartial<_269.Validator>): _269.Validator;
        };
        SimpleValidator: {
            encode(message: _269.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _269.SimpleValidator;
            fromPartial(object: import("../helpers.js").DeepPartial<_269.SimpleValidator>): _269.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _268.SignedMsgType;
        signedMsgTypeToJSON(object: _268.SignedMsgType): string;
        SignedMsgType: typeof _268.SignedMsgType;
        SignedMsgTypeSDKType: typeof _268.SignedMsgType;
        PartSetHeader: {
            encode(message: _268.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.PartSetHeader;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.PartSetHeader>): _268.PartSetHeader;
        };
        Part: {
            encode(message: _268.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Part;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Part>): _268.Part;
        };
        BlockID: {
            encode(message: _268.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.BlockID;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.BlockID>): _268.BlockID;
        };
        Header: {
            encode(message: _268.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Header;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Header>): _268.Header;
        };
        Data: {
            encode(message: _268.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Data;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Data>): _268.Data;
        };
        Vote: {
            encode(message: _268.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Vote;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Vote>): _268.Vote;
        };
        Commit: {
            encode(message: _268.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Commit;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Commit>): _268.Commit;
        };
        CommitSig: {
            encode(message: _268.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.CommitSig;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.CommitSig>): _268.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _268.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.ExtendedCommit;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.ExtendedCommit>): _268.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _268.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.ExtendedCommitSig;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.ExtendedCommitSig>): _268.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _268.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.Proposal;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.Proposal>): _268.Proposal;
        };
        SignedHeader: {
            encode(message: _268.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.SignedHeader;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.SignedHeader>): _268.SignedHeader;
        };
        LightBlock: {
            encode(message: _268.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.LightBlock;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.LightBlock>): _268.LightBlock;
        };
        BlockMeta: {
            encode(message: _268.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.BlockMeta;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.BlockMeta>): _268.BlockMeta;
        };
        TxProof: {
            encode(message: _268.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _268.TxProof;
            fromPartial(object: import("../helpers.js").DeepPartial<_268.TxProof>): _268.TxProof;
        };
        ConsensusParams: {
            encode(message: _267.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.ConsensusParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.ConsensusParams>): _267.ConsensusParams;
        };
        BlockParams: {
            encode(message: _267.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.BlockParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.BlockParams>): _267.BlockParams;
        };
        EvidenceParams: {
            encode(message: _267.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.EvidenceParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.EvidenceParams>): _267.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _267.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.ValidatorParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.ValidatorParams>): _267.ValidatorParams;
        };
        VersionParams: {
            encode(message: _267.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.VersionParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.VersionParams>): _267.VersionParams;
        };
        HashedParams: {
            encode(message: _267.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.HashedParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.HashedParams>): _267.HashedParams;
        };
        ABCIParams: {
            encode(message: _267.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _267.ABCIParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_267.ABCIParams>): _267.ABCIParams;
        };
        Evidence: {
            encode(message: _266.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _266.Evidence;
            fromPartial(object: import("../helpers.js").DeepPartial<_266.Evidence>): _266.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _266.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _266.DuplicateVoteEvidence;
            fromPartial(object: import("../helpers.js").DeepPartial<_266.DuplicateVoteEvidence>): _266.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _266.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _266.LightClientAttackEvidence;
            fromPartial(object: import("../helpers.js").DeepPartial<_266.LightClientAttackEvidence>): _266.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _266.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _266.EvidenceList;
            fromPartial(object: import("../helpers.js").DeepPartial<_266.EvidenceList>): _266.EvidenceList;
        };
        Block: {
            encode(message: _265.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _265.Block;
            fromPartial(object: import("../helpers.js").DeepPartial<_265.Block>): _265.Block;
        };
    };
    const version: {
        App: {
            encode(message: _270.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _270.App;
            fromPartial(object: import("../helpers.js").DeepPartial<_270.App>): _270.App;
        };
        Consensus: {
            encode(message: _270.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _270.Consensus;
            fromPartial(object: import("../helpers.js").DeepPartial<_270.Consensus>): _270.Consensus;
        };
    };
}
