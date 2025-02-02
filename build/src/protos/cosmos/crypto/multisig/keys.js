import { Any } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        publicKeys: [],
    };
}
export const LegacyAminoPubKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.publicKeys) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.publicKeys.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.publicKeys =
            object.publicKeys?.map((e) => Any.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=keys.js.map