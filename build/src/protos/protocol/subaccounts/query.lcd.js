/* eslint-disable @typescript-eslint/no-explicit-any */
import { setPaginationParams } from '../../helpers.js';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.subaccount = this.subaccount.bind(this);
        this.subaccountAll = this.subaccountAll.bind(this);
        this.getWithdrawalAndTransfersBlockedInfo =
            this.getWithdrawalAndTransfersBlockedInfo.bind(this);
        this.collateralPoolAddress = this.collateralPoolAddress.bind(this);
    }
    /* Queries a Subaccount by id */
    async subaccount(params) {
        const endpoint = `dydxprotocol/subaccounts/subaccount/${params.owner}/${params.number}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Subaccount items. */
    async subaccountAll(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `dydxprotocol/subaccounts/subaccount`;
        return await this.req.get(endpoint, options);
    }
    /* Queries information about whether withdrawal and transfers are blocked, and
     if so which block they are re-enabled on. */
    async getWithdrawalAndTransfersBlockedInfo(params) {
        const endpoint = `dydxprotocol/subaccounts/withdrawals_and_transfers_blocked_info/${params.perpetualId}`;
        return await this.req.get(endpoint);
    }
    /* Queries the collateral pool account address for a perpetual id. */
    async collateralPoolAddress(params) {
        const endpoint = `dydxprotocol/subaccounts/collateral_pool_address/${params.perpetualId}`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map