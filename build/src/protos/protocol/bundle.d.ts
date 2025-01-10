import * as _128 from './accountplus/accountplus.js';
import * as _129 from './accountplus/genesis.js';
import * as _130 from './accountplus/models.js';
import * as _131 from './accountplus/params.js';
import * as _132 from './accountplus/query.js';
import * as _133 from './accountplus/tx.js';
import * as _134 from './affiliates/affiliates.js';
import * as _135 from './affiliates/genesis.js';
import * as _136 from './affiliates/query.js';
import * as _137 from './affiliates/tx.js';
import * as _138 from './assets/asset.js';
import * as _139 from './assets/genesis.js';
import * as _140 from './assets/query.js';
import * as _142 from './blocktime/blocktime.js';
import * as _143 from './blocktime/genesis.js';
import * as _144 from './blocktime/params.js';
import * as _145 from './blocktime/query.js';
import * as _146 from './blocktime/tx.js';
import * as _147 from './bridge/bridge_event_info.js';
import * as _148 from './bridge/bridge_event.js';
import * as _149 from './bridge/genesis.js';
import * as _150 from './bridge/params.js';
import * as _151 from './bridge/query.js';
import * as _152 from './bridge/tx.js';
import * as _153 from './clob/block_rate_limit_config.js';
import * as _154 from './clob/clob_pair.js';
import * as _155 from './clob/equity_tier_limit_config.js';
import * as _156 from './clob/finalize_block.js';
import * as _157 from './clob/genesis.js';
import * as _158 from './clob/liquidations_config.js';
import * as _159 from './clob/liquidations.js';
import * as _160 from './clob/matches.js';
import * as _161 from './clob/mev.js';
import * as _162 from './clob/operation.js';
import * as _163 from './clob/order_removals.js';
import * as _164 from './clob/order.js';
import * as _165 from './clob/process_proposer_matches_events.js';
import * as _166 from './clob/query.js';
import * as _167 from './clob/streaming.js';
import * as _168 from './clob/tx.js';
import * as _169 from './daemons/bridge/bridge.js';
import * as _170 from './daemons/liquidation/liquidation.js';
import * as _171 from './daemons/pricefeed/price_feed.js';
import * as _172 from './delaymsg/block_message_ids.js';
import * as _173 from './delaymsg/delayed_message.js';
import * as _174 from './delaymsg/genesis.js';
import * as _175 from './delaymsg/query.js';
import * as _176 from './delaymsg/tx.js';
import * as _177 from './epochs/epoch_info.js';
import * as _178 from './epochs/genesis.js';
import * as _179 from './epochs/query.js';
import * as _180 from './feetiers/genesis.js';
import * as _181 from './feetiers/params.js';
import * as _182 from './feetiers/query.js';
import * as _183 from './feetiers/tx.js';
import * as _184 from './govplus/genesis.js';
import * as _186 from './govplus/tx.js';
import * as _187 from './indexer/events/events.js';
import * as _188 from './indexer/indexer_manager/event.js';
import * as _189 from './indexer/off_chain_updates/off_chain_updates.js';
import * as _190 from './indexer/protocol/v1/clob.js';
import * as _191 from './indexer/protocol/v1/perpetual.js';
import * as _192 from './indexer/protocol/v1/subaccount.js';
import * as _193 from './indexer/protocol/v1/vault.js';
import * as _194 from './indexer/redis/redis_order.js';
import * as _195 from './indexer/shared/removal_reason.js';
import * as _196 from './indexer/socks/messages.js';
import * as _197 from './listing/genesis.js';
import * as _198 from './listing/params.js';
import * as _199 from './listing/query.js';
import * as _200 from './listing/tx.js';
import * as _201 from './perpetuals/genesis.js';
import * as _202 from './perpetuals/params.js';
import * as _203 from './perpetuals/perpetual.js';
import * as _204 from './perpetuals/query.js';
import * as _205 from './perpetuals/tx.js';
import * as _206 from './prices/genesis.js';
import * as _207 from './prices/market_param.js';
import * as _208 from './prices/market_price.js';
import * as _209 from './prices/query.js';
import * as _210 from './prices/streaming.js';
import * as _211 from './prices/tx.js';
import * as _212 from './ratelimit/capacity.js';
import * as _213 from './ratelimit/genesis.js';
import * as _214 from './ratelimit/limit_params.js';
import * as _215 from './ratelimit/pending_send_packet.js';
import * as _216 from './ratelimit/query.js';
import * as _217 from './ratelimit/tx.js';
import * as _218 from './revshare/genesis.js';
import * as _219 from './revshare/params.js';
import * as _220 from './revshare/query.js';
import * as _221 from './revshare/revshare.js';
import * as _222 from './revshare/tx.js';
import * as _223 from './rewards/genesis.js';
import * as _224 from './rewards/params.js';
import * as _225 from './rewards/query.js';
import * as _226 from './rewards/reward_share.js';
import * as _227 from './rewards/tx.js';
import * as _228 from './sending/genesis.js';
import * as _230 from './sending/transfer.js';
import * as _231 from './sending/tx.js';
import * as _232 from './stats/genesis.js';
import * as _233 from './stats/params.js';
import * as _234 from './stats/query.js';
import * as _235 from './stats/stats.js';
import * as _236 from './stats/tx.js';
import * as _237 from './subaccounts/asset_position.js';
import * as _238 from './subaccounts/genesis.js';
import * as _239 from './subaccounts/perpetual_position.js';
import * as _240 from './subaccounts/query.js';
import * as _241 from './subaccounts/streaming.js';
import * as _242 from './subaccounts/subaccount.js';
import * as _243 from './vault/genesis.js';
import * as _244 from './vault/params.js';
import * as _245 from './vault/query.js';
import * as _246 from './vault/share.js';
import * as _247 from './vault/tx.js';
import * as _248 from './vault/vault.js';
import * as _249 from './vest/genesis.js';
import * as _250 from './vest/query.js';
import * as _251 from './vest/tx.js';
import * as _252 from './vest/vest_entry.js';
import * as _331 from './accountplus/query.lcd.js';
import * as _332 from './affiliates/query.lcd.js';
import * as _333 from './assets/query.lcd.js';
import * as _334 from './blocktime/query.lcd.js';
import * as _335 from './bridge/query.lcd.js';
import * as _336 from './clob/query.lcd.js';
import * as _337 from './delaymsg/query.lcd.js';
import * as _338 from './epochs/query.lcd.js';
import * as _339 from './feetiers/query.lcd.js';
import * as _340 from './listing/query.lcd.js';
import * as _341 from './perpetuals/query.lcd.js';
import * as _342 from './prices/query.lcd.js';
import * as _343 from './ratelimit/query.lcd.js';
import * as _344 from './revshare/query.lcd.js';
import * as _345 from './rewards/query.lcd.js';
import * as _346 from './stats/query.lcd.js';
import * as _347 from './subaccounts/query.lcd.js';
import * as _348 from './vault/query.lcd.js';
import * as _349 from './vest/query.lcd.js';
import * as _350 from './accountplus/query.rpc.Query.js';
import * as _351 from './affiliates/query.rpc.Query.js';
import * as _352 from './assets/query.rpc.Query.js';
import * as _353 from './blocktime/query.rpc.Query.js';
import * as _354 from './bridge/query.rpc.Query.js';
import * as _355 from './clob/query.rpc.Query.js';
import * as _356 from './delaymsg/query.rpc.Query.js';
import * as _357 from './epochs/query.rpc.Query.js';
import * as _358 from './feetiers/query.rpc.Query.js';
import * as _359 from './govplus/query.rpc.Query.js';
import * as _360 from './listing/query.rpc.Query.js';
import * as _361 from './perpetuals/query.rpc.Query.js';
import * as _362 from './prices/query.rpc.Query.js';
import * as _363 from './ratelimit/query.rpc.Query.js';
import * as _364 from './revshare/query.rpc.Query.js';
import * as _365 from './rewards/query.rpc.Query.js';
import * as _366 from './sending/query.rpc.Query.js';
import * as _367 from './stats/query.rpc.Query.js';
import * as _368 from './subaccounts/query.rpc.Query.js';
import * as _369 from './vault/query.rpc.Query.js';
import * as _370 from './vest/query.rpc.Query.js';
import * as _371 from './accountplus/tx.rpc.msg.js';
import * as _372 from './affiliates/tx.rpc.msg.js';
import * as _373 from './blocktime/tx.rpc.msg.js';
import * as _374 from './bridge/tx.rpc.msg.js';
import * as _375 from './clob/tx.rpc.msg.js';
import * as _376 from './delaymsg/tx.rpc.msg.js';
import * as _377 from './feetiers/tx.rpc.msg.js';
import * as _378 from './govplus/tx.rpc.msg.js';
import * as _379 from './listing/tx.rpc.msg.js';
import * as _380 from './perpetuals/tx.rpc.msg.js';
import * as _381 from './prices/tx.rpc.msg.js';
import * as _382 from './ratelimit/tx.rpc.msg.js';
import * as _383 from './revshare/tx.rpc.msg.js';
import * as _384 from './rewards/tx.rpc.msg.js';
import * as _385 from './sending/tx.rpc.msg.js';
import * as _386 from './stats/tx.rpc.msg.js';
import * as _387 from './vault/tx.rpc.msg.js';
import * as _388 from './vest/tx.rpc.msg.js';
export declare namespace protocol {
    const accountplus: {
        MsgClientImpl: typeof _371.MsgClientImpl;
        QueryClientImpl: typeof _350.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
            getAuthenticator(request: _132.GetAuthenticatorRequest): Promise<_132.GetAuthenticatorResponse>;
            getAuthenticators(request: _132.GetAuthenticatorsRequest): Promise<_132.GetAuthenticatorsResponse>;
        };
        LCDQueryClient: typeof _331.LCDQueryClient;
        MsgAddAuthenticator: {
            encode(message: _133.MsgAddAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgAddAuthenticator;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.MsgAddAuthenticator>): _133.MsgAddAuthenticator;
        };
        MsgAddAuthenticatorResponse: {
            encode(message: _133.MsgAddAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgAddAuthenticatorResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.MsgAddAuthenticatorResponse>): _133.MsgAddAuthenticatorResponse;
        };
        MsgRemoveAuthenticator: {
            encode(message: _133.MsgRemoveAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgRemoveAuthenticator;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.MsgRemoveAuthenticator>): _133.MsgRemoveAuthenticator;
        };
        MsgRemoveAuthenticatorResponse: {
            encode(message: _133.MsgRemoveAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgRemoveAuthenticatorResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.MsgRemoveAuthenticatorResponse>): _133.MsgRemoveAuthenticatorResponse;
        };
        MsgSetActiveState: {
            encode(message: _133.MsgSetActiveState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgSetActiveState;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.MsgSetActiveState>): _133.MsgSetActiveState;
        };
        MsgSetActiveStateResponse: {
            encode(_: _133.MsgSetActiveStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.MsgSetActiveStateResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_133.MsgSetActiveStateResponse>): _133.MsgSetActiveStateResponse;
        };
        TxExtension: {
            encode(message: _133.TxExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _133.TxExtension;
            fromPartial(object: import("../helpers.js").DeepPartial<_133.TxExtension>): _133.TxExtension;
        };
        QueryParamsRequest: {
            encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.QueryParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.QueryParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
        };
        GetAuthenticatorsRequest: {
            encode(message: _132.GetAuthenticatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.GetAuthenticatorsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_132.GetAuthenticatorsRequest>): _132.GetAuthenticatorsRequest;
        };
        GetAuthenticatorsResponse: {
            encode(message: _132.GetAuthenticatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.GetAuthenticatorsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_132.GetAuthenticatorsResponse>): _132.GetAuthenticatorsResponse;
        };
        GetAuthenticatorRequest: {
            encode(message: _132.GetAuthenticatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.GetAuthenticatorRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_132.GetAuthenticatorRequest>): _132.GetAuthenticatorRequest;
        };
        GetAuthenticatorResponse: {
            encode(message: _132.GetAuthenticatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _132.GetAuthenticatorResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_132.GetAuthenticatorResponse>): _132.GetAuthenticatorResponse;
        };
        Params: {
            encode(message: _131.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _131.Params;
            fromPartial(object: import("../helpers.js").DeepPartial<_131.Params>): _131.Params;
        };
        AccountAuthenticator: {
            encode(message: _130.AccountAuthenticator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _130.AccountAuthenticator;
            fromPartial(object: import("../helpers.js").DeepPartial<_130.AccountAuthenticator>): _130.AccountAuthenticator;
        };
        AuthenticatorData: {
            encode(message: _129.AuthenticatorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _129.AuthenticatorData;
            fromPartial(object: import("../helpers.js").DeepPartial<_129.AuthenticatorData>): _129.AuthenticatorData;
        };
        GenesisState: {
            encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _129.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_129.GenesisState>): _129.GenesisState;
        };
        AccountState: {
            encode(message: _128.AccountState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _128.AccountState;
            fromPartial(object: import("../helpers.js").DeepPartial<_128.AccountState>): _128.AccountState;
        };
        TimestampNonceDetails: {
            encode(message: _128.TimestampNonceDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _128.TimestampNonceDetails;
            fromPartial(object: import("../helpers.js").DeepPartial<_128.TimestampNonceDetails>): _128.TimestampNonceDetails;
        };
    };
    const affiliates: {
        MsgClientImpl: typeof _372.MsgClientImpl;
        QueryClientImpl: typeof _351.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            affiliateInfo(request: _136.AffiliateInfoRequest): Promise<_136.AffiliateInfoResponse>;
            referredBy(request: _136.ReferredByRequest): Promise<_136.ReferredByResponse>;
            allAffiliateTiers(request?: _136.AllAffiliateTiersRequest): Promise<_136.AllAffiliateTiersResponse>;
            affiliateWhitelist(request?: _136.AffiliateWhitelistRequest): Promise<_136.AffiliateWhitelistResponse>;
        };
        LCDQueryClient: typeof _332.LCDQueryClient;
        MsgRegisterAffiliate: {
            encode(message: _137.MsgRegisterAffiliate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgRegisterAffiliate;
            fromPartial(object: import("../helpers.js").DeepPartial<_137.MsgRegisterAffiliate>): _137.MsgRegisterAffiliate;
        };
        MsgRegisterAffiliateResponse: {
            encode(_: _137.MsgRegisterAffiliateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgRegisterAffiliateResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_137.MsgRegisterAffiliateResponse>): _137.MsgRegisterAffiliateResponse;
        };
        MsgUpdateAffiliateTiers: {
            encode(message: _137.MsgUpdateAffiliateTiers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgUpdateAffiliateTiers;
            fromPartial(object: import("../helpers.js").DeepPartial<_137.MsgUpdateAffiliateTiers>): _137.MsgUpdateAffiliateTiers;
        };
        MsgUpdateAffiliateTiersResponse: {
            encode(_: _137.MsgUpdateAffiliateTiersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgUpdateAffiliateTiersResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_137.MsgUpdateAffiliateTiersResponse>): _137.MsgUpdateAffiliateTiersResponse;
        };
        MsgUpdateAffiliateWhitelist: {
            encode(message: _137.MsgUpdateAffiliateWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgUpdateAffiliateWhitelist;
            fromPartial(object: import("../helpers.js").DeepPartial<_137.MsgUpdateAffiliateWhitelist>): _137.MsgUpdateAffiliateWhitelist;
        };
        MsgUpdateAffiliateWhitelistResponse: {
            encode(_: _137.MsgUpdateAffiliateWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _137.MsgUpdateAffiliateWhitelistResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_137.MsgUpdateAffiliateWhitelistResponse>): _137.MsgUpdateAffiliateWhitelistResponse;
        };
        AffiliateInfoRequest: {
            encode(message: _136.AffiliateInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AffiliateInfoRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.AffiliateInfoRequest>): _136.AffiliateInfoRequest;
        };
        AffiliateInfoResponse: {
            encode(message: _136.AffiliateInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AffiliateInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.AffiliateInfoResponse>): _136.AffiliateInfoResponse;
        };
        ReferredByRequest: {
            encode(message: _136.ReferredByRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.ReferredByRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.ReferredByRequest>): _136.ReferredByRequest;
        };
        ReferredByResponse: {
            encode(message: _136.ReferredByResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.ReferredByResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.ReferredByResponse>): _136.ReferredByResponse;
        };
        AllAffiliateTiersRequest: {
            encode(_: _136.AllAffiliateTiersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AllAffiliateTiersRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_136.AllAffiliateTiersRequest>): _136.AllAffiliateTiersRequest;
        };
        AllAffiliateTiersResponse: {
            encode(message: _136.AllAffiliateTiersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AllAffiliateTiersResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.AllAffiliateTiersResponse>): _136.AllAffiliateTiersResponse;
        };
        AffiliateWhitelistRequest: {
            encode(_: _136.AffiliateWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AffiliateWhitelistRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_136.AffiliateWhitelistRequest>): _136.AffiliateWhitelistRequest;
        };
        AffiliateWhitelistResponse: {
            encode(message: _136.AffiliateWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _136.AffiliateWhitelistResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_136.AffiliateWhitelistResponse>): _136.AffiliateWhitelistResponse;
        };
        GenesisState: {
            encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _135.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_135.GenesisState>): _135.GenesisState;
        };
        AffiliateTiers: {
            encode(message: _134.AffiliateTiers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _134.AffiliateTiers;
            fromPartial(object: import("../helpers.js").DeepPartial<_134.AffiliateTiers>): _134.AffiliateTiers;
        };
        AffiliateTiers_Tier: {
            encode(message: _134.AffiliateTiers_Tier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _134.AffiliateTiers_Tier;
            fromPartial(object: import("../helpers.js").DeepPartial<_134.AffiliateTiers_Tier>): _134.AffiliateTiers_Tier;
        };
        AffiliateWhitelist: {
            encode(message: _134.AffiliateWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _134.AffiliateWhitelist;
            fromPartial(object: import("../helpers.js").DeepPartial<_134.AffiliateWhitelist>): _134.AffiliateWhitelist;
        };
        AffiliateWhitelist_Tier: {
            encode(message: _134.AffiliateWhitelist_Tier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _134.AffiliateWhitelist_Tier;
            fromPartial(object: import("../helpers.js").DeepPartial<_134.AffiliateWhitelist_Tier>): _134.AffiliateWhitelist_Tier;
        };
    };
    const assets: {
        QueryClientImpl: typeof _352.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            asset(request: _140.QueryAssetRequest): Promise<_140.QueryAssetResponse>;
            allAssets(request?: _140.QueryAllAssetsRequest): Promise<_140.QueryAllAssetsResponse>;
        };
        LCDQueryClient: typeof _333.LCDQueryClient;
        QueryAssetRequest: {
            encode(message: _140.QueryAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _140.QueryAssetRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_140.QueryAssetRequest>): _140.QueryAssetRequest;
        };
        QueryAssetResponse: {
            encode(message: _140.QueryAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _140.QueryAssetResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_140.QueryAssetResponse>): _140.QueryAssetResponse;
        };
        QueryAllAssetsRequest: {
            encode(message: _140.QueryAllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _140.QueryAllAssetsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_140.QueryAllAssetsRequest>): _140.QueryAllAssetsRequest;
        };
        QueryAllAssetsResponse: {
            encode(message: _140.QueryAllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _140.QueryAllAssetsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_140.QueryAllAssetsResponse>): _140.QueryAllAssetsResponse;
        };
        GenesisState: {
            encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _139.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_139.GenesisState>): _139.GenesisState;
        };
        Asset: {
            encode(message: _138.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _138.Asset;
            fromPartial(object: import("../helpers.js").DeepPartial<_138.Asset>): _138.Asset;
        };
    };
    const blocktime: {
        MsgClientImpl: typeof _373.MsgClientImpl;
        QueryClientImpl: typeof _353.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            downtimeParams(request?: _145.QueryDowntimeParamsRequest): Promise<_145.QueryDowntimeParamsResponse>;
            previousBlockInfo(request?: _145.QueryPreviousBlockInfoRequest): Promise<_145.QueryPreviousBlockInfoResponse>;
            allDowntimeInfo(request?: _145.QueryAllDowntimeInfoRequest): Promise<_145.QueryAllDowntimeInfoResponse>;
        };
        LCDQueryClient: typeof _334.LCDQueryClient;
        MsgUpdateDowntimeParams: {
            encode(message: _146.MsgUpdateDowntimeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _146.MsgUpdateDowntimeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_146.MsgUpdateDowntimeParams>): _146.MsgUpdateDowntimeParams;
        };
        MsgUpdateDowntimeParamsResponse: {
            encode(_: _146.MsgUpdateDowntimeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _146.MsgUpdateDowntimeParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_146.MsgUpdateDowntimeParamsResponse>): _146.MsgUpdateDowntimeParamsResponse;
        };
        MsgUpdateSynchronyParams: {
            encode(message: _146.MsgUpdateSynchronyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _146.MsgUpdateSynchronyParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_146.MsgUpdateSynchronyParams>): _146.MsgUpdateSynchronyParams;
        };
        MsgUpdateSynchronyParamsResponse: {
            encode(_: _146.MsgUpdateSynchronyParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _146.MsgUpdateSynchronyParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_146.MsgUpdateSynchronyParamsResponse>): _146.MsgUpdateSynchronyParamsResponse;
        };
        QueryDowntimeParamsRequest: {
            encode(_: _145.QueryDowntimeParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryDowntimeParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_145.QueryDowntimeParamsRequest>): _145.QueryDowntimeParamsRequest;
        };
        QueryDowntimeParamsResponse: {
            encode(message: _145.QueryDowntimeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryDowntimeParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_145.QueryDowntimeParamsResponse>): _145.QueryDowntimeParamsResponse;
        };
        QueryPreviousBlockInfoRequest: {
            encode(_: _145.QueryPreviousBlockInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryPreviousBlockInfoRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_145.QueryPreviousBlockInfoRequest>): _145.QueryPreviousBlockInfoRequest;
        };
        QueryPreviousBlockInfoResponse: {
            encode(message: _145.QueryPreviousBlockInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryPreviousBlockInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_145.QueryPreviousBlockInfoResponse>): _145.QueryPreviousBlockInfoResponse;
        };
        QueryAllDowntimeInfoRequest: {
            encode(_: _145.QueryAllDowntimeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryAllDowntimeInfoRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_145.QueryAllDowntimeInfoRequest>): _145.QueryAllDowntimeInfoRequest;
        };
        QueryAllDowntimeInfoResponse: {
            encode(message: _145.QueryAllDowntimeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _145.QueryAllDowntimeInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_145.QueryAllDowntimeInfoResponse>): _145.QueryAllDowntimeInfoResponse;
        };
        DowntimeParams: {
            encode(message: _144.DowntimeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _144.DowntimeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_144.DowntimeParams>): _144.DowntimeParams;
        };
        SynchronyParams: {
            encode(message: _144.SynchronyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _144.SynchronyParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_144.SynchronyParams>): _144.SynchronyParams;
        };
        GenesisState: {
            encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _143.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_143.GenesisState>): _143.GenesisState;
        };
        BlockInfo: {
            encode(message: _142.BlockInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _142.BlockInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_142.BlockInfo>): _142.BlockInfo;
        };
        AllDowntimeInfo: {
            encode(message: _142.AllDowntimeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _142.AllDowntimeInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_142.AllDowntimeInfo>): _142.AllDowntimeInfo;
        };
        AllDowntimeInfo_DowntimeInfo: {
            encode(message: _142.AllDowntimeInfo_DowntimeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _142.AllDowntimeInfo_DowntimeInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_142.AllDowntimeInfo_DowntimeInfo>): _142.AllDowntimeInfo_DowntimeInfo;
        };
    };
    const bridge: {
        MsgClientImpl: typeof _374.MsgClientImpl;
        QueryClientImpl: typeof _354.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            eventParams(request?: _151.QueryEventParamsRequest): Promise<_151.QueryEventParamsResponse>;
            proposeParams(request?: _151.QueryProposeParamsRequest): Promise<_151.QueryProposeParamsResponse>;
            safetyParams(request?: _151.QuerySafetyParamsRequest): Promise<_151.QuerySafetyParamsResponse>;
            acknowledgedEventInfo(request?: _151.QueryAcknowledgedEventInfoRequest): Promise<_151.QueryAcknowledgedEventInfoResponse>;
            recognizedEventInfo(request?: _151.QueryRecognizedEventInfoRequest): Promise<_151.QueryRecognizedEventInfoResponse>;
            delayedCompleteBridgeMessages(request: _151.QueryDelayedCompleteBridgeMessagesRequest): Promise<_151.QueryDelayedCompleteBridgeMessagesResponse>;
        };
        LCDQueryClient: typeof _335.LCDQueryClient;
        MsgAcknowledgeBridges: {
            encode(message: _152.MsgAcknowledgeBridges, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgAcknowledgeBridges;
            fromPartial(object: import("../helpers.js").DeepPartial<_152.MsgAcknowledgeBridges>): _152.MsgAcknowledgeBridges;
        };
        MsgAcknowledgeBridgesResponse: {
            encode(_: _152.MsgAcknowledgeBridgesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgAcknowledgeBridgesResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_152.MsgAcknowledgeBridgesResponse>): _152.MsgAcknowledgeBridgesResponse;
        };
        MsgCompleteBridge: {
            encode(message: _152.MsgCompleteBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgCompleteBridge;
            fromPartial(object: import("../helpers.js").DeepPartial<_152.MsgCompleteBridge>): _152.MsgCompleteBridge;
        };
        MsgCompleteBridgeResponse: {
            encode(_: _152.MsgCompleteBridgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgCompleteBridgeResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_152.MsgCompleteBridgeResponse>): _152.MsgCompleteBridgeResponse;
        };
        MsgUpdateEventParams: {
            encode(message: _152.MsgUpdateEventParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateEventParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_152.MsgUpdateEventParams>): _152.MsgUpdateEventParams;
        };
        MsgUpdateEventParamsResponse: {
            encode(_: _152.MsgUpdateEventParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateEventParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_152.MsgUpdateEventParamsResponse>): _152.MsgUpdateEventParamsResponse;
        };
        MsgUpdateProposeParams: {
            encode(message: _152.MsgUpdateProposeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateProposeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_152.MsgUpdateProposeParams>): _152.MsgUpdateProposeParams;
        };
        MsgUpdateProposeParamsResponse: {
            encode(_: _152.MsgUpdateProposeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateProposeParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_152.MsgUpdateProposeParamsResponse>): _152.MsgUpdateProposeParamsResponse;
        };
        MsgUpdateSafetyParams: {
            encode(message: _152.MsgUpdateSafetyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateSafetyParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_152.MsgUpdateSafetyParams>): _152.MsgUpdateSafetyParams;
        };
        MsgUpdateSafetyParamsResponse: {
            encode(_: _152.MsgUpdateSafetyParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _152.MsgUpdateSafetyParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_152.MsgUpdateSafetyParamsResponse>): _152.MsgUpdateSafetyParamsResponse;
        };
        QueryEventParamsRequest: {
            encode(_: _151.QueryEventParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryEventParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_151.QueryEventParamsRequest>): _151.QueryEventParamsRequest;
        };
        QueryEventParamsResponse: {
            encode(message: _151.QueryEventParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryEventParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryEventParamsResponse>): _151.QueryEventParamsResponse;
        };
        QueryProposeParamsRequest: {
            encode(_: _151.QueryProposeParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryProposeParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_151.QueryProposeParamsRequest>): _151.QueryProposeParamsRequest;
        };
        QueryProposeParamsResponse: {
            encode(message: _151.QueryProposeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryProposeParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryProposeParamsResponse>): _151.QueryProposeParamsResponse;
        };
        QuerySafetyParamsRequest: {
            encode(_: _151.QuerySafetyParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QuerySafetyParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_151.QuerySafetyParamsRequest>): _151.QuerySafetyParamsRequest;
        };
        QuerySafetyParamsResponse: {
            encode(message: _151.QuerySafetyParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QuerySafetyParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QuerySafetyParamsResponse>): _151.QuerySafetyParamsResponse;
        };
        QueryAcknowledgedEventInfoRequest: {
            encode(_: _151.QueryAcknowledgedEventInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryAcknowledgedEventInfoRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_151.QueryAcknowledgedEventInfoRequest>): _151.QueryAcknowledgedEventInfoRequest;
        };
        QueryAcknowledgedEventInfoResponse: {
            encode(message: _151.QueryAcknowledgedEventInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryAcknowledgedEventInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryAcknowledgedEventInfoResponse>): _151.QueryAcknowledgedEventInfoResponse;
        };
        QueryRecognizedEventInfoRequest: {
            encode(_: _151.QueryRecognizedEventInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryRecognizedEventInfoRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_151.QueryRecognizedEventInfoRequest>): _151.QueryRecognizedEventInfoRequest;
        };
        QueryRecognizedEventInfoResponse: {
            encode(message: _151.QueryRecognizedEventInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryRecognizedEventInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryRecognizedEventInfoResponse>): _151.QueryRecognizedEventInfoResponse;
        };
        QueryDelayedCompleteBridgeMessagesRequest: {
            encode(message: _151.QueryDelayedCompleteBridgeMessagesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryDelayedCompleteBridgeMessagesRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryDelayedCompleteBridgeMessagesRequest>): _151.QueryDelayedCompleteBridgeMessagesRequest;
        };
        QueryDelayedCompleteBridgeMessagesResponse: {
            encode(message: _151.QueryDelayedCompleteBridgeMessagesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.QueryDelayedCompleteBridgeMessagesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.QueryDelayedCompleteBridgeMessagesResponse>): _151.QueryDelayedCompleteBridgeMessagesResponse;
        };
        DelayedCompleteBridgeMessage: {
            encode(message: _151.DelayedCompleteBridgeMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _151.DelayedCompleteBridgeMessage;
            fromPartial(object: import("../helpers.js").DeepPartial<_151.DelayedCompleteBridgeMessage>): _151.DelayedCompleteBridgeMessage;
        };
        EventParams: {
            encode(message: _150.EventParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _150.EventParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_150.EventParams>): _150.EventParams;
        };
        ProposeParams: {
            encode(message: _150.ProposeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _150.ProposeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_150.ProposeParams>): _150.ProposeParams;
        };
        SafetyParams: {
            encode(message: _150.SafetyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _150.SafetyParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_150.SafetyParams>): _150.SafetyParams;
        };
        GenesisState: {
            encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _149.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_149.GenesisState>): _149.GenesisState;
        };
        BridgeEvent: {
            encode(message: _148.BridgeEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _148.BridgeEvent;
            fromPartial(object: import("../helpers.js").DeepPartial<_148.BridgeEvent>): _148.BridgeEvent;
        };
        BridgeEventInfo: {
            encode(message: _147.BridgeEventInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _147.BridgeEventInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_147.BridgeEventInfo>): _147.BridgeEventInfo;
        };
    };
    const clob: {
        MsgClientImpl: typeof _375.MsgClientImpl;
        QueryClientImpl: typeof _355.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            clobPair(request: _166.QueryGetClobPairRequest): Promise<_166.QueryClobPairResponse>;
            clobPairAll(request?: _166.QueryAllClobPairRequest): Promise<_166.QueryClobPairAllResponse>;
            mevNodeToNodeCalculation(request: _166.MevNodeToNodeCalculationRequest): Promise<_166.MevNodeToNodeCalculationResponse>;
            equityTierLimitConfiguration(request?: _166.QueryEquityTierLimitConfigurationRequest): Promise<_166.QueryEquityTierLimitConfigurationResponse>;
            blockRateLimitConfiguration(request?: _166.QueryBlockRateLimitConfigurationRequest): Promise<_166.QueryBlockRateLimitConfigurationResponse>;
            liquidationsConfiguration(request?: _166.QueryLiquidationsConfigurationRequest): Promise<_166.QueryLiquidationsConfigurationResponse>;
            statefulOrder(request: _166.QueryStatefulOrderRequest): Promise<_166.QueryStatefulOrderResponse>;
            nextClobPairId(request?: _166.QueryNextClobPairIdRequest): Promise<_166.QueryNextClobPairIdResponse>;
            streamOrderbookUpdates(request: _166.StreamOrderbookUpdatesRequest): Promise<_166.StreamOrderbookUpdatesResponse>;
        };
        LCDQueryClient: typeof _336.LCDQueryClient;
        MsgCreateClobPair: {
            encode(message: _168.MsgCreateClobPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgCreateClobPair;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgCreateClobPair>): _168.MsgCreateClobPair;
        };
        MsgCreateClobPairResponse: {
            encode(_: _168.MsgCreateClobPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgCreateClobPairResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgCreateClobPairResponse>): _168.MsgCreateClobPairResponse;
        };
        MsgProposedOperations: {
            encode(message: _168.MsgProposedOperations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgProposedOperations;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgProposedOperations>): _168.MsgProposedOperations;
        };
        MsgProposedOperationsResponse: {
            encode(_: _168.MsgProposedOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgProposedOperationsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgProposedOperationsResponse>): _168.MsgProposedOperationsResponse;
        };
        MsgPlaceOrder: {
            encode(message: _168.MsgPlaceOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgPlaceOrder;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgPlaceOrder>): _168.MsgPlaceOrder;
        };
        MsgPlaceOrderResponse: {
            encode(_: _168.MsgPlaceOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgPlaceOrderResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgPlaceOrderResponse>): _168.MsgPlaceOrderResponse;
        };
        MsgCancelOrder: {
            encode(message: _168.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgCancelOrder;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgCancelOrder>): _168.MsgCancelOrder;
        };
        MsgCancelOrderResponse: {
            encode(_: _168.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgCancelOrderResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgCancelOrderResponse>): _168.MsgCancelOrderResponse;
        };
        MsgBatchCancel: {
            encode(message: _168.MsgBatchCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgBatchCancel;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgBatchCancel>): _168.MsgBatchCancel;
        };
        OrderBatch: {
            encode(message: _168.OrderBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.OrderBatch;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.OrderBatch>): _168.OrderBatch;
        };
        MsgBatchCancelResponse: {
            encode(message: _168.MsgBatchCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgBatchCancelResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgBatchCancelResponse>): _168.MsgBatchCancelResponse;
        };
        MsgUpdateClobPair: {
            encode(message: _168.MsgUpdateClobPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateClobPair;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgUpdateClobPair>): _168.MsgUpdateClobPair;
        };
        MsgUpdateClobPairResponse: {
            encode(_: _168.MsgUpdateClobPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateClobPairResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgUpdateClobPairResponse>): _168.MsgUpdateClobPairResponse;
        };
        OperationRaw: {
            encode(message: _168.OperationRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.OperationRaw;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.OperationRaw>): _168.OperationRaw;
        };
        MsgUpdateEquityTierLimitConfiguration: {
            encode(message: _168.MsgUpdateEquityTierLimitConfiguration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateEquityTierLimitConfiguration;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgUpdateEquityTierLimitConfiguration>): _168.MsgUpdateEquityTierLimitConfiguration;
        };
        MsgUpdateEquityTierLimitConfigurationResponse: {
            encode(_: _168.MsgUpdateEquityTierLimitConfigurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateEquityTierLimitConfigurationResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgUpdateEquityTierLimitConfigurationResponse>): _168.MsgUpdateEquityTierLimitConfigurationResponse;
        };
        MsgUpdateBlockRateLimitConfiguration: {
            encode(message: _168.MsgUpdateBlockRateLimitConfiguration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateBlockRateLimitConfiguration;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgUpdateBlockRateLimitConfiguration>): _168.MsgUpdateBlockRateLimitConfiguration;
        };
        MsgUpdateBlockRateLimitConfigurationResponse: {
            encode(_: _168.MsgUpdateBlockRateLimitConfigurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateBlockRateLimitConfigurationResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgUpdateBlockRateLimitConfigurationResponse>): _168.MsgUpdateBlockRateLimitConfigurationResponse;
        };
        MsgUpdateLiquidationsConfig: {
            encode(message: _168.MsgUpdateLiquidationsConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateLiquidationsConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_168.MsgUpdateLiquidationsConfig>): _168.MsgUpdateLiquidationsConfig;
        };
        MsgUpdateLiquidationsConfigResponse: {
            encode(_: _168.MsgUpdateLiquidationsConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _168.MsgUpdateLiquidationsConfigResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_168.MsgUpdateLiquidationsConfigResponse>): _168.MsgUpdateLiquidationsConfigResponse;
        };
        StagedFinalizeBlockEvent: {
            encode(message: _167.StagedFinalizeBlockEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _167.StagedFinalizeBlockEvent;
            fromPartial(object: import("../helpers.js").DeepPartial<_167.StagedFinalizeBlockEvent>): _167.StagedFinalizeBlockEvent;
        };
        QueryGetClobPairRequest: {
            encode(message: _166.QueryGetClobPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryGetClobPairRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryGetClobPairRequest>): _166.QueryGetClobPairRequest;
        };
        QueryClobPairResponse: {
            encode(message: _166.QueryClobPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryClobPairResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryClobPairResponse>): _166.QueryClobPairResponse;
        };
        QueryAllClobPairRequest: {
            encode(message: _166.QueryAllClobPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryAllClobPairRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryAllClobPairRequest>): _166.QueryAllClobPairRequest;
        };
        QueryClobPairAllResponse: {
            encode(message: _166.QueryClobPairAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryClobPairAllResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryClobPairAllResponse>): _166.QueryClobPairAllResponse;
        };
        MevNodeToNodeCalculationRequest: {
            encode(message: _166.MevNodeToNodeCalculationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.MevNodeToNodeCalculationRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.MevNodeToNodeCalculationRequest>): _166.MevNodeToNodeCalculationRequest;
        };
        MevNodeToNodeCalculationResponse: {
            encode(message: _166.MevNodeToNodeCalculationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.MevNodeToNodeCalculationResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.MevNodeToNodeCalculationResponse>): _166.MevNodeToNodeCalculationResponse;
        };
        MevNodeToNodeCalculationResponse_MevAndVolumePerClob: {
            encode(message: _166.MevNodeToNodeCalculationResponse_MevAndVolumePerClob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.MevNodeToNodeCalculationResponse_MevAndVolumePerClob;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.MevNodeToNodeCalculationResponse_MevAndVolumePerClob>): _166.MevNodeToNodeCalculationResponse_MevAndVolumePerClob;
        };
        QueryEquityTierLimitConfigurationRequest: {
            encode(_: _166.QueryEquityTierLimitConfigurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryEquityTierLimitConfigurationRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_166.QueryEquityTierLimitConfigurationRequest>): _166.QueryEquityTierLimitConfigurationRequest;
        };
        QueryEquityTierLimitConfigurationResponse: {
            encode(message: _166.QueryEquityTierLimitConfigurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryEquityTierLimitConfigurationResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryEquityTierLimitConfigurationResponse>): _166.QueryEquityTierLimitConfigurationResponse;
        };
        QueryBlockRateLimitConfigurationRequest: {
            encode(_: _166.QueryBlockRateLimitConfigurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryBlockRateLimitConfigurationRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_166.QueryBlockRateLimitConfigurationRequest>): _166.QueryBlockRateLimitConfigurationRequest;
        };
        QueryBlockRateLimitConfigurationResponse: {
            encode(message: _166.QueryBlockRateLimitConfigurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryBlockRateLimitConfigurationResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryBlockRateLimitConfigurationResponse>): _166.QueryBlockRateLimitConfigurationResponse;
        };
        QueryStatefulOrderRequest: {
            encode(message: _166.QueryStatefulOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryStatefulOrderRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryStatefulOrderRequest>): _166.QueryStatefulOrderRequest;
        };
        QueryStatefulOrderResponse: {
            encode(message: _166.QueryStatefulOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryStatefulOrderResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryStatefulOrderResponse>): _166.QueryStatefulOrderResponse;
        };
        QueryLiquidationsConfigurationRequest: {
            encode(_: _166.QueryLiquidationsConfigurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryLiquidationsConfigurationRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_166.QueryLiquidationsConfigurationRequest>): _166.QueryLiquidationsConfigurationRequest;
        };
        QueryLiquidationsConfigurationResponse: {
            encode(message: _166.QueryLiquidationsConfigurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryLiquidationsConfigurationResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryLiquidationsConfigurationResponse>): _166.QueryLiquidationsConfigurationResponse;
        };
        QueryNextClobPairIdRequest: {
            encode(_: _166.QueryNextClobPairIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryNextClobPairIdRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_166.QueryNextClobPairIdRequest>): _166.QueryNextClobPairIdRequest;
        };
        QueryNextClobPairIdResponse: {
            encode(message: _166.QueryNextClobPairIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.QueryNextClobPairIdResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.QueryNextClobPairIdResponse>): _166.QueryNextClobPairIdResponse;
        };
        StreamOrderbookUpdatesRequest: {
            encode(message: _166.StreamOrderbookUpdatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamOrderbookUpdatesRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamOrderbookUpdatesRequest>): _166.StreamOrderbookUpdatesRequest;
        };
        StreamOrderbookUpdatesResponse: {
            encode(message: _166.StreamOrderbookUpdatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamOrderbookUpdatesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamOrderbookUpdatesResponse>): _166.StreamOrderbookUpdatesResponse;
        };
        StreamUpdate: {
            encode(message: _166.StreamUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamUpdate;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamUpdate>): _166.StreamUpdate;
        };
        StreamOrderbookUpdate: {
            encode(message: _166.StreamOrderbookUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamOrderbookUpdate;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamOrderbookUpdate>): _166.StreamOrderbookUpdate;
        };
        StreamOrderbookFill: {
            encode(message: _166.StreamOrderbookFill, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamOrderbookFill;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamOrderbookFill>): _166.StreamOrderbookFill;
        };
        StreamTakerOrder: {
            encode(message: _166.StreamTakerOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamTakerOrder;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamTakerOrder>): _166.StreamTakerOrder;
        };
        StreamTakerOrderStatus: {
            encode(message: _166.StreamTakerOrderStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _166.StreamTakerOrderStatus;
            fromPartial(object: import("../helpers.js").DeepPartial<_166.StreamTakerOrderStatus>): _166.StreamTakerOrderStatus;
        };
        ProcessProposerMatchesEvents: {
            encode(message: _165.ProcessProposerMatchesEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _165.ProcessProposerMatchesEvents;
            fromPartial(object: import("../helpers.js").DeepPartial<_165.ProcessProposerMatchesEvents>): _165.ProcessProposerMatchesEvents;
        };
        order_SideFromJSON(object: any): _164.Order_Side;
        order_SideToJSON(object: _164.Order_Side): string;
        order_TimeInForceFromJSON(object: any): _164.Order_TimeInForce;
        order_TimeInForceToJSON(object: _164.Order_TimeInForce): string;
        order_ConditionTypeFromJSON(object: any): _164.Order_ConditionType;
        order_ConditionTypeToJSON(object: _164.Order_ConditionType): string;
        Order_Side: typeof _164.Order_Side;
        Order_SideSDKType: typeof _164.Order_Side;
        Order_TimeInForce: typeof _164.Order_TimeInForce;
        Order_TimeInForceSDKType: typeof _164.Order_TimeInForce;
        Order_ConditionType: typeof _164.Order_ConditionType;
        Order_ConditionTypeSDKType: typeof _164.Order_ConditionType;
        OrderId: {
            encode(message: _164.OrderId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.OrderId;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.OrderId>): _164.OrderId;
        };
        OrdersFilledDuringLatestBlock: {
            encode(message: _164.OrdersFilledDuringLatestBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.OrdersFilledDuringLatestBlock;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.OrdersFilledDuringLatestBlock>): _164.OrdersFilledDuringLatestBlock;
        };
        PotentiallyPrunableOrders: {
            encode(message: _164.PotentiallyPrunableOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.PotentiallyPrunableOrders;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.PotentiallyPrunableOrders>): _164.PotentiallyPrunableOrders;
        };
        OrderFillState: {
            encode(message: _164.OrderFillState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.OrderFillState;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.OrderFillState>): _164.OrderFillState;
        };
        StatefulOrderTimeSliceValue: {
            encode(message: _164.StatefulOrderTimeSliceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.StatefulOrderTimeSliceValue;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.StatefulOrderTimeSliceValue>): _164.StatefulOrderTimeSliceValue;
        };
        LongTermOrderPlacement: {
            encode(message: _164.LongTermOrderPlacement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.LongTermOrderPlacement;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.LongTermOrderPlacement>): _164.LongTermOrderPlacement;
        };
        ConditionalOrderPlacement: {
            encode(message: _164.ConditionalOrderPlacement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.ConditionalOrderPlacement;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.ConditionalOrderPlacement>): _164.ConditionalOrderPlacement;
        };
        Order: {
            encode(message: _164.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.Order;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.Order>): _164.Order;
        };
        TransactionOrdering: {
            encode(message: _164.TransactionOrdering, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.TransactionOrdering;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.TransactionOrdering>): _164.TransactionOrdering;
        };
        StreamLiquidationOrder: {
            encode(message: _164.StreamLiquidationOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _164.StreamLiquidationOrder;
            fromPartial(object: import("../helpers.js").DeepPartial<_164.StreamLiquidationOrder>): _164.StreamLiquidationOrder;
        };
        orderRemoval_RemovalReasonFromJSON(object: any): _163.OrderRemoval_RemovalReason;
        orderRemoval_RemovalReasonToJSON(object: _163.OrderRemoval_RemovalReason): string;
        OrderRemoval_RemovalReason: typeof _163.OrderRemoval_RemovalReason;
        OrderRemoval_RemovalReasonSDKType: typeof _163.OrderRemoval_RemovalReason;
        OrderRemoval: {
            encode(message: _163.OrderRemoval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _163.OrderRemoval;
            fromPartial(object: import("../helpers.js").DeepPartial<_163.OrderRemoval>): _163.OrderRemoval;
        };
        Operation: {
            encode(message: _162.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _162.Operation;
            fromPartial(object: import("../helpers.js").DeepPartial<_162.Operation>): _162.Operation;
        };
        InternalOperation: {
            encode(message: _162.InternalOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _162.InternalOperation;
            fromPartial(object: import("../helpers.js").DeepPartial<_162.InternalOperation>): _162.InternalOperation;
        };
        MEVMatch: {
            encode(message: _161.MEVMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _161.MEVMatch;
            fromPartial(object: import("../helpers.js").DeepPartial<_161.MEVMatch>): _161.MEVMatch;
        };
        MEVLiquidationMatch: {
            encode(message: _161.MEVLiquidationMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _161.MEVLiquidationMatch;
            fromPartial(object: import("../helpers.js").DeepPartial<_161.MEVLiquidationMatch>): _161.MEVLiquidationMatch;
        };
        ClobMidPrice: {
            encode(message: _161.ClobMidPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _161.ClobMidPrice;
            fromPartial(object: import("../helpers.js").DeepPartial<_161.ClobMidPrice>): _161.ClobMidPrice;
        };
        ValidatorMevMatches: {
            encode(message: _161.ValidatorMevMatches, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _161.ValidatorMevMatches;
            fromPartial(object: import("../helpers.js").DeepPartial<_161.ValidatorMevMatches>): _161.ValidatorMevMatches;
        };
        MevNodeToNodeMetrics: {
            encode(message: _161.MevNodeToNodeMetrics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _161.MevNodeToNodeMetrics;
            fromPartial(object: import("../helpers.js").DeepPartial<_161.MevNodeToNodeMetrics>): _161.MevNodeToNodeMetrics;
        };
        ClobMatch: {
            encode(message: _160.ClobMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.ClobMatch;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.ClobMatch>): _160.ClobMatch;
        };
        MakerFill: {
            encode(message: _160.MakerFill, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.MakerFill;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.MakerFill>): _160.MakerFill;
        };
        MatchOrders: {
            encode(message: _160.MatchOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.MatchOrders;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.MatchOrders>): _160.MatchOrders;
        };
        MatchPerpetualLiquidation: {
            encode(message: _160.MatchPerpetualLiquidation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.MatchPerpetualLiquidation;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.MatchPerpetualLiquidation>): _160.MatchPerpetualLiquidation;
        };
        MatchPerpetualDeleveraging: {
            encode(message: _160.MatchPerpetualDeleveraging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.MatchPerpetualDeleveraging;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.MatchPerpetualDeleveraging>): _160.MatchPerpetualDeleveraging;
        };
        MatchPerpetualDeleveraging_Fill: {
            encode(message: _160.MatchPerpetualDeleveraging_Fill, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _160.MatchPerpetualDeleveraging_Fill;
            fromPartial(object: import("../helpers.js").DeepPartial<_160.MatchPerpetualDeleveraging_Fill>): _160.MatchPerpetualDeleveraging_Fill;
        };
        PerpetualLiquidationInfo: {
            encode(message: _159.PerpetualLiquidationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _159.PerpetualLiquidationInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_159.PerpetualLiquidationInfo>): _159.PerpetualLiquidationInfo;
        };
        SubaccountLiquidationInfo: {
            encode(message: _159.SubaccountLiquidationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _159.SubaccountLiquidationInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_159.SubaccountLiquidationInfo>): _159.SubaccountLiquidationInfo;
        };
        SubaccountOpenPositionInfo: {
            encode(message: _159.SubaccountOpenPositionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _159.SubaccountOpenPositionInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_159.SubaccountOpenPositionInfo>): _159.SubaccountOpenPositionInfo;
        };
        LiquidationsConfig: {
            encode(message: _158.LiquidationsConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _158.LiquidationsConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_158.LiquidationsConfig>): _158.LiquidationsConfig;
        };
        PositionBlockLimits: {
            encode(message: _158.PositionBlockLimits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _158.PositionBlockLimits;
            fromPartial(object: import("../helpers.js").DeepPartial<_158.PositionBlockLimits>): _158.PositionBlockLimits;
        };
        SubaccountBlockLimits: {
            encode(message: _158.SubaccountBlockLimits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _158.SubaccountBlockLimits;
            fromPartial(object: import("../helpers.js").DeepPartial<_158.SubaccountBlockLimits>): _158.SubaccountBlockLimits;
        };
        FillablePriceConfig: {
            encode(message: _158.FillablePriceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _158.FillablePriceConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_158.FillablePriceConfig>): _158.FillablePriceConfig;
        };
        GenesisState: {
            encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _157.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_157.GenesisState>): _157.GenesisState;
        };
        ClobStagedFinalizeBlockEvent: {
            encode(message: _156.ClobStagedFinalizeBlockEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _156.ClobStagedFinalizeBlockEvent;
            fromPartial(object: import("../helpers.js").DeepPartial<_156.ClobStagedFinalizeBlockEvent>): _156.ClobStagedFinalizeBlockEvent;
        };
        EquityTierLimitConfiguration: {
            encode(message: _155.EquityTierLimitConfiguration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _155.EquityTierLimitConfiguration;
            fromPartial(object: import("../helpers.js").DeepPartial<_155.EquityTierLimitConfiguration>): _155.EquityTierLimitConfiguration;
        };
        EquityTierLimit: {
            encode(message: _155.EquityTierLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _155.EquityTierLimit;
            fromPartial(object: import("../helpers.js").DeepPartial<_155.EquityTierLimit>): _155.EquityTierLimit;
        };
        clobPair_StatusFromJSON(object: any): _154.ClobPair_Status;
        clobPair_StatusToJSON(object: _154.ClobPair_Status): string;
        ClobPair_Status: typeof _154.ClobPair_Status;
        ClobPair_StatusSDKType: typeof _154.ClobPair_Status;
        PerpetualClobMetadata: {
            encode(message: _154.PerpetualClobMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _154.PerpetualClobMetadata;
            fromPartial(object: import("../helpers.js").DeepPartial<_154.PerpetualClobMetadata>): _154.PerpetualClobMetadata;
        };
        SpotClobMetadata: {
            encode(message: _154.SpotClobMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _154.SpotClobMetadata;
            fromPartial(object: import("../helpers.js").DeepPartial<_154.SpotClobMetadata>): _154.SpotClobMetadata;
        };
        ClobPair: {
            encode(message: _154.ClobPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _154.ClobPair;
            fromPartial(object: import("../helpers.js").DeepPartial<_154.ClobPair>): _154.ClobPair;
        };
        BlockRateLimitConfiguration: {
            encode(message: _153.BlockRateLimitConfiguration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _153.BlockRateLimitConfiguration;
            fromPartial(object: import("../helpers.js").DeepPartial<_153.BlockRateLimitConfiguration>): _153.BlockRateLimitConfiguration;
        };
        MaxPerNBlocksRateLimit: {
            encode(message: _153.MaxPerNBlocksRateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _153.MaxPerNBlocksRateLimit;
            fromPartial(object: import("../helpers.js").DeepPartial<_153.MaxPerNBlocksRateLimit>): _153.MaxPerNBlocksRateLimit;
        };
    };
    namespace daemons {
        const bridge: {
            AddBridgeEventsRequest: {
                encode(message: _169.AddBridgeEventsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _169.AddBridgeEventsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_169.AddBridgeEventsRequest>): _169.AddBridgeEventsRequest;
            };
            AddBridgeEventsResponse: {
                encode(_: _169.AddBridgeEventsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _169.AddBridgeEventsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_169.AddBridgeEventsResponse>): _169.AddBridgeEventsResponse;
            };
        };
        const liquidation: {
            LiquidateSubaccountsRequest: {
                encode(message: _170.LiquidateSubaccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _170.LiquidateSubaccountsRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_170.LiquidateSubaccountsRequest>): _170.LiquidateSubaccountsRequest;
            };
            LiquidateSubaccountsResponse: {
                encode(_: _170.LiquidateSubaccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _170.LiquidateSubaccountsResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_170.LiquidateSubaccountsResponse>): _170.LiquidateSubaccountsResponse;
            };
        };
        const pricefeed: {
            UpdateMarketPricesRequest: {
                encode(message: _171.UpdateMarketPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _171.UpdateMarketPricesRequest;
                fromPartial(object: import("../helpers.js").DeepPartial<_171.UpdateMarketPricesRequest>): _171.UpdateMarketPricesRequest;
            };
            UpdateMarketPricesResponse: {
                encode(_: _171.UpdateMarketPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _171.UpdateMarketPricesResponse;
                fromPartial(_: import("../helpers.js").DeepPartial<_171.UpdateMarketPricesResponse>): _171.UpdateMarketPricesResponse;
            };
            ExchangePrice: {
                encode(message: _171.ExchangePrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _171.ExchangePrice;
                fromPartial(object: import("../helpers.js").DeepPartial<_171.ExchangePrice>): _171.ExchangePrice;
            };
            MarketPriceUpdate: {
                encode(message: _171.MarketPriceUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _171.MarketPriceUpdate;
                fromPartial(object: import("../helpers.js").DeepPartial<_171.MarketPriceUpdate>): _171.MarketPriceUpdate;
            };
        };
    }
    const delaymsg: {
        MsgClientImpl: typeof _376.MsgClientImpl;
        QueryClientImpl: typeof _356.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            nextDelayedMessageId(request?: _175.QueryNextDelayedMessageIdRequest): Promise<_175.QueryNextDelayedMessageIdResponse>;
            message(request: _175.QueryMessageRequest): Promise<_175.QueryMessageResponse>;
            blockMessageIds(request: _175.QueryBlockMessageIdsRequest): Promise<_175.QueryBlockMessageIdsResponse>;
        };
        LCDQueryClient: typeof _337.LCDQueryClient;
        MsgDelayMessage: {
            encode(message: _176.MsgDelayMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _176.MsgDelayMessage;
            fromPartial(object: import("../helpers.js").DeepPartial<_176.MsgDelayMessage>): _176.MsgDelayMessage;
        };
        MsgDelayMessageResponse: {
            encode(message: _176.MsgDelayMessageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _176.MsgDelayMessageResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_176.MsgDelayMessageResponse>): _176.MsgDelayMessageResponse;
        };
        QueryNextDelayedMessageIdRequest: {
            encode(_: _175.QueryNextDelayedMessageIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryNextDelayedMessageIdRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_175.QueryNextDelayedMessageIdRequest>): _175.QueryNextDelayedMessageIdRequest;
        };
        QueryNextDelayedMessageIdResponse: {
            encode(message: _175.QueryNextDelayedMessageIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryNextDelayedMessageIdResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_175.QueryNextDelayedMessageIdResponse>): _175.QueryNextDelayedMessageIdResponse;
        };
        QueryMessageRequest: {
            encode(message: _175.QueryMessageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryMessageRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_175.QueryMessageRequest>): _175.QueryMessageRequest;
        };
        QueryMessageResponse: {
            encode(message: _175.QueryMessageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryMessageResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_175.QueryMessageResponse>): _175.QueryMessageResponse;
        };
        QueryBlockMessageIdsRequest: {
            encode(message: _175.QueryBlockMessageIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryBlockMessageIdsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_175.QueryBlockMessageIdsRequest>): _175.QueryBlockMessageIdsRequest;
        };
        QueryBlockMessageIdsResponse: {
            encode(message: _175.QueryBlockMessageIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _175.QueryBlockMessageIdsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_175.QueryBlockMessageIdsResponse>): _175.QueryBlockMessageIdsResponse;
        };
        GenesisState: {
            encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _174.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_174.GenesisState>): _174.GenesisState;
        };
        DelayedMessage: {
            encode(message: _173.DelayedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _173.DelayedMessage;
            fromPartial(object: import("../helpers.js").DeepPartial<_173.DelayedMessage>): _173.DelayedMessage;
        };
        BlockMessageIds: {
            encode(message: _172.BlockMessageIds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _172.BlockMessageIds;
            fromPartial(object: import("../helpers.js").DeepPartial<_172.BlockMessageIds>): _172.BlockMessageIds;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _357.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfo(request: _179.QueryGetEpochInfoRequest): Promise<_179.QueryEpochInfoResponse>;
            epochInfoAll(request?: _179.QueryAllEpochInfoRequest): Promise<_179.QueryEpochInfoAllResponse>;
        };
        LCDQueryClient: typeof _338.LCDQueryClient;
        QueryGetEpochInfoRequest: {
            encode(message: _179.QueryGetEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _179.QueryGetEpochInfoRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_179.QueryGetEpochInfoRequest>): _179.QueryGetEpochInfoRequest;
        };
        QueryEpochInfoResponse: {
            encode(message: _179.QueryEpochInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _179.QueryEpochInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_179.QueryEpochInfoResponse>): _179.QueryEpochInfoResponse;
        };
        QueryAllEpochInfoRequest: {
            encode(message: _179.QueryAllEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _179.QueryAllEpochInfoRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_179.QueryAllEpochInfoRequest>): _179.QueryAllEpochInfoRequest;
        };
        QueryEpochInfoAllResponse: {
            encode(message: _179.QueryEpochInfoAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _179.QueryEpochInfoAllResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_179.QueryEpochInfoAllResponse>): _179.QueryEpochInfoAllResponse;
        };
        GenesisState: {
            encode(message: _178.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _178.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_178.GenesisState>): _178.GenesisState;
        };
        EpochInfo: {
            encode(message: _177.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _177.EpochInfo;
            fromPartial(object: import("../helpers.js").DeepPartial<_177.EpochInfo>): _177.EpochInfo;
        };
    };
    const feetiers: {
        MsgClientImpl: typeof _377.MsgClientImpl;
        QueryClientImpl: typeof _358.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            perpetualFeeParams(request?: _182.QueryPerpetualFeeParamsRequest): Promise<_182.QueryPerpetualFeeParamsResponse>;
            userFeeTier(request: _182.QueryUserFeeTierRequest): Promise<_182.QueryUserFeeTierResponse>;
        };
        LCDQueryClient: typeof _339.LCDQueryClient;
        MsgUpdatePerpetualFeeParams: {
            encode(message: _183.MsgUpdatePerpetualFeeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _183.MsgUpdatePerpetualFeeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_183.MsgUpdatePerpetualFeeParams>): _183.MsgUpdatePerpetualFeeParams;
        };
        MsgUpdatePerpetualFeeParamsResponse: {
            encode(_: _183.MsgUpdatePerpetualFeeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _183.MsgUpdatePerpetualFeeParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_183.MsgUpdatePerpetualFeeParamsResponse>): _183.MsgUpdatePerpetualFeeParamsResponse;
        };
        QueryPerpetualFeeParamsRequest: {
            encode(_: _182.QueryPerpetualFeeParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _182.QueryPerpetualFeeParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_182.QueryPerpetualFeeParamsRequest>): _182.QueryPerpetualFeeParamsRequest;
        };
        QueryPerpetualFeeParamsResponse: {
            encode(message: _182.QueryPerpetualFeeParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _182.QueryPerpetualFeeParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_182.QueryPerpetualFeeParamsResponse>): _182.QueryPerpetualFeeParamsResponse;
        };
        QueryUserFeeTierRequest: {
            encode(message: _182.QueryUserFeeTierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _182.QueryUserFeeTierRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_182.QueryUserFeeTierRequest>): _182.QueryUserFeeTierRequest;
        };
        QueryUserFeeTierResponse: {
            encode(message: _182.QueryUserFeeTierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _182.QueryUserFeeTierResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_182.QueryUserFeeTierResponse>): _182.QueryUserFeeTierResponse;
        };
        PerpetualFeeParams: {
            encode(message: _181.PerpetualFeeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _181.PerpetualFeeParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_181.PerpetualFeeParams>): _181.PerpetualFeeParams;
        };
        PerpetualFeeTier: {
            encode(message: _181.PerpetualFeeTier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _181.PerpetualFeeTier;
            fromPartial(object: import("../helpers.js").DeepPartial<_181.PerpetualFeeTier>): _181.PerpetualFeeTier;
        };
        GenesisState: {
            encode(message: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _180.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_180.GenesisState>): _180.GenesisState;
        };
    };
    const govplus: {
        MsgClientImpl: typeof _378.MsgClientImpl;
        QueryClientImpl: typeof _359.QueryClientImpl;
        MsgSlashValidator: {
            encode(message: _186.MsgSlashValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _186.MsgSlashValidator;
            fromPartial(object: import("../helpers.js").DeepPartial<_186.MsgSlashValidator>): _186.MsgSlashValidator;
        };
        MsgSlashValidatorResponse: {
            encode(_: _186.MsgSlashValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _186.MsgSlashValidatorResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_186.MsgSlashValidatorResponse>): _186.MsgSlashValidatorResponse;
        };
        GenesisState: {
            encode(_: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _184.GenesisState;
            fromPartial(_: import("../helpers.js").DeepPartial<_184.GenesisState>): _184.GenesisState;
        };
    };
    namespace indexer {
        const events: {
            fundingEventV1_TypeFromJSON(object: any): _187.FundingEventV1_Type;
            fundingEventV1_TypeToJSON(object: _187.FundingEventV1_Type): string;
            FundingEventV1_Type: typeof _187.FundingEventV1_Type;
            FundingEventV1_TypeSDKType: typeof _187.FundingEventV1_Type;
            FundingUpdateV1: {
                encode(message: _187.FundingUpdateV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.FundingUpdateV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.FundingUpdateV1>): _187.FundingUpdateV1;
            };
            FundingEventV1: {
                encode(message: _187.FundingEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.FundingEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.FundingEventV1>): _187.FundingEventV1;
            };
            MarketEventV1: {
                encode(message: _187.MarketEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.MarketEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.MarketEventV1>): _187.MarketEventV1;
            };
            MarketPriceUpdateEventV1: {
                encode(message: _187.MarketPriceUpdateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.MarketPriceUpdateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.MarketPriceUpdateEventV1>): _187.MarketPriceUpdateEventV1;
            };
            MarketBaseEventV1: {
                encode(message: _187.MarketBaseEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.MarketBaseEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.MarketBaseEventV1>): _187.MarketBaseEventV1;
            };
            MarketCreateEventV1: {
                encode(message: _187.MarketCreateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.MarketCreateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.MarketCreateEventV1>): _187.MarketCreateEventV1;
            };
            MarketModifyEventV1: {
                encode(message: _187.MarketModifyEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.MarketModifyEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.MarketModifyEventV1>): _187.MarketModifyEventV1;
            };
            SourceOfFunds: {
                encode(message: _187.SourceOfFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.SourceOfFunds;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.SourceOfFunds>): _187.SourceOfFunds;
            };
            TransferEventV1: {
                encode(message: _187.TransferEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.TransferEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.TransferEventV1>): _187.TransferEventV1;
            };
            OrderFillEventV1: {
                encode(message: _187.OrderFillEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.OrderFillEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.OrderFillEventV1>): _187.OrderFillEventV1;
            };
            DeleveragingEventV1: {
                encode(message: _187.DeleveragingEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.DeleveragingEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.DeleveragingEventV1>): _187.DeleveragingEventV1;
            };
            LiquidationOrderV1: {
                encode(message: _187.LiquidationOrderV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.LiquidationOrderV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.LiquidationOrderV1>): _187.LiquidationOrderV1;
            };
            SubaccountUpdateEventV1: {
                encode(message: _187.SubaccountUpdateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.SubaccountUpdateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.SubaccountUpdateEventV1>): _187.SubaccountUpdateEventV1;
            };
            StatefulOrderEventV1: {
                encode(message: _187.StatefulOrderEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1>): _187.StatefulOrderEventV1;
            };
            StatefulOrderEventV1_StatefulOrderPlacementV1: {
                encode(message: _187.StatefulOrderEventV1_StatefulOrderPlacementV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_StatefulOrderPlacementV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_StatefulOrderPlacementV1>): _187.StatefulOrderEventV1_StatefulOrderPlacementV1;
            };
            StatefulOrderEventV1_StatefulOrderRemovalV1: {
                encode(message: _187.StatefulOrderEventV1_StatefulOrderRemovalV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_StatefulOrderRemovalV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_StatefulOrderRemovalV1>): _187.StatefulOrderEventV1_StatefulOrderRemovalV1;
            };
            StatefulOrderEventV1_ConditionalOrderPlacementV1: {
                encode(message: _187.StatefulOrderEventV1_ConditionalOrderPlacementV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_ConditionalOrderPlacementV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_ConditionalOrderPlacementV1>): _187.StatefulOrderEventV1_ConditionalOrderPlacementV1;
            };
            StatefulOrderEventV1_ConditionalOrderTriggeredV1: {
                encode(message: _187.StatefulOrderEventV1_ConditionalOrderTriggeredV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_ConditionalOrderTriggeredV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_ConditionalOrderTriggeredV1>): _187.StatefulOrderEventV1_ConditionalOrderTriggeredV1;
            };
            StatefulOrderEventV1_LongTermOrderPlacementV1: {
                encode(message: _187.StatefulOrderEventV1_LongTermOrderPlacementV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_LongTermOrderPlacementV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_LongTermOrderPlacementV1>): _187.StatefulOrderEventV1_LongTermOrderPlacementV1;
            };
            StatefulOrderEventV1_LongTermOrderReplacementV1: {
                encode(message: _187.StatefulOrderEventV1_LongTermOrderReplacementV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.StatefulOrderEventV1_LongTermOrderReplacementV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.StatefulOrderEventV1_LongTermOrderReplacementV1>): _187.StatefulOrderEventV1_LongTermOrderReplacementV1;
            };
            AssetCreateEventV1: {
                encode(message: _187.AssetCreateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.AssetCreateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.AssetCreateEventV1>): _187.AssetCreateEventV1;
            };
            PerpetualMarketCreateEventV1: {
                encode(message: _187.PerpetualMarketCreateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.PerpetualMarketCreateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.PerpetualMarketCreateEventV1>): _187.PerpetualMarketCreateEventV1;
            };
            PerpetualMarketCreateEventV2: {
                encode(message: _187.PerpetualMarketCreateEventV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.PerpetualMarketCreateEventV2;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.PerpetualMarketCreateEventV2>): _187.PerpetualMarketCreateEventV2;
            };
            LiquidityTierUpsertEventV1: {
                encode(message: _187.LiquidityTierUpsertEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.LiquidityTierUpsertEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.LiquidityTierUpsertEventV1>): _187.LiquidityTierUpsertEventV1;
            };
            UpdateClobPairEventV1: {
                encode(message: _187.UpdateClobPairEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.UpdateClobPairEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.UpdateClobPairEventV1>): _187.UpdateClobPairEventV1;
            };
            UpdatePerpetualEventV1: {
                encode(message: _187.UpdatePerpetualEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.UpdatePerpetualEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.UpdatePerpetualEventV1>): _187.UpdatePerpetualEventV1;
            };
            UpdatePerpetualEventV2: {
                encode(message: _187.UpdatePerpetualEventV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.UpdatePerpetualEventV2;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.UpdatePerpetualEventV2>): _187.UpdatePerpetualEventV2;
            };
            TradingRewardsEventV1: {
                encode(message: _187.TradingRewardsEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.TradingRewardsEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.TradingRewardsEventV1>): _187.TradingRewardsEventV1;
            };
            AddressTradingReward: {
                encode(message: _187.AddressTradingReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.AddressTradingReward;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.AddressTradingReward>): _187.AddressTradingReward;
            };
            OpenInterestUpdateEventV1: {
                encode(message: _187.OpenInterestUpdateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.OpenInterestUpdateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.OpenInterestUpdateEventV1>): _187.OpenInterestUpdateEventV1;
            };
            OpenInterestUpdate: {
                encode(message: _187.OpenInterestUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.OpenInterestUpdate;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.OpenInterestUpdate>): _187.OpenInterestUpdate;
            };
            LiquidityTierUpsertEventV2: {
                encode(message: _187.LiquidityTierUpsertEventV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.LiquidityTierUpsertEventV2;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.LiquidityTierUpsertEventV2>): _187.LiquidityTierUpsertEventV2;
            };
            RegisterAffiliateEventV1: {
                encode(message: _187.RegisterAffiliateEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.RegisterAffiliateEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.RegisterAffiliateEventV1>): _187.RegisterAffiliateEventV1;
            };
            UpsertVaultEventV1: {
                encode(message: _187.UpsertVaultEventV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _187.UpsertVaultEventV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_187.UpsertVaultEventV1>): _187.UpsertVaultEventV1;
            };
        };
        const indexer_manager: {
            indexerTendermintEvent_BlockEventFromJSON(object: any): _188.IndexerTendermintEvent_BlockEvent;
            indexerTendermintEvent_BlockEventToJSON(object: _188.IndexerTendermintEvent_BlockEvent): string;
            IndexerTendermintEvent_BlockEvent: typeof _188.IndexerTendermintEvent_BlockEvent;
            IndexerTendermintEvent_BlockEventSDKType: typeof _188.IndexerTendermintEvent_BlockEvent;
            IndexerTendermintEventWrapper: {
                encode(message: _188.IndexerTendermintEventWrapper, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _188.IndexerTendermintEventWrapper;
                fromPartial(object: import("../helpers.js").DeepPartial<_188.IndexerTendermintEventWrapper>): _188.IndexerTendermintEventWrapper;
            };
            IndexerEventsStoreValue: {
                encode(message: _188.IndexerEventsStoreValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _188.IndexerEventsStoreValue;
                fromPartial(object: import("../helpers.js").DeepPartial<_188.IndexerEventsStoreValue>): _188.IndexerEventsStoreValue;
            };
            IndexerTendermintEvent: {
                encode(message: _188.IndexerTendermintEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _188.IndexerTendermintEvent;
                fromPartial(object: import("../helpers.js").DeepPartial<_188.IndexerTendermintEvent>): _188.IndexerTendermintEvent;
            };
            IndexerTendermintBlock: {
                encode(message: _188.IndexerTendermintBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _188.IndexerTendermintBlock;
                fromPartial(object: import("../helpers.js").DeepPartial<_188.IndexerTendermintBlock>): _188.IndexerTendermintBlock;
            };
        };
        const off_chain_updates: {
            orderPlaceV1_OrderPlacementStatusFromJSON(object: any): _189.OrderPlaceV1_OrderPlacementStatus;
            orderPlaceV1_OrderPlacementStatusToJSON(object: _189.OrderPlaceV1_OrderPlacementStatus): string;
            orderRemoveV1_OrderRemovalStatusFromJSON(object: any): _189.OrderRemoveV1_OrderRemovalStatus;
            orderRemoveV1_OrderRemovalStatusToJSON(object: _189.OrderRemoveV1_OrderRemovalStatus): string;
            OrderPlaceV1_OrderPlacementStatus: typeof _189.OrderPlaceV1_OrderPlacementStatus;
            OrderPlaceV1_OrderPlacementStatusSDKType: typeof _189.OrderPlaceV1_OrderPlacementStatus;
            OrderRemoveV1_OrderRemovalStatus: typeof _189.OrderRemoveV1_OrderRemovalStatus;
            OrderRemoveV1_OrderRemovalStatusSDKType: typeof _189.OrderRemoveV1_OrderRemovalStatus;
            OrderPlaceV1: {
                encode(message: _189.OrderPlaceV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _189.OrderPlaceV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_189.OrderPlaceV1>): _189.OrderPlaceV1;
            };
            OrderRemoveV1: {
                encode(message: _189.OrderRemoveV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _189.OrderRemoveV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_189.OrderRemoveV1>): _189.OrderRemoveV1;
            };
            OrderUpdateV1: {
                encode(message: _189.OrderUpdateV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _189.OrderUpdateV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_189.OrderUpdateV1>): _189.OrderUpdateV1;
            };
            OrderReplaceV1: {
                encode(message: _189.OrderReplaceV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _189.OrderReplaceV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_189.OrderReplaceV1>): _189.OrderReplaceV1;
            };
            OffChainUpdateV1: {
                encode(message: _189.OffChainUpdateV1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _189.OffChainUpdateV1;
                fromPartial(object: import("../helpers.js").DeepPartial<_189.OffChainUpdateV1>): _189.OffChainUpdateV1;
            };
        };
        namespace protocol {
            const v1: {
                vaultStatusFromJSON(object: any): _193.VaultStatus;
                vaultStatusToJSON(object: _193.VaultStatus): string;
                VaultStatus: typeof _193.VaultStatus;
                VaultStatusSDKType: typeof _193.VaultStatus;
                IndexerSubaccountId: {
                    encode(message: _192.IndexerSubaccountId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _192.IndexerSubaccountId;
                    fromPartial(object: import("../helpers.js").DeepPartial<_192.IndexerSubaccountId>): _192.IndexerSubaccountId;
                };
                IndexerPerpetualPosition: {
                    encode(message: _192.IndexerPerpetualPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _192.IndexerPerpetualPosition;
                    fromPartial(object: import("../helpers.js").DeepPartial<_192.IndexerPerpetualPosition>): _192.IndexerPerpetualPosition;
                };
                IndexerAssetPosition: {
                    encode(message: _192.IndexerAssetPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _192.IndexerAssetPosition;
                    fromPartial(object: import("../helpers.js").DeepPartial<_192.IndexerAssetPosition>): _192.IndexerAssetPosition;
                };
                perpetualMarketTypeFromJSON(object: any): _191.PerpetualMarketType;
                perpetualMarketTypeToJSON(object: _191.PerpetualMarketType): string;
                PerpetualMarketType: typeof _191.PerpetualMarketType;
                PerpetualMarketTypeSDKType: typeof _191.PerpetualMarketType;
                indexerOrder_SideFromJSON(object: any): _190.IndexerOrder_Side;
                indexerOrder_SideToJSON(object: _190.IndexerOrder_Side): string;
                indexerOrder_TimeInForceFromJSON(object: any): _190.IndexerOrder_TimeInForce;
                indexerOrder_TimeInForceToJSON(object: _190.IndexerOrder_TimeInForce): string;
                indexerOrder_ConditionTypeFromJSON(object: any): _190.IndexerOrder_ConditionType;
                indexerOrder_ConditionTypeToJSON(object: _190.IndexerOrder_ConditionType): string;
                clobPairStatusFromJSON(object: any): _190.ClobPairStatus;
                clobPairStatusToJSON(object: _190.ClobPairStatus): string;
                IndexerOrder_Side: typeof _190.IndexerOrder_Side;
                IndexerOrder_SideSDKType: typeof _190.IndexerOrder_Side;
                IndexerOrder_TimeInForce: typeof _190.IndexerOrder_TimeInForce;
                IndexerOrder_TimeInForceSDKType: typeof _190.IndexerOrder_TimeInForce;
                IndexerOrder_ConditionType: typeof _190.IndexerOrder_ConditionType;
                IndexerOrder_ConditionTypeSDKType: typeof _190.IndexerOrder_ConditionType;
                ClobPairStatus: typeof _190.ClobPairStatus;
                ClobPairStatusSDKType: typeof _190.ClobPairStatus;
                IndexerOrderId: {
                    encode(message: _190.IndexerOrderId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _190.IndexerOrderId;
                    fromPartial(object: import("../helpers.js").DeepPartial<_190.IndexerOrderId>): _190.IndexerOrderId;
                };
                IndexerOrder: {
                    encode(message: _190.IndexerOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _190.IndexerOrder;
                    fromPartial(object: import("../helpers.js").DeepPartial<_190.IndexerOrder>): _190.IndexerOrder;
                };
            };
        }
        const redis: {
            redisOrder_TickerTypeFromJSON(object: any): _194.RedisOrder_TickerType;
            redisOrder_TickerTypeToJSON(object: _194.RedisOrder_TickerType): string;
            RedisOrder_TickerType: typeof _194.RedisOrder_TickerType;
            RedisOrder_TickerTypeSDKType: typeof _194.RedisOrder_TickerType;
            RedisOrder: {
                encode(message: _194.RedisOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _194.RedisOrder;
                fromPartial(object: import("../helpers.js").DeepPartial<_194.RedisOrder>): _194.RedisOrder;
            };
        };
        const shared: {
            orderRemovalReasonFromJSON(object: any): _195.OrderRemovalReason;
            orderRemovalReasonToJSON(object: _195.OrderRemovalReason): string;
            OrderRemovalReason: typeof _195.OrderRemovalReason;
            OrderRemovalReasonSDKType: typeof _195.OrderRemovalReason;
        };
        const socks: {
            candleMessage_ResolutionFromJSON(object: any): _196.CandleMessage_Resolution;
            candleMessage_ResolutionToJSON(object: _196.CandleMessage_Resolution): string;
            CandleMessage_Resolution: typeof _196.CandleMessage_Resolution;
            CandleMessage_ResolutionSDKType: typeof _196.CandleMessage_Resolution;
            OrderbookMessage: {
                encode(message: _196.OrderbookMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.OrderbookMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.OrderbookMessage>): _196.OrderbookMessage;
            };
            SubaccountMessage: {
                encode(message: _196.SubaccountMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.SubaccountMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.SubaccountMessage>): _196.SubaccountMessage;
            };
            TradeMessage: {
                encode(message: _196.TradeMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.TradeMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.TradeMessage>): _196.TradeMessage;
            };
            MarketMessage: {
                encode(message: _196.MarketMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.MarketMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.MarketMessage>): _196.MarketMessage;
            };
            CandleMessage: {
                encode(message: _196.CandleMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.CandleMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.CandleMessage>): _196.CandleMessage;
            };
            BlockHeightMessage: {
                encode(message: _196.BlockHeightMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _196.BlockHeightMessage;
                fromPartial(object: import("../helpers.js").DeepPartial<_196.BlockHeightMessage>): _196.BlockHeightMessage;
            };
        };
    }
    const listing: {
        MsgClientImpl: typeof _379.MsgClientImpl;
        QueryClientImpl: typeof _360.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            marketsHardCap(request?: _199.QueryMarketsHardCap): Promise<_199.QueryMarketsHardCapResponse>;
            listingVaultDepositParams(request?: _199.QueryListingVaultDepositParams): Promise<_199.QueryListingVaultDepositParamsResponse>;
        };
        LCDQueryClient: typeof _340.LCDQueryClient;
        MsgSetMarketsHardCap: {
            encode(message: _200.MsgSetMarketsHardCap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgSetMarketsHardCap;
            fromPartial(object: import("../helpers.js").DeepPartial<_200.MsgSetMarketsHardCap>): _200.MsgSetMarketsHardCap;
        };
        MsgSetMarketsHardCapResponse: {
            encode(_: _200.MsgSetMarketsHardCapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgSetMarketsHardCapResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_200.MsgSetMarketsHardCapResponse>): _200.MsgSetMarketsHardCapResponse;
        };
        MsgCreateMarketPermissionless: {
            encode(message: _200.MsgCreateMarketPermissionless, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgCreateMarketPermissionless;
            fromPartial(object: import("../helpers.js").DeepPartial<_200.MsgCreateMarketPermissionless>): _200.MsgCreateMarketPermissionless;
        };
        MsgCreateMarketPermissionlessResponse: {
            encode(_: _200.MsgCreateMarketPermissionlessResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgCreateMarketPermissionlessResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_200.MsgCreateMarketPermissionlessResponse>): _200.MsgCreateMarketPermissionlessResponse;
        };
        MsgSetListingVaultDepositParams: {
            encode(message: _200.MsgSetListingVaultDepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgSetListingVaultDepositParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_200.MsgSetListingVaultDepositParams>): _200.MsgSetListingVaultDepositParams;
        };
        MsgSetListingVaultDepositParamsResponse: {
            encode(_: _200.MsgSetListingVaultDepositParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgSetListingVaultDepositParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_200.MsgSetListingVaultDepositParamsResponse>): _200.MsgSetListingVaultDepositParamsResponse;
        };
        MsgUpgradeIsolatedPerpetualToCross: {
            encode(message: _200.MsgUpgradeIsolatedPerpetualToCross, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgUpgradeIsolatedPerpetualToCross;
            fromPartial(object: import("../helpers.js").DeepPartial<_200.MsgUpgradeIsolatedPerpetualToCross>): _200.MsgUpgradeIsolatedPerpetualToCross;
        };
        MsgUpgradeIsolatedPerpetualToCrossResponse: {
            encode(_: _200.MsgUpgradeIsolatedPerpetualToCrossResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _200.MsgUpgradeIsolatedPerpetualToCrossResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_200.MsgUpgradeIsolatedPerpetualToCrossResponse>): _200.MsgUpgradeIsolatedPerpetualToCrossResponse;
        };
        QueryMarketsHardCap: {
            encode(_: _199.QueryMarketsHardCap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _199.QueryMarketsHardCap;
            fromPartial(_: import("../helpers.js").DeepPartial<_199.QueryMarketsHardCap>): _199.QueryMarketsHardCap;
        };
        QueryMarketsHardCapResponse: {
            encode(message: _199.QueryMarketsHardCapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _199.QueryMarketsHardCapResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_199.QueryMarketsHardCapResponse>): _199.QueryMarketsHardCapResponse;
        };
        QueryListingVaultDepositParams: {
            encode(_: _199.QueryListingVaultDepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _199.QueryListingVaultDepositParams;
            fromPartial(_: import("../helpers.js").DeepPartial<_199.QueryListingVaultDepositParams>): _199.QueryListingVaultDepositParams;
        };
        QueryListingVaultDepositParamsResponse: {
            encode(message: _199.QueryListingVaultDepositParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _199.QueryListingVaultDepositParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_199.QueryListingVaultDepositParamsResponse>): _199.QueryListingVaultDepositParamsResponse;
        };
        ListingVaultDepositParams: {
            encode(message: _198.ListingVaultDepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _198.ListingVaultDepositParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_198.ListingVaultDepositParams>): _198.ListingVaultDepositParams;
        };
        GenesisState: {
            encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _197.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_197.GenesisState>): _197.GenesisState;
        };
    };
    const perpetuals: {
        MsgClientImpl: typeof _380.MsgClientImpl;
        QueryClientImpl: typeof _361.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            perpetual(request: _204.QueryPerpetualRequest): Promise<_204.QueryPerpetualResponse>;
            allPerpetuals(request?: _204.QueryAllPerpetualsRequest): Promise<_204.QueryAllPerpetualsResponse>;
            allLiquidityTiers(request?: _204.QueryAllLiquidityTiersRequest): Promise<_204.QueryAllLiquidityTiersResponse>;
            premiumVotes(request?: _204.QueryPremiumVotesRequest): Promise<_204.QueryPremiumVotesResponse>;
            premiumSamples(request?: _204.QueryPremiumSamplesRequest): Promise<_204.QueryPremiumSamplesResponse>;
            params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
            nextPerpetualId(request?: _204.QueryNextPerpetualIdRequest): Promise<_204.QueryNextPerpetualIdResponse>;
        };
        LCDQueryClient: typeof _341.LCDQueryClient;
        MsgCreatePerpetual: {
            encode(message: _205.MsgCreatePerpetual, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgCreatePerpetual;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.MsgCreatePerpetual>): _205.MsgCreatePerpetual;
        };
        MsgCreatePerpetualResponse: {
            encode(_: _205.MsgCreatePerpetualResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgCreatePerpetualResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_205.MsgCreatePerpetualResponse>): _205.MsgCreatePerpetualResponse;
        };
        MsgSetLiquidityTier: {
            encode(message: _205.MsgSetLiquidityTier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgSetLiquidityTier;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.MsgSetLiquidityTier>): _205.MsgSetLiquidityTier;
        };
        MsgSetLiquidityTierResponse: {
            encode(_: _205.MsgSetLiquidityTierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgSetLiquidityTierResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_205.MsgSetLiquidityTierResponse>): _205.MsgSetLiquidityTierResponse;
        };
        MsgUpdatePerpetualParams: {
            encode(message: _205.MsgUpdatePerpetualParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgUpdatePerpetualParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.MsgUpdatePerpetualParams>): _205.MsgUpdatePerpetualParams;
        };
        MsgUpdatePerpetualParamsResponse: {
            encode(_: _205.MsgUpdatePerpetualParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgUpdatePerpetualParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_205.MsgUpdatePerpetualParamsResponse>): _205.MsgUpdatePerpetualParamsResponse;
        };
        FundingPremium: {
            encode(message: _205.FundingPremium, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.FundingPremium;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.FundingPremium>): _205.FundingPremium;
        };
        MsgAddPremiumVotes: {
            encode(message: _205.MsgAddPremiumVotes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgAddPremiumVotes;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.MsgAddPremiumVotes>): _205.MsgAddPremiumVotes;
        };
        MsgAddPremiumVotesResponse: {
            encode(_: _205.MsgAddPremiumVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgAddPremiumVotesResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_205.MsgAddPremiumVotesResponse>): _205.MsgAddPremiumVotesResponse;
        };
        MsgUpdateParams: {
            encode(message: _205.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgUpdateParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_205.MsgUpdateParams>): _205.MsgUpdateParams;
        };
        MsgUpdateParamsResponse: {
            encode(_: _205.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _205.MsgUpdateParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_205.MsgUpdateParamsResponse>): _205.MsgUpdateParamsResponse;
        };
        QueryPerpetualRequest: {
            encode(message: _204.QueryPerpetualRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPerpetualRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryPerpetualRequest>): _204.QueryPerpetualRequest;
        };
        QueryPerpetualResponse: {
            encode(message: _204.QueryPerpetualResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPerpetualResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryPerpetualResponse>): _204.QueryPerpetualResponse;
        };
        QueryAllPerpetualsRequest: {
            encode(message: _204.QueryAllPerpetualsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryAllPerpetualsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryAllPerpetualsRequest>): _204.QueryAllPerpetualsRequest;
        };
        QueryAllPerpetualsResponse: {
            encode(message: _204.QueryAllPerpetualsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryAllPerpetualsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryAllPerpetualsResponse>): _204.QueryAllPerpetualsResponse;
        };
        QueryAllLiquidityTiersRequest: {
            encode(message: _204.QueryAllLiquidityTiersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryAllLiquidityTiersRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryAllLiquidityTiersRequest>): _204.QueryAllLiquidityTiersRequest;
        };
        QueryAllLiquidityTiersResponse: {
            encode(message: _204.QueryAllLiquidityTiersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryAllLiquidityTiersResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryAllLiquidityTiersResponse>): _204.QueryAllLiquidityTiersResponse;
        };
        QueryPremiumVotesRequest: {
            encode(_: _204.QueryPremiumVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPremiumVotesRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_204.QueryPremiumVotesRequest>): _204.QueryPremiumVotesRequest;
        };
        QueryPremiumVotesResponse: {
            encode(message: _204.QueryPremiumVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPremiumVotesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryPremiumVotesResponse>): _204.QueryPremiumVotesResponse;
        };
        QueryPremiumSamplesRequest: {
            encode(_: _204.QueryPremiumSamplesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPremiumSamplesRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_204.QueryPremiumSamplesRequest>): _204.QueryPremiumSamplesRequest;
        };
        QueryPremiumSamplesResponse: {
            encode(message: _204.QueryPremiumSamplesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryPremiumSamplesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryPremiumSamplesResponse>): _204.QueryPremiumSamplesResponse;
        };
        QueryParamsRequest: {
            encode(_: _204.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_204.QueryParamsRequest>): _204.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _204.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryParamsResponse>): _204.QueryParamsResponse;
        };
        QueryNextPerpetualIdRequest: {
            encode(_: _204.QueryNextPerpetualIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryNextPerpetualIdRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_204.QueryNextPerpetualIdRequest>): _204.QueryNextPerpetualIdRequest;
        };
        QueryNextPerpetualIdResponse: {
            encode(message: _204.QueryNextPerpetualIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _204.QueryNextPerpetualIdResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_204.QueryNextPerpetualIdResponse>): _204.QueryNextPerpetualIdResponse;
        };
        perpetualMarketTypeFromJSON(object: any): _203.PerpetualMarketType;
        perpetualMarketTypeToJSON(object: _203.PerpetualMarketType): string;
        PerpetualMarketType: typeof _203.PerpetualMarketType;
        PerpetualMarketTypeSDKType: typeof _203.PerpetualMarketType;
        Perpetual: {
            encode(message: _203.Perpetual, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _203.Perpetual;
            fromPartial(object: import("../helpers.js").DeepPartial<_203.Perpetual>): _203.Perpetual;
        };
        PerpetualParams: {
            encode(message: _203.PerpetualParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _203.PerpetualParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_203.PerpetualParams>): _203.PerpetualParams;
        };
        MarketPremiums: {
            encode(message: _203.MarketPremiums, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _203.MarketPremiums;
            fromPartial(object: import("../helpers.js").DeepPartial<_203.MarketPremiums>): _203.MarketPremiums;
        };
        PremiumStore: {
            encode(message: _203.PremiumStore, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _203.PremiumStore;
            fromPartial(object: import("../helpers.js").DeepPartial<_203.PremiumStore>): _203.PremiumStore;
        };
        LiquidityTier: {
            encode(message: _203.LiquidityTier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _203.LiquidityTier;
            fromPartial(object: import("../helpers.js").DeepPartial<_203.LiquidityTier>): _203.LiquidityTier;
        };
        Params: {
            encode(message: _202.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _202.Params;
            fromPartial(object: import("../helpers.js").DeepPartial<_202.Params>): _202.Params;
        };
        GenesisState: {
            encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _201.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_201.GenesisState>): _201.GenesisState;
        };
    };
    const prices: {
        MsgClientImpl: typeof _381.MsgClientImpl;
        QueryClientImpl: typeof _362.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            marketPrice(request: _209.QueryMarketPriceRequest): Promise<_209.QueryMarketPriceResponse>;
            allMarketPrices(request?: _209.QueryAllMarketPricesRequest): Promise<_209.QueryAllMarketPricesResponse>;
            marketParam(request: _209.QueryMarketParamRequest): Promise<_209.QueryMarketParamResponse>;
            allMarketParams(request?: _209.QueryAllMarketParamsRequest): Promise<_209.QueryAllMarketParamsResponse>;
            nextMarketId(request?: _209.QueryNextMarketIdRequest): Promise<_209.QueryNextMarketIdResponse>;
        };
        LCDQueryClient: typeof _342.LCDQueryClient;
        MsgCreateOracleMarket: {
            encode(message: _211.MsgCreateOracleMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgCreateOracleMarket;
            fromPartial(object: import("../helpers.js").DeepPartial<_211.MsgCreateOracleMarket>): _211.MsgCreateOracleMarket;
        };
        MsgCreateOracleMarketResponse: {
            encode(_: _211.MsgCreateOracleMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgCreateOracleMarketResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_211.MsgCreateOracleMarketResponse>): _211.MsgCreateOracleMarketResponse;
        };
        MsgUpdateMarketPrices: {
            encode(message: _211.MsgUpdateMarketPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgUpdateMarketPrices;
            fromPartial(object: import("../helpers.js").DeepPartial<_211.MsgUpdateMarketPrices>): _211.MsgUpdateMarketPrices;
        };
        MsgUpdateMarketPrices_MarketPrice: {
            encode(message: _211.MsgUpdateMarketPrices_MarketPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgUpdateMarketPrices_MarketPrice;
            fromPartial(object: import("../helpers.js").DeepPartial<_211.MsgUpdateMarketPrices_MarketPrice>): _211.MsgUpdateMarketPrices_MarketPrice;
        };
        MsgUpdateMarketPricesResponse: {
            encode(_: _211.MsgUpdateMarketPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgUpdateMarketPricesResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_211.MsgUpdateMarketPricesResponse>): _211.MsgUpdateMarketPricesResponse;
        };
        MsgUpdateMarketParam: {
            encode(message: _211.MsgUpdateMarketParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgUpdateMarketParam;
            fromPartial(object: import("../helpers.js").DeepPartial<_211.MsgUpdateMarketParam>): _211.MsgUpdateMarketParam;
        };
        MsgUpdateMarketParamResponse: {
            encode(_: _211.MsgUpdateMarketParamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _211.MsgUpdateMarketParamResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_211.MsgUpdateMarketParamResponse>): _211.MsgUpdateMarketParamResponse;
        };
        StreamPriceUpdate: {
            encode(message: _210.StreamPriceUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _210.StreamPriceUpdate;
            fromPartial(object: import("../helpers.js").DeepPartial<_210.StreamPriceUpdate>): _210.StreamPriceUpdate;
        };
        QueryMarketPriceRequest: {
            encode(message: _209.QueryMarketPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryMarketPriceRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryMarketPriceRequest>): _209.QueryMarketPriceRequest;
        };
        QueryMarketPriceResponse: {
            encode(message: _209.QueryMarketPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryMarketPriceResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryMarketPriceResponse>): _209.QueryMarketPriceResponse;
        };
        QueryAllMarketPricesRequest: {
            encode(message: _209.QueryAllMarketPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryAllMarketPricesRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryAllMarketPricesRequest>): _209.QueryAllMarketPricesRequest;
        };
        QueryAllMarketPricesResponse: {
            encode(message: _209.QueryAllMarketPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryAllMarketPricesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryAllMarketPricesResponse>): _209.QueryAllMarketPricesResponse;
        };
        QueryMarketParamRequest: {
            encode(message: _209.QueryMarketParamRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryMarketParamRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryMarketParamRequest>): _209.QueryMarketParamRequest;
        };
        QueryMarketParamResponse: {
            encode(message: _209.QueryMarketParamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryMarketParamResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryMarketParamResponse>): _209.QueryMarketParamResponse;
        };
        QueryAllMarketParamsRequest: {
            encode(message: _209.QueryAllMarketParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryAllMarketParamsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryAllMarketParamsRequest>): _209.QueryAllMarketParamsRequest;
        };
        QueryAllMarketParamsResponse: {
            encode(message: _209.QueryAllMarketParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryAllMarketParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryAllMarketParamsResponse>): _209.QueryAllMarketParamsResponse;
        };
        QueryNextMarketIdRequest: {
            encode(_: _209.QueryNextMarketIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryNextMarketIdRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_209.QueryNextMarketIdRequest>): _209.QueryNextMarketIdRequest;
        };
        QueryNextMarketIdResponse: {
            encode(message: _209.QueryNextMarketIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _209.QueryNextMarketIdResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_209.QueryNextMarketIdResponse>): _209.QueryNextMarketIdResponse;
        };
        MarketPrice: {
            encode(message: _208.MarketPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _208.MarketPrice;
            fromPartial(object: import("../helpers.js").DeepPartial<_208.MarketPrice>): _208.MarketPrice;
        };
        MarketParam: {
            encode(message: _207.MarketParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _207.MarketParam;
            fromPartial(object: import("../helpers.js").DeepPartial<_207.MarketParam>): _207.MarketParam;
        };
        GenesisState: {
            encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _206.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_206.GenesisState>): _206.GenesisState;
        };
    };
    const ratelimit: {
        MsgClientImpl: typeof _382.MsgClientImpl;
        QueryClientImpl: typeof _363.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            listLimitParams(request?: _216.ListLimitParamsRequest): Promise<_216.ListLimitParamsResponse>;
            capacityByDenom(request: _216.QueryCapacityByDenomRequest): Promise<_216.QueryCapacityByDenomResponse>;
            allPendingSendPackets(request?: _216.QueryAllPendingSendPacketsRequest): Promise<_216.QueryAllPendingSendPacketsResponse>;
        };
        LCDQueryClient: typeof _343.LCDQueryClient;
        MsgSetLimitParams: {
            encode(message: _217.MsgSetLimitParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _217.MsgSetLimitParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_217.MsgSetLimitParams>): _217.MsgSetLimitParams;
        };
        MsgSetLimitParamsResponse: {
            encode(_: _217.MsgSetLimitParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _217.MsgSetLimitParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_217.MsgSetLimitParamsResponse>): _217.MsgSetLimitParamsResponse;
        };
        ListLimitParamsRequest: {
            encode(_: _216.ListLimitParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.ListLimitParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_216.ListLimitParamsRequest>): _216.ListLimitParamsRequest;
        };
        ListLimitParamsResponse: {
            encode(message: _216.ListLimitParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.ListLimitParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_216.ListLimitParamsResponse>): _216.ListLimitParamsResponse;
        };
        QueryCapacityByDenomRequest: {
            encode(message: _216.QueryCapacityByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.QueryCapacityByDenomRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_216.QueryCapacityByDenomRequest>): _216.QueryCapacityByDenomRequest;
        };
        QueryCapacityByDenomResponse: {
            encode(message: _216.QueryCapacityByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.QueryCapacityByDenomResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_216.QueryCapacityByDenomResponse>): _216.QueryCapacityByDenomResponse;
        };
        QueryAllPendingSendPacketsRequest: {
            encode(_: _216.QueryAllPendingSendPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.QueryAllPendingSendPacketsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_216.QueryAllPendingSendPacketsRequest>): _216.QueryAllPendingSendPacketsRequest;
        };
        QueryAllPendingSendPacketsResponse: {
            encode(message: _216.QueryAllPendingSendPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _216.QueryAllPendingSendPacketsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_216.QueryAllPendingSendPacketsResponse>): _216.QueryAllPendingSendPacketsResponse;
        };
        PendingSendPacket: {
            encode(message: _215.PendingSendPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _215.PendingSendPacket;
            fromPartial(object: import("../helpers.js").DeepPartial<_215.PendingSendPacket>): _215.PendingSendPacket;
        };
        LimitParams: {
            encode(message: _214.LimitParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _214.LimitParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_214.LimitParams>): _214.LimitParams;
        };
        Limiter: {
            encode(message: _214.Limiter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _214.Limiter;
            fromPartial(object: import("../helpers.js").DeepPartial<_214.Limiter>): _214.Limiter;
        };
        GenesisState: {
            encode(message: _213.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _213.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_213.GenesisState>): _213.GenesisState;
        };
        DenomCapacity: {
            encode(message: _212.DenomCapacity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _212.DenomCapacity;
            fromPartial(object: import("../helpers.js").DeepPartial<_212.DenomCapacity>): _212.DenomCapacity;
        };
        LimiterCapacity: {
            encode(message: _212.LimiterCapacity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _212.LimiterCapacity;
            fromPartial(object: import("../helpers.js").DeepPartial<_212.LimiterCapacity>): _212.LimiterCapacity;
        };
    };
    const revshare: {
        MsgClientImpl: typeof _383.MsgClientImpl;
        QueryClientImpl: typeof _364.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            marketMapperRevenueShareParams(request?: _220.QueryMarketMapperRevenueShareParams): Promise<_220.QueryMarketMapperRevenueShareParamsResponse>;
            marketMapperRevShareDetails(request: _220.QueryMarketMapperRevShareDetails): Promise<_220.QueryMarketMapperRevShareDetailsResponse>;
            unconditionalRevShareConfig(request?: _220.QueryUnconditionalRevShareConfig): Promise<_220.QueryUnconditionalRevShareConfigResponse>;
        };
        LCDQueryClient: typeof _344.LCDQueryClient;
        MsgSetMarketMapperRevenueShare: {
            encode(message: _222.MsgSetMarketMapperRevenueShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgSetMarketMapperRevenueShare;
            fromPartial(object: import("../helpers.js").DeepPartial<_222.MsgSetMarketMapperRevenueShare>): _222.MsgSetMarketMapperRevenueShare;
        };
        MsgSetMarketMapperRevenueShareResponse: {
            encode(_: _222.MsgSetMarketMapperRevenueShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgSetMarketMapperRevenueShareResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_222.MsgSetMarketMapperRevenueShareResponse>): _222.MsgSetMarketMapperRevenueShareResponse;
        };
        MsgSetMarketMapperRevShareDetailsForMarket: {
            encode(message: _222.MsgSetMarketMapperRevShareDetailsForMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgSetMarketMapperRevShareDetailsForMarket;
            fromPartial(object: import("../helpers.js").DeepPartial<_222.MsgSetMarketMapperRevShareDetailsForMarket>): _222.MsgSetMarketMapperRevShareDetailsForMarket;
        };
        MsgSetMarketMapperRevShareDetailsForMarketResponse: {
            encode(_: _222.MsgSetMarketMapperRevShareDetailsForMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgSetMarketMapperRevShareDetailsForMarketResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_222.MsgSetMarketMapperRevShareDetailsForMarketResponse>): _222.MsgSetMarketMapperRevShareDetailsForMarketResponse;
        };
        MsgUpdateUnconditionalRevShareConfig: {
            encode(message: _222.MsgUpdateUnconditionalRevShareConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgUpdateUnconditionalRevShareConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_222.MsgUpdateUnconditionalRevShareConfig>): _222.MsgUpdateUnconditionalRevShareConfig;
        };
        MsgUpdateUnconditionalRevShareConfigResponse: {
            encode(_: _222.MsgUpdateUnconditionalRevShareConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _222.MsgUpdateUnconditionalRevShareConfigResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_222.MsgUpdateUnconditionalRevShareConfigResponse>): _222.MsgUpdateUnconditionalRevShareConfigResponse;
        };
        MarketMapperRevShareDetails: {
            encode(message: _221.MarketMapperRevShareDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _221.MarketMapperRevShareDetails;
            fromPartial(object: import("../helpers.js").DeepPartial<_221.MarketMapperRevShareDetails>): _221.MarketMapperRevShareDetails;
        };
        UnconditionalRevShareConfig: {
            encode(message: _221.UnconditionalRevShareConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _221.UnconditionalRevShareConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_221.UnconditionalRevShareConfig>): _221.UnconditionalRevShareConfig;
        };
        UnconditionalRevShareConfig_RecipientConfig: {
            encode(message: _221.UnconditionalRevShareConfig_RecipientConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _221.UnconditionalRevShareConfig_RecipientConfig;
            fromPartial(object: import("../helpers.js").DeepPartial<_221.UnconditionalRevShareConfig_RecipientConfig>): _221.UnconditionalRevShareConfig_RecipientConfig;
        };
        QueryMarketMapperRevenueShareParams: {
            encode(_: _220.QueryMarketMapperRevenueShareParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryMarketMapperRevenueShareParams;
            fromPartial(_: import("../helpers.js").DeepPartial<_220.QueryMarketMapperRevenueShareParams>): _220.QueryMarketMapperRevenueShareParams;
        };
        QueryMarketMapperRevenueShareParamsResponse: {
            encode(message: _220.QueryMarketMapperRevenueShareParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryMarketMapperRevenueShareParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_220.QueryMarketMapperRevenueShareParamsResponse>): _220.QueryMarketMapperRevenueShareParamsResponse;
        };
        QueryMarketMapperRevShareDetails: {
            encode(message: _220.QueryMarketMapperRevShareDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryMarketMapperRevShareDetails;
            fromPartial(object: import("../helpers.js").DeepPartial<_220.QueryMarketMapperRevShareDetails>): _220.QueryMarketMapperRevShareDetails;
        };
        QueryMarketMapperRevShareDetailsResponse: {
            encode(message: _220.QueryMarketMapperRevShareDetailsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryMarketMapperRevShareDetailsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_220.QueryMarketMapperRevShareDetailsResponse>): _220.QueryMarketMapperRevShareDetailsResponse;
        };
        QueryUnconditionalRevShareConfig: {
            encode(_: _220.QueryUnconditionalRevShareConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryUnconditionalRevShareConfig;
            fromPartial(_: import("../helpers.js").DeepPartial<_220.QueryUnconditionalRevShareConfig>): _220.QueryUnconditionalRevShareConfig;
        };
        QueryUnconditionalRevShareConfigResponse: {
            encode(message: _220.QueryUnconditionalRevShareConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _220.QueryUnconditionalRevShareConfigResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_220.QueryUnconditionalRevShareConfigResponse>): _220.QueryUnconditionalRevShareConfigResponse;
        };
        MarketMapperRevenueShareParams: {
            encode(message: _219.MarketMapperRevenueShareParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _219.MarketMapperRevenueShareParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_219.MarketMapperRevenueShareParams>): _219.MarketMapperRevenueShareParams;
        };
        GenesisState: {
            encode(message: _218.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _218.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_218.GenesisState>): _218.GenesisState;
        };
    };
    const rewards: {
        MsgClientImpl: typeof _384.MsgClientImpl;
        QueryClientImpl: typeof _365.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _345.LCDQueryClient;
        MsgUpdateParams: {
            encode(message: _227.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _227.MsgUpdateParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_227.MsgUpdateParams>): _227.MsgUpdateParams;
        };
        MsgUpdateParamsResponse: {
            encode(_: _227.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _227.MsgUpdateParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_227.MsgUpdateParamsResponse>): _227.MsgUpdateParamsResponse;
        };
        RewardShare: {
            encode(message: _226.RewardShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _226.RewardShare;
            fromPartial(object: import("../helpers.js").DeepPartial<_226.RewardShare>): _226.RewardShare;
        };
        QueryParamsRequest: {
            encode(_: _225.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _225.QueryParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_225.QueryParamsRequest>): _225.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _225.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _225.QueryParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_225.QueryParamsResponse>): _225.QueryParamsResponse;
        };
        Params: {
            encode(message: _224.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _224.Params;
            fromPartial(object: import("../helpers.js").DeepPartial<_224.Params>): _224.Params;
        };
        GenesisState: {
            encode(message: _223.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _223.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_223.GenesisState>): _223.GenesisState;
        };
    };
    const sending: {
        MsgClientImpl: typeof _385.MsgClientImpl;
        QueryClientImpl: typeof _366.QueryClientImpl;
        MsgCreateTransfer: {
            encode(message: _231.MsgCreateTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _231.MsgCreateTransfer;
            fromPartial(object: import("../helpers.js").DeepPartial<_231.MsgCreateTransfer>): _231.MsgCreateTransfer;
        };
        MsgCreateTransferResponse: {
            encode(_: _231.MsgCreateTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _231.MsgCreateTransferResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_231.MsgCreateTransferResponse>): _231.MsgCreateTransferResponse;
        };
        MsgDepositToSubaccountResponse: {
            encode(_: _231.MsgDepositToSubaccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _231.MsgDepositToSubaccountResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_231.MsgDepositToSubaccountResponse>): _231.MsgDepositToSubaccountResponse;
        };
        MsgWithdrawFromSubaccountResponse: {
            encode(_: _231.MsgWithdrawFromSubaccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _231.MsgWithdrawFromSubaccountResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_231.MsgWithdrawFromSubaccountResponse>): _231.MsgWithdrawFromSubaccountResponse;
        };
        MsgSendFromModuleToAccountResponse: {
            encode(_: _231.MsgSendFromModuleToAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _231.MsgSendFromModuleToAccountResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_231.MsgSendFromModuleToAccountResponse>): _231.MsgSendFromModuleToAccountResponse;
        };
        Transfer: {
            encode(message: _230.Transfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _230.Transfer;
            fromPartial(object: import("../helpers.js").DeepPartial<_230.Transfer>): _230.Transfer;
        };
        MsgDepositToSubaccount: {
            encode(message: _230.MsgDepositToSubaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _230.MsgDepositToSubaccount;
            fromPartial(object: import("../helpers.js").DeepPartial<_230.MsgDepositToSubaccount>): _230.MsgDepositToSubaccount;
        };
        MsgWithdrawFromSubaccount: {
            encode(message: _230.MsgWithdrawFromSubaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _230.MsgWithdrawFromSubaccount;
            fromPartial(object: import("../helpers.js").DeepPartial<_230.MsgWithdrawFromSubaccount>): _230.MsgWithdrawFromSubaccount;
        };
        MsgSendFromModuleToAccount: {
            encode(message: _230.MsgSendFromModuleToAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _230.MsgSendFromModuleToAccount;
            fromPartial(object: import("../helpers.js").DeepPartial<_230.MsgSendFromModuleToAccount>): _230.MsgSendFromModuleToAccount;
        };
        GenesisState: {
            encode(_: _228.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _228.GenesisState;
            fromPartial(_: import("../helpers.js").DeepPartial<_228.GenesisState>): _228.GenesisState;
        };
    };
    const stats: {
        MsgClientImpl: typeof _386.MsgClientImpl;
        QueryClientImpl: typeof _367.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
            statsMetadata(request?: _234.QueryStatsMetadataRequest): Promise<_234.QueryStatsMetadataResponse>;
            globalStats(request?: _234.QueryGlobalStatsRequest): Promise<_234.QueryGlobalStatsResponse>;
            userStats(request: _234.QueryUserStatsRequest): Promise<_234.QueryUserStatsResponse>;
        };
        LCDQueryClient: typeof _346.LCDQueryClient;
        MsgUpdateParams: {
            encode(message: _236.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _236.MsgUpdateParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_236.MsgUpdateParams>): _236.MsgUpdateParams;
        };
        MsgUpdateParamsResponse: {
            encode(_: _236.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _236.MsgUpdateParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_236.MsgUpdateParamsResponse>): _236.MsgUpdateParamsResponse;
        };
        BlockStats: {
            encode(message: _235.BlockStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.BlockStats;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.BlockStats>): _235.BlockStats;
        };
        BlockStats_Fill: {
            encode(message: _235.BlockStats_Fill, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.BlockStats_Fill;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.BlockStats_Fill>): _235.BlockStats_Fill;
        };
        StatsMetadata: {
            encode(message: _235.StatsMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.StatsMetadata;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.StatsMetadata>): _235.StatsMetadata;
        };
        EpochStats: {
            encode(message: _235.EpochStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.EpochStats;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.EpochStats>): _235.EpochStats;
        };
        EpochStats_UserWithStats: {
            encode(message: _235.EpochStats_UserWithStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.EpochStats_UserWithStats;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.EpochStats_UserWithStats>): _235.EpochStats_UserWithStats;
        };
        GlobalStats: {
            encode(message: _235.GlobalStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.GlobalStats;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.GlobalStats>): _235.GlobalStats;
        };
        UserStats: {
            encode(message: _235.UserStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.UserStats;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.UserStats>): _235.UserStats;
        };
        CachedStakeAmount: {
            encode(message: _235.CachedStakeAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _235.CachedStakeAmount;
            fromPartial(object: import("../helpers.js").DeepPartial<_235.CachedStakeAmount>): _235.CachedStakeAmount;
        };
        QueryParamsRequest: {
            encode(_: _234.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_234.QueryParamsRequest>): _234.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _234.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_234.QueryParamsResponse>): _234.QueryParamsResponse;
        };
        QueryStatsMetadataRequest: {
            encode(_: _234.QueryStatsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryStatsMetadataRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_234.QueryStatsMetadataRequest>): _234.QueryStatsMetadataRequest;
        };
        QueryStatsMetadataResponse: {
            encode(message: _234.QueryStatsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryStatsMetadataResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_234.QueryStatsMetadataResponse>): _234.QueryStatsMetadataResponse;
        };
        QueryGlobalStatsRequest: {
            encode(_: _234.QueryGlobalStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryGlobalStatsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_234.QueryGlobalStatsRequest>): _234.QueryGlobalStatsRequest;
        };
        QueryGlobalStatsResponse: {
            encode(message: _234.QueryGlobalStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryGlobalStatsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_234.QueryGlobalStatsResponse>): _234.QueryGlobalStatsResponse;
        };
        QueryUserStatsRequest: {
            encode(message: _234.QueryUserStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryUserStatsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_234.QueryUserStatsRequest>): _234.QueryUserStatsRequest;
        };
        QueryUserStatsResponse: {
            encode(message: _234.QueryUserStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _234.QueryUserStatsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_234.QueryUserStatsResponse>): _234.QueryUserStatsResponse;
        };
        Params: {
            encode(message: _233.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _233.Params;
            fromPartial(object: import("../helpers.js").DeepPartial<_233.Params>): _233.Params;
        };
        GenesisState: {
            encode(message: _232.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _232.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_232.GenesisState>): _232.GenesisState;
        };
    };
    const subaccounts: {
        QueryClientImpl: typeof _368.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            subaccount(request: _240.QueryGetSubaccountRequest): Promise<_240.QuerySubaccountResponse>;
            subaccountAll(request?: _240.QueryAllSubaccountRequest): Promise<_240.QuerySubaccountAllResponse>;
            getWithdrawalAndTransfersBlockedInfo(request: _240.QueryGetWithdrawalAndTransfersBlockedInfoRequest): Promise<_240.QueryGetWithdrawalAndTransfersBlockedInfoResponse>;
            collateralPoolAddress(request: _240.QueryCollateralPoolAddressRequest): Promise<_240.QueryCollateralPoolAddressResponse>;
        };
        LCDQueryClient: typeof _347.LCDQueryClient;
        SubaccountId: {
            encode(message: _242.SubaccountId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _242.SubaccountId;
            fromPartial(object: import("../helpers.js").DeepPartial<_242.SubaccountId>): _242.SubaccountId;
        };
        Subaccount: {
            encode(message: _242.Subaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _242.Subaccount;
            fromPartial(object: import("../helpers.js").DeepPartial<_242.Subaccount>): _242.Subaccount;
        };
        StreamSubaccountUpdate: {
            encode(message: _241.StreamSubaccountUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _241.StreamSubaccountUpdate;
            fromPartial(object: import("../helpers.js").DeepPartial<_241.StreamSubaccountUpdate>): _241.StreamSubaccountUpdate;
        };
        SubaccountPerpetualPosition: {
            encode(message: _241.SubaccountPerpetualPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _241.SubaccountPerpetualPosition;
            fromPartial(object: import("../helpers.js").DeepPartial<_241.SubaccountPerpetualPosition>): _241.SubaccountPerpetualPosition;
        };
        SubaccountAssetPosition: {
            encode(message: _241.SubaccountAssetPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _241.SubaccountAssetPosition;
            fromPartial(object: import("../helpers.js").DeepPartial<_241.SubaccountAssetPosition>): _241.SubaccountAssetPosition;
        };
        QueryGetSubaccountRequest: {
            encode(message: _240.QueryGetSubaccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryGetSubaccountRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryGetSubaccountRequest>): _240.QueryGetSubaccountRequest;
        };
        QuerySubaccountResponse: {
            encode(message: _240.QuerySubaccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QuerySubaccountResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QuerySubaccountResponse>): _240.QuerySubaccountResponse;
        };
        QueryAllSubaccountRequest: {
            encode(message: _240.QueryAllSubaccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryAllSubaccountRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryAllSubaccountRequest>): _240.QueryAllSubaccountRequest;
        };
        QuerySubaccountAllResponse: {
            encode(message: _240.QuerySubaccountAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QuerySubaccountAllResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QuerySubaccountAllResponse>): _240.QuerySubaccountAllResponse;
        };
        QueryGetWithdrawalAndTransfersBlockedInfoRequest: {
            encode(message: _240.QueryGetWithdrawalAndTransfersBlockedInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryGetWithdrawalAndTransfersBlockedInfoRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryGetWithdrawalAndTransfersBlockedInfoRequest>): _240.QueryGetWithdrawalAndTransfersBlockedInfoRequest;
        };
        QueryGetWithdrawalAndTransfersBlockedInfoResponse: {
            encode(message: _240.QueryGetWithdrawalAndTransfersBlockedInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryGetWithdrawalAndTransfersBlockedInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryGetWithdrawalAndTransfersBlockedInfoResponse>): _240.QueryGetWithdrawalAndTransfersBlockedInfoResponse;
        };
        QueryCollateralPoolAddressRequest: {
            encode(message: _240.QueryCollateralPoolAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryCollateralPoolAddressRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryCollateralPoolAddressRequest>): _240.QueryCollateralPoolAddressRequest;
        };
        QueryCollateralPoolAddressResponse: {
            encode(message: _240.QueryCollateralPoolAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _240.QueryCollateralPoolAddressResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_240.QueryCollateralPoolAddressResponse>): _240.QueryCollateralPoolAddressResponse;
        };
        PerpetualPosition: {
            encode(message: _239.PerpetualPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _239.PerpetualPosition;
            fromPartial(object: import("../helpers.js").DeepPartial<_239.PerpetualPosition>): _239.PerpetualPosition;
        };
        GenesisState: {
            encode(message: _238.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _238.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_238.GenesisState>): _238.GenesisState;
        };
        AssetPosition: {
            encode(message: _237.AssetPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _237.AssetPosition;
            fromPartial(object: import("../helpers.js").DeepPartial<_237.AssetPosition>): _237.AssetPosition;
        };
    };
    const vault: {
        MsgClientImpl: typeof _387.MsgClientImpl;
        QueryClientImpl: typeof _369.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
            vault(request: _245.QueryVaultRequest): Promise<_245.QueryVaultResponse>;
            allVaults(request?: _245.QueryAllVaultsRequest): Promise<_245.QueryAllVaultsResponse>;
            megavaultTotalShares(request?: _245.QueryMegavaultTotalSharesRequest): Promise<_245.QueryMegavaultTotalSharesResponse>;
            megavaultOwnerShares(request: _245.QueryMegavaultOwnerSharesRequest): Promise<_245.QueryMegavaultOwnerSharesResponse>;
            megavaultAllOwnerShares(request?: _245.QueryMegavaultAllOwnerSharesRequest): Promise<_245.QueryMegavaultAllOwnerSharesResponse>;
            vaultParams(request: _245.QueryVaultParamsRequest): Promise<_245.QueryVaultParamsResponse>;
            megavaultWithdrawalInfo(request: _245.QueryMegavaultWithdrawalInfoRequest): Promise<_245.QueryMegavaultWithdrawalInfoResponse>;
        };
        LCDQueryClient: typeof _348.LCDQueryClient;
        vaultTypeFromJSON(object: any): _248.VaultType;
        vaultTypeToJSON(object: _248.VaultType): string;
        vaultStatusFromJSON(object: any): _248.VaultStatus;
        vaultStatusToJSON(object: _248.VaultStatus): string;
        VaultType: typeof _248.VaultType;
        VaultTypeSDKType: typeof _248.VaultType;
        VaultStatus: typeof _248.VaultStatus;
        VaultStatusSDKType: typeof _248.VaultStatus;
        VaultId: {
            encode(message: _248.VaultId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _248.VaultId;
            fromPartial(object: import("../helpers.js").DeepPartial<_248.VaultId>): _248.VaultId;
        };
        MsgDepositToMegavault: {
            encode(message: _247.MsgDepositToMegavault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgDepositToMegavault;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgDepositToMegavault>): _247.MsgDepositToMegavault;
        };
        MsgDepositToMegavaultResponse: {
            encode(message: _247.MsgDepositToMegavaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgDepositToMegavaultResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgDepositToMegavaultResponse>): _247.MsgDepositToMegavaultResponse;
        };
        MsgWithdrawFromMegavault: {
            encode(message: _247.MsgWithdrawFromMegavault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgWithdrawFromMegavault;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgWithdrawFromMegavault>): _247.MsgWithdrawFromMegavault;
        };
        MsgWithdrawFromMegavaultResponse: {
            encode(message: _247.MsgWithdrawFromMegavaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgWithdrawFromMegavaultResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgWithdrawFromMegavaultResponse>): _247.MsgWithdrawFromMegavaultResponse;
        };
        MsgUpdateDefaultQuotingParams: {
            encode(message: _247.MsgUpdateDefaultQuotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUpdateDefaultQuotingParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgUpdateDefaultQuotingParams>): _247.MsgUpdateDefaultQuotingParams;
        };
        MsgUpdateDefaultQuotingParamsResponse: {
            encode(_: _247.MsgUpdateDefaultQuotingParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUpdateDefaultQuotingParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_247.MsgUpdateDefaultQuotingParamsResponse>): _247.MsgUpdateDefaultQuotingParamsResponse;
        };
        MsgSetVaultParams: {
            encode(message: _247.MsgSetVaultParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgSetVaultParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgSetVaultParams>): _247.MsgSetVaultParams;
        };
        MsgSetVaultParamsResponse: {
            encode(_: _247.MsgSetVaultParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgSetVaultParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_247.MsgSetVaultParamsResponse>): _247.MsgSetVaultParamsResponse;
        };
        MsgUnlockShares: {
            encode(message: _247.MsgUnlockShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUnlockShares;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgUnlockShares>): _247.MsgUnlockShares;
        };
        MsgUnlockSharesResponse: {
            encode(message: _247.MsgUnlockSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUnlockSharesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgUnlockSharesResponse>): _247.MsgUnlockSharesResponse;
        };
        MsgUpdateOperatorParams: {
            encode(message: _247.MsgUpdateOperatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUpdateOperatorParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgUpdateOperatorParams>): _247.MsgUpdateOperatorParams;
        };
        MsgUpdateOperatorParamsResponse: {
            encode(_: _247.MsgUpdateOperatorParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUpdateOperatorParamsResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_247.MsgUpdateOperatorParamsResponse>): _247.MsgUpdateOperatorParamsResponse;
        };
        MsgAllocateToVault: {
            encode(message: _247.MsgAllocateToVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgAllocateToVault;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgAllocateToVault>): _247.MsgAllocateToVault;
        };
        MsgAllocateToVaultResponse: {
            encode(_: _247.MsgAllocateToVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgAllocateToVaultResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_247.MsgAllocateToVaultResponse>): _247.MsgAllocateToVaultResponse;
        };
        MsgRetrieveFromVault: {
            encode(message: _247.MsgRetrieveFromVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgRetrieveFromVault;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgRetrieveFromVault>): _247.MsgRetrieveFromVault;
        };
        MsgRetrieveFromVaultResponse: {
            encode(_: _247.MsgRetrieveFromVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgRetrieveFromVaultResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_247.MsgRetrieveFromVaultResponse>): _247.MsgRetrieveFromVaultResponse;
        };
        MsgUpdateParams: {
            encode(message: _247.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgUpdateParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgUpdateParams>): _247.MsgUpdateParams;
        };
        MsgSetVaultQuotingParams: {
            encode(message: _247.MsgSetVaultQuotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.MsgSetVaultQuotingParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_247.MsgSetVaultQuotingParams>): _247.MsgSetVaultQuotingParams;
        };
        NumShares: {
            encode(message: _246.NumShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _246.NumShares;
            fromPartial(object: import("../helpers.js").DeepPartial<_246.NumShares>): _246.NumShares;
        };
        OwnerShare: {
            encode(message: _246.OwnerShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _246.OwnerShare;
            fromPartial(object: import("../helpers.js").DeepPartial<_246.OwnerShare>): _246.OwnerShare;
        };
        OwnerShareUnlocks: {
            encode(message: _246.OwnerShareUnlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _246.OwnerShareUnlocks;
            fromPartial(object: import("../helpers.js").DeepPartial<_246.OwnerShareUnlocks>): _246.OwnerShareUnlocks;
        };
        ShareUnlock: {
            encode(message: _246.ShareUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _246.ShareUnlock;
            fromPartial(object: import("../helpers.js").DeepPartial<_246.ShareUnlock>): _246.ShareUnlock;
        };
        QueryParamsRequest: {
            encode(_: _245.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryParamsRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_245.QueryParamsRequest>): _245.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _245.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryParamsResponse>): _245.QueryParamsResponse;
        };
        QueryVaultRequest: {
            encode(message: _245.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryVaultRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryVaultRequest>): _245.QueryVaultRequest;
        };
        QueryVaultResponse: {
            encode(message: _245.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryVaultResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryVaultResponse>): _245.QueryVaultResponse;
        };
        QueryAllVaultsRequest: {
            encode(message: _245.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryAllVaultsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryAllVaultsRequest>): _245.QueryAllVaultsRequest;
        };
        QueryAllVaultsResponse: {
            encode(message: _245.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryAllVaultsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryAllVaultsResponse>): _245.QueryAllVaultsResponse;
        };
        QueryMegavaultTotalSharesRequest: {
            encode(_: _245.QueryMegavaultTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultTotalSharesRequest;
            fromPartial(_: import("../helpers.js").DeepPartial<_245.QueryMegavaultTotalSharesRequest>): _245.QueryMegavaultTotalSharesRequest;
        };
        QueryMegavaultTotalSharesResponse: {
            encode(message: _245.QueryMegavaultTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultTotalSharesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultTotalSharesResponse>): _245.QueryMegavaultTotalSharesResponse;
        };
        QueryMegavaultOwnerSharesRequest: {
            encode(message: _245.QueryMegavaultOwnerSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultOwnerSharesRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultOwnerSharesRequest>): _245.QueryMegavaultOwnerSharesRequest;
        };
        QueryMegavaultOwnerSharesResponse: {
            encode(message: _245.QueryMegavaultOwnerSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultOwnerSharesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultOwnerSharesResponse>): _245.QueryMegavaultOwnerSharesResponse;
        };
        QueryMegavaultAllOwnerSharesRequest: {
            encode(message: _245.QueryMegavaultAllOwnerSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultAllOwnerSharesRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultAllOwnerSharesRequest>): _245.QueryMegavaultAllOwnerSharesRequest;
        };
        QueryMegavaultAllOwnerSharesResponse: {
            encode(message: _245.QueryMegavaultAllOwnerSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultAllOwnerSharesResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultAllOwnerSharesResponse>): _245.QueryMegavaultAllOwnerSharesResponse;
        };
        QueryVaultParamsRequest: {
            encode(message: _245.QueryVaultParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryVaultParamsRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryVaultParamsRequest>): _245.QueryVaultParamsRequest;
        };
        QueryVaultParamsResponse: {
            encode(message: _245.QueryVaultParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryVaultParamsResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryVaultParamsResponse>): _245.QueryVaultParamsResponse;
        };
        QueryMegavaultWithdrawalInfoRequest: {
            encode(message: _245.QueryMegavaultWithdrawalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultWithdrawalInfoRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultWithdrawalInfoRequest>): _245.QueryMegavaultWithdrawalInfoRequest;
        };
        QueryMegavaultWithdrawalInfoResponse: {
            encode(message: _245.QueryMegavaultWithdrawalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _245.QueryMegavaultWithdrawalInfoResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_245.QueryMegavaultWithdrawalInfoResponse>): _245.QueryMegavaultWithdrawalInfoResponse;
        };
        QuotingParams: {
            encode(message: _244.QuotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _244.QuotingParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_244.QuotingParams>): _244.QuotingParams;
        };
        VaultParams: {
            encode(message: _244.VaultParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _244.VaultParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_244.VaultParams>): _244.VaultParams;
        };
        OperatorParams: {
            encode(message: _244.OperatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _244.OperatorParams;
            fromPartial(object: import("../helpers.js").DeepPartial<_244.OperatorParams>): _244.OperatorParams;
        };
        OperatorMetadata: {
            encode(message: _244.OperatorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _244.OperatorMetadata;
            fromPartial(object: import("../helpers.js").DeepPartial<_244.OperatorMetadata>): _244.OperatorMetadata;
        };
        Params: {
            encode(message: _244.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _244.Params;
            fromPartial(object: import("../helpers.js").DeepPartial<_244.Params>): _244.Params;
        };
        GenesisState: {
            encode(message: _243.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _243.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_243.GenesisState>): _243.GenesisState;
        };
        Vault: {
            encode(message: _243.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _243.Vault;
            fromPartial(object: import("../helpers.js").DeepPartial<_243.Vault>): _243.Vault;
        };
        GenesisStateV6: {
            encode(message: _243.GenesisStateV6, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _243.GenesisStateV6;
            fromPartial(object: import("../helpers.js").DeepPartial<_243.GenesisStateV6>): _243.GenesisStateV6;
        };
        VaultV6: {
            encode(message: _243.VaultV6, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _243.VaultV6;
            fromPartial(object: import("../helpers.js").DeepPartial<_243.VaultV6>): _243.VaultV6;
        };
    };
    const vest: {
        MsgClientImpl: typeof _388.MsgClientImpl;
        QueryClientImpl: typeof _370.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            vestEntry(request: _250.QueryVestEntryRequest): Promise<_250.QueryVestEntryResponse>;
        };
        LCDQueryClient: typeof _349.LCDQueryClient;
        VestEntry: {
            encode(message: _252.VestEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _252.VestEntry;
            fromPartial(object: import("../helpers.js").DeepPartial<_252.VestEntry>): _252.VestEntry;
        };
        MsgDeleteVestEntry: {
            encode(message: _251.MsgDeleteVestEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.MsgDeleteVestEntry;
            fromPartial(object: import("../helpers.js").DeepPartial<_251.MsgDeleteVestEntry>): _251.MsgDeleteVestEntry;
        };
        MsgDeleteVestEntryResponse: {
            encode(_: _251.MsgDeleteVestEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.MsgDeleteVestEntryResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_251.MsgDeleteVestEntryResponse>): _251.MsgDeleteVestEntryResponse;
        };
        MsgSetVestEntry: {
            encode(message: _251.MsgSetVestEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.MsgSetVestEntry;
            fromPartial(object: import("../helpers.js").DeepPartial<_251.MsgSetVestEntry>): _251.MsgSetVestEntry;
        };
        MsgSetVestEntryResponse: {
            encode(_: _251.MsgSetVestEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.MsgSetVestEntryResponse;
            fromPartial(_: import("../helpers.js").DeepPartial<_251.MsgSetVestEntryResponse>): _251.MsgSetVestEntryResponse;
        };
        QueryVestEntryRequest: {
            encode(message: _250.QueryVestEntryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _250.QueryVestEntryRequest;
            fromPartial(object: import("../helpers.js").DeepPartial<_250.QueryVestEntryRequest>): _250.QueryVestEntryRequest;
        };
        QueryVestEntryResponse: {
            encode(message: _250.QueryVestEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _250.QueryVestEntryResponse;
            fromPartial(object: import("../helpers.js").DeepPartial<_250.QueryVestEntryResponse>): _250.QueryVestEntryResponse;
        };
        GenesisState: {
            encode(message: _249.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.GenesisState;
            fromPartial(object: import("../helpers.js").DeepPartial<_249.GenesisState>): _249.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers.js").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg.js").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg.js").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg.js").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg.js").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg.js").MsgClientImpl;
                };
            };
            dydxprotocol: {
                accountplus: _371.MsgClientImpl;
                affiliates: _372.MsgClientImpl;
                blocktime: _373.MsgClientImpl;
                bridge: _374.MsgClientImpl;
                clob: _375.MsgClientImpl;
                delaymsg: _376.MsgClientImpl;
                feetiers: _377.MsgClientImpl;
                govplus: _378.MsgClientImpl;
                listing: _379.MsgClientImpl;
                perpetuals: _380.MsgClientImpl;
                prices: _381.MsgClientImpl;
                ratelimit: _382.MsgClientImpl;
                revshare: _383.MsgClientImpl;
                rewards: _384.MsgClientImpl;
                sending: _385.MsgClientImpl;
                stats: _386.MsgClientImpl;
                vault: _387.MsgClientImpl;
                vest: _388.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint, }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query.js").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query.js").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query.js").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query.js").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query.js").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query.js").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query.js").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query.js").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query.js").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query.js").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query.js").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query.js").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query.js").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query.js").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query.js").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query.js").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query.js").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query.js").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query.js").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query.js").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query.js").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query.js").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query.js").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query.js").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query.js").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query.js").StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query.js").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query.js").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query.js").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query.js").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query.js").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query.js").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query.js").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query.js").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query.js").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query.js").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query.js").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query.js").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query.js").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query.js").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query.js").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query.js").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query.js").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query.js").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query.js").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query.js").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: import("../cosmos/gov/v1/query.js").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query.js").QueryConstitutionResponse>;
                        proposal(request: import("../cosmos/gov/v1/query.js").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query.js").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query.js").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query.js").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query.js").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query.js").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query.js").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query.js").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query.js").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query.js").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query.js").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query.js").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query.js").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query.js").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query.js").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query.js").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query.js").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query.js").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query.js").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query.js").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query.js").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query.js").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query.js").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query.js").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query.js").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query.js").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query.js").QueryProposalRequest): Promise<import("../cosmos/group/v1/query.js").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query.js").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query.js").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query.js").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query.js").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query.js").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query.js").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query.js").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query.js").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query.js").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query.js").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query.js").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query.js").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query.js").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query.js").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query.js").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query.js").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query.js").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query.js").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query.js").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query.js").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query.js").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query.js").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query.js").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query.js").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query.js").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query.js").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query.js").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query.js").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query.js").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query.js").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query.js").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query.js").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query.js").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query.js").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query.js").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query.js").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query.js").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query.js").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service.js").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service.js").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service.js").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service.js").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service.js").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service.js").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service.js").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service.js").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service.js").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service.js").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service.js").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service.js").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service.js").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query.js").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query.js").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query.js").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query.js").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query.js").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query.js").QueryAuthorityResponse>;
                    };
                };
            };
            dydxprotocol: {
                accountplus: {
                    params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    getAuthenticator(request: _132.GetAuthenticatorRequest): Promise<_132.GetAuthenticatorResponse>;
                    getAuthenticators(request: _132.GetAuthenticatorsRequest): Promise<_132.GetAuthenticatorsResponse>;
                };
                affiliates: {
                    affiliateInfo(request: _136.AffiliateInfoRequest): Promise<_136.AffiliateInfoResponse>;
                    referredBy(request: _136.ReferredByRequest): Promise<_136.ReferredByResponse>;
                    allAffiliateTiers(request?: _136.AllAffiliateTiersRequest): Promise<_136.AllAffiliateTiersResponse>;
                    affiliateWhitelist(request?: _136.AffiliateWhitelistRequest): Promise<_136.AffiliateWhitelistResponse>;
                };
                assets: {
                    asset(request: _140.QueryAssetRequest): Promise<_140.QueryAssetResponse>;
                    allAssets(request?: _140.QueryAllAssetsRequest): Promise<_140.QueryAllAssetsResponse>;
                };
                blocktime: {
                    downtimeParams(request?: _145.QueryDowntimeParamsRequest): Promise<_145.QueryDowntimeParamsResponse>;
                    previousBlockInfo(request?: _145.QueryPreviousBlockInfoRequest): Promise<_145.QueryPreviousBlockInfoResponse>;
                    allDowntimeInfo(request?: _145.QueryAllDowntimeInfoRequest): Promise<_145.QueryAllDowntimeInfoResponse>;
                };
                bridge: {
                    eventParams(request?: _151.QueryEventParamsRequest): Promise<_151.QueryEventParamsResponse>;
                    proposeParams(request?: _151.QueryProposeParamsRequest): Promise<_151.QueryProposeParamsResponse>;
                    safetyParams(request?: _151.QuerySafetyParamsRequest): Promise<_151.QuerySafetyParamsResponse>;
                    acknowledgedEventInfo(request?: _151.QueryAcknowledgedEventInfoRequest): Promise<_151.QueryAcknowledgedEventInfoResponse>;
                    recognizedEventInfo(request?: _151.QueryRecognizedEventInfoRequest): Promise<_151.QueryRecognizedEventInfoResponse>;
                    delayedCompleteBridgeMessages(request: _151.QueryDelayedCompleteBridgeMessagesRequest): Promise<_151.QueryDelayedCompleteBridgeMessagesResponse>;
                };
                clob: {
                    clobPair(request: _166.QueryGetClobPairRequest): Promise<_166.QueryClobPairResponse>;
                    clobPairAll(request?: _166.QueryAllClobPairRequest): Promise<_166.QueryClobPairAllResponse>;
                    mevNodeToNodeCalculation(request: _166.MevNodeToNodeCalculationRequest): Promise<_166.MevNodeToNodeCalculationResponse>;
                    equityTierLimitConfiguration(request?: _166.QueryEquityTierLimitConfigurationRequest): Promise<_166.QueryEquityTierLimitConfigurationResponse>;
                    blockRateLimitConfiguration(request?: _166.QueryBlockRateLimitConfigurationRequest): Promise<_166.QueryBlockRateLimitConfigurationResponse>;
                    liquidationsConfiguration(request?: _166.QueryLiquidationsConfigurationRequest): Promise<_166.QueryLiquidationsConfigurationResponse>;
                    statefulOrder(request: _166.QueryStatefulOrderRequest): Promise<_166.QueryStatefulOrderResponse>;
                    nextClobPairId(request?: _166.QueryNextClobPairIdRequest): Promise<_166.QueryNextClobPairIdResponse>;
                    streamOrderbookUpdates(request: _166.StreamOrderbookUpdatesRequest): Promise<_166.StreamOrderbookUpdatesResponse>;
                };
                delaymsg: {
                    nextDelayedMessageId(request?: _175.QueryNextDelayedMessageIdRequest): Promise<_175.QueryNextDelayedMessageIdResponse>;
                    message(request: _175.QueryMessageRequest): Promise<_175.QueryMessageResponse>;
                    blockMessageIds(request: _175.QueryBlockMessageIdsRequest): Promise<_175.QueryBlockMessageIdsResponse>;
                };
                epochs: {
                    epochInfo(request: _179.QueryGetEpochInfoRequest): Promise<_179.QueryEpochInfoResponse>;
                    epochInfoAll(request?: _179.QueryAllEpochInfoRequest): Promise<_179.QueryEpochInfoAllResponse>;
                };
                feetiers: {
                    perpetualFeeParams(request?: _182.QueryPerpetualFeeParamsRequest): Promise<_182.QueryPerpetualFeeParamsResponse>;
                    userFeeTier(request: _182.QueryUserFeeTierRequest): Promise<_182.QueryUserFeeTierResponse>;
                };
                listing: {
                    marketsHardCap(request?: _199.QueryMarketsHardCap): Promise<_199.QueryMarketsHardCapResponse>;
                    listingVaultDepositParams(request?: _199.QueryListingVaultDepositParams): Promise<_199.QueryListingVaultDepositParamsResponse>;
                };
                perpetuals: {
                    perpetual(request: _204.QueryPerpetualRequest): Promise<_204.QueryPerpetualResponse>;
                    allPerpetuals(request?: _204.QueryAllPerpetualsRequest): Promise<_204.QueryAllPerpetualsResponse>;
                    allLiquidityTiers(request?: _204.QueryAllLiquidityTiersRequest): Promise<_204.QueryAllLiquidityTiersResponse>;
                    premiumVotes(request?: _204.QueryPremiumVotesRequest): Promise<_204.QueryPremiumVotesResponse>;
                    premiumSamples(request?: _204.QueryPremiumSamplesRequest): Promise<_204.QueryPremiumSamplesResponse>;
                    params(request?: _204.QueryParamsRequest): Promise<_204.QueryParamsResponse>;
                    nextPerpetualId(request?: _204.QueryNextPerpetualIdRequest): Promise<_204.QueryNextPerpetualIdResponse>;
                };
                prices: {
                    marketPrice(request: _209.QueryMarketPriceRequest): Promise<_209.QueryMarketPriceResponse>;
                    allMarketPrices(request?: _209.QueryAllMarketPricesRequest): Promise<_209.QueryAllMarketPricesResponse>;
                    marketParam(request: _209.QueryMarketParamRequest): Promise<_209.QueryMarketParamResponse>;
                    allMarketParams(request?: _209.QueryAllMarketParamsRequest): Promise<_209.QueryAllMarketParamsResponse>;
                    nextMarketId(request?: _209.QueryNextMarketIdRequest): Promise<_209.QueryNextMarketIdResponse>;
                };
                ratelimit: {
                    listLimitParams(request?: _216.ListLimitParamsRequest): Promise<_216.ListLimitParamsResponse>;
                    capacityByDenom(request: _216.QueryCapacityByDenomRequest): Promise<_216.QueryCapacityByDenomResponse>;
                    allPendingSendPackets(request?: _216.QueryAllPendingSendPacketsRequest): Promise<_216.QueryAllPendingSendPacketsResponse>;
                };
                revshare: {
                    marketMapperRevenueShareParams(request?: _220.QueryMarketMapperRevenueShareParams): Promise<_220.QueryMarketMapperRevenueShareParamsResponse>;
                    marketMapperRevShareDetails(request: _220.QueryMarketMapperRevShareDetails): Promise<_220.QueryMarketMapperRevShareDetailsResponse>;
                    unconditionalRevShareConfig(request?: _220.QueryUnconditionalRevShareConfig): Promise<_220.QueryUnconditionalRevShareConfigResponse>;
                };
                rewards: {
                    params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
                };
                stats: {
                    params(request?: _234.QueryParamsRequest): Promise<_234.QueryParamsResponse>;
                    statsMetadata(request?: _234.QueryStatsMetadataRequest): Promise<_234.QueryStatsMetadataResponse>;
                    globalStats(request?: _234.QueryGlobalStatsRequest): Promise<_234.QueryGlobalStatsResponse>;
                    userStats(request: _234.QueryUserStatsRequest): Promise<_234.QueryUserStatsResponse>;
                };
                subaccounts: {
                    subaccount(request: _240.QueryGetSubaccountRequest): Promise<_240.QuerySubaccountResponse>;
                    subaccountAll(request?: _240.QueryAllSubaccountRequest): Promise<_240.QuerySubaccountAllResponse>;
                    getWithdrawalAndTransfersBlockedInfo(request: _240.QueryGetWithdrawalAndTransfersBlockedInfoRequest): Promise<_240.QueryGetWithdrawalAndTransfersBlockedInfoResponse>;
                    collateralPoolAddress(request: _240.QueryCollateralPoolAddressRequest): Promise<_240.QueryCollateralPoolAddressResponse>;
                };
                vault: {
                    params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                    vault(request: _245.QueryVaultRequest): Promise<_245.QueryVaultResponse>;
                    allVaults(request?: _245.QueryAllVaultsRequest): Promise<_245.QueryAllVaultsResponse>;
                    megavaultTotalShares(request?: _245.QueryMegavaultTotalSharesRequest): Promise<_245.QueryMegavaultTotalSharesResponse>;
                    megavaultOwnerShares(request: _245.QueryMegavaultOwnerSharesRequest): Promise<_245.QueryMegavaultOwnerSharesResponse>;
                    megavaultAllOwnerShares(request?: _245.QueryMegavaultAllOwnerSharesRequest): Promise<_245.QueryMegavaultAllOwnerSharesResponse>;
                    vaultParams(request: _245.QueryVaultParamsRequest): Promise<_245.QueryVaultParamsResponse>;
                    megavaultWithdrawalInfo(request: _245.QueryMegavaultWithdrawalInfoRequest): Promise<_245.QueryMegavaultWithdrawalInfoResponse>;
                };
                vest: {
                    vestEntry(request: _250.QueryVestEntryRequest): Promise<_250.QueryVestEntryResponse>;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint, }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd.js").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd.js").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd.js").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd.js").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd.js").LCDQueryClient;
                    };
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/query.lcd.js").LCDQueryClient;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd.js").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd.js").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd.js").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd.js").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd.js").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd.js").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd.js").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd.js").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd.js").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd.js").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd.js").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd.js").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd.js").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd.js").LCDQueryClient;
                };
            };
            dydxprotocol: {
                accountplus: _331.LCDQueryClient;
                affiliates: _332.LCDQueryClient;
                assets: _333.LCDQueryClient;
                blocktime: _334.LCDQueryClient;
                bridge: _335.LCDQueryClient;
                clob: _336.LCDQueryClient;
                delaymsg: _337.LCDQueryClient;
                epochs: _338.LCDQueryClient;
                feetiers: _339.LCDQueryClient;
                listing: _340.LCDQueryClient;
                perpetuals: _341.LCDQueryClient;
                prices: _342.LCDQueryClient;
                ratelimit: _343.LCDQueryClient;
                revshare: _344.LCDQueryClient;
                rewards: _345.LCDQueryClient;
                stats: _346.LCDQueryClient;
                subaccounts: _347.LCDQueryClient;
                vault: _348.LCDQueryClient;
                vest: _349.LCDQueryClient;
            };
        }>;
    };
}
