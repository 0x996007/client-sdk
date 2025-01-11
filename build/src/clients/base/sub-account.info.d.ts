import { ClientWallet } from './client.wallet.js';
export declare class SubaccountInfo {
    readonly wallet: ClientWallet;
    readonly subaccountNumber: number;
    constructor(wallet: ClientWallet, subaccountNumber?: number);
    get address(): string;
}
