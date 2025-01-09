/* eslint-disable @typescript-eslint/no-explicit-any */
import Long from 'long';
export function generateQueryPath(url, params) {
    const definedEntries = Object.entries(params).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_key, value]) => value !== undefined);
    if (!definedEntries.length) {
        return url;
    }
    const paramsString = definedEntries
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return `${url}?${paramsString}`;
}
export function parseToPrimitives(x) {
    if (typeof x === 'number' ||
        typeof x === 'string' ||
        typeof x === 'boolean' ||
        x === null) {
        return x;
    }
    if (Array.isArray(x)) {
        return x.map((item) => parseToPrimitives(item));
    }
    if (Long.isLong(x)) {
        return x.toString();
    }
    if (x instanceof Uint8Array) {
        return bytesToBigInt(x).toString();
    }
    if (x instanceof Date) {
        return x.toString();
    }
    if (typeof x === 'object') {
        const parsedObj = {};
        for (const key in x) {
            if (Object.prototype.hasOwnProperty.call(x, key)) {
                parsedObj[key] = parseToPrimitives(x[key]);
            }
        }
        return parsedObj;
    }
    if (typeof x === 'bigint') {
        return x.toString();
    }
    throw new Error(`Unsupported data type: ${typeof x}`);
}
/**
 * Converts a byte array (representing an arbitrary-size signed integer) into a bigint.
 * @param u Array of bytes represented as a Uint8Array.
 */
function bytesToBigInt(u) {
    if (u.length <= 1) {
        return BigInt(0);
    }
    const negated = (u[0] & 1) === 1;
    const hex = Buffer.from(u.slice(1)).toString('hex');
    const abs = BigInt(`0x${hex}`);
    return negated ? -abs : abs;
}
//# sourceMappingURL=request.util.js.map