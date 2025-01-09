/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination.js';
import { ValidatorMevMatches, MevNodeToNodeMetrics, } from './mev.js';
import { OrderId, LongTermOrderPlacement, Order, StreamLiquidationOrder, } from './order.js';
import { SubaccountId, } from '../subaccounts/subaccount.js';
import { ClobPair } from './clob_pair.js';
import { EquityTierLimitConfiguration, } from './equity_tier_limit_config.js';
import { BlockRateLimitConfiguration, } from './block_rate_limit_config.js';
import { LiquidationsConfig, } from './liquidations_config.js';
import { StreamSubaccountUpdate, } from '../subaccounts/streaming.js';
import { StreamPriceUpdate, } from '../prices/streaming.js';
import { OffChainUpdateV1, } from '../indexer/off_chain_updates/off_chain_updates.js';
import { ClobMatch } from './matches.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../helpers.js';
function createBaseQueryGetClobPairRequest() {
    return {
        id: 0,
    };
}
export const QueryGetClobPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetClobPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetClobPairRequest();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseQueryClobPairResponse() {
    return {
        clobPair: undefined,
    };
}
export const QueryClobPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clobPair !== undefined) {
            ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClobPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair = ClobPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClobPairResponse();
        message.clobPair =
            object.clobPair !== undefined && object.clobPair !== null
                ? ClobPair.fromPartial(object.clobPair)
                : undefined;
        return message;
    },
};
function createBaseQueryAllClobPairRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryAllClobPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllClobPairRequest();
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
        const message = createBaseQueryAllClobPairRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryClobPairAllResponse() {
    return {
        clobPair: [],
        pagination: undefined,
    };
}
export const QueryClobPairAllResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clobPair) {
            ClobPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClobPairAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPair.push(ClobPair.decode(reader, reader.uint32()));
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
        const message = createBaseQueryClobPairAllResponse();
        message.clobPair =
            object.clobPair?.map((e) => ClobPair.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseMevNodeToNodeCalculationRequest() {
    return {
        blockProposerMatches: undefined,
        validatorMevMetrics: undefined,
    };
}
export const MevNodeToNodeCalculationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockProposerMatches !== undefined) {
            ValidatorMevMatches.encode(message.blockProposerMatches, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorMevMetrics !== undefined) {
            MevNodeToNodeMetrics.encode(message.validatorMevMetrics, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMevNodeToNodeCalculationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockProposerMatches = ValidatorMevMatches.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorMevMetrics = MevNodeToNodeMetrics.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMevNodeToNodeCalculationRequest();
        message.blockProposerMatches =
            object.blockProposerMatches !== undefined &&
                object.blockProposerMatches !== null
                ? ValidatorMevMatches.fromPartial(object.blockProposerMatches)
                : undefined;
        message.validatorMevMetrics =
            object.validatorMevMetrics !== undefined &&
                object.validatorMevMetrics !== null
                ? MevNodeToNodeMetrics.fromPartial(object.validatorMevMetrics)
                : undefined;
        return message;
    },
};
function createBaseMevNodeToNodeCalculationResponse() {
    return {
        results: [],
    };
}
export const MevNodeToNodeCalculationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMevNodeToNodeCalculationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(MevNodeToNodeCalculationResponse_MevAndVolumePerClob.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMevNodeToNodeCalculationResponse();
        message.results =
            object.results?.map((e) => MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob() {
    return {
        clobPairId: 0,
        mev: 0,
        volume: Long.UZERO,
    };
}
export const MevNodeToNodeCalculationResponse_MevAndVolumePerClob = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clobPairId !== 0) {
            writer.uint32(8).uint32(message.clobPairId);
        }
        if (message.mev !== 0) {
            writer.uint32(21).float(message.mev);
        }
        if (!message.volume.isZero()) {
            writer.uint32(24).uint64(message.volume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairId = reader.uint32();
                    break;
                case 2:
                    message.mev = reader.float();
                    break;
                case 3:
                    message.volume = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
        message.clobPairId = object.clobPairId ?? 0;
        message.mev = object.mev ?? 0;
        message.volume =
            object.volume !== undefined && object.volume !== null
                ? Long.fromValue(object.volume)
                : Long.UZERO;
        return message;
    },
};
function createBaseQueryEquityTierLimitConfigurationRequest() {
    return {};
}
export const QueryEquityTierLimitConfigurationRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEquityTierLimitConfigurationRequest();
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
        const message = createBaseQueryEquityTierLimitConfigurationRequest();
        return message;
    },
};
function createBaseQueryEquityTierLimitConfigurationResponse() {
    return {
        equityTierLimitConfig: undefined,
    };
}
export const QueryEquityTierLimitConfigurationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.equityTierLimitConfig !== undefined) {
            EquityTierLimitConfiguration.encode(message.equityTierLimitConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEquityTierLimitConfigurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.equityTierLimitConfig = EquityTierLimitConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEquityTierLimitConfigurationResponse();
        message.equityTierLimitConfig =
            object.equityTierLimitConfig !== undefined &&
                object.equityTierLimitConfig !== null
                ? EquityTierLimitConfiguration.fromPartial(object.equityTierLimitConfig)
                : undefined;
        return message;
    },
};
function createBaseQueryBlockRateLimitConfigurationRequest() {
    return {};
}
export const QueryBlockRateLimitConfigurationRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockRateLimitConfigurationRequest();
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
        const message = createBaseQueryBlockRateLimitConfigurationRequest();
        return message;
    },
};
function createBaseQueryBlockRateLimitConfigurationResponse() {
    return {
        blockRateLimitConfig: undefined,
    };
}
export const QueryBlockRateLimitConfigurationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockRateLimitConfig !== undefined) {
            BlockRateLimitConfiguration.encode(message.blockRateLimitConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockRateLimitConfigurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockRateLimitConfig = BlockRateLimitConfiguration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBlockRateLimitConfigurationResponse();
        message.blockRateLimitConfig =
            object.blockRateLimitConfig !== undefined &&
                object.blockRateLimitConfig !== null
                ? BlockRateLimitConfiguration.fromPartial(object.blockRateLimitConfig)
                : undefined;
        return message;
    },
};
function createBaseQueryStatefulOrderRequest() {
    return {
        orderId: undefined,
    };
}
export const QueryStatefulOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== undefined) {
            OrderId.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStatefulOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = OrderId.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStatefulOrderRequest();
        message.orderId =
            object.orderId !== undefined && object.orderId !== null
                ? OrderId.fromPartial(object.orderId)
                : undefined;
        return message;
    },
};
function createBaseQueryStatefulOrderResponse() {
    return {
        orderPlacement: undefined,
        fillAmount: Long.UZERO,
        triggered: false,
    };
}
export const QueryStatefulOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderPlacement !== undefined) {
            LongTermOrderPlacement.encode(message.orderPlacement, writer.uint32(10).fork()).ldelim();
        }
        if (!message.fillAmount.isZero()) {
            writer.uint32(16).uint64(message.fillAmount);
        }
        if (message.triggered === true) {
            writer.uint32(24).bool(message.triggered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStatefulOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderPlacement = LongTermOrderPlacement.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fillAmount = reader.uint64();
                    break;
                case 3:
                    message.triggered = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStatefulOrderResponse();
        message.orderPlacement =
            object.orderPlacement !== undefined && object.orderPlacement !== null
                ? LongTermOrderPlacement.fromPartial(object.orderPlacement)
                : undefined;
        message.fillAmount =
            object.fillAmount !== undefined && object.fillAmount !== null
                ? Long.fromValue(object.fillAmount)
                : Long.UZERO;
        message.triggered = object.triggered ?? false;
        return message;
    },
};
function createBaseQueryLiquidationsConfigurationRequest() {
    return {};
}
export const QueryLiquidationsConfigurationRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationsConfigurationRequest();
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
        const message = createBaseQueryLiquidationsConfigurationRequest();
        return message;
    },
};
function createBaseQueryLiquidationsConfigurationResponse() {
    return {
        liquidationsConfig: undefined,
    };
}
export const QueryLiquidationsConfigurationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidationsConfig !== undefined) {
            LiquidationsConfig.encode(message.liquidationsConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationsConfigurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationsConfig = LiquidationsConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidationsConfigurationResponse();
        message.liquidationsConfig =
            object.liquidationsConfig !== undefined &&
                object.liquidationsConfig !== null
                ? LiquidationsConfig.fromPartial(object.liquidationsConfig)
                : undefined;
        return message;
    },
};
function createBaseQueryNextClobPairIdRequest() {
    return {};
}
export const QueryNextClobPairIdRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextClobPairIdRequest();
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
        const message = createBaseQueryNextClobPairIdRequest();
        return message;
    },
};
function createBaseQueryNextClobPairIdResponse() {
    return {
        nextClobPairId: 0,
    };
}
export const QueryNextClobPairIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextClobPairId !== 0) {
            writer.uint32(8).uint32(message.nextClobPairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextClobPairIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextClobPairId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryNextClobPairIdResponse();
        message.nextClobPairId = object.nextClobPairId ?? 0;
        return message;
    },
};
function createBaseStreamOrderbookUpdatesRequest() {
    return {
        clobPairId: [],
        subaccountIds: [],
        marketIds: [],
    };
}
export const StreamOrderbookUpdatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.clobPairId) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.subaccountIds) {
            SubaccountId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.marketIds) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.clobPairId.push(reader.uint32());
                        }
                    }
                    else {
                        message.clobPairId.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.subaccountIds.push(SubaccountId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.marketIds.push(reader.uint32());
                        }
                    }
                    else {
                        message.marketIds.push(reader.uint32());
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
        const message = createBaseStreamOrderbookUpdatesRequest();
        message.clobPairId = object.clobPairId?.map((e) => e) || [];
        message.subaccountIds =
            object.subaccountIds?.map((e) => SubaccountId.fromPartial(e)) || [];
        message.marketIds = object.marketIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseStreamOrderbookUpdatesResponse() {
    return {
        updates: [],
    };
}
export const StreamOrderbookUpdatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.updates) {
            StreamUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(StreamUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamOrderbookUpdatesResponse();
        message.updates =
            object.updates?.map((e) => StreamUpdate.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStreamUpdate() {
    return {
        blockHeight: 0,
        execMode: 0,
        orderbookUpdate: undefined,
        orderFill: undefined,
        takerOrder: undefined,
        subaccountUpdate: undefined,
        priceUpdate: undefined,
    };
}
export const StreamUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint32(message.blockHeight);
        }
        if (message.execMode !== 0) {
            writer.uint32(16).uint32(message.execMode);
        }
        if (message.orderbookUpdate !== undefined) {
            StreamOrderbookUpdate.encode(message.orderbookUpdate, writer.uint32(26).fork()).ldelim();
        }
        if (message.orderFill !== undefined) {
            StreamOrderbookFill.encode(message.orderFill, writer.uint32(34).fork()).ldelim();
        }
        if (message.takerOrder !== undefined) {
            StreamTakerOrder.encode(message.takerOrder, writer.uint32(42).fork()).ldelim();
        }
        if (message.subaccountUpdate !== undefined) {
            StreamSubaccountUpdate.encode(message.subaccountUpdate, writer.uint32(50).fork()).ldelim();
        }
        if (message.priceUpdate !== undefined) {
            StreamPriceUpdate.encode(message.priceUpdate, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint32();
                    break;
                case 2:
                    message.execMode = reader.uint32();
                    break;
                case 3:
                    message.orderbookUpdate = StreamOrderbookUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.orderFill = StreamOrderbookFill.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.takerOrder = StreamTakerOrder.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.subaccountUpdate = StreamSubaccountUpdate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.priceUpdate = StreamPriceUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamUpdate();
        message.blockHeight = object.blockHeight ?? 0;
        message.execMode = object.execMode ?? 0;
        message.orderbookUpdate =
            object.orderbookUpdate !== undefined && object.orderbookUpdate !== null
                ? StreamOrderbookUpdate.fromPartial(object.orderbookUpdate)
                : undefined;
        message.orderFill =
            object.orderFill !== undefined && object.orderFill !== null
                ? StreamOrderbookFill.fromPartial(object.orderFill)
                : undefined;
        message.takerOrder =
            object.takerOrder !== undefined && object.takerOrder !== null
                ? StreamTakerOrder.fromPartial(object.takerOrder)
                : undefined;
        message.subaccountUpdate =
            object.subaccountUpdate !== undefined && object.subaccountUpdate !== null
                ? StreamSubaccountUpdate.fromPartial(object.subaccountUpdate)
                : undefined;
        message.priceUpdate =
            object.priceUpdate !== undefined && object.priceUpdate !== null
                ? StreamPriceUpdate.fromPartial(object.priceUpdate)
                : undefined;
        return message;
    },
};
function createBaseStreamOrderbookUpdate() {
    return {
        snapshot: false,
        updates: [],
    };
}
export const StreamOrderbookUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshot === true) {
            writer.uint32(8).bool(message.snapshot);
        }
        for (const v of message.updates) {
            OffChainUpdateV1.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = reader.bool();
                    break;
                case 2:
                    message.updates.push(OffChainUpdateV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamOrderbookUpdate();
        message.snapshot = object.snapshot ?? false;
        message.updates =
            object.updates?.map((e) => OffChainUpdateV1.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStreamOrderbookFill() {
    return {
        clobMatch: undefined,
        orders: [],
        fillAmounts: [],
    };
}
export const StreamOrderbookFill = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clobMatch !== undefined) {
            ClobMatch.encode(message.clobMatch, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.fillAmounts) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOrderbookFill();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobMatch = ClobMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fillAmounts.push(reader.uint64());
                        }
                    }
                    else {
                        message.fillAmounts.push(reader.uint64());
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
        const message = createBaseStreamOrderbookFill();
        message.clobMatch =
            object.clobMatch !== undefined && object.clobMatch !== null
                ? ClobMatch.fromPartial(object.clobMatch)
                : undefined;
        message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
        message.fillAmounts =
            object.fillAmounts?.map((e) => Long.fromValue(e)) || [];
        return message;
    },
};
function createBaseStreamTakerOrder() {
    return {
        order: undefined,
        liquidationOrder: undefined,
        takerOrderStatus: undefined,
    };
}
export const StreamTakerOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.liquidationOrder !== undefined) {
            StreamLiquidationOrder.encode(message.liquidationOrder, writer.uint32(18).fork()).ldelim();
        }
        if (message.takerOrderStatus !== undefined) {
            StreamTakerOrderStatus.encode(message.takerOrderStatus, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTakerOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.liquidationOrder = StreamLiquidationOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.takerOrderStatus = StreamTakerOrderStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamTakerOrder();
        message.order =
            object.order !== undefined && object.order !== null
                ? Order.fromPartial(object.order)
                : undefined;
        message.liquidationOrder =
            object.liquidationOrder !== undefined && object.liquidationOrder !== null
                ? StreamLiquidationOrder.fromPartial(object.liquidationOrder)
                : undefined;
        message.takerOrderStatus =
            object.takerOrderStatus !== undefined && object.takerOrderStatus !== null
                ? StreamTakerOrderStatus.fromPartial(object.takerOrderStatus)
                : undefined;
        return message;
    },
};
function createBaseStreamTakerOrderStatus() {
    return {
        orderStatus: 0,
        remainingQuantums: Long.UZERO,
        optimisticallyFilledQuantums: Long.UZERO,
    };
}
export const StreamTakerOrderStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderStatus !== 0) {
            writer.uint32(8).uint32(message.orderStatus);
        }
        if (!message.remainingQuantums.isZero()) {
            writer.uint32(16).uint64(message.remainingQuantums);
        }
        if (!message.optimisticallyFilledQuantums.isZero()) {
            writer.uint32(24).uint64(message.optimisticallyFilledQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTakerOrderStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderStatus = reader.uint32();
                    break;
                case 2:
                    message.remainingQuantums = reader.uint64();
                    break;
                case 3:
                    message.optimisticallyFilledQuantums = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamTakerOrderStatus();
        message.orderStatus = object.orderStatus ?? 0;
        message.remainingQuantums =
            object.remainingQuantums !== undefined &&
                object.remainingQuantums !== null
                ? Long.fromValue(object.remainingQuantums)
                : Long.UZERO;
        message.optimisticallyFilledQuantums =
            object.optimisticallyFilledQuantums !== undefined &&
                object.optimisticallyFilledQuantums !== null
                ? Long.fromValue(object.optimisticallyFilledQuantums)
                : Long.UZERO;
        return message;
    },
};
//# sourceMappingURL=query.js.map