import * as _m0 from 'protobufjs/minimal.js';
function createBaseQuotingParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array(),
    };
}
export const QuotingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuotingParams();
        message.layers = object.layers ?? 0;
        message.spreadMinPpm = object.spreadMinPpm ?? 0;
        message.spreadBufferPpm = object.spreadBufferPpm ?? 0;
        message.skewFactorPpm = object.skewFactorPpm ?? 0;
        message.orderSizePctPpm = object.orderSizePctPpm ?? 0;
        message.orderExpirationSeconds = object.orderExpirationSeconds ?? 0;
        message.activationThresholdQuoteQuantums =
            object.activationThresholdQuoteQuantums ?? new Uint8Array();
        return message;
    },
};
function createBaseVaultParams() {
    return {
        status: 0,
        quotingParams: undefined,
    };
}
export const VaultParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.quotingParams !== undefined) {
            QuotingParams.encode(message.quotingParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
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
        const message = createBaseVaultParams();
        message.status = object.status ?? 0;
        message.quotingParams =
            object.quotingParams !== undefined && object.quotingParams !== null
                ? QuotingParams.fromPartial(object.quotingParams)
                : undefined;
        return message;
    },
};
function createBaseOperatorParams() {
    return {
        operator: '',
        metadata: undefined,
    };
}
export const OperatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator !== '') {
            writer.uint32(10).string(message.operator);
        }
        if (message.metadata !== undefined) {
            OperatorMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.metadata = OperatorMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOperatorParams();
        message.operator = object.operator ?? '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? OperatorMetadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};
function createBaseOperatorMetadata() {
    return {
        name: '',
        description: '',
    };
}
export const OperatorMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperatorMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOperatorMetadata();
        message.name = object.name ?? '';
        message.description = object.description ?? '';
        return message;
    },
};
function createBaseParams() {
    return {
        layers: 0,
        spreadMinPpm: 0,
        spreadBufferPpm: 0,
        skewFactorPpm: 0,
        orderSizePctPpm: 0,
        orderExpirationSeconds: 0,
        activationThresholdQuoteQuantums: new Uint8Array(),
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.layers !== 0) {
            writer.uint32(8).uint32(message.layers);
        }
        if (message.spreadMinPpm !== 0) {
            writer.uint32(16).uint32(message.spreadMinPpm);
        }
        if (message.spreadBufferPpm !== 0) {
            writer.uint32(24).uint32(message.spreadBufferPpm);
        }
        if (message.skewFactorPpm !== 0) {
            writer.uint32(32).uint32(message.skewFactorPpm);
        }
        if (message.orderSizePctPpm !== 0) {
            writer.uint32(40).uint32(message.orderSizePctPpm);
        }
        if (message.orderExpirationSeconds !== 0) {
            writer.uint32(48).uint32(message.orderExpirationSeconds);
        }
        if (message.activationThresholdQuoteQuantums.length !== 0) {
            writer.uint32(58).bytes(message.activationThresholdQuoteQuantums);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.layers = reader.uint32();
                    break;
                case 2:
                    message.spreadMinPpm = reader.uint32();
                    break;
                case 3:
                    message.spreadBufferPpm = reader.uint32();
                    break;
                case 4:
                    message.skewFactorPpm = reader.uint32();
                    break;
                case 5:
                    message.orderSizePctPpm = reader.uint32();
                    break;
                case 6:
                    message.orderExpirationSeconds = reader.uint32();
                    break;
                case 7:
                    message.activationThresholdQuoteQuantums = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.layers = object.layers ?? 0;
        message.spreadMinPpm = object.spreadMinPpm ?? 0;
        message.spreadBufferPpm = object.spreadBufferPpm ?? 0;
        message.skewFactorPpm = object.skewFactorPpm ?? 0;
        message.orderSizePctPpm = object.orderSizePctPpm ?? 0;
        message.orderExpirationSeconds = object.orderExpirationSeconds ?? 0;
        message.activationThresholdQuoteQuantums =
            object.activationThresholdQuoteQuantums ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=params.js.map