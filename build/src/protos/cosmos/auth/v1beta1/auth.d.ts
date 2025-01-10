import { Any, AnySDKType } from '../../../google/protobuf/any.js';
import { Long, DeepPartial } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    address: string;
    pubKey?: Any;
    accountNumber: Long;
    sequence: Long;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountSDKType {
    address: string;
    pub_key?: AnySDKType;
    account_number: Long;
    sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    baseAccount?: BaseAccount;
    name: string;
    permissions: string[];
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountSDKType {
    base_account?: BaseAccountSDKType;
    name: string;
    permissions: string[];
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredential {
    /** module_name is the name of the module used for address derivation (passed into address.Module). */
    moduleName: string;
    /**
     * derivation_keys is for deriving a module account address (passed into address.Module)
     * adding more keys creates sub-account addresses (passed into address.Derive)
     */
    derivationKeys: Uint8Array[];
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredentialSDKType {
    module_name: string;
    derivation_keys: Uint8Array[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: Long;
    txSigLimit: Long;
    txSizeCostPerByte: Long;
    sigVerifyCostEd25519: Long;
    sigVerifyCostSecp256k1: Long;
}
/** Params defines the parameters for the auth module. */
export interface ParamsSDKType {
    max_memo_characters: Long;
    tx_sig_limit: Long;
    tx_size_cost_per_byte: Long;
    sig_verify_cost_ed25519: Long;
    sig_verify_cost_secp256k1: Long;
}
export declare const BaseAccount: {
    encode(message: BaseAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount;
    fromPartial(object: DeepPartial<BaseAccount>): BaseAccount;
};
export declare const ModuleAccount: {
    encode(message: ModuleAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount;
    fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount;
};
export declare const ModuleCredential: {
    encode(message: ModuleCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleCredential;
    fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
