/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  PageRequest,
  PageRequestSDKType,
  PageResponse,
  PageResponseSDKType,
} from '../../base/query/v1beta1/pagination.js';
import {
  Permissions,
  PermissionsSDKType,
  GenesisAccountPermissions,
  GenesisAccountPermissionsSDKType,
} from './types.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** QueryAccountRequest is the request type for the Query/Account RPC method. */

export interface QueryAccountRequest {
  address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */

export interface QueryAccountRequestSDKType {
  address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */

export interface AccountResponse {
  permission?: Permissions;
}
/** AccountResponse is the response type for the Query/Account RPC method. */

export interface AccountResponseSDKType {
  permission?: PermissionsSDKType;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */

export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */

export interface QueryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */

export interface AccountsResponse {
  accounts: GenesisAccountPermissions[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */

export interface AccountsResponseSDKType {
  accounts: GenesisAccountPermissionsSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */

export interface QueryDisabledListRequest {}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */

export interface QueryDisabledListRequestSDKType {}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */

export interface DisabledListResponse {
  disabledList: string[];
}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */

export interface DisabledListResponseSDKType {
  disabled_list: string[];
}

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: '',
  };
}

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseAccountResponse(): AccountResponse {
  return {
    permission: undefined,
  };
}

export const AccountResponse = {
  encode(
    message: AccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.permission !== undefined) {
      Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.permission = Permissions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountResponse>): AccountResponse {
    const message = createBaseAccountResponse();
    message.permission =
      object.permission !== undefined && object.permission !== null
        ? Permissions.fromPartial(object.permission)
        : undefined;
    return message;
  },
};

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined,
  };
}

export const QueryAccountsRequest = {
  encode(
    message: QueryAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseAccountsResponse(): AccountsResponse {
  return {
    accounts: [],
    pagination: undefined,
  };
}

export const AccountsResponse = {
  encode(
    message: AccountsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accounts) {
      GenesisAccountPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            GenesisAccountPermissions.decode(reader, reader.uint32()),
          );
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountsResponse>): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => GenesisAccountPermissions.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDisabledListRequest(): QueryDisabledListRequest {
  return {};
}

export const QueryDisabledListRequest = {
  encode(
    _: QueryDisabledListRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDisabledListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisabledListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    _: DeepPartial<QueryDisabledListRequest>,
  ): QueryDisabledListRequest {
    const message = createBaseQueryDisabledListRequest();
    return message;
  },
};

function createBaseDisabledListResponse(): DisabledListResponse {
  return {
    disabledList: [],
  };
}

export const DisabledListResponse = {
  encode(
    message: DisabledListResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.disabledList) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DisabledListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisabledListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.disabledList.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DisabledListResponse>): DisabledListResponse {
    const message = createBaseDisabledListResponse();
    message.disabledList = object.disabledList?.map((e) => e) || [];
    return message;
  },
};
