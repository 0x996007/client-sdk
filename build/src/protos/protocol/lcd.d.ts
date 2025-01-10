export declare const createLCDClient: ({ restEndpoint, }: {
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
        accountplus: import("./accountplus/query.lcd.js").LCDQueryClient;
        affiliates: import("./affiliates/query.lcd.js").LCDQueryClient;
        assets: import("./assets/query.lcd.js").LCDQueryClient;
        blocktime: import("./blocktime/query.lcd.js").LCDQueryClient;
        bridge: import("./bridge/query.lcd.js").LCDQueryClient;
        clob: import("./clob/query.lcd.js").LCDQueryClient;
        delaymsg: import("./delaymsg/query.lcd.js").LCDQueryClient;
        epochs: import("./epochs/query.lcd.js").LCDQueryClient;
        feetiers: import("./feetiers/query.lcd.js").LCDQueryClient;
        listing: import("./listing/query.lcd.js").LCDQueryClient;
        perpetuals: import("./perpetuals/query.lcd.js").LCDQueryClient;
        prices: import("./prices/query.lcd.js").LCDQueryClient;
        ratelimit: import("./ratelimit/query.lcd.js").LCDQueryClient;
        revshare: import("./revshare/query.lcd.js").LCDQueryClient;
        rewards: import("./rewards/query.lcd.js").LCDQueryClient;
        stats: import("./stats/query.lcd.js").LCDQueryClient;
        subaccounts: import("./subaccounts/query.lcd.js").LCDQueryClient;
        vault: import("./vault/query.lcd.js").LCDQueryClient;
        vest: import("./vest/query.lcd.js").LCDQueryClient;
    };
}>;
