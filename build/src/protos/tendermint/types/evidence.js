import { Vote, LightBlock } from './types.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Validator } from './validator.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long, toTimestamp, fromTimestamp, } from '../../helpers.js';
function createBaseEvidence() {
    return {
        duplicateVoteEvidence: undefined,
        lightClientAttackEvidence: undefined,
    };
}
export const Evidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duplicateVoteEvidence !== undefined) {
            DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicateVoteEvidence =
            object.duplicateVoteEvidence !== undefined &&
                object.duplicateVoteEvidence !== null
                ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence)
                : undefined;
        message.lightClientAttackEvidence =
            object.lightClientAttackEvidence !== undefined &&
                object.lightClientAttackEvidence !== null
                ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence)
                : undefined;
        return message;
    },
};
function createBaseDuplicateVoteEvidence() {
    return {
        voteA: undefined,
        voteB: undefined,
        totalVotingPower: Long.ZERO,
        validatorPower: Long.ZERO,
        timestamp: undefined,
    };
}
export const DuplicateVoteEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voteA !== undefined) {
            Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (!message.validatorPower.isZero()) {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteA = Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voteB = Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = reader.int64();
                    break;
                case 4:
                    message.validatorPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDuplicateVoteEvidence();
        message.voteA =
            object.voteA !== undefined && object.voteA !== null
                ? Vote.fromPartial(object.voteA)
                : undefined;
        message.voteB =
            object.voteB !== undefined && object.voteB !== null
                ? Vote.fromPartial(object.voteB)
                : undefined;
        message.totalVotingPower =
            object.totalVotingPower !== undefined && object.totalVotingPower !== null
                ? Long.fromValue(object.totalVotingPower)
                : Long.ZERO;
        message.validatorPower =
            object.validatorPower !== undefined && object.validatorPower !== null
                ? Long.fromValue(object.validatorPower)
                : Long.ZERO;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: undefined,
        commonHeight: Long.ZERO,
        byzantineValidators: [],
        totalVotingPower: Long.ZERO,
        timestamp: undefined,
    };
}
export const LightClientAttackEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conflictingBlock !== undefined) {
            LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (!message.commonHeight.isZero()) {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (const v of message.byzantineValidators) {
            Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commonHeight = reader.int64();
                    break;
                case 3:
                    message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalVotingPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLightClientAttackEvidence();
        message.conflictingBlock =
            object.conflictingBlock !== undefined && object.conflictingBlock !== null
                ? LightBlock.fromPartial(object.conflictingBlock)
                : undefined;
        message.commonHeight =
            object.commonHeight !== undefined && object.commonHeight !== null
                ? Long.fromValue(object.commonHeight)
                : Long.ZERO;
        message.byzantineValidators =
            object.byzantineValidators?.map((e) => Validator.fromPartial(e)) || [];
        message.totalVotingPower =
            object.totalVotingPower !== undefined && object.totalVotingPower !== null
                ? Long.fromValue(object.totalVotingPower)
                : Long.ZERO;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
};
function createBaseEvidenceList() {
    return {
        evidence: [],
    };
}
export const EvidenceList = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceList();
        message.evidence =
            object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=evidence.js.map