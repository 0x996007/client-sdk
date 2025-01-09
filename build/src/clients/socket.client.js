import WebSocket from 'ws';
var OutgoingMessageTypes;
(function (OutgoingMessageTypes) {
    OutgoingMessageTypes["SUBSCRIBE"] = "subscribe";
    OutgoingMessageTypes["UNSUBSCRIBE"] = "unsubscribe";
})(OutgoingMessageTypes || (OutgoingMessageTypes = {}));
var SocketChannels;
(function (SocketChannels) {
    SocketChannels["SUBACCOUNTS"] = "v4_subaccounts";
    SocketChannels["ORDERBOOK"] = "v4_orderbook";
    SocketChannels["TRADES"] = "v4_trades";
    SocketChannels["MARKETS"] = "v4_markets";
    SocketChannels["CANDLES"] = "v4_candles";
})(SocketChannels || (SocketChannels = {}));
export var IncomingMessageTypes;
(function (IncomingMessageTypes) {
    IncomingMessageTypes["CONNECTED"] = "connected";
    IncomingMessageTypes["SUBSCRIBED"] = "subscribed";
    IncomingMessageTypes["ERROR"] = "error";
    IncomingMessageTypes["CHANNEL_DATA"] = "channel_data";
    IncomingMessageTypes["CHANNEL_BATCH_DATA"] = "channel_batch_data";
    IncomingMessageTypes["PONG"] = "pong";
})(IncomingMessageTypes || (IncomingMessageTypes = {}));
export var CandlesResolution;
(function (CandlesResolution) {
    CandlesResolution["ONE_MINUTE"] = "1MIN";
    CandlesResolution["FIVE_MINUTES"] = "5MINS";
    CandlesResolution["FIFTEEN_MINUTES"] = "15MINS";
    CandlesResolution["THIRTY_MINUTES"] = "30MINS";
    CandlesResolution["ONE_HOUR"] = "1HOUR";
    CandlesResolution["FOUR_HOURS"] = "4HOURS";
    CandlesResolution["ONE_DAY"] = "1DAY";
})(CandlesResolution || (CandlesResolution = {}));
export class SocketClient {
    url;
    ws;
    onOpenCallback;
    onCloseCallback;
    onMessageCallback;
    onErrorCallback;
    //   private lastMessageTime: number = Date.now();
    constructor(config, onOpenCallback, onCloseCallback, onMessageCallback, onErrorCallback) {
        this.url = config.websocketEndpoint;
        this.onOpenCallback = onOpenCallback;
        this.onCloseCallback = onCloseCallback;
        this.onMessageCallback = onMessageCallback;
        this.onErrorCallback = onErrorCallback;
    }
    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.addEventListener('open', this.handleOpen.bind(this));
        this.ws.addEventListener('close', this.handleClose.bind(this));
        this.ws.addEventListener('message', this.handleMessage.bind(this));
        this.ws.addEventListener('error', this.handleError.bind(this));
    }
    /**
     * @description Close the websocket connection.
     *
     */
    close() {
        this.ws?.close();
        this.ws = undefined;
    }
    /**
     * @description Check is the websocket connection connecting
     */
    isConnecting() {
        return this.ws?.readyState === WebSocket.CONNECTING;
    }
    /**
     * @description Check is the websocket connection open
     */
    isOpen() {
        return this.ws?.readyState === WebSocket.OPEN;
    }
    /**
     * @description Check is the websocket connection closing
     */
    isClosing() {
        return this.ws?.readyState === WebSocket.CLOSING;
    }
    /**
     * @description Check is the websocket connection closed
     */
    isClosed() {
        return this.ws?.readyState === WebSocket.CLOSED;
    }
    /**
     * @description Send data to the websocket connection.
     *
     */
    send(data) {
        this.ws?.send(data);
    }
    handleOpen() {
        if (this.onOpenCallback) {
            this.onOpenCallback();
        }
    }
    handleClose() {
        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
    }
    handleMessage(event) {
        if (event.data === 'PING') {
            this.send('PONG');
        }
        else {
            //   this.lastMessageTime = Date.now();
            if (this.onMessageCallback) {
                this.onMessageCallback(event);
            }
        }
    }
    handleError(event) {
        if (this.onErrorCallback) {
            this.onErrorCallback(event);
        }
    }
    /**
     * @description Set callback when the socket is opened.
     *
     */
    set onOpen(callback) {
        this.onOpenCallback = callback;
    }
    /**
     * @description Set callback when the socket is closed.
     *
     */
    set onClose(callback) {
        this.onCloseCallback = callback;
    }
    /**
     * @description Set callback when the socket receives a message.
     *
     */
    set onMessage(callback) {
        this.onMessageCallback = callback;
    }
    /**
     * @description Set callback when the socket encounters an error.
     */
    set onError(callback) {
        this.onErrorCallback = callback;
    }
    /**
     * @description Send a subscribe message to the websocket connection.
     *
     */
    subscribe(channel, params) {
        const message = {
            type: OutgoingMessageTypes.SUBSCRIBE,
            channel,
            ...params,
        };
        this.send(JSON.stringify(message));
    }
    /**
     * @description Send an unsubscribe message to the websocket connection.
     *
     */
    unsubscribe(channel, params) {
        const message = {
            type: OutgoingMessageTypes.UNSUBSCRIBE,
            channel,
            ...params,
        };
        this.send(JSON.stringify(message));
    }
    /**
     * @description Subscribe to markets channel.
     *
     */
    subscribeToMarkets() {
        const channel = SocketChannels.MARKETS;
        const params = {
            batched: true,
        };
        this.subscribe(channel, params);
    }
    /**
     * @description Unsubscribe from markets channel
     *
     */
    unsubscribeFromMarkets() {
        const channel = SocketChannels.MARKETS;
        this.unsubscribe(channel);
    }
    /**
     * @description Subscribe to trade channel
     * for a specific market.
     *
     */
    subscribeToTrades(market) {
        const channel = SocketChannels.TRADES;
        const params = {
            id: market,
            batched: true,
        };
        this.subscribe(channel, params);
    }
    /**
     * @description unsubscribe from trade channel
     * for a specific market.
     *
     */
    unsubscribeFromTrades(market) {
        const channel = SocketChannels.TRADES;
        const params = {
            id: market,
        };
        this.unsubscribe(channel, params);
    }
    /**
     * @description Subscribe to orderbook channel
     * for a specific market.
     *
     */
    subscribeToOrderbook(market) {
        const channel = SocketChannels.ORDERBOOK;
        const params = {
            id: market,
            batched: true,
        };
        this.subscribe(channel, params);
    }
    /**
     * @description Unsubscribe from orderbook channel
     * for a specific market.
     */
    unsubscribeFromOrderbook(market) {
        const channel = SocketChannels.ORDERBOOK;
        const params = {
            id: market,
        };
        this.unsubscribe(channel, params);
    }
    /**
     * @description Subscribe to candles channel
     * for a specific market and resolution.
     *
     */
    subscribeToCandles(market, resolution) {
        const channel = SocketChannels.CANDLES;
        const params = {
            id: `${market}/${resolution}`,
            batched: true,
        };
        this.subscribe(channel, params);
    }
    /**
     * @description Unsubscribe from candles channel
     * for a specific market and resolution.
     */
    unsubscribeFromCandles(market, resolution) {
        const channel = SocketChannels.CANDLES;
        const params = {
            id: `${market}/${resolution}`,
        };
        this.unsubscribe(channel, params);
    }
    /**
     * @description Subscribe to subaccount channel
     * for a specific address and subaccount number.
     */
    subscribeToSubaccount(address, subaccountNumber) {
        const channel = SocketChannels.SUBACCOUNTS;
        const subaccountId = `${address}/${subaccountNumber}`;
        const params = {
            id: subaccountId,
        };
        this.subscribe(channel, params);
    }
    /**
     * @description Unsubscribe from subaccount channel
     * for a specific address and subaccount number.
     *
     */
    unsubscribeFromSubaccount(address, subaccountNumber) {
        const channel = SocketChannels.SUBACCOUNTS;
        const subaccountId = `${address}/${subaccountNumber}`;
        const params = {
            id: subaccountId,
        };
        this.unsubscribe(channel, params);
    }
}
//# sourceMappingURL=socket.client.js.map