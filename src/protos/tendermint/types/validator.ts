/* eslint-disable @typescript-eslint/no-explicit-any */

import { PublicKey, PublicKeySDKType } from '../crypto/keys.js';
import { Long, DeepPartial } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
/** BlockIdFlag indicates which BlockID the signature is for */

export enum BlockIDFlag {
  /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
  BLOCK_ID_FLAG_UNKNOWN = 0,

  /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,

  /** BLOCK_ID_FLAG_NIL - voted for nil */
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
export const BlockIDFlagSDKType = BlockIDFlag;
export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case 'BLOCK_ID_FLAG_UNKNOWN':
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

    case 1:
    case 'BLOCK_ID_FLAG_ABSENT':
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;

    case 2:
    case 'BLOCK_ID_FLAG_COMMIT':
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;

    case 3:
    case 'BLOCK_ID_FLAG_NIL':
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return 'BLOCK_ID_FLAG_UNKNOWN';

    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return 'BLOCK_ID_FLAG_ABSENT';

    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return 'BLOCK_ID_FLAG_COMMIT';

    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return 'BLOCK_ID_FLAG_NIL';

    case BlockIDFlag.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: Long;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer?: ValidatorSDKType;
  total_voting_power: Long;
}
export interface Validator {
  address: Uint8Array;
  pubKey?: PublicKey;
  votingPower: Long;
  proposerPriority: Long;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key?: PublicKeySDKType;
  voting_power: Long;
  proposer_priority: Long;
}
export interface SimpleValidator {
  pubKey?: PublicKey;
  votingPower: Long;
}
export interface SimpleValidatorSDKType {
  pub_key?: PublicKeySDKType;
  voting_power: Long;
}

function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined,
    totalVotingPower: Long.ZERO,
  };
}

export const ValidatorSet = {
  encode(
    message: ValidatorSet,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.totalVotingPower = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators =
      object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.proposer =
      object.proposer !== undefined && object.proposer !== null
        ? Validator.fromPartial(object.proposer)
        : undefined;
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO;
    return message;
  },
};

function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    pubKey: undefined,
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO,
  };
}

export const Validator = {
  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }

    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingPower = reader.int64() as Long;
          break;

        case 4:
          message.proposerPriority = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    message.proposerPriority =
      object.proposerPriority !== undefined && object.proposerPriority !== null
        ? Long.fromValue(object.proposerPriority)
        : Long.ZERO;
    return message;
  },
};

function createBaseSimpleValidator(): SimpleValidator {
  return {
    pubKey: undefined,
    votingPower: Long.ZERO,
  };
}

export const SimpleValidator = {
  encode(
    message: SimpleValidator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.votingPower = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    return message;
  },
};
