import { bech32 } from 'bech32';
import Long from 'long';
import { OrderFlags, MAX_SUBACCOUNT_NUMBER, MAX_UINT_32, } from '../common/index.js';
import { UserError } from '../common/errors.js';
/**
 * @describe validatePlaceOrderMessage validates that an order to place has fields that would be
 *  valid on-chain.
 */
export function validatePlaceOrderMessage(subaccountNumber, order) {
    if (!verifyNumberIsUint32(order.clientId)) {
        return new UserError(`clientId: ${order.clientId} is not a valid uint32`);
    }
    if (order.quantums.lessThanOrEqual(Long.ZERO)) {
        return new UserError(`quantums: ${order.quantums} cannot be <= 0`);
    }
    if (order.subticks.lessThanOrEqual(Long.ZERO)) {
        return new UserError(`subticks: ${order.subticks} cannot be <= 0`);
    }
    if (!verifySubaccountNumber(subaccountNumber)) {
        return new UserError(`subaccountNumber: ${subaccountNumber} cannot be < 0 or > ${MAX_SUBACCOUNT_NUMBER}`);
    }
    if (!isStatefulOrder(order.orderFlags) &&
        !verifyGoodTilBlock(order.goodTilBlock)) {
        return new UserError(`goodTilBlock: ${order.goodTilBlock} is not a valid uint32 or is 0`);
    }
    if (isStatefulOrder(order.orderFlags) &&
        !verifyGoodTilBlockTime(order.goodTilBlockTime)) {
        return new UserError(`goodTilBlockTime: ${order.goodTilBlockTime} is not a valid uint32 or is 0`);
    }
    return undefined;
}
/**
 * @describe validateCancelOrderMessage validates that an order to cancel has fields that would be
 *  valid on-chain.
 */
export function validateCancelOrderMessage(subaccountNumber, order) {
    if (!verifyNumberIsUint32(order.clientId)) {
        return new UserError(`clientId: ${order.clientId} is not a valid uint32`);
    }
    if (!isStatefulOrder(order.orderFlags) &&
        !verifyGoodTilBlock(order.goodTilBlock)) {
        return new UserError(`goodTilBlock: ${order.goodTilBlock} is not a valid uint32 or is 0`);
    }
    if (!isStatefulOrder(order.orderFlags) &&
        order.goodTilBlockTime !== undefined) {
        return new UserError(`goodTilBlockTime is ${order.goodTilBlockTime}, but should not be set for non-stateful orders`);
    }
    if (isStatefulOrder(order.orderFlags) &&
        !verifyGoodTilBlockTime(order.goodTilBlockTime)) {
        return new UserError(`goodTilBlockTime: ${order.goodTilBlockTime} is not a valid uint32 or is 0`);
    }
    if (isStatefulOrder(order.orderFlags) && order.goodTilBlock !== undefined) {
        return new UserError(`goodTilBlock is ${order.goodTilBlock}, but should not be set for stateful orders`);
    }
    if (!verifySubaccountNumber(subaccountNumber)) {
        return new UserError(`subaccountNumber: ${subaccountNumber} cannot be < 0 or > ${MAX_SUBACCOUNT_NUMBER}`);
    }
    return undefined;
}
/**
 * @describe validateBatchCancelOrderMessage validates that orders to batch cancel have fields that would be
 *  valid on-chain.
 */
export function validateBatchCancelOrderMessage(subaccountNumber, orders) {
    for (const orderBatch of orders.shortTermOrders) {
        for (const clientId of orderBatch.clientIds) {
            if (!verifyNumberIsUint32(clientId)) {
                return new UserError(`clientId: ${clientId} is not a valid uint32`);
            }
        }
    }
    if (!verifyGoodTilBlock(orders.goodTilBlock)) {
        return new UserError(`goodTilBlock: ${orders.goodTilBlock} is not a valid uint32 or is 0`);
    }
    if (!verifySubaccountNumber(subaccountNumber)) {
        return new UserError(`subaccountNumber: ${subaccountNumber} cannot be < 0 or > ${MAX_SUBACCOUNT_NUMBER}`);
    }
    return undefined;
}
/**
 * @describe validateTransferMessage validates that a transfer to place has fields that would be
 *  valid on-chain.
 */
export function validateTransferMessage(transfer) {
    if (!verifySubaccountNumber(transfer.sender.number || 0)) {
        return new UserError(`senderSubaccountNumber: ${transfer.sender.number || 0} cannot be < 0 or > ${MAX_SUBACCOUNT_NUMBER}`);
    }
    if (!verifySubaccountNumber(transfer.recipient.number || 0)) {
        return new UserError(`recipientSubaccountNumber: ${transfer.recipient.number || 0} cannot be < 0 or > ${MAX_SUBACCOUNT_NUMBER}`);
    }
    if (transfer.assetId !== 0) {
        return new UserError(`asset id: ${transfer.assetId} not supported`);
    }
    if (transfer.amount.lessThanOrEqual(Long.ZERO)) {
        return new UserError(`amount: ${transfer.amount} cannot be <= 0`);
    }
    const addressError = verifyIsBech32(transfer.recipient.owner);
    if (addressError !== undefined) {
        return new UserError(addressError.toString());
    }
    return undefined;
}
function verifyGoodTilBlock(goodTilBlock) {
    if (goodTilBlock === undefined) {
        return false;
    }
    return verifyNumberIsUint32(goodTilBlock) && goodTilBlock > 0;
}
function verifyGoodTilBlockTime(goodTilBlockTime) {
    if (goodTilBlockTime === undefined) {
        return false;
    }
    return verifyNumberIsUint32(goodTilBlockTime) && goodTilBlockTime > 0;
}
function verifySubaccountNumber(subaccountNumber) {
    return subaccountNumber >= 0 && subaccountNumber <= MAX_SUBACCOUNT_NUMBER;
}
function verifyNumberIsUint32(num) {
    return num >= 0 && num <= MAX_UINT_32;
}
export function verifyOrderFlags(orderFlags) {
    return (orderFlags === OrderFlags.SHORT_TERM ||
        orderFlags === OrderFlags.LONG_TERM ||
        orderFlags === OrderFlags.CONDITIONAL);
}
export function isStatefulOrder(orderFlags) {
    return (orderFlags === OrderFlags.LONG_TERM || orderFlags === OrderFlags.CONDITIONAL);
}
function verifyIsBech32(address) {
    try {
        bech32.decode(address);
    }
    catch (error) {
        return error;
    }
    return undefined;
}
export function isValidAddress(address) {
    // An address is valid if it starts with `dydx1` and is Bech32 format.
    return address.startsWith('dydx1') && verifyIsBech32(address) === undefined;
}
//# sourceMappingURL=validation.util.js.map