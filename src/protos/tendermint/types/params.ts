import { Duration, DurationSDKType } from '../../google/protobuf/duration.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

export interface ConsensusParams {
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
  abci?: ABCIParams;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

export interface ConsensusParamsSDKType {
  block?: BlockParamsSDKType;
  evidence?: EvidenceParamsSDKType;
  validator?: ValidatorParamsSDKType;
  version?: VersionParamsSDKType;
  abci?: ABCIParamsSDKType;
}
/** BlockParams contains limits on the block size. */

export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  maxBytes: Long;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */

  maxGas: Long;
}
/** BlockParams contains limits on the block size. */

export interface BlockParamsSDKType {
  max_bytes: Long;
  max_gas: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */

export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   *
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  maxAgeNumBlocks: Long;
  /**
   * Max age of evidence, in time.
   *
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */

  maxAgeDuration?: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */

  maxBytes: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */

export interface EvidenceParamsSDKType {
  max_age_num_blocks: Long;
  max_age_duration?: DurationSDKType;
  max_bytes: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

export interface ValidatorParams {
  pubKeyTypes: string[];
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

export interface ValidatorParamsSDKType {
  pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */

export interface VersionParams {
  app: Long;
}
/** VersionParams contains the ABCI application version. */

export interface VersionParamsSDKType {
  app: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */

export interface HashedParams {
  blockMaxBytes: Long;
  blockMaxGas: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */

export interface HashedParamsSDKType {
  block_max_bytes: Long;
  block_max_gas: Long;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */

export interface ABCIParams {
  /**
   * vote_extensions_enable_height configures the first height during which
   * vote extensions will be enabled. During this specified height, and for all
   * subsequent heights, precommit messages that do not contain valid extension data
   * will be considered invalid. Prior to this height, vote extensions will not
   * be used or accepted by validators on the network.
   *
   * Once enabled, vote extensions will be created by the application in ExtendVote,
   * passed to the application for validation in VerifyVoteExtension and given
   * to the application to use when proposing a block during PrepareProposal.
   */
  voteExtensionsEnableHeight: Long;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */

export interface ABCIParamsSDKType {
  vote_extensions_enable_height: Long;
}

function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined,
    abci: undefined,
  };
}

export const ConsensusParams = {
  encode(
    message: ConsensusParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    if (message.evidence !== undefined) {
      EvidenceParams.encode(
        message.evidence,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    if (message.validator !== undefined) {
      ValidatorParams.encode(
        message.validator,
        writer.uint32(26).fork(),
      ).ldelim();
    }

    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }

    if (message.abci !== undefined) {
      ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;

        case 5:
          message.abci = ABCIParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block =
      object.block !== undefined && object.block !== null
        ? BlockParams.fromPartial(object.block)
        : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceParams.fromPartial(object.evidence)
        : undefined;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? ValidatorParams.fromPartial(object.validator)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? VersionParams.fromPartial(object.version)
        : undefined;
    message.abci =
      object.abci !== undefined && object.abci !== null
        ? ABCIParams.fromPartial(object.abci)
        : undefined;
    return message;
  },
};

function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: Long.ZERO,
    maxGas: Long.ZERO,
  };
}

export const BlockParams = {
  encode(
    message: BlockParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }

    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64() as Long;
          break;

        case 2:
          message.maxGas = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null
        ? Long.fromValue(object.maxBytes)
        : Long.ZERO;
    message.maxGas =
      object.maxGas !== undefined && object.maxGas !== null
        ? Long.fromValue(object.maxGas)
        : Long.ZERO;
    return message;
  },
};

function createBaseEvidenceParams(): EvidenceParams {
  return {
    maxAgeNumBlocks: Long.ZERO,
    maxAgeDuration: undefined,
    maxBytes: Long.ZERO,
  };
}

export const EvidenceParams = {
  encode(
    message: EvidenceParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }

    if (message.maxAgeDuration !== undefined) {
      Duration.encode(
        message.maxAgeDuration,
        writer.uint32(18).fork(),
      ).ldelim();
    }

    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64() as Long;
          break;

        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxBytes = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks =
      object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null
        ? Long.fromValue(object.maxAgeNumBlocks)
        : Long.ZERO;
    message.maxAgeDuration =
      object.maxAgeDuration !== undefined && object.maxAgeDuration !== null
        ? Duration.fromPartial(object.maxAgeDuration)
        : undefined;
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null
        ? Long.fromValue(object.maxBytes)
        : Long.ZERO;
    return message;
  },
};

function createBaseValidatorParams(): ValidatorParams {
  return {
    pubKeyTypes: [],
  };
}

export const ValidatorParams = {
  encode(
    message: ValidatorParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseVersionParams(): VersionParams {
  return {
    app: Long.UZERO,
  };
}

export const VersionParams = {
  encode(
    message: VersionParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.app = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.app =
      object.app !== undefined && object.app !== null
        ? Long.fromValue(object.app)
        : Long.UZERO;
    return message;
  },
};

function createBaseHashedParams(): HashedParams {
  return {
    blockMaxBytes: Long.ZERO,
    blockMaxGas: Long.ZERO,
  };
}

export const HashedParams = {
  encode(
    message: HashedParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }

    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64() as Long;
          break;

        case 2:
          message.blockMaxGas = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.blockMaxBytes =
      object.blockMaxBytes !== undefined && object.blockMaxBytes !== null
        ? Long.fromValue(object.blockMaxBytes)
        : Long.ZERO;
    message.blockMaxGas =
      object.blockMaxGas !== undefined && object.blockMaxGas !== null
        ? Long.fromValue(object.blockMaxGas)
        : Long.ZERO;
    return message;
  },
};

function createBaseABCIParams(): ABCIParams {
  return {
    voteExtensionsEnableHeight: Long.ZERO,
  };
}

export const ABCIParams = {
  encode(
    message: ABCIParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.voteExtensionsEnableHeight.isZero()) {
      writer.uint32(8).int64(message.voteExtensionsEnableHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voteExtensionsEnableHeight = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ABCIParams>): ABCIParams {
    const message = createBaseABCIParams();
    message.voteExtensionsEnableHeight =
      object.voteExtensionsEnableHeight !== undefined &&
      object.voteExtensionsEnableHeight !== null
        ? Long.fromValue(object.voteExtensionsEnableHeight)
        : Long.ZERO;
    return message;
  },
};
