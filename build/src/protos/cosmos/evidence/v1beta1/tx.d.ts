import { Any, AnySDKType } from '../../../google/protobuf/any.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../../helpers.js';
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    /** submitter is the signer account address of evidence. */
    submitter: string;
    /** evidence defines the evidence of misbehavior. */
    evidence?: Any;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence?: AnySDKType;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    encode(message: MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence;
};
export declare const MsgSubmitEvidenceResponse: {
    encode(message: MsgSubmitEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
};
