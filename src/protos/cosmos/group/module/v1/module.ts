import {
  Duration,
  DurationSDKType,
} from '../../../../google/protobuf/duration.js';
import { Long, DeepPartial } from '../../../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/** Module is the config object of the group module. */

export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod?: Duration;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */

  maxMetadataLen: Long;
}
/** Module is the config object of the group module. */

export interface ModuleSDKType {
  max_execution_period?: DurationSDKType;
  max_metadata_len: Long;
}

function createBaseModule(): Module {
  return {
    maxExecutionPeriod: undefined,
    maxMetadataLen: Long.UZERO,
  };
}

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(
        message.maxExecutionPeriod,
        writer.uint32(10).fork(),
      ).ldelim();
    }

    if (!message.maxMetadataLen.isZero()) {
      writer.uint32(16).uint64(message.maxMetadataLen);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.maxMetadataLen = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.maxExecutionPeriod =
      object.maxExecutionPeriod !== undefined &&
      object.maxExecutionPeriod !== null
        ? Duration.fromPartial(object.maxExecutionPeriod)
        : undefined;
    message.maxMetadataLen =
      object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
        ? Long.fromValue(object.maxMetadataLen)
        : Long.UZERO;
    return message;
  },
};
