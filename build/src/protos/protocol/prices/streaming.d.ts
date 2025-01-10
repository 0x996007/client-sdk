import { MarketPrice, MarketPriceSDKType } from './market_price.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** StreamPriceUpdate provides information on a price update. */
export interface StreamPriceUpdate {
    /** The `Id` of the `Market`. */
    marketId: number;
    /** The updated price. */
    price?: MarketPrice;
    /** Snapshot indicates if the response is from a snapshot of the price. */
    snapshot: boolean;
}
/** StreamPriceUpdate provides information on a price update. */
export interface StreamPriceUpdateSDKType {
    market_id: number;
    price?: MarketPriceSDKType;
    snapshot: boolean;
}
export declare const StreamPriceUpdate: {
    encode(message: StreamPriceUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamPriceUpdate;
    fromPartial(object: DeepPartial<StreamPriceUpdate>): StreamPriceUpdate;
};
