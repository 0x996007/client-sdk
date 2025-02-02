/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Params, ParamsSDKType } from './params.js';
import { AccountAuthenticator, AccountAuthenticatorSDKType } from './models.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */

export interface GetAuthenticatorsRequest {
  /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
  account: string;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */

export interface GetAuthenticatorsRequestSDKType {
  account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */

export interface GetAuthenticatorsResponse {
  accountAuthenticators: AccountAuthenticator[];
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */

export interface GetAuthenticatorsResponseSDKType {
  account_authenticators: AccountAuthenticatorSDKType[];
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */

export interface GetAuthenticatorRequest {
  account: string;
  authenticatorId: Long;
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */

export interface GetAuthenticatorRequestSDKType {
  account: string;
  authenticator_id: Long;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */

export interface GetAuthenticatorResponse {
  accountAuthenticator?: AccountAuthenticator;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */

export interface GetAuthenticatorResponseSDKType {
  account_authenticator?: AccountAuthenticatorSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseGetAuthenticatorsRequest(): GetAuthenticatorsRequest {
  return {
    account: '',
  };
}

export const GetAuthenticatorsRequest = {
  encode(
    message: GetAuthenticatorsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthenticatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<GetAuthenticatorsRequest>,
  ): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    message.account = object.account ?? '';
    return message;
  },
};

function createBaseGetAuthenticatorsResponse(): GetAuthenticatorsResponse {
  return {
    accountAuthenticators: [],
  };
}

export const GetAuthenticatorsResponse = {
  encode(
    message: GetAuthenticatorsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accountAuthenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthenticatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticators.push(
            AccountAuthenticator.decode(reader, reader.uint32()),
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<GetAuthenticatorsResponse>,
  ): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators =
      object.accountAuthenticators?.map((e) =>
        AccountAuthenticator.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseGetAuthenticatorRequest(): GetAuthenticatorRequest {
  return {
    account: '',
    authenticatorId: Long.UZERO,
  };
}

export const GetAuthenticatorRequest = {
  encode(
    message: GetAuthenticatorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }

    if (!message.authenticatorId.isZero()) {
      writer.uint32(16).uint64(message.authenticatorId);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthenticatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.authenticatorId = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<GetAuthenticatorRequest>,
  ): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    message.account = object.account ?? '';
    message.authenticatorId =
      object.authenticatorId !== undefined && object.authenticatorId !== null
        ? Long.fromValue(object.authenticatorId)
        : Long.UZERO;
    return message;
  },
};

function createBaseGetAuthenticatorResponse(): GetAuthenticatorResponse {
  return {
    accountAuthenticator: undefined,
  };
}

export const GetAuthenticatorResponse = {
  encode(
    message: GetAuthenticatorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountAuthenticator !== undefined) {
      AccountAuthenticator.encode(
        message.accountAuthenticator,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticator = AccountAuthenticator.decode(
            reader,
            reader.uint32(),
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<GetAuthenticatorResponse>,
  ): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    message.accountAuthenticator =
      object.accountAuthenticator !== undefined &&
      object.accountAuthenticator !== null
        ? AccountAuthenticator.fromPartial(object.accountAuthenticator)
        : undefined;
    return message;
  },
};
