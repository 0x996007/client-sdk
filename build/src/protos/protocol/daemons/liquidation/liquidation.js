/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { SubaccountId, } from '../../subaccounts/subaccount.js';
import { SubaccountOpenPositionInfo, } from '../../clob/liquidations.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseLiquidateSubaccountsRequest() {
    return {
        blockHeight: 0,
        liquidatableSubaccountIds: [],
        negativeTncSubaccountIds: [],
        subaccountOpenPositionInfo: [],
    };
}
export const LiquidateSubaccountsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        for (const v of message.liquidatableSubaccountIds) {
            SubaccountId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.negativeTncSubaccountIds) {
            SubaccountId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.subaccountOpenPositionInfo) {
            SubaccountOpenPositionInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidateSubaccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                case 2:
                    message.liquidatableSubaccountIds.push(SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.negativeTncSubaccountIds.push(SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.subaccountOpenPositionInfo.push(SubaccountOpenPositionInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidateSubaccountsRequest();
        message.blockHeight = object.blockHeight ?? 0;
        message.liquidatableSubaccountIds =
            object.liquidatableSubaccountIds?.map((e) => SubaccountId.fromPartial(e)) || [];
        message.negativeTncSubaccountIds =
            object.negativeTncSubaccountIds?.map((e) => SubaccountId.fromPartial(e)) || [];
        message.subaccountOpenPositionInfo =
            object.subaccountOpenPositionInfo?.map((e) => SubaccountOpenPositionInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseLiquidateSubaccountsResponse() {
    return {};
}
export const LiquidateSubaccountsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidateSubaccountsResponse();
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
        const message = createBaseLiquidateSubaccountsResponse();
        return message;
    },
};
//# sourceMappingURL=liquidation.js.map