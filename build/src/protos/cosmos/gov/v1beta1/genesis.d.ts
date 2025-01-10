import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType } from './gov.js';
import { Long, DeepPartial } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** deposit_params defines all the parameters related to deposit. */
    depositParams?: DepositParams;
    /** voting_params defines all the parameters related to voting. */
    votingParams?: VotingParams;
    /** tally_params defines all the parameters related to tally. */
    tallyParams?: TallyParams;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
    starting_proposal_id: Long;
    deposits: DepositSDKType[];
    votes: VoteSDKType[];
    proposals: ProposalSDKType[];
    deposit_params?: DepositParamsSDKType;
    voting_params?: VotingParamsSDKType;
    tally_params?: TallyParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
