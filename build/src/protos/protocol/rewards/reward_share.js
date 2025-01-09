import * as _m0 from 'protobufjs/minimal.js';
function createBaseRewardShare() {
    return {
        address: '',
        weight: new Uint8Array(),
    };
}
export const RewardShare = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.weight.length !== 0) {
            writer.uint32(18).bytes(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardShare();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardShare();
        message.address = object.address ?? '';
        message.weight = object.weight ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=reward_share.js.map