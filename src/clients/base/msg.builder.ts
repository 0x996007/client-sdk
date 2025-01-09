import { EncodeObject, Registry } from '@cosmjs/proto-signing';
import { MsgWithdrawDelegatorReward } from '../../protos/cosmos/distribution/v1beta1/tx.js';
import { MsgSubmitProposal } from '../../protos/cosmos/gov/v1/tx.js';
import {
  MsgDelegate,
  MsgUndelegate,
} from '../../protos/cosmos/staking/v1beta1/tx.js';
import { MsgRegisterAffiliate } from '../../protos/protocol/affiliates/tx.js';
import { ClobPair_Status } from '../../protos/protocol/clob/clob_pair.js';
import {
  MsgBatchCancel,
  MsgCancelOrder,
  MsgCreateClobPair,
  MsgPlaceOrder,
  MsgUpdateClobPair,
  OrderBatch,
} from '../../protos/protocol/clob/tx.js';
import { MsgDelayMessage } from '../../protos/protocol/delaymsg/tx.js';
import { PerpetualMarketType } from '../../protos/protocol/perpetuals/perpetual.js';
import { MsgCreatePerpetual } from '../../protos/protocol/perpetuals/tx.js';
import { MsgCreateOracleMarket } from '../../protos/protocol/prices/tx.js';
import {
  MsgDepositToMegavault,
  MsgWithdrawFromMegavault,
} from '../../protos/protocol/vault/tx.js';
import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx.js';
import { Coin } from 'cosmjs-types/cosmos/base/v1beta1/coin.js';
import { Any } from 'cosmjs-types/google/protobuf/any.js';
import Long from 'long';
import protobuf from 'protobufjs';

import {
  GOV_MODULE_ADDRESS,
  DELAYMSG_MODULE_ADDRESS,
  TYPE_URL_MSG_SEND,
  TYPE_URL_MSG_SUBMIT_PROPOSAL,
  TYPE_URL_MSG_PLACE_ORDER,
  TYPE_URL_MSG_CANCEL_ORDER,
  TYPE_URL_MSG_CREATE_CLOB_PAIR,
  TYPE_URL_MSG_UPDATE_CLOB_PAIR,
  TYPE_URL_MSG_DELAY_MESSAGE,
  TYPE_URL_MSG_CREATE_PERPETUAL,
  TYPE_URL_MSG_CREATE_ORACLE_MARKET,
  TYPE_URL_MSG_CREATE_TRANSFER,
  TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT,
  TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT,
  TYPE_URL_MSG_DELEGATE,
  TYPE_URL_MSG_UNDELEGATE,
  TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD,
  TYPE_URL_BATCH_CANCEL,
  TYPE_URL_MSG_REGISTER_AFFILIATE,
  TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT,
  TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT,
  TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS,
  DenomConfig,
} from '../../types.js';
import {
  Order,
  Order_ConditionType,
  Order_Side,
  Order_TimeInForce,
  OrderId,
} from '../../protos/protocol/clob/order.js';
import { SubaccountId } from '../../protos/protocol/subaccounts/subaccount.js';
import {
  MsgDepositToSubaccount,
  MsgWithdrawFromSubaccount,
  Transfer,
} from '../../protos/protocol/sending/transfer.js';
import { MsgCreateTransfer } from '../../protos/protocol/sending/tx.js';
import { MsgCreateMarketPermissionless } from '../../protos/protocol/listing/tx.js';

protobuf.util.Long = Long;
protobuf.configure();

export class MsgBuilder {
  // ------------ x/clob ------------
  public composeMsgPlaceOrder(
    address: string,
    subaccountNumber: number,
    clientId: number,
    clobPairId: number,
    orderFlags: number,
    goodTilBlock: number,
    goodTilBlockTime: number,
    side: Order_Side,
    quantums: Long,
    subticks: Long,
    timeInForce: Order_TimeInForce,
    reduceOnly: boolean,
    clientMetadata: number,
    conditionType: Order_ConditionType = Order_ConditionType.CONDITION_TYPE_UNSPECIFIED,
    conditionalOrderTriggerSubticks: Long = Long.fromInt(0),
  ): EncodeObject {
    this.validateGoodTilBlockAndTime(
      orderFlags,
      goodTilBlock,
      goodTilBlockTime,
    );

    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const orderId: OrderId = {
      subaccountId,
      clientId,
      orderFlags,
      clobPairId,
    };
    const order: Order = {
      orderId,
      side,
      quantums,
      subticks,
      goodTilBlock: goodTilBlock === 0 ? undefined : goodTilBlock,
      goodTilBlockTime: goodTilBlock === 0 ? goodTilBlockTime : undefined,
      timeInForce,
      reduceOnly,
      clientMetadata: clientMetadata ?? 0,
      conditionType,
      conditionalOrderTriggerSubticks,
    };
    const msg: MsgPlaceOrder = {
      order,
    };
    return {
      typeUrl: TYPE_URL_MSG_PLACE_ORDER,
      value: msg,
    };
  }

  public composeMsgCancelOrder(
    address: string,
    subaccountNumber: number,
    clientId: number,
    clobPairId: number,
    orderFlags: number,
    goodTilBlock: number,
    goodTilBlockTime: number,
  ): EncodeObject {
    this.validateGoodTilBlockAndTime(
      orderFlags,
      goodTilBlock,
      goodTilBlockTime,
    );

    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const orderId: OrderId = {
      subaccountId,
      clientId,
      orderFlags,
      clobPairId,
    };

    const msg: MsgCancelOrder = {
      orderId,
      goodTilBlock: goodTilBlock === 0 ? undefined : goodTilBlock,
      goodTilBlockTime: goodTilBlock === 0 ? goodTilBlockTime : undefined,
    };

    return {
      typeUrl: TYPE_URL_MSG_CANCEL_ORDER,
      value: msg,
    };
  }

  public composeMsgBatchCancelShortTermOrders(
    address: string,
    subaccountNumber: number,
    shortTermCancels: OrderBatch[],
    goodTilBlock: number,
  ): EncodeObject {
    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgBatchCancel = {
      subaccountId,
      shortTermCancels,
      goodTilBlock,
    };

    return {
      typeUrl: TYPE_URL_BATCH_CANCEL,
      value: msg,
    };
  }

  public composeMsgCreateClobPair(
    clobId: number,
    perpetualId: number,
    quantumConversionExponent: number,
    stepBaseQuantums: Long,
    subticksPerTick: number,
  ): EncodeObject {
    const msg: MsgCreateClobPair = {
      // uses x/gov module account since creating the clob pair is a governance action.
      authority: GOV_MODULE_ADDRESS,
      clobPair: {
        id: clobId,
        perpetualClobMetadata: {
          perpetualId,
        },
        quantumConversionExponent,
        stepBaseQuantums,
        subticksPerTick,
        status: ClobPair_Status.STATUS_INITIALIZING,
      },
    };

    return {
      typeUrl: TYPE_URL_MSG_CREATE_CLOB_PAIR,
      value: msg,
    };
  }

  public composeMsgUpdateClobPair(
    clobId: number,
    perpetualId: number,
    quantumConversionExponent: number,
    stepBaseQuantums: Long,
    subticksPerTick: number,
  ): EncodeObject {
    const msg: MsgUpdateClobPair = {
      // uses x/delaymsg module account since updating the clob pair is a delayedmsg action.
      authority: DELAYMSG_MODULE_ADDRESS,
      clobPair: {
        id: clobId,
        perpetualClobMetadata: {
          perpetualId,
        },
        quantumConversionExponent,
        stepBaseQuantums,
        subticksPerTick,
        status: ClobPair_Status.STATUS_ACTIVE,
      },
    };

    return {
      typeUrl: TYPE_URL_MSG_UPDATE_CLOB_PAIR,
      value: msg,
    };
  }

  // ------------ x/sending ------------
  public composeMsgTransfer(
    address: string,
    subaccountNumber: number,
    recipientAddress: string,
    recipientSubaccountNumber: number,
    assetId: number,
    amount: Long,
  ): EncodeObject {
    const sender: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };
    const recipient: SubaccountId = {
      owner: recipientAddress,
      number: recipientSubaccountNumber,
    };

    const transfer: Transfer = {
      sender,
      recipient,
      assetId,
      amount,
    };

    const msg: MsgCreateTransfer = {
      transfer,
    };

    return {
      typeUrl: TYPE_URL_MSG_CREATE_TRANSFER,
      value: msg,
    };
  }

  public composeMsgDepositToSubaccount(
    address: string,
    subaccountNumber: number,
    assetId: number,
    quantums: Long,
  ): EncodeObject {
    const recipient: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgDepositToSubaccount = {
      sender: address,
      recipient,
      assetId,
      quantums,
    };

    return {
      typeUrl: TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT,
      value: msg,
    };
  }

  public composeMsgWithdrawFromSubaccount(
    address: string,
    subaccountNumber: number,
    assetId: number,
    quantums: Long,
    recipient: string = address,
  ): EncodeObject {
    const sender: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgWithdrawFromSubaccount = {
      sender,
      recipient,
      assetId,
      quantums,
    };

    return {
      typeUrl: TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT,
      value: msg,
    };
  }

  // ------------ x/bank ------------
  public composeMsgSendToken(
    address: string,
    recipient: string,
    coinDenom: string,
    quantums: string,
  ): EncodeObject {
    const coin: Coin = {
      denom: coinDenom,
      amount: quantums,
    };

    const msg: MsgSend = {
      fromAddress: address,
      toAddress: recipient,
      amount: [coin],
    };

    return {
      typeUrl: TYPE_URL_MSG_SEND,
      value: msg,
    };
  }

  // ------------ x/prices ------------
  public composeMsgCreateOracleMarket(
    marketId: number,
    pair: string,
    exponent: number,
    minExchanges: number,
    minPriceChangePpm: number,
    exchangeConfigJson: string,
  ): EncodeObject {
    const msg: MsgCreateOracleMarket = {
      // uses x/gov module account since creating the oracle market is a governance action.
      authority: GOV_MODULE_ADDRESS,
      params: {
        id: marketId,
        pair,
        exponent,
        minExchanges,
        minPriceChangePpm,
        exchangeConfigJson,
      },
    };

    return {
      typeUrl: TYPE_URL_MSG_CREATE_ORACLE_MARKET,
      value: msg,
    };
  }

  // ------------ x/perpetuals ------------
  public composeMsgCreatePerpetual(
    perpetualId: number,
    marketId: number,
    ticker: string,
    atomicResolution: number,
    liquidityTier: number,
    marketType: PerpetualMarketType,
  ): EncodeObject {
    const msg: MsgCreatePerpetual = {
      // uses x/gov module account since creating the perpetual is a governance action.
      authority: GOV_MODULE_ADDRESS,
      params: {
        id: perpetualId,
        marketId,
        ticker,
        atomicResolution,
        defaultFundingPpm: 0, // default funding should be 0 to start.
        liquidityTier,
        marketType,
      },
    };

    return {
      typeUrl: TYPE_URL_MSG_CREATE_PERPETUAL,
      value: msg,
    };
  }

  // ------------ x/delaymsg ------------
  public composeMsgDelayMessage(
    embeddedMsg: EncodeObject,
    delayBlocks: number,
  ): EncodeObject {
    const msg: MsgDelayMessage = {
      // all msgs sent to x/delay must be from x/gov module account.
      authority: GOV_MODULE_ADDRESS,
      msg: embeddedMsg,
      delayBlocks,
    };

    return {
      typeUrl: TYPE_URL_MSG_DELAY_MESSAGE,
      value: msg,
    };
  }

  // ------------ x/gov ------------
  public composeMsgSubmitProposal(
    title: string,
    initialDepositAmount: string,
    initialDepositDenomConfig: DenomConfig,
    summary: string,
    messages: EncodeObject[],
    proposer: string,
    metadata: string = '',
    expedited: boolean = false,
  ): EncodeObject {
    const initialDeposit: Coin[] = [
      {
        amount: initialDepositAmount,
        denom: initialDepositDenomConfig.CHAINTOKEN_DENOM,
      },
    ];

    const msg: MsgSubmitProposal = {
      title,
      initialDeposit,
      summary,
      messages,
      proposer,
      metadata,
      expedited,
    };

    return {
      typeUrl: TYPE_URL_MSG_SUBMIT_PROPOSAL,
      value: msg,
    };
  }

  // ------------ x/vault ------------
  public composeMsgDepositToMegavault(
    address: string,
    subaccountNumber: number,
    quoteQuantums: Uint8Array,
  ): EncodeObject {
    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgDepositToMegavault = {
      quoteQuantums,
      subaccountId,
    };

    return {
      typeUrl: TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT,
      value: msg,
    };
  }

  public composeMsgWithdrawFromMegavault(
    address: string,
    subaccountNumber: number,
    shares: Uint8Array,
    minQuoteQuantums: Uint8Array,
  ): EncodeObject {
    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgWithdrawFromMegavault = {
      minQuoteQuantums,
      shares: { numShares: shares },
      subaccountId,
    };

    return {
      typeUrl: TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT,
      value: msg,
    };
  }

  // ------------ x/staking ------------
  public composeMsgDelegate(
    delegator: string,
    validator: string,
    amount: Coin,
  ): EncodeObject {
    const msg: MsgDelegate = {
      delegatorAddress: delegator,
      validatorAddress: validator,
      amount,
    };

    return {
      typeUrl: TYPE_URL_MSG_DELEGATE,
      value: msg,
    };
  }

  public composeMsgUndelegate(
    delegator: string,
    validator: string,
    amount: Coin,
  ): EncodeObject {
    const msg: MsgUndelegate = {
      delegatorAddress: delegator,
      validatorAddress: validator,
      amount,
    };

    return {
      typeUrl: TYPE_URL_MSG_UNDELEGATE,
      value: msg,
    };
  }

  // ------------ x/distribution ------------
  public composeMsgWithdrawDelegatorReward(
    delegator: string,
    validator: string,
  ): EncodeObject {
    const msg: MsgWithdrawDelegatorReward = {
      delegatorAddress: delegator,
      validatorAddress: validator,
    };

    return {
      typeUrl: TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD,
      value: msg,
    };
  }

  // ------------ x/affiliates ------------
  public composeMsgRegisterAffiliate(
    referee: string,
    affiliate: string,
  ): EncodeObject {
    const msg: MsgRegisterAffiliate = {
      referee,
      affiliate,
    };

    return {
      typeUrl: TYPE_URL_MSG_REGISTER_AFFILIATE,
      value: msg,
    };
  }

  // ------------ x/listing ------------
  public composeMsgCreateMarketPermissionless(
    address: string,
    ticker: string,
    subaccountNumber: number,
  ): EncodeObject {
    const subaccountId: SubaccountId = {
      owner: address,
      number: subaccountNumber,
    };

    const msg: MsgCreateMarketPermissionless = {
      ticker,
      subaccountId,
    };

    return {
      typeUrl: TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS,
      value: msg,
    };
  }

  // ------------ util ------------
  public validateGoodTilBlockAndTime(
    orderFlags: number,
    goodTilBlock: number,
    goodTilBlockTime: number,
  ): void {
    if (orderFlags === 0 && goodTilBlock === 0) {
      throw new Error('goodTilBlock must be set if orderFlags is 0');
    } else if (orderFlags !== 0 && goodTilBlockTime === 0) {
      throw new Error('goodTilBlockTime must be set if orderFlags is not 0');
    }
  }

  public wrapMessageAsAny(registry: Registry, message: EncodeObject): Any {
    return registry.encodeAsAny(message);
  }

  public wrapMessageArrAsAny(
    registry: Registry,
    messages: EncodeObject[],
  ): Any[] {
    const encodedMessages: Any[] = messages.map((message: EncodeObject) =>
      this.wrapMessageAsAny(registry, message),
    );
    return encodedMessages;
  }
}
