/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import { Duration, } from '../../../google/protobuf/duration.js';
import { Any } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp, Long, } from '../../../helpers.js';
/** VoteOption enumerates the valid vote options for a given proposal. */
export var VoteOption;
(function (VoteOption) {
    /**
     * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
     * return an error.
     */
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
/** ProposalStatus defines proposal statuses. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /**
     * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
     * passes the group policy's decision policy.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
    /**
     * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
     * is rejected by the group policy's decision policy.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
     * final tally.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
     * When this happens the final status is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));
export const ProposalStatusSDKType = ProposalStatus;
export function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'PROPOSAL_STATUS_UNSPECIFIED':
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case 'PROPOSAL_STATUS_SUBMITTED':
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case 'PROPOSAL_STATUS_ACCEPTED':
            return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
        case 3:
        case 'PROPOSAL_STATUS_REJECTED':
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 4:
        case 'PROPOSAL_STATUS_ABORTED':
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 5:
        case 'PROPOSAL_STATUS_WITHDRAWN':
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return 'PROPOSAL_STATUS_SUBMITTED';
        case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
            return 'PROPOSAL_STATUS_ACCEPTED';
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return 'PROPOSAL_STATUS_REJECTED';
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return 'PROPOSAL_STATUS_ABORTED';
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return 'PROPOSAL_STATUS_WITHDRAWN';
        case ProposalStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResult || (ProposalExecutorResult = {}));
export const ProposalExecutorResultSDKType = ProposalExecutorResult;
export function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case 'PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED':
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case 'PROPOSAL_EXECUTOR_RESULT_NOT_RUN':
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case 'PROPOSAL_EXECUTOR_RESULT_SUCCESS':
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case 'PROPOSAL_EXECUTOR_RESULT_FAILURE':
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
export function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return 'PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED';
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return 'PROPOSAL_EXECUTOR_RESULT_NOT_RUN';
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return 'PROPOSAL_EXECUTOR_RESULT_SUCCESS';
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return 'PROPOSAL_EXECUTOR_RESULT_FAILURE';
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseMember() {
    return {
        address: '',
        weight: '',
        metadata: '',
        addedAt: undefined,
    };
}
export const Member = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== '') {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        if (message.addedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.addedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.addedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMember();
        message.address = object.address ?? '';
        message.weight = object.weight ?? '';
        message.metadata = object.metadata ?? '';
        message.addedAt = object.addedAt ?? undefined;
        return message;
    },
};
function createBaseMemberRequest() {
    return {
        address: '',
        weight: '',
        metadata: '',
    };
}
export const MemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== '') {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
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
        const message = createBaseMemberRequest();
        message.address = object.address ?? '';
        message.weight = object.weight ?? '';
        message.metadata = object.metadata ?? '';
        return message;
    },
};
function createBaseThresholdDecisionPolicy() {
    return {
        threshold: '',
        windows: undefined,
    };
}
export const ThresholdDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== '') {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseThresholdDecisionPolicy();
        message.threshold = object.threshold ?? '';
        message.windows =
            object.windows !== undefined && object.windows !== null
                ? DecisionPolicyWindows.fromPartial(object.windows)
                : undefined;
        return message;
    },
};
function createBasePercentageDecisionPolicy() {
    return {
        percentage: '',
        windows: undefined,
    };
}
export const PercentageDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.percentage !== '') {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePercentageDecisionPolicy();
        message.percentage = object.percentage ?? '';
        message.windows =
            object.windows !== undefined && object.windows !== null
                ? DecisionPolicyWindows.fromPartial(object.windows)
                : undefined;
        return message;
    },
};
function createBaseDecisionPolicyWindows() {
    return {
        votingPeriod: undefined,
        minExecutionPeriod: undefined,
    };
}
export const DecisionPolicyWindows = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingPeriod !== undefined) {
            Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.minExecutionPeriod !== undefined) {
            Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecisionPolicyWindows();
        message.votingPeriod =
            object.votingPeriod !== undefined && object.votingPeriod !== null
                ? Duration.fromPartial(object.votingPeriod)
                : undefined;
        message.minExecutionPeriod =
            object.minExecutionPeriod !== undefined &&
                object.minExecutionPeriod !== null
                ? Duration.fromPartial(object.minExecutionPeriod)
                : undefined;
        return message;
    },
};
function createBaseGroupInfo() {
    return {
        id: Long.UZERO,
        admin: '',
        metadata: '',
        version: Long.UZERO,
        totalWeight: '',
        createdAt: undefined,
    };
}
export const GroupInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== '') {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.totalWeight !== '') {
            writer.uint32(42).string(message.totalWeight);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.totalWeight = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupInfo();
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.admin = object.admin ?? '';
        message.metadata = object.metadata ?? '';
        message.version =
            object.version !== undefined && object.version !== null
                ? Long.fromValue(object.version)
                : Long.UZERO;
        message.totalWeight = object.totalWeight ?? '';
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};
function createBaseGroupMember() {
    return {
        groupId: Long.UZERO,
        member: undefined,
    };
}
export const GroupMember = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.member !== undefined) {
            Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.member = Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupMember();
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? Long.fromValue(object.groupId)
                : Long.UZERO;
        message.member =
            object.member !== undefined && object.member !== null
                ? Member.fromPartial(object.member)
                : undefined;
        return message;
    },
};
function createBaseGroupPolicyInfo() {
    return {
        address: '',
        groupId: Long.UZERO,
        admin: '',
        metadata: '',
        version: Long.UZERO,
        decisionPolicy: undefined,
        createdAt: undefined,
    };
}
export const GroupPolicyInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.admin !== '') {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupPolicyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupPolicyInfo();
        message.address = object.address ?? '';
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? Long.fromValue(object.groupId)
                : Long.UZERO;
        message.admin = object.admin ?? '';
        message.metadata = object.metadata ?? '';
        message.version =
            object.version !== undefined && object.version !== null
                ? Long.fromValue(object.version)
                : Long.UZERO;
        message.decisionPolicy =
            object.decisionPolicy !== undefined && object.decisionPolicy !== null
                ? Any.fromPartial(object.decisionPolicy)
                : undefined;
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
};
function createBaseProposal() {
    return {
        id: Long.UZERO,
        groupPolicyAddress: '',
        metadata: '',
        proposers: [],
        submitTime: undefined,
        groupVersion: Long.UZERO,
        groupPolicyVersion: Long.UZERO,
        status: 0,
        finalTallyResult: undefined,
        votingPeriodEnd: undefined,
        executorResult: 0,
        messages: [],
        title: '',
        summary: '',
    };
}
export const Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.groupPolicyAddress !== '') {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.metadata !== '') {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submitTime !== undefined) {
            Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (!message.groupVersion.isZero()) {
            writer.uint32(48).uint64(message.groupVersion);
        }
        if (!message.groupPolicyVersion.isZero()) {
            writer.uint32(56).uint64(message.groupPolicyVersion);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            TallyResult.encode(message.finalTallyResult, writer.uint32(74).fork()).ldelim();
        }
        if (message.votingPeriodEnd !== undefined) {
            Timestamp.encode(toTimestamp(message.votingPeriodEnd), writer.uint32(82).fork()).ldelim();
        }
        if (message.executorResult !== 0) {
            writer.uint32(88).int32(message.executorResult);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(106).string(message.title);
        }
        if (message.summary !== '') {
            writer.uint32(114).string(message.summary);
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
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groupVersion = reader.uint64();
                    break;
                case 7:
                    message.groupPolicyVersion = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.votingPeriodEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.executorResult = reader.int32();
                    break;
                case 12:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.title = reader.string();
                    break;
                case 14:
                    message.summary = reader.string();
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
        message.groupPolicyAddress = object.groupPolicyAddress ?? '';
        message.metadata = object.metadata ?? '';
        message.proposers = object.proposers?.map((e) => e) || [];
        message.submitTime = object.submitTime ?? undefined;
        message.groupVersion =
            object.groupVersion !== undefined && object.groupVersion !== null
                ? Long.fromValue(object.groupVersion)
                : Long.UZERO;
        message.groupPolicyVersion =
            object.groupPolicyVersion !== undefined &&
                object.groupPolicyVersion !== null
                ? Long.fromValue(object.groupPolicyVersion)
                : Long.UZERO;
        message.status = object.status ?? 0;
        message.finalTallyResult =
            object.finalTallyResult !== undefined && object.finalTallyResult !== null
                ? TallyResult.fromPartial(object.finalTallyResult)
                : undefined;
        message.votingPeriodEnd = object.votingPeriodEnd ?? undefined;
        message.executorResult = object.executorResult ?? 0;
        message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
        message.title = object.title ?? '';
        message.summary = object.summary ?? '';
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
        option: 0,
        metadata: '',
        submitTime: undefined,
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
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submitTime !== undefined) {
            Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
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
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? '';
        message.submitTime = object.submitTime ?? undefined;
        return message;
    },
};
//# sourceMappingURL=types.js.map