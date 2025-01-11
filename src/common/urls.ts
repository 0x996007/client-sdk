// ------------ MsgType URLs ------------
// Default CosmosSDK
// x/bank
export const TYPE_URL_MSG_SEND = '/cosmos.bank.v1beta1.MsgSend';

// x/gov
export const TYPE_URL_MSG_SUBMIT_PROPOSAL = '/cosmos.gov.v1.MsgSubmitProposal';

// dYdX Specific
// x/clob
export const TYPE_URL_MSG_PLACE_ORDER = '/protocol.clob.MsgPlaceOrder';
export const TYPE_URL_MSG_CANCEL_ORDER = '/protocol.clob.MsgCancelOrder';
export const TYPE_URL_BATCH_CANCEL = '/protocol.clob.MsgBatchCancel';
export const TYPE_URL_MSG_CREATE_CLOB_PAIR = '/protocol.clob.MsgCreateClobPair';
export const TYPE_URL_MSG_UPDATE_CLOB_PAIR = '/protocol.clob.MsgUpdateClobPair';

// x/delaymsg
export const TYPE_URL_MSG_DELAY_MESSAGE = '/protocol.delaymsg.MsgDelayMessage';

// x/listing
export const TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS =
  '/protocol.listing.MsgCreateMarketPermissionless';

// x/perpetuals
export const TYPE_URL_MSG_CREATE_PERPETUAL =
  '/protocol.perpetuals.MsgCreatePerpetual';

// x/prices
export const TYPE_URL_MSG_CREATE_ORACLE_MARKET =
  '/protocol.prices.MsgCreateOracleMarket';

// x/sending
export const TYPE_URL_MSG_CREATE_TRANSFER =
  '/protocol.sending.MsgCreateTransfer';
export const TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT =
  '/protocol.sending.MsgWithdrawFromSubaccount';
export const TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT =
  '/protocol.sending.MsgDepositToSubaccount';

// x/affiliates
export const TYPE_URL_MSG_REGISTER_AFFILIATE =
  '/protocol.affiliates.MsgRegisterAffiliate';

// x/vault
export const TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT =
  '/protocol.vault.MsgDepositToMegavault';
export const TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT =
  '/protocol.vault.MsgWithdrawFromMegavault';

// x/staking
export const TYPE_URL_MSG_DELEGATE = '/cosmos.staking.v1beta1.MsgDelegate';
export const TYPE_URL_MSG_UNDELEGATE = '/cosmos.staking.v1beta1.MsgUndelegate';

// x/distribution
export const TYPE_URL_MSG_WITHDRAW_DELEGATOR_REWARD =
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
