/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.downtimeParams = this.downtimeParams.bind(this);
        this.allDowntimeInfo = this.allDowntimeInfo.bind(this);
    }
    /* Queries the DowntimeParams. */
    async downtimeParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/blocktime/downtime_params`;
        return await this.req.get(endpoint);
    }
    /* Queries all recorded downtime info. */
    async allDowntimeInfo(_params = {}) {
        const endpoint = `dydxprotocol/v4/blocktime/all_downtime_info`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map