import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryEventParamsRequest, QueryEventParamsResponse, QueryProposeParamsRequest, QueryProposeParamsResponse, QuerySafetyParamsRequest, QuerySafetyParamsResponse, QueryAcknowledgedEventInfoRequest, QueryAcknowledgedEventInfoResponse, QueryRecognizedEventInfoRequest, QueryRecognizedEventInfoResponse, QueryDelayedCompleteBridgeMessagesRequest, QueryDelayedCompleteBridgeMessagesResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.eventParams = this.eventParams.bind(this);
        this.proposeParams = this.proposeParams.bind(this);
        this.safetyParams = this.safetyParams.bind(this);
        this.acknowledgedEventInfo = this.acknowledgedEventInfo.bind(this);
        this.recognizedEventInfo = this.recognizedEventInfo.bind(this);
        this.delayedCompleteBridgeMessages =
            this.delayedCompleteBridgeMessages.bind(this);
    }
    eventParams(request = {}) {
        const data = QueryEventParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'EventParams', data);
        return promise.then((data) => QueryEventParamsResponse.decode(new _m0.Reader(data)));
    }
    proposeParams(request = {}) {
        const data = QueryProposeParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'ProposeParams', data);
        return promise.then((data) => QueryProposeParamsResponse.decode(new _m0.Reader(data)));
    }
    safetyParams(request = {}) {
        const data = QuerySafetyParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'SafetyParams', data);
        return promise.then((data) => QuerySafetyParamsResponse.decode(new _m0.Reader(data)));
    }
    acknowledgedEventInfo(request = {}) {
        const data = QueryAcknowledgedEventInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'AcknowledgedEventInfo', data);
        return promise.then((data) => QueryAcknowledgedEventInfoResponse.decode(new _m0.Reader(data)));
    }
    recognizedEventInfo(request = {}) {
        const data = QueryRecognizedEventInfoRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'RecognizedEventInfo', data);
        return promise.then((data) => QueryRecognizedEventInfoResponse.decode(new _m0.Reader(data)));
    }
    delayedCompleteBridgeMessages(request) {
        const data = QueryDelayedCompleteBridgeMessagesRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.bridge.Query', 'DelayedCompleteBridgeMessages', data);
        return promise.then((data) => QueryDelayedCompleteBridgeMessagesResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        eventParams(request) {
            return queryService.eventParams(request);
        },
        proposeParams(request) {
            return queryService.proposeParams(request);
        },
        safetyParams(request) {
            return queryService.safetyParams(request);
        },
        acknowledgedEventInfo(request) {
            return queryService.acknowledgedEventInfo(request);
        },
        recognizedEventInfo(request) {
            return queryService.recognizedEventInfo(request);
        },
        delayedCompleteBridgeMessages(request) {
            return queryService.delayedCompleteBridgeMessages(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map