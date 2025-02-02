export const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        auth: {
            v1beta1: new (await import('./auth/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        authz: {
            v1beta1: new (await import('./authz/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        bank: {
            v1beta1: new (await import('./bank/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        circuit: {
            v1: new (await import('./circuit/v1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        consensus: {
            v1: new (await import('./consensus/v1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        crisis: {
            v1beta1: new (await import('./crisis/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        distribution: {
            v1beta1: new (await import('./distribution/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        evidence: {
            v1beta1: new (await import('./evidence/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        feegrant: {
            v1beta1: new (await import('./feegrant/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        gov: {
            v1: new (await import('./gov/v1/tx.rpc.msg.js')).MsgClientImpl(rpc),
            v1beta1: new (await import('./gov/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        group: {
            v1: new (await import('./group/v1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        mint: {
            v1beta1: new (await import('./mint/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        nft: {
            v1beta1: new (await import('./nft/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        slashing: {
            v1beta1: new (await import('./slashing/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        staking: {
            v1beta1: new (await import('./staking/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        upgrade: {
            v1beta1: new (await import('./upgrade/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
        vesting: {
            v1beta1: new (await import('./vesting/v1beta1/tx.rpc.msg.js')).MsgClientImpl(rpc),
        },
    },
});
//# sourceMappingURL=rpc.tx.js.map