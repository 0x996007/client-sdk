import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryConstitutionRequest, QueryConstitutionResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.constitution = this.constitution.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    constitution(request = {}) {
        const data = QueryConstitutionRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Constitution', data);
        return promise.then((data) => QueryConstitutionResponse.decode(new _m0.Reader(data)));
    }
    proposal(request) {
        const data = QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Proposal', data);
        return promise.then((data) => QueryProposalResponse.decode(new _m0.Reader(data)));
    }
    proposals(request) {
        const data = QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Proposals', data);
        return promise.then((data) => QueryProposalsResponse.decode(new _m0.Reader(data)));
    }
    vote(request) {
        const data = QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Vote', data);
        return promise.then((data) => QueryVoteResponse.decode(new _m0.Reader(data)));
    }
    votes(request) {
        const data = QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Votes', data);
        return promise.then((data) => QueryVotesResponse.decode(new _m0.Reader(data)));
    }
    params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    deposit(request) {
        const data = QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Deposit', data);
        return promise.then((data) => QueryDepositResponse.decode(new _m0.Reader(data)));
    }
    deposits(request) {
        const data = QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'Deposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    tallyResult(request) {
        const data = QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.gov.v1.Query', 'TallyResult', data);
        return promise.then((data) => QueryTallyResultResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        constitution(request) {
            return queryService.constitution(request);
        },
        proposal(request) {
            return queryService.proposal(request);
        },
        proposals(request) {
            return queryService.proposals(request);
        },
        vote(request) {
            return queryService.vote(request);
        },
        votes(request) {
            return queryService.votes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        deposit(request) {
            return queryService.deposit(request);
        },
        deposits(request) {
            return queryService.deposits(request);
        },
        tallyResult(request) {
            return queryService.tallyResult(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map