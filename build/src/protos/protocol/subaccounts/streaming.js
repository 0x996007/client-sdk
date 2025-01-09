import { SubaccountId } from './subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseStreamSubaccountUpdate() {
    return {
        subaccountId: undefined,
        updatedPerpetualPositions: [],
        updatedAssetPositions: [],
        snapshot: false,
    };
}
export const StreamSubaccountUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.updatedPerpetualPositions) {
            SubaccountPerpetualPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.updatedAssetPositions) {
            SubaccountAssetPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.snapshot === true) {
            writer.uint32(32).bool(message.snapshot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamSubaccountUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updatedPerpetualPositions.push(SubaccountPerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.updatedAssetPositions.push(SubaccountAssetPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.snapshot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamSubaccountUpdate();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.updatedPerpetualPositions =
            object.updatedPerpetualPositions?.map((e) => SubaccountPerpetualPosition.fromPartial(e)) || [];
        message.updatedAssetPositions =
            object.updatedAssetPositions?.map((e) => SubaccountAssetPosition.fromPartial(e)) || [];
        message.snapshot = object.snapshot ?? false;
        return message;
    },
};
function createBaseSubaccountPerpetualPosition() {
    return {
        perpetualId: 0,
        quantums: Long.ZERO,
    };
}
export const SubaccountPerpetualPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(16).int64(message.quantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountPerpetualPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountPerpetualPosition();
        message.perpetualId = object.perpetualId ?? 0;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.ZERO;
        return message;
    },
};
function createBaseSubaccountAssetPosition() {
    return {
        assetId: 0,
        quantums: Long.UZERO,
    };
}
export const SubaccountAssetPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetId !== 0) {
            writer.uint32(8).uint32(message.assetId);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(16).uint64(message.quantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountAssetPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint32();
                    break;
                case 2:
                    message.quantums = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountAssetPosition();
        message.assetId = object.assetId ?? 0;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=streaming.js.map