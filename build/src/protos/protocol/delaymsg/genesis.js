import { DelayedMessage } from './delayed_message.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        delayedMessages: [],
        nextDelayedMessageId: 0,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delayedMessages) {
            DelayedMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextDelayedMessageId !== 0) {
            writer.uint32(16).uint32(message.nextDelayedMessageId);
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
                    message.delayedMessages.push(DelayedMessage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextDelayedMessageId = reader.uint32();
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
        message.delayedMessages =
            object.delayedMessages?.map((e) => DelayedMessage.fromPartial(e)) || [];
        message.nextDelayedMessageId = object.nextDelayedMessageId ?? 0;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map