import { MAX_SUBACCOUNT_NUMBER } from '../../types.js';
export class SubaccountInfo {
    wallet;
    // TODO, change address to Wallet object when implementing validator functions
    subaccountNumber;
    constructor(wallet, subaccountNumber = 0) {
        if (subaccountNumber < 0 || subaccountNumber > MAX_SUBACCOUNT_NUMBER) {
            throw new Error(`Subaccount number must be between 0 and ${MAX_SUBACCOUNT_NUMBER}`);
        }
        this.wallet = wallet;
        this.subaccountNumber = subaccountNumber;
    }
    get address() {
        const address = this.wallet.address;
        if (address !== undefined) {
            return address;
        }
        else {
            throw new Error('Address not set');
        }
    }
}
//# sourceMappingURL=sub-account.info.js.map