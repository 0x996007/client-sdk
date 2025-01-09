import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBasePendingSendPacket() {
    return {
        channelId: '',
        sequence: Long.UZERO,
    };
}
export const PendingSendPacket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== '') {
            writer.uint32(10).string(message.channelId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingSendPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePendingSendPacket();
        message.channelId = object.channelId ?? '';
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? Long.fromValue(object.sequence)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=pending_send_packet.js.map