import { ListingVaultDepositParams, ListingVaultDepositParamsSDKType } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** GenesisState defines `x/listing`'s genesis state. */
export interface GenesisState {
    /**
     * hard_cap_for_markets is the hard cap for the number of markets that can be
     * listed
     */
    hardCapForMarkets: number;
    /** listing_vault_deposit_params is the params for PML megavault deposits */
    listingVaultDepositParams?: ListingVaultDepositParams;
}
/** GenesisState defines `x/listing`'s genesis state. */
export interface GenesisStateSDKType {
    hard_cap_for_markets: number;
    listing_vault_deposit_params?: ListingVaultDepositParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
