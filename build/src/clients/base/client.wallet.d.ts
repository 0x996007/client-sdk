import { Secp256k1Pubkey, StdFee } from '@cosmjs/amino';
import { AccountData, EncodeObject, OfflineSigner } from '@cosmjs/proto-signing';
import { TransactionOptions } from '../../common/index.js';
import { TransactionSigner } from './transaction.signer.js';
export declare class ClientWallet {
    accounts?: AccountData[];
    address?: string;
    pubKey?: Secp256k1Pubkey;
    signer?: TransactionSigner;
    offlineSigner?: OfflineSigner;
    static fromOfflineSigner(signer: OfflineSigner): Promise<ClientWallet>;
    static fromMnemonic(mnemonic: string, prefix?: string): Promise<ClientWallet>;
    setSigner(signer: OfflineSigner): Promise<void>;
    setMnemonic(mnemonic: string, prefix?: string): Promise<void>;
    signTransaction(messages: EncodeObject[], transactionOptions: TransactionOptions, fee?: StdFee, memo?: string): Promise<Uint8Array>;
}
