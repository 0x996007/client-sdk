import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote, } from './types.js';
import { Long } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        groupSeq: Long.UZERO,
        groups: [],
        groupMembers: [],
        groupPolicySeq: Long.UZERO,
        groupPolicies: [],
        proposalSeq: Long.UZERO,
        proposals: [],
        votes: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupSeq.isZero()) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.groupPolicySeq.isZero()) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (!message.proposalSeq.isZero()) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupPolicySeq = reader.uint64();
                    break;
                case 5:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.groupSeq =
            object.groupSeq !== undefined && object.groupSeq !== null
                ? Long.fromValue(object.groupSeq)
                : Long.UZERO;
        message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
        message.groupMembers =
            object.groupMembers?.map((e) => GroupMember.fromPartial(e)) || [];
        message.groupPolicySeq =
            object.groupPolicySeq !== undefined && object.groupPolicySeq !== null
                ? Long.fromValue(object.groupPolicySeq)
                : Long.UZERO;
        message.groupPolicies =
            object.groupPolicies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
        message.proposalSeq =
            object.proposalSeq !== undefined && object.proposalSeq !== null
                ? Long.fromValue(object.proposalSeq)
                : Long.UZERO;
        message.proposals =
            object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map