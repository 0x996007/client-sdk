import { Secp256k1Pubkey, StdFee, encodeSecp256k1Pubkey } from '@cosmjs/amino';
import {
  AccountData,
  DirectSecp256k1HdWallet,
  EncodeObject,
  OfflineSigner,
} from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import Long from 'long';
import protobuf from 'protobufjs';

import { generateRegistry } from '../../utils/registry.util.js';
import { TransactionOptions } from '../../common/index.js';
import { TransactionSigner } from './transaction.signer.js';

// Required for encoding and decoding queries that are of type Long.
protobuf.util.Long = Long;
protobuf.configure();

export class ClientWallet {
  accounts?: AccountData[];
  address?: string;
  pubKey?: Secp256k1Pubkey;
  signer?: TransactionSigner;
  offlineSigner?: OfflineSigner;

  static async fromOfflineSigner(signer: OfflineSigner): Promise<ClientWallet> {
    const wallet = new ClientWallet();
    await wallet.setSigner(signer);
    return wallet;
  }

  static async fromMnemonic(
    mnemonic: string,
    prefix?: string,
  ): Promise<ClientWallet> {
    const wallet = new ClientWallet();
    await wallet.setMnemonic(mnemonic, prefix);
    return wallet;
  }

  async setSigner(signer: OfflineSigner): Promise<void> {
    this.offlineSigner = signer;
    const stargateClient = await SigningStargateClient.offline(signer, {
      registry: generateRegistry(),
    });
    const accountData = await signer.getAccounts();
    const firstAccount = accountData[0]!;
    this.accounts = [...accountData];
    this.address = firstAccount.address;
    this.pubKey = encodeSecp256k1Pubkey(firstAccount.pubkey);
    this.signer = new TransactionSigner(this.address, stargateClient);
  }

  async setMnemonic(mnemonic: string, prefix?: string): Promise<void> {
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix,
    });
    return this.setSigner(signer);
  }

  public async signTransaction(
    messages: EncodeObject[],
    transactionOptions: TransactionOptions,
    fee?: StdFee,
    memo: string = '',
  ): Promise<Uint8Array> {
    return this.signer!.signTransaction(
      messages,
      transactionOptions,
      fee,
      memo,
    );
  }
}
