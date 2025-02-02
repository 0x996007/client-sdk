import { MarketMapperRevenueShareParams, MarketMapperRevenueShareParamsSDKType } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines `x/revshare`'s genesis state. */
export interface GenesisState {
    params?: MarketMapperRevenueShareParams;
}
/** GenesisState defines `x/revshare`'s genesis state. */
export interface GenesisStateSDKType {
    params?: MarketMapperRevenueShareParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
