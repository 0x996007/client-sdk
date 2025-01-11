import Long from 'long';
import { OrderExecution, OrderFlags, OrderSide, OrderTimeInForce, OrderType, PartialTransactionOptions, TransactionOptions } from '../common/index.js';
import { Order_ConditionType, Order_Side, Order_TimeInForce } from '../protos/types.js';
/**
 * @description Either return undefined or insert default sequence value into
 * `partialTransactionOptions` if it does not exist.
 *
 * @returns undefined or full TransactionOptions.
 */
export declare function convertPartialTransactionOptionsToFull(partialTransactionOptions?: PartialTransactionOptions): TransactionOptions | undefined;
export declare function round(input: number, base: number): number;
export declare function calculateQuantums(size: number, atomicResolution: number, stepBaseQuantums: number): Long;
export declare function calculateVaultQuantums(size: number): bigint;
export declare function calculateSubticks(price: number, atomicResolution: number, quantumConversionExponent: number, subticksPerTick: number): Long;
export declare function calculateSide(side: OrderSide): Order_Side;
export declare function calculateTimeInForce(type: OrderType, timeInForce?: OrderTimeInForce, execution?: OrderExecution, postOnly?: boolean): Order_TimeInForce;
export declare function calculateOrderFlags(type: OrderType, timeInForce?: OrderTimeInForce): OrderFlags;
export declare function calculateClientMetadata(orderType: OrderType): number;
export declare function calculateConditionType(orderType: OrderType): Order_ConditionType;
export declare function calculateConditionalOrderTriggerSubticks(orderType: OrderType, atomicResolution: number, quantumConversionExponent: number, subticksPerTick: number, triggerPrice?: number): Long;
