export declare const createLCDClient: ({ restEndpoint, }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("./auth/v1beta1/query.lcd.js").LCDQueryClient;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/query.lcd.js").LCDQueryClient;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.lcd.js").LCDQueryClient;
        };
        base: {
            node: {
                v1beta1: import("./base/node/v1beta1/query.lcd.js").LCDQueryClient;
            };
            tendermint: {
                v1beta1: import("./base/tendermint/v1beta1/query.lcd.js").LCDQueryClient;
            };
        };
        circuit: {
            v1: import("./circuit/v1/query.lcd.js").LCDQueryClient;
        };
        consensus: {
            v1: import("./consensus/v1/query.lcd.js").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.lcd.js").LCDQueryClient;
        };
        evidence: {
            v1beta1: import("./evidence/v1beta1/query.lcd.js").LCDQueryClient;
        };
        feegrant: {
            v1beta1: import("./feegrant/v1beta1/query.lcd.js").LCDQueryClient;
        };
        gov: {
            v1: import("./gov/v1/query.lcd.js").LCDQueryClient;
            v1beta1: import("./gov/v1beta1/query.lcd.js").LCDQueryClient;
        };
        group: {
            v1: import("./group/v1/query.lcd.js").LCDQueryClient;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd.js").LCDQueryClient;
        };
        nft: {
            v1beta1: import("./nft/v1beta1/query.lcd.js").LCDQueryClient;
        };
        params: {
            v1beta1: import("./params/v1beta1/query.lcd.js").LCDQueryClient;
        };
        slashing: {
            v1beta1: import("./slashing/v1beta1/query.lcd.js").LCDQueryClient;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.lcd.js").LCDQueryClient;
        };
        tx: {
            v1beta1: import("./tx/v1beta1/service.lcd.js").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/query.lcd.js").LCDQueryClient;
        };
    };
}>;
