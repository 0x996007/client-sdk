import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.evidence = this.evidence.bind(this);
        this.allEvidence = this.allEvidence.bind(this);
    }
    evidence(request) {
        const data = QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.evidence.v1beta1.Query', 'Evidence', data);
        return promise.then((data) => QueryEvidenceResponse.decode(new _m0.Reader(data)));
    }
    allEvidence(request = {
        pagination: undefined,
    }) {
        const data = QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request('cosmos.evidence.v1beta1.Query', 'AllEvidence', data);
        return promise.then((data) => QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        evidence(request) {
            return queryService.evidence(request);
        },
        allEvidence(request) {
            return queryService.allEvidence(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map