import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../../helpers.js';
/** Module is the config object of the bank module. */

export interface Module {
  /**
   * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
   * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
   * module_account_permissions
   */
  blockedModuleAccountsOverride: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */

  authority: string;
}
/** Module is the config object of the bank module. */

export interface ModuleSDKType {
  blocked_module_accounts_override: string[];
  authority: string;
}

function createBaseModule(): Module {
  return {
    blockedModuleAccountsOverride: [],
    authority: '',
  };
}

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.blockedModuleAccountsOverride) {
      writer.uint32(10).string(v!);
    }

    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
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
          message.blockedModuleAccountsOverride.push(reader.string());
          break;

        case 2:
          message.authority = reader.string();
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
    message.blockedModuleAccountsOverride =
      object.blockedModuleAccountsOverride?.map((e) => e) || [];
    message.authority = object.authority ?? '';
    return message;
  },
};
