import { SubaccountId, } from '../subaccounts/subaccount.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseTransfer() {
    return {
        sender: undefined,
        recipient: undefined,
        assetId: 0,
        amount: Long.UZERO,
    };
}
export const Transfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== undefined) {
            SubaccountId.encode(message.sender, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (!message.amount.isZero()) {
            writer.uint32(32).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.recipient = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
                    message.amount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTransfer();
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? SubaccountId.fromPartial(object.sender)
                : undefined;
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? SubaccountId.fromPartial(object.recipient)
                : undefined;
        message.assetId = object.assetId ?? 0;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Long.fromValue(object.amount)
                : Long.UZERO;
        return message;
    },
};
function createBaseMsgDepositToSubaccount() {
    return {
        sender: '',
        recipient: undefined,
        assetId: 0,
        quantums: Long.UZERO,
    };
}
export const MsgDepositToSubaccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== undefined) {
            SubaccountId.encode(message.recipient, writer.uint32(18).fork()).ldelim();
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(32).uint64(message.quantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositToSubaccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
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
        const message = createBaseMsgDepositToSubaccount();
        message.sender = object.sender ?? '';
        message.recipient =
            object.recipient !== undefined && object.recipient !== null
                ? SubaccountId.fromPartial(object.recipient)
                : undefined;
        message.assetId = object.assetId ?? 0;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.UZERO;
        return message;
    },
};
function createBaseMsgWithdrawFromSubaccount() {
    return {
        sender: undefined,
        recipient: '',
        assetId: 0,
        quantums: Long.UZERO,
    };
}
export const MsgWithdrawFromSubaccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== undefined) {
            SubaccountId.encode(message.sender, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== '') {
            writer.uint32(10).string(message.recipient);
        }
        if (message.assetId !== 0) {
            writer.uint32(24).uint32(message.assetId);
        }
        if (!message.quantums.isZero()) {
            writer.uint32(32).uint64(message.quantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFromSubaccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.sender = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.assetId = reader.uint32();
                    break;
                case 4:
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
        const message = createBaseMsgWithdrawFromSubaccount();
        message.sender =
            object.sender !== undefined && object.sender !== null
                ? SubaccountId.fromPartial(object.sender)
                : undefined;
        message.recipient = object.recipient ?? '';
        message.assetId = object.assetId ?? 0;
        message.quantums =
            object.quantums !== undefined && object.quantums !== null
                ? Long.fromValue(object.quantums)
                : Long.UZERO;
        return message;
    },
};
function createBaseMsgSendFromModuleToAccount() {
    return {
        authority: '',
        senderModuleName: '',
        recipient: '',
        coin: undefined,
    };
}
export const MsgSendFromModuleToAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.senderModuleName !== '') {
            writer.uint32(18).string(message.senderModuleName);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendFromModuleToAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.senderModuleName = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSendFromModuleToAccount();
        message.authority = object.authority ?? '';
        message.senderModuleName = object.senderModuleName ?? '';
        message.recipient = object.recipient ?? '';
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=transfer.js.map