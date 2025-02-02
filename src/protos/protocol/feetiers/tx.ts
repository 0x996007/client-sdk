/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PerpetualFeeParams, PerpetualFeeParamsSDKType } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** MsgUpdatePerpetualFeeParams is the Msg/UpdatePerpetualFeeParams request type. */

export interface MsgUpdatePerpetualFeeParams {
  authority: string;
  /** Defines the parameters to update. All parameters must be supplied. */

  params?: PerpetualFeeParams;
}
/** MsgUpdatePerpetualFeeParams is the Msg/UpdatePerpetualFeeParams request type. */

export interface MsgUpdatePerpetualFeeParamsSDKType {
  authority: string;
  params?: PerpetualFeeParamsSDKType;
}
/**
 * MsgUpdatePerpetualFeeParamsResponse is the Msg/UpdatePerpetualFeeParams
 * response type.
 */

export interface MsgUpdatePerpetualFeeParamsResponse {}
/**
 * MsgUpdatePerpetualFeeParamsResponse is the Msg/UpdatePerpetualFeeParams
 * response type.
 */

export interface MsgUpdatePerpetualFeeParamsResponseSDKType {}

function createBaseMsgUpdatePerpetualFeeParams(): MsgUpdatePerpetualFeeParams {
  return {
    authority: '',
    params: undefined,
  };
}

export const MsgUpdatePerpetualFeeParams = {
  encode(
    message: MsgUpdatePerpetualFeeParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }

    if (message.params !== undefined) {
      PerpetualFeeParams.encode(
        message.params,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdatePerpetualFeeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualFeeParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.params = PerpetualFeeParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePerpetualFeeParams>,
  ): MsgUpdatePerpetualFeeParams {
    const message = createBaseMsgUpdatePerpetualFeeParams();
    message.authority = object.authority ?? '';
    message.params =
      object.params !== undefined && object.params !== null
        ? PerpetualFeeParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdatePerpetualFeeParamsResponse(): MsgUpdatePerpetualFeeParamsResponse {
  return {};
}

export const MsgUpdatePerpetualFeeParamsResponse = {
  encode(
    _: MsgUpdatePerpetualFeeParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdatePerpetualFeeParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualFeeParamsResponse();

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
    _: DeepPartial<MsgUpdatePerpetualFeeParamsResponse>,
  ): MsgUpdatePerpetualFeeParamsResponse {
    const message = createBaseMsgUpdatePerpetualFeeParamsResponse();
    return message;
  },
};
