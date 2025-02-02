import { Rpc } from '../../helpers.js';
import { MsgProposedOperations, MsgProposedOperationsResponse, MsgPlaceOrder, MsgPlaceOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgBatchCancel, MsgBatchCancelResponse, MsgCreateClobPair, MsgCreateClobPairResponse, MsgUpdateClobPair, MsgUpdateClobPairResponse, MsgUpdateEquityTierLimitConfiguration, MsgUpdateEquityTierLimitConfigurationResponse, MsgUpdateBlockRateLimitConfiguration, MsgUpdateBlockRateLimitConfigurationResponse, MsgUpdateLiquidationsConfig, MsgUpdateLiquidationsConfigResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * ProposedOperations is a temporary message used by block proposers
     * for matching orders as part of the ABCI++ workaround.
     */
    proposedOperations(request: MsgProposedOperations): Promise<MsgProposedOperationsResponse>;
    /** PlaceOrder allows accounts to place orders on the orderbook. */
    placeOrder(request: MsgPlaceOrder): Promise<MsgPlaceOrderResponse>;
    /** CancelOrder allows accounts to cancel existing orders on the orderbook. */
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    /** BatchCancel allows accounts to cancel a batch of orders on the orderbook. */
    batchCancel(request: MsgBatchCancel): Promise<MsgBatchCancelResponse>;
    /** CreateClobPair creates a new clob pair. */
    createClobPair(request: MsgCreateClobPair): Promise<MsgCreateClobPairResponse>;
    /**
     * UpdateClobPair sets the status of a clob pair. Should return an error
     * if the authority is not in the clob keeper's set of authorities,
     * if the ClobPair id is not found in state, or if the update includes
     * an unsupported status transition.
     */
    updateClobPair(request: MsgUpdateClobPair): Promise<MsgUpdateClobPairResponse>;
    /**
     * UpdateEquityTierLimitConfiguration updates the equity tier limit
     * configuration in state.
     */
    updateEquityTierLimitConfiguration(request: MsgUpdateEquityTierLimitConfiguration): Promise<MsgUpdateEquityTierLimitConfigurationResponse>;
    /**
     * UpdateBlockRateLimitConfiguration updates the block rate limit
     * configuration in state.
     */
    updateBlockRateLimitConfiguration(request: MsgUpdateBlockRateLimitConfiguration): Promise<MsgUpdateBlockRateLimitConfigurationResponse>;
    /** UpdateLiquidationsConfig updates the liquidations configuration in state. */
    updateLiquidationsConfig(request: MsgUpdateLiquidationsConfig): Promise<MsgUpdateLiquidationsConfigResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    proposedOperations(request: MsgProposedOperations): Promise<MsgProposedOperationsResponse>;
    placeOrder(request: MsgPlaceOrder): Promise<MsgPlaceOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    batchCancel(request: MsgBatchCancel): Promise<MsgBatchCancelResponse>;
    createClobPair(request: MsgCreateClobPair): Promise<MsgCreateClobPairResponse>;
    updateClobPair(request: MsgUpdateClobPair): Promise<MsgUpdateClobPairResponse>;
    updateEquityTierLimitConfiguration(request: MsgUpdateEquityTierLimitConfiguration): Promise<MsgUpdateEquityTierLimitConfigurationResponse>;
    updateBlockRateLimitConfiguration(request: MsgUpdateBlockRateLimitConfiguration): Promise<MsgUpdateBlockRateLimitConfigurationResponse>;
    updateLiquidationsConfig(request: MsgUpdateLiquidationsConfig): Promise<MsgUpdateLiquidationsConfigResponse>;
}
