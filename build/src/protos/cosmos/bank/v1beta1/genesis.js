import { Params, Metadata, SendEnabled, } from './bank.js';
import { Coin } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseGenesisState() {
    return {
        params: undefined,
        balances: [],
        supply: [],
        denomMetadata: [],
        sendEnabled: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendEnabled) {
            SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        message.balances =
            object.balances?.map((e) => Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
        message.denomMetadata =
            object.denomMetadata?.map((e) => Metadata.fromPartial(e)) || [];
        message.sendEnabled =
            object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBalance() {
    return {
        address: '',
        coins: [],
    };
}
export const Balance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? '';
        message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map