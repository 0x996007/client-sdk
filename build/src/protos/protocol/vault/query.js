/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { VaultId } from './vault.js';
import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination.js';
import { NumShares, ShareUnlock, OwnerShare, } from './share.js';
import { QuotingParams, OperatorParams, VaultParams, } from './params.js';
import { SubaccountId, } from '../subaccounts/subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        defaultQuotingParams: undefined,
        operatorParams: undefined,
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultQuotingParams !== undefined) {
            QuotingParams.encode(message.defaultQuotingParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.operatorParams !== undefined) {
            OperatorParams.encode(message.operatorParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultQuotingParams = QuotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operatorParams = OperatorParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.defaultQuotingParams =
            object.defaultQuotingParams !== undefined &&
                object.defaultQuotingParams !== null
                ? QuotingParams.fromPartial(object.defaultQuotingParams)
                : undefined;
        message.operatorParams =
            object.operatorParams !== undefined && object.operatorParams !== null
                ? OperatorParams.fromPartial(object.operatorParams)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultRequest() {
    return {
        type: 0,
        number: 0,
    };
}
export const QueryVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
        const message = createBaseQueryVaultRequest();
        message.type = object.type ?? 0;
        message.number = object.number ?? 0;
        return message;
    },
};
function createBaseQueryVaultResponse() {
    return {
        vaultId: undefined,
        subaccountId: undefined,
        equity: new Uint8Array(),
        inventory: new Uint8Array(),
        vaultParams: undefined,
        mostRecentClientIds: [],
    };
}
export const QueryVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(18).fork()).ldelim();
        }
        if (message.equity.length !== 0) {
            writer.uint32(26).bytes(message.equity);
        }
        if (message.inventory.length !== 0) {
            writer.uint32(34).bytes(message.inventory);
        }
        if (message.vaultParams !== undefined) {
            VaultParams.encode(message.vaultParams, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.mostRecentClientIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.equity = reader.bytes();
                    break;
                case 4:
                    message.inventory = reader.bytes();
                    break;
                case 5:
                    message.vaultParams = VaultParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.mostRecentClientIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.mostRecentClientIds.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultResponse();
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? VaultId.fromPartial(object.vaultId)
                : undefined;
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        message.equity = object.equity ?? new Uint8Array();
        message.inventory = object.inventory ?? new Uint8Array();
        message.vaultParams =
            object.vaultParams !== undefined && object.vaultParams !== null
                ? VaultParams.fromPartial(object.vaultParams)
                : undefined;
        message.mostRecentClientIds =
            object.mostRecentClientIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryAllVaultsRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAllVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVaultsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsResponse() {
    return {
        vaults: [],
        pagination: undefined,
    };
}
export const QueryAllVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaults) {
            QueryVaultResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaults.push(QueryVaultResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVaultsResponse();
        message.vaults =
            object.vaults?.map((e) => QueryVaultResponse.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryMegavaultTotalSharesRequest() {
    return {};
}
export const QueryMegavaultTotalSharesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultTotalSharesRequest();
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
        const message = createBaseQueryMegavaultTotalSharesRequest();
        return message;
    },
};
function createBaseQueryMegavaultTotalSharesResponse() {
    return {
        totalShares: undefined,
    };
}
export const QueryMegavaultTotalSharesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalShares !== undefined) {
            NumShares.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultTotalSharesResponse();
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? NumShares.fromPartial(object.totalShares)
                : undefined;
        return message;
    },
};
function createBaseQueryMegavaultOwnerSharesRequest() {
    return {
        address: '',
    };
}
export const QueryMegavaultOwnerSharesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultOwnerSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultOwnerSharesRequest();
        message.address = object.address ?? '';
        return message;
    },
};
function createBaseQueryMegavaultOwnerSharesResponse() {
    return {
        address: '',
        shares: undefined,
        shareUnlocks: [],
        equity: new Uint8Array(),
        withdrawableEquity: new Uint8Array(),
    };
}
export const QueryMegavaultOwnerSharesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.shares !== undefined) {
            NumShares.encode(message.shares, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.shareUnlocks) {
            ShareUnlock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.equity.length !== 0) {
            writer.uint32(34).bytes(message.equity);
        }
        if (message.withdrawableEquity.length !== 0) {
            writer.uint32(42).bytes(message.withdrawableEquity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultOwnerSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.shares = NumShares.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.shareUnlocks.push(ShareUnlock.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.equity = reader.bytes();
                    break;
                case 5:
                    message.withdrawableEquity = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultOwnerSharesResponse();
        message.address = object.address ?? '';
        message.shares =
            object.shares !== undefined && object.shares !== null
                ? NumShares.fromPartial(object.shares)
                : undefined;
        message.shareUnlocks =
            object.shareUnlocks?.map((e) => ShareUnlock.fromPartial(e)) || [];
        message.equity = object.equity ?? new Uint8Array();
        message.withdrawableEquity = object.withdrawableEquity ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryMegavaultAllOwnerSharesRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryMegavaultAllOwnerSharesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultAllOwnerSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultAllOwnerSharesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryMegavaultAllOwnerSharesResponse() {
    return {
        ownerShares: [],
        pagination: undefined,
    };
}
export const QueryMegavaultAllOwnerSharesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ownerShares) {
            OwnerShare.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultAllOwnerSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerShares.push(OwnerShare.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultAllOwnerSharesResponse();
        message.ownerShares =
            object.ownerShares?.map((e) => OwnerShare.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultParamsRequest() {
    return {
        type: 0,
        number: 0,
    };
}
export const QueryVaultParamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.number !== 0) {
            writer.uint32(16).uint32(message.number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
        const message = createBaseQueryVaultParamsRequest();
        message.type = object.type ?? 0;
        message.number = object.number ?? 0;
        return message;
    },
};
function createBaseQueryVaultParamsResponse() {
    return {
        vaultId: undefined,
        vaultParams: undefined,
    };
}
export const QueryVaultParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== undefined) {
            VaultId.encode(message.vaultId, writer.uint32(10).fork()).ldelim();
        }
        if (message.vaultParams !== undefined) {
            VaultParams.encode(message.vaultParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = VaultId.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = createBaseQueryVaultParamsResponse();
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
function createBaseQueryMegavaultWithdrawalInfoRequest() {
    return {
        sharesToWithdraw: undefined,
    };
}
export const QueryMegavaultWithdrawalInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sharesToWithdraw !== undefined) {
            NumShares.encode(message.sharesToWithdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultWithdrawalInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sharesToWithdraw = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultWithdrawalInfoRequest();
        message.sharesToWithdraw =
            object.sharesToWithdraw !== undefined && object.sharesToWithdraw !== null
                ? NumShares.fromPartial(object.sharesToWithdraw)
                : undefined;
        return message;
    },
};
function createBaseQueryMegavaultWithdrawalInfoResponse() {
    return {
        sharesToWithdraw: undefined,
        expectedQuoteQuantums: new Uint8Array(),
        megavaultEquity: new Uint8Array(),
        totalShares: undefined,
    };
}
export const QueryMegavaultWithdrawalInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sharesToWithdraw !== undefined) {
            NumShares.encode(message.sharesToWithdraw, writer.uint32(10).fork()).ldelim();
        }
        if (message.expectedQuoteQuantums.length !== 0) {
            writer.uint32(18).bytes(message.expectedQuoteQuantums);
        }
        if (message.megavaultEquity.length !== 0) {
            writer.uint32(26).bytes(message.megavaultEquity);
        }
        if (message.totalShares !== undefined) {
            NumShares.encode(message.totalShares, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMegavaultWithdrawalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sharesToWithdraw = NumShares.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.expectedQuoteQuantums = reader.bytes();
                    break;
                case 3:
                    message.megavaultEquity = reader.bytes();
                    break;
                case 4:
                    message.totalShares = NumShares.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMegavaultWithdrawalInfoResponse();
        message.sharesToWithdraw =
            object.sharesToWithdraw !== undefined && object.sharesToWithdraw !== null
                ? NumShares.fromPartial(object.sharesToWithdraw)
                : undefined;
        message.expectedQuoteQuantums =
            object.expectedQuoteQuantums ?? new Uint8Array();
        message.megavaultEquity = object.megavaultEquity ?? new Uint8Array();
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? NumShares.fromPartial(object.totalShares)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=query.js.map