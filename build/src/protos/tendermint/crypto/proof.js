import { Long } from '../../helpers.js';
import * as _m0 from 'protobufjs/minimal.js';
function createBaseProof() {
    return {
        total: Long.ZERO,
        index: Long.ZERO,
        leafHash: new Uint8Array(),
        aunts: [],
    };
}
export const Proof = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.total.isZero()) {
            writer.uint32(8).int64(message.total);
        }
        if (!message.index.isZero()) {
            writer.uint32(16).int64(message.index);
        }
        if (message.leafHash.length !== 0) {
            writer.uint32(26).bytes(message.leafHash);
        }
        for (const v of message.aunts) {
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.int64();
                    break;
                case 2:
                    message.index = reader.int64();
                    break;
                case 3:
                    message.leafHash = reader.bytes();
                    break;
                case 4:
                    message.aunts.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.total =
            object.total !== undefined && object.total !== null
                ? Long.fromValue(object.total)
                : Long.ZERO;
        message.index =
            object.index !== undefined && object.index !== null
                ? Long.fromValue(object.index)
                : Long.ZERO;
        message.leafHash = object.leafHash ?? new Uint8Array();
        message.aunts = object.aunts?.map((e) => e) || [];
        return message;
    },
};
function createBaseValueOp() {
    return {
        key: new Uint8Array(),
        proof: undefined,
    };
}
export const ValueOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValueOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValueOp();
        message.key = object.key ?? new Uint8Array();
        message.proof =
            object.proof !== undefined && object.proof !== null
                ? Proof.fromPartial(object.proof)
                : undefined;
        return message;
    },
};
function createBaseDominoOp() {
    return {
        key: '',
        input: '',
        output: '',
    };
}
export const DominoOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.input !== '') {
            writer.uint32(18).string(message.input);
        }
        if (message.output !== '') {
            writer.uint32(26).string(message.output);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDominoOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDominoOp();
        message.key = object.key ?? '';
        message.input = object.input ?? '';
        message.output = object.output ?? '';
        return message;
    },
};
function createBaseProofOp() {
    return {
        type: '',
        key: new Uint8Array(),
        data: new Uint8Array(),
    };
}
export const ProofOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? '';
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseProofOps() {
    return {
        ops: [],
    };
}
export const ProofOps = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ops) {
            ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(ProofOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=proof.js.map