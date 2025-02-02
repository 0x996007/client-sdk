import { Minter, MinterSDKType, Params, ParamsSDKType } from './mint.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** GenesisState defines the mint module's genesis state. */

export interface GenesisState {
  /** minter is a space for holding current inflation information. */
  minter?: Minter;
  /** params defines all the parameters of the module. */

  params?: Params;
}
/** GenesisState defines the mint module's genesis state. */

export interface GenesisStateSDKType {
  minter?: MinterSDKType;
  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    minter: undefined,
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter =
      object.minter !== undefined && object.minter !== null
        ? Minter.fromPartial(object.minter)
        : undefined;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
