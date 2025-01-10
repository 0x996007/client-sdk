import { LocalWallet } from './local.wallet.js';
export declare class SubaccountInfo {
    readonly wallet: LocalWallet;
    readonly subaccountNumber: number;
    constructor(wallet: LocalWallet, subaccountNumber?: number);
    get address(): string;
}
