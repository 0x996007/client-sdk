import { LCDClient } from '@osmonauts/lcd';
export const createLCDClient = async ({
  restEndpoint,
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint,
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (
          await import('../cosmos/auth/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      authz: {
        v1beta1: new (
          await import('../cosmos/authz/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      bank: {
        v1beta1: new (
          await import('../cosmos/bank/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      base: {
        node: {
          v1beta1: new (
            await import('../cosmos/base/node/v1beta1/query.lcd.js')
          ).LCDQueryClient({
            requestClient,
          }),
        },
        tendermint: {
          v1beta1: new (
            await import('../cosmos/base/tendermint/v1beta1/query.lcd.js')
          ).LCDQueryClient({
            requestClient,
          }),
        },
      },
      circuit: {
        v1: new (
          await import('../cosmos/circuit/v1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      consensus: {
        v1: new (
          await import('../cosmos/consensus/v1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      distribution: {
        v1beta1: new (
          await import('../cosmos/distribution/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      evidence: {
        v1beta1: new (
          await import('../cosmos/evidence/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      feegrant: {
        v1beta1: new (
          await import('../cosmos/feegrant/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      gov: {
        v1: new (await import('../cosmos/gov/v1/query.lcd.js')).LCDQueryClient({
          requestClient,
        }),
        v1beta1: new (
          await import('../cosmos/gov/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      group: {
        v1: new (
          await import('../cosmos/group/v1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      mint: {
        v1beta1: new (
          await import('../cosmos/mint/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      nft: {
        v1beta1: new (
          await import('../cosmos/nft/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      params: {
        v1beta1: new (
          await import('../cosmos/params/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      slashing: {
        v1beta1: new (
          await import('../cosmos/slashing/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      staking: {
        v1beta1: new (
          await import('../cosmos/staking/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      tx: {
        v1beta1: new (
          await import('../cosmos/tx/v1beta1/service.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
      upgrade: {
        v1beta1: new (
          await import('../cosmos/upgrade/v1beta1/query.lcd.js')
        ).LCDQueryClient({
          requestClient,
        }),
      },
    },
    dydxprotocol: {
      accountplus: new (
        await import('./accountplus/query.lcd.js')
      ).LCDQueryClient({
        requestClient,
      }),
      affiliates: new (
        await import('./affiliates/query.lcd.js')
      ).LCDQueryClient({
        requestClient,
      }),
      assets: new (await import('./assets/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      blocktime: new (await import('./blocktime/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      bridge: new (await import('./bridge/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      clob: new (await import('./clob/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      delaymsg: new (await import('./delaymsg/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      epochs: new (await import('./epochs/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      feetiers: new (await import('./feetiers/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      listing: new (await import('./listing/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      perpetuals: new (
        await import('./perpetuals/query.lcd.js')
      ).LCDQueryClient({
        requestClient,
      }),
      prices: new (await import('./prices/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      ratelimit: new (await import('./ratelimit/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      revshare: new (await import('./revshare/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      rewards: new (await import('./rewards/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      stats: new (await import('./stats/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      subaccounts: new (
        await import('./subaccounts/query.lcd.js')
      ).LCDQueryClient({
        requestClient,
      }),
      vault: new (await import('./vault/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
      vest: new (await import('./vest/query.lcd.js')).LCDQueryClient({
        requestClient,
      }),
    },
  };
};
