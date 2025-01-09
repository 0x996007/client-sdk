/* eslint-disable @typescript-eslint/no-namespace */
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
import * as _141 from './assets/tx.js';
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
import * as _185 from './govplus/query.js';
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
import * as _229 from './sending/query.js';
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
import * as _392 from './lcd.js';
import * as _393 from './rpc.query.js';
import * as _394 from './rpc.tx.js';
export namespace protocol {
  export const accountplus = {
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._331,
    ..._350,
    ..._371,
  };
  export const affiliates = {
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._332,
    ..._351,
    ..._372,
  };
  export const assets = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._333,
    ..._352,
  };
  export const blocktime = {
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._334,
    ..._353,
    ..._373,
  };
  export const bridge = {
    ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._335,
    ..._354,
    ..._374,
  };
  export const clob = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._336,
    ..._355,
    ..._375,
  };
  export namespace daemons {
    export const bridge = { ..._169 };
    export const liquidation = { ..._170 };
    export const pricefeed = { ..._171 };
  }
  export const delaymsg = {
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._337,
    ..._356,
    ..._376,
  };
  export const epochs = { ..._177, ..._178, ..._179, ..._338, ..._357 };
  export const feetiers = {
    ..._180,
    ..._181,
    ..._182,
    ..._183,
    ..._339,
    ..._358,
    ..._377,
  };
  export const govplus = { ..._184, ..._185, ..._186, ..._359, ..._378 };
  export namespace indexer {
    export const events = { ..._187 };
    export const indexer_manager = { ..._188 };
    export const off_chain_updates = { ..._189 };
    export namespace protocol {
      export const v1 = { ..._190, ..._191, ..._192, ..._193 };
    }
    export const redis = { ..._194 };
    export const shared = { ..._195 };
    export const socks = { ..._196 };
  }
  export const listing = {
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._340,
    ..._360,
    ..._379,
  };
  export const perpetuals = {
    ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._341,
    ..._361,
    ..._380,
  };
  export const prices = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._342,
    ..._362,
    ..._381,
  };
  export const ratelimit = {
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._343,
    ..._363,
    ..._382,
  };
  export const revshare = {
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._344,
    ..._364,
    ..._383,
  };
  export const rewards = {
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._345,
    ..._365,
    ..._384,
  };
  export const sending = {
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._366,
    ..._385,
  };
  export const stats = {
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._346,
    ..._367,
    ..._386,
  };
  export const subaccounts = {
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._242,
    ..._347,
    ..._368,
  };
  export const vault = {
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._348,
    ..._369,
    ..._387,
  };
  export const vest = {
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._349,
    ..._370,
    ..._388,
  };
  export const ClientFactory = { ..._392, ..._393, ..._394 };
}
