import { PartialTransactionOptions, TransactionOptions } from '../types.js';
/**
 * @description Either return undefined or insert default sequence value into
 * `partialTransactionOptions` if it does not exist.
 *
 * @returns undefined or full TransactionOptions.
 */
export declare function convertPartialTransactionOptionsToFull(partialTransactionOptions?: PartialTransactionOptions): TransactionOptions | undefined;
/**
 * @description Strip '0x' prefix from input string. If there is no '0x' prefix, return the original
 * input.
 *
 * @returns input without '0x' prefix or original input if no prefix.
 */
export declare function stripHexPrefix(input: string): string;
export declare function bigIntToBytes(value: bigint): Uint8Array;
export declare enum ByteArrayEncoding {
    HEX = "hex",
    BIGINT = "bigint"
}
export declare function encodeJson(object?: object, byteArrayEncoding?: ByteArrayEncoding): string;
