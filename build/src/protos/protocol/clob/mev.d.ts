import { SubaccountId, SubaccountIdSDKType } from '../subaccounts/subaccount.js';
import { ClobPair, ClobPairSDKType } from './clob_pair.js';
import { Long, DeepPartial } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/** MEVMatch represents all necessary data to calculate MEV for a regular match. */
export interface MEVMatch {
    takerOrderSubaccountId?: SubaccountId;
    takerFeePpm: number;
    makerOrderSubaccountId?: SubaccountId;
    makerOrderSubticks: Long;
    makerOrderIsBuy: boolean;
    makerFeePpm: number;
    clobPairId: number;
    fillAmount: Long;
}
/** MEVMatch represents all necessary data to calculate MEV for a regular match. */
export interface MEVMatchSDKType {
    taker_order_subaccount_id?: SubaccountIdSDKType;
    taker_fee_ppm: number;
    maker_order_subaccount_id?: SubaccountIdSDKType;
    maker_order_subticks: Long;
    maker_order_is_buy: boolean;
    maker_fee_ppm: number;
    clob_pair_id: number;
    fill_amount: Long;
}
/**
 * MEVLiquidationMatch represents all necessary data to calculate MEV for a
 * liquidation.
 */
export interface MEVLiquidationMatch {
    liquidatedSubaccountId?: SubaccountId;
    insuranceFundDeltaQuoteQuantums: Long;
    makerOrderSubaccountId?: SubaccountId;
    makerOrderSubticks: Long;
    makerOrderIsBuy: boolean;
    makerFeePpm: number;
    clobPairId: number;
    fillAmount: Long;
}
/**
 * MEVLiquidationMatch represents all necessary data to calculate MEV for a
 * liquidation.
 */
export interface MEVLiquidationMatchSDKType {
    liquidated_subaccount_id?: SubaccountIdSDKType;
    insurance_fund_delta_quote_quantums: Long;
    maker_order_subaccount_id?: SubaccountIdSDKType;
    maker_order_subticks: Long;
    maker_order_is_buy: boolean;
    maker_fee_ppm: number;
    clob_pair_id: number;
    fill_amount: Long;
}
/** ClobMidPrice contains the mid price of a CLOB pair, represented by it's ID. */
export interface ClobMidPrice {
    clobPair?: ClobPair;
    subticks: Long;
}
/** ClobMidPrice contains the mid price of a CLOB pair, represented by it's ID. */
export interface ClobMidPriceSDKType {
    clob_pair?: ClobPairSDKType;
    subticks: Long;
}
/**
 * ValidatorMevMatches contains all matches from the validator's local
 * operations queue.
 */
export interface ValidatorMevMatches {
    matches: MEVMatch[];
    liquidationMatches: MEVLiquidationMatch[];
}
/**
 * ValidatorMevMatches contains all matches from the validator's local
 * operations queue.
 */
export interface ValidatorMevMatchesSDKType {
    matches: MEVMatchSDKType[];
    liquidation_matches: MEVLiquidationMatchSDKType[];
}
/**
 * MevNodeToNodeMetrics is a data structure for encapsulating all MEV node <>
 * node metrics.
 */
export interface MevNodeToNodeMetrics {
    validatorMevMatches?: ValidatorMevMatches;
    clobMidPrices: ClobMidPrice[];
    bpMevMatches?: ValidatorMevMatches;
    proposalReceiveTime: Long;
}
/**
 * MevNodeToNodeMetrics is a data structure for encapsulating all MEV node <>
 * node metrics.
 */
export interface MevNodeToNodeMetricsSDKType {
    validator_mev_matches?: ValidatorMevMatchesSDKType;
    clob_mid_prices: ClobMidPriceSDKType[];
    bp_mev_matches?: ValidatorMevMatchesSDKType;
    proposal_receive_time: Long;
}
export declare const MEVMatch: {
    encode(message: MEVMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MEVMatch;
    fromPartial(object: DeepPartial<MEVMatch>): MEVMatch;
};
export declare const MEVLiquidationMatch: {
    encode(message: MEVLiquidationMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MEVLiquidationMatch;
    fromPartial(object: DeepPartial<MEVLiquidationMatch>): MEVLiquidationMatch;
};
export declare const ClobMidPrice: {
    encode(message: ClobMidPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClobMidPrice;
    fromPartial(object: DeepPartial<ClobMidPrice>): ClobMidPrice;
};
export declare const ValidatorMevMatches: {
    encode(message: ValidatorMevMatches, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMevMatches;
    fromPartial(object: DeepPartial<ValidatorMevMatches>): ValidatorMevMatches;
};
export declare const MevNodeToNodeMetrics: {
    encode(message: MevNodeToNodeMetrics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MevNodeToNodeMetrics;
    fromPartial(object: DeepPartial<MevNodeToNodeMetrics>): MevNodeToNodeMetrics;
};
