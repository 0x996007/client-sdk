import { Rpc } from '../helpers.js';
export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
  cosmos: {
    auth: {
      v1beta1: new (
        await import('../cosmos/auth/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    authz: {
      v1beta1: new (
        await import('../cosmos/authz/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    bank: {
      v1beta1: new (
        await import('../cosmos/bank/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    circuit: {
      v1: new (
        await import('../cosmos/circuit/v1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    consensus: {
      v1: new (
        await import('../cosmos/consensus/v1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    crisis: {
      v1beta1: new (
        await import('../cosmos/crisis/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    distribution: {
      v1beta1: new (
        await import('../cosmos/distribution/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    evidence: {
      v1beta1: new (
        await import('../cosmos/evidence/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    feegrant: {
      v1beta1: new (
        await import('../cosmos/feegrant/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    gov: {
      v1: new (await import('../cosmos/gov/v1/tx.rpc.msg.js')).MsgClientImpl(
        rpc,
      ),
      v1beta1: new (
        await import('../cosmos/gov/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    group: {
      v1: new (await import('../cosmos/group/v1/tx.rpc.msg.js')).MsgClientImpl(
        rpc,
      ),
    },
    mint: {
      v1beta1: new (
        await import('../cosmos/mint/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    nft: {
      v1beta1: new (
        await import('../cosmos/nft/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    slashing: {
      v1beta1: new (
        await import('../cosmos/slashing/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    staking: {
      v1beta1: new (
        await import('../cosmos/staking/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    upgrade: {
      v1beta1: new (
        await import('../cosmos/upgrade/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
    vesting: {
      v1beta1: new (
        await import('../cosmos/vesting/v1beta1/tx.rpc.msg.js')
      ).MsgClientImpl(rpc),
    },
  },
  dydxprotocol: {
    accountplus: new (
      await import('./accountplus/tx.rpc.msg.js')
    ).MsgClientImpl(rpc),
    affiliates: new (await import('./affiliates/tx.rpc.msg.js')).MsgClientImpl(
      rpc,
    ),
    blocktime: new (await import('./blocktime/tx.rpc.msg.js')).MsgClientImpl(
      rpc,
    ),
    bridge: new (await import('./bridge/tx.rpc.msg.js')).MsgClientImpl(rpc),
    clob: new (await import('./clob/tx.rpc.msg.js')).MsgClientImpl(rpc),
    delaymsg: new (await import('./delaymsg/tx.rpc.msg.js')).MsgClientImpl(rpc),
    feetiers: new (await import('./feetiers/tx.rpc.msg.js')).MsgClientImpl(rpc),
    govplus: new (await import('./govplus/tx.rpc.msg.js')).MsgClientImpl(rpc),
    listing: new (await import('./listing/tx.rpc.msg.js')).MsgClientImpl(rpc),
    perpetuals: new (await import('./perpetuals/tx.rpc.msg.js')).MsgClientImpl(
      rpc,
    ),
    prices: new (await import('./prices/tx.rpc.msg.js')).MsgClientImpl(rpc),
    ratelimit: new (await import('./ratelimit/tx.rpc.msg.js')).MsgClientImpl(
      rpc,
    ),
    revshare: new (await import('./revshare/tx.rpc.msg.js')).MsgClientImpl(rpc),
    rewards: new (await import('./rewards/tx.rpc.msg.js')).MsgClientImpl(rpc),
    sending: new (await import('./sending/tx.rpc.msg.js')).MsgClientImpl(rpc),
    stats: new (await import('./stats/tx.rpc.msg.js')).MsgClientImpl(rpc),
    vault: new (await import('./vault/tx.rpc.msg.js')).MsgClientImpl(rpc),
    vest: new (await import('./vest/tx.rpc.msg.js')).MsgClientImpl(rpc),
  },
});
