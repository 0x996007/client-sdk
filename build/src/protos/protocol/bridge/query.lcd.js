/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.eventParams = this.eventParams.bind(this);
        this.proposeParams = this.proposeParams.bind(this);
        this.safetyParams = this.safetyParams.bind(this);
        this.acknowledgedEventInfo = this.acknowledgedEventInfo.bind(this);
        this.recognizedEventInfo = this.recognizedEventInfo.bind(this);
        this.delayedCompleteBridgeMessages =
            this.delayedCompleteBridgeMessages.bind(this);
    }
    /* Queries the EventParams. */
    async eventParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/bridge/event_params`;
        return await this.req.get(endpoint);
    }
    /* Queries the ProposeParams. */
    async proposeParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/bridge/propose_params`;
        return await this.req.get(endpoint);
    }
    /* Queries the SafetyParams. */
    async safetyParams(_params = {}) {
        const endpoint = `dydxprotocol/v4/bridge/safety_params`;
        return await this.req.get(endpoint);
    }
    /* Queries the AcknowledgedEventInfo.
     An "acknowledged" event is one that is in-consensus and has been stored
     in-state. */
    async acknowledgedEventInfo(_params = {}) {
        const endpoint = `dydxprotocol/v4/bridge/acknowledged_event_info`;
        return await this.req.get(endpoint);
    }
    /* Queries the RecognizedEventInfo.
     A "recognized" event is one that is finalized on the Ethereum blockchain
     and has been identified by the queried node. It is not yet in-consensus. */
    async recognizedEventInfo(_params = {}) {
        const endpoint = `dydxprotocol/v4/bridge/recognized_event_info`;
        return await this.req.get(endpoint);
    }
    /* Queries all `MsgCompleteBridge` messages that are delayed (not yet
     executed) and corresponding block heights at which they will execute. */
    async delayedCompleteBridgeMessages(params) {
        const options = {
            params: {},
        };
        if (typeof params?.address !== 'undefined') {
            options.params.address = params.address;
        }
        const endpoint = `dydxprotocol/v4/bridge/delayed_complete_bridge_messages`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map