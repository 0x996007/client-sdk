import * as _m0 from 'protobufjs/minimal.js';
import { MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse, } from './tx.js';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.authorizeCircuitBreaker = this.authorizeCircuitBreaker.bind(this);
        this.tripCircuitBreaker = this.tripCircuitBreaker.bind(this);
        this.resetCircuitBreaker = this.resetCircuitBreaker.bind(this);
    }
    authorizeCircuitBreaker(request) {
        const data = MsgAuthorizeCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Msg', 'AuthorizeCircuitBreaker', data);
        return promise.then((data) => MsgAuthorizeCircuitBreakerResponse.decode(new _m0.Reader(data)));
    }
    tripCircuitBreaker(request) {
        const data = MsgTripCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Msg', 'TripCircuitBreaker', data);
        return promise.then((data) => MsgTripCircuitBreakerResponse.decode(new _m0.Reader(data)));
    }
    resetCircuitBreaker(request) {
        const data = MsgResetCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request('cosmos.circuit.v1.Msg', 'ResetCircuitBreaker', data);
        return promise.then((data) => MsgResetCircuitBreakerResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map