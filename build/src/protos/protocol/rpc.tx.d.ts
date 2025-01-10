import { Rpc } from '../helpers.js';
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
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
        accountplus: import("./accountplus/tx.rpc.msg.js").MsgClientImpl;
        affiliates: import("./affiliates/tx.rpc.msg.js").MsgClientImpl;
        blocktime: import("./blocktime/tx.rpc.msg.js").MsgClientImpl;
        bridge: import("./bridge/tx.rpc.msg.js").MsgClientImpl;
        clob: import("./clob/tx.rpc.msg.js").MsgClientImpl;
        delaymsg: import("./delaymsg/tx.rpc.msg.js").MsgClientImpl;
        feetiers: import("./feetiers/tx.rpc.msg.js").MsgClientImpl;
        govplus: import("./govplus/tx.rpc.msg.js").MsgClientImpl;
        listing: import("./listing/tx.rpc.msg.js").MsgClientImpl;
        perpetuals: import("./perpetuals/tx.rpc.msg.js").MsgClientImpl;
        prices: import("./prices/tx.rpc.msg.js").MsgClientImpl;
        ratelimit: import("./ratelimit/tx.rpc.msg.js").MsgClientImpl;
        revshare: import("./revshare/tx.rpc.msg.js").MsgClientImpl;
        rewards: import("./rewards/tx.rpc.msg.js").MsgClientImpl;
        sending: import("./sending/tx.rpc.msg.js").MsgClientImpl;
        stats: import("./stats/tx.rpc.msg.js").MsgClientImpl;
        vault: import("./vault/tx.rpc.msg.js").MsgClientImpl;
        vest: import("./vest/tx.rpc.msg.js").MsgClientImpl;
    };
}>;
