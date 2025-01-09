import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx.js';
import Long from 'long';
import protobuf from 'protobufjs';
import { UserError } from '../../libs/errors.lib.js';
// Required for encoding and decoding queries that are of type Long.
// Must be done once but since the individal modules should be usable
// - must be set in each module that encounters encoding/decoding Longs.
// Reference: https://github.com/protobufjs/protobuf.js/issues/921
protobuf.util.Long = Long;
protobuf.configure();
export class TransactionSigner {
    address;
    stargateSigningClient;
    constructor(address, stargateSigningClient) {
        this.address = address;
        this.stargateSigningClient = stargateSigningClient;
    }
    /**
     * @description Get the encoded signed transaction or the promise is rejected if
     * no fee can be set for the transaction.
     *
     * @throws UserError if the fee is undefined.
     * @returns The signed and encoded transaction.
     */
    async signTransaction(messages, transactionOptions, fee, memo = '') {
        // Verify there is either a fee or a path to getting the fee present.
        if (fee === undefined) {
            throw new UserError('fee cannot be undefined');
        }
        // Sign, encode and return the transaction.
        const rawTx = await this.stargateSigningClient.sign(this.address, messages, fee, memo, {
            accountNumber: transactionOptions.accountNumber,
            sequence: transactionOptions.sequence,
            chainId: transactionOptions.chainId,
        });
        return Uint8Array.from(TxRaw.encode(rawTx).finish());
    }
}
//# sourceMappingURL=transaction.signer.js.map