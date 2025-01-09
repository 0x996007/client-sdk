/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Timestamp } from '../../../../google/protobuf/timestamp.js';
import * as _m0 from 'protobufjs/minimal.js';
import {
  DeepPartial,
  Long,
  toTimestamp,
  fromTimestamp,
} from '../../../../helpers.js';
/** ConfigRequest defines the request structure for the Config gRPC query. */

export interface ConfigRequest {}
/** ConfigRequest defines the request structure for the Config gRPC query. */

export interface ConfigRequestSDKType {}
/** ConfigResponse defines the response structure for the Config gRPC query. */

export interface ConfigResponse {
  minimumGasPrice: string;
  /** pruning settings */

  pruningKeepRecent: string;
  pruningInterval: string;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */

export interface ConfigResponseSDKType {
  minimum_gas_price: string;
  pruning_keep_recent: string;
  pruning_interval: string;
}
/** StateRequest defines the request structure for the status of a node. */

export interface StatusRequest {}
/** StateRequest defines the request structure for the status of a node. */

export interface StatusRequestSDKType {}
/** StateResponse defines the response structure for the status of a node. */

export interface StatusResponse {
  /** earliest block height available in the store */
  earliestStoreHeight: Long;
  /** current block height */

  height: Long;
  /** block height timestamp */

  timestamp?: Date;
  /** app hash of the current block */

  appHash: Uint8Array;
  /** validator hash provided by the consensus header */

  validatorHash: Uint8Array;
}
/** StateResponse defines the response structure for the status of a node. */

export interface StatusResponseSDKType {
  earliest_store_height: Long;
  height: Long;
  timestamp?: Date;
  app_hash: Uint8Array;
  validator_hash: Uint8Array;
}

function createBaseConfigRequest(): ConfigRequest {
  return {};
}

export const ConfigRequest = {
  encode(
    _: ConfigRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();

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

  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
};

function createBaseConfigResponse(): ConfigResponse {
  return {
    minimumGasPrice: '',
    pruningKeepRecent: '',
    pruningInterval: '',
  };
}

export const ConfigResponse = {
  encode(
    message: ConfigResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minimumGasPrice !== '') {
      writer.uint32(10).string(message.minimumGasPrice);
    }

    if (message.pruningKeepRecent !== '') {
      writer.uint32(18).string(message.pruningKeepRecent);
    }

    if (message.pruningInterval !== '') {
      writer.uint32(26).string(message.pruningInterval);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;

        case 2:
          message.pruningKeepRecent = reader.string();
          break;

        case 3:
          message.pruningInterval = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? '';
    message.pruningKeepRecent = object.pruningKeepRecent ?? '';
    message.pruningInterval = object.pruningInterval ?? '';
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest = {
  encode(
    _: StatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();

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

  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return {
    earliestStoreHeight: Long.UZERO,
    height: Long.UZERO,
    timestamp: undefined,
    appHash: new Uint8Array(),
    validatorHash: new Uint8Array(),
  };
}

export const StatusResponse = {
  encode(
    message: StatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.earliestStoreHeight.isZero()) {
      writer.uint32(8).uint64(message.earliestStoreHeight);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.appHash.length !== 0) {
      writer.uint32(34).bytes(message.appHash);
    }

    if (message.validatorHash.length !== 0) {
      writer.uint32(42).bytes(message.validatorHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.earliestStoreHeight = reader.uint64() as Long;
          break;

        case 2:
          message.height = reader.uint64() as Long;
          break;

        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;

        case 4:
          message.appHash = reader.bytes();
          break;

        case 5:
          message.validatorHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.earliestStoreHeight =
      object.earliestStoreHeight !== undefined &&
      object.earliestStoreHeight !== null
        ? Long.fromValue(object.earliestStoreHeight)
        : Long.UZERO;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.timestamp = object.timestamp ?? undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    message.validatorHash = object.validatorHash ?? new Uint8Array();
    return message;
  },
};
