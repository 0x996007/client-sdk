/* eslint-disable @typescript-eslint/no-namespace */
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
import * as _84 from './msg/textual/v1/textual.js';
import * as _85 from './msg/v1/msg.js';
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
import * as _99 from './query/v1/query.js';
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
import * as _389 from './lcd.js';
import * as _390 from './rpc.query.js';
import * as _391 from './rpc.tx.js';
export var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        let runtime;
        (function (runtime) {
            runtime.v1alpha1 = { ..._2 };
        })(runtime = app.runtime || (app.runtime = {}));
        app.v1alpha1 = { ..._3, ..._4, ..._5, ..._291 };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        let module;
        (function (module) {
            module.v1 = { ..._6 };
        })(module = auth.module || (auth.module = {}));
        auth.v1beta1 = {
            ..._7,
            ..._8,
            ..._9,
            ..._10,
            ..._271,
            ..._292,
            ..._313,
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        let module;
        (function (module) {
            module.v1 = { ..._11 };
        })(module = authz.module || (authz.module = {}));
        authz.v1beta1 = {
            ..._12,
            ..._13,
            ..._14,
            ..._15,
            ..._16,
            ..._272,
            ..._293,
            ..._314,
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        let module;
        (function (module) {
            module.v1 = { ..._17 };
        })(module = bank.module || (bank.module = {}));
        bank.v1beta1 = {
            ..._18,
            ..._19,
            ..._20,
            ..._21,
            ..._22,
            ..._273,
            ..._294,
            ..._315,
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = { ..._23 };
        })(abci = base.abci || (base.abci = {}));
        let node;
        (function (node) {
            node.v1beta1 = { ..._24, ..._274, ..._295 };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = { ..._25 };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = { ..._26 };
            reflection.v2alpha1 = { ..._27 };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = { ..._28, ..._29, ..._275, ..._296 };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = { ..._30 };
    })(base = cosmos.base || (cosmos.base = {}));
    let circuit;
    (function (circuit) {
        let module;
        (function (module) {
            module.v1 = { ..._31 };
        })(module = circuit.module || (circuit.module = {}));
        circuit.v1 = { ..._32, ..._33, ..._34, ..._276, ..._297, ..._316 };
    })(circuit = cosmos.circuit || (cosmos.circuit = {}));
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = { ..._35 };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = { ..._36, ..._37, ..._277, ..._298, ..._317 };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = { ..._38 };
        })(module = crisis.module || (crisis.module = {}));
        crisis.v1beta1 = { ..._39, ..._40, ..._318 };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = { ..._41 };
        let hd;
        (function (hd) {
            hd.v1 = { ..._42 };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = { ..._43 };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = { ..._44 };
        crypto.secp256k1 = { ..._45 };
        crypto.secp256r1 = { ..._46 };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = { ..._47 };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._48,
            ..._49,
            ..._50,
            ..._51,
            ..._278,
            ..._299,
            ..._319,
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = { ..._52 };
        })(module = evidence.module || (evidence.module = {}));
        evidence.v1beta1 = {
            ..._53,
            ..._54,
            ..._55,
            ..._56,
            ..._279,
            ..._300,
            ..._320,
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = { ..._57 };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._58,
            ..._59,
            ..._60,
            ..._61,
            ..._280,
            ..._301,
            ..._321,
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = { ..._62 };
        })(module = genutil.module || (genutil.module = {}));
        genutil.v1beta1 = { ..._63 };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = { ..._64 };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._65,
            ..._66,
            ..._67,
            ..._68,
            ..._281,
            ..._302,
            ..._322,
        };
        gov.v1beta1 = {
            ..._69,
            ..._70,
            ..._71,
            ..._72,
            ..._282,
            ..._303,
            ..._323,
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = { ..._73 };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._283,
            ..._304,
            ..._324,
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = { ..._79 };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._80,
            ..._81,
            ..._82,
            ..._83,
            ..._284,
            ..._305,
            ..._325,
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        let textual;
        (function (textual) {
            textual.v1 = { ..._84 };
        })(textual = msg.textual || (msg.textual = {}));
        msg.v1 = { ..._85 };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = { ..._86 };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._87,
            ..._88,
            ..._89,
            ..._90,
            ..._91,
            ..._285,
            ..._306,
            ..._326,
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = { ..._92 };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = { ..._93, ..._307 };
        })(query = orm.query || (orm.query = {}));
        orm.v1 = { ..._94 };
        orm.v1alpha1 = { ..._95 };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = { ..._96 };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = { ..._97, ..._98, ..._286, ..._308 };
    })(params = cosmos.params || (cosmos.params = {}));
    let query;
    (function (query) {
        query.v1 = { ..._99 };
    })(query = cosmos.query || (cosmos.query = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = { ..._100 };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = { ..._101 };
        })(module = slashing.module || (slashing.module = {}));
        slashing.v1beta1 = {
            ..._102,
            ..._103,
            ..._104,
            ..._105,
            ..._287,
            ..._309,
            ..._327,
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = { ..._106 };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._107,
            ..._108,
            ..._109,
            ..._110,
            ..._111,
            ..._288,
            ..._310,
            ..._328,
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let store;
    (function (store) {
        let internal;
        (function (internal) {
            let kv;
            (function (kv) {
                kv.v1beta1 = { ..._112 };
            })(kv = internal.kv || (internal.kv = {}));
        })(internal = store.internal || (store.internal = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1 = { ..._113 };
        })(snapshots = store.snapshots || (store.snapshots = {}));
        let streaming;
        (function (streaming) {
            streaming.abci = { ..._114 };
        })(streaming = store.streaming || (store.streaming = {}));
        store.v1beta1 = { ..._115, ..._116 };
    })(store = cosmos.store || (cosmos.store = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = { ..._117 };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = { ..._118 };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = { ..._119, ..._120, ..._289, ..._311 };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = { ..._121 };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._122,
            ..._123,
            ..._124,
            ..._290,
            ..._312,
            ..._329,
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = { ..._125 };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = { ..._126, ..._127, ..._330 };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = { ..._389, ..._390, ..._391 };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map