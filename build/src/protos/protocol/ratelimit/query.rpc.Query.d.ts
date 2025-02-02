import { Rpc } from '../../helpers.js';
import { QueryClient } from '@cosmjs/stargate';
import { ListLimitParamsRequest, ListLimitParamsResponse, QueryCapacityByDenomRequest, QueryCapacityByDenomResponse, QueryAllPendingSendPacketsRequest, QueryAllPendingSendPacketsResponse } from './query.js';
/** Query defines the gRPC querier service. */
export interface Query {
    /** List all limit params. */
    listLimitParams(request?: ListLimitParamsRequest): Promise<ListLimitParamsResponse>;
    /** Query capacity by denom. */
    capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse>;
    /** Get all pending send packets */
    allPendingSendPackets(request?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    listLimitParams(request?: ListLimitParamsRequest): Promise<ListLimitParamsResponse>;
    capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse>;
    allPendingSendPackets(request?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    listLimitParams(request?: ListLimitParamsRequest): Promise<ListLimitParamsResponse>;
    capacityByDenom(request: QueryCapacityByDenomRequest): Promise<QueryCapacityByDenomResponse>;
    allPendingSendPackets(request?: QueryAllPendingSendPacketsRequest): Promise<QueryAllPendingSendPacketsResponse>;
};
