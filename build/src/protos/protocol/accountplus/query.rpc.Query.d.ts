import { Rpc } from '../../helpers.js';
import { QueryClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, GetAuthenticatorRequest, GetAuthenticatorResponse, GetAuthenticatorsRequest, GetAuthenticatorsResponse } from './query.js';
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a single authenticator by account and authenticator ID. */
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    /** Queries all authenticators for a given account. */
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse>;
    getAuthenticators(request: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponse>;
};
