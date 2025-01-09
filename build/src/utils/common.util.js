import { MAX_UINT_32 } from '../types.js';
/**
 * Returns a random integer value between 0 and (n-1).
 */
export function randomInt(n) {
    return Math.floor(Math.random() * n);
}
/**
 * Generate a random clientId.
 */
export function generateRandomClientId() {
    return randomInt(MAX_UINT_32 + 1);
}
/**
 * Deterministically generate a valid clientId from an arbitrary string by performing a
 * quick hashing function on the string.
 */
export function clientIdFromString(input) {
    let hash = 0;
    if (input.length === 0)
        return hash;
    for (let i = 0; i < input.length; i++) {
        hash = (hash << 5) - hash + input.charCodeAt(i);
        hash |= 0;
    }
    // Bitwise operators covert the value to a 32-bit integer.
    // We must coerce this into a 32-bit unsigned integer.
    return hash + 2 ** 31;
}
/**
 * Pauses the execution of the program for a specified time.
 * @param ms - The number of milliseconds to pause the program.
 * @returns A promise that resolves after the specified number of milliseconds.
 */
export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Returns a title to use for a gov proposal that adds a new market.
 *
 * @param ticker ticker symbol for the new market.
 * @returns title for the gov proposal.
 */
export function getGovAddNewMarketTitle(ticker) {
    return `Add ${ticker} perpetual market`;
}
/**
 * Returns a summary to use for a gov proposal that adds a new market.
 *
 * @param ticker ticker symbol for the new market.
 * @param delayBlocks number of blocks to wait before activating the market.
 * @returns summary for the gov proposal.
 */
export function getGovAddNewMarketSummary(ticker, delayBlocks) {
    return `Add the x/prices, x/perpetuals and x/clob parameters needed for a ${ticker} perpetual market. Create the market in INITIALIZING status and transition it to ACTIVE status after ${delayBlocks} blocks.`;
}
//# sourceMappingURL=common.util.js.map