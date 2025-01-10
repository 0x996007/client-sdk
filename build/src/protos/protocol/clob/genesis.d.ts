import { ClobPair, ClobPairSDKType } from './clob_pair.js';
import { LiquidationsConfig, LiquidationsConfigSDKType } from './liquidations_config.js';
import { BlockRateLimitConfiguration, BlockRateLimitConfigurationSDKType } from './block_rate_limit_config.js';
import { EquityTierLimitConfiguration, EquityTierLimitConfigurationSDKType } from './equity_tier_limit_config.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines the clob module's genesis state. */
export interface GenesisState {
    clobPairs: ClobPair[];
    liquidationsConfig?: LiquidationsConfig;
    blockRateLimitConfig?: BlockRateLimitConfiguration;
    equityTierLimitConfig?: EquityTierLimitConfiguration;
}
/** GenesisState defines the clob module's genesis state. */
export interface GenesisStateSDKType {
    clob_pairs: ClobPairSDKType[];
    liquidations_config?: LiquidationsConfigSDKType;
    block_rate_limit_config?: BlockRateLimitConfigurationSDKType;
    equity_tier_limit_config?: EquityTierLimitConfigurationSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
