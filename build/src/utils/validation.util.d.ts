import { OrderFlags, ICancelOrder, IPlaceOrder, IBatchCancelOrder } from '../common/index.js';
import { UserError } from '../common/errors.js';
import { Transfer } from '../protos/types.js';
/**
 * @describe validatePlaceOrderMessage validates that an order to place has fields that would be
 *  valid on-chain.
 */
export declare function validatePlaceOrderMessage(subaccountNumber: number, order: IPlaceOrder): UserError | undefined;
/**
 * @describe validateCancelOrderMessage validates that an order to cancel has fields that would be
 *  valid on-chain.
 */
export declare function validateCancelOrderMessage(subaccountNumber: number, order: ICancelOrder): UserError | undefined;
/**
 * @describe validateBatchCancelOrderMessage validates that orders to batch cancel have fields that would be
 *  valid on-chain.
 */
export declare function validateBatchCancelOrderMessage(subaccountNumber: number, orders: IBatchCancelOrder): UserError | undefined;
/**
 * @describe validateTransferMessage validates that a transfer to place has fields that would be
 *  valid on-chain.
 */
export declare function validateTransferMessage(transfer: Transfer): UserError | undefined;
export declare function verifyOrderFlags(orderFlags: OrderFlags): boolean;
export declare function isStatefulOrder(orderFlags: OrderFlags): boolean;
export declare function isValidAddress(address: string): boolean;
