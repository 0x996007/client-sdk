/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { SubaccountId, } from '../subaccounts/subaccount.js';
import { NumShares } from './share.js';
import { QuotingParams, OperatorParams, VaultParams, Params, } from './params.js';
import { VaultId } from './vault.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgDepositToMegavault() {
    return {
        subaccountId: undefined,
        quoteQuantums: new Uint8Array(),
    };
}
export const MsgDepositToMegavault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteQuantums.length !== 0) {
            writer.uint32(18).bytes(message.quoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositToMegavault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositToMegavault();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgDepositToMegavaultResponse() {
    return {
        mintedShares: undefined,
    };
}
export const MsgDepositToMegavaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintedShares !== undefined) {
            NumShares.encode(message.mintedShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositToMegavaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedShares = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositToMegavaultResponse();
        message.mintedShares =
            object.mintedShares !== undefined && object.mintedShares !== null
                ? NumShares.fromPartial(object.mintedShares)
                : undefined;
        return message;
    },
};
function createBaseMsgWithdrawFromMegavault() {
    return {
        subaccountId: undefined,
        shares: undefined,
        minQuoteQuantums: new Uint8Array(),
    };
}
export const MsgWithdrawFromMegavault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.shares !== undefined) {
            NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
        }
        if (message.minQuoteQuantums.length !== 0) {
            writer.uint32(26).bytes(message.minQuoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFromMegavault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shares = NumShares.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawFromMegavault();
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.shares =
            object.shares !== undefined && object.shares !== null
                ? NumShares.fromPartial(object.shares)
                : undefined;
        message.minQuoteQuantums = object.minQuoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgWithdrawFromMegavaultResponse() {
    return {
        quoteQuantums: new Uint8Array(),
    };
}
export const MsgWithdrawFromMegavaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quoteQuantums.length !== 0) {
            writer.uint32(10).bytes(message.quoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFromMegavaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawFromMegavaultResponse();
        message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgUpdateDefaultQuotingParams() {
    return {
        authority: '',
        defaultQuotingParams: undefined,
    };
}
export const MsgUpdateDefaultQuotingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.defaultQuotingParams !== undefined) {
            QuotingParams.encode(message.defaultQuotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDefaultQuotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.defaultQuotingParams = QuotingParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDefaultQuotingParams();
        message.authority = object.authority ?? '';
        message.defaultQuotingParams =
            object.defaultQuotingParams !== undefined &&
                object.defaultQuotingParams !== null
                ? QuotingParams.fromPartial(object.defaultQuotingParams)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateDefaultQuotingParamsResponse() {
    return {};
}
export const MsgUpdateDefaultQuotingParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDefaultQuotingParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateDefaultQuotingParamsResponse();
        return message;
    },
};
function createBaseMsgSetVaultParams() {
    return {
        authority: '',
        vaultId: undefined,
        vaultParams: undefined,
    };
}
export const MsgSetVaultParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            VaultParams.encode(message.vaultParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetVaultParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vaultParams = VaultParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetVaultParams();
        message.authority = object.authority ?? '';
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.vaultParams =
            object.vaultParams !== undefined && object.vaultParams !== null
                ? VaultParams.fromPartial(object.vaultParams)
                : undefined;
        return message;
    },
};
function createBaseMsgSetVaultParamsResponse() {
    return {};
}
export const MsgSetVaultParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetVaultParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSetVaultParamsResponse();
        return message;
    },
};
function createBaseMsgUnlockShares() {
    return {
        authority: '',
        ownerAddress: '',
    };
}
export const MsgUnlockShares = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.ownerAddress !== '') {
            writer.uint32(18).string(message.ownerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.ownerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockShares();
        message.authority = object.authority ?? '';
        message.ownerAddress = object.ownerAddress ?? '';
        return message;
    },
};
function createBaseMsgUnlockSharesResponse() {
    return {
        unlockedShares: undefined,
    };
}
export const MsgUnlockSharesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unlockedShares !== undefined) {
            NumShares.encode(message.unlockedShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlockedShares = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockSharesResponse();
        message.unlockedShares =
            object.unlockedShares !== undefined && object.unlockedShares !== null
                ? NumShares.fromPartial(object.unlockedShares)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateOperatorParams() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgUpdateOperatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            OperatorParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOperatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = OperatorParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateOperatorParams();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? OperatorParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateOperatorParamsResponse() {
    return {};
}
export const MsgUpdateOperatorParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOperatorParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateOperatorParamsResponse();
        return message;
    },
};
function createBaseMsgAllocateToVault() {
    return {
        authority: '',
        vaultId: undefined,
        quoteQuantums: new Uint8Array(),
    };
}
export const MsgAllocateToVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
        }
        if (message.quoteQuantums.length !== 0) {
            writer.uint32(26).bytes(message.quoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAllocateToVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.quoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAllocateToVault();
        message.authority = object.authority ?? '';
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgAllocateToVaultResponse() {
    return {};
}
export const MsgAllocateToVaultResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAllocateToVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgAllocateToVaultResponse();
        return message;
    },
};
function createBaseMsgRetrieveFromVault() {
    return {
        authority: '',
        vaultId: undefined,
        quoteQuantums: new Uint8Array(),
    };
}
export const MsgRetrieveFromVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
        }
        if (message.quoteQuantums.length !== 0) {
            writer.uint32(26).bytes(message.quoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetrieveFromVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.quoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetrieveFromVault();
        message.authority = object.authority ?? '';
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.quoteQuantums = object.quoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgRetrieveFromVaultResponse() {
    return {};
}
export const MsgRetrieveFromVaultResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetrieveFromVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRetrieveFromVaultResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgSetVaultQuotingParams() {
    return {
        authority: '',
        vaultId: undefined,
        quotingParams: undefined,
    };
}
export const MsgSetVaultQuotingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(18).fork()).ldelim();
        }
        if (message.quotingParams !== undefined) {
            QuotingParams.encode(message.quotingParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetVaultQuotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.quotingParams = QuotingParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetVaultQuotingParams();
        message.authority = object.authority ?? '';
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.quotingParams =
            object.quotingParams !== undefined && object.quotingParams !== null
                ? QuotingParams.fromPartial(object.quotingParams)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=tx.js.map