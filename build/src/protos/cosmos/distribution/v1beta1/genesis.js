import { DecCoin } from '../../base/v1beta1/coin.js';
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool, } from './distribution.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../helpers.js';
function createBaseDelegatorWithdrawInfo() {
    return {
        delegatorAddress: '',
        withdrawAddress: '',
    };
}
export const DelegatorWithdrawInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== '') {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.withdrawAddress = object.withdrawAddress ?? '';
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validatorAddress: '',
        outstandingRewards: [],
    };
}
export const ValidatorOutstandingRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.outstandingRewards =
            object.outstandingRewards?.map((e) => DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validatorAddress: '',
        accumulated: undefined,
    };
}
export const ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.accumulated =
            object.accumulated !== undefined && object.accumulated !== null
                ? ValidatorAccumulatedCommission.fromPartial(object.accumulated)
                : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validatorAddress: '',
        period: Long.UZERO,
        rewards: undefined,
    };
}
export const ValidatorHistoricalRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.period =
            object.period !== undefined && object.period !== null
                ? Long.fromValue(object.period)
                : Long.UZERO;
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? ValidatorHistoricalRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validatorAddress: '',
        rewards: undefined,
    };
}
export const ValidatorCurrentRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? ValidatorCurrentRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
        startingInfo: undefined,
    };
}
export const DelegatorStartingInfoRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
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
                    message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.startingInfo =
            object.startingInfo !== undefined && object.startingInfo !== null
                ? DelegatorStartingInfo.fromPartial(object.startingInfo)
                : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return {
        validatorAddress: '',
        height: Long.UZERO,
        period: Long.UZERO,
        validatorSlashEvent: undefined,
    };
}
export const ValidatorSlashEventRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (!message.period.isZero()) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.UZERO;
        message.period =
            object.period !== undefined && object.period !== null
                ? Long.fromValue(object.period)
                : Long.UZERO;
        message.validatorSlashEvent =
            object.validatorSlashEvent !== undefined &&
                object.validatorSlashEvent !== null
                ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: '',
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== '') {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.feePool = FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        message.feePool =
            object.feePool !== undefined && object.feePool !== null
                ? FeePool.fromPartial(object.feePool)
                : undefined;
        message.delegatorWithdrawInfos =
            object.delegatorWithdrawInfos?.map((e) => DelegatorWithdrawInfo.fromPartial(e)) || [];
        message.previousProposer = object.previousProposer ?? '';
        message.outstandingRewards =
            object.outstandingRewards?.map((e) => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validatorAccumulatedCommissions =
            object.validatorAccumulatedCommissions?.map((e) => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validatorHistoricalRewards =
            object.validatorHistoricalRewards?.map((e) => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validatorCurrentRewards =
            object.validatorCurrentRewards?.map((e) => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegatorStartingInfos =
            object.delegatorStartingInfos?.map((e) => DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validatorSlashEvents =
            object.validatorSlashEvents?.map((e) => ValidatorSlashEventRecord.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map