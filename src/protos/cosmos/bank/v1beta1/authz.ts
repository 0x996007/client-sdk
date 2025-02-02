import { Coin, CoinSDKType } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */

export interface SendAuthorization {
  spendLimit: Coin[];
  /**
   * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
   * granter. If omitted, any recipient is allowed.
   *
   * Since: cosmos-sdk 0.47
   */

  allowList: string[];
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */

export interface SendAuthorizationSDKType {
  spend_limit: CoinSDKType[];
  allow_list: string[];
}

function createBaseSendAuthorization(): SendAuthorization {
  return {
    spendLimit: [],
    allowList: [],
  };
}

export const SendAuthorization = {
  encode(
    message: SendAuthorization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.allowList) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.allowList.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SendAuthorization>): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spendLimit =
      object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map((e) => e) || [];
    return message;
  },
};
