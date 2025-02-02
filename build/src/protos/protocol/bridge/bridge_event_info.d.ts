import { Long, DeepPartial } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/**
 * BridgeEventInfo stores information about the most recently processed bridge
 * event.
 */
export interface BridgeEventInfo {
    /**
     * The next event id (the last processed id plus one) of the logs from the
     * Ethereum contract.
     */
    nextId: number;
    /** The Ethereum block height of the most recently processed bridge event. */
    ethBlockHeight: Long;
}
/**
 * BridgeEventInfo stores information about the most recently processed bridge
 * event.
 */
export interface BridgeEventInfoSDKType {
    next_id: number;
    eth_block_height: Long;
}
export declare const BridgeEventInfo: {
    encode(message: BridgeEventInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BridgeEventInfo;
    fromPartial(object: DeepPartial<BridgeEventInfo>): BridgeEventInfo;
};
