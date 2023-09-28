"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5800], {
        85610: function(e, t, n) {
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Centrifuge = t.UnauthorizedError = void 0;
            const i = n(39259),
                r = n(70341),
                o = n(38205),
                c = n(36483),
                a = n(11333),
                h = n(67751),
                u = n(38385),
                l = n(35179),
                d = n(96696),
                _ = n(64652),
                p = s(n(36560)),
                b = {
                    protocol: "json",
                    token: "",
                    getToken: null,
                    data: null,
                    getData: null,
                    debug: !1,
                    name: "js",
                    version: "",
                    fetch: null,
                    readableStream: null,
                    websocket: null,
                    eventsource: null,
                    sockjs: null,
                    sockjsOptions: {},
                    emulationEndpoint: "/emulation",
                    minReconnectDelay: 500,
                    maxReconnectDelay: 2e4,
                    timeout: 5e3,
                    maxServerPingDelay: 1e4,
                    networkEventTarget: null
                };
            class f extends Error {
                constructor(e) {
                    super(e), this.name = this.constructor.name
                }
            }
            t.UnauthorizedError = f;
            class g extends p.default {
                constructor(e, t) {
                    super(), this._reconnectTimeout = null, this._refreshTimeout = null, this._serverPingTimeout = null, this.state = _.State.Disconnected, this._endpoint = e, this._emulation = !1, this._transports = [], this._currentTransportIndex = 0, this._triedAllTransports = !1, this._transportWasOpen = !1, this._transport = null, this._transportId = 0, this._deviceWentOffline = !1, this._transportClosed = !0, this._encoder = null, this._decoder = null, this._reconnecting = !1, this._reconnectTimeout = null, this._reconnectAttempts = 0, this._client = null, this._session = "", this._node = "", this._subs = {}, this._serverSubs = {}, this._commandId = 0, this._commands = [], this._batching = !1, this._refreshRequired = !1, this._refreshTimeout = null, this._callbacks = {}, this._token = "", this._data = null, this._dispatchPromise = Promise.resolve(), this._serverPing = 0, this._serverPingTimeout = null, this._sendPong = !1, this._promises = {}, this._promiseId = 0, this._debugEnabled = !1, this._networkEventsSet = !1, this._config = Object.assign(Object.assign({}, b), t), this._configure(), this._debugEnabled ? (this.on("state", (e => {
                        this._debug("client state", e.oldState, "->", e.newState)
                    })), this.on("error", (e => {
                        this._debug("client error", e)
                    }))) : this.on("error", (function() {
                        Function.prototype()
                    }))
                }
                newSubscription(e, t) {
                    if (null !== this.getSubscription(e)) throw new Error("Subscription to the channel " + e + " already exists");
                    const n = new i.Subscription(this, e, t);
                    return this._subs[e] = n, n
                }
                getSubscription(e) {
                    return this._getSub(e)
                }
                removeSubscription(e) {
                    e && (e.state !== _.SubscriptionState.Unsubscribed && e.unsubscribe(), this._removeSubscription(e))
                }
                subscriptions() {
                    return this._subs
                }
                ready(e) {
                    return this.state === _.State.Disconnected ? Promise.reject({
                        code: r.errorCodes.clientDisconnected,
                        message: "client disconnected"
                    }) : this.state === _.State.Connected ? Promise.resolve() : new Promise(((t, n) => {
                        const s = {
                            resolve: t,
                            reject: n
                        };
                        e && (s.timeout = setTimeout((function() {
                            n({
                                code: r.errorCodes.timeout,
                                message: "timeout"
                            })
                        }), e)), this._promises[this._nextPromiseId()] = s
                    }))
                }
                connect() {
                    this._isConnected() ? this._debug("connect called when already connected") : this._isConnecting() ? this._debug("connect called when already connecting") : (this._debug("connect called"), this._reconnectAttempts = 0, this._startConnecting())
                }
                disconnect() {
                    this._disconnect(r.disconnectedCodes.disconnectCalled, "disconnect called", !1)
                }
                setToken(e) {
                    this._token = e
                }
                send(e) {
                    const t = {
                            send: {
                                data: e
                            }
                        },
                        n = this;
                    return this._methodCall().then((function() {
                        return n._transportSendCommands([t]) ? Promise.resolve() : Promise.reject(n._createErrorObject(r.errorCodes.transportWriteError, "transport write error"))
                    }))
                }
                rpc(e, t) {
                    const n = {
                            rpc: {
                                method: e,
                                data: t
                            }
                        },
                        s = this;
                    return this._methodCall().then((function() {
                        return s._callPromise(n, (function(e) {
                            return {
                                data: e.rpc.data
                            }
                        }))
                    }))
                }
                publish(e, t) {
                    const n = {
                            publish: {
                                channel: e,
                                data: t
                            }
                        },
                        s = this;
                    return this._methodCall().then((function() {
                        return s._callPromise(n, (function() {
                            return {}
                        }))
                    }))
                }
                history(e, t) {
                    const n = {
                            history: this._getHistoryRequest(e, t)
                        },
                        s = this;
                    return this._methodCall().then((function() {
                        return s._callPromise(n, (function(t) {
                            const n = t.history,
                                i = [];
                            if (n.publications)
                                for (let r = 0; r < n.publications.length; r++) i.push(s._getPublicationContext(e, n.publications[r]));
                            return {
                                publications: i,
                                epoch: n.epoch || "",
                                offset: n.offset || 0
                            }
                        }))
                    }))
                }
                presence(e) {
                    const t = {
                            presence: {
                                channel: e
                            }
                        },
                        n = this;
                    return this._methodCall().then((function() {
                        return n._callPromise(t, (function(e) {
                            const t = e.presence.presence;
                            for (const n in t)
                                if (t.hasOwnProperty(n)) {
                                    const e = t[n].conn_info,
                                        s = t[n].chan_info;
                                    e && (t[n].connInfo = e), s && (t[n].chanInfo = s)
                                }
                            return {
                                clients: t
                            }
                        }))
                    }))
                }
                presenceStats(e) {
                    const t = {
                            presence_stats: {
                                channel: e
                            }
                        },
                        n = this;
                    return this._methodCall().then((function() {
                        return n._callPromise(t, (function(e) {
                            const t = e.presence_stats;
                            return {
                                numUsers: t.num_users,
                                numClients: t.num_clients
                            }
                        }))
                    }))
                }
                startBatching() {
                    this._batching = !0
                }
                stopBatching() {
                    const e = this;
                    Promise.resolve().then((function() {
                        Promise.resolve().then((function() {
                            e._batching = !1, e._flush()
                        }))
                    }))
                }
                _debug(...e) {
                    this._debugEnabled && (0, d.log)("debug", e)
                }
                _setFormat(e) {
                    if (!this._formatOverride(e)) {
                        if ("protobuf" === e) throw new Error("not implemented by JSON-only Centrifuge client, use client with Protobuf support");
                        this._encoder = new l.JsonEncoder, this._decoder = new l.JsonDecoder
                    }
                }
                _formatOverride(e) {
                    return !1
                }
                _configure() {
                    if (!("Promise" in globalThis)) throw new Error("Promise polyfill required");
                    if (!this._endpoint) throw new Error("endpoint configuration required");
                    if ("json" !== this._config.protocol && "protobuf" !== this._config.protocol) throw new Error("unsupported protocol " + this._config.protocol);
                    if (null !== this._config.token && (this._token = this._config.token), null !== this._config.data && (this._data = this._config.data), this._setFormat("json"), "protobuf" === this._config.protocol && this._setFormat("protobuf"), (!0 === this._config.debug || "undefined" !== typeof localStorage && localStorage.getItem("centrifuge.debug")) && (this._debugEnabled = !0), this._debug("config", this._config), "string" === typeof this._endpoint);
                    else {
                        if (!("object" === typeof this._endpoint && this._endpoint instanceof Array)) throw new Error("unsupported url configuration type: only string or array of objects are supported");
                        this._transports = this._endpoint, this._emulation = !0;
                        for (const e in this._transports) {
                            const t = this._transports[e];
                            if (!t.endpoint || !t.transport) throw new Error("malformed transport configuration");
                            const n = t.transport;
                            if (["websocket", "http_stream", "sse", "sockjs", "webtransport"].indexOf(n) < 0) throw new Error("unsupported transport name: " + n)
                        }
                    }
                }
                _setState(e) {
                    if (this.state !== e) {
                        this._reconnecting = !1;
                        const t = this.state;
                        return this.state = e, this.emit("state", {
                            newState: e,
                            oldState: t
                        }), !0
                    }
                    return !1
                }
                _isDisconnected() {
                    return this.state === _.State.Disconnected
                }
                _isConnecting() {
                    return this.state === _.State.Connecting
                }
                _isConnected() {
                    return this.state === _.State.Connected
                }
                _nextCommandId() {
                    return ++this._commandId
                }
                _setNetworkEvents() {
                    if (this._networkEventsSet) return;
                    let e = null;
                    null !== this._config.networkEventTarget ? e = this._config.networkEventTarget : "undefined" !== typeof globalThis.addEventListener && (e = globalThis), e && (e.addEventListener("offline", (() => {
                        this._debug("offline event triggered"), this.state !== _.State.Connected && this.state !== _.State.Connecting || (this._disconnect(r.connectingCodes.transportClosed, "transport closed", !0), this._deviceWentOffline = !0)
                    })), e.addEventListener("online", (() => {
                        this._debug("online event triggered"), this.state === _.State.Connecting && (this._deviceWentOffline && !this._transportClosed && (this._deviceWentOffline = !1, this._transportClosed = !0), this._clearReconnectTimeout(), this._startReconnecting())
                    })), this._networkEventsSet = !0)
                }
                _getReconnectDelay() {
                    const e = (0, d.backoff)(this._reconnectAttempts, this._config.minReconnectDelay, this._config.maxReconnectDelay);
                    return this._reconnectAttempts += 1, e
                }
                _clearOutgoingRequests() {
                    for (const e in this._callbacks)
                        if (this._callbacks.hasOwnProperty(e)) {
                            const t = this._callbacks[e];
                            clearTimeout(t.timeout);
                            const n = t.errback;
                            if (!n) continue;
                            n({
                                error: this._createErrorObject(r.errorCodes.connectionClosed, "connection closed")
                            })
                        }
                    this._callbacks = {}
                }
                _clearConnectedState() {
                    this._client = null, this._clearServerPingTimeout(), this._clearRefreshTimeout();
                    for (const e in this._subs) {
                        if (!this._subs.hasOwnProperty(e)) continue;
                        const t = this._subs[e];
                        t.state === _.SubscriptionState.Subscribed && t._setSubscribing(r.subscribingCodes.transportClosed, "transport closed")
                    }
                    for (const e in this._serverSubs) this._serverSubs.hasOwnProperty(e) && this.emit("subscribing", {
                        channel: e
                    })
                }
                _handleWriteError(e) {
                    for (const t of e) {
                        const e = t.id;
                        if (!(e in this._callbacks)) continue;
                        const n = this._callbacks[e];
                        clearTimeout(this._callbacks[e].timeout), delete this._callbacks[e];
                        (0, n.errback)({
                            error: this._createErrorObject(r.errorCodes.transportWriteError, "transport write error")
                        })
                    }
                }
                _transportSendCommands(e) {
                    if (!e.length) return !0;
                    if (!this._transport) return !1;
                    try {
                        this._transport.send(this._encoder.encodeCommands(e), this._session, this._node)
                    } catch (t) {
                        return this._debug("error writing commands", t), this._handleWriteError(e), !1
                    }
                    return !0
                }
                _initializeTransport() {
                    let e;
                    null !== this._config.websocket ? e = this._config.websocket : "function" !== typeof globalThis.WebSocket && "object" !== typeof globalThis.WebSocket || (e = globalThis.WebSocket);
                    let t = null;
                    null !== this._config.sockjs ? t = this._config.sockjs : "undefined" !== typeof globalThis.SockJS && (t = globalThis.SockJS);
                    let n = null;
                    null !== this._config.eventsource ? n = this._config.eventsource : "undefined" !== typeof globalThis.EventSource && (n = globalThis.EventSource);
                    let s = null;
                    null !== this._config.fetch ? s = this._config.fetch : "undefined" !== typeof globalThis.fetch && (s = globalThis.fetch);
                    let i = null;
                    if (null !== this._config.readableStream ? i = this._config.readableStream : "undefined" !== typeof globalThis.ReadableStream && (i = globalThis.ReadableStream), this._emulation) {
                        this._currentTransportIndex >= this._transports.length && (this._triedAllTransports = !0, this._currentTransportIndex = 0);
                        let r = 0;
                        for (;;) {
                            if (r >= this._transports.length) throw new Error("no supported transport found");
                            const l = this._transports[this._currentTransportIndex],
                                d = l.transport,
                                _ = l.endpoint;
                            if ("websocket" === d) {
                                if (this._debug("trying websocket transport"), this._transport = new c.WebsocketTransport(_, {
                                        websocket: e
                                    }), !this._transport.supported()) {
                                    this._debug("websocket transport not available"), this._currentTransportIndex++, r++;
                                    continue
                                }
                            } else if ("webtransport" === d) {
                                if (this._debug("trying webtransport transport"), this._transport = new u.WebtransportTransport(_, {
                                        webtransport: globalThis.WebTransport,
                                        decoder: this._decoder,
                                        encoder: this._encoder
                                    }), !this._transport.supported()) {
                                    this._debug("webtransport transport not available"), this._currentTransportIndex++, r++;
                                    continue
                                }
                            } else if ("http_stream" === d) {
                                if (this._debug("trying http_stream transport"), this._transport = new a.HttpStreamTransport(_, {
                                        fetch: s,
                                        readableStream: i,
                                        emulationEndpoint: this._config.emulationEndpoint,
                                        decoder: this._decoder,
                                        encoder: this._encoder
                                    }), !this._transport.supported()) {
                                    this._debug("http_stream transport not available"), this._currentTransportIndex++, r++;
                                    continue
                                }
                            } else if ("sse" === d) {
                                if (this._debug("trying sse transport"), this._transport = new h.SseTransport(_, {
                                        eventsource: n,
                                        fetch: s,
                                        emulationEndpoint: this._config.emulationEndpoint
                                    }), !this._transport.supported()) {
                                    this._debug("sse transport not available"), this._currentTransportIndex++, r++;
                                    continue
                                }
                            } else {
                                if ("sockjs" !== d) throw new Error("unknown transport " + d);
                                if (this._debug("trying sockjs"), this._transport = new o.SockjsTransport(_, {
                                        sockjs: t,
                                        sockjsOptions: this._config.sockjsOptions
                                    }), !this._transport.supported()) {
                                    this._debug("sockjs transport not available"), this._currentTransportIndex++, r++;
                                    continue
                                }
                            }
                            break
                        }
                    } else {
                        if ((0, d.startsWith)(this._endpoint, "http")) throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");
                        if (this._debug("client will use websocket"), this._transport = new c.WebsocketTransport(this._endpoint, {
                                websocket: e
                            }), !this._transport.supported()) throw new Error("WebSocket not available")
                    }
                    const l = this,
                        _ = this._transport,
                        p = this._nextTransportId();
                    l._debug("id of transport", p);
                    let b = !1,
                        f = !0;
                    "sse" === this._transport.name() && (f = !1);
                    const g = [];
                    if (this._transport.emulation()) {
                        const e = l._sendConnect(!0);
                        if (g.push(e), f) {
                            const e = l._sendSubscribeCommands(!0, !0);
                            for (const t in e) g.push(e[t])
                        }
                    }
                    this._setNetworkEvents();
                    const m = this._encoder.encodeCommands(g);
                    let v;
                    this._transportClosed = !1, v = setTimeout((function() {
                        _.close()
                    }), this._config.timeout), this._transport.initialize(this._config.protocol, {
                        onOpen: function() {
                            if (v && (clearTimeout(v), v = null), l._transportId != p) return l._debug("open callback from non-actual transport"), void _.close();
                            b = !0, l._debug(_.subName(), "transport open"), l._transportWasOpen = !0, _.emulation() || (l.startBatching(), l._sendConnect(!1), f && l._sendSubscribeCommands(!0, !1), l.stopBatching())
                        },
                        onError: function(e) {
                            l._transportId == p ? l._debug("transport level error", e) : l._debug("error callback from non-actual transport")
                        },
                        onClose: function(e) {
                            if (v && (clearTimeout(v), v = null), l._transportId != p) return void l._debug("close callback from non-actual transport");
                            l._debug(_.subName(), "transport closed"), l._transportClosed = !0;
                            let t = "connection closed",
                                n = !0,
                                s = 0;
                            if (e && "code" in e && e.code && (s = e.code), e && e.reason) try {
                                const s = JSON.parse(e.reason);
                                t = s.reason, n = s.reconnect
                            } catch (i) {
                                t = e.reason, (s >= 3500 && s < 4e3 || s >= 4500 && s < 5e3) && (n = !1)
                            }
                            s < 3e3 ? (1009 === s ? (s = r.disconnectedCodes.messageSizeLimit, t = "message size limit exceeded", n = !1) : (s = r.connectingCodes.transportClosed, t = "transport closed"), l._emulation && !l._transportWasOpen && (l._currentTransportIndex++, l._currentTransportIndex >= l._transports.length && (l._triedAllTransports = !0, l._currentTransportIndex = 0))) : l._transportWasOpen = !0, l._isConnecting() && !b && l.emit("error", {
                                type: "transport",
                                error: {
                                    code: r.errorCodes.transportClosed,
                                    message: "transport closed"
                                },
                                transport: _.name()
                            }), l._reconnecting = !1, l._disconnect(s, t, n)
                        },
                        onMessage: function(e) {
                            l._dataReceived(e)
                        }
                    }, m)
                }
                _sendConnect(e) {
                    const t = this._constructConnectCommand(),
                        n = this;
                    return this._call(t, e).then((e => {
                        const t = e.reply.connect;
                        n._connectResponse(t), e.next && e.next()
                    }), (e => {
                        n._connectError(e.error), e.next && e.next()
                    })), t
                }
                _startReconnecting() {
                    if (this._debug("start reconnecting"), !this._isConnecting()) return void this._debug("stop reconnecting: client not in connecting state");
                    if (this._reconnecting) return void this._debug("reconnect already in progress, return from reconnect routine");
                    if (!1 === this._transportClosed) return void this._debug("waiting for transport close");
                    this._reconnecting = !0;
                    const e = this,
                        t = "" === this._token;
                    this._refreshRequired || t && null !== this._config.getToken ? this._getToken().then((function(t) {
                        e._isConnecting() && (null != t && void 0 != t ? (e._token = t, e._debug("connection token refreshed"), e._config.getData ? e._config.getData().then((function(t) {
                            e._isConnecting() && (e._data = t, e._initializeTransport())
                        })) : e._initializeTransport()) : e._failUnauthorized())
                    })).catch((function(t) {
                        if (!e._isConnecting()) return;
                        if (t instanceof f) return void e._failUnauthorized();
                        e.emit("error", {
                            type: "connectToken",
                            error: {
                                code: r.errorCodes.clientConnectToken,
                                message: void 0 !== t ? t.toString() : ""
                            }
                        });
                        const n = e._getReconnectDelay();
                        e._debug("error on connection token refresh, reconnect after " + n + " milliseconds", t), e._reconnecting = !1, e._reconnectTimeout = setTimeout((() => {
                            e._startReconnecting()
                        }), n)
                    })) : this._config.getData ? this._config.getData().then((function(t) {
                        e._isConnecting() && (e._data = t, e._initializeTransport())
                    })) : this._initializeTransport()
                }
                _connectError(e) {
                    this.state === _.State.Connecting && (109 === e.code && (this._refreshRequired = !0), e.code < 100 || !0 === e.temporary || 109 === e.code ? (this.emit("error", {
                        type: "connect",
                        error: e
                    }), this._debug("closing transport due to connect error"), this._reconnecting = !1, this._disconnect(e.code, e.message, !0)) : this._disconnect(e.code, e.message, !1))
                }
                _scheduleReconnect() {
                    if (!this._isConnecting()) return;
                    let e = !1;
                    !this._emulation || this._transportWasOpen || this._triedAllTransports || (e = !0);
                    let t = this._getReconnectDelay();
                    e && (t = 0), this._debug("reconnect after " + t + " milliseconds"), this._reconnectTimeout = setTimeout((() => {
                        this._startReconnecting()
                    }), t)
                }
                _constructConnectCommand() {
                    const e = {};
                    this._token && (e.token = this._token), this._data && (e.data = this._data), this._config.name && (e.name = this._config.name), this._config.version && (e.version = this._config.version);
                    const t = {};
                    let n = !1;
                    for (const s in this._serverSubs)
                        if (this._serverSubs.hasOwnProperty(s) && this._serverSubs[s].recoverable) {
                            n = !0;
                            const e = {
                                recover: !0
                            };
                            this._serverSubs[s].offset && (e.offset = this._serverSubs[s].offset), this._serverSubs[s].epoch && (e.epoch = this._serverSubs[s].epoch), t[s] = e
                        }
                    return n && (e.subs = t), {
                        connect: e
                    }
                }
                _getHistoryRequest(e, t) {
                    const n = {
                        channel: e
                    };
                    return void 0 !== t && (t.since && (n.since = {
                        offset: t.since.offset
                    }, t.since.epoch && (n.since.epoch = t.since.epoch)), void 0 !== t.limit && (n.limit = t.limit), !0 === t.reverse && (n.reverse = !0)), n
                }
                _methodCall() {
                    return this._isConnected() ? Promise.resolve() : new Promise(((e, t) => {
                        const n = setTimeout((function() {
                            t({
                                code: r.errorCodes.timeout,
                                message: "timeout"
                            })
                        }), this._config.timeout);
                        this._promises[this._nextPromiseId()] = {
                            timeout: n,
                            resolve: e,
                            reject: t
                        }
                    }))
                }
                _callPromise(e, t) {
                    return new Promise(((n, s) => {
                        this._call(e, !1).then((e => {
                            n(t(e.reply)), e.next && e.next()
                        }), (e => {
                            s(e.error), e.next && e.next()
                        }))
                    }))
                }
                _dataReceived(e) {
                    this._serverPing > 0 && this._waitServerPing();
                    const t = this._decoder.decodeReplies(e);
                    this._dispatchPromise = this._dispatchPromise.then((() => {
                        let e;
                        this._dispatchPromise = new Promise((t => {
                            e = t
                        })), this._dispatchSynchronized(t, e)
                    }))
                }
                _dispatchSynchronized(e, t) {
                    let n = Promise.resolve();
                    for (const s in e) e.hasOwnProperty(s) && (n = n.then((() => this._dispatchReply(e[s]))));
                    n = n.then((() => {
                        t()
                    }))
                }
                _dispatchReply(e) {
                    let t;
                    const n = new Promise((e => {
                        t = e
                    }));
                    if (void 0 === e || null === e) return this._debug("dispatch: got undefined or null reply"), t(), n;
                    const s = e.id;
                    return s && s > 0 ? this._handleReply(e, t) : e.push ? this._handlePush(e.push, t) : this._handleServerPing(t), n
                }
                _call(e, t) {
                    return new Promise(((n, s) => {
                        e.id = this._nextCommandId(), this._registerCall(e.id, n, s), t || this._addCommand(e)
                    }))
                }
                _startConnecting() {
                    this._debug("start connecting"), this._setState(_.State.Connecting) && this.emit("connecting", {
                        code: r.connectingCodes.connectCalled,
                        reason: "connect called"
                    }), this._client = null, this._startReconnecting()
                }
                _disconnect(e, t, n) {
                    if (this._isDisconnected()) return;
                    const s = this.state,
                        i = {
                            code: e,
                            reason: t
                        };
                    let o = !1;
                    if (n ? o = this._setState(_.State.Connecting) : (o = this._setState(_.State.Disconnected), this._rejectPromises({
                            code: r.errorCodes.clientDisconnected,
                            message: "disconnected"
                        })), this._clearOutgoingRequests(), s === _.State.Connecting && this._clearReconnectTimeout(), s === _.State.Connected && this._clearConnectedState(), o && (this._isConnecting() ? this.emit("connecting", i) : this.emit("disconnected", i)), this._transport) {
                        this._debug("closing existing transport");
                        const e = this._transport;
                        this._transport = null, e.close(), this._transportClosed = !0, this._nextTransportId()
                    } else this._debug("no transport to close");
                    this._scheduleReconnect()
                }
                _failUnauthorized() {
                    this._disconnect(r.disconnectedCodes.unauthorized, "unauthorized", !1)
                }
                _getToken() {
                    if (this._debug("get connection token"), !this._config.getToken) throw this.emit("error", {
                        type: "configuration",
                        error: {
                            code: r.errorCodes.badConfiguration,
                            message: "token expired but no getToken function set in the configuration"
                        }
                    }), new f("");
                    return this._config.getToken({})
                }
                _refresh() {
                    const e = this._client,
                        t = this;
                    this._getToken().then((function(n) {
                        if (e !== t._client) return;
                        if (!n) return void t._failUnauthorized();
                        if (t._token = n, t._debug("connection token refreshed"), !t._isConnected()) return;
                        const s = {
                            refresh: {
                                token: t._token
                            }
                        };
                        t._call(s, !1).then((e => {
                            const n = e.reply.refresh;
                            t._refreshResponse(n), e.next && e.next()
                        }), (e => {
                            t._refreshError(e.error), e.next && e.next()
                        }))
                    })).catch((function(e) {
                        t._isConnected() && (e instanceof f ? t._failUnauthorized() : (t.emit("error", {
                            type: "refreshToken",
                            error: {
                                code: r.errorCodes.clientRefreshToken,
                                message: void 0 !== e ? e.toString() : ""
                            }
                        }), t._refreshTimeout = setTimeout((() => t._refresh()), t._getRefreshRetryDelay())))
                    }))
                }
                _refreshError(e) {
                    e.code < 100 || !0 === e.temporary ? (this.emit("error", {
                        type: "refresh",
                        error: e
                    }), this._refreshTimeout = setTimeout((() => this._refresh()), this._getRefreshRetryDelay())) : this._disconnect(e.code, e.message, !1)
                }
                _getRefreshRetryDelay() {
                    return (0, d.backoff)(0, 5e3, 1e4)
                }
                _refreshResponse(e) {
                    this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null), e.expires && (this._client = e.client, this._refreshTimeout = setTimeout((() => this._refresh()), (0, d.ttlMilliseconds)(e.ttl)))
                }
                _removeSubscription(e) {
                    null !== e && delete this._subs[e.channel]
                }
                _unsubscribe(e) {
                    if (!this._isConnected()) return;
                    const t = {
                            unsubscribe: {
                                channel: e.channel
                            }
                        },
                        n = this;
                    this._call(t, !1).then((e => {
                        e.next && e.next()
                    }), (e => {
                        e.next && e.next(), n._disconnect(r.connectingCodes.unsubscribeError, "unsubscribe error", !0)
                    }))
                }
                _getSub(e) {
                    const t = this._subs[e];
                    return t || null
                }
                _isServerSub(e) {
                    return void 0 !== this._serverSubs[e]
                }
                _sendSubscribeCommands(e, t) {
                    const n = [];
                    for (const s in this._subs) {
                        if (!this._subs.hasOwnProperty(s)) continue;
                        const i = this._subs[s];
                        if (!0 !== i._inflight && i.state === _.SubscriptionState.Subscribing) {
                            const s = i._subscribe(e, t);
                            s && n.push(s)
                        }
                    }
                    return n
                }
                _connectResponse(e) {
                    if (this._transportWasOpen = !0, this._reconnectAttempts = 0, this._refreshRequired = !1, this._isConnected()) return;
                    this._client = e.client, this._setState(_.State.Connected), this._refreshTimeout && clearTimeout(this._refreshTimeout), e.expires && (this._refreshTimeout = setTimeout((() => this._refresh()), (0, d.ttlMilliseconds)(e.ttl))), this._session = e.session, this._node = e.node, this.startBatching(), this._sendSubscribeCommands(!1, !1), this.stopBatching();
                    const t = {
                        client: e.client,
                        transport: this._transport.subName()
                    };
                    e.data && (t.data = e.data), this.emit("connected", t), this._resolvePromises(), this._processServerSubs(e.subs || {}), e.ping && e.ping > 0 ? (this._serverPing = 1e3 * e.ping, this._sendPong = !0 === e.pong, this._waitServerPing()) : this._serverPing = 0
                }
                _processServerSubs(e) {
                    for (const t in e) {
                        if (!e.hasOwnProperty(t)) continue;
                        const n = e[t];
                        this._serverSubs[t] = {
                            offset: n.offset,
                            epoch: n.epoch,
                            recoverable: n.recoverable || !1
                        };
                        const s = this._getSubscribeContext(t, n);
                        this.emit("subscribed", s)
                    }
                    for (const t in e) {
                        if (!e.hasOwnProperty(t)) continue;
                        const n = e[t];
                        if (n.recovered) {
                            const e = n.publications;
                            if (e && e.length > 0)
                                for (const n in e) e.hasOwnProperty(n) && this._handlePublication(t, e[n])
                        }
                    }
                    for (const t in this._serverSubs) this._serverSubs.hasOwnProperty(t) && (e[t] || (this.emit("unsubscribed", {
                        channel: t
                    }), delete this._serverSubs[t]))
                }
                _clearRefreshTimeout() {
                    null !== this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null)
                }
                _clearReconnectTimeout() {
                    null !== this._reconnectTimeout && (clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null)
                }
                _clearServerPingTimeout() {
                    null !== this._serverPingTimeout && (clearTimeout(this._serverPingTimeout), this._serverPingTimeout = null)
                }
                _waitServerPing() {
                    0 !== this._config.maxServerPingDelay && this._isConnected() && (this._clearServerPingTimeout(), this._serverPingTimeout = setTimeout((() => {
                        this._isConnected() && this._disconnect(r.connectingCodes.noPing, "no ping", !0)
                    }), this._serverPing + this._config.maxServerPingDelay))
                }
                _getSubscribeContext(e, t) {
                    const n = {
                        channel: e,
                        positioned: !1,
                        recoverable: !1,
                        wasRecovering: !1,
                        recovered: !1
                    };
                    t.recovered && (n.recovered = !0), t.positioned && (n.positioned = !0), t.recoverable && (n.recoverable = !0), t.was_recovering && (n.wasRecovering = !0);
                    let s = "";
                    "epoch" in t && (s = t.epoch);
                    let i = 0;
                    return "offset" in t && (i = t.offset), (n.positioned || n.recoverable) && (n.streamPosition = {
                        offset: i,
                        epoch: s
                    }), t.data && (n.data = t.data), n
                }
                _handleReply(e, t) {
                    const n = e.id;
                    if (!(n in this._callbacks)) return void t();
                    const s = this._callbacks[n];
                    if (clearTimeout(this._callbacks[n].timeout), delete this._callbacks[n], (0, d.errorExists)(e)) {
                        const n = s.errback;
                        if (!n) return void t();
                        n({
                            error: e.error,
                            next: t
                        })
                    } else {
                        const n = s.callback;
                        if (!n) return;
                        n({
                            reply: e,
                            next: t
                        })
                    }
                }
                _handleJoin(e, t) {
                    const n = this._getSub(e);
                    if (n) n._handleJoin(t);
                    else if (this._isServerSub(e)) {
                        const n = {
                            channel: e,
                            info: this._getJoinLeaveContext(t.info)
                        };
                        this.emit("join", n)
                    }
                }
                _handleLeave(e, t) {
                    const n = this._getSub(e);
                    if (n) n._handleLeave(t);
                    else if (this._isServerSub(e)) {
                        const n = {
                            channel: e,
                            info: this._getJoinLeaveContext(t.info)
                        };
                        this.emit("leave", n)
                    }
                }
                _handleUnsubscribe(e, t) {
                    const n = this._getSub(e);
                    n ? t.code < 2500 ? n._setUnsubscribed(t.code, t.reason, !1) : n._setSubscribing(t.code, t.reason) : this._isServerSub(e) && (delete this._serverSubs[e], this.emit("unsubscribed", {
                        channel: e
                    }))
                }
                _handleSubscribe(e, t) {
                    this._serverSubs[e] = {
                        offset: t.offset,
                        epoch: t.epoch,
                        recoverable: t.recoverable || !1
                    }, this.emit("subscribed", this._getSubscribeContext(e, t))
                }
                _handleDisconnect(e) {
                    const t = e.code;
                    let n = !0;
                    (t >= 3500 && t < 4e3 || t >= 4500 && t < 5e3) && (n = !1), this._disconnect(t, e.reason, n)
                }
                _getPublicationContext(e, t) {
                    const n = {
                        channel: e,
                        data: t.data
                    };
                    return t.offset && (n.offset = t.offset), t.info && (n.info = this._getJoinLeaveContext(t.info)), t.tags && (n.tags = t.tags), n
                }
                _getJoinLeaveContext(e) {
                    const t = {
                        client: e.client,
                        user: e.user
                    };
                    return e.conn_info && (t.connInfo = e.conn_info), e.chan_info && (t.chanInfo = e.chan_info), t
                }
                _handlePublication(e, t) {
                    const n = this._getSub(e);
                    if (n) n._handlePublication(t);
                    else if (this._isServerSub(e)) {
                        const n = this._getPublicationContext(e, t);
                        this.emit("publication", n), void 0 !== t.offset && (this._serverSubs[e].offset = t.offset)
                    }
                }
                _handleMessage(e) {
                    this.emit("message", {
                        data: e.data
                    })
                }
                _handleServerPing(e) {
                    if (this._sendPong) {
                        const e = {};
                        this._transportSendCommands([e])
                    }
                    e()
                }
                _handlePush(e, t) {
                    const n = e.channel;
                    e.pub ? this._handlePublication(n, e.pub) : e.message ? this._handleMessage(e.message) : e.join ? this._handleJoin(n, e.join) : e.leave ? this._handleLeave(n, e.leave) : e.unsubscribe ? this._handleUnsubscribe(n, e.unsubscribe) : e.subscribe ? this._handleSubscribe(n, e.subscribe) : e.disconnect && this._handleDisconnect(e.disconnect), t()
                }
                _flush() {
                    const e = this._commands.slice(0);
                    this._commands = [], this._transportSendCommands(e)
                }
                _createErrorObject(e, t, n) {
                    const s = {
                        code: e,
                        message: t
                    };
                    return n && (s.temporary = !0), s
                }
                _registerCall(e, t, n) {
                    this._callbacks[e] = {
                        callback: t,
                        errback: n,
                        timeout: null
                    }, this._callbacks[e].timeout = setTimeout((() => {
                        delete this._callbacks[e], (0, d.isFunction)(n) && n({
                            error: this._createErrorObject(r.errorCodes.timeout, "timeout")
                        })
                    }), this._config.timeout)
                }
                _addCommand(e) {
                    this._batching ? this._commands.push(e) : this._transportSendCommands([e])
                }
                _nextPromiseId() {
                    return ++this._promiseId
                }
                _nextTransportId() {
                    return ++this._transportId
                }
                _resolvePromises() {
                    for (const e in this._promises) this._promises[e].timeout && clearTimeout(this._promises[e].timeout), this._promises[e].resolve(), delete this._promises[e]
                }
                _rejectPromises(e) {
                    for (const t in this._promises) this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].reject(e), delete this._promises[t]
                }
            }
            t.Centrifuge = g, g.SubscriptionState = _.SubscriptionState, g.State = _.State, g.UnauthorizedError = f
        },
        70341: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.unsubscribedCodes = t.subscribingCodes = t.disconnectedCodes = t.connectingCodes = t.errorCodes = void 0, t.errorCodes = {
                timeout: 1,
                transportClosed: 2,
                clientDisconnected: 3,
                clientClosed: 4,
                clientConnectToken: 5,
                clientRefreshToken: 6,
                subscriptionUnsubscribed: 7,
                subscriptionSubscribeToken: 8,
                subscriptionRefreshToken: 9,
                transportWriteError: 10,
                connectionClosed: 11,
                badConfiguration: 12
            }, t.connectingCodes = {
                connectCalled: 0,
                transportClosed: 1,
                noPing: 2,
                subscribeTimeout: 3,
                unsubscribeError: 4
            }, t.disconnectedCodes = {
                disconnectCalled: 0,
                unauthorized: 1,
                badProtocol: 2,
                messageSizeLimit: 3
            }, t.subscribingCodes = {
                subscribeCalled: 0,
                transportClosed: 1
            }, t.unsubscribedCodes = {
                unsubscribeCalled: 0,
                unauthorized: 1,
                clientClosed: 2
            }
        },
        45800: function(e, t, n) {
            var s = this && this.__createBinding || (Object.create ? function(e, t, n, s) {
                    void 0 === s && (s = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, s, i)
                } : function(e, t, n, s) {
                    void 0 === s && (s = n), e[s] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || s(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Subscription = t.Centrifuge = void 0;
            const r = n(85610);
            Object.defineProperty(t, "Centrifuge", {
                enumerable: !0,
                get: function() {
                    return r.Centrifuge
                }
            });
            const o = n(39259);
            Object.defineProperty(t, "Subscription", {
                enumerable: !0,
                get: function() {
                    return o.Subscription
                }
            }), i(n(64652), t)
        },
        35179: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonDecoder = t.JsonEncoder = void 0;
            t.JsonEncoder = class {
                encodeCommands(e) {
                    return e.map((e => JSON.stringify(e))).join("\n")
                }
            };
            t.JsonDecoder = class {
                decodeReplies(e) {
                    return e.trim().split("\n").map((e => JSON.parse(e)))
                }
            }
        },
        39259: function(e, t, n) {
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Subscription = void 0;
            const i = s(n(36560)),
                r = n(85610),
                o = n(70341),
                c = n(64652),
                a = n(96696);
            class h extends i.default {
                constructor(e, t, n) {
                    super(), this._resubscribeTimeout = null, this._refreshTimeout = null, this.channel = t, this.state = c.SubscriptionState.Unsubscribed, this._centrifuge = e, this._token = "", this._getToken = null, this._data = null, this._getData = null, this._recover = !1, this._offset = null, this._epoch = null, this._recoverable = !1, this._positioned = !1, this._joinLeave = !1, this._minResubscribeDelay = 500, this._maxResubscribeDelay = 2e4, this._resubscribeTimeout = null, this._resubscribeAttempts = 0, this._promises = {}, this._promiseId = 0, this._inflight = !1, this._refreshTimeout = null, this._setOptions(n), this._centrifuge._debugEnabled ? (this.on("state", (e => {
                        this._centrifuge._debug("subscription state", t, e.oldState, "->", e.newState)
                    })), this.on("error", (e => {
                        this._centrifuge._debug("subscription error", t, e)
                    }))) : this.on("error", (function() {
                        Function.prototype()
                    }))
                }
                ready(e) {
                    return this.state === c.SubscriptionState.Unsubscribed ? Promise.reject({
                        code: o.errorCodes.subscriptionUnsubscribed,
                        message: this.state
                    }) : this.state === c.SubscriptionState.Subscribed ? Promise.resolve() : new Promise(((t, n) => {
                        const s = {
                            resolve: t,
                            reject: n
                        };
                        e && (s.timeout = setTimeout((function() {
                            n({
                                code: o.errorCodes.timeout,
                                message: "timeout"
                            })
                        }), e)), this._promises[this._nextPromiseId()] = s
                    }))
                }
                subscribe() {
                    this._isSubscribed() || (this._resubscribeAttempts = 0, this._setSubscribing(o.subscribingCodes.subscribeCalled, "subscribe called"))
                }
                unsubscribe() {
                    this._setUnsubscribed(o.unsubscribedCodes.unsubscribeCalled, "unsubscribe called", !0)
                }
                publish(e) {
                    const t = this;
                    return this._methodCall().then((function() {
                        return t._centrifuge.publish(t.channel, e)
                    }))
                }
                presence() {
                    const e = this;
                    return this._methodCall().then((function() {
                        return e._centrifuge.presence(e.channel)
                    }))
                }
                presenceStats() {
                    const e = this;
                    return this._methodCall().then((function() {
                        return e._centrifuge.presenceStats(e.channel)
                    }))
                }
                history(e) {
                    const t = this;
                    return this._methodCall().then((function() {
                        return t._centrifuge.history(t.channel, e)
                    }))
                }
                _methodCall() {
                    return this._isSubscribed() ? Promise.resolve() : this._isUnsubscribed() ? Promise.reject({
                        code: o.errorCodes.subscriptionUnsubscribed,
                        message: this.state
                    }) : new Promise(((e, t) => {
                        const n = setTimeout((function() {
                            t({
                                code: o.errorCodes.timeout,
                                message: "timeout"
                            })
                        }), this._centrifuge._config.timeout);
                        this._promises[this._nextPromiseId()] = {
                            timeout: n,
                            resolve: e,
                            reject: t
                        }
                    }))
                }
                _nextPromiseId() {
                    return ++this._promiseId
                }
                _needRecover() {
                    return !0 === this._recover
                }
                _isUnsubscribed() {
                    return this.state === c.SubscriptionState.Unsubscribed
                }
                _isSubscribing() {
                    return this.state === c.SubscriptionState.Subscribing
                }
                _isSubscribed() {
                    return this.state === c.SubscriptionState.Subscribed
                }
                _setState(e) {
                    if (this.state !== e) {
                        const t = this.state;
                        return this.state = e, this.emit("state", {
                            newState: e,
                            oldState: t,
                            channel: this.channel
                        }), !0
                    }
                    return !1
                }
                _usesToken() {
                    return "" !== this._token || null !== this._getToken
                }
                _clearSubscribingState() {
                    this._resubscribeAttempts = 0, this._clearResubscribeTimeout()
                }
                _clearSubscribedState() {
                    this._clearRefreshTimeout()
                }
                _setSubscribed(e) {
                    if (!this._isSubscribing()) return;
                    this._clearSubscribingState(), e.recoverable && (this._recover = !0, this._offset = e.offset || 0, this._epoch = e.epoch || ""), this._setState(c.SubscriptionState.Subscribed);
                    const t = this._centrifuge._getSubscribeContext(this.channel, e);
                    this.emit("subscribed", t), this._resolvePromises();
                    const n = e.publications;
                    if (n && n.length > 0)
                        for (const s in n) n.hasOwnProperty(s) && this._handlePublication(n[s]);
                    !0 === e.expires && (this._refreshTimeout = setTimeout((() => this._refresh()), (0, a.ttlMilliseconds)(e.ttl)))
                }
                _setSubscribing(e, t) {
                    this._isSubscribing() || (this._isSubscribed() && this._clearSubscribedState(), this._setState(c.SubscriptionState.Subscribing) && this.emit("subscribing", {
                        channel: this.channel,
                        code: e,
                        reason: t
                    }), this._subscribe(!1, !1))
                }
                _subscribe(e, t) {
                    if (this._centrifuge._debug("subscribing on", this.channel), this._centrifuge.state !== c.State.Connected && !e) return this._centrifuge._debug("delay subscribe on", this.channel, "till connected"), null;
                    const n = this,
                        s = {
                            channel: n.channel
                        };
                    return !this._usesToken() || this._token ? n._getData ? (n._getData(s).then((function(e) {
                        n._isSubscribing() && (n._data = e, n._sendSubscribe(n._token, !1))
                    })), null) : n._sendSubscribe(n._token, t) : (e || this._getSubscriptionToken().then((function(e) {
                        n._isSubscribing() && (e ? (n._token = e, n._getData ? n._getData(s).then((function(t) {
                            n._isSubscribing() && (n._data = t, n._sendSubscribe(e, !1))
                        })) : n._sendSubscribe(e, !1)) : n._failUnauthorized())
                    })).catch((function(e) {
                        n._isSubscribing() && (e instanceof r.UnauthorizedError ? n._failUnauthorized() : (n.emit("error", {
                            type: "subscribeToken",
                            channel: n.channel,
                            error: {
                                code: o.errorCodes.subscriptionSubscribeToken,
                                message: void 0 !== e ? e.toString() : ""
                            }
                        }), n._scheduleResubscribe()))
                    })), null)
                }
                _sendSubscribe(e, t) {
                    const n = {
                        channel: this.channel
                    };
                    if (e && (n.token = e), this._data && (n.data = this._data), this._positioned && (n.positioned = !0), this._recoverable && (n.recoverable = !0), this._joinLeave && (n.join_leave = !0), this._needRecover()) {
                        n.recover = !0;
                        const e = this._getOffset();
                        e && (n.offset = e);
                        const t = this._getEpoch();
                        t && (n.epoch = t)
                    }
                    const s = {
                        subscribe: n
                    };
                    return this._inflight = !0, this._centrifuge._call(s, t).then((e => {
                        this._inflight = !1;
                        const t = e.reply.subscribe;
                        this._handleSubscribeResponse(t), e.next && e.next()
                    }), (e => {
                        this._inflight = !1, this._handleSubscribeError(e.error), e.next && e.next()
                    })), s
                }
                _handleSubscribeError(e) {
                    this._isSubscribing() && (e.code !== o.errorCodes.timeout ? this._subscribeError(e) : this._centrifuge._disconnect(o.connectingCodes.subscribeTimeout, "subscribe timeout", !0))
                }
                _handleSubscribeResponse(e) {
                    this._isSubscribing() && this._setSubscribed(e)
                }
                _setUnsubscribed(e, t, n) {
                    this._isUnsubscribed() || (this._isSubscribed() && (n && this._centrifuge._unsubscribe(this), this._clearSubscribedState()), this._isSubscribing() && (this._inflight && n && this._centrifuge._unsubscribe(this), this._clearSubscribingState()), this._setState(c.SubscriptionState.Unsubscribed) && this.emit("unsubscribed", {
                        channel: this.channel,
                        code: e,
                        reason: t
                    }), this._rejectPromises({
                        code: o.errorCodes.subscriptionUnsubscribed,
                        message: this.state
                    }))
                }
                _handlePublication(e) {
                    const t = this._centrifuge._getPublicationContext(this.channel, e);
                    this.emit("publication", t), e.offset && (this._offset = e.offset)
                }
                _handleJoin(e) {
                    const t = this._centrifuge._getJoinLeaveContext(e.info);
                    this.emit("join", {
                        channel: this.channel,
                        info: t
                    })
                }
                _handleLeave(e) {
                    const t = this._centrifuge._getJoinLeaveContext(e.info);
                    this.emit("leave", {
                        channel: this.channel,
                        info: t
                    })
                }
                _resolvePromises() {
                    for (const e in this._promises) this._promises[e].timeout && clearTimeout(this._promises[e].timeout), this._promises[e].resolve(), delete this._promises[e]
                }
                _rejectPromises(e) {
                    for (const t in this._promises) this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].reject(e), delete this._promises[t]
                }
                _scheduleResubscribe() {
                    const e = this,
                        t = this._getResubscribeDelay();
                    this._resubscribeTimeout = setTimeout((function() {
                        e._isSubscribing() && e._subscribe(!1, !1)
                    }), t)
                }
                _subscribeError(e) {
                    if (this._isSubscribing())
                        if (e.code < 100 || 109 === e.code || !0 === e.temporary) {
                            109 === e.code && (this._token = "");
                            const t = {
                                channel: this.channel,
                                type: "subscribe",
                                error: e
                            };
                            this._centrifuge.state === c.State.Connected && this.emit("error", t), this._scheduleResubscribe()
                        } else this._setUnsubscribed(e.code, e.message, !1)
                }
                _getResubscribeDelay() {
                    const e = (0, a.backoff)(this._resubscribeAttempts, this._minResubscribeDelay, this._maxResubscribeDelay);
                    return this._resubscribeAttempts++, e
                }
                _setOptions(e) {
                    e && (e.since && (this._offset = e.since.offset, this._epoch = e.since.epoch, this._recover = !0), e.data && (this._data = e.data), e.getData && (this._getData = e.getData), void 0 !== e.minResubscribeDelay && (this._minResubscribeDelay = e.minResubscribeDelay), void 0 !== e.maxResubscribeDelay && (this._maxResubscribeDelay = e.maxResubscribeDelay), e.token && (this._token = e.token), e.getToken && (this._getToken = e.getToken), !0 === e.positioned && (this._positioned = !0), !0 === e.recoverable && (this._recoverable = !0), !0 === e.joinLeave && (this._joinLeave = !0))
                }
                _getOffset() {
                    const e = this._offset;
                    return null !== e ? e : 0
                }
                _getEpoch() {
                    const e = this._epoch;
                    return null !== e ? e : ""
                }
                _clearRefreshTimeout() {
                    null !== this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null)
                }
                _clearResubscribeTimeout() {
                    null !== this._resubscribeTimeout && (clearTimeout(this._resubscribeTimeout), this._resubscribeTimeout = null)
                }
                _getSubscriptionToken() {
                    this._centrifuge._debug("get subscription token for channel", this.channel);
                    const e = {
                            channel: this.channel
                        },
                        t = this._getToken;
                    if (null === t) throw this.emit("error", {
                        type: "configuration",
                        channel: this.channel,
                        error: {
                            code: o.errorCodes.badConfiguration,
                            message: "provide a function to get channel subscription token"
                        }
                    }), new r.UnauthorizedError("");
                    return t(e)
                }
                _refresh() {
                    this._clearRefreshTimeout();
                    const e = this;
                    this._getSubscriptionToken().then((function(t) {
                        if (!e._isSubscribed()) return;
                        if (!t) return void e._failUnauthorized();
                        e._token = t;
                        const n = {
                            sub_refresh: {
                                channel: e.channel,
                                token: t
                            }
                        };
                        e._centrifuge._call(n).then((t => {
                            const n = t.reply.sub_refresh;
                            e._refreshResponse(n), t.next && t.next()
                        }), (t => {
                            e._refreshError(t.error), t.next && t.next()
                        }))
                    })).catch((function(t) {
                        t instanceof r.UnauthorizedError ? e._failUnauthorized() : (e.emit("error", {
                            type: "refreshToken",
                            channel: e.channel,
                            error: {
                                code: o.errorCodes.subscriptionRefreshToken,
                                message: void 0 !== t ? t.toString() : ""
                            }
                        }), e._refreshTimeout = setTimeout((() => e._refresh()), e._getRefreshRetryDelay()))
                    }))
                }
                _refreshResponse(e) {
                    this._isSubscribed() && (this._centrifuge._debug("subscription token refreshed, channel", this.channel), this._clearRefreshTimeout(), !0 === e.expires && (this._refreshTimeout = setTimeout((() => this._refresh()), (0, a.ttlMilliseconds)(e.ttl))))
                }
                _refreshError(e) {
                    this._isSubscribed() && (e.code < 100 || !0 === e.temporary ? (this.emit("error", {
                        type: "refresh",
                        channel: this.channel,
                        error: e
                    }), this._refreshTimeout = setTimeout((() => this._refresh()), this._getRefreshRetryDelay())) : this._setUnsubscribed(e.code, e.message, !0))
                }
                _getRefreshRetryDelay() {
                    return (0, a.backoff)(0, 1e4, 2e4)
                }
                _failUnauthorized() {
                    this._setUnsubscribed(o.unsubscribedCodes.unauthorized, "unauthorized", !0)
                }
            }
            t.Subscription = h
        },
        11333: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HttpStreamTransport = void 0;
            t.HttpStreamTransport = class {
                constructor(e, t) {
                    this.endpoint = e, this.options = t, this._abortController = null, this._utf8decoder = new TextDecoder, this._protocol = "json"
                }
                name() {
                    return "http_stream"
                }
                subName() {
                    return "http_stream"
                }
                emulation() {
                    return !0
                }
                _handleErrors(e) {
                    if (!e.ok) throw new Error(e.status);
                    return e
                }
                _fetchEventTarget(e, t, n) {
                    const s = new EventTarget;
                    return (0, e.options.fetch)(t, n).then(e._handleErrors).then((t => {
                        s.dispatchEvent(new Event("open"));
                        let n = "",
                            i = 0,
                            r = new Uint8Array;
                        const o = t.body.getReader();
                        return new e.options.readableStream({
                            start: t => function c() {
                                return o.read().then((({
                                    done: o,
                                    value: a
                                }) => {
                                    if (o) return s.dispatchEvent(new Event("close")), void t.close();
                                    try {
                                        if ("json" === e._protocol)
                                            for (n += e._utf8decoder.decode(a); i < n.length;)
                                                if ("\n" === n[i]) {
                                                    const e = n.substring(0, i);
                                                    s.dispatchEvent(new MessageEvent("message", {
                                                        data: e
                                                    })), n = n.substring(i + 1), i = 0
                                                } else ++i;
                                        else {
                                            const t = new Uint8Array(r.length + a.length);
                                            for (t.set(r), t.set(a, r.length), r = t;;) {
                                                const t = e.options.decoder.decodeReply(r);
                                                if (!t.ok) break; {
                                                    const e = r.slice(0, t.pos);
                                                    s.dispatchEvent(new MessageEvent("message", {
                                                        data: e
                                                    })), r = r.slice(t.pos)
                                                }
                                            }
                                        }
                                    } catch (h) {
                                        return s.dispatchEvent(new Event("error", {
                                            detail: h
                                        })), s.dispatchEvent(new Event("close")), void t.close()
                                    }
                                    c()
                                })).catch((function(e) {
                                    s.dispatchEvent(new Event("error", {
                                        detail: e
                                    })), s.dispatchEvent(new Event("close")), t.close()
                                }))
                            }()
                        })
                    })).catch((e => {
                        s.dispatchEvent(new Event("error", {
                            detail: e
                        })), s.dispatchEvent(new Event("close"))
                    })), s
                }
                supported() {
                    return null !== this.options.fetch && null !== this.options.readableStream && "undefined" !== typeof TextDecoder && "undefined" !== typeof AbortController && "undefined" !== typeof EventTarget && "undefined" !== typeof Event && "undefined" !== typeof MessageEvent && "undefined" !== typeof Error
                }
                initialize(e, t, n) {
                    let s, i;
                    this._protocol = e, this._abortController = new AbortController, "json" === e ? (s = {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, i = n) : (s = {
                        Accept: "application/octet-stream",
                        "Content-Type": "application/octet-stream"
                    }, i = n);
                    const r = {
                            method: "POST",
                            headers: s,
                            body: i,
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "no-cache",
                            signal: this._abortController.signal
                        },
                        o = this._fetchEventTarget(this, this.endpoint, r);
                    o.addEventListener("open", (() => {
                        t.onOpen()
                    })), o.addEventListener("error", (e => {
                        this._abortController.abort(), t.onError(e)
                    })), o.addEventListener("close", (() => {
                        this._abortController.abort(), t.onClose({
                            code: 4,
                            reason: "connection closed"
                        })
                    })), o.addEventListener("message", (e => {
                        t.onMessage(e.data)
                    }))
                }
                close() {
                    this._abortController.abort()
                }
                send(e, t, n) {
                    let s, i;
                    const r = {
                        session: t,
                        node: n,
                        data: e
                    };
                    "json" === this._protocol ? (s = {
                        "Content-Type": "application/json"
                    }, i = JSON.stringify(r)) : (s = {
                        "Content-Type": "application/octet-stream"
                    }, i = this.options.encoder.encodeEmulationRequest(r));
                    const o = {
                        method: "POST",
                        headers: s,
                        body: i,
                        mode: "cors",
                        credentials: "same-origin",
                        cache: "no-cache"
                    };
                    (0, this.options.fetch)(this.options.emulationEndpoint, o)
                }
            }
        },
        38205: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SockjsTransport = void 0;
            t.SockjsTransport = class {
                constructor(e, t) {
                    this.endpoint = e, this.options = t, this._transport = null
                }
                name() {
                    return "sockjs"
                }
                subName() {
                    return "sockjs-" + this._transport.transport
                }
                emulation() {
                    return !1
                }
                supported() {
                    return null !== this.options.sockjs
                }
                initialize(e, t) {
                    this._transport = new this.options.sockjs(this.endpoint, null, this.options.sockjsOptions), this._transport.onopen = () => {
                        t.onOpen()
                    }, this._transport.onerror = e => {
                        t.onError(e)
                    }, this._transport.onclose = e => {
                        t.onClose(e)
                    }, this._transport.onmessage = e => {
                        t.onMessage(e.data)
                    }
                }
                close() {
                    this._transport.close()
                }
                send(e) {
                    this._transport.send(e)
                }
            }
        },
        67751: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SseTransport = void 0;
            t.SseTransport = class {
                constructor(e, t) {
                    this.endpoint = e, this.options = t, this._protocol = "json", this._transport = null, this._onClose = null
                }
                name() {
                    return "sse"
                }
                subName() {
                    return "sse"
                }
                emulation() {
                    return !0
                }
                supported() {
                    return null !== this.options.eventsource && null !== this.options.fetch
                }
                initialize(e, t, n) {
                    let s;
                    s = globalThis && globalThis.document && globalThis.document.baseURI ? new URL(this.endpoint, globalThis.document.baseURI) : new URL(this.endpoint), s.searchParams.append("cf_connect", n);
                    const i = new this.options.eventsource(s.toString(), {});
                    this._transport = i;
                    i.onopen = function() {
                        t.onOpen()
                    }, i.onerror = function(e) {
                        i.close(), t.onError(e), t.onClose({
                            code: 4,
                            reason: "connection closed"
                        })
                    }, i.onmessage = function(e) {
                        t.onMessage(e.data)
                    }, this._onClose = function() {
                        t.onClose({
                            code: 4,
                            reason: "connection closed"
                        })
                    }
                }
                close() {
                    this._transport.close(), null !== this._onClose && this._onClose()
                }
                send(e, t, n) {
                    const s = {
                            session: t,
                            node: n,
                            data: e
                        },
                        i = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(s),
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "no-cache"
                        };
                    (0, this.options.fetch)(this.options.emulationEndpoint, i)
                }
            }
        },
        36483: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WebsocketTransport = void 0;
            t.WebsocketTransport = class {
                constructor(e, t) {
                    this.endpoint = e, this.options = t, this._transport = null
                }
                name() {
                    return "websocket"
                }
                subName() {
                    return "websocket"
                }
                emulation() {
                    return !1
                }
                supported() {
                    return void 0 !== this.options.websocket && null !== this.options.websocket
                }
                initialize(e, t) {
                    let n = "";
                    "protobuf" === e && (n = "centrifuge-protobuf"), this._transport = "" !== n ? new this.options.websocket(this.endpoint, n) : new this.options.websocket(this.endpoint), "protobuf" === e && (this._transport.binaryType = "arraybuffer"), this._transport.onopen = () => {
                        t.onOpen()
                    }, this._transport.onerror = e => {
                        t.onError(e)
                    }, this._transport.onclose = e => {
                        t.onClose(e)
                    }, this._transport.onmessage = e => {
                        t.onMessage(e.data)
                    }
                }
                close() {
                    this._transport.close()
                }
                send(e) {
                    this._transport.send(e)
                }
            }
        },
        38385: function(e, t) {
            var n = this && this.__awaiter || function(e, t, n, s) {
                return new(n || (n = Promise))((function(i, r) {
                    function o(e) {
                        try {
                            a(s.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(e) {
                        try {
                            a(s.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(o, c)
                    }
                    a((s = s.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WebtransportTransport = void 0;
            t.WebtransportTransport = class {
                constructor(e, t) {
                    this.endpoint = e, this.options = t, this._transport = null, this._stream = null, this._writer = null, this._utf8decoder = new TextDecoder, this._protocol = "json"
                }
                name() {
                    return "webtransport"
                }
                subName() {
                    return "webtransport"
                }
                emulation() {
                    return !1
                }
                supported() {
                    return void 0 !== this.options.webtransport && null !== this.options.webtransport
                }
                initialize(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        let n;
                        n = globalThis && globalThis.document && globalThis.document.baseURI ? new URL(this.endpoint, globalThis.document.baseURI) : new URL(this.endpoint), "protobuf" === e && n.searchParams.append("cf_protocol", "protobuf"), this._protocol = e;
                        const s = new EventTarget;
                        this._transport = new this.options.webtransport(n.toString()), this._transport.closed.then((() => {
                            t.onClose({
                                code: 4,
                                reason: "connection closed"
                            })
                        })).catch((() => {
                            t.onClose({
                                code: 4,
                                reason: "connection closed"
                            })
                        }));
                        try {
                            yield this._transport.ready
                        } catch (r) {
                            return void this.close()
                        }
                        let i;
                        try {
                            i = yield this._transport.createBidirectionalStream()
                        } catch (o) {
                            return void this.close()
                        }
                        this._stream = i, this._writer = this._stream.writable.getWriter(), s.addEventListener("close", (() => {
                            t.onClose({
                                code: 4,
                                reason: "connection closed"
                            })
                        })), s.addEventListener("message", (e => {
                            t.onMessage(e.data)
                        })), this._startReading(s), t.onOpen()
                    }))
                }
                _startReading(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = this._stream.readable.getReader();
                        let n = "",
                            s = 0,
                            i = new Uint8Array;
                        try {
                            for (;;) {
                                const {
                                    done: r,
                                    value: o
                                } = yield t.read();
                                if (o.length > 0)
                                    if ("json" === this._protocol)
                                        for (n += this._utf8decoder.decode(o); s < n.length;)
                                            if ("\n" === n[s]) {
                                                const t = n.substring(0, s);
                                                e.dispatchEvent(new MessageEvent("message", {
                                                    data: t
                                                })), n = n.substring(s + 1), s = 0
                                            } else ++s;
                                else {
                                    const t = new Uint8Array(i.length + o.length);
                                    for (t.set(i), t.set(o, i.length), i = t;;) {
                                        const t = this.options.decoder.decodeReply(i);
                                        if (!t.ok) break; {
                                            const n = i.slice(0, t.pos);
                                            e.dispatchEvent(new MessageEvent("message", {
                                                data: n
                                            })), i = i.slice(t.pos)
                                        }
                                    }
                                }
                                if (r) break
                            }
                        } catch (r) {
                            e.dispatchEvent(new Event("close"))
                        }
                    }))
                }
                close() {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            this._writer && (yield this._writer.close()), this._transport.close()
                        } catch (e) {}
                    }))
                }
                send(e) {
                    return n(this, void 0, void 0, (function*() {
                        let t;
                        t = "json" === this._protocol ? (new TextEncoder).encode(e + "\n") : e;
                        try {
                            yield this._writer.write(t)
                        } catch (n) {
                            this.close()
                        }
                    }))
                }
            }
        },
        64652: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SubscriptionState = t.State = void 0,
                function(e) {
                    e.Disconnected = "disconnected", e.Connecting = "connecting", e.Connected = "connected"
                }(t.State || (t.State = {})),
                function(e) {
                    e.Unsubscribed = "unsubscribed", e.Subscribing = "subscribing", e.Subscribed = "subscribed"
                }(t.SubscriptionState || (t.SubscriptionState = {}))
        },
        96696: function(e, t) {
            function n(e) {
                return void 0 !== e && null !== e && "function" === typeof e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ttlMilliseconds = t.errorExists = t.backoff = t.log = t.isFunction = t.startsWith = void 0, t.startsWith = function(e, t) {
                return 0 === e.lastIndexOf(t, 0)
            }, t.isFunction = n, t.log = function(e, t) {
                if (globalThis.console) {
                    const s = globalThis.console[e];
                    n(s) && s.apply(globalThis.console, t)
                }
            }, t.backoff = function(e, t, n) {
                e > 31 && (e = 31);
                const s = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1) + e)
                }(0, Math.min(n, t * Math.pow(2, e)));
                return Math.min(n, t + s)
            }, t.errorExists = function(e) {
                return "error" in e && null !== e.error
            }, t.ttlMilliseconds = function(e) {
                return Math.min(1e3 * e, 2147483647)
            }
        },
        36560: function(e) {
            var t, n = "object" === typeof Reflect ? Reflect : null,
                s = n && "function" === typeof n.apply ? n.apply : function(e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };
            t = n && "function" === typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var i = Number.isNaN || function(e) {
                return e !== e
            };

            function r() {
                r.init.call(this)
            }
            e.exports = r, e.exports.once = function(e, t) {
                return new Promise((function(n, s) {
                    function i(n) {
                        e.removeListener(t, r), s(n)
                    }

                    function r() {
                        "function" === typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
                    }
                    b(e, t, r, {
                        once: !0
                    }), "error" !== t && function(e, t, n) {
                        "function" === typeof e.on && b(e, "error", t, n)
                    }(e, i, {
                        once: !0
                    })
                }))
            }, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
            var o = 10;

            function c(e) {
                if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function a(e) {
                return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
            }

            function h(e, t, n, s) {
                var i, r, o, h;
                if (c(n), void 0 === (r = e._events) ? (r = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== r.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), r = e._events), o = r[t]), void 0 === o) o = r[t] = n, ++e._eventsCount;
                else if ("function" === typeof o ? o = r[t] = s ? [n, o] : [o, n] : s ? o.unshift(n) : o.push(n), (i = a(e)) > 0 && o.length > i && !o.warned) {
                    o.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, h = u, console && console.warn && console.warn(h)
                }
                return e
            }

            function u() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(e, t, n) {
                var s = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    i = u.bind(s);
                return i.listener = n, s.wrapFn = i, i
            }

            function d(e, t, n) {
                var s = e._events;
                if (void 0 === s) return [];
                var i = s[t];
                return void 0 === i ? [] : "function" === typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(i) : p(i, i.length)
            }

            function _(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" === typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function p(e, t) {
                for (var n = new Array(t), s = 0; s < t; ++s) n[s] = e[s];
                return n
            }

            function b(e, t, n, s) {
                if ("function" === typeof e.on) s.once ? e.once(t, n) : e.on(t, n);
                else {
                    if ("function" !== typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                    e.addEventListener(t, (function i(r) {
                        s.once && e.removeEventListener(t, i), n(r)
                    }))
                }
            }
            Object.defineProperty(r, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    if ("number" !== typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    o = e
                }
            }), r.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, r.prototype.setMaxListeners = function(e) {
                if ("number" !== typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, r.prototype.getMaxListeners = function() {
                return a(this)
            }, r.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var i = "error" === e,
                    r = this._events;
                if (void 0 !== r) i = i && void 0 === r.error;
                else if (!i) return !1;
                if (i) {
                    var o;
                    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                    var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw c.context = o, c
                }
                var a = r[e];
                if (void 0 === a) return !1;
                if ("function" === typeof a) s(a, this, t);
                else {
                    var h = a.length,
                        u = p(a, h);
                    for (n = 0; n < h; ++n) s(u[n], this, t)
                }
                return !0
            }, r.prototype.addListener = function(e, t) {
                return h(this, e, t, !1)
            }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(e, t) {
                return h(this, e, t, !0)
            }, r.prototype.once = function(e, t) {
                return c(t), this.on(e, l(this, e, t)), this
            }, r.prototype.prependOnceListener = function(e, t) {
                return c(t), this.prependListener(e, l(this, e, t)), this
            }, r.prototype.removeListener = function(e, t) {
                var n, s, i, r, o;
                if (c(t), void 0 === (s = this._events)) return this;
                if (void 0 === (n = s[e])) return this;
                if (n === t || n.listener === t) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" !== typeof n) {
                    for (i = -1, r = n.length - 1; r >= 0; r--)
                        if (n[r] === t || n[r].listener === t) {
                            o = n[r].listener, i = r;
                            break
                        }
                    if (i < 0) return this;
                    0 === i ? n.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, i), 1 === n.length && (s[e] = n[0]), void 0 !== s.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(e) {
                var t, n, s;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var i, r = Object.keys(n);
                    for (s = 0; s < r.length; ++s) "removeListener" !== (i = r[s]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
                return this
            }, r.prototype.listeners = function(e) {
                return d(this, e, !0)
            }, r.prototype.rawListeners = function(e) {
                return d(this, e, !1)
            }, r.listenerCount = function(e, t) {
                return "function" === typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
            }, r.prototype.listenerCount = _, r.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        }
    }
]);