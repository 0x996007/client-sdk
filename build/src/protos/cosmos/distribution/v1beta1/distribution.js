import { DecCoin, Coin, } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../helpers.js';
function createBaseParams() {
    return {
        communityTax: '',
        baseProposerReward: '',
        bonusProposerReward: '',
        withdrawAddrEnabled: false,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.communityTax !== '') {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== '') {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== '') {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
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
                    message.communityTax = reader.string();
                    break;
                case 2:
                    message.baseProposerReward = reader.string();
                    break;
                case 3:
                    message.bonusProposerReward = reader.string();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
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
        message.communityTax = object.communityTax ?? '';
        message.baseProposerReward = object.baseProposerReward ?? '';
        message.bonusProposerReward = object.bonusProposerReward ?? '';
        message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0,
    };
}
export const ValidatorHistoricalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulativeRewardRatio) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio =
            object.cumulativeRewardRatio?.map((e) => DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: Long.UZERO,
    };
}
export const ValidatorCurrentRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
        message.period =
            object.period !== undefined && object.period !== null
                ? Long.fromValue(object.period)
                : Long.UZERO;
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: [],
    };
}
export const ValidatorAccumulatedCommission = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission =
            object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: [],
    };
}
export const ValidatorOutstandingRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: Long.UZERO,
        fraction: '',
    };
}
export const ValidatorSlashEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.validatorPeriod.isZero()) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== '') {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorPeriod = reader.uint64();
                    break;
                case 2:
                    message.fraction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod =
            object.validatorPeriod !== undefined && object.validatorPeriod !== null
                ? Long.fromValue(object.validatorPeriod)
                : Long.UZERO;
        message.fraction = object.fraction ?? '';
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: [],
    };
}
export const ValidatorSlashEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents =
            object.validatorSlashEvents?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFeePool() {
    return {
        communityPool: [],
    };
}
export const FeePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.communityPool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.communityPool =
            object.communityPool?.map((e) => DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return {
        title: '',
        description: '',
        recipient: '',
        amount: [],
    };
}
export const CommunityPoolSpendProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.recipient = object.recipient ?? '';
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: Long.UZERO,
        stake: '',
        height: Long.UZERO,
    };
}
export const DelegatorStartingInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.previousPeriod.isZero()) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== '') {
            writer.uint32(18).string(message.stake);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousPeriod = reader.uint64();
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod =
            object.previousPeriod !== undefined && object.previousPeriod !== null
                ? Long.fromValue(object.previousPeriod)
                : Long.UZERO;
        message.stake = object.stake ?? '';
        message.height =
            object.height !== undefined && object.height !== null
                ? Long.fromValue(object.height)
                : Long.UZERO;
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: '',
        reward: [],
    };
}
export const DelegationDelegatorReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = object.validatorAddress ?? '';
        message.reward = object.reward?.map((e) => DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        title: '',
        description: '',
        recipient: '',
        amount: '',
        deposit: '',
    };
}
export const CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== '') {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== '') {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.recipient = object.recipient ?? '';
        message.amount = object.amount ?? '';
        message.deposit = object.deposit ?? '';
        return message;
    },
};
//# sourceMappingURL=distribution.js.map