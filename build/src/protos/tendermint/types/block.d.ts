import { Header, HeaderSDKType, Data, DataSDKType, Commit, CommitSDKType } from './types.js';
import { EvidenceList, EvidenceListSDKType } from './evidence.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
export interface Block {
    header?: Header;
    data?: Data;
    evidence?: EvidenceList;
    lastCommit?: Commit;
}
export interface BlockSDKType {
    header?: HeaderSDKType;
    data?: DataSDKType;
    evidence?: EvidenceListSDKType;
    last_commit?: CommitSDKType;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromPartial(object: DeepPartial<Block>): Block;
};
