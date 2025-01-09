import { Duration } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseParams() {
    return {
        windowDuration: undefined,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.windowDuration !== undefined) {
            Duration.encode(message.windowDuration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.windowDuration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.windowDuration =
            object.windowDuration !== undefined && object.windowDuration !== null
                ? Duration.fromPartial(object.windowDuration)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=params.js.map