import { AssetPosition } from './asset_position.js';
import { PerpetualPosition, } from './perpetual_position.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseSubaccountId() {
    return {
        owner: '',
        number: 0,
    };
}
export const SubaccountId = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.number = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountId();
        message.owner = object.owner ?? '';
        message.number = object.number ?? 0;
        return message;
    },
};
function createBaseSubaccount() {
    return {
        id: undefined,
        assetPositions: [],
        perpetualPositions: [],
        marginEnabled: false,
    };
}
export const Subaccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== undefined) {
            SubaccountId.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.assetPositions) {
            AssetPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.perpetualPositions) {
            PerpetualPosition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.marginEnabled === true) {
            writer.uint32(32).bool(message.marginEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.assetPositions.push(AssetPosition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.perpetualPositions.push(PerpetualPosition.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.marginEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccount();
        message.id =
            object.id !== undefined && object.id !== null
                ? SubaccountId.fromPartial(object.id)
                : undefined;
        message.assetPositions =
            object.assetPositions?.map((e) => AssetPosition.fromPartial(e)) || [];
        message.perpetualPositions =
            object.perpetualPositions?.map((e) => PerpetualPosition.fromPartial(e)) ||
                [];
        message.marginEnabled = object.marginEnabled ?? false;
        return message;
    },
};
//# sourceMappingURL=subaccount.js.map