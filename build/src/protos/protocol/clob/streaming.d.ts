import { StreamOrderbookFill, StreamOrderbookFillSDKType, StreamOrderbookUpdate, StreamOrderbookUpdateSDKType } from './query.js';
import { StreamSubaccountUpdate, StreamSubaccountUpdateSDKType } from '../subaccounts/streaming.js';
import { StreamPriceUpdate, StreamPriceUpdateSDKType } from '../prices/streaming.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEvent {
    orderFill?: StreamOrderbookFill;
    subaccountUpdate?: StreamSubaccountUpdate;
    orderbookUpdate?: StreamOrderbookUpdate;
    priceUpdate?: StreamPriceUpdate;
}
/** StagedFinalizeBlockEvent is an event staged during `FinalizeBlock`. */
export interface StagedFinalizeBlockEventSDKType {
    order_fill?: StreamOrderbookFillSDKType;
    subaccount_update?: StreamSubaccountUpdateSDKType;
    orderbook_update?: StreamOrderbookUpdateSDKType;
    price_update?: StreamPriceUpdateSDKType;
}
export declare const StagedFinalizeBlockEvent: {
    encode(message: StagedFinalizeBlockEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StagedFinalizeBlockEvent;
    fromPartial(object: DeepPartial<StagedFinalizeBlockEvent>): StagedFinalizeBlockEvent;
};
