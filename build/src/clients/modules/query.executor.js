import { accountFromAny, } from '@cosmjs/stargate';
import * as AuthModule from 'cosmjs-types/cosmos/auth/v1beta1/query.js';
import * as BankModule from 'cosmjs-types/cosmos/bank/v1beta1/query.js';
import Long from 'long';
import protobuf from 'protobufjs';
import { bigIntToBytes } from '../../utils/transform.util.js';
import { PAGE_REQUEST } from '../../common/constants.js';
import { UnexpectedClientError } from '../../common/errors.js';
import { AffiliateModule, BridgeModule, ClobModule, DistributionModule, FeeTierModule, GovV1Module, PerpetualsModule, PricesModule, RateLimitModule, RewardsModule, StakingModule, StatsModule, SubaccountsModule, VaultModule, } from '../../protos/queries.js';
import { ProposalStatus } from '../../protos/types.js';
// Required for encoding and decoding queries that are of type Long.
// Must be done once but since the individal modules should be usable without
// dYdXClient - must be set in each module that encounters encoding/decoding Longs.
// Reference: https://github.com/protobufjs/protobuf.js/issues/921
protobuf.util.Long = Long;
protobuf.configure();
export class QueryExecutor {
    tendermintClient;
    stargateQueryClient;
    constructor(tendermintClient, stargateQueryClient) {
        this.tendermintClient = tendermintClient;
        this.stargateQueryClient = stargateQueryClient;
    }
    /**
     * @description Get latest block
     *
     * @returns last block structure
     */
    async latestBlock() {
        return this.tendermintClient.getBlock();
    }
    /**
     * @description Get latest block height
     *
     * @returns last height
     */
    async latestBlockHeight() {
        const block = await this.latestBlock();
        return block.header.height;
    }
    /**
     * @description Get all fee tier params.
     *
     * @returns All fee tier params.
     */
    async getFeeTiers() {
        const requestData = Uint8Array.from(FeeTierModule.QueryPerpetualFeeParamsRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.feetiers.Query/PerpetualFeeParams', requestData);
        return FeeTierModule.QueryPerpetualFeeParamsResponse.decode(data);
    }
    /**
     * @description Get fee tier the user belongs to
     *
     * @returns the fee tier user belongs to.
     */
    async getUserFeeTier(address) {
        const requestData = Uint8Array.from(FeeTierModule.QueryUserFeeTierRequest.encode({ user: address }).finish());
        const data = await this.sendQuery('/dydxprotocol.feetiers.Query/UserFeeTier', requestData);
        return FeeTierModule.QueryUserFeeTierResponse.decode(data);
    }
    /**
     * @description Get get trading stats
     *
     * @returns return the user's taker and maker volume
     */
    async getUserStats(address) {
        const requestData = Uint8Array.from(StatsModule.QueryUserStatsRequest.encode({ user: address }).finish());
        const data = await this.sendQuery('/dydxprotocol.stats.Query/UserStats', requestData);
        return StatsModule.QueryUserStatsResponse.decode(data).stats;
    }
    /**
     * @description Get all balances for an account.
     *
     * @returns Array of Coin balances for all tokens held by an account.
     */
    async getAccountBalances(address) {
        const requestData = Uint8Array.from(BankModule.QueryAllBalancesRequest.encode({ address }).finish());
        const data = await this.sendQuery('/cosmos.bank.v1beta1.Query/AllBalances', requestData);
        return BankModule.QueryAllBalancesResponse.decode(data).balances;
    }
    /**
     * @description Get balances of one denom for an account.
     *
     * @returns Coin balance for denom tokens held by an account.
     */
    async getAccountBalance(address, denom) {
        const requestData = Uint8Array.from(BankModule.QueryBalanceRequest.encode({
            address,
            denom,
        }).finish());
        const data = await this.sendQuery('/cosmos.bank.v1beta1.Query/Balance', requestData);
        const coin = BankModule.QueryBalanceResponse.decode(data).balance;
        return coin;
    }
    /**
     * @description Get all subaccounts
     *
     * @returns All subaccounts
     */
    async getSubaccounts() {
        const requestData = Uint8Array.from(SubaccountsModule.QueryAllSubaccountRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.subaccounts.Query/SubaccountAll', requestData);
        return SubaccountsModule.QuerySubaccountAllResponse.decode(data);
    }
    /**
     * @description Get a specific subaccount for an account.
     *
     * @returns Subaccount for account with given accountNumber or default subaccount if none exists.
     */
    async getSubaccount(address, accountNumber) {
        const requestData = Uint8Array.from(SubaccountsModule.QueryGetSubaccountRequest.encode({
            owner: address,
            number: accountNumber,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.subaccounts.Query/Subaccount', requestData);
        return SubaccountsModule.QuerySubaccountResponse.decode(data);
    }
    /**
     * @description Get the params for the rewards module.
     *
     * @returns Params for the rewards module.
     */
    async getRewardsParams() {
        const requestData = Uint8Array.from(RewardsModule.QueryParamsRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.rewards.Query/Params', requestData);
        return RewardsModule.QueryParamsResponse.decode(data);
    }
    /**
     * @description Get all Clob Pairs.
     *
     * @returns Information on all Clob Pairs.
     */
    async getAllClobPairs() {
        const requestData = Uint8Array.from(ClobModule.QueryAllClobPairRequest.encode({
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.clob.Query/ClobPairAll', requestData);
        return ClobModule.QueryClobPairAllResponse.decode(data);
    }
    /**
     * @description Get Clob Pair for an Id or the promise is rejected if no pair exists.
     *
     * @returns Clob Pair for a given Clob Pair Id.
     */
    async getClobPair(pairId) {
        const requestData = Uint8Array.from(ClobModule.QueryGetClobPairRequest.encode({ id: pairId }).finish());
        const data = await this.sendQuery('/dydxprotocol.clob.Query/ClobPair', requestData);
        return ClobModule.QueryClobPairResponse.decode(data);
    }
    /**
     * @description Get all Prices across markets.
     *
     * @returns Prices across all markets.
     */
    async getAllPrices() {
        const requestData = Uint8Array.from(PricesModule.QueryAllMarketPricesRequest.encode({
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.prices.Query/AllMarketPrices', requestData);
        return PricesModule.QueryAllMarketPricesResponse.decode(data);
    }
    /**
     * @description Get Price for a clob Id or the promise is rejected if none exists.
     *
     * @returns Price for a given Market Id.
     */
    async getPrice(marketId) {
        const requestData = Uint8Array.from(PricesModule.QueryMarketPriceRequest.encode({ id: marketId }).finish());
        const data = await this.sendQuery('/dydxprotocol.prices.Query/MarketPrice', requestData);
        return PricesModule.QueryMarketPriceResponse.decode(data);
    }
    /**
     * @description Get all Perpetuals.
     *
     * @returns Information on all Perpetual pairs.
     */
    async getAllPerpetuals() {
        const requestData = Uint8Array.from(PerpetualsModule.QueryAllPerpetualsRequest.encode({
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.perpetuals.Query/AllPerpetuals', requestData);
        return PerpetualsModule.QueryAllPerpetualsResponse.decode(data);
    }
    /**
     * @description Get Perpetual for an Id or the promise is rejected if none exists.
     *
     * @returns The Perpetual for a given Perpetual Id.
     */
    async getPerpetual(perpetualId) {
        const requestData = Uint8Array.from(PerpetualsModule.QueryPerpetualRequest.encode({
            id: perpetualId,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.perpetuals.Query/Perpetual', requestData);
        return PerpetualsModule.QueryPerpetualResponse.decode(data);
    }
    /**
     * @description Get Account for an address or the promise is rejected if the account
     * does not exist on-chain.
     *
     * @throws UnexpectedClientError if a malformed response is returned with no GRPC error.
     * @returns An account for a given address.
     */
    async getAccount(address) {
        const requestData = Uint8Array.from(AuthModule.QueryAccountRequest.encode({ address }).finish());
        const data = await this.sendQuery('/cosmos.auth.v1beta1.Query/Account', requestData);
        const rawAccount = AuthModule.QueryAccountResponse.decode(data).account;
        // The promise should have been rejected if the rawAccount was undefined.
        if (rawAccount === undefined) {
            throw new UnexpectedClientError();
        }
        return accountFromAny(rawAccount);
    }
    /**
     * @description Get equity tier limit configuration.
     *
     * @returns Information on all equity tiers that are configured.
     */
    async getEquityTierLimitConfiguration() {
        const requestData = Uint8Array.from(ClobModule.QueryEquityTierLimitConfigurationRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.clob.Query/EquityTierLimitConfiguration', requestData);
        return ClobModule.QueryEquityTierLimitConfigurationResponse.decode(data);
    }
    /**
     *
     * @description Get all delegations from a delegator.
     *
     * @returns All delegations from a delegator.
     */
    async getDelegatorDelegations(delegatorAddr) {
        const requestData = Uint8Array.from(StakingModule.QueryDelegatorDelegationsRequest.encode({
            delegatorAddr,
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/cosmos.staking.v1beta1.Query/DelegatorDelegations', requestData);
        return StakingModule.QueryDelegatorDelegationsResponse.decode(data);
    }
    /**
     *
     * @description Get all unbonding delegations from a delegator.
     *
     * @returns All unbonding delegations from a delegator.
     */
    async getDelegatorUnbondingDelegations(delegatorAddr) {
        const requestData = Uint8Array.from(StakingModule.QueryDelegatorUnbondingDelegationsRequest.encode({
            delegatorAddr,
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations', requestData);
        return StakingModule.QueryDelegatorUnbondingDelegationsResponse.decode(data);
    }
    /**
     *
     * @description Get all unbonding delegations from a delegator.
     *
     * @returns All unbonding delegations from a delegator.
     */
    async getDelegationTotalRewards(delegatorAddress) {
        const requestData = Uint8Array.from(DistributionModule.QueryDelegationTotalRewardsRequest.encode({
            delegatorAddress,
        }).finish());
        const data = await this.sendQuery('/cosmos.distribution.v1beta1.Query/DelegationTotalRewards', requestData);
        return DistributionModule.QueryDelegationTotalRewardsResponse.decode(data);
    }
    /**
     * @description Get all delayed complete bridge messages, optionally filtered by address.
     *
     * @returns Information on all delayed complete bridge messages.
     */
    async getDelayedCompleteBridgeMessages(address = '') {
        const requestData = Uint8Array.from(BridgeModule.QueryDelayedCompleteBridgeMessagesRequest.encode({
            address,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.bridge.Query/DelayedCompleteBridgeMessages', requestData);
        return BridgeModule.QueryDelayedCompleteBridgeMessagesResponse.decode(data);
    }
    /**
     * @description Get all validators of a status.
     *
     * @returns all validators of a status.
     */
    async getAllValidators(status = '') {
        const requestData = Uint8Array.from(StakingModule.QueryValidatorsRequest.encode({
            status,
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/cosmos.staking.v1beta1.Query/Validators', requestData);
        return StakingModule.QueryValidatorsResponse.decode(data);
    }
    /**
     * @description Get all gov proposals.
     *
     * @param proposalStatus Status of the proposal to filter by.
     * @param voter Voter to filter by.
     * @param depositor Depositor to filter by.
     *
     * @returns All gov proposals that match the filters above.
     */
    async getAllGovProposals(proposalStatus = ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD, voter = '', depositor = '') {
        const requestData = Uint8Array.from(GovV1Module.QueryProposalsRequest.encode({
            proposalStatus,
            voter,
            depositor,
            pagination: PAGE_REQUEST,
        }).finish());
        const data = await this.sendQuery('/cosmos.gov.v1.Query/Proposals', requestData);
        return GovV1Module.QueryProposalsResponse.decode(data);
    }
    async getWithdrawalAndTransferGatingStatus(perpetualId) {
        const requestData = Uint8Array.from(SubaccountsModule.QueryGetWithdrawalAndTransfersBlockedInfoRequest.encode({
            perpetualId,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.subaccounts.Query/GetWithdrawalAndTransfersBlockedInfo', requestData);
        return SubaccountsModule.QueryGetWithdrawalAndTransfersBlockedInfoResponse.decode(data);
    }
    async getWithdrawalCapacityByDenom(denom) {
        const requestData = Uint8Array.from(RateLimitModule.QueryCapacityByDenomRequest.encode({
            denom,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.ratelimit.Query/CapacityByDenom', requestData);
        return RateLimitModule.QueryCapacityByDenomResponse.decode(data);
    }
    async getMegavaultOwnerShares(address) {
        const requestData = Uint8Array.from(VaultModule.QueryMegavaultOwnerSharesRequest.encode({
            address,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.vault.Query/MegavaultOwnerShares', requestData);
        return VaultModule.QueryMegavaultOwnerSharesResponse.decode(data);
    }
    async getMegavaultWithdrawalInfo(sharesToWithdraw) {
        const requestData = Uint8Array.from(VaultModule.QueryMegavaultWithdrawalInfoRequest.encode({
            sharesToWithdraw: {
                numShares: bigIntToBytes(sharesToWithdraw),
            },
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.vault.Query/MegavaultWithdrawalInfo', requestData);
        return VaultModule.QueryMegavaultWithdrawalInfoResponse.decode(data);
    }
    async getAffiliateInfo(address) {
        const requestData = Uint8Array.from(AffiliateModule.AffiliateInfoRequest.encode({
            address,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.affiliates.Query/AffiliateInfo', requestData);
        return AffiliateModule.AffiliateInfoResponse.decode(data);
    }
    async getReferredBy(address) {
        const requestData = Uint8Array.from(AffiliateModule.ReferredByRequest.encode({
            address,
        }).finish());
        const data = await this.sendQuery('/dydxprotocol.affiliates.Query/ReferredBy', requestData);
        return AffiliateModule.ReferredByResponse.decode(data);
    }
    async getAllAffiliateTiers() {
        const requestData = Uint8Array.from(AffiliateModule.AllAffiliateTiersRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.affiliates.Query/AllAffiliateTiers', requestData);
        return AffiliateModule.AllAffiliateTiersResponse.decode(data);
    }
    async getAffiliateWhitelist() {
        const requestData = Uint8Array.from(AffiliateModule.AffiliateWhitelistRequest.encode({}).finish());
        const data = await this.sendQuery('/dydxprotocol.affiliates.Query/AffiliateWhitelist', requestData);
        return AffiliateModule.AffiliateWhitelistResponse.decode(data);
    }
    async sendQuery(requestUrl, requestData) {
        const resp = await this.stargateQueryClient.queryAbci(requestUrl, requestData);
        return resp.value;
    }
}
//# sourceMappingURL=query.executor.js.map