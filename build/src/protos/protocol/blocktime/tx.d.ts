import { DowntimeParams, DowntimeParamsSDKType, SynchronyParams, SynchronyParamsSDKType } from './params.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParams {
    authority: string;
    /** Defines the parameters to update. All parameters must be supplied. */
    params?: DowntimeParams;
}
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParamsSDKType {
    authority: string;
    params?: DowntimeParamsSDKType;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponse {
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponseSDKType {
}
/** MsgUpdateSynchronyParams is the Msg/UpdateSynchronyParams request type. */
export interface MsgUpdateSynchronyParams {
    authority: string;
    /** Defines the parameters to update. All parameters must be supplied. */
    params?: SynchronyParams;
}
/** MsgUpdateSynchronyParams is the Msg/UpdateSynchronyParams request type. */
export interface MsgUpdateSynchronyParamsSDKType {
    authority: string;
    params?: SynchronyParamsSDKType;
}
/**
 * MsgUpdateSynchronyParamsResponse is the Msg/UpdateSynchronyParams response
 * type.
 */
export interface MsgUpdateSynchronyParamsResponse {
}
/**
 * MsgUpdateSynchronyParamsResponse is the Msg/UpdateSynchronyParams response
 * type.
 */
export interface MsgUpdateSynchronyParamsResponseSDKType {
}
export declare const MsgUpdateDowntimeParams: {
    encode(message: MsgUpdateDowntimeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDowntimeParams;
    fromPartial(object: DeepPartial<MsgUpdateDowntimeParams>): MsgUpdateDowntimeParams;
};
export declare const MsgUpdateDowntimeParamsResponse: {
    encode(_: MsgUpdateDowntimeParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDowntimeParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateDowntimeParamsResponse>): MsgUpdateDowntimeParamsResponse;
};
export declare const MsgUpdateSynchronyParams: {
    encode(message: MsgUpdateSynchronyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSynchronyParams;
    fromPartial(object: DeepPartial<MsgUpdateSynchronyParams>): MsgUpdateSynchronyParams;
};
export declare const MsgUpdateSynchronyParamsResponse: {
    encode(_: MsgUpdateSynchronyParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSynchronyParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateSynchronyParamsResponse>): MsgUpdateSynchronyParamsResponse;
};
