/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coin } from '../../base/v1beta1/coin.js';
import { Any } from '../../../google/protobuf/any.js';
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import { Duration, } from '../../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long, toTimestamp, fromTimestamp, } from '../../../helpers.js';
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));
export const VoteOptionSDKType = VoteOption;
export function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case 'VOTE_OPTION_UNSPECIFIED':
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case 'VOTE_OPTION_YES':
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case 'VOTE_OPTION_ABSTAIN':
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case 'VOTE_OPTION_NO':
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case 'VOTE_OPTION_NO_WITH_VETO':
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
export function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return 'VOTE_OPTION_UNSPECIFIED';
        case VoteOption.VOTE_OPTION_YES:
            return 'VOTE_OPTION_YES';
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return 'VOTE_OPTION_ABSTAIN';
        case VoteOption.VOTE_OPTION_NO:
            return 'VOTE_OPTION_NO';
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return 'VOTE_OPTION_NO_WITH_VETO';
        case VoteOption.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));
export const ProposalStatusSDKType = ProposalStatus;
export function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'PROPOSAL_STATUS_UNSPECIFIED':
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case 'PROPOSAL_STATUS_DEPOSIT_PERIOD':
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case 'PROPOSAL_STATUS_VOTING_PERIOD':
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case 'PROPOSAL_STATUS_PASSED':
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case 'PROPOSAL_STATUS_REJECTED':
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case 'PROPOSAL_STATUS_FAILED':
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
export function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return 'PROPOSAL_STATUS_UNSPECIFIED';
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return 'PROPOSAL_STATUS_DEPOSIT_PERIOD';
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return 'PROPOSAL_STATUS_VOTING_PERIOD';
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return 'PROPOSAL_STATUS_PASSED';
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return 'PROPOSAL_STATUS_REJECTED';
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return 'PROPOSAL_STATUS_FAILED';
        case ProposalStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: '',
    };
}
export const WeightedVoteOption = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== '') {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? '';
        return message;
    },
};
function createBaseDeposit() {
    return {
        proposalId: Long.UZERO,
        depositor: '',
        amount: [],
    };
}
export const Deposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== '') {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? Long.fromValue(object.proposalId)
                : Long.UZERO;
        message.depositor = object.depositor ?? '';
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseProposal() {
    return {
        id: Long.UZERO,
        messages: [],
        status: 0,
        finalTallyResult: undefined,
        submitTime: undefined,
        depositEndTime: undefined,
        totalDeposit: [],
        votingStartTime: undefined,
        votingEndTime: undefined,
        metadata: '',
        title: '',
        summary: '',
        proposer: '',
        expedited: false,
        failedReason: '',
    };
}
export const Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
        }
        if (message.submitTime !== undefined) {
            Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depositEndTime !== undefined) {
            Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.totalDeposit) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.votingStartTime !== undefined) {
            Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.votingEndTime !== undefined) {
            Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.metadata !== '') {
            writer.uint32(82).string(message.metadata);
        }
        if (message.title !== '') {
            writer.uint32(90).string(message.title);
        }
        if (message.summary !== '') {
            writer.uint32(98).string(message.summary);
        }
        if (message.proposer !== '') {
            writer.uint32(106).string(message.proposer);
        }
        if (message.expedited === true) {
            writer.uint32(112).bool(message.expedited);
        }
        if (message.failedReason !== '') {
            writer.uint32(122).string(message.failedReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.metadata = reader.string();
                    break;
                case 11:
                    message.title = reader.string();
                    break;
                case 12:
                    message.summary = reader.string();
                    break;
                case 13:
                    message.proposer = reader.string();
                    break;
                case 14:
                    message.expedited = reader.bool();
                    break;
                case 15:
                    message.failedReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
        message.status = object.status ?? 0;
        message.finalTallyResult =
            object.finalTallyResult !== undefined && object.finalTallyResult !== null
                ? TallyResult.fromPartial(object.finalTallyResult)
                : undefined;
        message.submitTime = object.submitTime ?? undefined;
        message.depositEndTime = object.depositEndTime ?? undefined;
        message.totalDeposit =
            object.totalDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.votingStartTime = object.votingStartTime ?? undefined;
        message.votingEndTime = object.votingEndTime ?? undefined;
        message.metadata = object.metadata ?? '';
        message.title = object.title ?? '';
        message.summary = object.summary ?? '';
        message.proposer = object.proposer ?? '';
        message.expedited = object.expedited ?? false;
        message.failedReason = object.failedReason ?? '';
        return message;
    },
};
function createBaseTallyResult() {
    return {
        yesCount: '',
        abstainCount: '',
        noCount: '',
        noWithVetoCount: '',
    };
}
export const TallyResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.yesCount !== '') {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== '') {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== '') {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== '') {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yesCount = object.yesCount ?? '';
        message.abstainCount = object.abstainCount ?? '';
        message.noCount = object.noCount ?? '';
        message.noWithVetoCount = object.noWithVetoCount ?? '';
        return message;
    },
};
function createBaseVote() {
    return {
        proposalId: Long.UZERO,
        voter: '',
        options: [],
        metadata: '',
    };
}
export const Vote = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== '') {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== '') {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 4:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? Long.fromValue(object.proposalId)
                : Long.UZERO;
        message.voter = object.voter ?? '';
        message.options =
            object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? '';
        return message;
    },
};
function createBaseDepositParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined,
    };
}
export const DepositParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.minDeposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.minDeposit =
            object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.maxDepositPeriod =
            object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
                ? Duration.fromPartial(object.maxDepositPeriod)
                : undefined;
        return message;
    },
};
function createBaseVotingParams() {
    return {
        votingPeriod: undefined,
    };
}
export const VotingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingPeriod !== undefined) {
            Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.votingPeriod =
            object.votingPeriod !== undefined && object.votingPeriod !== null
                ? Duration.fromPartial(object.votingPeriod)
                : undefined;
        return message;
    },
};
function createBaseTallyParams() {
    return {
        quorum: '',
        threshold: '',
        vetoThreshold: '',
    };
}
export const TallyParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quorum !== '') {
            writer.uint32(10).string(message.quorum);
        }
        if (message.threshold !== '') {
            writer.uint32(18).string(message.threshold);
        }
        if (message.vetoThreshold !== '') {
            writer.uint32(26).string(message.vetoThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.string();
                    break;
                case 2:
                    message.threshold = reader.string();
                    break;
                case 3:
                    message.vetoThreshold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? '';
        message.threshold = object.threshold ?? '';
        message.vetoThreshold = object.vetoThreshold ?? '';
        return message;
    },
};
function createBaseParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined,
        votingPeriod: undefined,
        quorum: '',
        threshold: '',
        vetoThreshold: '',
        minInitialDepositRatio: '',
        proposalCancelRatio: '',
        proposalCancelDest: '',
        expeditedVotingPeriod: undefined,
        expeditedThreshold: '',
        expeditedMinDeposit: [],
        burnVoteQuorum: false,
        burnProposalDepositPrevote: false,
        burnVoteVeto: false,
        minDepositRatio: '',
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.minDeposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPeriod !== undefined) {
            Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.quorum !== '') {
            writer.uint32(34).string(message.quorum);
        }
        if (message.threshold !== '') {
            writer.uint32(42).string(message.threshold);
        }
        if (message.vetoThreshold !== '') {
            writer.uint32(50).string(message.vetoThreshold);
        }
        if (message.minInitialDepositRatio !== '') {
            writer.uint32(58).string(message.minInitialDepositRatio);
        }
        if (message.proposalCancelRatio !== '') {
            writer.uint32(66).string(message.proposalCancelRatio);
        }
        if (message.proposalCancelDest !== '') {
            writer.uint32(74).string(message.proposalCancelDest);
        }
        if (message.expeditedVotingPeriod !== undefined) {
            Duration.encode(message.expeditedVotingPeriod, writer.uint32(82).fork()).ldelim();
        }
        if (message.expeditedThreshold !== '') {
            writer.uint32(90).string(message.expeditedThreshold);
        }
        for (const v of message.expeditedMinDeposit) {
            Coin.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.burnVoteQuorum === true) {
            writer.uint32(104).bool(message.burnVoteQuorum);
        }
        if (message.burnProposalDepositPrevote === true) {
            writer.uint32(112).bool(message.burnProposalDepositPrevote);
        }
        if (message.burnVoteVeto === true) {
            writer.uint32(120).bool(message.burnVoteVeto);
        }
        if (message.minDepositRatio !== '') {
            writer.uint32(130).string(message.minDepositRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quorum = reader.string();
                    break;
                case 5:
                    message.threshold = reader.string();
                    break;
                case 6:
                    message.vetoThreshold = reader.string();
                    break;
                case 7:
                    message.minInitialDepositRatio = reader.string();
                    break;
                case 8:
                    message.proposalCancelRatio = reader.string();
                    break;
                case 9:
                    message.proposalCancelDest = reader.string();
                    break;
                case 10:
                    message.expeditedVotingPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.expeditedThreshold = reader.string();
                    break;
                case 12:
                    message.expeditedMinDeposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.burnVoteQuorum = reader.bool();
                    break;
                case 14:
                    message.burnProposalDepositPrevote = reader.bool();
                    break;
                case 15:
                    message.burnVoteVeto = reader.bool();
                    break;
                case 16:
                    message.minDepositRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minDeposit =
            object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.maxDepositPeriod =
            object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
                ? Duration.fromPartial(object.maxDepositPeriod)
                : undefined;
        message.votingPeriod =
            object.votingPeriod !== undefined && object.votingPeriod !== null
                ? Duration.fromPartial(object.votingPeriod)
                : undefined;
        message.quorum = object.quorum ?? '';
        message.threshold = object.threshold ?? '';
        message.vetoThreshold = object.vetoThreshold ?? '';
        message.minInitialDepositRatio = object.minInitialDepositRatio ?? '';
        message.proposalCancelRatio = object.proposalCancelRatio ?? '';
        message.proposalCancelDest = object.proposalCancelDest ?? '';
        message.expeditedVotingPeriod =
            object.expeditedVotingPeriod !== undefined &&
                object.expeditedVotingPeriod !== null
                ? Duration.fromPartial(object.expeditedVotingPeriod)
                : undefined;
        message.expeditedThreshold = object.expeditedThreshold ?? '';
        message.expeditedMinDeposit =
            object.expeditedMinDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.burnVoteQuorum = object.burnVoteQuorum ?? false;
        message.burnProposalDepositPrevote =
            object.burnProposalDepositPrevote ?? false;
        message.burnVoteVeto = object.burnVoteVeto ?? false;
        message.minDepositRatio = object.minDepositRatio ?? '';
        return message;
    },
};
//# sourceMappingURL=gov.js.map