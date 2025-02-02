import {
  Params,
  ParamsSDKType,
  Metadata,
  MetadataSDKType,
  SendEnabled,
  SendEnabledSDKType,
} from './bank.js';
import { Coin, CoinSDKType } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/** GenesisState defines the bank module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** balances is an array containing the balances of all the accounts. */

  balances: Balance[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */

  supply: Coin[];
  /** denom_metadata defines the metadata of the different coins. */

  denomMetadata: Metadata[];
  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   *
   * Since: cosmos-sdk 0.47
   */

  sendEnabled: SendEnabled[];
}
/** GenesisState defines the bank module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  balances: BalanceSDKType[];
  supply: CoinSDKType[];
  denom_metadata: MetadataSDKType[];
  send_enabled: SendEnabledSDKType[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */

export interface Balance {
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */

  coins: Coin[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */

export interface BalanceSDKType {
  address: string;
  coins: CoinSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denomMetadata: [],
    sendEnabled: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.denomMetadata) {
      Metadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;

        case 5:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.balances =
      object.balances?.map((e) => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    message.denomMetadata =
      object.denomMetadata?.map((e) => Metadata.fromPartial(e)) || [];
    message.sendEnabled =
      object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBalance(): Balance {
  return {
    address: '',
    coins: [],
  };
}

export const Balance = {
  encode(
    message: Balance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? '';
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
