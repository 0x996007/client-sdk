import { Tendermint34Client, HttpEndpoint } from '@cosmjs/tendermint-rpc';
import { QueryClient } from '@cosmjs/stargate';
export const createRPCQueryClient = async ({
  rpcEndpoint,
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (
          await import('../cosmos/app/v1alpha1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      auth: {
        v1beta1: (
          await import('../cosmos/auth/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      authz: {
        v1beta1: (
          await import('../cosmos/authz/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      bank: {
        v1beta1: (
          await import('../cosmos/bank/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      base: {
        node: {
          v1beta1: (
            await import('../cosmos/base/node/v1beta1/query.rpc.Service.js')
          ).createRpcQueryExtension(client),
        },
        tendermint: {
          v1beta1: (
            await import(
              '../cosmos/base/tendermint/v1beta1/query.rpc.Service.js'
            )
          ).createRpcQueryExtension(client),
        },
      },
      circuit: {
        v1: (
          await import('../cosmos/circuit/v1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      consensus: {
        v1: (
          await import('../cosmos/consensus/v1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      distribution: {
        v1beta1: (
          await import('../cosmos/distribution/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      evidence: {
        v1beta1: (
          await import('../cosmos/evidence/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      feegrant: {
        v1beta1: (
          await import('../cosmos/feegrant/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      gov: {
        v1: (
          await import('../cosmos/gov/v1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
        v1beta1: (
          await import('../cosmos/gov/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      group: {
        v1: (
          await import('../cosmos/group/v1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      mint: {
        v1beta1: (
          await import('../cosmos/mint/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      nft: {
        v1beta1: (
          await import('../cosmos/nft/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      orm: {
        query: {
          v1alpha1: (
            await import('../cosmos/orm/query/v1alpha1/query.rpc.Query.js')
          ).createRpcQueryExtension(client),
        },
      },
      params: {
        v1beta1: (
          await import('../cosmos/params/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      slashing: {
        v1beta1: (
          await import('../cosmos/slashing/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      staking: {
        v1beta1: (
          await import('../cosmos/staking/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
      tx: {
        v1beta1: (
          await import('../cosmos/tx/v1beta1/service.rpc.Service.js')
        ).createRpcQueryExtension(client),
      },
      upgrade: {
        v1beta1: (
          await import('../cosmos/upgrade/v1beta1/query.rpc.Query.js')
        ).createRpcQueryExtension(client),
      },
    },
    dydxprotocol: {
      accountplus: (
        await import('./accountplus/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      affiliates: (
        await import('./affiliates/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      assets: (
        await import('./assets/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      blocktime: (
        await import('./blocktime/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      bridge: (
        await import('./bridge/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      clob: (await import('./clob/query.rpc.Query.js')).createRpcQueryExtension(
        client,
      ),
      delaymsg: (
        await import('./delaymsg/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      epochs: (
        await import('./epochs/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      feetiers: (
        await import('./feetiers/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      // govplus: (
      //   await import('./govplus/query.rpc.Query.js')
      // ).createRpcQueryExtension(client),
      listing: (
        await import('./listing/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      perpetuals: (
        await import('./perpetuals/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      prices: (
        await import('./prices/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      ratelimit: (
        await import('./ratelimit/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      revshare: (
        await import('./revshare/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      rewards: (
        await import('./rewards/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      // sending: (
      //   await import('./sending/query.rpc.Query.js')
      // ).createRpcQueryExtension(client),
      stats: (
        await import('./stats/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      subaccounts: (
        await import('./subaccounts/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      vault: (
        await import('./vault/query.rpc.Query.js')
      ).createRpcQueryExtension(client),
      vest: (await import('./vest/query.rpc.Query.js')).createRpcQueryExtension(
        client,
      ),
    },
  };
};
