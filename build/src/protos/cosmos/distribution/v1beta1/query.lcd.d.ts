import { LCDClient } from '@osmonauts/lcd';
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType } from './query.js';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validatorDistributionInfo(params: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponseSDKType>;
    validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
    validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
    validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
    delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
    delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
    delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
    communityPool(_params?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
}
