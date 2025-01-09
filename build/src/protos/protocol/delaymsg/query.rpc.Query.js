import * as _m0 from 'protobufjs/minimal.js';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryNextDelayedMessageIdRequest, QueryNextDelayedMessageIdResponse, QueryMessageRequest, QueryMessageResponse, QueryBlockMessageIdsRequest, QueryBlockMessageIdsResponse, } from './query.js';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.nextDelayedMessageId = this.nextDelayedMessageId.bind(this);
        this.message = this.message.bind(this);
        this.blockMessageIds = this.blockMessageIds.bind(this);
    }
    nextDelayedMessageId(request = {}) {
        const data = QueryNextDelayedMessageIdRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.delaymsg.Query', 'NextDelayedMessageId', data);
        return promise.then((data) => QueryNextDelayedMessageIdResponse.decode(new _m0.Reader(data)));
    }
    message(request) {
        const data = QueryMessageRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.delaymsg.Query', 'Message', data);
        return promise.then((data) => QueryMessageResponse.decode(new _m0.Reader(data)));
    }
    blockMessageIds(request) {
        const data = QueryBlockMessageIdsRequest.encode(request).finish();
        const promise = this.rpc.request('dydxprotocol.delaymsg.Query', 'BlockMessageIds', data);
        return promise.then((data) => QueryBlockMessageIdsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        nextDelayedMessageId(request) {
            return queryService.nextDelayedMessageId(request);
        },
        message(request) {
            return queryService.message(request);
        },
        blockMessageIds(request) {
            return queryService.blockMessageIds(request);
        },
    };
};
//# sourceMappingURL=query.rpc.Query.js.map