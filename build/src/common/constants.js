import { find } from 'lodash';
import Long from 'long';
import { SelectedGasDenom } from './enums.js';
export const AUTHORITY_ADDRESSES = {
    gov: '0x',
    delayMsg: '0x',
};
const testnet = {
    id: 'testnet',
    reader: 'http://18.179.86.26:3002',
    executor: 'http://18.179.86.26:26657',
    socket: 'ws://18.179.86.26:3003',
    gasDenomConfig: {
        [SelectedGasDenom.NATIVE]: {
            denom: SelectedGasDenom.NATIVE,
            address: '0x',
            symbol: 'ADYDX',
            decimals: 18,
        },
        [SelectedGasDenom.USDC]: {
            denom: SelectedGasDenom.USDC,
            address: '0x',
            symbol: 'USDC',
            decimals: 6,
        },
    },
};
export const DefaultDenomGasPrice = {
    [SelectedGasDenom.NATIVE]: '25000000000',
    [SelectedGasDenom.USDC]: '0.025',
};
export const supportedChains = [421614];
export const supportedHosts = [testnet];
const depositTokens = [
    {
        id: 0,
        chainId: 421614,
        symbol: 'USDC',
        address: '0x850E1C191e29459944072d73D8B47Bc51e0046DB',
        contractAddress: '0xBC5EfC43206db9077a0dfa5c5860fB6949bE607e',
        decimals: 6,
    },
];
export const getServerNetwork = (network) => {
    const hosts = find(supportedHosts, { id: network });
    return hosts || testnet;
};
export const getDepositToken = (chainId) => {
    return find(depositTokens, { chainId });
};
export const DEFAULT_API_TIMEOUT = 3_000;
export const MAX_MEMO_CHARACTERS = 256;
export const SHORT_BLOCK_WINDOW = 20;
export const SHORT_BLOCK_FORWARD = 3;
// Bech32 Prefix
export const BECH32_PREFIX = 'dydx';
export const NOBLE_BECH32_PREFIX = 'noble';
// Broadcast Defaults
export const BROADCAST_POLL_INTERVAL_MS = 300;
export const BROADCAST_TIMEOUT_MS = 8_000;
// API Defaults
export const API_TIMEOUT_DEFAULT_MS = 5_000;
// Gas
export const GAS_MULTIPLIER = 1.6;
export const ZERO_FEE = {
    amount: [],
    gas: '0',
};
// Validation
export const MAX_UINT_32 = 4_294_967_295;
export const MAX_SUBACCOUNT_NUMBER = 128_000;
export const DEFAULT_SEQUENCE = 0;
export const SERIALIZED_INT_ZERO = Uint8Array.from([0x02]);
export const PAGE_REQUEST = {
    key: new Uint8Array(),
    offset: Long.UZERO,
    limit: Long.MAX_UNSIGNED_VALUE,
    countTotal: true,
    reverse: false,
};
//# sourceMappingURL=constants.js.map