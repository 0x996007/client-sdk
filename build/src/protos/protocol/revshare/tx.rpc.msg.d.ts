import { Rpc } from '../../helpers.js';
import { MsgSetMarketMapperRevenueShare, MsgSetMarketMapperRevenueShareResponse, MsgSetMarketMapperRevShareDetailsForMarket, MsgSetMarketMapperRevShareDetailsForMarketResponse, MsgUpdateUnconditionalRevShareConfig, MsgUpdateUnconditionalRevShareConfigResponse } from './tx.js';
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * SetMarketMapperRevenueShare sets the revenue share for a market
     * mapper.
     */
    setMarketMapperRevenueShare(request: MsgSetMarketMapperRevenueShare): Promise<MsgSetMarketMapperRevenueShareResponse>;
    /**
     * SetMarketMapperRevenueShareDetails sets the revenue share details for a
     * market mapper.
     */
    setMarketMapperRevShareDetailsForMarket(request: MsgSetMarketMapperRevShareDetailsForMarket): Promise<MsgSetMarketMapperRevShareDetailsForMarketResponse>;
    /** UpdateUnconditionalRevShareConfig sets the unconditional revshare config */
    updateUnconditionalRevShareConfig(request: MsgUpdateUnconditionalRevShareConfig): Promise<MsgUpdateUnconditionalRevShareConfigResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setMarketMapperRevenueShare(request: MsgSetMarketMapperRevenueShare): Promise<MsgSetMarketMapperRevenueShareResponse>;
    setMarketMapperRevShareDetailsForMarket(request: MsgSetMarketMapperRevShareDetailsForMarket): Promise<MsgSetMarketMapperRevShareDetailsForMarketResponse>;
    updateUnconditionalRevShareConfig(request: MsgUpdateUnconditionalRevShareConfig): Promise<MsgUpdateUnconditionalRevShareConfigResponse>;
}
