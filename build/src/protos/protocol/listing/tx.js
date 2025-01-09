/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { SubaccountId, } from '../subaccounts/subaccount.js';
import { ListingVaultDepositParams, } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseMsgSetMarketsHardCap() {
    return {
        authority: '',
        hardCapForMarkets: 0,
    };
}
export const MsgSetMarketsHardCap = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.hardCapForMarkets !== 0) {
            writer.uint32(16).uint32(message.hardCapForMarkets);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketsHardCap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.hardCapForMarkets = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMarketsHardCap();
        message.authority = object.authority ?? '';
        message.hardCapForMarkets = object.hardCapForMarkets ?? 0;
        return message;
    },
};
function createBaseMsgSetMarketsHardCapResponse() {
    return {};
}
export const MsgSetMarketsHardCapResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMarketsHardCapResponse();
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
        const message = createBaseMsgSetMarketsHardCapResponse();
        return message;
    },
};
function createBaseMsgCreateMarketPermissionless() {
    return {
        ticker: '',
        subaccountId: undefined,
    };
}
export const MsgCreateMarketPermissionless = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ticker !== '') {
            writer.uint32(10).string(message.ticker);
        }
        if (message.subaccountId !== undefined) {
            SubaccountId.encode(message.subaccountId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateMarketPermissionless();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.subaccountId = SubaccountId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateMarketPermissionless();
        message.ticker = object.ticker ?? '';
        message.subaccountId =
            object.subaccountId !== undefined && object.subaccountId !== null
                ? SubaccountId.fromPartial(object.subaccountId)
                : undefined;
        return message;
    },
};
function createBaseMsgCreateMarketPermissionlessResponse() {
    return {};
}
export const MsgCreateMarketPermissionlessResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateMarketPermissionlessResponse();
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
        const message = createBaseMsgCreateMarketPermissionlessResponse();
        return message;
    },
};
function createBaseMsgSetListingVaultDepositParams() {
    return {
        authority: '',
        params: undefined,
    };
}
export const MsgSetListingVaultDepositParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            ListingVaultDepositParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetListingVaultDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = ListingVaultDepositParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetListingVaultDepositParams();
        message.authority = object.authority ?? '';
        message.params =
            object.params !== undefined && object.params !== null
                ? ListingVaultDepositParams.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgSetListingVaultDepositParamsResponse() {
    return {};
}
export const MsgSetListingVaultDepositParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetListingVaultDepositParamsResponse();
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
        const message = createBaseMsgSetListingVaultDepositParamsResponse();
        return message;
    },
};
function createBaseMsgUpgradeIsolatedPerpetualToCross() {
    return {
        authority: '',
        perpetualId: 0,
    };
}
export const MsgUpgradeIsolatedPerpetualToCross = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.perpetualId !== 0) {
            writer.uint32(16).uint32(message.perpetualId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeIsolatedPerpetualToCross();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUpgradeIsolatedPerpetualToCross();
        message.authority = object.authority ?? '';
        message.perpetualId = object.perpetualId ?? 0;
        return message;
    },
};
function createBaseMsgUpgradeIsolatedPerpetualToCrossResponse() {
    return {};
}
export const MsgUpgradeIsolatedPerpetualToCrossResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeIsolatedPerpetualToCrossResponse();
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
        const message = createBaseMsgUpgradeIsolatedPerpetualToCrossResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map