import { ClobPair } from './clob_pair.js';
import { LiquidationsConfig, } from './liquidations_config.js';
import { BlockRateLimitConfiguration, } from './block_rate_limit_config.js';
import { EquityTierLimitConfiguration, } from './equity_tier_limit_config.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        clobPairs: [],
        liquidationsConfig: undefined,
        blockRateLimitConfig: undefined,
        equityTierLimitConfig: undefined,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clobPairs) {
            ClobPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.liquidationsConfig !== undefined) {
            LiquidationsConfig.encode(message.liquidationsConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockRateLimitConfig !== undefined) {
            BlockRateLimitConfiguration.encode(message.blockRateLimitConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.equityTierLimitConfig !== undefined) {
            EquityTierLimitConfiguration.encode(message.equityTierLimitConfig, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clobPairs.push(ClobPair.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.liquidationsConfig = LiquidationsConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockRateLimitConfig = BlockRateLimitConfiguration.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const message = createBaseGenesisState();
        message.clobPairs =
            object.clobPairs?.map((e) => ClobPair.fromPartial(e)) || [];
        message.liquidationsConfig =
            object.liquidationsConfig !== undefined &&
                object.liquidationsConfig !== null
                ? LiquidationsConfig.fromPartial(object.liquidationsConfig)
                : undefined;
        message.blockRateLimitConfig =
            object.blockRateLimitConfig !== undefined &&
                object.blockRateLimitConfig !== null
                ? BlockRateLimitConfiguration.fromPartial(object.blockRateLimitConfig)
                : undefined;
        message.equityTierLimitConfig =
            object.equityTierLimitConfig !== undefined &&
                object.equityTierLimitConfig !== null
                ? EquityTierLimitConfiguration.fromPartial(object.equityTierLimitConfig)
                : undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map