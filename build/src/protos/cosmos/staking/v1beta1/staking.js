/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from '../../../tendermint/types/types.js';
import { Timestamp } from '../../../google/protobuf/timestamp.js';
import { Any } from '../../../google/protobuf/any.js';
import { Duration, } from '../../../google/protobuf/duration.js';
import { Coin } from '../../base/v1beta1/coin.js';
import { ValidatorUpdate, } from '../../../tendermint/abci/types.js';
import * as _m0 from 'protobufjs/minimal.js';
import { toTimestamp, fromTimestamp, Long, } from '../../../helpers.js';
/** BondStatus is the status of a validator. */
export var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));
export const BondStatusSDKType = BondStatus;
export function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'BOND_STATUS_UNSPECIFIED':
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case 'BOND_STATUS_UNBONDED':
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case 'BOND_STATUS_UNBONDING':
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case 'BOND_STATUS_BONDED':
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
export function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return 'BOND_STATUS_UNSPECIFIED';
        case BondStatus.BOND_STATUS_UNBONDED:
            return 'BOND_STATUS_UNBONDED';
        case BondStatus.BOND_STATUS_UNBONDING:
            return 'BOND_STATUS_UNBONDING';
        case BondStatus.BOND_STATUS_BONDED:
            return 'BOND_STATUS_BONDED';
        case BondStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** Infraction indicates the infraction a validator commited. */
export var Infraction;
(function (Infraction) {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
    Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Infraction || (Infraction = {}));
export const InfractionSDKType = Infraction;
export function infractionFromJSON(object) {
    switch (object) {
        case 0:
        case 'INFRACTION_UNSPECIFIED':
            return Infraction.INFRACTION_UNSPECIFIED;
        case 1:
        case 'INFRACTION_DOUBLE_SIGN':
            return Infraction.INFRACTION_DOUBLE_SIGN;
        case 2:
        case 'INFRACTION_DOWNTIME':
            return Infraction.INFRACTION_DOWNTIME;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Infraction.UNRECOGNIZED;
    }
}
export function infractionToJSON(object) {
    switch (object) {
        case Infraction.INFRACTION_UNSPECIFIED:
            return 'INFRACTION_UNSPECIFIED';
        case Infraction.INFRACTION_DOUBLE_SIGN:
            return 'INFRACTION_DOUBLE_SIGN';
        case Infraction.INFRACTION_DOWNTIME:
            return 'INFRACTION_DOWNTIME';
        case Infraction.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseHistoricalInfo() {
    return {
        header: undefined,
        valset: [],
    };
}
export const HistoricalInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header =
            object.header !== undefined && object.header !== null
                ? Header.fromPartial(object.header)
                : undefined;
        message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommissionRates() {
    return {
        rate: '',
        maxRate: '',
        maxChangeRate: '',
    };
}
export const CommissionRates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rate !== '') {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== '') {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== '') {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.maxRate = reader.string();
                    break;
                case 3:
                    message.maxChangeRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? '';
        message.maxRate = object.maxRate ?? '';
        message.maxChangeRate = object.maxChangeRate ?? '';
        return message;
    },
};
function createBaseCommission() {
    return {
        commissionRates: undefined,
        updateTime: undefined,
    };
}
export const Commission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commissionRates !== undefined) {
            CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates =
            object.commissionRates !== undefined && object.commissionRates !== null
                ? CommissionRates.fromPartial(object.commissionRates)
                : undefined;
        message.updateTime = object.updateTime ?? undefined;
        return message;
    },
};
function createBaseDescription() {
    return {
        moniker: '',
        identity: '',
        website: '',
        securityContact: '',
        details: '',
    };
}
export const Description = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moniker !== '') {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== '') {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== '') {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== '') {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== '') {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? '';
        message.identity = object.identity ?? '';
        message.website = object.website ?? '';
        message.securityContact = object.securityContact ?? '';
        message.details = object.details ?? '';
        return message;
    },
};
function createBaseValidator() {
    return {
        operatorAddress: '',
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: '',
        delegatorShares: '',
        description: undefined,
        unbondingHeight: Long.ZERO,
        unbondingTime: undefined,
        commission: undefined,
        minSelfDelegation: '',
        unbondingOnHoldRefCount: Long.ZERO,
        unbondingIds: [],
    };
}
export const Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operatorAddress !== '') {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== '') {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== '') {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbondingHeight.isZero()) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== '') {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        if (!message.unbondingOnHoldRefCount.isZero()) {
            writer.uint32(96).int64(message.unbondingOnHoldRefCount);
        }
        writer.uint32(106).fork();
        for (const v of message.unbondingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                case 12:
                    message.unbondingOnHoldRefCount = reader.int64();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unbondingIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.unbondingIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? '';
        message.consensusPubkey =
            object.consensusPubkey !== undefined && object.consensusPubkey !== null
                ? Any.fromPartial(object.consensusPubkey)
                : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? '';
        message.delegatorShares = object.delegatorShares ?? '';
        message.description =
            object.description !== undefined && object.description !== null
                ? Description.fromPartial(object.description)
                : undefined;
        message.unbondingHeight =
            object.unbondingHeight !== undefined && object.unbondingHeight !== null
                ? Long.fromValue(object.unbondingHeight)
                : Long.ZERO;
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission =
            object.commission !== undefined && object.commission !== null
                ? Commission.fromPartial(object.commission)
                : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? '';
        message.unbondingOnHoldRefCount =
            object.unbondingOnHoldRefCount !== undefined &&
                object.unbondingOnHoldRefCount !== null
                ? Long.fromValue(object.unbondingOnHoldRefCount)
                : Long.ZERO;
        message.unbondingIds =
            object.unbondingIds?.map((e) => Long.fromValue(e)) || [];
        return message;
    },
};
function createBaseValAddresses() {
    return {
        addresses: [],
    };
}
export const ValAddresses = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map((e) => e) || [];
        return message;
    },
};
function createBaseDVPair() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
    };
}
export const DVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        return message;
    },
};
function createBaseDVPairs() {
    return {
        pairs: [],
    };
}
export const DVPairs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(DVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: '',
        validatorSrcAddress: '',
        validatorDstAddress: '',
    };
}
export const DVVTriplet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== '') {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== '') {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorSrcAddress = object.validatorSrcAddress ?? '';
        message.validatorDstAddress = object.validatorDstAddress ?? '';
        return message;
    },
};
function createBaseDVVTriplets() {
    return {
        triplets: [],
    };
}
export const DVVTriplets = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.triplets) {
            DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets =
            object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelegation() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
        shares: '',
    };
}
export const Delegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== '') {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.shares = object.shares ?? '';
        return message;
    },
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
        entries: [],
    };
}
export const UnbondingDelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.entries =
            object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: Long.ZERO,
        completionTime: undefined,
        initialBalance: '',
        balance: '',
        unbondingId: Long.UZERO,
        unbondingOnHoldRefCount: Long.ZERO,
    };
}
export const UnbondingDelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== '') {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== '') {
            writer.uint32(34).string(message.balance);
        }
        if (!message.unbondingId.isZero()) {
            writer.uint32(40).uint64(message.unbondingId);
        }
        if (!message.unbondingOnHoldRefCount.isZero()) {
            writer.uint32(48).int64(message.unbondingOnHoldRefCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                case 5:
                    message.unbondingId = reader.uint64();
                    break;
                case 6:
                    message.unbondingOnHoldRefCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight =
            object.creationHeight !== undefined && object.creationHeight !== null
                ? Long.fromValue(object.creationHeight)
                : Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? '';
        message.balance = object.balance ?? '';
        message.unbondingId =
            object.unbondingId !== undefined && object.unbondingId !== null
                ? Long.fromValue(object.unbondingId)
                : Long.UZERO;
        message.unbondingOnHoldRefCount =
            object.unbondingOnHoldRefCount !== undefined &&
                object.unbondingOnHoldRefCount !== null
                ? Long.fromValue(object.unbondingOnHoldRefCount)
                : Long.ZERO;
        return message;
    },
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: Long.ZERO,
        completionTime: undefined,
        initialBalance: '',
        sharesDst: '',
        unbondingId: Long.UZERO,
        unbondingOnHoldRefCount: Long.ZERO,
    };
}
export const RedelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creationHeight.isZero()) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== '') {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== '') {
            writer.uint32(34).string(message.sharesDst);
        }
        if (!message.unbondingId.isZero()) {
            writer.uint32(40).uint64(message.unbondingId);
        }
        if (!message.unbondingOnHoldRefCount.isZero()) {
            writer.uint32(48).int64(message.unbondingOnHoldRefCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = reader.string();
                    break;
                case 5:
                    message.unbondingId = reader.uint64();
                    break;
                case 6:
                    message.unbondingOnHoldRefCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight =
            object.creationHeight !== undefined && object.creationHeight !== null
                ? Long.fromValue(object.creationHeight)
                : Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? '';
        message.sharesDst = object.sharesDst ?? '';
        message.unbondingId =
            object.unbondingId !== undefined && object.unbondingId !== null
                ? Long.fromValue(object.unbondingId)
                : Long.UZERO;
        message.unbondingOnHoldRefCount =
            object.unbondingOnHoldRefCount !== undefined &&
                object.unbondingOnHoldRefCount !== null
                ? Long.fromValue(object.unbondingOnHoldRefCount)
                : Long.ZERO;
        return message;
    },
};
function createBaseRedelegation() {
    return {
        delegatorAddress: '',
        validatorSrcAddress: '',
        validatorDstAddress: '',
        entries: [],
    };
}
export const Redelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== '') {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== '') {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorSrcAddress = object.validatorSrcAddress ?? '';
        message.validatorDstAddress = object.validatorDstAddress ?? '';
        message.entries =
            object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        unbondingTime: undefined,
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: '',
        minCommissionRate: '',
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbondingTime !== undefined) {
            Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== '') {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== '') {
            writer.uint32(50).string(message.minCommissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingTime = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 6:
                    message.minCommissionRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbondingTime =
            object.unbondingTime !== undefined && object.unbondingTime !== null
                ? Duration.fromPartial(object.unbondingTime)
                : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? '';
        message.minCommissionRate = object.minCommissionRate ?? '';
        return message;
    },
};
function createBaseDelegationResponse() {
    return {
        delegation: undefined,
        balance: undefined,
    };
}
export const DelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? Delegation.fromPartial(object.delegation)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: undefined,
        balance: '',
    };
}
export const RedelegationEntryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegationEntry !== undefined) {
            RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== '') {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry =
            object.redelegationEntry !== undefined &&
                object.redelegationEntry !== null
                ? RedelegationEntry.fromPartial(object.redelegationEntry)
                : undefined;
        message.balance = object.balance ?? '';
        return message;
    },
};
function createBaseRedelegationResponse() {
    return {
        redelegation: undefined,
        entries: [],
    };
}
export const RedelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation =
            object.redelegation !== undefined && object.redelegation !== null
                ? Redelegation.fromPartial(object.redelegation)
                : undefined;
        message.entries =
            object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBasePool() {
    return {
        notBondedTokens: '',
        bondedTokens: '',
    };
}
export const Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.notBondedTokens !== '') {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== '') {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? '';
        message.bondedTokens = object.bondedTokens ?? '';
        return message;
    },
};
function createBaseValidatorUpdates() {
    return {
        updates: [],
    };
}
export const ValidatorUpdates = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.updates) {
            ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdates();
        message.updates =
            object.updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=staking.js.map