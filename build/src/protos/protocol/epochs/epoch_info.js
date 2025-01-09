import * as _m0 from 'protobufjs/minimal.js';
function createBaseEpochInfo() {
    return {
        name: '',
        nextTick: 0,
        duration: 0,
        currentEpoch: 0,
        currentEpochStartBlock: 0,
        isInitialized: false,
        fastForwardNextTick: false,
    };
}
export const EpochInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.nextTick !== 0) {
            writer.uint32(16).uint32(message.nextTick);
        }
        if (message.duration !== 0) {
            writer.uint32(24).uint32(message.duration);
        }
        if (message.currentEpoch !== 0) {
            writer.uint32(32).uint32(message.currentEpoch);
        }
        if (message.currentEpochStartBlock !== 0) {
            writer.uint32(40).uint32(message.currentEpochStartBlock);
        }
        if (message.isInitialized === true) {
            writer.uint32(48).bool(message.isInitialized);
        }
        if (message.fastForwardNextTick === true) {
            writer.uint32(56).bool(message.fastForwardNextTick);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.nextTick = reader.uint32();
                    break;
                case 3:
                    message.duration = reader.uint32();
                    break;
                case 4:
                    message.currentEpoch = reader.uint32();
                    break;
                case 5:
                    message.currentEpochStartBlock = reader.uint32();
                    break;
                case 6:
                    message.isInitialized = reader.bool();
                    break;
                case 7:
                    message.fastForwardNextTick = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.name = object.name ?? '';
        message.nextTick = object.nextTick ?? 0;
        message.duration = object.duration ?? 0;
        message.currentEpoch = object.currentEpoch ?? 0;
        message.currentEpochStartBlock = object.currentEpochStartBlock ?? 0;
        message.isInitialized = object.isInitialized ?? false;
        message.fastForwardNextTick = object.fastForwardNextTick ?? false;
        return message;
    },
};
//# sourceMappingURL=epoch_info.js.map