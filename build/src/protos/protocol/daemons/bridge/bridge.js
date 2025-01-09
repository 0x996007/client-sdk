/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { BridgeEvent } from '../../bridge/bridge_event.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseAddBridgeEventsRequest() {
    return {
        bridgeEvents: [],
    };
}
export const AddBridgeEventsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.bridgeEvents) {
            BridgeEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddBridgeEventsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeEvents.push(BridgeEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddBridgeEventsRequest();
        message.bridgeEvents =
            object.bridgeEvents?.map((e) => BridgeEvent.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAddBridgeEventsResponse() {
    return {};
}
export const AddBridgeEventsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddBridgeEventsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseAddBridgeEventsResponse();
        return message;
    },
};
//# sourceMappingURL=bridge.js.map