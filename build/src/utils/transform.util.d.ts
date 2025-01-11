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
