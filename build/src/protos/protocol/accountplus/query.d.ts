import { Params, ParamsSDKType } from './params.js';
import { AccountAuthenticator, AccountAuthenticatorSDKType } from './models.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial, Long } from '../../helpers.js';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequest {
    /** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
    account: string;
}
/** MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type. */
export interface GetAuthenticatorsRequestSDKType {
    account: string;
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponse {
    accountAuthenticators: AccountAuthenticator[];
}
/** MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type. */
export interface GetAuthenticatorsResponseSDKType {
    account_authenticators: AccountAuthenticatorSDKType[];
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequest {
    account: string;
    authenticatorId: Long;
}
/** MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type. */
export interface GetAuthenticatorRequestSDKType {
    account: string;
    authenticator_id: Long;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponse {
    accountAuthenticator?: AccountAuthenticator;
}
/** MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type. */
export interface GetAuthenticatorResponseSDKType {
    account_authenticator?: AccountAuthenticatorSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const GetAuthenticatorsRequest: {
    encode(message: GetAuthenticatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthenticatorsRequest;
    fromPartial(object: DeepPartial<GetAuthenticatorsRequest>): GetAuthenticatorsRequest;
};
export declare const GetAuthenticatorsResponse: {
    encode(message: GetAuthenticatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthenticatorsResponse;
    fromPartial(object: DeepPartial<GetAuthenticatorsResponse>): GetAuthenticatorsResponse;
};
export declare const GetAuthenticatorRequest: {
    encode(message: GetAuthenticatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthenticatorRequest;
    fromPartial(object: DeepPartial<GetAuthenticatorRequest>): GetAuthenticatorRequest;
};
export declare const GetAuthenticatorResponse: {
    encode(message: GetAuthenticatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthenticatorResponse;
    fromPartial(object: DeepPartial<GetAuthenticatorResponse>): GetAuthenticatorResponse;
};
