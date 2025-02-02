import * as _2 from './app/runtime/v1alpha1/module.js';
import * as _3 from './app/v1alpha1/config.js';
import * as _4 from './app/v1alpha1/module.js';
import * as _5 from './app/v1alpha1/query.js';
import * as _6 from './auth/module/v1/module.js';
import * as _7 from './auth/v1beta1/auth.js';
import * as _8 from './auth/v1beta1/genesis.js';
import * as _9 from './auth/v1beta1/query.js';
import * as _10 from './auth/v1beta1/tx.js';
import * as _11 from './authz/module/v1/module.js';
import * as _12 from './authz/v1beta1/authz.js';
import * as _13 from './authz/v1beta1/event.js';
import * as _14 from './authz/v1beta1/genesis.js';
import * as _15 from './authz/v1beta1/query.js';
import * as _16 from './authz/v1beta1/tx.js';
import * as _17 from './bank/module/v1/module.js';
import * as _18 from './bank/v1beta1/authz.js';
import * as _19 from './bank/v1beta1/bank.js';
import * as _20 from './bank/v1beta1/genesis.js';
import * as _21 from './bank/v1beta1/query.js';
import * as _22 from './bank/v1beta1/tx.js';
import * as _23 from './base/abci/v1beta1/abci.js';
import * as _24 from './base/node/v1beta1/query.js';
import * as _25 from './base/query/v1beta1/pagination.js';
import * as _26 from './base/reflection/v1beta1/reflection.js';
import * as _27 from './base/reflection/v2alpha1/reflection.js';
import * as _28 from './base/tendermint/v1beta1/query.js';
import * as _29 from './base/tendermint/v1beta1/types.js';
import * as _30 from './base/v1beta1/coin.js';
import * as _31 from './circuit/module/v1/module.js';
import * as _32 from './circuit/v1/query.js';
import * as _33 from './circuit/v1/tx.js';
import * as _34 from './circuit/v1/types.js';
import * as _35 from './consensus/module/v1/module.js';
import * as _36 from './consensus/v1/query.js';
import * as _37 from './consensus/v1/tx.js';
import * as _38 from './crisis/module/v1/module.js';
import * as _39 from './crisis/v1beta1/genesis.js';
import * as _40 from './crisis/v1beta1/tx.js';
import * as _41 from './crypto/ed25519/keys.js';
import * as _42 from './crypto/hd/v1/hd.js';
import * as _43 from './crypto/keyring/v1/record.js';
import * as _44 from './crypto/multisig/keys.js';
import * as _45 from './crypto/secp256k1/keys.js';
import * as _46 from './crypto/secp256r1/keys.js';
import * as _47 from './distribution/module/v1/module.js';
import * as _48 from './distribution/v1beta1/distribution.js';
import * as _49 from './distribution/v1beta1/genesis.js';
import * as _50 from './distribution/v1beta1/query.js';
import * as _51 from './distribution/v1beta1/tx.js';
import * as _52 from './evidence/module/v1/module.js';
import * as _53 from './evidence/v1beta1/evidence.js';
import * as _54 from './evidence/v1beta1/genesis.js';
import * as _55 from './evidence/v1beta1/query.js';
import * as _56 from './evidence/v1beta1/tx.js';
import * as _57 from './feegrant/module/v1/module.js';
import * as _58 from './feegrant/v1beta1/feegrant.js';
import * as _59 from './feegrant/v1beta1/genesis.js';
import * as _60 from './feegrant/v1beta1/query.js';
import * as _61 from './feegrant/v1beta1/tx.js';
import * as _62 from './genutil/module/v1/module.js';
import * as _63 from './genutil/v1beta1/genesis.js';
import * as _64 from './gov/module/v1/module.js';
import * as _65 from './gov/v1/genesis.js';
import * as _66 from './gov/v1/gov.js';
import * as _67 from './gov/v1/query.js';
import * as _68 from './gov/v1/tx.js';
import * as _69 from './gov/v1beta1/genesis.js';
import * as _70 from './gov/v1beta1/gov.js';
import * as _71 from './gov/v1beta1/query.js';
import * as _72 from './gov/v1beta1/tx.js';
import * as _73 from './group/module/v1/module.js';
import * as _74 from './group/v1/events.js';
import * as _75 from './group/v1/genesis.js';
import * as _76 from './group/v1/query.js';
import * as _77 from './group/v1/tx.js';
import * as _78 from './group/v1/types.js';
import * as _79 from './mint/module/v1/module.js';
import * as _80 from './mint/v1beta1/genesis.js';
import * as _81 from './mint/v1beta1/mint.js';
import * as _82 from './mint/v1beta1/query.js';
import * as _83 from './mint/v1beta1/tx.js';
import * as _86 from './nft/module/v1/module.js';
import * as _87 from './nft/v1beta1/event.js';
import * as _88 from './nft/v1beta1/genesis.js';
import * as _89 from './nft/v1beta1/nft.js';
import * as _90 from './nft/v1beta1/query.js';
import * as _91 from './nft/v1beta1/tx.js';
import * as _92 from './orm/module/v1alpha1/module.js';
import * as _93 from './orm/query/v1alpha1/query.js';
import * as _94 from './orm/v1/orm.js';
import * as _95 from './orm/v1alpha1/schema.js';
import * as _96 from './params/module/v1/module.js';
import * as _97 from './params/v1beta1/params.js';
import * as _98 from './params/v1beta1/query.js';
import * as _100 from './reflection/v1/reflection.js';
import * as _101 from './slashing/module/v1/module.js';
import * as _102 from './slashing/v1beta1/genesis.js';
import * as _103 from './slashing/v1beta1/query.js';
import * as _104 from './slashing/v1beta1/slashing.js';
import * as _105 from './slashing/v1beta1/tx.js';
import * as _106 from './staking/module/v1/module.js';
import * as _107 from './staking/v1beta1/authz.js';
import * as _108 from './staking/v1beta1/genesis.js';
import * as _109 from './staking/v1beta1/query.js';
import * as _110 from './staking/v1beta1/staking.js';
import * as _111 from './staking/v1beta1/tx.js';
import * as _112 from './store/internal/kv/v1beta1/kv.js';
import * as _113 from './store/snapshots/v1/snapshot.js';
import * as _114 from './store/streaming/abci/grpc.js';
import * as _115 from './store/v1beta1/commit_info.js';
import * as _116 from './store/v1beta1/listening.js';
import * as _117 from './tx/config/v1/config.js';
import * as _118 from './tx/signing/v1beta1/signing.js';
import * as _119 from './tx/v1beta1/service.js';
import * as _120 from './tx/v1beta1/tx.js';
import * as _121 from './upgrade/module/v1/module.js';
import * as _122 from './upgrade/v1beta1/query.js';
import * as _123 from './upgrade/v1beta1/tx.js';
import * as _124 from './upgrade/v1beta1/upgrade.js';
import * as _125 from './vesting/module/v1/module.js';
import * as _126 from './vesting/v1beta1/tx.js';
import * as _127 from './vesting/v1beta1/vesting.js';
import * as _271 from './auth/v1beta1/query.lcd.js';
import * as _272 from './authz/v1beta1/query.lcd.js';
import * as _273 from './bank/v1beta1/query.lcd.js';
import * as _274 from './base/node/v1beta1/query.lcd.js';
import * as _275 from './base/tendermint/v1beta1/query.lcd.js';
import * as _276 from './circuit/v1/query.lcd.js';
import * as _277 from './consensus/v1/query.lcd.js';
import * as _278 from './distribution/v1beta1/query.lcd.js';
import * as _279 from './evidence/v1beta1/query.lcd.js';
import * as _280 from './feegrant/v1beta1/query.lcd.js';
import * as _281 from './gov/v1/query.lcd.js';
import * as _282 from './gov/v1beta1/query.lcd.js';
import * as _283 from './group/v1/query.lcd.js';
import * as _284 from './mint/v1beta1/query.lcd.js';
import * as _285 from './nft/v1beta1/query.lcd.js';
import * as _286 from './params/v1beta1/query.lcd.js';
import * as _287 from './slashing/v1beta1/query.lcd.js';
import * as _288 from './staking/v1beta1/query.lcd.js';
import * as _289 from './tx/v1beta1/service.lcd.js';
import * as _290 from './upgrade/v1beta1/query.lcd.js';
import * as _291 from './app/v1alpha1/query.rpc.Query.js';
import * as _292 from './auth/v1beta1/query.rpc.Query.js';
import * as _293 from './authz/v1beta1/query.rpc.Query.js';
import * as _294 from './bank/v1beta1/query.rpc.Query.js';
import * as _295 from './base/node/v1beta1/query.rpc.Service.js';
import * as _296 from './base/tendermint/v1beta1/query.rpc.Service.js';
import * as _297 from './circuit/v1/query.rpc.Query.js';
import * as _298 from './consensus/v1/query.rpc.Query.js';
import * as _299 from './distribution/v1beta1/query.rpc.Query.js';
import * as _300 from './evidence/v1beta1/query.rpc.Query.js';
import * as _301 from './feegrant/v1beta1/query.rpc.Query.js';
import * as _302 from './gov/v1/query.rpc.Query.js';
import * as _303 from './gov/v1beta1/query.rpc.Query.js';
import * as _304 from './group/v1/query.rpc.Query.js';
import * as _305 from './mint/v1beta1/query.rpc.Query.js';
import * as _306 from './nft/v1beta1/query.rpc.Query.js';
import * as _307 from './orm/query/v1alpha1/query.rpc.Query.js';
import * as _308 from './params/v1beta1/query.rpc.Query.js';
import * as _309 from './slashing/v1beta1/query.rpc.Query.js';
import * as _310 from './staking/v1beta1/query.rpc.Query.js';
import * as _311 from './tx/v1beta1/service.rpc.Service.js';
import * as _312 from './upgrade/v1beta1/query.rpc.Query.js';
import * as _313 from './auth/v1beta1/tx.rpc.msg.js';
import * as _314 from './authz/v1beta1/tx.rpc.msg.js';
import * as _315 from './bank/v1beta1/tx.rpc.msg.js';
import * as _316 from './circuit/v1/tx.rpc.msg.js';
import * as _317 from './consensus/v1/tx.rpc.msg.js';
import * as _318 from './crisis/v1beta1/tx.rpc.msg.js';
import * as _319 from './distribution/v1beta1/tx.rpc.msg.js';
import * as _320 from './evidence/v1beta1/tx.rpc.msg.js';
import * as _321 from './feegrant/v1beta1/tx.rpc.msg.js';
import * as _322 from './gov/v1/tx.rpc.msg.js';
import * as _323 from './gov/v1beta1/tx.rpc.msg.js';
import * as _324 from './group/v1/tx.rpc.msg.js';
import * as _325 from './mint/v1beta1/tx.rpc.msg.js';
import * as _326 from './nft/v1beta1/tx.rpc.msg.js';
import * as _327 from './slashing/v1beta1/tx.rpc.msg.js';
import * as _328 from './staking/v1beta1/tx.rpc.msg.js';
import * as _329 from './upgrade/v1beta1/tx.rpc.msg.js';
import * as _330 from './vesting/v1beta1/tx.rpc.msg.js';
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _2.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _2.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_2.Module>): _2.Module;
                };
                StoreKeyConfig: {
                    encode(message: _2.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _2.StoreKeyConfig;
                    fromPartial(object: import("../helpers.js").DeepPartial<_2.StoreKeyConfig>): _2.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _5.QueryConfigRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _5.QueryConfigResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _4.ModuleDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _4.PackageReference;
                fromPartial(object: import("../helpers.js").DeepPartial<_4.PackageReference>): _4.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _4.MigrateFromInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _3.Config;
                fromPartial(object: import("../helpers.js").DeepPartial<_3.Config>): _3.Config;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _3.ModuleConfig;
                fromPartial(object: import("../helpers.js").DeepPartial<_3.ModuleConfig>): _3.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _3.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _3.GolangBinding;
                fromPartial(object: import("../helpers.js").DeepPartial<_3.GolangBinding>): _3.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _6.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _6.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_6.Module>): _6.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _6.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _6.ModuleAccountPermission;
                    fromPartial(object: import("../helpers.js").DeepPartial<_6.ModuleAccountPermission>): _6.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _271.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _10.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _10.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryModuleAccountsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_9.QueryModuleAccountsRequest>): _9.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryModuleAccountsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryModuleAccountsResponse>): _9.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _9.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.Bech32PrefixRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_9.Bech32PrefixRequest>): _9.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _9.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.Bech32PrefixResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.Bech32PrefixResponse>): _9.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _9.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.AddressBytesToStringRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.AddressBytesToStringRequest>): _9.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _9.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.AddressBytesToStringResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.AddressBytesToStringResponse>): _9.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _9.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.AddressStringToBytesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.AddressStringToBytesRequest>): _9.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _9.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.AddressStringToBytesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.AddressStringToBytesResponse>): _9.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountAddressByIDRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountAddressByIDRequest>): _9.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountAddressByIDResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountAddressByIDResponse>): _9.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _9.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountInfoRequest>): _9.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _9.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _9.QueryAccountInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_9.QueryAccountInfoResponse>): _9.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _8.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_8.GenesisState>): _8.GenesisState;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _7.BaseAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_7.BaseAccount>): _7.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _7.ModuleAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_7.ModuleAccount>): _7.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _7.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _7.ModuleCredential;
                fromPartial(object: import("../helpers.js").DeepPartial<_7.ModuleCredential>): _7.ModuleCredential;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _7.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_7.Params>): _7.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _11.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _11.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_11.Module>): _11.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _272.LCDQueryClient;
            MsgGrant: {
                encode(message: _16.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgGrant;
                fromPartial(object: import("../helpers.js").DeepPartial<_16.MsgGrant>): _16.MsgGrant;
            };
            MsgGrantResponse: {
                encode(_: _16.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgGrantResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_16.MsgGrantResponse>): _16.MsgGrantResponse;
            };
            MsgExec: {
                encode(message: _16.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgExec;
                fromPartial(object: import("../helpers.js").DeepPartial<_16.MsgExec>): _16.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _16.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgExecResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_16.MsgExecResponse>): _16.MsgExecResponse;
            };
            MsgRevoke: {
                encode(message: _16.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgRevoke;
                fromPartial(object: import("../helpers.js").DeepPartial<_16.MsgRevoke>): _16.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _16.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _16.MsgRevokeResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_16.MsgRevokeResponse>): _16.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _15.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGrantsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGrantsRequest>): _15.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _15.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGrantsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGrantsResponse>): _15.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _15.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGranterGrantsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGranterGrantsRequest>): _15.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _15.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGranterGrantsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGranterGrantsResponse>): _15.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _15.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGranteeGrantsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGranteeGrantsRequest>): _15.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _15.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _15.QueryGranteeGrantsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_15.QueryGranteeGrantsResponse>): _15.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _14.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_14.GenesisState>): _14.GenesisState;
            };
            EventGrant: {
                encode(message: _13.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _13.EventGrant;
                fromPartial(object: import("../helpers.js").DeepPartial<_13.EventGrant>): _13.EventGrant;
            };
            EventRevoke: {
                encode(message: _13.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _13.EventRevoke;
                fromPartial(object: import("../helpers.js").DeepPartial<_13.EventRevoke>): _13.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _12.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _12.GenericAuthorization;
                fromPartial(object: import("../helpers.js").DeepPartial<_12.GenericAuthorization>): _12.GenericAuthorization;
            };
            Grant: {
                encode(message: _12.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _12.Grant;
                fromPartial(object: import("../helpers.js").DeepPartial<_12.Grant>): _12.Grant;
            };
            GrantAuthorization: {
                encode(message: _12.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _12.GrantAuthorization;
                fromPartial(object: import("../helpers.js").DeepPartial<_12.GrantAuthorization>): _12.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _12.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _12.GrantQueueItem;
                fromPartial(object: import("../helpers.js").DeepPartial<_12.GrantQueueItem>): _12.GrantQueueItem;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _17.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _17.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_17.Module>): _17.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: _21.QueryDenomMetadataByQueryStringRequest): Promise<_21.QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _273.LCDQueryClient;
            MsgSend: {
                encode(message: _22.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgSend;
                fromPartial(object: import("../helpers.js").DeepPartial<_22.MsgSend>): _22.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _22.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgSendResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_22.MsgSendResponse>): _22.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _22.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgMultiSend;
                fromPartial(object: import("../helpers.js").DeepPartial<_22.MsgMultiSend>): _22.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _22.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgMultiSendResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_22.MsgMultiSendResponse>): _22.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _22.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_22.MsgUpdateParams>): _22.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_22.MsgUpdateParamsResponse>): _22.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _22.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgSetSendEnabled;
                fromPartial(object: import("../helpers.js").DeepPartial<_22.MsgSetSendEnabled>): _22.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _22.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _22.MsgSetSendEnabledResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_22.MsgSetSendEnabledResponse>): _22.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _21.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryBalanceRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryBalanceRequest>): _21.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _21.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryBalanceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryBalanceResponse>): _21.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _21.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryAllBalancesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryAllBalancesRequest>): _21.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _21.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryAllBalancesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryAllBalancesResponse>): _21.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _21.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySpendableBalancesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySpendableBalancesRequest>): _21.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _21.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySpendableBalancesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySpendableBalancesResponse>): _21.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _21.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySpendableBalanceByDenomRequest>): _21.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _21.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySpendableBalanceByDenomResponse>): _21.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _21.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryTotalSupplyRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryTotalSupplyRequest>): _21.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _21.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryTotalSupplyResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryTotalSupplyResponse>): _21.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _21.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySupplyOfRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySupplyOfRequest>): _21.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _21.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySupplyOfResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySupplyOfResponse>): _21.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _21.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomsMetadataRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomsMetadataRequest>): _21.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _21.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomsMetadataResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomsMetadataResponse>): _21.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _21.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomMetadataRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomMetadataRequest>): _21.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _21.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomMetadataResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomMetadataResponse>): _21.QueryDenomMetadataResponse;
            };
            QueryDenomMetadataByQueryStringRequest: {
                encode(message: _21.QueryDenomMetadataByQueryStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomMetadataByQueryStringRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomMetadataByQueryStringRequest>): _21.QueryDenomMetadataByQueryStringRequest;
            };
            QueryDenomMetadataByQueryStringResponse: {
                encode(message: _21.QueryDenomMetadataByQueryStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomMetadataByQueryStringResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomMetadataByQueryStringResponse>): _21.QueryDenomMetadataByQueryStringResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _21.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomOwnersRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomOwnersRequest>): _21.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _21.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.DenomOwner;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.DenomOwner>): _21.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _21.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QueryDenomOwnersResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QueryDenomOwnersResponse>): _21.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _21.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySendEnabledRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySendEnabledRequest>): _21.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _21.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _21.QuerySendEnabledResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_21.QuerySendEnabledResponse>): _21.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _20.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_20.GenesisState>): _20.GenesisState;
            };
            Balance: {
                encode(message: _20.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _20.Balance;
                fromPartial(object: import("../helpers.js").DeepPartial<_20.Balance>): _20.Balance;
            };
            Params: {
                encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.Params>): _19.Params;
            };
            SendEnabled: {
                encode(message: _19.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.SendEnabled;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.SendEnabled>): _19.SendEnabled;
            };
            Input: {
                encode(message: _19.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.Input;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.Input>): _19.Input;
            };
            Output: {
                encode(message: _19.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.Output;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.Output>): _19.Output;
            };
            Supply: {
                encode(message: _19.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.Supply;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.Supply>): _19.Supply;
            };
            DenomUnit: {
                encode(message: _19.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.DenomUnit;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.DenomUnit>): _19.DenomUnit;
            };
            Metadata: {
                encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _19.Metadata;
                fromPartial(object: import("../helpers.js").DeepPartial<_19.Metadata>): _19.Metadata;
            };
            SendAuthorization: {
                encode(message: _18.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _18.SendAuthorization;
                fromPartial(object: import("../helpers.js").DeepPartial<_18.SendAuthorization>): _18.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _23.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.TxResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.TxResponse>): _23.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _23.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.ABCIMessageLog;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.ABCIMessageLog>): _23.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _23.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.StringEvent;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.StringEvent>): _23.StringEvent;
                };
                Attribute: {
                    encode(message: _23.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.Attribute;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.Attribute>): _23.Attribute;
                };
                GasInfo: {
                    encode(message: _23.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.GasInfo;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.GasInfo>): _23.GasInfo;
                };
                Result: {
                    encode(message: _23.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.Result;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.Result>): _23.Result;
                };
                SimulationResponse: {
                    encode(message: _23.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.SimulationResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.SimulationResponse>): _23.SimulationResponse;
                };
                MsgData: {
                    encode(message: _23.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.MsgData;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.MsgData>): _23.MsgData;
                };
                TxMsgData: {
                    encode(message: _23.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.TxMsgData;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.TxMsgData>): _23.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _23.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.SearchTxsResult;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.SearchTxsResult>): _23.SearchTxsResult;
                };
                SearchBlocksResult: {
                    encode(message: _23.SearchBlocksResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _23.SearchBlocksResult;
                    fromPartial(object: import("../helpers.js").DeepPartial<_23.SearchBlocksResult>): _23.SearchBlocksResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _295.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _24.ConfigRequest): Promise<_24.ConfigResponse>;
                    status(request?: _24.StatusRequest): Promise<_24.StatusResponse>;
                };
                LCDQueryClient: typeof _274.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _24.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _24.ConfigRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_24.ConfigRequest>): _24.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _24.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _24.ConfigResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_24.ConfigResponse>): _24.ConfigResponse;
                };
                StatusRequest: {
                    encode(_: _24.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _24.StatusRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_24.StatusRequest>): _24.StatusRequest;
                };
                StatusResponse: {
                    encode(message: _24.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _24.StatusResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_24.StatusResponse>): _24.StatusResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _25.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _25.PageRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_25.PageRequest>): _25.PageRequest;
                };
                PageResponse: {
                    encode(message: _25.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _25.PageResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_25.PageResponse>): _25.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _26.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _26.ListAllInterfacesRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_26.ListAllInterfacesRequest>): _26.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _26.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _26.ListAllInterfacesResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_26.ListAllInterfacesResponse>): _26.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _26.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _26.ListImplementationsRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_26.ListImplementationsRequest>): _26.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _26.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _26.ListImplementationsResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_26.ListImplementationsResponse>): _26.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _27.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.AppDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.AppDescriptor>): _27.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _27.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.TxDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.TxDescriptor>): _27.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _27.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.AuthnDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.AuthnDescriptor>): _27.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _27.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.SigningModeDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.SigningModeDescriptor>): _27.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _27.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.ChainDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.ChainDescriptor>): _27.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _27.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.CodecDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.CodecDescriptor>): _27.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _27.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.InterfaceDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.InterfaceDescriptor>): _27.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _27.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.InterfaceImplementerDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.InterfaceImplementerDescriptor>): _27.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _27.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.InterfaceAcceptingMessageDescriptor>): _27.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _27.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.ConfigurationDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.ConfigurationDescriptor>): _27.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _27.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.MsgDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.MsgDescriptor>): _27.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _27.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetAuthnDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetAuthnDescriptorRequest>): _27.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _27.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetAuthnDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetAuthnDescriptorResponse>): _27.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _27.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetChainDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetChainDescriptorRequest>): _27.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _27.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetChainDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetChainDescriptorResponse>): _27.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _27.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetCodecDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetCodecDescriptorRequest>): _27.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _27.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetCodecDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetCodecDescriptorResponse>): _27.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _27.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetConfigurationDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetConfigurationDescriptorRequest>): _27.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _27.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetConfigurationDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetConfigurationDescriptorResponse>): _27.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _27.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetQueryServicesDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetQueryServicesDescriptorRequest>): _27.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _27.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetQueryServicesDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetQueryServicesDescriptorResponse>): _27.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _27.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetTxDescriptorRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_27.GetTxDescriptorRequest>): _27.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _27.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.GetTxDescriptorResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.GetTxDescriptorResponse>): _27.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _27.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.QueryServicesDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.QueryServicesDescriptor>): _27.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _27.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.QueryServiceDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.QueryServiceDescriptor>): _27.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _27.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _27.QueryMethodDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_27.QueryMethodDescriptor>): _27.QueryMethodDescriptor;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _296.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _28.GetNodeInfoRequest): Promise<_28.GetNodeInfoResponse>;
                    getSyncing(request?: _28.GetSyncingRequest): Promise<_28.GetSyncingResponse>;
                    getLatestBlock(request?: _28.GetLatestBlockRequest): Promise<_28.GetLatestBlockResponse>;
                    getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest): Promise<_28.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _275.LCDQueryClient;
                Block: {
                    encode(message: _29.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _29.Block;
                    fromPartial(object: import("../helpers.js").DeepPartial<_29.Block>): _29.Block;
                };
                Header: {
                    encode(message: _29.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _29.Header;
                    fromPartial(object: import("../helpers.js").DeepPartial<_29.Header>): _29.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _28.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetValidatorSetByHeightRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetValidatorSetByHeightRequest>): _28.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _28.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetValidatorSetByHeightResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetValidatorSetByHeightResponse>): _28.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _28.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetLatestValidatorSetRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetLatestValidatorSetRequest>): _28.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _28.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetLatestValidatorSetResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetLatestValidatorSetResponse>): _28.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.Validator;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.Validator>): _28.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _28.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetBlockByHeightRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetBlockByHeightRequest>): _28.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _28.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetBlockByHeightResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetBlockByHeightResponse>): _28.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _28.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetLatestBlockRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_28.GetLatestBlockRequest>): _28.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _28.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetLatestBlockResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetLatestBlockResponse>): _28.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _28.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetSyncingRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_28.GetSyncingRequest>): _28.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _28.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetSyncingResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetSyncingResponse>): _28.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _28.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetNodeInfoRequest;
                    fromPartial(_: import("../helpers.js").DeepPartial<_28.GetNodeInfoRequest>): _28.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _28.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.GetNodeInfoResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.GetNodeInfoResponse>): _28.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _28.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.VersionInfo;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.VersionInfo>): _28.VersionInfo;
                };
                Module: {
                    encode(message: _28.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.Module>): _28.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _28.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.ABCIQueryRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.ABCIQueryRequest>): _28.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _28.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.ABCIQueryResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.ABCIQueryResponse>): _28.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _28.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.ProofOp;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.ProofOp>): _28.ProofOp;
                };
                ProofOps: {
                    encode(message: _28.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _28.ProofOps;
                    fromPartial(object: import("../helpers.js").DeepPartial<_28.ProofOps>): _28.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _30.Coin;
                fromPartial(object: import("../helpers.js").DeepPartial<_30.Coin>): _30.Coin;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _30.DecCoin;
                fromPartial(object: import("../helpers.js").DeepPartial<_30.DecCoin>): _30.DecCoin;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _30.IntProto;
                fromPartial(object: import("../helpers.js").DeepPartial<_30.IntProto>): _30.IntProto;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _30.DecProto;
                fromPartial(object: import("../helpers.js").DeepPartial<_30.DecProto>): _30.DecProto;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _31.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _31.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_31.Module>): _31.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _316.MsgClientImpl;
            QueryClientImpl: typeof _297.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _32.QueryAccountRequest): Promise<_32.AccountResponse>;
                accounts(request?: _32.QueryAccountsRequest): Promise<_32.AccountsResponse>;
                disabledList(request?: _32.QueryDisabledListRequest): Promise<_32.DisabledListResponse>;
            };
            LCDQueryClient: typeof _276.LCDQueryClient;
            permissions_LevelFromJSON(object: any): _34.Permissions_Level;
            permissions_LevelToJSON(object: _34.Permissions_Level): string;
            Permissions_Level: typeof _34.Permissions_Level;
            Permissions_LevelSDKType: typeof _34.Permissions_Level;
            Permissions: {
                encode(message: _34.Permissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _34.Permissions;
                fromPartial(object: import("../helpers.js").DeepPartial<_34.Permissions>): _34.Permissions;
            };
            GenesisAccountPermissions: {
                encode(message: _34.GenesisAccountPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _34.GenesisAccountPermissions;
                fromPartial(object: import("../helpers.js").DeepPartial<_34.GenesisAccountPermissions>): _34.GenesisAccountPermissions;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _34.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_34.GenesisState>): _34.GenesisState;
            };
            MsgAuthorizeCircuitBreaker: {
                encode(message: _33.MsgAuthorizeCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgAuthorizeCircuitBreaker;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgAuthorizeCircuitBreaker>): _33.MsgAuthorizeCircuitBreaker;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                encode(message: _33.MsgAuthorizeCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgAuthorizeCircuitBreakerResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgAuthorizeCircuitBreakerResponse>): _33.MsgAuthorizeCircuitBreakerResponse;
            };
            MsgTripCircuitBreaker: {
                encode(message: _33.MsgTripCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgTripCircuitBreaker;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgTripCircuitBreaker>): _33.MsgTripCircuitBreaker;
            };
            MsgTripCircuitBreakerResponse: {
                encode(message: _33.MsgTripCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgTripCircuitBreakerResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgTripCircuitBreakerResponse>): _33.MsgTripCircuitBreakerResponse;
            };
            MsgResetCircuitBreaker: {
                encode(message: _33.MsgResetCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgResetCircuitBreaker;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgResetCircuitBreaker>): _33.MsgResetCircuitBreaker;
            };
            MsgResetCircuitBreakerResponse: {
                encode(message: _33.MsgResetCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _33.MsgResetCircuitBreakerResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_33.MsgResetCircuitBreakerResponse>): _33.MsgResetCircuitBreakerResponse;
            };
            QueryAccountRequest: {
                encode(message: _32.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.QueryAccountRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_32.QueryAccountRequest>): _32.QueryAccountRequest;
            };
            AccountResponse: {
                encode(message: _32.AccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.AccountResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_32.AccountResponse>): _32.AccountResponse;
            };
            QueryAccountsRequest: {
                encode(message: _32.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.QueryAccountsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_32.QueryAccountsRequest>): _32.QueryAccountsRequest;
            };
            AccountsResponse: {
                encode(message: _32.AccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.AccountsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_32.AccountsResponse>): _32.AccountsResponse;
            };
            QueryDisabledListRequest: {
                encode(_: _32.QueryDisabledListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.QueryDisabledListRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_32.QueryDisabledListRequest>): _32.QueryDisabledListRequest;
            };
            DisabledListResponse: {
                encode(message: _32.DisabledListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _32.DisabledListResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_32.DisabledListResponse>): _32.DisabledListResponse;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _35.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _35.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_35.Module>): _35.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _298.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _277.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _37.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _37.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_37.MsgUpdateParams>): _37.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _37.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _37.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_37.MsgUpdateParamsResponse>): _37.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _36.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _36.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _38.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _38.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_38.Module>): _38.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _40.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _40.MsgVerifyInvariant;
                fromPartial(object: import("../helpers.js").DeepPartial<_40.MsgVerifyInvariant>): _40.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _40.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _40.MsgVerifyInvariantResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_40.MsgVerifyInvariantResponse>): _40.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _40.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _40.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_40.MsgUpdateParams>): _40.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _40.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _40.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_40.MsgUpdateParamsResponse>): _40.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _39.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_39.GenesisState>): _39.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _41.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _41.PubKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_41.PubKey>): _41.PubKey;
            };
            PrivKey: {
                encode(message: _41.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _41.PrivKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_41.PrivKey>): _41.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _42.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _42.BIP44Params;
                    fromPartial(object: import("../helpers.js").DeepPartial<_42.BIP44Params>): _42.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _43.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _43.Record;
                    fromPartial(object: import("../helpers.js").DeepPartial<_43.Record>): _43.Record;
                };
                Record_Local: {
                    encode(message: _43.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _43.Record_Local;
                    fromPartial(object: import("../helpers.js").DeepPartial<_43.Record_Local>): _43.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _43.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _43.Record_Ledger;
                    fromPartial(object: import("../helpers.js").DeepPartial<_43.Record_Ledger>): _43.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _43.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _43.Record_Multi;
                    fromPartial(_: import("../helpers.js").DeepPartial<_43.Record_Multi>): _43.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _43.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _43.Record_Offline;
                    fromPartial(_: import("../helpers.js").DeepPartial<_43.Record_Offline>): _43.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _44.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _44.LegacyAminoPubKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_44.LegacyAminoPubKey>): _44.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _45.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _45.PubKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_45.PubKey>): _45.PubKey;
            };
            PrivKey: {
                encode(message: _45.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _45.PrivKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_45.PrivKey>): _45.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _46.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _46.PubKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_46.PubKey>): _46.PubKey;
            };
            PrivKey: {
                encode(message: _46.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _46.PrivKey;
                fromPartial(object: import("../helpers.js").DeepPartial<_46.PrivKey>): _46.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _47.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _47.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_47.Module>): _47.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                validatorDistributionInfo(request: _50.QueryValidatorDistributionInfoRequest): Promise<_50.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _50.QueryValidatorOutstandingRewardsRequest): Promise<_50.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _50.QueryValidatorCommissionRequest): Promise<_50.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _50.QueryValidatorSlashesRequest): Promise<_50.QueryValidatorSlashesResponse>;
                delegationRewards(request: _50.QueryDelegationRewardsRequest): Promise<_50.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _50.QueryDelegationTotalRewardsRequest): Promise<_50.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _50.QueryDelegatorValidatorsRequest): Promise<_50.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _50.QueryDelegatorWithdrawAddressRequest): Promise<_50.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _50.QueryCommunityPoolRequest): Promise<_50.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _278.LCDQueryClient;
            MsgSetWithdrawAddress: {
                encode(message: _51.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgSetWithdrawAddress;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgSetWithdrawAddress>): _51.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _51.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgSetWithdrawAddressResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_51.MsgSetWithdrawAddressResponse>): _51.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _51.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgWithdrawDelegatorReward;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgWithdrawDelegatorReward>): _51.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _51.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgWithdrawDelegatorRewardResponse>): _51.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _51.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgWithdrawValidatorCommission;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgWithdrawValidatorCommission>): _51.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _51.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgWithdrawValidatorCommissionResponse>): _51.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _51.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgFundCommunityPool;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgFundCommunityPool>): _51.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _51.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgFundCommunityPoolResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_51.MsgFundCommunityPoolResponse>): _51.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _51.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgUpdateParams>): _51.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _51.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_51.MsgUpdateParamsResponse>): _51.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _51.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgCommunityPoolSpend;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgCommunityPoolSpend>): _51.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _51.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgCommunityPoolSpendResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_51.MsgCommunityPoolSpendResponse>): _51.MsgCommunityPoolSpendResponse;
            };
            MsgDepositValidatorRewardsPool: {
                encode(message: _51.MsgDepositValidatorRewardsPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgDepositValidatorRewardsPool;
                fromPartial(object: import("../helpers.js").DeepPartial<_51.MsgDepositValidatorRewardsPool>): _51.MsgDepositValidatorRewardsPool;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                encode(_: _51.MsgDepositValidatorRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _51.MsgDepositValidatorRewardsPoolResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_51.MsgDepositValidatorRewardsPoolResponse>): _51.MsgDepositValidatorRewardsPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _50.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _50.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _50.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorDistributionInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorDistributionInfoRequest>): _50.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _50.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorDistributionInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorDistributionInfoResponse>): _50.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _50.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorOutstandingRewardsRequest>): _50.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _50.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorOutstandingRewardsResponse>): _50.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _50.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorCommissionRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorCommissionRequest>): _50.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _50.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorCommissionResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorCommissionResponse>): _50.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _50.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorSlashesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorSlashesRequest>): _50.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _50.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryValidatorSlashesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryValidatorSlashesResponse>): _50.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _50.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegationRewardsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegationRewardsRequest>): _50.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _50.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegationRewardsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegationRewardsResponse>): _50.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _50.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegationTotalRewardsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegationTotalRewardsRequest>): _50.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _50.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegationTotalRewardsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegationTotalRewardsResponse>): _50.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _50.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegatorValidatorsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegatorValidatorsRequest>): _50.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _50.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegatorValidatorsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegatorValidatorsResponse>): _50.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _50.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegatorWithdrawAddressRequest>): _50.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _50.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryDelegatorWithdrawAddressResponse>): _50.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _50.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryCommunityPoolRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_50.QueryCommunityPoolRequest>): _50.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _50.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _50.QueryCommunityPoolResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_50.QueryCommunityPoolResponse>): _50.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _49.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.DelegatorWithdrawInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.DelegatorWithdrawInfo>): _49.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _49.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.ValidatorOutstandingRewardsRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.ValidatorOutstandingRewardsRecord>): _49.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _49.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.ValidatorAccumulatedCommissionRecord>): _49.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _49.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.ValidatorHistoricalRewardsRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.ValidatorHistoricalRewardsRecord>): _49.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _49.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.ValidatorCurrentRewardsRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.ValidatorCurrentRewardsRecord>): _49.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _49.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.DelegatorStartingInfoRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.DelegatorStartingInfoRecord>): _49.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _49.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.ValidatorSlashEventRecord;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.ValidatorSlashEventRecord>): _49.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _49.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_49.GenesisState>): _49.GenesisState;
            };
            Params: {
                encode(message: _48.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.Params>): _48.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _48.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorHistoricalRewards;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorHistoricalRewards>): _48.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _48.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorCurrentRewards;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorCurrentRewards>): _48.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _48.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorAccumulatedCommission;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorAccumulatedCommission>): _48.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _48.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorOutstandingRewards;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorOutstandingRewards>): _48.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _48.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorSlashEvent;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorSlashEvent>): _48.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _48.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.ValidatorSlashEvents;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.ValidatorSlashEvents>): _48.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _48.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.FeePool;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.FeePool>): _48.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _48.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.CommunityPoolSpendProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.CommunityPoolSpendProposal>): _48.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _48.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.DelegatorStartingInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.DelegatorStartingInfo>): _48.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _48.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.DelegationDelegatorReward;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.DelegationDelegatorReward>): _48.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _48.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _48.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: import("../helpers.js").DeepPartial<_48.CommunityPoolSpendProposalWithDeposit>): _48.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _52.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _52.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_52.Module>): _52.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _279.LCDQueryClient;
            MsgSubmitEvidence: {
                encode(message: _56.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _56.MsgSubmitEvidence;
                fromPartial(object: import("../helpers.js").DeepPartial<_56.MsgSubmitEvidence>): _56.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _56.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _56.MsgSubmitEvidenceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_56.MsgSubmitEvidenceResponse>): _56.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _55.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _55.QueryEvidenceRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_55.QueryEvidenceRequest>): _55.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _55.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _55.QueryEvidenceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_55.QueryEvidenceResponse>): _55.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _55.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _55.QueryAllEvidenceRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_55.QueryAllEvidenceRequest>): _55.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _55.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _55.QueryAllEvidenceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_55.QueryAllEvidenceResponse>): _55.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _54.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_54.GenesisState>): _54.GenesisState;
            };
            Equivocation: {
                encode(message: _53.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _53.Equivocation;
                fromPartial(object: import("../helpers.js").DeepPartial<_53.Equivocation>): _53.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _57.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _57.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_57.Module>): _57.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _60.QueryAllowanceRequest): Promise<_60.QueryAllowanceResponse>;
                allowances(request: _60.QueryAllowancesRequest): Promise<_60.QueryAllowancesResponse>;
                allowancesByGranter(request: _60.QueryAllowancesByGranterRequest): Promise<_60.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _280.LCDQueryClient;
            MsgGrantAllowance: {
                encode(message: _61.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgGrantAllowance;
                fromPartial(object: import("../helpers.js").DeepPartial<_61.MsgGrantAllowance>): _61.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _61.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgGrantAllowanceResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_61.MsgGrantAllowanceResponse>): _61.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _61.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgRevokeAllowance;
                fromPartial(object: import("../helpers.js").DeepPartial<_61.MsgRevokeAllowance>): _61.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _61.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgRevokeAllowanceResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_61.MsgRevokeAllowanceResponse>): _61.MsgRevokeAllowanceResponse;
            };
            MsgPruneAllowances: {
                encode(message: _61.MsgPruneAllowances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgPruneAllowances;
                fromPartial(object: import("../helpers.js").DeepPartial<_61.MsgPruneAllowances>): _61.MsgPruneAllowances;
            };
            MsgPruneAllowancesResponse: {
                encode(_: _61.MsgPruneAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _61.MsgPruneAllowancesResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_61.MsgPruneAllowancesResponse>): _61.MsgPruneAllowancesResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _60.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowanceRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowanceRequest>): _60.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _60.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowanceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowanceResponse>): _60.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _60.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowancesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowancesRequest>): _60.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _60.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowancesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowancesResponse>): _60.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _60.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowancesByGranterRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowancesByGranterRequest>): _60.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _60.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _60.QueryAllowancesByGranterResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_60.QueryAllowancesByGranterResponse>): _60.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _59.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_59.GenesisState>): _59.GenesisState;
            };
            BasicAllowance: {
                encode(message: _58.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _58.BasicAllowance;
                fromPartial(object: import("../helpers.js").DeepPartial<_58.BasicAllowance>): _58.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _58.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _58.PeriodicAllowance;
                fromPartial(object: import("../helpers.js").DeepPartial<_58.PeriodicAllowance>): _58.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _58.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _58.AllowedMsgAllowance;
                fromPartial(object: import("../helpers.js").DeepPartial<_58.AllowedMsgAllowance>): _58.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _58.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _58.Grant;
                fromPartial(object: import("../helpers.js").DeepPartial<_58.Grant>): _58.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _62.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _62.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_62.Module>): _62.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _63.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_63.GenesisState>): _63.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _64.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _64.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_64.Module>): _64.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                constitution(request?: _67.QueryConstitutionRequest): Promise<_67.QueryConstitutionResponse>;
                proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _281.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _68.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgSubmitProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgSubmitProposal>): _68.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _68.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgSubmitProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgSubmitProposalResponse>): _68.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _68.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgExecLegacyContent;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgExecLegacyContent>): _68.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _68.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgExecLegacyContentResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_68.MsgExecLegacyContentResponse>): _68.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _68.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgVote;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgVote>): _68.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _68.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgVoteResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_68.MsgVoteResponse>): _68.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _68.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgVoteWeighted;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgVoteWeighted>): _68.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _68.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgVoteWeightedResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_68.MsgVoteWeightedResponse>): _68.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _68.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgDeposit;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgDeposit>): _68.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _68.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgDepositResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_68.MsgDepositResponse>): _68.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _68.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgUpdateParams>): _68.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _68.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_68.MsgUpdateParamsResponse>): _68.MsgUpdateParamsResponse;
            };
            MsgCancelProposal: {
                encode(message: _68.MsgCancelProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgCancelProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgCancelProposal>): _68.MsgCancelProposal;
            };
            MsgCancelProposalResponse: {
                encode(message: _68.MsgCancelProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _68.MsgCancelProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_68.MsgCancelProposalResponse>): _68.MsgCancelProposalResponse;
            };
            QueryConstitutionRequest: {
                encode(_: _67.QueryConstitutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryConstitutionRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_67.QueryConstitutionRequest>): _67.QueryConstitutionRequest;
            };
            QueryConstitutionResponse: {
                encode(message: _67.QueryConstitutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryConstitutionResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryConstitutionResponse>): _67.QueryConstitutionResponse;
            };
            QueryProposalRequest: {
                encode(message: _67.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryProposalRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryProposalRequest>): _67.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _67.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryProposalResponse>): _67.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _67.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryProposalsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryProposalsRequest>): _67.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _67.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryProposalsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryProposalsResponse>): _67.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _67.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryVoteRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryVoteRequest>): _67.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _67.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryVoteResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryVoteResponse>): _67.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _67.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryVotesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryVotesRequest>): _67.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _67.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryVotesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryVotesResponse>): _67.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryParamsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _67.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryDepositRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryDepositRequest>): _67.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _67.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryDepositResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryDepositResponse>): _67.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _67.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryDepositsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryDepositsRequest>): _67.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _67.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryDepositsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryDepositsResponse>): _67.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _67.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryTallyResultRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryTallyResultRequest>): _67.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _67.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _67.QueryTallyResultResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_67.QueryTallyResultResponse>): _67.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOption;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _66.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.WeightedVoteOption;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.WeightedVoteOption>): _66.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _66.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.Deposit;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.Deposit>): _66.Deposit;
            };
            Proposal: {
                encode(message: _66.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.Proposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.Proposal>): _66.Proposal;
            };
            TallyResult: {
                encode(message: _66.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.TallyResult;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.TallyResult>): _66.TallyResult;
            };
            Vote: {
                encode(message: _66.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.Vote;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.Vote>): _66.Vote;
            };
            DepositParams: {
                encode(message: _66.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.DepositParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.DepositParams>): _66.DepositParams;
            };
            VotingParams: {
                encode(message: _66.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.VotingParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.VotingParams>): _66.VotingParams;
            };
            TallyParams: {
                encode(message: _66.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.TallyParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.TallyParams>): _66.TallyParams;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _66.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_66.Params>): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _65.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_65.GenesisState>): _65.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _282.LCDQueryClient;
            MsgSubmitProposal: {
                encode(message: _72.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgSubmitProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgSubmitProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _72.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgVote;
                fromPartial(object: import("../helpers.js").DeepPartial<_72.MsgVote>): _72.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _72.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgVoteResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _72.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgVoteWeighted;
                fromPartial(object: import("../helpers.js").DeepPartial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgVoteWeightedResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _72.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgDeposit;
                fromPartial(object: import("../helpers.js").DeepPartial<_72.MsgDeposit>): _72.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _72.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _72.MsgDepositResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _71.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryProposalRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _71.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _71.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryProposalsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _71.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryProposalsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _71.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryVoteRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _71.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryVoteResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _71.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryVotesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _71.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryVotesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryParamsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _71.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryDepositRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _71.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryDepositResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _71.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryDepositsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _71.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryDepositsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _71.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryTallyResultRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _71.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _71.QueryTallyResultResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _70.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.WeightedVoteOption;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _70.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.TextProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.TextProposal>): _70.TextProposal;
            };
            Deposit: {
                encode(message: _70.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.Deposit;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.Deposit>): _70.Deposit;
            };
            Proposal: {
                encode(message: _70.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.Proposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.Proposal>): _70.Proposal;
            };
            TallyResult: {
                encode(message: _70.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.TallyResult;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.TallyResult>): _70.TallyResult;
            };
            Vote: {
                encode(message: _70.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.Vote;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.Vote>): _70.Vote;
            };
            DepositParams: {
                encode(message: _70.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.DepositParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.DepositParams>): _70.DepositParams;
            };
            VotingParams: {
                encode(message: _70.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.VotingParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.VotingParams>): _70.VotingParams;
            };
            TallyParams: {
                encode(message: _70.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _70.TallyParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_70.TallyParams>): _70.TallyParams;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _69.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_69.GenesisState>): _69.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _73.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _73.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_73.Module>): _73.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                groups(request?: _76.QueryGroupsRequest): Promise<_76.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _78.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _78.ProposalExecutorResult): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalExecutorResult: typeof _78.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _78.ProposalExecutorResult;
            Member: {
                encode(message: _78.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.Member;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.Member>): _78.Member;
            };
            MemberRequest: {
                encode(message: _78.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.MemberRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.MemberRequest>): _78.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _78.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.ThresholdDecisionPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.ThresholdDecisionPolicy>): _78.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _78.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.PercentageDecisionPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.PercentageDecisionPolicy>): _78.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _78.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.DecisionPolicyWindows;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.DecisionPolicyWindows>): _78.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _78.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.GroupInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.GroupInfo>): _78.GroupInfo;
            };
            GroupMember: {
                encode(message: _78.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.GroupMember;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.GroupMember>): _78.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _78.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.GroupPolicyInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.GroupPolicyInfo>): _78.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _78.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.Proposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.Proposal>): _78.Proposal;
            };
            TallyResult: {
                encode(message: _78.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.TallyResult;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.TallyResult>): _78.TallyResult;
            };
            Vote: {
                encode(message: _78.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _78.Vote;
                fromPartial(object: import("../helpers.js").DeepPartial<_78.Vote>): _78.Vote;
            };
            execFromJSON(object: any): _77.Exec;
            execToJSON(object: _77.Exec): string;
            Exec: typeof _77.Exec;
            ExecSDKType: typeof _77.Exec;
            MsgCreateGroup: {
                encode(message: _77.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroup;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroup>): _77.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _77.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroupResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroupResponse>): _77.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _77.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupMembers;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupMembers>): _77.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _77.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupMembersResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupMembersResponse>): _77.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _77.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupAdmin;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupAdmin>): _77.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _77.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupAdminResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupAdminResponse>): _77.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _77.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupMetadata;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupMetadata>): _77.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _77.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupMetadataResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupMetadataResponse>): _77.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _77.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroupPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroupPolicy>): _77.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _77.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroupPolicyResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroupPolicyResponse>): _77.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _77.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyAdmin>): _77.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _77.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyAdminResponse>): _77.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _77.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroupWithPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroupWithPolicy>): _77.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _77.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgCreateGroupWithPolicyResponse>): _77.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _77.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyDecisionPolicy>): _77.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _77.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyDecisionPolicyResponse>): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _77.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyMetadata>): _77.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _77.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgUpdateGroupPolicyMetadataResponse>): _77.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _77.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgSubmitProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgSubmitProposal>): _77.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgSubmitProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgSubmitProposalResponse>): _77.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _77.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgWithdrawProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgWithdrawProposal>): _77.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _77.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgWithdrawProposalResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgWithdrawProposalResponse>): _77.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _77.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgVote;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgVote>): _77.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _77.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgVoteResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgVoteResponse>): _77.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _77.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgExec;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgExec>): _77.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _77.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgExecResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgExecResponse>): _77.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _77.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgLeaveGroup;
                fromPartial(object: import("../helpers.js").DeepPartial<_77.MsgLeaveGroup>): _77.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _77.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _77.MsgLeaveGroupResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_77.MsgLeaveGroupResponse>): _77.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _76.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupInfoRequest>): _76.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _76.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupInfoResponse>): _76.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _76.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPolicyInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPolicyInfoRequest>): _76.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _76.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPolicyInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPolicyInfoResponse>): _76.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _76.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupMembersRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupMembersRequest>): _76.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _76.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupMembersResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupMembersResponse>): _76.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _76.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsByAdminRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsByAdminRequest>): _76.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _76.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsByAdminResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsByAdminResponse>): _76.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _76.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPoliciesByGroupRequest>): _76.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _76.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPoliciesByGroupResponse>): _76.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _76.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPoliciesByAdminRequest>): _76.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _76.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupPoliciesByAdminResponse>): _76.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _76.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryProposalRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryProposalRequest>): _76.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _76.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryProposalResponse>): _76.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _76.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryProposalsByGroupPolicyRequest>): _76.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _76.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryProposalsByGroupPolicyResponse>): _76.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _76.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVoteByProposalVoterRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVoteByProposalVoterRequest>): _76.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _76.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVoteByProposalVoterResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVoteByProposalVoterResponse>): _76.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _76.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVotesByProposalRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVotesByProposalRequest>): _76.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _76.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVotesByProposalResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVotesByProposalResponse>): _76.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _76.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVotesByVoterRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVotesByVoterRequest>): _76.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _76.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryVotesByVoterResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryVotesByVoterResponse>): _76.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _76.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsByMemberRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsByMemberRequest>): _76.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _76.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsByMemberResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsByMemberResponse>): _76.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _76.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryTallyResultRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryTallyResultRequest>): _76.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _76.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryTallyResultResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryTallyResultResponse>): _76.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _76.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsRequest>): _76.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _76.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _76.QueryGroupsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_76.QueryGroupsResponse>): _76.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _75.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_75.GenesisState>): _75.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _74.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventCreateGroup;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventCreateGroup>): _74.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _74.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventUpdateGroup;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventUpdateGroup>): _74.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _74.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventCreateGroupPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventCreateGroupPolicy>): _74.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _74.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventUpdateGroupPolicy;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventUpdateGroupPolicy>): _74.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _74.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventSubmitProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventSubmitProposal>): _74.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _74.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventWithdrawProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventWithdrawProposal>): _74.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _74.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventVote;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventVote>): _74.EventVote;
            };
            EventExec: {
                encode(message: _74.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventExec;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventExec>): _74.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _74.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventLeaveGroup;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventLeaveGroup>): _74.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _74.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _74.EventProposalPruned;
                fromPartial(object: import("../helpers.js").DeepPartial<_74.EventProposalPruned>): _74.EventProposalPruned;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _79.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _79.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_79.Module>): _79.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                inflation(request?: _82.QueryInflationRequest): Promise<_82.QueryInflationResponse>;
                annualProvisions(request?: _82.QueryAnnualProvisionsRequest): Promise<_82.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            MsgUpdateParams: {
                encode(message: _83.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _83.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_83.MsgUpdateParams>): _83.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _83.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _83.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_83.MsgUpdateParamsResponse>): _83.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _82.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryInflationRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_82.QueryInflationRequest>): _82.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _82.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryInflationResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_82.QueryInflationResponse>): _82.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _82.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryAnnualProvisionsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_82.QueryAnnualProvisionsRequest>): _82.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _82.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _82.QueryAnnualProvisionsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_82.QueryAnnualProvisionsResponse>): _82.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _81.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _81.Minter;
                fromPartial(object: import("../helpers.js").DeepPartial<_81.Minter>): _81.Minter;
            };
            Params: {
                encode(message: _81.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _81.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_81.Params>): _81.Params;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _80.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_80.GenesisState>): _80.GenesisState;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _86.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _86.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_86.Module>): _86.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _326.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                classes(request?: _90.QueryClassesRequest): Promise<_90.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            MsgSend: {
                encode(message: _91.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _91.MsgSend;
                fromPartial(object: import("../helpers.js").DeepPartial<_91.MsgSend>): _91.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _91.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _91.MsgSendResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_91.MsgSendResponse>): _91.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _90.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryBalanceRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryBalanceRequest>): _90.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _90.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryBalanceResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryBalanceResponse>): _90.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _90.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryOwnerRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryOwnerRequest>): _90.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _90.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryOwnerResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryOwnerResponse>): _90.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _90.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QuerySupplyRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QuerySupplyRequest>): _90.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _90.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QuerySupplyResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QuerySupplyResponse>): _90.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _90.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryNFTsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryNFTsRequest>): _90.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _90.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryNFTsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryNFTsResponse>): _90.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _90.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryNFTRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryNFTRequest>): _90.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _90.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryNFTResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryNFTResponse>): _90.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _90.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryClassRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryClassRequest>): _90.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _90.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryClassResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryClassResponse>): _90.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _90.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryClassesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryClassesRequest>): _90.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _90.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _90.QueryClassesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_90.QueryClassesResponse>): _90.QueryClassesResponse;
            };
            Class: {
                encode(message: _89.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _89.Class;
                fromPartial(object: import("../helpers.js").DeepPartial<_89.Class>): _89.Class;
            };
            NFT: {
                encode(message: _89.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _89.NFT;
                fromPartial(object: import("../helpers.js").DeepPartial<_89.NFT>): _89.NFT;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _88.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_88.GenesisState>): _88.GenesisState;
            };
            Entry: {
                encode(message: _88.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _88.Entry;
                fromPartial(object: import("../helpers.js").DeepPartial<_88.Entry>): _88.Entry;
            };
            EventSend: {
                encode(message: _87.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _87.EventSend;
                fromPartial(object: import("../helpers.js").DeepPartial<_87.EventSend>): _87.EventSend;
            };
            EventMint: {
                encode(message: _87.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _87.EventMint;
                fromPartial(object: import("../helpers.js").DeepPartial<_87.EventMint>): _87.EventMint;
            };
            EventBurn: {
                encode(message: _87.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _87.EventBurn;
                fromPartial(object: import("../helpers.js").DeepPartial<_87.EventBurn>): _87.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _92.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _92.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_92.Module>): _92.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _307.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _93.GetRequest): Promise<_93.GetResponse>;
                    list(request: _93.ListRequest): Promise<_93.ListResponse>;
                };
                GetRequest: {
                    encode(message: _93.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.GetRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.GetRequest>): _93.GetRequest;
                };
                GetResponse: {
                    encode(message: _93.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.GetResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.GetResponse>): _93.GetResponse;
                };
                ListRequest: {
                    encode(message: _93.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.ListRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.ListRequest>): _93.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _93.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.ListRequest_Prefix;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.ListRequest_Prefix>): _93.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _93.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.ListRequest_Range;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.ListRequest_Range>): _93.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _93.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.ListResponse;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.ListResponse>): _93.ListResponse;
                };
                IndexValue: {
                    encode(message: _93.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _93.IndexValue;
                    fromPartial(object: import("../helpers.js").DeepPartial<_93.IndexValue>): _93.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _94.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _94.TableDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_94.TableDescriptor>): _94.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _94.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _94.PrimaryKeyDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_94.PrimaryKeyDescriptor>): _94.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _94.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _94.SecondaryIndexDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_94.SecondaryIndexDescriptor>): _94.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _94.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _94.SingletonDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_94.SingletonDescriptor>): _94.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _95.StorageType;
            storageTypeToJSON(object: _95.StorageType): string;
            StorageType: typeof _95.StorageType;
            StorageTypeSDKType: typeof _95.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _95.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _95.ModuleSchemaDescriptor;
                fromPartial(object: import("../helpers.js").DeepPartial<_95.ModuleSchemaDescriptor>): _95.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _95.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _95.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: import("../helpers.js").DeepPartial<_95.ModuleSchemaDescriptor_FileEntry>): _95.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _96.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _96.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_96.Module>): _96.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                subspaces(request?: _98.QuerySubspacesRequest): Promise<_98.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _98.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _98.QueryParamsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _98.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _98.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _98.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _98.QuerySubspacesRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_98.QuerySubspacesRequest>): _98.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _98.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _98.QuerySubspacesResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_98.QuerySubspacesResponse>): _98.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _98.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _98.Subspace;
                fromPartial(object: import("../helpers.js").DeepPartial<_98.Subspace>): _98.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _97.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _97.ParameterChangeProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_97.ParameterChangeProposal>): _97.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _97.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _97.ParamChange;
                fromPartial(object: import("../helpers.js").DeepPartial<_97.ParamChange>): _97.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _100.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _100.FileDescriptorsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_100.FileDescriptorsRequest>): _100.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _100.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _100.FileDescriptorsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_100.FileDescriptorsResponse>): _100.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _101.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _101.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_101.Module>): _101.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            MsgUnjail: {
                encode(message: _105.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _105.MsgUnjail;
                fromPartial(object: import("../helpers.js").DeepPartial<_105.MsgUnjail>): _105.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _105.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _105.MsgUnjailResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_105.MsgUnjailResponse>): _105.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _105.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _105.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_105.MsgUpdateParams>): _105.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _105.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _105.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_105.MsgUpdateParamsResponse>): _105.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _104.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _104.ValidatorSigningInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_104.ValidatorSigningInfo>): _104.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _104.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_104.Params>): _104.Params;
            };
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _103.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QuerySigningInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_103.QuerySigningInfoRequest>): _103.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _103.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QuerySigningInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_103.QuerySigningInfoResponse>): _103.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _103.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QuerySigningInfosRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_103.QuerySigningInfosRequest>): _103.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _103.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _103.QuerySigningInfosResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_103.QuerySigningInfosResponse>): _103.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _102.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_102.GenesisState>): _102.GenesisState;
            };
            SigningInfo: {
                encode(message: _102.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _102.SigningInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_102.SigningInfo>): _102.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _102.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _102.ValidatorMissedBlocks;
                fromPartial(object: import("../helpers.js").DeepPartial<_102.ValidatorMissedBlocks>): _102.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _102.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _102.MissedBlock;
                fromPartial(object: import("../helpers.js").DeepPartial<_102.MissedBlock>): _102.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _106.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _106.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_106.Module>): _106.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _109.QueryValidatorsRequest): Promise<_109.QueryValidatorsResponse>;
                validator(request: _109.QueryValidatorRequest): Promise<_109.QueryValidatorResponse>;
                validatorDelegations(request: _109.QueryValidatorDelegationsRequest): Promise<_109.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _109.QueryValidatorUnbondingDelegationsRequest): Promise<_109.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _109.QueryDelegationRequest): Promise<_109.QueryDelegationResponse>;
                unbondingDelegation(request: _109.QueryUnbondingDelegationRequest): Promise<_109.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _109.QueryDelegatorDelegationsRequest): Promise<_109.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _109.QueryDelegatorUnbondingDelegationsRequest): Promise<_109.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _109.QueryRedelegationsRequest): Promise<_109.QueryRedelegationsResponse>;
                delegatorValidators(request: _109.QueryDelegatorValidatorsRequest): Promise<_109.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _109.QueryDelegatorValidatorRequest): Promise<_109.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _109.QueryHistoricalInfoRequest): Promise<_109.QueryHistoricalInfoResponse>;
                pool(request?: _109.QueryPoolRequest): Promise<_109.QueryPoolResponse>;
                params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            MsgCreateValidator: {
                encode(message: _111.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgCreateValidator;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgCreateValidator>): _111.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _111.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgCreateValidatorResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_111.MsgCreateValidatorResponse>): _111.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _111.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgEditValidator;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgEditValidator>): _111.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _111.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgEditValidatorResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_111.MsgEditValidatorResponse>): _111.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _111.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgDelegate;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgDelegate>): _111.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _111.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgDelegateResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_111.MsgDelegateResponse>): _111.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _111.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgBeginRedelegate;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgBeginRedelegate>): _111.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _111.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgBeginRedelegateResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgBeginRedelegateResponse>): _111.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _111.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgUndelegate;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgUndelegate>): _111.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _111.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgUndelegateResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgUndelegateResponse>): _111.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _111.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgCancelUnbondingDelegation;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgCancelUnbondingDelegation>): _111.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _111.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_111.MsgCancelUnbondingDelegationResponse>): _111.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _111.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgUpdateParams;
                fromPartial(object: import("../helpers.js").DeepPartial<_111.MsgUpdateParams>): _111.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _111.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _111.MsgUpdateParamsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_111.MsgUpdateParamsResponse>): _111.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _110.BondStatus;
            bondStatusToJSON(object: _110.BondStatus): string;
            infractionFromJSON(object: any): _110.Infraction;
            infractionToJSON(object: _110.Infraction): string;
            BondStatus: typeof _110.BondStatus;
            BondStatusSDKType: typeof _110.BondStatus;
            Infraction: typeof _110.Infraction;
            InfractionSDKType: typeof _110.Infraction;
            HistoricalInfo: {
                encode(message: _110.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.HistoricalInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.HistoricalInfo>): _110.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _110.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.CommissionRates;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.CommissionRates>): _110.CommissionRates;
            };
            Commission: {
                encode(message: _110.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Commission;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Commission>): _110.Commission;
            };
            Description: {
                encode(message: _110.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Description;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Description>): _110.Description;
            };
            Validator: {
                encode(message: _110.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Validator;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Validator>): _110.Validator;
            };
            ValAddresses: {
                encode(message: _110.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.ValAddresses;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.ValAddresses>): _110.ValAddresses;
            };
            DVPair: {
                encode(message: _110.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.DVPair;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.DVPair>): _110.DVPair;
            };
            DVPairs: {
                encode(message: _110.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.DVPairs;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.DVPairs>): _110.DVPairs;
            };
            DVVTriplet: {
                encode(message: _110.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.DVVTriplet;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.DVVTriplet>): _110.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _110.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.DVVTriplets;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.DVVTriplets>): _110.DVVTriplets;
            };
            Delegation: {
                encode(message: _110.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Delegation;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Delegation>): _110.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _110.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.UnbondingDelegation;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.UnbondingDelegation>): _110.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _110.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.UnbondingDelegationEntry;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.UnbondingDelegationEntry>): _110.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _110.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.RedelegationEntry;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.RedelegationEntry>): _110.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _110.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Redelegation;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Redelegation>): _110.Redelegation;
            };
            Params: {
                encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Params;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Params>): _110.Params;
            };
            DelegationResponse: {
                encode(message: _110.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.DelegationResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.DelegationResponse>): _110.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _110.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.RedelegationEntryResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.RedelegationEntryResponse>): _110.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _110.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.RedelegationResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.RedelegationResponse>): _110.RedelegationResponse;
            };
            Pool: {
                encode(message: _110.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.Pool;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.Pool>): _110.Pool;
            };
            ValidatorUpdates: {
                encode(message: _110.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _110.ValidatorUpdates;
                fromPartial(object: import("../helpers.js").DeepPartial<_110.ValidatorUpdates>): _110.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _109.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorsRequest>): _109.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _109.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorsResponse>): _109.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _109.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorRequest>): _109.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _109.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorResponse>): _109.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _109.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorDelegationsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorDelegationsRequest>): _109.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _109.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorDelegationsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorDelegationsResponse>): _109.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _109.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorUnbondingDelegationsRequest>): _109.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _109.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryValidatorUnbondingDelegationsResponse>): _109.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _109.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegationRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegationRequest>): _109.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _109.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegationResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegationResponse>): _109.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _109.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryUnbondingDelegationRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryUnbondingDelegationRequest>): _109.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _109.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryUnbondingDelegationResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryUnbondingDelegationResponse>): _109.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _109.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorDelegationsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorDelegationsRequest>): _109.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _109.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorDelegationsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorDelegationsResponse>): _109.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _109.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorUnbondingDelegationsRequest>): _109.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _109.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorUnbondingDelegationsResponse>): _109.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _109.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryRedelegationsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryRedelegationsRequest>): _109.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _109.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryRedelegationsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryRedelegationsResponse>): _109.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _109.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorValidatorsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorValidatorsRequest>): _109.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _109.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorValidatorsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorValidatorsResponse>): _109.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _109.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorValidatorRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorValidatorRequest>): _109.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _109.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryDelegatorValidatorResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryDelegatorValidatorResponse>): _109.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _109.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryHistoricalInfoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryHistoricalInfoRequest>): _109.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _109.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryHistoricalInfoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryHistoricalInfoResponse>): _109.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _109.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryPoolRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_109.QueryPoolRequest>): _109.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _109.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryPoolResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryPoolResponse>): _109.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _109.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryParamsRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _109.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _109.QueryParamsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _108.GenesisState;
                fromPartial(object: import("../helpers.js").DeepPartial<_108.GenesisState>): _108.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _108.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _108.LastValidatorPower;
                fromPartial(object: import("../helpers.js").DeepPartial<_108.LastValidatorPower>): _108.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _107.AuthorizationType;
            authorizationTypeToJSON(object: _107.AuthorizationType): string;
            AuthorizationType: typeof _107.AuthorizationType;
            AuthorizationTypeSDKType: typeof _107.AuthorizationType;
            StakeAuthorization: {
                encode(message: _107.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _107.StakeAuthorization;
                fromPartial(object: import("../helpers.js").DeepPartial<_107.StakeAuthorization>): _107.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _107.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _107.StakeAuthorization_Validators;
                fromPartial(object: import("../helpers.js").DeepPartial<_107.StakeAuthorization_Validators>): _107.StakeAuthorization_Validators;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        encode(message: _112.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _112.Pairs;
                        fromPartial(object: import("../helpers.js").DeepPartial<_112.Pairs>): _112.Pairs;
                    };
                    Pair: {
                        encode(message: _112.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _112.Pair;
                        fromPartial(object: import("../helpers.js").DeepPartial<_112.Pair>): _112.Pair;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    encode(message: _113.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.Snapshot;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.Snapshot>): _113.Snapshot;
                };
                Metadata: {
                    encode(message: _113.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.Metadata;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.Metadata>): _113.Metadata;
                };
                SnapshotItem: {
                    encode(message: _113.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.SnapshotItem;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.SnapshotItem>): _113.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _113.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.SnapshotStoreItem;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.SnapshotStoreItem>): _113.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _113.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.SnapshotIAVLItem;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.SnapshotIAVLItem>): _113.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _113.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.SnapshotExtensionMeta;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.SnapshotExtensionMeta>): _113.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _113.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _113.SnapshotExtensionPayload;
                    fromPartial(object: import("../helpers.js").DeepPartial<_113.SnapshotExtensionPayload>): _113.SnapshotExtensionPayload;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenFinalizeBlockRequest: {
                    encode(message: _114.ListenFinalizeBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _114.ListenFinalizeBlockRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_114.ListenFinalizeBlockRequest>): _114.ListenFinalizeBlockRequest;
                };
                ListenFinalizeBlockResponse: {
                    encode(_: _114.ListenFinalizeBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _114.ListenFinalizeBlockResponse;
                    fromPartial(_: import("../helpers.js").DeepPartial<_114.ListenFinalizeBlockResponse>): _114.ListenFinalizeBlockResponse;
                };
                ListenCommitRequest: {
                    encode(message: _114.ListenCommitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _114.ListenCommitRequest;
                    fromPartial(object: import("../helpers.js").DeepPartial<_114.ListenCommitRequest>): _114.ListenCommitRequest;
                };
                ListenCommitResponse: {
                    encode(_: _114.ListenCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _114.ListenCommitResponse;
                    fromPartial(_: import("../helpers.js").DeepPartial<_114.ListenCommitResponse>): _114.ListenCommitResponse;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                encode(message: _116.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _116.StoreKVPair;
                fromPartial(object: import("../helpers.js").DeepPartial<_116.StoreKVPair>): _116.StoreKVPair;
            };
            BlockMetadata: {
                encode(message: _116.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _116.BlockMetadata;
                fromPartial(object: import("../helpers.js").DeepPartial<_116.BlockMetadata>): _116.BlockMetadata;
            };
            CommitInfo: {
                encode(message: _115.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _115.CommitInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_115.CommitInfo>): _115.CommitInfo;
            };
            StoreInfo: {
                encode(message: _115.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _115.StoreInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_115.StoreInfo>): _115.StoreInfo;
            };
            CommitID: {
                encode(message: _115.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _115.CommitID;
                fromPartial(object: import("../helpers.js").DeepPartial<_115.CommitID>): _115.CommitID;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _117.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _117.Config;
                    fromPartial(object: import("../helpers.js").DeepPartial<_117.Config>): _117.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _118.SignMode;
                signModeToJSON(object: _118.SignMode): string;
                SignMode: typeof _118.SignMode;
                SignModeSDKType: typeof _118.SignMode;
                SignatureDescriptors: {
                    encode(message: _118.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _118.SignatureDescriptors;
                    fromPartial(object: import("../helpers.js").DeepPartial<_118.SignatureDescriptors>): _118.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _118.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _118.SignatureDescriptor;
                    fromPartial(object: import("../helpers.js").DeepPartial<_118.SignatureDescriptor>): _118.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _118.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _118.SignatureDescriptor_Data;
                    fromPartial(object: import("../helpers.js").DeepPartial<_118.SignatureDescriptor_Data>): _118.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _118.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _118.SignatureDescriptor_Data_Single;
                    fromPartial(object: import("../helpers.js").DeepPartial<_118.SignatureDescriptor_Data_Single>): _118.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _118.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _118.SignatureDescriptor_Data_Multi;
                    fromPartial(object: import("../helpers.js").DeepPartial<_118.SignatureDescriptor_Data_Multi>): _118.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _311.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            Tx: {
                encode(message: _120.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.Tx;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.Tx>): _120.Tx;
            };
            TxRaw: {
                encode(message: _120.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.TxRaw;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.TxRaw>): _120.TxRaw;
            };
            SignDoc: {
                encode(message: _120.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.SignDoc;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.SignDoc>): _120.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _120.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.SignDocDirectAux;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.SignDocDirectAux>): _120.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _120.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.TxBody;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.TxBody>): _120.TxBody;
            };
            AuthInfo: {
                encode(message: _120.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.AuthInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.AuthInfo>): _120.AuthInfo;
            };
            SignerInfo: {
                encode(message: _120.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.SignerInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.SignerInfo>): _120.SignerInfo;
            };
            ModeInfo: {
                encode(message: _120.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.ModeInfo;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.ModeInfo>): _120.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _120.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.ModeInfo_Single;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.ModeInfo_Single>): _120.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _120.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.ModeInfo_Multi;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.ModeInfo_Multi>): _120.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _120.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.Fee;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.Fee>): _120.Fee;
            };
            Tip: {
                encode(message: _120.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.Tip;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.Tip>): _120.Tip;
            };
            AuxSignerData: {
                encode(message: _120.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _120.AuxSignerData;
                fromPartial(object: import("../helpers.js").DeepPartial<_120.AuxSignerData>): _120.AuxSignerData;
            };
            orderByFromJSON(object: any): _119.OrderBy;
            orderByToJSON(object: _119.OrderBy): string;
            broadcastModeFromJSON(object: any): _119.BroadcastMode;
            broadcastModeToJSON(object: _119.BroadcastMode): string;
            OrderBy: typeof _119.OrderBy;
            OrderBySDKType: typeof _119.OrderBy;
            BroadcastMode: typeof _119.BroadcastMode;
            BroadcastModeSDKType: typeof _119.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _119.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetTxsEventRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetTxsEventRequest>): _119.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _119.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetTxsEventResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetTxsEventResponse>): _119.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _119.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.BroadcastTxRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.BroadcastTxRequest>): _119.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _119.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.BroadcastTxResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.BroadcastTxResponse>): _119.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _119.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.SimulateRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.SimulateRequest>): _119.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _119.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.SimulateResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.SimulateResponse>): _119.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _119.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetTxRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetTxRequest>): _119.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _119.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetTxResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetTxResponse>): _119.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _119.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetBlockWithTxsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetBlockWithTxsRequest>): _119.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _119.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.GetBlockWithTxsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.GetBlockWithTxsResponse>): _119.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _119.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxDecodeRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxDecodeRequest>): _119.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _119.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxDecodeResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxDecodeResponse>): _119.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _119.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxEncodeRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxEncodeRequest>): _119.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _119.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxEncodeResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxEncodeResponse>): _119.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _119.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxEncodeAminoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxEncodeAminoRequest>): _119.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _119.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxEncodeAminoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxEncodeAminoResponse>): _119.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _119.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxDecodeAminoRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxDecodeAminoRequest>): _119.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _119.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _119.TxDecodeAminoResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_119.TxDecodeAminoResponse>): _119.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _121.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _121.Module;
                    fromPartial(object: import("../helpers.js").DeepPartial<_121.Module>): _121.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _329.MsgClientImpl;
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _122.QueryCurrentPlanRequest): Promise<_122.QueryCurrentPlanResponse>;
                appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                authority(request?: _122.QueryAuthorityRequest): Promise<_122.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            Plan: {
                encode(message: _124.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _124.Plan;
                fromPartial(object: import("../helpers.js").DeepPartial<_124.Plan>): _124.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _124.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _124.SoftwareUpgradeProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_124.SoftwareUpgradeProposal>): _124.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _124.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _124.CancelSoftwareUpgradeProposal;
                fromPartial(object: import("../helpers.js").DeepPartial<_124.CancelSoftwareUpgradeProposal>): _124.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _124.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _124.ModuleVersion;
                fromPartial(object: import("../helpers.js").DeepPartial<_124.ModuleVersion>): _124.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _123.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _123.MsgSoftwareUpgrade;
                fromPartial(object: import("../helpers.js").DeepPartial<_123.MsgSoftwareUpgrade>): _123.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _123.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _123.MsgSoftwareUpgradeResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_123.MsgSoftwareUpgradeResponse>): _123.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _123.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _123.MsgCancelUpgrade;
                fromPartial(object: import("../helpers.js").DeepPartial<_123.MsgCancelUpgrade>): _123.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _123.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _123.MsgCancelUpgradeResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_123.MsgCancelUpgradeResponse>): _123.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _122.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryCurrentPlanRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_122.QueryCurrentPlanRequest>): _122.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _122.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryCurrentPlanResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryCurrentPlanResponse>): _122.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _122.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryAppliedPlanRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryAppliedPlanRequest>): _122.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _122.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryAppliedPlanResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryAppliedPlanResponse>): _122.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _122.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryUpgradedConsensusStateRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryUpgradedConsensusStateRequest>): _122.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _122.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryUpgradedConsensusStateResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryUpgradedConsensusStateResponse>): _122.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _122.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryModuleVersionsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryModuleVersionsRequest>): _122.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _122.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryModuleVersionsResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryModuleVersionsResponse>): _122.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _122.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryAuthorityRequest;
                fromPartial(_: import("../helpers.js").DeepPartial<_122.QueryAuthorityRequest>): _122.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _122.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _122.QueryAuthorityResponse;
                fromPartial(object: import("../helpers.js").DeepPartial<_122.QueryAuthorityResponse>): _122.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _125.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _125.Module;
                    fromPartial(_: import("../helpers.js").DeepPartial<_125.Module>): _125.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _127.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.BaseVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.BaseVestingAccount>): _127.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _127.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.ContinuousVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.ContinuousVestingAccount>): _127.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _127.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.DelayedVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.DelayedVestingAccount>): _127.DelayedVestingAccount;
            };
            Period: {
                encode(message: _127.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.Period;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.Period>): _127.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _127.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.PeriodicVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.PeriodicVestingAccount>): _127.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _127.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _127.PermanentLockedAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_127.PermanentLockedAccount>): _127.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _126.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreateVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_126.MsgCreateVestingAccount>): _126.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _126.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreateVestingAccountResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_126.MsgCreateVestingAccountResponse>): _126.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _126.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreatePermanentLockedAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_126.MsgCreatePermanentLockedAccount>): _126.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _126.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_126.MsgCreatePermanentLockedAccountResponse>): _126.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _126.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreatePeriodicVestingAccount;
                fromPartial(object: import("../helpers.js").DeepPartial<_126.MsgCreatePeriodicVestingAccount>): _126.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _126.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _126.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_126.MsgCreatePeriodicVestingAccountResponse>): _126.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers.js").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _313.MsgClientImpl;
                };
                authz: {
                    v1beta1: _314.MsgClientImpl;
                };
                bank: {
                    v1beta1: _315.MsgClientImpl;
                };
                circuit: {
                    v1: _316.MsgClientImpl;
                };
                consensus: {
                    v1: _317.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _318.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _319.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _320.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _321.MsgClientImpl;
                };
                gov: {
                    v1: _322.MsgClientImpl;
                    v1beta1: _323.MsgClientImpl;
                };
                group: {
                    v1: _324.MsgClientImpl;
                };
                mint: {
                    v1beta1: _325.MsgClientImpl;
                };
                nft: {
                    v1beta1: _326.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _327.MsgClientImpl;
                };
                staking: {
                    v1beta1: _328.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _329.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _330.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint, }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                        accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                        granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                        granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                        spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _21.QuerySpendableBalanceByDenomRequest): Promise<_21.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                        supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: _21.QueryDenomMetadataByQueryStringRequest): Promise<_21.QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                        denomOwners(request: _21.QueryDenomOwnersRequest): Promise<_21.QueryDenomOwnersResponse>;
                        sendEnabled(request: _21.QuerySendEnabledRequest): Promise<_21.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _24.ConfigRequest): Promise<_24.ConfigResponse>;
                            status(request?: _24.StatusRequest): Promise<_24.StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _28.GetNodeInfoRequest): Promise<_28.GetNodeInfoResponse>;
                            getSyncing(request?: _28.GetSyncingRequest): Promise<_28.GetSyncingResponse>;
                            getLatestBlock(request?: _28.GetLatestBlockRequest): Promise<_28.GetLatestBlockResponse>;
                            getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest): Promise<_28.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: _32.QueryAccountRequest): Promise<_32.AccountResponse>;
                        accounts(request?: _32.QueryAccountsRequest): Promise<_32.AccountsResponse>;
                        disabledList(request?: _32.QueryDisabledListRequest): Promise<_32.DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                        validatorDistributionInfo(request: _50.QueryValidatorDistributionInfoRequest): Promise<_50.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _50.QueryValidatorOutstandingRewardsRequest): Promise<_50.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _50.QueryValidatorCommissionRequest): Promise<_50.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _50.QueryValidatorSlashesRequest): Promise<_50.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _50.QueryDelegationRewardsRequest): Promise<_50.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _50.QueryDelegationTotalRewardsRequest): Promise<_50.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _50.QueryDelegatorValidatorsRequest): Promise<_50.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _50.QueryDelegatorWithdrawAddressRequest): Promise<_50.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _50.QueryCommunityPoolRequest): Promise<_50.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _55.QueryEvidenceRequest): Promise<_55.QueryEvidenceResponse>;
                        allEvidence(request?: _55.QueryAllEvidenceRequest): Promise<_55.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _60.QueryAllowanceRequest): Promise<_60.QueryAllowanceResponse>;
                        allowances(request: _60.QueryAllowancesRequest): Promise<_60.QueryAllowancesResponse>;
                        allowancesByGranter(request: _60.QueryAllowancesByGranterRequest): Promise<_60.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: _67.QueryConstitutionRequest): Promise<_67.QueryConstitutionResponse>;
                        proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                        proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                        vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                        votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                        params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                        deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                        tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                        votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                        groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                        tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                        groups(request?: _76.QueryGroupsRequest): Promise<_76.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                        inflation(request?: _82.QueryInflationRequest): Promise<_82.QueryInflationResponse>;
                        annualProvisions(request?: _82.QueryAnnualProvisionsRequest): Promise<_82.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                        owner(request: _90.QueryOwnerRequest): Promise<_90.QueryOwnerResponse>;
                        supply(request: _90.QuerySupplyRequest): Promise<_90.QuerySupplyResponse>;
                        nFTs(request: _90.QueryNFTsRequest): Promise<_90.QueryNFTsResponse>;
                        nFT(request: _90.QueryNFTRequest): Promise<_90.QueryNFTResponse>;
                        class(request: _90.QueryClassRequest): Promise<_90.QueryClassResponse>;
                        classes(request?: _90.QueryClassesRequest): Promise<_90.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _93.GetRequest): Promise<_93.GetResponse>;
                            list(request: _93.ListRequest): Promise<_93.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        subspaces(request?: _98.QuerySubspacesRequest): Promise<_98.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        signingInfo(request: _103.QuerySigningInfoRequest): Promise<_103.QuerySigningInfoResponse>;
                        signingInfos(request?: _103.QuerySigningInfosRequest): Promise<_103.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _109.QueryValidatorsRequest): Promise<_109.QueryValidatorsResponse>;
                        validator(request: _109.QueryValidatorRequest): Promise<_109.QueryValidatorResponse>;
                        validatorDelegations(request: _109.QueryValidatorDelegationsRequest): Promise<_109.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _109.QueryValidatorUnbondingDelegationsRequest): Promise<_109.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _109.QueryDelegationRequest): Promise<_109.QueryDelegationResponse>;
                        unbondingDelegation(request: _109.QueryUnbondingDelegationRequest): Promise<_109.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _109.QueryDelegatorDelegationsRequest): Promise<_109.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _109.QueryDelegatorUnbondingDelegationsRequest): Promise<_109.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _109.QueryRedelegationsRequest): Promise<_109.QueryRedelegationsResponse>;
                        delegatorValidators(request: _109.QueryDelegatorValidatorsRequest): Promise<_109.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _109.QueryDelegatorValidatorRequest): Promise<_109.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _109.QueryHistoricalInfoRequest): Promise<_109.QueryHistoricalInfoResponse>;
                        pool(request?: _109.QueryPoolRequest): Promise<_109.QueryPoolResponse>;
                        params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _119.SimulateRequest): Promise<_119.SimulateResponse>;
                        getTx(request: _119.GetTxRequest): Promise<_119.GetTxResponse>;
                        broadcastTx(request: _119.BroadcastTxRequest): Promise<_119.BroadcastTxResponse>;
                        getTxsEvent(request: _119.GetTxsEventRequest): Promise<_119.GetTxsEventResponse>;
                        getBlockWithTxs(request: _119.GetBlockWithTxsRequest): Promise<_119.GetBlockWithTxsResponse>;
                        txDecode(request: _119.TxDecodeRequest): Promise<_119.TxDecodeResponse>;
                        txEncode(request: _119.TxEncodeRequest): Promise<_119.TxEncodeResponse>;
                        txEncodeAmino(request: _119.TxEncodeAminoRequest): Promise<_119.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _119.TxDecodeAminoRequest): Promise<_119.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _122.QueryCurrentPlanRequest): Promise<_122.QueryCurrentPlanResponse>;
                        appliedPlan(request: _122.QueryAppliedPlanRequest): Promise<_122.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _122.QueryModuleVersionsRequest): Promise<_122.QueryModuleVersionsResponse>;
                        authority(request?: _122.QueryAuthorityRequest): Promise<_122.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint, }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _271.LCDQueryClient;
                };
                authz: {
                    v1beta1: _272.LCDQueryClient;
                };
                bank: {
                    v1beta1: _273.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _274.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _275.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _276.LCDQueryClient;
                };
                consensus: {
                    v1: _277.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _278.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _279.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _280.LCDQueryClient;
                };
                gov: {
                    v1: _281.LCDQueryClient;
                    v1beta1: _282.LCDQueryClient;
                };
                group: {
                    v1: _283.LCDQueryClient;
                };
                mint: {
                    v1beta1: _284.LCDQueryClient;
                };
                nft: {
                    v1beta1: _285.LCDQueryClient;
                };
                params: {
                    v1beta1: _286.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _287.LCDQueryClient;
                };
                staking: {
                    v1beta1: _288.LCDQueryClient;
                };
                tx: {
                    v1beta1: _289.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _290.LCDQueryClient;
                };
            };
        }>;
    };
}
