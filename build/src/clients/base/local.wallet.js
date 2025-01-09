import { encodeSecp256k1Pubkey } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet, } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import Long from 'long';
import protobuf from 'protobufjs';
import { generateRegistry } from '../../libs/registry.lib.js';
import { TransactionSigner } from './transaction.signer.js';
// Required for encoding and decoding queries that are of type Long.
protobuf.util.Long = Long;
protobuf.configure();
export class LocalWallet {
    accounts;
    address;
    pubKey;
    signer;
    offlineSigner;
    static async fromOfflineSigner(signer) {
        const wallet = new LocalWallet();
        await wallet.setSigner(signer);
        return wallet;
    }
    static async fromMnemonic(mnemonic, prefix) {
        const wallet = new LocalWallet();
        await wallet.setMnemonic(mnemonic, prefix);
        return wallet;
    }
    async setSigner(signer) {
        this.offlineSigner = signer;
        const stargateClient = await SigningStargateClient.offline(signer, {
            registry: generateRegistry(),
        });
        const accountData = await signer.getAccounts();
        const firstAccount = accountData[0];
        this.accounts = [...accountData];
        this.address = firstAccount.address;
        this.pubKey = encodeSecp256k1Pubkey(firstAccount.pubkey);
        this.signer = new TransactionSigner(this.address, stargateClient);
    }
    async setMnemonic(mnemonic, prefix) {
        const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix,
        });
        return this.setSigner(signer);
    }
    async signTransaction(messages, transactionOptions, fee, memo = '') {
        return this.signer.signTransaction(messages, transactionOptions, fee, memo);
    }
}
//# sourceMappingURL=local.wallet.js.map