import * as _m0 from 'protobufjs/minimal.js';
function createBaseNumShares() {
    return {
        numShares: new Uint8Array(),
    };
}
export const NumShares = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.numShares.length !== 0) {
            writer.uint32(18).bytes(message.numShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.numShares = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumShares();
        message.numShares = object.numShares ?? new Uint8Array();
        return message;
    },
};
function createBaseOwnerShare() {
    return {
        owner: '',
        shares: undefined,
    };
}
export const OwnerShare = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.shares !== undefined) {
            NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerShare();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.shares = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwnerShare();
        message.owner = object.owner ?? '';
        message.shares =
            object.shares !== undefined && object.shares !== null
                ? NumShares.fromPartial(object.shares)
                : undefined;
        return message;
    },
};
function createBaseOwnerShareUnlocks() {
    return {
        ownerAddress: '',
        shareUnlocks: [],
    };
}
export const OwnerShareUnlocks = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerAddress !== '') {
            writer.uint32(10).string(message.ownerAddress);
        }
        for (const v of message.shareUnlocks) {
            ShareUnlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerShareUnlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerAddress = reader.string();
                    break;
                case 2:
                    message.shareUnlocks.push(ShareUnlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOwnerShareUnlocks();
        message.ownerAddress = object.ownerAddress ?? '';
        message.shareUnlocks =
            object.shareUnlocks?.map((e) => ShareUnlock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseShareUnlock() {
    return {
        shares: undefined,
        unlockBlockHeight: 0,
    };
}
export const ShareUnlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.shares !== undefined) {
            NumShares.encode(message.shares, writer.uint32(10).fork()).ldelim();
        }
        if (message.unlockBlockHeight !== 0) {
            writer.uint32(16).uint32(message.unlockBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShareUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shares = NumShares.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.unlockBlockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseShareUnlock();
        message.shares =
            object.shares !== undefined && object.shares !== null
                ? NumShares.fromPartial(object.shares)
                : undefined;
        message.unlockBlockHeight = object.unlockBlockHeight ?? 0;
        return message;
    },
};
//# sourceMappingURL=share.js.map