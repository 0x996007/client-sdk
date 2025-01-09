import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination.js';
import { Subaccount } from './subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseQueryGetSubaccountRequest() {
    return {
        owner: '',
        number: 0,
    };
}
export const QueryGetSubaccountRequest = {
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
        const message = createBaseQueryGetSubaccountRequest();
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
        const message = createBaseQueryGetSubaccountRequest();
        message.owner = object.owner ?? '';
        message.number = object.number ?? 0;
        return message;
    },
};
function createBaseQuerySubaccountResponse() {
    return {
        subaccount: undefined,
    };
}
export const QuerySubaccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccount !== undefined) {
            Subaccount.encode(message.subaccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccount = Subaccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountResponse();
        message.subaccount =
            object.subaccount !== undefined && object.subaccount !== null
                ? Subaccount.fromPartial(object.subaccount)
                : undefined;
        return message;
    },
};
function createBaseQueryAllSubaccountRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAllSubaccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSubaccountRequest();
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
        const message = createBaseQueryAllSubaccountRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySubaccountAllResponse() {
    return {
        subaccount: [],
        pagination: undefined,
    };
}
export const QuerySubaccountAllResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subaccount) {
            Subaccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccount.push(Subaccount.decode(reader, reader.uint32()));
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
        const message = createBaseQuerySubaccountAllResponse();
        message.subaccount =
            object.subaccount?.map((e) => Subaccount.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest() {
    return {
        perpetualId: 0,
    };
}
export const QueryGetWithdrawalAndTransfersBlockedInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoRequest();
        message.perpetualId = object.perpetualId ?? 0;
        return message;
    },
};
function createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse() {
    return {
        negativeTncSubaccountSeenAtBlock: 0,
        chainOutageSeenAtBlock: 0,
        withdrawalsAndTransfersUnblockedAtBlock: 0,
    };
}
export const QueryGetWithdrawalAndTransfersBlockedInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.negativeTncSubaccountSeenAtBlock !== 0) {
            writer.uint32(8).uint32(message.negativeTncSubaccountSeenAtBlock);
        }
        if (message.chainOutageSeenAtBlock !== 0) {
            writer.uint32(16).uint32(message.chainOutageSeenAtBlock);
        }
        if (message.withdrawalsAndTransfersUnblockedAtBlock !== 0) {
            writer.uint32(24).uint32(message.withdrawalsAndTransfersUnblockedAtBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.negativeTncSubaccountSeenAtBlock = reader.uint32();
                    break;
                case 2:
                    message.chainOutageSeenAtBlock = reader.uint32();
                    break;
                case 3:
                    message.withdrawalsAndTransfersUnblockedAtBlock = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetWithdrawalAndTransfersBlockedInfoResponse();
        message.negativeTncSubaccountSeenAtBlock =
            object.negativeTncSubaccountSeenAtBlock ?? 0;
        message.chainOutageSeenAtBlock = object.chainOutageSeenAtBlock ?? 0;
        message.withdrawalsAndTransfersUnblockedAtBlock =
            object.withdrawalsAndTransfersUnblockedAtBlock ?? 0;
        return message;
    },
};
function createBaseQueryCollateralPoolAddressRequest() {
    return {
        perpetualId: 0,
    };
}
export const QueryCollateralPoolAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.perpetualId !== 0) {
            writer.uint32(8).uint32(message.perpetualId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollateralPoolAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.perpetualId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollateralPoolAddressRequest();
        message.perpetualId = object.perpetualId ?? 0;
        return message;
    },
};
function createBaseQueryCollateralPoolAddressResponse() {
    return {
        collateralPoolAddress: '',
    };
}
export const QueryCollateralPoolAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collateralPoolAddress !== '') {
            writer.uint32(10).string(message.collateralPoolAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollateralPoolAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralPoolAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCollateralPoolAddressResponse();
        message.collateralPoolAddress = object.collateralPoolAddress ?? '';
        return message;
    },
};
//# sourceMappingURL=query.js.map