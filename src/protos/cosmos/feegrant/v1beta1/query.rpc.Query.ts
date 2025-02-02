import { Rpc } from '../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
  QueryAllowanceRequest,
  QueryAllowanceResponse,
  QueryAllowancesRequest,
  QueryAllowancesResponse,
  QueryAllowancesByGranterRequest,
  QueryAllowancesByGranterResponse,
} from './query.js';
/** Query defines the gRPC querier service. */

export interface Query {
  /** Allowance returns granted allwance to the grantee by the granter. */
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for the given grantee address. */

  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   *
   * Since: cosmos-sdk 0.46
   */

  allowancesByGranter(
    request: QueryAllowancesByGranterRequest,
  ): Promise<QueryAllowancesByGranterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }

  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.feegrant.v1beta1.Query',
      'Allowance',
      data,
    );
    return promise.then((data) =>
      QueryAllowanceResponse.decode(new _m0.Reader(data)),
    );
  }

  allowances(
    request: QueryAllowancesRequest,
  ): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.feegrant.v1beta1.Query',
      'Allowances',
      data,
    );
    return promise.then((data) =>
      QueryAllowancesResponse.decode(new _m0.Reader(data)),
    );
  }

  allowancesByGranter(
    request: QueryAllowancesByGranterRequest,
  ): Promise<QueryAllowancesByGranterResponse> {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.feegrant.v1beta1.Query',
      'AllowancesByGranter',
      data,
    );
    return promise.then((data) =>
      QueryAllowancesByGranterResponse.decode(new _m0.Reader(data)),
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
      return queryService.allowance(request);
    },

    allowances(
      request: QueryAllowancesRequest,
    ): Promise<QueryAllowancesResponse> {
      return queryService.allowances(request);
    },

    allowancesByGranter(
      request: QueryAllowancesByGranterRequest,
    ): Promise<QueryAllowancesByGranterResponse> {
      return queryService.allowancesByGranter(request);
    },
  };
};
