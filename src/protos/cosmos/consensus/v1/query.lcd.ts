/* eslint-disable @typescript-eslint/no-unused-vars */

import { LCDClient } from '@osmonauts/lcd';
import { QueryParamsRequest, QueryParamsResponseSDKType } from './query.js';
export class LCDQueryClient {
  req: LCDClient;

  constructor({ requestClient }: { requestClient: LCDClient }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params queries the parameters of x/consensus module. */

  async params(
    _params: QueryParamsRequest = {},
  ): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/consensus/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}
