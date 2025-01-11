import { MAX_SUBACCOUNT_NUMBER } from '../../common/index.js';
import { ClientWallet } from './client.wallet.js';

export class SubaccountInfo {
  readonly wallet: ClientWallet;
  // TODO, change address to Wallet object when implementing validator functions
  readonly subaccountNumber: number;

  constructor(wallet: ClientWallet, subaccountNumber: number = 0) {
    if (subaccountNumber < 0 || subaccountNumber > MAX_SUBACCOUNT_NUMBER) {
      throw new Error(
        `Subaccount number must be between 0 and ${MAX_SUBACCOUNT_NUMBER}`,
      );
    }
    this.wallet = wallet;
    this.subaccountNumber = subaccountNumber;
  }

  get address(): string {
    const address = this.wallet.address;
    if (address !== undefined) {
      return address;
    } else {
      throw new Error('Address not set');
    }
  }
}
