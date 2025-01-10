import { SubaccountId, SubaccountIdSDKType } from '../subaccounts/subaccount.js';
import { ListingVaultDepositParams, ListingVaultDepositParamsSDKType } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/**
 * MsgSetMarketsHardCap is used to set a hard cap on the number of markets
 * listed
 */
export interface MsgSetMarketsHardCap {
    authority: string;
    /** Hard cap for the total number of markets listed */
    hardCapForMarkets: number;
}
/**
 * MsgSetMarketsHardCap is used to set a hard cap on the number of markets
 * listed
 */
export interface MsgSetMarketsHardCapSDKType {
    authority: string;
    hard_cap_for_markets: number;
}
/** MsgSetMarketsHardCapResponse defines the MsgSetMarketsHardCap response */
export interface MsgSetMarketsHardCapResponse {
}
/** MsgSetMarketsHardCapResponse defines the MsgSetMarketsHardCap response */
export interface MsgSetMarketsHardCapResponseSDKType {
}
/**
 * MsgCreateMarketPermissionless is a message used to create new markets without
 * going through x/gov
 */
export interface MsgCreateMarketPermissionless {
    /** The name of the `Perpetual` (e.g. `BTC-USD`). */
    ticker: string;
    /** The subaccount to deposit from. */
    subaccountId?: SubaccountId;
}
/**
 * MsgCreateMarketPermissionless is a message used to create new markets without
 * going through x/gov
 */
export interface MsgCreateMarketPermissionlessSDKType {
    ticker: string;
    subaccount_id?: SubaccountIdSDKType;
}
/**
 * MsgCreateMarketPermissionlessResponse defines the
 * MsgCreateMarketPermissionless response
 */
export interface MsgCreateMarketPermissionlessResponse {
}
/**
 * MsgCreateMarketPermissionlessResponse defines the
 * MsgCreateMarketPermissionless response
 */
export interface MsgCreateMarketPermissionlessResponseSDKType {
}
/**
 * MsgSetListingVaultDepositParams is a message used to set PML megavault
 * deposit params
 */
export interface MsgSetListingVaultDepositParams {
    authority: string;
    /** Params which define the vault deposit for market listing */
    params?: ListingVaultDepositParams;
}
/**
 * MsgSetListingVaultDepositParams is a message used to set PML megavault
 * deposit params
 */
export interface MsgSetListingVaultDepositParamsSDKType {
    authority: string;
    params?: ListingVaultDepositParamsSDKType;
}
/**
 * MsgSetListingVaultDepositParamsResponse defines the
 * MsgSetListingVaultDepositParams response
 */
export interface MsgSetListingVaultDepositParamsResponse {
}
/**
 * MsgSetListingVaultDepositParamsResponse defines the
 * MsgSetListingVaultDepositParams response
 */
export interface MsgSetListingVaultDepositParamsResponseSDKType {
}
/**
 * MsgUpgradeIsolatedPerpetualToCross is used to upgrade a market from
 * isolated margin to cross margin.
 */
export interface MsgUpgradeIsolatedPerpetualToCross {
    authority: string;
    /** ID of the perpetual to be upgraded to CROSS */
    perpetualId: number;
}
/**
 * MsgUpgradeIsolatedPerpetualToCross is used to upgrade a market from
 * isolated margin to cross margin.
 */
export interface MsgUpgradeIsolatedPerpetualToCrossSDKType {
    authority: string;
    perpetual_id: number;
}
/**
 * MsgUpgradeIsolatedPerpetualToCrossResponse defines the
 * UpgradeIsolatedPerpetualToCross response type.
 */
export interface MsgUpgradeIsolatedPerpetualToCrossResponse {
}
/**
 * MsgUpgradeIsolatedPerpetualToCrossResponse defines the
 * UpgradeIsolatedPerpetualToCross response type.
 */
export interface MsgUpgradeIsolatedPerpetualToCrossResponseSDKType {
}
export declare const MsgSetMarketsHardCap: {
    encode(message: MsgSetMarketsHardCap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMarketsHardCap;
    fromPartial(object: DeepPartial<MsgSetMarketsHardCap>): MsgSetMarketsHardCap;
};
export declare const MsgSetMarketsHardCapResponse: {
    encode(_: MsgSetMarketsHardCapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMarketsHardCapResponse;
    fromPartial(_: DeepPartial<MsgSetMarketsHardCapResponse>): MsgSetMarketsHardCapResponse;
};
export declare const MsgCreateMarketPermissionless: {
    encode(message: MsgCreateMarketPermissionless, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarketPermissionless;
    fromPartial(object: DeepPartial<MsgCreateMarketPermissionless>): MsgCreateMarketPermissionless;
};
export declare const MsgCreateMarketPermissionlessResponse: {
    encode(_: MsgCreateMarketPermissionlessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarketPermissionlessResponse;
    fromPartial(_: DeepPartial<MsgCreateMarketPermissionlessResponse>): MsgCreateMarketPermissionlessResponse;
};
export declare const MsgSetListingVaultDepositParams: {
    encode(message: MsgSetListingVaultDepositParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetListingVaultDepositParams;
    fromPartial(object: DeepPartial<MsgSetListingVaultDepositParams>): MsgSetListingVaultDepositParams;
};
export declare const MsgSetListingVaultDepositParamsResponse: {
    encode(_: MsgSetListingVaultDepositParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetListingVaultDepositParamsResponse;
    fromPartial(_: DeepPartial<MsgSetListingVaultDepositParamsResponse>): MsgSetListingVaultDepositParamsResponse;
};
export declare const MsgUpgradeIsolatedPerpetualToCross: {
    encode(message: MsgUpgradeIsolatedPerpetualToCross, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeIsolatedPerpetualToCross;
    fromPartial(object: DeepPartial<MsgUpgradeIsolatedPerpetualToCross>): MsgUpgradeIsolatedPerpetualToCross;
};
export declare const MsgUpgradeIsolatedPerpetualToCrossResponse: {
    encode(_: MsgUpgradeIsolatedPerpetualToCrossResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeIsolatedPerpetualToCrossResponse;
    fromPartial(_: DeepPartial<MsgUpgradeIsolatedPerpetualToCrossResponse>): MsgUpgradeIsolatedPerpetualToCrossResponse;
};
