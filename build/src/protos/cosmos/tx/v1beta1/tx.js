/* eslint-disable @typescript-eslint/no-explicit-any */
import { Any } from '../../../google/protobuf/any.js';
import { CompactBitArray, } from '../../crypto/multisig/v1beta1/multisig.js';
import { Coin } from '../../base/v1beta1/coin.js';
import * as _m0 from 'protobufjs/minimal.js';
import { Long } from '../../../helpers.js';
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: [],
    };
}
export const Tx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.body !== undefined) {
            TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTx();
        message.body =
            object.body !== undefined && object.body !== null
                ? TxBody.fromPartial(object.body)
                : undefined;
        message.authInfo =
            object.authInfo !== undefined && object.authInfo !== null
                ? AuthInfo.fromPartial(object.authInfo)
                : undefined;
        message.signatures = object.signatures?.map((e) => e) || [];
        return message;
    },
};
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: [],
    };
}
export const TxRaw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxRaw();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.signatures = object.signatures?.map((e) => e) || [];
        return message;
    },
};
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: '',
        accountNumber: Long.UZERO,
    };
}
export const SignDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== '') {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.chainId = object.chainId ?? '';
        message.accountNumber =
            object.accountNumber !== undefined && object.accountNumber !== null
                ? Long.fromValue(object.accountNumber)
                : Long.UZERO;
        return message;
    },
};
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: '',
        accountNumber: Long.UZERO,
        sequence: Long.UZERO,
        tip: undefined,
    };
}
export const SignDocDirectAux = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== '') {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? Any.fromPartial(object.publicKey)
                : undefined;
        message.chainId = object.chainId ?? '';
        message.accountNumber =
            object.accountNumber !== undefined && object.accountNumber !== null
                ? Long.fromValue(object.accountNumber)
                : Long.UZERO;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? Long.fromValue(object.sequence)
                : Long.UZERO;
        message.tip =
            object.tip !== undefined && object.tip !== null
                ? Tip.fromPartial(object.tip)
                : undefined;
        return message;
    },
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: '',
        timeoutHeight: Long.UZERO,
        extensionOptions: [],
        nonCriticalExtensionOptions: [],
    };
}
export const TxBody = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== '') {
            writer.uint32(18).string(message.memo);
        }
        if (!message.timeoutHeight.isZero()) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (const v of message.extensionOptions) {
            Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.nonCriticalExtensionOptions) {
            Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
        message.memo = object.memo ?? '';
        message.timeoutHeight =
            object.timeoutHeight !== undefined && object.timeoutHeight !== null
                ? Long.fromValue(object.timeoutHeight)
                : Long.UZERO;
        message.extensionOptions =
            object.extensionOptions?.map((e) => Any.fromPartial(e)) || [];
        message.nonCriticalExtensionOptions =
            object.nonCriticalExtensionOptions?.map((e) => Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined,
    };
}
export const AuthInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signerInfos) {
            SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signerInfos =
            object.signerInfos?.map((e) => SignerInfo.fromPartial(e)) || [];
        message.fee =
            object.fee !== undefined && object.fee !== null
                ? Fee.fromPartial(object.fee)
                : undefined;
        message.tip =
            object.tip !== undefined && object.tip !== null
                ? Tip.fromPartial(object.tip)
                : undefined;
        return message;
    },
};
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: Long.UZERO,
    };
}
export const SignerInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignerInfo();
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? Any.fromPartial(object.publicKey)
                : undefined;
        message.modeInfo =
            object.modeInfo !== undefined && object.modeInfo !== null
                ? ModeInfo.fromPartial(object.modeInfo)
                : undefined;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? Long.fromValue(object.sequence)
                : Long.UZERO;
        return message;
    },
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined,
    };
}
export const ModeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.single !== undefined) {
            ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single =
            object.single !== undefined && object.single !== null
                ? ModeInfo_Single.fromPartial(object.single)
                : undefined;
        message.multi =
            object.multi !== undefined && object.multi !== null
                ? ModeInfo_Multi.fromPartial(object.multi)
                : undefined;
        return message;
    },
};
function createBaseModeInfo_Single() {
    return {
        mode: 0,
    };
}
export const ModeInfo_Single = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: [],
    };
}
export const ModeInfo_Multi = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bitarray !== undefined) {
            CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modeInfos) {
            ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray =
            object.bitarray !== undefined && object.bitarray !== null
                ? CompactBitArray.fromPartial(object.bitarray)
                : undefined;
        message.modeInfos =
            object.modeInfos?.map((e) => ModeInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFee() {
    return {
        amount: [],
        gasLimit: Long.UZERO,
        payer: '',
        granter: '',
    };
}
export const Fee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.gasLimit.isZero()) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== '') {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== '') {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        message.gasLimit =
            object.gasLimit !== undefined && object.gasLimit !== null
                ? Long.fromValue(object.gasLimit)
                : Long.UZERO;
        message.payer = object.payer ?? '';
        message.granter = object.granter ?? '';
        return message;
    },
};
function createBaseTip() {
    return {
        amount: [],
        tipper: '',
    };
}
export const Tip = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== '') {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? '';
        return message;
    },
};
function createBaseAuxSignerData() {
    return {
        address: '',
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array(),
    };
}
export const AuxSignerData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? '';
        message.signDoc =
            object.signDoc !== undefined && object.signDoc !== null
                ? SignDocDirectAux.fromPartial(object.signDoc)
                : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=tx.js.map