import { MarketMapperRevenueShareParams, MarketMapperRevenueShareParamsSDKType } from './params.js';
import { MarketMapperRevShareDetails, MarketMapperRevShareDetailsSDKType, UnconditionalRevShareConfig, UnconditionalRevShareConfigSDKType } from './revshare.js';
import * as _m0 from 'protobufjs/minimal.js';
import { DeepPartial } from '../../helpers.js';
/** Queries for the default market mapper revenue share params */
export interface QueryMarketMapperRevenueShareParams {
}
/** Queries for the default market mapper revenue share params */
export interface QueryMarketMapperRevenueShareParamsSDKType {
}
/** Response type for QueryMarketMapperRevenueShareParams */
export interface QueryMarketMapperRevenueShareParamsResponse {
    params?: MarketMapperRevenueShareParams;
}
/** Response type for QueryMarketMapperRevenueShareParams */
export interface QueryMarketMapperRevenueShareParamsResponseSDKType {
    params?: MarketMapperRevenueShareParamsSDKType;
}
/** Queries market mapper revenue share details for a specific market */
export interface QueryMarketMapperRevShareDetails {
    /** Queries market mapper revenue share details for a specific market */
    marketId: number;
}
/** Queries market mapper revenue share details for a specific market */
export interface QueryMarketMapperRevShareDetailsSDKType {
    market_id: number;
}
/** Response type for QueryMarketMapperRevShareDetails */
export interface QueryMarketMapperRevShareDetailsResponse {
    details?: MarketMapperRevShareDetails;
}
/** Response type for QueryMarketMapperRevShareDetails */
export interface QueryMarketMapperRevShareDetailsResponseSDKType {
    details?: MarketMapperRevShareDetailsSDKType;
}
/** Queries unconditional revenue share details */
export interface QueryUnconditionalRevShareConfig {
}
/** Queries unconditional revenue share details */
export interface QueryUnconditionalRevShareConfigSDKType {
}
/** Response type for QueryUnconditionalRevShareConfig */
export interface QueryUnconditionalRevShareConfigResponse {
    config?: UnconditionalRevShareConfig;
}
/** Response type for QueryUnconditionalRevShareConfig */
export interface QueryUnconditionalRevShareConfigResponseSDKType {
    config?: UnconditionalRevShareConfigSDKType;
}
export declare const QueryMarketMapperRevenueShareParams: {
    encode(_: QueryMarketMapperRevenueShareParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMapperRevenueShareParams;
    fromPartial(_: DeepPartial<QueryMarketMapperRevenueShareParams>): QueryMarketMapperRevenueShareParams;
};
export declare const QueryMarketMapperRevenueShareParamsResponse: {
    encode(message: QueryMarketMapperRevenueShareParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMapperRevenueShareParamsResponse;
    fromPartial(object: DeepPartial<QueryMarketMapperRevenueShareParamsResponse>): QueryMarketMapperRevenueShareParamsResponse;
};
export declare const QueryMarketMapperRevShareDetails: {
    encode(message: QueryMarketMapperRevShareDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMapperRevShareDetails;
    fromPartial(object: DeepPartial<QueryMarketMapperRevShareDetails>): QueryMarketMapperRevShareDetails;
};
export declare const QueryMarketMapperRevShareDetailsResponse: {
    encode(message: QueryMarketMapperRevShareDetailsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMapperRevShareDetailsResponse;
    fromPartial(object: DeepPartial<QueryMarketMapperRevShareDetailsResponse>): QueryMarketMapperRevShareDetailsResponse;
};
export declare const QueryUnconditionalRevShareConfig: {
    encode(_: QueryUnconditionalRevShareConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnconditionalRevShareConfig;
    fromPartial(_: DeepPartial<QueryUnconditionalRevShareConfig>): QueryUnconditionalRevShareConfig;
};
export declare const QueryUnconditionalRevShareConfigResponse: {
    encode(message: QueryUnconditionalRevShareConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnconditionalRevShareConfigResponse;
    fromPartial(object: DeepPartial<QueryUnconditionalRevShareConfigResponse>): QueryUnconditionalRevShareConfigResponse;
};
