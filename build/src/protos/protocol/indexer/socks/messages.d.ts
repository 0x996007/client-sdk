import { IndexerSubaccountId, IndexerSubaccountIdSDKType } from '../protocol/v1/subaccount.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** TODO(IND-210): Make this proto conform and update downstream indexer logic */
export declare enum CandleMessage_Resolution {
    /**
     * ONE_MINUTE - buf:lint:ignore ENUM_VALUE_PREFIX
     * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
     */
    ONE_MINUTE = 0,
    /** FIVE_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    FIVE_MINUTES = 1,
    /** FIFTEEN_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    FIFTEEN_MINUTES = 2,
    /** THIRTY_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
    THIRTY_MINUTES = 3,
    /** ONE_HOUR - buf:lint:ignore ENUM_VALUE_PREFIX */
    ONE_HOUR = 4,
    /** FOUR_HOURS - buf:lint:ignore ENUM_VALUE_PREFIX */
    FOUR_HOURS = 5,
    /** ONE_DAY - buf:lint:ignore ENUM_VALUE_PREFIX */
    ONE_DAY = 6,
    UNRECOGNIZED = -1
}
export declare const CandleMessage_ResolutionSDKType: typeof CandleMessage_Resolution;
export declare function candleMessage_ResolutionFromJSON(object: any): CandleMessage_Resolution;
export declare function candleMessage_ResolutionToJSON(object: CandleMessage_Resolution): string;
/** Message to be sent through the 'to-websockets-orderbooks` kafka topic. */
export interface OrderbookMessage {
    /** Stringified JSON object of all events to be streamed. */
    contents: string;
    /** Clob pair id of the Orderbook message. */
    clobPairId: string;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-orderbooks` kafka topic. */
export interface OrderbookMessageSDKType {
    contents: string;
    clob_pair_id: string;
    version: string;
}
/** Message to be sent through the 'to-websockets-subaccounts` kafka topic. */
export interface SubaccountMessage {
    /** Block height where the contents occur. */
    blockHeight: string;
    /** Transaction index where the contents occur. */
    transactionIndex: number;
    /** Event index where the contents occur. */
    eventIndex: number;
    /** Stringified JSON object of all events to be streamed. */
    contents: string;
    /** Subaccount id that the content corresponds to. */
    subaccountId?: IndexerSubaccountId;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-subaccounts` kafka topic. */
export interface SubaccountMessageSDKType {
    block_height: string;
    transaction_index: number;
    event_index: number;
    contents: string;
    subaccount_id?: IndexerSubaccountIdSDKType;
    version: string;
}
/** Message to be sent through the 'to-websockets-trades` kafka topic. */
export interface TradeMessage {
    /** Block height where the contents occur. */
    blockHeight: string;
    /** Stringified JSON object of all events to be streamed. */
    contents: string;
    /** Clob pair id of the Trade message. */
    clobPairId: string;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-trades` kafka topic. */
export interface TradeMessageSDKType {
    block_height: string;
    contents: string;
    clob_pair_id: string;
    version: string;
}
/** Message to be sent through the 'to-websockets-markets` kafka topic. */
export interface MarketMessage {
    /** Stringified JSON object of all events to be streamed. */
    contents: string;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-markets` kafka topic. */
export interface MarketMessageSDKType {
    contents: string;
    version: string;
}
/** Message to be sent through the 'to-websockets-candles` kafka topic. */
export interface CandleMessage {
    /** Stringified JSON object of all events to be streamed. */
    contents: string;
    /** Clob pair id of the Candle message. */
    clobPairId: string;
    /** Resolution of the candle update. */
    resolution: CandleMessage_Resolution;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-candles` kafka topic. */
export interface CandleMessageSDKType {
    contents: string;
    clob_pair_id: string;
    resolution: CandleMessage_Resolution;
    version: string;
}
/** Message to be sent through the 'to-websockets-block-height` kafka topic. */
export interface BlockHeightMessage {
    /** Block height where the contents occur. */
    blockHeight: string;
    /** ISO formatted time of the block height. */
    time: string;
    /** Version of the websocket message. */
    version: string;
}
/** Message to be sent through the 'to-websockets-block-height` kafka topic. */
export interface BlockHeightMessageSDKType {
    block_height: string;
    time: string;
    version: string;
}
export declare const OrderbookMessage: {
    encode(message: OrderbookMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderbookMessage;
    fromPartial(object: DeepPartial<OrderbookMessage>): OrderbookMessage;
};
export declare const SubaccountMessage: {
    encode(message: SubaccountMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubaccountMessage;
    fromPartial(object: DeepPartial<SubaccountMessage>): SubaccountMessage;
};
export declare const TradeMessage: {
    encode(message: TradeMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeMessage;
    fromPartial(object: DeepPartial<TradeMessage>): TradeMessage;
};
export declare const MarketMessage: {
    encode(message: MarketMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMessage;
    fromPartial(object: DeepPartial<MarketMessage>): MarketMessage;
};
export declare const CandleMessage: {
    encode(message: CandleMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CandleMessage;
    fromPartial(object: DeepPartial<CandleMessage>): CandleMessage;
};
export declare const BlockHeightMessage: {
    encode(message: BlockHeightMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeightMessage;
    fromPartial(object: DeepPartial<BlockHeightMessage>): BlockHeightMessage;
};
