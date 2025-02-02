import { IndexerSubaccountId, IndexerSubaccountIdSDKType, IndexerPerpetualPosition, IndexerPerpetualPositionSDKType, IndexerAssetPosition, IndexerAssetPositionSDKType } from '../protocol/v1/subaccount.js';
import { IndexerOrder, IndexerOrderSDKType, IndexerOrderId, IndexerOrderIdSDKType, ClobPairStatus } from '../protocol/v1/clob.js';
import { OrderRemovalReason } from '../shared/removal_reason.js';
import { PerpetualMarketType } from '../protocol/v1/perpetual.js';
import { VaultStatus } from '../protocol/v1/vault.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../../helpers.js';
/** Type is the type for funding values. */
export declare enum FundingEventV1_Type {
    /** TYPE_UNSPECIFIED - Unspecified type. */
    TYPE_UNSPECIFIED = 0,
    /**
     * TYPE_PREMIUM_SAMPLE - Premium sample is the combined value from all premium votes during a
     * `funding-sample` epoch.
     */
    TYPE_PREMIUM_SAMPLE = 1,
    /**
     * TYPE_FUNDING_RATE_AND_INDEX - Funding rate is the final funding rate combining all premium samples
     * during a `funding-tick` epoch.
     */
    TYPE_FUNDING_RATE_AND_INDEX = 2,
    /**
     * TYPE_PREMIUM_VOTE - TODO(DEC-1513): Investigate whether premium vote values need to be
     * sent to indexer.
     */
    TYPE_PREMIUM_VOTE = 3,
    UNRECOGNIZED = -1
}
export declare const FundingEventV1_TypeSDKType: typeof FundingEventV1_Type;
export declare function fundingEventV1_TypeFromJSON(object: any): FundingEventV1_Type;
export declare function fundingEventV1_TypeToJSON(object: FundingEventV1_Type): string;
/**
 * FundingUpdate is used for funding update events and includes a funding
 * value and an optional funding index that correspond to a perpetual market.
 */
export interface FundingUpdateV1 {
    /** The id of the perpetual market. */
    perpetualId: number;
    /**
     * funding value (in parts-per-million) can be premium vote, premium sample,
     * or funding rate.
     */
    fundingValuePpm: number;
    /**
     * funding index is required if and only if parent `FundingEvent` type is
     * `TYPE_FUNDING_RATE_AND_INDEX`.
     */
    fundingIndex: Uint8Array;
}
/**
 * FundingUpdate is used for funding update events and includes a funding
 * value and an optional funding index that correspond to a perpetual market.
 */
export interface FundingUpdateV1SDKType {
    perpetual_id: number;
    funding_value_ppm: number;
    funding_index: Uint8Array;
}
/**
 * FundingEvent message contains a list of per-market funding values. The
 * funding values in the list is of the same type and the types are: which can
 * have one of the following types:
 * 1. Premium vote: votes on the premium values injected by block proposers.
 * 2. Premium sample: combined value from all premium votes during a
 *    `funding-sample` epoch.
 * 3. Funding rate and index: final funding rate combining all premium samples
 *    during a `funding-tick` epoch and funding index accordingly updated with
 *    `funding rate * price`.
 */
export interface FundingEventV1 {
    /**
     * updates is a list of per-market funding updates for all existing perpetual
     * markets. The list is sorted by `perpetualId`s which are unique.
     */
    updates: FundingUpdateV1[];
    /** type stores the type of funding updates. */
    type: FundingEventV1_Type;
}
/**
 * FundingEvent message contains a list of per-market funding values. The
 * funding values in the list is of the same type and the types are: which can
 * have one of the following types:
 * 1. Premium vote: votes on the premium values injected by block proposers.
 * 2. Premium sample: combined value from all premium votes during a
 *    `funding-sample` epoch.
 * 3. Funding rate and index: final funding rate combining all premium samples
 *    during a `funding-tick` epoch and funding index accordingly updated with
 *    `funding rate * price`.
 */
export interface FundingEventV1SDKType {
    updates: FundingUpdateV1SDKType[];
    type: FundingEventV1_Type;
}
/**
 * MarketEvent message contains all the information about a market event on
 * the dYdX chain.
 */
export interface MarketEventV1 {
    /** market id. */
    marketId: number;
    priceUpdate?: MarketPriceUpdateEventV1;
    marketCreate?: MarketCreateEventV1;
    marketModify?: MarketModifyEventV1;
}
/**
 * MarketEvent message contains all the information about a market event on
 * the dYdX chain.
 */
export interface MarketEventV1SDKType {
    market_id: number;
    price_update?: MarketPriceUpdateEventV1SDKType;
    market_create?: MarketCreateEventV1SDKType;
    market_modify?: MarketModifyEventV1SDKType;
}
/**
 * MarketPriceUpdateEvent message contains all the information about a price
 * update on the dYdX chain.
 */
export interface MarketPriceUpdateEventV1 {
    /**
     * price_with_exponent. Multiply by 10 ^ Exponent to get the human readable
     * price in dollars. For example if `Exponent == -5` then a `exponent_price`
     * of `1,000,000,000` represents “$10,000`.
     */
    priceWithExponent: Long;
}
/**
 * MarketPriceUpdateEvent message contains all the information about a price
 * update on the dYdX chain.
 */
export interface MarketPriceUpdateEventV1SDKType {
    price_with_exponent: Long;
}
/** shared fields between MarketCreateEvent and MarketModifyEvent */
export interface MarketBaseEventV1 {
    /** String representation of the market pair, e.g. `BTC-USD` */
    pair: string;
    /**
     * The minimum allowable change in the Price value for a given update.
     * Measured as 1e-6.
     */
    minPriceChangePpm: number;
}
/** shared fields between MarketCreateEvent and MarketModifyEvent */
export interface MarketBaseEventV1SDKType {
    pair: string;
    min_price_change_ppm: number;
}
/**
 * MarketCreateEvent message contains all the information about a new market on
 * the dYdX chain.
 */
export interface MarketCreateEventV1 {
    base?: MarketBaseEventV1;
    /**
     * Static value. The exponent of the price.
     * For example if Exponent == -5 then a `exponent_price` of 1,000,000,000
     * represents $10,000. Therefore 10 ^ Exponent represents the smallest
     * price step (in dollars) that can be recorded.
     */
    exponent: number;
}
/**
 * MarketCreateEvent message contains all the information about a new market on
 * the dYdX chain.
 */
export interface MarketCreateEventV1SDKType {
    base?: MarketBaseEventV1SDKType;
    exponent: number;
}
/**
 * MarketModifyEvent message contains all the information about a market update
 * on the dYdX chain
 */
export interface MarketModifyEventV1 {
    /**
     * MarketModifyEvent message contains all the information about a market update
     * on the dYdX chain
     */
    base?: MarketBaseEventV1;
}
/**
 * MarketModifyEvent message contains all the information about a market update
 * on the dYdX chain
 */
export interface MarketModifyEventV1SDKType {
    base?: MarketBaseEventV1SDKType;
}
/** SourceOfFunds is the source of funds in a transfer event. */
export interface SourceOfFunds {
    subaccountId?: IndexerSubaccountId;
    address?: string;
}
/** SourceOfFunds is the source of funds in a transfer event. */
export interface SourceOfFundsSDKType {
    subaccount_id?: IndexerSubaccountIdSDKType;
    address?: string;
}
/**
 * TransferEvent message contains all the information about a transfer,
 * deposit-to-subaccount, or withdraw-from-subaccount on the dYdX chain.
 * When a subaccount is involved, a SubaccountUpdateEvent message will
 * be produced with the updated asset positions.
 */
export interface TransferEventV1 {
    senderSubaccountId?: IndexerSubaccountId;
    recipientSubaccountId?: IndexerSubaccountId;
    /** Id of the asset transfered. */
    assetId: number;
    /** The amount of asset in quantums to transfer. */
    amount: Long;
    /**
     * The sender is one of below
     * - a subaccount ID (in transfer and withdraw events).
     * - a wallet address (in deposit events).
     */
    sender?: SourceOfFunds;
    /**
     * The recipient is one of below
     * - a subaccount ID (in transfer and deposit events).
     * - a wallet address (in withdraw events).
     */
    recipient?: SourceOfFunds;
}
/**
 * TransferEvent message contains all the information about a transfer,
 * deposit-to-subaccount, or withdraw-from-subaccount on the dYdX chain.
 * When a subaccount is involved, a SubaccountUpdateEvent message will
 * be produced with the updated asset positions.
 */
export interface TransferEventV1SDKType {
    sender_subaccount_id?: IndexerSubaccountIdSDKType;
    recipient_subaccount_id?: IndexerSubaccountIdSDKType;
    asset_id: number;
    amount: Long;
    sender?: SourceOfFundsSDKType;
    recipient?: SourceOfFundsSDKType;
}
/**
 * OrderFillEvent message contains all the information from an order match in
 * the dYdX chain. This includes the maker/taker orders that matched and the
 * amount filled.
 */
export interface OrderFillEventV1 {
    makerOrder?: IndexerOrder;
    order?: IndexerOrder;
    liquidationOrder?: LiquidationOrderV1;
    /** Fill amount in base quantums. */
    fillAmount: Long;
    /** Maker fee in USDC quantums. */
    makerFee: Long;
    /**
     * Taker fee in USDC quantums. If the taker order is a liquidation, then this
     * represents the special liquidation fee, not the standard taker fee.
     */
    takerFee: Long;
    /** Total filled of the maker order in base quantums. */
    totalFilledMaker: Long;
    /** Total filled of the taker order in base quantums. */
    totalFilledTaker: Long;
    /** rev share for affiliates in USDC quantums. */
    affiliateRevShare: Long;
}
/**
 * OrderFillEvent message contains all the information from an order match in
 * the dYdX chain. This includes the maker/taker orders that matched and the
 * amount filled.
 */
export interface OrderFillEventV1SDKType {
    maker_order?: IndexerOrderSDKType;
    order?: IndexerOrderSDKType;
    liquidation_order?: LiquidationOrderV1SDKType;
    fill_amount: Long;
    maker_fee: Long;
    taker_fee: Long;
    total_filled_maker: Long;
    total_filled_taker: Long;
    affiliate_rev_share: Long;
}
/**
 * DeleveragingEvent message contains all the information for a deleveraging
 * on the dYdX chain. This includes the liquidated/offsetting subaccounts and
 * the amount filled.
 */
export interface DeleveragingEventV1 {
    /** ID of the subaccount that was liquidated. */
    liquidated?: IndexerSubaccountId;
    /** ID of the subaccount that was used to offset the position. */
    offsetting?: IndexerSubaccountId;
    /** The ID of the perpetual that was liquidated. */
    perpetualId: number;
    /**
     * The amount filled between the liquidated and offsetting position, in
     * base quantums.
     */
    fillAmount: Long;
    /** Total quote quantums filled. */
    totalQuoteQuantums: Long;
    /** `true` if liquidating a short position, `false` otherwise. */
    isBuy: boolean;
    /**
     * `true` if the deleveraging event is for final settlement, indicating
     * the match occurred at the oracle price rather than bankruptcy price.
     * When this flag is `false`, the fill price is the bankruptcy price
     * of the liquidated subaccount.
     */
    isFinalSettlement: boolean;
}
/**
 * DeleveragingEvent message contains all the information for a deleveraging
 * on the dYdX chain. This includes the liquidated/offsetting subaccounts and
 * the amount filled.
 */
export interface DeleveragingEventV1SDKType {
    liquidated?: IndexerSubaccountIdSDKType;
    offsetting?: IndexerSubaccountIdSDKType;
    perpetual_id: number;
    fill_amount: Long;
    total_quote_quantums: Long;
    is_buy: boolean;
    is_final_settlement: boolean;
}
/**
 * LiquidationOrder represents the liquidation taker order to be included in a
 * liquidation order fill event.
 */
export interface LiquidationOrderV1 {
    /** ID of the subaccount that was liquidated. */
    liquidated?: IndexerSubaccountId;
    /** The ID of the clob pair involved in the liquidation. */
    clobPairId: number;
    /** The ID of the perpetual involved in the liquidation. */
    perpetualId: number;
    /**
     * The total size of the liquidation order including any unfilled size,
     * in base quantums.
     */
    totalSize: Long;
    /** `true` if liquidating a short position, `false` otherwise. */
    isBuy: boolean;
    /**
     * The fillable price in subticks.
     * This represents the lower-price-bound for liquidating longs
     * and the upper-price-bound for liquidating shorts.
     * Must be a multiple of ClobPair.SubticksPerTick
     * (where `ClobPair.Id = orderId.ClobPairId`).
     */
    subticks: Long;
}
/**
 * LiquidationOrder represents the liquidation taker order to be included in a
 * liquidation order fill event.
 */
export interface LiquidationOrderV1SDKType {
    liquidated?: IndexerSubaccountIdSDKType;
    clob_pair_id: number;
    perpetual_id: number;
    total_size: Long;
    is_buy: boolean;
    subticks: Long;
}
/**
 * SubaccountUpdateEvent message contains information about an update to a
 * subaccount in the dYdX chain. This includes the list of updated perpetual
 * and asset positions for the subaccount.
 * Note: This event message will contain all the updates to a subaccount
 * at the end of a block which is why multiple asset/perpetual position
 * updates may exist.
 */
export interface SubaccountUpdateEventV1 {
    subaccountId?: IndexerSubaccountId;
    updatedPerpetualPositions: IndexerPerpetualPosition[];
    updatedAssetPositions: IndexerAssetPosition[];
}
/**
 * SubaccountUpdateEvent message contains information about an update to a
 * subaccount in the dYdX chain. This includes the list of updated perpetual
 * and asset positions for the subaccount.
 * Note: This event message will contain all the updates to a subaccount
 * at the end of a block which is why multiple asset/perpetual position
 * updates may exist.
 */
export interface SubaccountUpdateEventV1SDKType {
    subaccount_id?: IndexerSubaccountIdSDKType;
    updated_perpetual_positions: IndexerPerpetualPositionSDKType[];
    updated_asset_positions: IndexerAssetPositionSDKType[];
}
/**
 * StatefulOrderEvent message contains information about a change to a stateful
 * order. Currently, this is either the placement of a long-term order, the
 * placement or triggering of a conditional order, or the removal of a
 * stateful order.
 */
export interface StatefulOrderEventV1 {
    /** @deprecated */
    orderPlace?: StatefulOrderEventV1_StatefulOrderPlacementV1;
    orderRemoval?: StatefulOrderEventV1_StatefulOrderRemovalV1;
    conditionalOrderPlacement?: StatefulOrderEventV1_ConditionalOrderPlacementV1;
    conditionalOrderTriggered?: StatefulOrderEventV1_ConditionalOrderTriggeredV1;
    longTermOrderPlacement?: StatefulOrderEventV1_LongTermOrderPlacementV1;
    orderReplacement?: StatefulOrderEventV1_LongTermOrderReplacementV1;
}
/**
 * StatefulOrderEvent message contains information about a change to a stateful
 * order. Currently, this is either the placement of a long-term order, the
 * placement or triggering of a conditional order, or the removal of a
 * stateful order.
 */
export interface StatefulOrderEventV1SDKType {
    /** @deprecated */
    order_place?: StatefulOrderEventV1_StatefulOrderPlacementV1SDKType;
    order_removal?: StatefulOrderEventV1_StatefulOrderRemovalV1SDKType;
    conditional_order_placement?: StatefulOrderEventV1_ConditionalOrderPlacementV1SDKType;
    conditional_order_triggered?: StatefulOrderEventV1_ConditionalOrderTriggeredV1SDKType;
    long_term_order_placement?: StatefulOrderEventV1_LongTermOrderPlacementV1SDKType;
    order_replacement?: StatefulOrderEventV1_LongTermOrderReplacementV1SDKType;
}
/**
 * A stateful order placement contains an order.
 * Deprecated in favor of LongTermOrderPlacementV1.
 */
export interface StatefulOrderEventV1_StatefulOrderPlacementV1 {
    order?: IndexerOrder;
}
/**
 * A stateful order placement contains an order.
 * Deprecated in favor of LongTermOrderPlacementV1.
 */
export interface StatefulOrderEventV1_StatefulOrderPlacementV1SDKType {
    order?: IndexerOrderSDKType;
}
/**
 * A stateful order removal contains the id of an order that was already
 * placed and is now removed and the reason for the removal.
 */
export interface StatefulOrderEventV1_StatefulOrderRemovalV1 {
    removedOrderId?: IndexerOrderId;
    reason: OrderRemovalReason;
}
/**
 * A stateful order removal contains the id of an order that was already
 * placed and is now removed and the reason for the removal.
 */
export interface StatefulOrderEventV1_StatefulOrderRemovalV1SDKType {
    removed_order_id?: IndexerOrderIdSDKType;
    reason: OrderRemovalReason;
}
/**
 * A conditional order placement contains an order. The order is newly-placed
 * and untriggered when this event is emitted.
 */
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1 {
    order?: IndexerOrder;
}
/**
 * A conditional order placement contains an order. The order is newly-placed
 * and untriggered when this event is emitted.
 */
export interface StatefulOrderEventV1_ConditionalOrderPlacementV1SDKType {
    order?: IndexerOrderSDKType;
}
/**
 * A conditional order trigger event contains an order id and is emitted when
 * an order is triggered.
 */
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1 {
    triggeredOrderId?: IndexerOrderId;
}
/**
 * A conditional order trigger event contains an order id and is emitted when
 * an order is triggered.
 */
export interface StatefulOrderEventV1_ConditionalOrderTriggeredV1SDKType {
    triggered_order_id?: IndexerOrderIdSDKType;
}
/** A long term order placement contains an order. */
export interface StatefulOrderEventV1_LongTermOrderPlacementV1 {
    order?: IndexerOrder;
}
/** A long term order placement contains an order. */
export interface StatefulOrderEventV1_LongTermOrderPlacementV1SDKType {
    order?: IndexerOrderSDKType;
}
/** A long term order replacement contains an old order ID and the new order. */
export interface StatefulOrderEventV1_LongTermOrderReplacementV1 {
    /** vault replaces orders with a different order ID */
    oldOrderId?: IndexerOrderId;
    order?: IndexerOrder;
}
/** A long term order replacement contains an old order ID and the new order. */
export interface StatefulOrderEventV1_LongTermOrderReplacementV1SDKType {
    old_order_id?: IndexerOrderIdSDKType;
    order?: IndexerOrderSDKType;
}
/**
 * AssetCreateEventV1 message contains all the information about an new Asset on
 * the dYdX chain.
 */
export interface AssetCreateEventV1 {
    /** Unique, sequentially-generated. */
    id: number;
    /**
     * The human readable symbol of the `Asset` (e.g. `USDC`, `ATOM`).
     * Must be uppercase, unique and correspond to the canonical symbol of the
     * full coin.
     */
    symbol: string;
    /** `true` if this `Asset` has a valid `MarketId` value. */
    hasMarket: boolean;
    /**
     * The `Id` of the `Market` associated with this `Asset`. It acts as the
     * oracle price for the purposes of calculating collateral
     * and margin requirements.
     */
    marketId: number;
    /**
     * The exponent for converting an atomic amount (1 'quantum')
     * to a full coin. For example, if `atomic_resolution = -8`
     * then an `asset_position` with `base_quantums = 1e8` is equivalent to
     * a position size of one full coin.
     */
    atomicResolution: number;
}
/**
 * AssetCreateEventV1 message contains all the information about an new Asset on
 * the dYdX chain.
 */
export interface AssetCreateEventV1SDKType {
    id: number;
    symbol: string;
    has_market: boolean;
    market_id: number;
    atomic_resolution: number;
}
/**
 * PerpetualMarketCreateEventV1 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. See PerpetualMarketCreateEventV2 for the most up to date message
 * for the event to create a new Perpetual Market.
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV1 {
    /**
     * Unique Perpetual id.
     * Defined in perpetuals.perpetual
     */
    id: number;
    /**
     * Unique clob pair Id associated with this perpetual market
     * Defined in clob.clob_pair
     */
    clobPairId: number;
    /**
     * The name of the `Perpetual` (e.g. `BTC-USD`).
     * Defined in perpetuals.perpetual
     */
    ticker: string;
    /**
     * Unique id of market param associated with this perpetual market.
     * Defined in perpetuals.perpetual
     */
    marketId: number;
    /** Status of the CLOB */
    status: ClobPairStatus;
    /**
     * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
     * per Subtick.
     * Defined in clob.clob_pair
     */
    quantumConversionExponent: number;
    /**
     * The exponent for converting an atomic amount (`size = 1`)
     * to a full coin. For example, if `AtomicResolution = -8`
     * then a `PerpetualPosition` with `size = 1e8` is equivalent to
     * a position size of one full coin.
     * Defined in perpetuals.perpetual
     */
    atomicResolution: number;
    /**
     * Defines the tick size of the orderbook by defining how many subticks
     * are in one tick. That is, the subticks of any valid order must be a
     * multiple of this value. Generally this value should start `>= 100`to
     * allow room for decreasing it.
     * Defined in clob.clob_pair
     */
    subticksPerTick: number;
    /**
     * Minimum increment in the size of orders on the CLOB, in base quantums.
     * Defined in clob.clob_pair
     */
    stepBaseQuantums: Long;
    /**
     * The liquidity_tier that this perpetual is associated with.
     * Defined in perpetuals.perpetual
     */
    liquidityTier: number;
}
/**
 * PerpetualMarketCreateEventV1 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 * Deprecated. See PerpetualMarketCreateEventV2 for the most up to date message
 * for the event to create a new Perpetual Market.
 */
/** @deprecated */
export interface PerpetualMarketCreateEventV1SDKType {
    id: number;
    clob_pair_id: number;
    ticker: string;
    market_id: number;
    status: ClobPairStatus;
    quantum_conversion_exponent: number;
    atomic_resolution: number;
    subticks_per_tick: number;
    step_base_quantums: Long;
    liquidity_tier: number;
}
/**
 * PerpetualMarketCreateEventV2 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 */
export interface PerpetualMarketCreateEventV2 {
    /**
     * Unique Perpetual id.
     * Defined in perpetuals.perpetual
     */
    id: number;
    /**
     * Unique clob pair Id associated with this perpetual market
     * Defined in clob.clob_pair
     */
    clobPairId: number;
    /**
     * The name of the `Perpetual` (e.g. `BTC-USD`).
     * Defined in perpetuals.perpetual
     */
    ticker: string;
    /**
     * Unique id of market param associated with this perpetual market.
     * Defined in perpetuals.perpetual
     */
    marketId: number;
    /** Status of the CLOB */
    status: ClobPairStatus;
    /**
     * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
     * per Subtick.
     * Defined in clob.clob_pair
     */
    quantumConversionExponent: number;
    /**
     * The exponent for converting an atomic amount (`size = 1`)
     * to a full coin. For example, if `AtomicResolution = -8`
     * then a `PerpetualPosition` with `size = 1e8` is equivalent to
     * a position size of one full coin.
     * Defined in perpetuals.perpetual
     */
    atomicResolution: number;
    /**
     * Defines the tick size of the orderbook by defining how many subticks
     * are in one tick. That is, the subticks of any valid order must be a
     * multiple of this value. Generally this value should start `>= 100`to
     * allow room for decreasing it.
     * Defined in clob.clob_pair
     */
    subticksPerTick: number;
    /**
     * Minimum increment in the size of orders on the CLOB, in base quantums.
     * Defined in clob.clob_pair
     */
    stepBaseQuantums: Long;
    /**
     * The liquidity_tier that this perpetual is associated with.
     * Defined in perpetuals.perpetual
     */
    liquidityTier: number;
    /** Market type of the perpetual. */
    marketType: PerpetualMarketType;
}
/**
 * PerpetualMarketCreateEventV2 message contains all the information about a
 * new Perpetual Market on the dYdX chain.
 */
export interface PerpetualMarketCreateEventV2SDKType {
    id: number;
    clob_pair_id: number;
    ticker: string;
    market_id: number;
    status: ClobPairStatus;
    quantum_conversion_exponent: number;
    atomic_resolution: number;
    subticks_per_tick: number;
    step_base_quantums: Long;
    liquidity_tier: number;
    market_type: PerpetualMarketType;
}
/**
 * LiquidityTierUpsertEventV1 message contains all the information to
 * create/update a Liquidity Tier on the dYdX chain.
 */
export interface LiquidityTierUpsertEventV1 {
    /** Unique id. */
    id: number;
    /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
    name: string;
    /**
     * The margin fraction needed to open a position.
     * In parts-per-million.
     */
    initialMarginPpm: number;
    /**
     * The fraction of the initial-margin that the maintenance-margin is,
     * e.g. 50%. In parts-per-million.
     */
    maintenanceFractionPpm: number;
    /**
     * The maximum position size at which the margin requirements are
     * not increased over the default values. Above this position size,
     * the margin requirements increase at a rate of sqrt(size).
     *
     * Deprecated since v3.x.
     */
    /** @deprecated */
    basePositionNotional: Long;
}
/**
 * LiquidityTierUpsertEventV1 message contains all the information to
 * create/update a Liquidity Tier on the dYdX chain.
 */
export interface LiquidityTierUpsertEventV1SDKType {
    id: number;
    name: string;
    initial_margin_ppm: number;
    maintenance_fraction_ppm: number;
    /** @deprecated */
    base_position_notional: Long;
}
/**
 * UpdateClobPairEventV1 message contains all the information about an update to
 * a clob pair on the dYdX chain.
 */
export interface UpdateClobPairEventV1 {
    /**
     * Unique clob pair Id associated with this perpetual market
     * Defined in clob.clob_pair
     */
    clobPairId: number;
    /** Status of the CLOB */
    status: ClobPairStatus;
    /**
     * `10^Exponent` gives the number of QuoteQuantums traded per BaseQuantum
     * per Subtick.
     * Defined in clob.clob_pair
     */
    quantumConversionExponent: number;
    /**
     * Defines the tick size of the orderbook by defining how many subticks
     * are in one tick. That is, the subticks of any valid order must be a
     * multiple of this value. Generally this value should start `>= 100`to
     * allow room for decreasing it.
     * Defined in clob.clob_pair
     */
    subticksPerTick: number;
    /**
     * Minimum increment in the size of orders on the CLOB, in base quantums.
     * Defined in clob.clob_pair
     */
    stepBaseQuantums: Long;
}
/**
 * UpdateClobPairEventV1 message contains all the information about an update to
 * a clob pair on the dYdX chain.
 */
export interface UpdateClobPairEventV1SDKType {
    clob_pair_id: number;
    status: ClobPairStatus;
    quantum_conversion_exponent: number;
    subticks_per_tick: number;
    step_base_quantums: Long;
}
/**
 * UpdatePerpetualEventV1 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. See UpdatePerpetualEventV2 for the most up to date message
 * for the event to update a perpetual.
 */
/** @deprecated */
export interface UpdatePerpetualEventV1 {
    /**
     * Unique Perpetual id.
     * Defined in perpetuals.perpetual
     */
    id: number;
    /**
     * The name of the `Perpetual` (e.g. `BTC-USD`).
     * Defined in perpetuals.perpetual
     */
    ticker: string;
    /**
     * Unique id of market param associated with this perpetual market.
     * Defined in perpetuals.perpetual
     */
    marketId: number;
    /**
     * The exponent for converting an atomic amount (`size = 1`)
     * to a full coin. For example, if `AtomicResolution = -8`
     * then a `PerpetualPosition` with `size = 1e8` is equivalent to
     * a position size of one full coin.
     * Defined in perpetuals.perpetual
     */
    atomicResolution: number;
    /**
     * The liquidity_tier that this perpetual is associated with.
     * Defined in perpetuals.perpetual
     */
    liquidityTier: number;
}
/**
 * UpdatePerpetualEventV1 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 * Deprecated. See UpdatePerpetualEventV2 for the most up to date message
 * for the event to update a perpetual.
 */
/** @deprecated */
export interface UpdatePerpetualEventV1SDKType {
    id: number;
    ticker: string;
    market_id: number;
    atomic_resolution: number;
    liquidity_tier: number;
}
/**
 * UpdatePerpetualEventV2 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 */
export interface UpdatePerpetualEventV2 {
    /**
     * Unique Perpetual id.
     * Defined in perpetuals.perpetual
     */
    id: number;
    /**
     * The name of the `Perpetual` (e.g. `BTC-USD`).
     * Defined in perpetuals.perpetual
     */
    ticker: string;
    /**
     * Unique id of market param associated with this perpetual market.
     * Defined in perpetuals.perpetual
     */
    marketId: number;
    /**
     * The exponent for converting an atomic amount (`size = 1`)
     * to a full coin. For example, if `AtomicResolution = -8`
     * then a `PerpetualPosition` with `size = 1e8` is equivalent to
     * a position size of one full coin.
     * Defined in perpetuals.perpetual
     */
    atomicResolution: number;
    /**
     * The liquidity_tier that this perpetual is associated with.
     * Defined in perpetuals.perpetual
     */
    liquidityTier: number;
    /** Market type of the perpetual. */
    marketType: PerpetualMarketType;
}
/**
 * UpdatePerpetualEventV2 message contains all the information about an update
 * to a perpetual on the dYdX chain.
 */
export interface UpdatePerpetualEventV2SDKType {
    id: number;
    ticker: string;
    market_id: number;
    atomic_resolution: number;
    liquidity_tier: number;
    market_type: PerpetualMarketType;
}
/**
 * TradingRewardsEventV1 is communicates all trading rewards for all accounts
 * that receive trade rewards in the block.
 */
export interface TradingRewardsEventV1 {
    /** The list of all trading rewards in the block. */
    tradingRewards: AddressTradingReward[];
}
/**
 * TradingRewardsEventV1 is communicates all trading rewards for all accounts
 * that receive trade rewards in the block.
 */
export interface TradingRewardsEventV1SDKType {
    trading_rewards: AddressTradingRewardSDKType[];
}
/**
 * AddressTradingReward contains info on an instance of an address receiving a
 * reward
 */
export interface AddressTradingReward {
    /** The address of the wallet that will receive the trading reward. */
    owner: string;
    /**
     * The amount of trading rewards earned by the address above in denoms. 1e18
     * denoms is equivalent to a single coin.
     */
    denomAmount: Uint8Array;
}
/**
 * AddressTradingReward contains info on an instance of an address receiving a
 * reward
 */
export interface AddressTradingRewardSDKType {
    owner: string;
    denom_amount: Uint8Array;
}
/**
 * OpenInterestUpdateEventV1 is used for open interest update events
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateEventV1 {
    openInterestUpdates: OpenInterestUpdate[];
}
/**
 * OpenInterestUpdateEventV1 is used for open interest update events
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateEventV1SDKType {
    open_interest_updates: OpenInterestUpdateSDKType[];
}
/**
 * OpenInterestUpdate contains a single open interest update for a perpetual
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdate {
    perpetualId: number;
    /** The new open interest value for the perpetual market. */
    openInterest: Uint8Array;
}
/**
 * OpenInterestUpdate contains a single open interest update for a perpetual
 * Deprecated.
 */
/** @deprecated */
export interface OpenInterestUpdateSDKType {
    perpetual_id: number;
    open_interest: Uint8Array;
}
/**
 * LiquidationEventV2 message contains all the information needed to update
 * the liquidity tiers. It contains all the fields from V1 along with the
 * open interest caps.
 */
export interface LiquidityTierUpsertEventV2 {
    /** Unique id. */
    id: number;
    /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
    name: string;
    /**
     * The margin fraction needed to open a position.
     * In parts-per-million.
     */
    initialMarginPpm: number;
    /**
     * The fraction of the initial-margin that the maintenance-margin is,
     * e.g. 50%. In parts-per-million.
     */
    maintenanceFractionPpm: number;
    /**
     * The maximum position size at which the margin requirements are
     * not increased over the default values. Above this position size,
     * the margin requirements increase at a rate of sqrt(size).
     *
     * Deprecated since v3.x.
     */
    /** @deprecated */
    basePositionNotional: Long;
    /** Lower cap of open interest in quote quantums. optional */
    openInterestLowerCap: Long;
    /** Upper cap of open interest in quote quantums. */
    openInterestUpperCap: Long;
}
/**
 * LiquidationEventV2 message contains all the information needed to update
 * the liquidity tiers. It contains all the fields from V1 along with the
 * open interest caps.
 */
export interface LiquidityTierUpsertEventV2SDKType {
    id: number;
    name: string;
    initial_margin_ppm: number;
    maintenance_fraction_ppm: number;
    /** @deprecated */
    base_position_notional: Long;
    open_interest_lower_cap: Long;
    open_interest_upper_cap: Long;
}
/** Event emitted when a referee is registered with an affiliate. */
export interface RegisterAffiliateEventV1 {
    /** Address of the referee being registered. */
    referee: string;
    /** Address of the affiliate associated with the referee. */
    affiliate: string;
}
/** Event emitted when a referee is registered with an affiliate. */
export interface RegisterAffiliateEventV1SDKType {
    referee: string;
    affiliate: string;
}
/** Event emitted when a vault is created / updated. */
export interface UpsertVaultEventV1 {
    /** Address of the vault. */
    address: string;
    /** Clob pair Id associated with the vault. */
    clobPairId: number;
    /** Status of the vault. */
    status: VaultStatus;
}
/** Event emitted when a vault is created / updated. */
export interface UpsertVaultEventV1SDKType {
    address: string;
    clob_pair_id: number;
    status: VaultStatus;
}
export declare const FundingUpdateV1: {
    encode(message: FundingUpdateV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingUpdateV1;
    fromPartial(object: DeepPartial<FundingUpdateV1>): FundingUpdateV1;
};
export declare const FundingEventV1: {
    encode(message: FundingEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FundingEventV1;
    fromPartial(object: DeepPartial<FundingEventV1>): FundingEventV1;
};
export declare const MarketEventV1: {
    encode(message: MarketEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketEventV1;
    fromPartial(object: DeepPartial<MarketEventV1>): MarketEventV1;
};
export declare const MarketPriceUpdateEventV1: {
    encode(message: MarketPriceUpdateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketPriceUpdateEventV1;
    fromPartial(object: DeepPartial<MarketPriceUpdateEventV1>): MarketPriceUpdateEventV1;
};
export declare const MarketBaseEventV1: {
    encode(message: MarketBaseEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketBaseEventV1;
    fromPartial(object: DeepPartial<MarketBaseEventV1>): MarketBaseEventV1;
};
export declare const MarketCreateEventV1: {
    encode(message: MarketCreateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketCreateEventV1;
    fromPartial(object: DeepPartial<MarketCreateEventV1>): MarketCreateEventV1;
};
export declare const MarketModifyEventV1: {
    encode(message: MarketModifyEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketModifyEventV1;
    fromPartial(object: DeepPartial<MarketModifyEventV1>): MarketModifyEventV1;
};
export declare const SourceOfFunds: {
    encode(message: SourceOfFunds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceOfFunds;
    fromPartial(object: DeepPartial<SourceOfFunds>): SourceOfFunds;
};
export declare const TransferEventV1: {
    encode(message: TransferEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferEventV1;
    fromPartial(object: DeepPartial<TransferEventV1>): TransferEventV1;
};
export declare const OrderFillEventV1: {
    encode(message: OrderFillEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderFillEventV1;
    fromPartial(object: DeepPartial<OrderFillEventV1>): OrderFillEventV1;
};
export declare const DeleveragingEventV1: {
    encode(message: DeleveragingEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleveragingEventV1;
    fromPartial(object: DeepPartial<DeleveragingEventV1>): DeleveragingEventV1;
};
export declare const LiquidationOrderV1: {
    encode(message: LiquidationOrderV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationOrderV1;
    fromPartial(object: DeepPartial<LiquidationOrderV1>): LiquidationOrderV1;
};
export declare const SubaccountUpdateEventV1: {
    encode(message: SubaccountUpdateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountUpdateEventV1;
    fromPartial(object: DeepPartial<SubaccountUpdateEventV1>): SubaccountUpdateEventV1;
};
export declare const StatefulOrderEventV1: {
    encode(message: StatefulOrderEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1>): StatefulOrderEventV1;
};
export declare const StatefulOrderEventV1_StatefulOrderPlacementV1: {
    encode(message: StatefulOrderEventV1_StatefulOrderPlacementV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_StatefulOrderPlacementV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_StatefulOrderPlacementV1>): StatefulOrderEventV1_StatefulOrderPlacementV1;
};
export declare const StatefulOrderEventV1_StatefulOrderRemovalV1: {
    encode(message: StatefulOrderEventV1_StatefulOrderRemovalV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_StatefulOrderRemovalV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_StatefulOrderRemovalV1>): StatefulOrderEventV1_StatefulOrderRemovalV1;
};
export declare const StatefulOrderEventV1_ConditionalOrderPlacementV1: {
    encode(message: StatefulOrderEventV1_ConditionalOrderPlacementV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_ConditionalOrderPlacementV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_ConditionalOrderPlacementV1>): StatefulOrderEventV1_ConditionalOrderPlacementV1;
};
export declare const StatefulOrderEventV1_ConditionalOrderTriggeredV1: {
    encode(message: StatefulOrderEventV1_ConditionalOrderTriggeredV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_ConditionalOrderTriggeredV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_ConditionalOrderTriggeredV1>): StatefulOrderEventV1_ConditionalOrderTriggeredV1;
};
export declare const StatefulOrderEventV1_LongTermOrderPlacementV1: {
    encode(message: StatefulOrderEventV1_LongTermOrderPlacementV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_LongTermOrderPlacementV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_LongTermOrderPlacementV1>): StatefulOrderEventV1_LongTermOrderPlacementV1;
};
export declare const StatefulOrderEventV1_LongTermOrderReplacementV1: {
    encode(message: StatefulOrderEventV1_LongTermOrderReplacementV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatefulOrderEventV1_LongTermOrderReplacementV1;
    fromPartial(object: DeepPartial<StatefulOrderEventV1_LongTermOrderReplacementV1>): StatefulOrderEventV1_LongTermOrderReplacementV1;
};
export declare const AssetCreateEventV1: {
    encode(message: AssetCreateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetCreateEventV1;
    fromPartial(object: DeepPartial<AssetCreateEventV1>): AssetCreateEventV1;
};
export declare const PerpetualMarketCreateEventV1: {
    encode(message: PerpetualMarketCreateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketCreateEventV1;
    fromPartial(object: DeepPartial<PerpetualMarketCreateEventV1>): PerpetualMarketCreateEventV1;
};
export declare const PerpetualMarketCreateEventV2: {
    encode(message: PerpetualMarketCreateEventV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketCreateEventV2;
    fromPartial(object: DeepPartial<PerpetualMarketCreateEventV2>): PerpetualMarketCreateEventV2;
};
export declare const LiquidityTierUpsertEventV1: {
    encode(message: LiquidityTierUpsertEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityTierUpsertEventV1;
    fromPartial(object: DeepPartial<LiquidityTierUpsertEventV1>): LiquidityTierUpsertEventV1;
};
export declare const UpdateClobPairEventV1: {
    encode(message: UpdateClobPairEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClobPairEventV1;
    fromPartial(object: DeepPartial<UpdateClobPairEventV1>): UpdateClobPairEventV1;
};
export declare const UpdatePerpetualEventV1: {
    encode(message: UpdatePerpetualEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePerpetualEventV1;
    fromPartial(object: DeepPartial<UpdatePerpetualEventV1>): UpdatePerpetualEventV1;
};
export declare const UpdatePerpetualEventV2: {
    encode(message: UpdatePerpetualEventV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePerpetualEventV2;
    fromPartial(object: DeepPartial<UpdatePerpetualEventV2>): UpdatePerpetualEventV2;
};
export declare const TradingRewardsEventV1: {
    encode(message: TradingRewardsEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardsEventV1;
    fromPartial(object: DeepPartial<TradingRewardsEventV1>): TradingRewardsEventV1;
};
export declare const AddressTradingReward: {
    encode(message: AddressTradingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressTradingReward;
    fromPartial(object: DeepPartial<AddressTradingReward>): AddressTradingReward;
};
export declare const OpenInterestUpdateEventV1: {
    encode(message: OpenInterestUpdateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterestUpdateEventV1;
    fromPartial(object: DeepPartial<OpenInterestUpdateEventV1>): OpenInterestUpdateEventV1;
};
export declare const OpenInterestUpdate: {
    encode(message: OpenInterestUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterestUpdate;
    fromPartial(object: DeepPartial<OpenInterestUpdate>): OpenInterestUpdate;
};
export declare const LiquidityTierUpsertEventV2: {
    encode(message: LiquidityTierUpsertEventV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityTierUpsertEventV2;
    fromPartial(object: DeepPartial<LiquidityTierUpsertEventV2>): LiquidityTierUpsertEventV2;
};
export declare const RegisterAffiliateEventV1: {
    encode(message: RegisterAffiliateEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAffiliateEventV1;
    fromPartial(object: DeepPartial<RegisterAffiliateEventV1>): RegisterAffiliateEventV1;
};
export declare const UpsertVaultEventV1: {
    encode(message: UpsertVaultEventV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertVaultEventV1;
    fromPartial(object: DeepPartial<UpsertVaultEventV1>): UpsertVaultEventV1;
};
