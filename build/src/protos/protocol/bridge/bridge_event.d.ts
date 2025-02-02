import { Coin, CoinSDKType } from '../../cosmos/base/v1beta1/coin.js';
import { Long, DeepPartial } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/** BridgeEvent is a recognized event from the Ethereum blockchain. */
export interface BridgeEvent {
    /** The unique id of the Ethereum event log. */
    id: number;
    /** The tokens bridged. */
    coin?: Coin;
    /** The account address or module address to bridge to. */
    address: string;
    /** The Ethereum block height of the event. */
    ethBlockHeight: Long;
}
/** BridgeEvent is a recognized event from the Ethereum blockchain. */
export interface BridgeEventSDKType {
    id: number;
    coin?: CoinSDKType;
    address: string;
    eth_block_height: Long;
}
export declare const BridgeEvent: {
    encode(message: BridgeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BridgeEvent;
    fromPartial(object: DeepPartial<BridgeEvent>): BridgeEvent;
};
