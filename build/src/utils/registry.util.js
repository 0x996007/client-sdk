import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { MsgRegisterAffiliate, MsgPlaceOrder, MsgCancelOrder, MsgCreateClobPair, MsgUpdateClobPair, MsgBatchCancel, MsgDelayMessage, MsgCreateMarketPermissionless, MsgCreatePerpetual, MsgCreateOracleMarket, MsgWithdrawFromSubaccount, MsgDepositToSubaccount, MsgCreateTransfer, MsgDepositToMegavault, MsgWithdrawFromMegavault, } from '../protos/types.js';
import { TYPE_URL_MSG_PLACE_ORDER, TYPE_URL_MSG_CANCEL_ORDER, TYPE_URL_MSG_CREATE_CLOB_PAIR, TYPE_URL_MSG_UPDATE_CLOB_PAIR, TYPE_URL_MSG_DELAY_MESSAGE, TYPE_URL_MSG_CREATE_PERPETUAL, TYPE_URL_MSG_CREATE_ORACLE_MARKET, TYPE_URL_MSG_CREATE_TRANSFER, TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT, TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT, TYPE_URL_BATCH_CANCEL, TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT, TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT, TYPE_URL_MSG_REGISTER_AFFILIATE, TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS, } from '../common/urls.js';
export const registry = [];
export function generateRegistry() {
    return new Registry([
        // clob
        [TYPE_URL_MSG_PLACE_ORDER, MsgPlaceOrder],
        [TYPE_URL_MSG_CANCEL_ORDER, MsgCancelOrder],
        [TYPE_URL_BATCH_CANCEL, MsgBatchCancel],
        [TYPE_URL_MSG_CREATE_CLOB_PAIR, MsgCreateClobPair],
        [TYPE_URL_MSG_UPDATE_CLOB_PAIR, MsgUpdateClobPair],
        // delaymsg
        [TYPE_URL_MSG_DELAY_MESSAGE, MsgDelayMessage],
        // listing
        [
            TYPE_URL_MSG_CREATE_MARKET_PERMISSIONLESS,
            MsgCreateMarketPermissionless,
        ],
        // perpetuals
        [TYPE_URL_MSG_CREATE_PERPETUAL, MsgCreatePerpetual],
        // prices
        [TYPE_URL_MSG_CREATE_ORACLE_MARKET, MsgCreateOracleMarket],
        // vaults
        [TYPE_URL_MSG_DEPOSIT_TO_MEGAVAULT, MsgDepositToMegavault],
        [
            TYPE_URL_MSG_WITHDRAW_FROM_MEGAVAULT,
            MsgWithdrawFromMegavault,
        ],
        // sending
        [TYPE_URL_MSG_CREATE_TRANSFER, MsgCreateTransfer],
        [
            TYPE_URL_MSG_WITHDRAW_FROM_SUBACCOUNT,
            MsgWithdrawFromSubaccount,
        ],
        [
            TYPE_URL_MSG_DEPOSIT_TO_SUBACCOUNT,
            MsgDepositToSubaccount,
        ],
        // affiliates
        [TYPE_URL_MSG_REGISTER_AFFILIATE, MsgRegisterAffiliate],
        // default types
        ...defaultRegistryTypes,
    ]);
}
//# sourceMappingURL=registry.util.js.map