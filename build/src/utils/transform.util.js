import { toHex } from '@cosmjs/encoding';
import { BigNumber } from 'bignumber.js';
import Long from 'long';
/**
 * @description Strip '0x' prefix from input string. If there is no '0x' prefix, return the original
 * input.
 *
 * @returns input without '0x' prefix or original input if no prefix.
 */
export function stripHexPrefix(input) {
    if (input.indexOf('0x') === 0) {
        return input.slice(2);
    }
    return input;
}
function toBigInt(u) {
    if (u.length <= 1) {
        return BigInt(0);
    }
    const negated = (u[0] & 1) === 1;
    const hex = Buffer.from(u.slice(1)).toString('hex');
    const abs = BigInt(`0x${hex}`);
    return negated ? -abs : abs;
}
export function bigIntToBytes(value) {
    const absoluteValue = value < 0 ? value * BigInt(-1) : value;
    const nonPaddedHexValue = absoluteValue.toString(16);
    const paddedHexValue = nonPaddedHexValue.length % 2 === 0
        ? nonPaddedHexValue
        : `0${nonPaddedHexValue}`;
    const numberBytes = Buffer.from(paddedHexValue, 'hex');
    const signedBytes = Uint8Array.of(value < 0 ? 3 : 2, ...numberBytes);
    return signedBytes;
}
export var ByteArrayEncoding;
(function (ByteArrayEncoding) {
    ByteArrayEncoding["HEX"] = "hex";
    ByteArrayEncoding["BIGINT"] = "bigint";
})(ByteArrayEncoding || (ByteArrayEncoding = {}));
export function encodeJson(object, byteArrayEncoding = ByteArrayEncoding.HEX) {
    return JSON.stringify(object, function replacer(_key, value) {
        // Even though we set the an UInt8Array as the value,
        // it comes in here as an object with UInt8Array as the buffer property.
        if (value instanceof BigNumber) {
            return value.toString();
        }
        if (typeof value === 'bigint') {
            return value.toString();
        }
        if (value instanceof Long) {
            return value.toString();
        }
        if (value?.buffer instanceof Uint8Array) {
            if (byteArrayEncoding === ByteArrayEncoding.HEX) {
                return toHex(value.buffer);
            }
            else {
                return toBigInt(value.buffer).toString();
            }
        }
        else if (value instanceof Uint8Array) {
            if (byteArrayEncoding === ByteArrayEncoding.HEX) {
                return toHex(value);
            }
            else {
                return toBigInt(value).toString();
            }
        }
        return value;
    });
}
//# sourceMappingURL=transform.util.js.map