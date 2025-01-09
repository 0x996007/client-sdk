import { EventParams, ProposeParams, SafetyParams, } from './params.js';
import { BridgeEventInfo, } from './bridge_event_info.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        eventParams: undefined,
        proposeParams: undefined,
        safetyParams: undefined,
        acknowledgedEventInfo: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.eventParams !== undefined) {
            EventParams.encode(message.eventParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposeParams !== undefined) {
            ProposeParams.encode(message.proposeParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.safetyParams !== undefined) {
            SafetyParams.encode(message.safetyParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.acknowledgedEventInfo !== undefined) {
            BridgeEventInfo.encode(message.acknowledgedEventInfo, writer.uint32(34).fork()).ldelim();
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
                    message.eventParams = EventParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proposeParams = ProposeParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.safetyParams = SafetyParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.acknowledgedEventInfo = BridgeEventInfo.decode(reader, reader.uint32());
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
        message.eventParams =
            object.eventParams !== undefined && object.eventParams !== null
                ? EventParams.fromPartial(object.eventParams)
                : undefined;
        message.proposeParams =
            object.proposeParams !== undefined && object.proposeParams !== null
                ? ProposeParams.fromPartial(object.proposeParams)
                : undefined;
        message.safetyParams =
            object.safetyParams !== undefined && object.safetyParams !== null
                ? SafetyParams.fromPartial(object.safetyParams)
                : undefined;
        message.acknowledgedEventInfo =
            object.acknowledgedEventInfo !== undefined &&
                object.acknowledgedEventInfo !== null
                ? BridgeEventInfo.fromPartial(object.acknowledgedEventInfo)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map