(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1024], {
        94508: function(e, t, n) {
            "use strict";
            n.d(t, {
                ll: function() {
                    return be
                },
                xp: function() {
                    return re
                },
                bQ: function() {
                    return ke
                },
                YF: function() {
                    return G
                },
                KK: function() {
                    return Ae
                },
                XI: function() {
                    return Te
                },
                NI: function() {
                    return Z
                },
                qs: function() {
                    return Se
                }
            });
            var r = n(11897),
                o = n(15636),
                i = n(70079),
                u = n.t(i, 2),
                c = n(99581),
                l = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
                s = l.join(","),
                a = "undefined" === typeof Element,
                f = a ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                d = !a && Element.prototype.getRootNode ? function(e) {
                    var t;
                    return null === e || void 0 === e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
                } : function(e) {
                    return null === e || void 0 === e ? void 0 : e.ownerDocument
                },
                p = function e(t, n) {
                    var r;
                    void 0 === n && (n = !0);
                    var o = null === t || void 0 === t || null === (r = t.getAttribute) || void 0 === r ? void 0 : r.call(t, "inert");
                    return "" === o || "true" === o || n && t && e(t.parentNode)
                },
                m = function(e, t, n) {
                    if (p(e)) return [];
                    var r = Array.prototype.slice.apply(e.querySelectorAll(s));
                    return t && f.call(e, s) && r.unshift(e), r = r.filter(n)
                },
                v = function e(t, n, r) {
                    for (var o = [], i = Array.from(t); i.length;) {
                        var u = i.shift();
                        if (!p(u, !1))
                            if ("SLOT" === u.tagName) {
                                var c = u.assignedElements(),
                                    l = e(c.length ? c : u.children, !0, r);
                                r.flatten ? o.push.apply(o, l) : o.push({
                                    scopeParent: u,
                                    candidates: l
                                })
                            } else {
                                f.call(u, s) && r.filter(u) && (n || !t.includes(u)) && o.push(u);
                                var a = u.shadowRoot || "function" === typeof r.getShadowRoot && r.getShadowRoot(u),
                                    d = !p(a, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
                                if (a && d) {
                                    var m = e(!0 === a ? u.children : a.children, !0, r);
                                    r.flatten ? o.push.apply(o, m) : o.push({
                                        scopeParent: u,
                                        candidates: m
                                    })
                                } else i.unshift.apply(i, u.children)
                            }
                    }
                    return o
                },
                g = function(e) {
                    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
                },
                h = function(e) {
                    if (!e) throw new Error("No node provided");
                    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                        var t, n = null === e || void 0 === e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                        return "" === n || "true" === n
                    }(e)) && !g(e) ? 0 : e.tabIndex
                },
                y = function(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                },
                b = function(e) {
                    return "INPUT" === e.tagName
                },
                w = function(e) {
                    return function(e) {
                        return b(e) && "radio" === e.type
                    }(e) && ! function(e) {
                        if (!e.name) return !0;
                        var t, n = e.form || d(e),
                            r = function(e) {
                                return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                            };
                        if ("undefined" !== typeof window && "undefined" !== typeof window.CSS && "function" === typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                        else try {
                            t = r(e.name)
                        } catch (i) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1
                        }
                        var o = function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n].checked && e[n].form === t) return e[n]
                        }(t, e.form);
                        return !o || o === e
                    }(e)
                },
                x = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    return 0 === n && 0 === r
                },
                E = function(e, t) {
                    var n = t.displayCheck,
                        r = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility) return !0;
                    var o = f.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (f.call(o, "details:not([open]) *")) return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n) return x(e)
                    } else {
                        if ("function" === typeof r) {
                            for (var i = e; e;) {
                                var u = e.parentElement,
                                    c = d(e);
                                if (u && !u.shadowRoot && !0 === r(u)) return x(e);
                                e = e.assignedSlot ? e.assignedSlot : u || c === e.ownerDocument ? u : c.host
                            }
                            e = i
                        }
                        if (function(e) {
                                var t, n, r, o, i = e && d(e),
                                    u = null === (t = i) || void 0 === t ? void 0 : t.host,
                                    c = !1;
                                if (i && i !== e)
                                    for (c = !!(null !== (n = u) && void 0 !== n && null !== (r = n.ownerDocument) && void 0 !== r && r.contains(u) || null !== e && void 0 !== e && null !== (o = e.ownerDocument) && void 0 !== o && o.contains(e)); !c && u;) {
                                        var l, s, a;
                                        c = !(null === (s = u = null === (l = i = d(u)) || void 0 === l ? void 0 : l.host) || void 0 === s || null === (a = s.ownerDocument) || void 0 === a || !a.contains(u))
                                    }
                                return c
                            }(e)) return !e.getClientRects().length;
                        if ("legacy-full" !== n) return !0
                    }
                    return !1
                },
                R = function(e, t) {
                    return !(t.disabled || p(t) || function(e) {
                        return b(e) && "hidden" === e.type
                    }(t) || E(t, e) || function(e) {
                        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                            return "SUMMARY" === e.tagName
                        }))
                    }(t) || function(e) {
                        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                            for (var t = e.parentElement; t;) {
                                if ("FIELDSET" === t.tagName && t.disabled) {
                                    for (var n = 0; n < t.children.length; n++) {
                                        var r = t.children.item(n);
                                        if ("LEGEND" === r.tagName) return !!f.call(t, "fieldset[disabled] *") || !r.contains(e)
                                    }
                                    return !0
                                }
                                t = t.parentElement
                            }
                        return !1
                    }(t))
                },
                T = function(e, t) {
                    return !(w(t) || h(t) < 0 || !R(e, t))
                },
                S = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return !!(isNaN(t) || t >= 0)
                },
                L = function e(t) {
                    var n = [],
                        r = [];
                    return t.forEach((function(t, o) {
                        var i = !!t.scopeParent,
                            u = i ? t.scopeParent : t,
                            c = function(e, t) {
                                var n = h(e);
                                return n < 0 && t && !g(e) ? 0 : n
                            }(u, i),
                            l = i ? e(t.candidates) : u;
                        0 === c ? i ? n.push.apply(n, l) : n.push(u) : r.push({
                            documentOrder: o,
                            tabIndex: c,
                            item: t,
                            isScope: i,
                            content: l
                        })
                    })), r.sort(y).reduce((function(e, t) {
                        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                    }), []).concat(n)
                },
                C = function(e, t) {
                    var n;
                    return n = (t = t || {}).getShadowRoot ? v([e], t.includeContainer, {
                        filter: T.bind(null, t),
                        flatten: !1,
                        getShadowRoot: t.getShadowRoot,
                        shadowRootFilter: S
                    }) : m(e, t.includeContainer, T.bind(null, t)), L(n)
                },
                P = "undefined" !== typeof document ? i.useLayoutEffect : i.useEffect;

            function k() {
                const e = new Map;
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach((e => e(n)))
                    },
                    on(t, n) {
                        e.set(t, [...e.get(t) || [], n])
                    },
                    off(t, n) {
                        e.set(t, (e.get(t) || []).filter((e => e !== n)))
                    }
                }
            }
            let A = !1,
                O = 0;
            const M = () => "floating-ui-" + O++;
            const D = u["useId".toString()],
                I = null != D ? D : function() {
                    const [e, t] = i.useState((() => A ? M() : void 0));
                    return P((() => {
                        null == e && t(M())
                    }), []), i.useEffect((() => {
                        A || (A = !0)
                    }), []), e
                },
                F = i.createContext(null),
                N = i.createContext(null),
                B = () => {
                    var e, t;
                    return null != (e = null == (t = i.useContext(F)) ? void 0 : t.id) ? e : null
                },
                W = () => i.useContext(N);

            function H(e) {
                var t;
                return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
            }

            function V() {
                const e = navigator.userAgentData;
                return null != e && e.platform ? e.platform : navigator.platform
            }

            function j() {
                const e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map((e => {
                    let {
                        brand: t,
                        version: n
                    } = e;
                    return t + "/" + n
                })).join(" ") : navigator.userAgent
            }

            function _(e) {
                var t;
                return null != (t = H(e).defaultView) ? t : window
            }

            function z(e) {
                return !!e && e instanceof _(e).Element
            }

            function Y(e) {
                return !!e && e instanceof _(e).HTMLElement
            }

            function K(e) {
                if (0 === e.mozInputSource && e.isTrusted) return !0;
                const t = /Android/i;
                return (t.test(V()) || t.test(j())) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType
            }

            function X(e) {
                return 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" !== e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail
            }

            function q() {
                return /apple/i.test(navigator.vendor)
            }

            function $() {
                return V().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
            }
            const U = u["useInsertionEffect".toString()] || (e => e());

            function J(e) {
                const t = i.useRef((() => {
                    0
                }));
                return U((() => {
                    t.current = e
                })), i.useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }), [])
            }

            function G(e) {
                let {
                    open: t = !1,
                    onOpenChange: n,
                    whileElementsMounted: o,
                    placement: u,
                    middleware: c,
                    strategy: l,
                    nodeId: s
                } = void 0 === e ? {} : e;
                const [a, f] = i.useState(null), d = W(), p = i.useRef(null), m = i.useRef({}), v = i.useState((() => k()))[0], g = (0, r.YF)({
                    placement: u,
                    middleware: c,
                    strategy: l,
                    whileElementsMounted: o
                }), h = J(n), y = i.useMemo((() => ({ ...g.refs,
                    domReference: p
                })), [g.refs]), b = i.useMemo((() => ({ ...g,
                    refs: y,
                    dataRef: m,
                    nodeId: s,
                    events: v,
                    open: t,
                    onOpenChange: h,
                    _: {
                        domReference: a
                    }
                })), [g, s, v, t, h, y, a]);
                P((() => {
                    const e = null == d ? void 0 : d.nodesRef.current.find((e => e.id === s));
                    e && (e.context = b)
                }));
                const {
                    reference: w
                } = g, x = i.useCallback((e => {
                    (z(e) || null === e) && (b.refs.domReference.current = e, f(e)), w(e)
                }), [w, b.refs]);
                return i.useMemo((() => ({ ...g,
                    context: b,
                    refs: y,
                    reference: x
                })), [g, y, b, x])
            }

            function Q(e, t, n) {
                const r = new Map;
                return { ..."floating" === n && {
                        tabIndex: -1
                    },
                    ...e,
                    ...t.map((e => e ? e[n] : null)).concat(e).reduce(((e, t) => t ? (Object.entries(t).forEach((t => {
                        let [n, o] = t;
                        var i;
                        0 === n.indexOf("on") ? (r.has(n) || r.set(n, []), "function" === typeof o && (null == (i = r.get(n)) || i.push(o), e[n] = function() {
                            for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                            null == (e = r.get(n)) || e.forEach((e => e(...o)))
                        })) : e[n] = o
                    })), e) : e), {})
                }
            }
            const Z = function(e) {
                void 0 === e && (e = []);
                const t = e,
                    n = i.useCallback((t => Q(t, e, "reference")), t),
                    r = i.useCallback((t => Q(t, e, "floating")), t),
                    o = i.useCallback((t => Q(t, e, "item")), t);
                return i.useMemo((() => ({
                    getReferenceProps: n,
                    getFloatingProps: r,
                    getItemProps: o
                })), [n, r, o])
            };

            function ee(e, t) {
                if (!e || !t) return !1;
                const n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (r = n, "undefined" !== typeof ShadowRoot && (r instanceof _(r).ShadowRoot || r instanceof ShadowRoot))) {
                    let n = t;
                    do {
                        if (n && e === n) return !0;
                        n = n.parentNode || n.host
                    } while (n)
                }
                var r;
                return !1
            }

            function te(e, t) {
                var n;
                let r = null != (n = e.filter((e => {
                        var n;
                        return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
                    }))) ? n : [],
                    o = r;
                for (; o.length;) {
                    var i;
                    o = null != (i = e.filter((e => {
                        var t;
                        return null == (t = o) ? void 0 : t.some((t => {
                            var n;
                            return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                        }))
                    }))) ? i : [], r = r.concat(o)
                }
                return r
            }

            function ne(e) {
                return "composedPath" in e ? e.composedPath()[0] : e.target
            }

            function re(e) {
                let t, {
                        restMs: n = 0,
                        buffer: r = .5,
                        blockPointerEvents: o = !0,
                        debug: i = null
                    } = void 0 === e ? {} : e,
                    u = !1;
                const c = e => {
                    let {
                        x: o,
                        y: i,
                        placement: c,
                        refs: l,
                        onClose: s,
                        nodeId: a,
                        tree: f,
                        leave: d = !1
                    } = e;
                    return function(e) {
                        function p() {
                            clearTimeout(t), s()
                        }
                        clearTimeout(t);
                        const {
                            clientX: m,
                            clientY: v
                        } = e, g = ne(e);
                        if ("mousemove" === e.type && ee(l.domReference.current, g)) return;
                        if ("mouseleave" === e.type && z(e.relatedTarget) && ee(l.floating.current, e.relatedTarget)) return;
                        if (f && te(f.nodesRef.current, a).some((e => {
                                let {
                                    context: t
                                } = e;
                                return null == t ? void 0 : t.open
                            }))) return;
                        if (ee(l.floating.current, g) && !d) return void(u = !0);
                        if (!l.domReference.current || !l.floating.current || null == c || null == o || null == i) return;
                        const h = l.domReference.current.getBoundingClientRect(),
                            y = l.floating.current.getBoundingClientRect(),
                            b = c.split("-")[0],
                            w = o > y.right - y.width / 2,
                            x = i > y.bottom - y.height / 2;
                        if ("top" === b && i >= h.bottom - 1 || "bottom" === b && i <= h.top + 1 || "left" === b && o >= h.right - 1 || "right" === b && o <= h.left + 1) return p();
                        switch (b) {
                            case "top":
                                if (m >= y.left && m <= y.right && v >= y.top && v <= h.top + 1) return;
                                break;
                            case "bottom":
                                if (m >= y.left && m <= y.right && v >= h.bottom - 1 && v <= y.bottom) return;
                                break;
                            case "left":
                                if (m >= y.left && m <= h.left + 1 && v >= y.top && v <= y.bottom) return;
                                break;
                            case "right":
                                if (m >= h.right - 1 && m <= y.right && v >= y.top && v <= y.bottom) return
                        }
                        if (u) return p();
                        const E = function(e) {
                            let [t, n] = e;
                            const o = y.width > h.width,
                                i = y.height > h.height;
                            switch (b) {
                                case "top":
                                    return [
                                        [o ? t + r / 2 : w ? t + 4 * r : t - 4 * r, n + r + 1],
                                        [o ? t - r / 2 : w ? t + 4 * r : t - 4 * r, n + r + 1], ...[
                                            [y.left, w || o ? y.bottom - r : y.top],
                                            [y.right, w ? o ? y.bottom - r : y.top : y.bottom - r]
                                        ]
                                    ];
                                case "bottom":
                                    return [
                                        [o ? t + r / 2 : w ? t + 4 * r : t - 4 * r, n - r],
                                        [o ? t - r / 2 : w ? t + 4 * r : t - 4 * r, n - r], ...[
                                            [y.left, w || o ? y.top + r : y.bottom],
                                            [y.right, w ? o ? y.top + r : y.bottom : y.top + r]
                                        ]
                                    ];
                                case "left":
                                    {
                                        const e = [t + r + 1, i ? n + r / 2 : x ? n + 4 * r : n - 4 * r],
                                            o = [t + r + 1, i ? n - r / 2 : x ? n + 4 * r : n - 4 * r];
                                        return [...[
                                            [x || i ? y.right - r : y.left, y.top],
                                            [x ? i ? y.right - r : y.left : y.right - r, y.bottom]
                                        ], e, o]
                                    }
                                case "right":
                                    return [
                                        [t - r, i ? n + r / 2 : x ? n + 4 * r : n - 4 * r],
                                        [t - r, i ? n - r / 2 : x ? n + 4 * r : n - 4 * r], ...[
                                            [x || i ? y.left + r : y.right, y.top],
                                            [x ? i ? y.left + r : y.right : y.left + r, y.bottom]
                                        ]
                                    ]
                            }
                        }([o, i]);
                        ! function(e, t) {
                            const [n, r] = e;
                            let o = !1;
                            const i = t.length;
                            for (let u = 0, c = i - 1; u < i; c = u++) {
                                const [e, i] = t[u] || [0, 0], [l, s] = t[c] || [0, 0];
                                i >= r !== s >= r && n <= (l - e) * (r - i) / (s - i) + e && (o = !o)
                            }
                            return o
                        }([m, v], E) ? p(): n && (t = setTimeout(s, n))
                    }
                };
                return c.__options = {
                    blockPointerEvents: o
                }, c
            }

            function oe() {
                return oe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, oe.apply(this, arguments)
            }
            const ie = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };
            let ue, ce;

            function le(e) {
                "Tab" === e.key && (ue = e.target, clearTimeout(ce))
            }
            const se = i.forwardRef((function(e, t) {
                const n = J(e.onFocus),
                    [r, o] = i.useState();
                return P((() => (q() && o("button"), document.addEventListener("keydown", le), () => {
                    document.removeEventListener("keydown", le)
                })), []), i.createElement("span", oe({}, e, {
                    ref: t,
                    tabIndex: 0,
                    role: r,
                    "aria-hidden": !r || void 0,
                    "data-floating-ui-focus-guard": "",
                    style: ie,
                    onFocus: e => {
                        q() && $() && ! function(e) {
                            const t = ue === e.relatedTarget;
                            return ue = e.relatedTarget, clearTimeout(ce), t
                        }(e) ? (e.persist(), ce = window.setTimeout((() => {
                            n(e)
                        }), 50)) : n(e)
                    }
                }))
            }));

            function ae(e) {
                let t = e.activeElement;
                for (; null != (null == (n = t) || null == (r = n.shadowRoot) ? void 0 : r.activeElement);) {
                    var n, r;
                    t = t.shadowRoot.activeElement
                }
                return t
            }
            const fe = () => ({
                getShadowRoot: !0,
                displayCheck: "function" === typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });

            function de(e, t) {
                const n = C(e, fe());
                "prev" === t && n.reverse();
                const r = n.indexOf(ae(H(e)));
                return n.slice(r + 1)[0]
            }

            function pe() {
                return de(document.body, "next")
            }

            function me() {
                return de(document.body, "prev")
            }

            function ve(e, t) {
                const n = t || e.currentTarget,
                    r = e.relatedTarget;
                return !r || !ee(n, r)
            }

            function ge(e) {
                C(e, fe()).forEach((e => {
                    var t;
                    e.dataset.tabindex = null != (t = e.getAttribute("tabindex")) ? t : "", e.setAttribute("tabindex", "-1")
                }))
            }

            function he(e) {
                e.querySelectorAll("[data-tabindex]").forEach((e => {
                    const t = e.dataset.tabindex;
                    delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                }))
            }
            const ye = i.createContext(null),
                be = e => {
                    let {
                        children: t,
                        id: n,
                        root: r = null,
                        preserveTabOrder: o = !0
                    } = e;
                    const u = function(e) {
                            let {
                                id: t,
                                enabled: n = !0
                            } = void 0 === e ? {} : e;
                            const [r, o] = i.useState(null), u = I(), c = we();
                            return P((() => {
                                if (!n) return;
                                const e = t ? document.getElementById(t) : null;
                                if (!e) {
                                    const e = document.createElement("div");
                                    e.id = t || u, e.setAttribute("data-floating-ui-portal", ""), o(e);
                                    const n = (null == c ? void 0 : c.portalNode) || document.body;
                                    return n.appendChild(e), () => {
                                        n.removeChild(e)
                                    }
                                }
                                e.setAttribute("data-floating-ui-portal", ""), o(e)
                            }), [t, c, u, n]), r
                        }({
                            id: n,
                            enabled: !r
                        }),
                        [l, s] = i.useState(null),
                        a = i.useRef(null),
                        f = i.useRef(null),
                        d = i.useRef(null),
                        p = i.useRef(null),
                        m = !!l && !l.modal && !(!r && !u) && o;
                    return i.useEffect((() => {
                        if (u && o && (null == l || !l.modal)) return u.addEventListener("focusin", e, !0), u.addEventListener("focusout", e, !0), () => {
                            u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0)
                        };

                        function e(e) {
                            if (u && ve(e)) {
                                ("focusin" === e.type ? he : ge)(u)
                            }
                        }
                    }), [u, o, null == l ? void 0 : l.modal]), i.createElement(ye.Provider, {
                        value: i.useMemo((() => ({
                            preserveTabOrder: o,
                            beforeOutsideRef: a,
                            afterOutsideRef: f,
                            beforeInsideRef: d,
                            afterInsideRef: p,
                            portalNode: u,
                            setFocusManagerState: s
                        })), [o, u])
                    }, m && u && i.createElement(se, {
                        ref: a,
                        onFocus: e => {
                            if (ve(e, u)) {
                                var t;
                                null == (t = d.current) || t.focus()
                            } else {
                                const e = me() || (null == l ? void 0 : l.refs.domReference.current);
                                null == e || e.focus()
                            }
                        }
                    }), m && u && i.createElement("span", {
                        "aria-owns": u.id,
                        style: ie
                    }), r ? (0, c.createPortal)(t, r) : u ? (0, c.createPortal)(t, u) : null, m && u && i.createElement(se, {
                        ref: f,
                        onFocus: e => {
                            if (ve(e, u)) {
                                var t;
                                null == (t = p.current) || t.focus()
                            } else {
                                const e = pe() || (null == l ? void 0 : l.refs.domReference.current);
                                null == e || e.focus(), null == l || l.onOpenChange(!1)
                            }
                        }
                    }))
                },
                we = () => i.useContext(ye);

            function xe(e) {
                const t = (0, i.useRef)(e);
                return P((() => {
                    t.current = e
                })), t
            }
            const Ee = ["mouse", "pen", "", void 0];

            function Re(e, t, n) {
                return n && !Ee.includes(n) ? 0 : "number" === typeof e ? e : null == e ? void 0 : e[t]
            }
            const Te = function(e, t) {
                let {
                    enabled: n = !0,
                    delay: r = 0,
                    handleClose: o = null,
                    mouseOnly: u = !1,
                    restMs: c = 0,
                    move: l = !0
                } = void 0 === t ? {} : t;
                const {
                    open: s,
                    onOpenChange: a,
                    dataRef: f,
                    events: d,
                    refs: p,
                    _: m
                } = e, v = W(), g = B(), h = xe(o), y = xe(r), b = i.useRef(), w = i.useRef(), x = i.useRef(), E = i.useRef(), R = i.useRef(!0), T = i.useRef(!1), S = i.useCallback((() => {
                    var e;
                    const t = null == (e = f.current.openEvent) ? void 0 : e.type;
                    return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
                }), [f]);
                i.useEffect((() => {
                    if (n) return d.on("dismiss", e), () => {
                        d.off("dismiss", e)
                    };

                    function e() {
                        clearTimeout(w.current), clearTimeout(E.current), R.current = !0
                    }
                }), [n, d, p]), i.useEffect((() => {
                    if (!n || !h.current || !s) return;

                    function e() {
                        S() && a(!1)
                    }
                    const t = H(p.floating.current).documentElement;
                    return t.addEventListener("mouseleave", e), () => {
                        t.removeEventListener("mouseleave", e)
                    }
                }), [p, s, a, n, h, f, S]);
                const L = i.useCallback((function(e) {
                        void 0 === e && (e = !0);
                        const t = Re(y.current, "close", b.current);
                        t && !x.current ? (clearTimeout(w.current), w.current = setTimeout((() => a(!1)), t)) : e && (clearTimeout(w.current), a(!1))
                    }), [y, a]),
                    C = i.useCallback((() => {
                        x.current && (H(p.floating.current).removeEventListener("mousemove", x.current), x.current = void 0)
                    }), [p]),
                    k = i.useCallback((() => {
                        H(p.floating.current).body.style.pointerEvents = "", T.current = !1
                    }), [p]);
                return i.useEffect((() => {
                    if (!n) return;

                    function t() {
                        return !!f.current.openEvent && ["click", "mousedown"].includes(f.current.openEvent.type)
                    }

                    function r(e) {
                        if (clearTimeout(w.current), R.current = !1, u && !Ee.includes(b.current) || c > 0 && 0 === Re(y.current, "open")) return;
                        f.current.openEvent = e;
                        const t = Re(y.current, "open", b.current);
                        t ? w.current = setTimeout((() => {
                            a(!0)
                        }), t) : a(!0)
                    }

                    function o(n) {
                        if (t()) return;
                        const r = H(p.floating.current);
                        if (clearTimeout(E.current), h.current) return clearTimeout(w.current), x.current && r.removeEventListener("mousemove", x.current), x.current = h.current({ ...e,
                            tree: v,
                            x: n.clientX,
                            y: n.clientY,
                            onClose() {
                                k(), C(), L()
                            }
                        }), void r.addEventListener("mousemove", x.current);
                        L()
                    }

                    function i(n) {
                        t() || null == h.current || h.current({ ...e,
                            tree: v,
                            x: n.clientX,
                            y: n.clientY,
                            leave: !0,
                            onClose() {
                                k(), C(), L()
                            }
                        })(n)
                    }
                    const d = p.floating.current,
                        m = p.domReference.current;
                    return z(m) ? (s && m.addEventListener("mouseleave", i), null == d || d.addEventListener("mouseleave", i), l && m.addEventListener("mousemove", r, {
                        once: !0
                    }), m.addEventListener("mouseenter", r), m.addEventListener("mouseleave", o), () => {
                        s && m.removeEventListener("mouseleave", i), null == d || d.removeEventListener("mouseleave", i), l && m.removeEventListener("mousemove", r), m.removeEventListener("mouseenter", r), m.removeEventListener("mouseleave", o)
                    }) : void 0
                }), [m.domReference, n, e, u, c, l, L, C, k, a, s, v, p, y, h, f]), P((() => {
                    if (n && s && h.current && h.current.__options.blockPointerEvents && S()) {
                        H(p.floating.current).body.style.pointerEvents = "none", T.current = !0;
                        const n = p.domReference.current,
                            r = p.floating.current;
                        if (z(n) && r) {
                            var e, t;
                            const o = null == v || null == (e = v.nodesRef.current.find((e => e.id === g))) || null == (t = e.context) ? void 0 : t.refs.floating.current;
                            return o && (o.style.pointerEvents = ""), n.style.pointerEvents = "auto", r.style.pointerEvents = "auto", () => {
                                n.style.pointerEvents = "", r.style.pointerEvents = ""
                            }
                        }
                    }
                }), [n, s, g, p, v, h, f, S]), P((() => {
                    s || (b.current = void 0, C(), T.current && k())
                }), [s, C, k]), i.useEffect((() => () => {
                    C(), clearTimeout(w.current), clearTimeout(E.current), T.current && k()
                }), [n, C, k]), i.useMemo((() => {
                    if (!n) return {};

                    function e(e) {
                        b.current = e.pointerType
                    }
                    return {
                        reference: {
                            onPointerDown: e,
                            onPointerEnter: e,
                            onMouseMove() {
                                s || 0 === c || (clearTimeout(E.current), E.current = setTimeout((() => {
                                    R.current || a(!0)
                                }), c))
                            }
                        },
                        floating: {
                            onMouseEnter() {
                                clearTimeout(w.current)
                            },
                            onMouseLeave() {
                                L(!1)
                            }
                        }
                    }
                }), [n, c, s, a, L])
            };
            const Se = function(e, t) {
                let {
                    open: n
                } = e, {
                    enabled: r = !0,
                    role: o = "dialog"
                } = void 0 === t ? {} : t;
                const u = I(),
                    c = I();
                return i.useMemo((() => {
                    const e = {
                        id: u,
                        role: o
                    };
                    return r ? "tooltip" === o ? {
                        reference: {
                            "aria-describedby": n ? u : void 0
                        },
                        floating: e
                    } : {
                        reference: {
                            "aria-expanded": n ? "true" : "false",
                            "aria-haspopup": "alertdialog" === o ? "dialog" : o,
                            "aria-controls": n ? u : void 0,
                            ..."listbox" === o && {
                                role: "combobox"
                            },
                            ..."menu" === o && {
                                id: c
                            }
                        },
                        floating: { ...e,
                            ..."menu" === o && {
                                "aria-labelledby": c
                            }
                        }
                    } : {}
                }), [r, o, n, u, c])
            };

            function Le(e, t) {
                if (null == t) return !1;
                if ("composedPath" in e) return e.composedPath().includes(t);
                const n = e;
                return null != n.target && t.contains(n.target)
            }
            const Ce = {
                    pointerdown: "onPointerDown",
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                Pe = {
                    pointerdown: "onPointerDownCapture",
                    mousedown: "onMouseDownCapture",
                    click: "onClickCapture"
                },
                ke = function(e, t) {
                    let {
                        open: n,
                        onOpenChange: r,
                        refs: u,
                        events: c,
                        nodeId: l
                    } = e, {
                        enabled: s = !0,
                        escapeKey: a = !0,
                        outsidePress: f = !0,
                        outsidePressEvent: d = "pointerdown",
                        referencePress: p = !1,
                        referencePressEvent: m = "pointerdown",
                        ancestorScroll: v = !1,
                        bubbles: g = !0
                    } = void 0 === t ? {} : t;
                    const h = W(),
                        y = null != B(),
                        b = xe(f),
                        w = i.useRef(!1);
                    return i.useEffect((() => {
                        if (!n || !s) return;
                        const e = b.current;

                        function t(e) {
                            if ("Escape" === e.key) {
                                if (!g && h && te(h.nodesRef.current, l).length > 0) return;
                                c.emit("dismiss", {
                                    type: "escapeKey",
                                    data: {
                                        returnFocus: {
                                            preventScroll: !1
                                        }
                                    }
                                }), r(!1)
                            }
                        }

                        function i(t) {
                            const n = w.current;
                            if (w.current = !1, n) return;
                            if ("function" === typeof e && !e(t)) return;
                            const o = ne(t);
                            if (z(o) && u.floating.current) {
                                var i;
                                const e = null != (i = u.floating.current.ownerDocument.defaultView) ? i : window,
                                    n = o.scrollWidth > o.clientWidth,
                                    r = o.scrollHeight > o.clientHeight;
                                let c = r && t.offsetX > o.clientWidth;
                                if (r) {
                                    "rtl" === e.getComputedStyle(o).direction && (c = t.offsetX <= o.offsetWidth - o.clientWidth)
                                }
                                if (c || n && t.offsetY > o.clientHeight) return
                            }
                            const s = h && te(h.nodesRef.current, l).some((e => {
                                var n;
                                return Le(t, null == (n = e.context) ? void 0 : n.refs.floating.current)
                            }));
                            Le(t, u.floating.current) || Le(t, u.domReference.current) || s || !g && h && te(h.nodesRef.current, l).length > 0 || (c.emit("dismiss", {
                                type: "outsidePress",
                                data: {
                                    returnFocus: y ? {
                                        preventScroll: !0
                                    } : K(t) || X(t)
                                }
                            }), r(!1))
                        }

                        function f() {
                            r(!1)
                        }
                        const p = H(u.floating.current);
                        a && p.addEventListener("keydown", t), e && p.addEventListener(d, i);
                        let m = [];
                        return v && (z(u.domReference.current) && (m = (0, o.Kx)(u.domReference.current)), z(u.floating.current) && (m = m.concat((0, o.Kx)(u.floating.current))), !z(u.reference.current) && u.reference.current && u.reference.current.contextElement && (m = m.concat((0, o.Kx)(u.reference.current.contextElement)))), m = m.filter((e => {
                            var t;
                            return e !== (null == (t = p.defaultView) ? void 0 : t.visualViewport)
                        })), m.forEach((e => {
                            e.addEventListener("scroll", f, {
                                passive: !0
                            })
                        })), () => {
                            a && p.removeEventListener("keydown", t), e && p.removeEventListener(d, i), m.forEach((e => {
                                e.removeEventListener("scroll", f)
                            }))
                        }
                    }), [a, b, d, c, h, l, n, r, v, s, g, u, y]), i.useEffect((() => {
                        w.current = !1
                    }), [f, d]), i.useMemo((() => s ? {
                        reference: {
                            [Ce[m]]: () => {
                                p && (c.emit("dismiss", {
                                    type: "referencePress",
                                    data: {
                                        returnFocus: !1
                                    }
                                }), r(!1))
                            }
                        },
                        floating: {
                            [Pe[d]]: () => {
                                w.current = !0
                            }
                        }
                    } : {}), [s, c, p, d, m, r])
                },
                Ae = function(e, t) {
                    let {
                        open: n,
                        onOpenChange: r,
                        dataRef: o,
                        refs: u,
                        events: c
                    } = e, {
                        enabled: l = !0,
                        keyboardOnly: s = !0
                    } = void 0 === t ? {} : t;
                    const a = i.useRef(""),
                        f = i.useRef(!1),
                        d = i.useRef();
                    return i.useEffect((() => {
                        var e;
                        if (!l) return;
                        const t = null != (e = H(u.floating.current).defaultView) ? e : window;

                        function r() {
                            !n && Y(u.domReference.current) && u.domReference.current === ae(H(u.domReference.current)) && (f.current = !0)
                        }
                        return t.addEventListener("blur", r), () => {
                            t.removeEventListener("blur", r)
                        }
                    }), [u, n, l]), i.useEffect((() => {
                        if (l) return c.on("dismiss", e), () => {
                            c.off("dismiss", e)
                        };

                        function e(e) {
                            "referencePress" !== e.type && "escapeKey" !== e.type || (f.current = !0)
                        }
                    }), [c, l]), i.useEffect((() => () => {
                        clearTimeout(d.current)
                    }), []), i.useMemo((() => l ? {
                        reference: {
                            onPointerDown(e) {
                                let {
                                    pointerType: t
                                } = e;
                                a.current = t, f.current = !(!t || !s)
                            },
                            onMouseLeave() {
                                f.current = !1
                            },
                            onFocus(e) {
                                var t;
                                f.current || "focus" === e.type && "mousedown" === (null == (t = o.current.openEvent) ? void 0 : t.type) && o.current.openEvent && Le(o.current.openEvent, u.domReference.current) || (o.current.openEvent = e.nativeEvent, r(!0))
                            },
                            onBlur(e) {
                                f.current = !1;
                                const t = e.relatedTarget,
                                    n = z(t) && t.hasAttribute("data-floating-ui-focus-guard");
                                d.current = setTimeout((() => {
                                    ee(u.floating.current, t) || ee(u.domReference.current, t) || n || r(!1)
                                }))
                            }
                        }
                    } : {}), [l, s, u, o, r])
                }
        },
        11897: function(e, t, n) {
            "use strict";
            n.d(t, {
                YF: function() {
                    return f
                },
                x7: function() {
                    return c
                }
            });
            var r = n(63442),
                o = n(15636),
                i = n(70079),
                u = n(99581);
            const c = e => {
                const {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        return o = t, Object.prototype.hasOwnProperty.call(o, "current") ? null != t.current ? (0, r.x7)({
                            element: t.current,
                            padding: n
                        }).fn(e) : {} : t ? (0, r.x7)({
                            element: t,
                            padding: n
                        }).fn(e) : {};
                        var o
                    }
                }
            };
            var l = "undefined" !== typeof document ? i.useLayoutEffect : i.useEffect;

            function s(e, t) {
                if (e === t) return !0;
                if (typeof e !== typeof t) return !1;
                if ("function" === typeof e && e.toString() === t.toString()) return !0;
                let n, r, o;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length, n != t.length) return !1;
                        for (r = n; 0 !== r--;)
                            if (!s(e[r], t[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                    for (r = n; 0 !== r--;)
                        if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 !== r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !s(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e !== e && t !== t
            }

            function a(e) {
                const t = i.useRef(e);
                return l((() => {
                    t.current = e
                })), t
            }

            function f(e) {
                void 0 === e && (e = {});
                const {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: r = [],
                    platform: c,
                    whileElementsMounted: f,
                    open: d
                } = e, [p, m] = i.useState({
                    x: null,
                    y: null,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [v, g] = i.useState(r);
                s(v, r) || g(r);
                const h = i.useRef(null),
                    y = i.useRef(null),
                    b = i.useRef(p),
                    w = a(f),
                    x = a(c),
                    [E, R] = i.useState(null),
                    [T, S] = i.useState(null),
                    L = i.useCallback((e => {
                        h.current !== e && (h.current = e, R(e))
                    }), []),
                    C = i.useCallback((e => {
                        y.current !== e && (y.current = e, S(e))
                    }), []),
                    P = i.useCallback((() => {
                        if (!h.current || !y.current) return;
                        const e = {
                            placement: t,
                            strategy: n,
                            middleware: v
                        };
                        x.current && (e.platform = x.current), (0, o.oo)(h.current, y.current, e).then((e => {
                            const t = { ...e,
                                isPositioned: !0
                            };
                            k.current && !s(b.current, t) && (b.current = t, u.flushSync((() => {
                                m(t)
                            })))
                        }))
                    }), [v, t, n, x]);
                l((() => {
                    !1 === d && b.current.isPositioned && (b.current.isPositioned = !1, m((e => ({ ...e,
                        isPositioned: !1
                    }))))
                }), [d]);
                const k = i.useRef(!1);
                l((() => (k.current = !0, () => {
                    k.current = !1
                })), []), l((() => {
                    if (E && T) {
                        if (w.current) return w.current(E, T, P);
                        P()
                    }
                }), [E, T, P, w]);
                const A = i.useMemo((() => ({
                        reference: h,
                        floating: y,
                        setReference: L,
                        setFloating: C
                    })), [L, C]),
                    O = i.useMemo((() => ({
                        reference: E,
                        floating: T
                    })), [E, T]);
                return i.useMemo((() => ({ ...p,
                    update: P,
                    refs: A,
                    elements: O,
                    reference: L,
                    floating: C
                })), [p, P, A, O, L, C])
            }
        },
        68039: function(e, t, n) {
            var r = n(790),
                o = n(65064),
                i = n(43735),
                u = n(2428),
                c = n(71701),
                l = n(7757),
                s = n(92403),
                a = n(56868),
                f = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (c(e) && (u(e) || "string" == typeof e || "function" == typeof e.splice || l(e) || a(e) || i(e))) return !e.length;
                var t = o(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (s(e)) return !r(e).length;
                for (var n in e)
                    if (f.call(e, n)) return !1;
                return !0
            }
        },
        63442: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.split("-")[1]
            }

            function o(e) {
                return "y" === e ? "height" : "width"
            }

            function i(e) {
                return e.split("-")[0]
            }

            function u(e) {
                return ["top", "bottom"].includes(i(e)) ? "x" : "y"
            }

            function c(e, t, n) {
                let {
                    reference: c,
                    floating: l
                } = e;
                const s = c.x + c.width / 2 - l.width / 2,
                    a = c.y + c.height / 2 - l.height / 2,
                    f = u(t),
                    d = o(f),
                    p = c[d] / 2 - l[d] / 2,
                    m = "x" === f;
                let v;
                switch (i(t)) {
                    case "top":
                        v = {
                            x: s,
                            y: c.y - l.height
                        };
                        break;
                    case "bottom":
                        v = {
                            x: s,
                            y: c.y + c.height
                        };
                        break;
                    case "right":
                        v = {
                            x: c.x + c.width,
                            y: a
                        };
                        break;
                    case "left":
                        v = {
                            x: c.x - l.width,
                            y: a
                        };
                        break;
                    default:
                        v = {
                            x: c.x,
                            y: c.y
                        }
                }
                switch (r(t)) {
                    case "start":
                        v[f] -= p * (n && m ? -1 : 1);
                        break;
                    case "end":
                        v[f] += p * (n && m ? -1 : 1)
                }
                return v
            }
            n.d(t, {
                JB: function() {
                    return f
                },
                RR: function() {
                    return R
                },
                cv: function() {
                    return T
                },
                dp: function() {
                    return C
                },
                oo: function() {
                    return l
                },
                uY: function() {
                    return L
                },
                x7: function() {
                    return g
                }
            });
            const l = async (e, t, n) => {
                const {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: u
                } = n, l = i.filter(Boolean), s = await (null == u.isRTL ? void 0 : u.isRTL(t));
                let a = await u.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }),
                    {
                        x: f,
                        y: d
                    } = c(a, r, s),
                    p = r,
                    m = {},
                    v = 0;
                for (let g = 0; g < l.length; g++) {
                    const {
                        name: n,
                        fn: i
                    } = l[g], {
                        x: h,
                        y: y,
                        data: b,
                        reset: w
                    } = await i({
                        x: f,
                        y: d,
                        initialPlacement: r,
                        placement: p,
                        strategy: o,
                        middlewareData: m,
                        rects: a,
                        platform: u,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    f = null != h ? h : f, d = null != y ? y : d, m = { ...m,
                        [n]: { ...m[n],
                            ...b
                        }
                    }, w && v <= 50 && (v++, "object" == typeof w && (w.placement && (p = w.placement), w.rects && (a = !0 === w.rects ? await u.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), ({
                        x: f,
                        y: d
                    } = c(a, p, s))), g = -1)
                }
                return {
                    x: f,
                    y: d,
                    placement: p,
                    strategy: o,
                    middlewareData: m
                }
            };

            function s(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function a(e) {
                return "number" != typeof e ? function(e) {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...e
                    }
                }(e) : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function f(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function d(e, t) {
                var n;
                void 0 === t && (t = {});
                const {
                    x: r,
                    y: o,
                    platform: i,
                    rects: u,
                    elements: c,
                    strategy: l
                } = e, {
                    boundary: d = "clippingAncestors",
                    rootBoundary: p = "viewport",
                    elementContext: m = "floating",
                    altBoundary: v = !1,
                    padding: g = 0
                } = s(t, e), h = a(g), y = c[v ? "floating" === m ? "reference" : "floating" : m], b = f(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating)),
                    boundary: d,
                    rootBoundary: p,
                    strategy: l
                })), w = "floating" === m ? { ...u.floating,
                    x: r,
                    y: o
                } : u.reference, x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)), E = await (null == i.isElement ? void 0 : i.isElement(x)) && await (null == i.getScale ? void 0 : i.getScale(x)) || {
                    x: 1,
                    y: 1
                }, R = f(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: w,
                    offsetParent: x,
                    strategy: l
                }) : w);
                return {
                    top: (b.top - R.top + h.top) / E.y,
                    bottom: (R.bottom - b.bottom + h.bottom) / E.y,
                    left: (b.left - R.left + h.left) / E.x,
                    right: (R.right - b.right + h.right) / E.x
                }
            }
            const p = Math.min,
                m = Math.max;

            function v(e, t, n) {
                return m(e, p(t, n))
            }
            const g = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        const {
                            x: n,
                            y: i,
                            placement: c,
                            rects: l,
                            platform: f,
                            elements: d
                        } = t, {
                            element: m,
                            padding: g = 0
                        } = s(e, t) || {};
                        if (null == m) return {};
                        const h = a(g),
                            y = {
                                x: n,
                                y: i
                            },
                            b = u(c),
                            w = o(b),
                            x = await f.getDimensions(m),
                            E = "y" === b,
                            R = E ? "top" : "left",
                            T = E ? "bottom" : "right",
                            S = E ? "clientHeight" : "clientWidth",
                            L = l.reference[w] + l.reference[b] - y[b] - l.floating[w],
                            C = y[b] - l.reference[b],
                            P = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(m));
                        let k = P ? P[S] : 0;
                        k && await (null == f.isElement ? void 0 : f.isElement(P)) || (k = d.floating[S] || l.floating[w]);
                        const A = L / 2 - C / 2,
                            O = k / 2 - x[w] / 2 - 1,
                            M = p(h[R], O),
                            D = p(h[T], O),
                            I = M,
                            F = k - x[w] - D,
                            N = k / 2 - x[w] / 2 + A,
                            B = v(I, N, F),
                            W = null != r(c) && N != B && l.reference[w] / 2 - (N < I ? M : D) - x[w] / 2 < 0 ? N < I ? I - N : F - N : 0;
                        return {
                            [b]: y[b] - W,
                            data: {
                                [b]: B,
                                centerOffset: N - B + W
                            }
                        }
                    }
                }),
                h = ["top", "right", "bottom", "left"],
                y = (h.reduce(((e, t) => e.concat(t, t + "-start", t + "-end")), []), {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                });

            function b(e) {
                return e.replace(/left|right|bottom|top/g, (e => y[e]))
            }

            function w(e, t, n) {
                void 0 === n && (n = !1);
                const i = r(e),
                    c = u(e),
                    l = o(c);
                let s = "x" === c ? i === (n ? "end" : "start") ? "right" : "left" : "start" === i ? "bottom" : "top";
                return t.reference[l] > t.floating[l] && (s = b(s)), {
                    main: s,
                    cross: b(s)
                }
            }
            const x = {
                start: "end",
                end: "start"
            };

            function E(e) {
                return e.replace(/start|end/g, (e => x[e]))
            }
            const R = function(e) {
                return void 0 === e && (e = {}), {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n;
                        const {
                            placement: o,
                            middlewareData: u,
                            rects: c,
                            initialPlacement: l,
                            platform: a,
                            elements: f
                        } = t, {
                            mainAxis: p = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: v,
                            fallbackStrategy: g = "bestFit",
                            fallbackAxisSideDirection: h = "none",
                            flipAlignment: y = !0,
                            ...x
                        } = s(e, t), R = i(o), T = i(l) === l, S = await (null == a.isRTL ? void 0 : a.isRTL(f.floating)), L = v || (T || !y ? [b(l)] : function(e) {
                            const t = b(e);
                            return [E(e), t, E(t)]
                        }(l));
                        v || "none" === h || L.push(... function(e, t, n, o) {
                            const u = r(e);
                            let c = function(e, t, n) {
                                const r = ["left", "right"],
                                    o = ["right", "left"],
                                    i = ["top", "bottom"],
                                    u = ["bottom", "top"];
                                switch (e) {
                                    case "top":
                                    case "bottom":
                                        return n ? t ? o : r : t ? r : o;
                                    case "left":
                                    case "right":
                                        return t ? i : u;
                                    default:
                                        return []
                                }
                            }(i(e), "start" === n, o);
                            return u && (c = c.map((e => e + "-" + u)), t && (c = c.concat(c.map(E)))), c
                        }(l, y, h, S));
                        const C = [l, ...L],
                            P = await d(t, x),
                            k = [];
                        let A = (null == (n = u.flip) ? void 0 : n.overflows) || [];
                        if (p && k.push(P[R]), m) {
                            const {
                                main: e,
                                cross: t
                            } = w(o, c, S);
                            k.push(P[e], P[t])
                        }
                        if (A = [...A, {
                                placement: o,
                                overflows: k
                            }], !k.every((e => e <= 0))) {
                            var O, M;
                            const e = ((null == (O = u.flip) ? void 0 : O.index) || 0) + 1,
                                t = C[e];
                            if (t) return {
                                data: {
                                    index: e,
                                    overflows: A
                                },
                                reset: {
                                    placement: t
                                }
                            };
                            let n = null == (M = A.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : M.placement;
                            if (!n) switch (g) {
                                case "bestFit":
                                    {
                                        var D;
                                        const e = null == (D = A.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : D[0];e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = l
                            }
                            if (o !== n) return {
                                reset: {
                                    placement: n
                                }
                            }
                        }
                        return {}
                    }
                }
            };
            const T = function(e) {
                return void 0 === e && (e = 0), {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        const {
                            x: n,
                            y: o
                        } = t, c = await async function(e, t) {
                            const {
                                placement: n,
                                platform: o,
                                elements: c
                            } = e, l = await (null == o.isRTL ? void 0 : o.isRTL(c.floating)), a = i(n), f = r(n), d = "x" === u(n), p = ["left", "top"].includes(a) ? -1 : 1, m = l && d ? -1 : 1, v = s(t, e);
                            let {
                                mainAxis: g,
                                crossAxis: h,
                                alignmentAxis: y
                            } = "number" == typeof v ? {
                                mainAxis: v,
                                crossAxis: 0,
                                alignmentAxis: null
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...v
                            };
                            return f && "number" == typeof y && (h = "end" === f ? -1 * y : y), d ? {
                                x: h * m,
                                y: g * p
                            } : {
                                x: g * p,
                                y: h * m
                            }
                        }(t, e);
                        return {
                            x: n + c.x,
                            y: o + c.y,
                            data: c
                        }
                    }
                }
            };

            function S(e) {
                return "x" === e ? "y" : "x"
            }
            const L = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            const {
                                x: n,
                                y: r,
                                placement: o
                            } = t, {
                                mainAxis: c = !0,
                                crossAxis: l = !1,
                                limiter: a = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...f
                            } = s(e, t), p = {
                                x: n,
                                y: r
                            }, m = await d(t, f), g = u(i(o)), h = S(g);
                            let y = p[g],
                                b = p[h];
                            if (c) {
                                const e = "y" === g ? "bottom" : "right";
                                y = v(y + m["y" === g ? "top" : "left"], y, y - m[e])
                            }
                            if (l) {
                                const e = "y" === h ? "bottom" : "right";
                                b = v(b + m["y" === h ? "top" : "left"], b, b - m[e])
                            }
                            const w = a.fn({ ...t,
                                [g]: y,
                                [h]: b
                            });
                            return { ...w,
                                data: {
                                    x: w.x - n,
                                    y: w.y - r
                                }
                            }
                        }
                    }
                },
                C = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            const {
                                placement: n,
                                rects: o,
                                platform: c,
                                elements: l
                            } = t, {
                                apply: a = (() => {}),
                                ...f
                            } = s(e, t), v = await d(t, f), g = i(n), h = r(n), y = "x" === u(n), {
                                width: b,
                                height: w
                            } = o.floating;
                            let x, E;
                            "top" === g || "bottom" === g ? (x = g, E = h === (await (null == c.isRTL ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (E = g, x = "end" === h ? "top" : "bottom");
                            const R = w - v[x],
                                T = b - v[E],
                                S = !t.middlewareData.shift;
                            let L = R,
                                C = T;
                            if (y) {
                                const e = b - v.left - v.right;
                                C = h || S ? p(T, e) : e
                            } else {
                                const e = w - v.top - v.bottom;
                                L = h || S ? p(R, e) : e
                            }
                            if (S && !h) {
                                const e = m(v.left, 0),
                                    t = m(v.right, 0),
                                    n = m(v.top, 0),
                                    r = m(v.bottom, 0);
                                y ? C = b - 2 * (0 !== e || 0 !== t ? e + t : m(v.left, v.right)) : L = w - 2 * (0 !== n || 0 !== r ? n + r : m(v.top, v.bottom))
                            }
                            await a({ ...t,
                                availableWidth: C,
                                availableHeight: L
                            });
                            const P = await c.getDimensions(l.floating);
                            return b !== P.width || w !== P.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        15636: function(e, t, n) {
            "use strict";
            n.d(t, {
                Kx: function() {
                    return M
                },
                Me: function() {
                    return H
                },
                oo: function() {
                    return V
                }
            });
            var r = n(63442);

            function o(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function i(e) {
                return o(e).getComputedStyle(e)
            }

            function u(e) {
                return e instanceof o(e).Node
            }

            function c(e) {
                return u(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function l(e) {
                return e instanceof HTMLElement || e instanceof o(e).HTMLElement
            }

            function s(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function a(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = i(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function f(e) {
                return ["table", "td", "th"].includes(c(e))
            }

            function d(e) {
                const t = p(),
                    n = i(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
            }

            function p() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function m(e) {
                return ["html", "body", "#document"].includes(c(e))
            }
            const v = Math.min,
                g = Math.max,
                h = Math.round,
                y = Math.floor,
                b = e => ({
                    x: e,
                    y: e
                });

            function w(e) {
                const t = i(e);
                let n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0;
                const o = l(e),
                    u = o ? e.offsetWidth : n,
                    c = o ? e.offsetHeight : r,
                    s = h(n) !== u || h(r) !== c;
                return s && (n = u, r = c), {
                    width: n,
                    height: r,
                    $: s
                }
            }

            function x(e) {
                return e instanceof Element || e instanceof o(e).Element
            }

            function E(e) {
                return x(e) ? e : e.contextElement
            }

            function R(e) {
                const t = E(e);
                if (!l(t)) return b(1);
                const n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = w(t);
                let u = (i ? h(n.width) : n.width) / r,
                    c = (i ? h(n.height) : n.height) / o;
                return u && Number.isFinite(u) || (u = 1), c && Number.isFinite(c) || (c = 1), {
                    x: u,
                    y: c
                }
            }
            const T = b(0);

            function S(e) {
                const t = o(e);
                return p() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : T
            }

            function L(e, t, n, i) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const u = e.getBoundingClientRect(),
                    c = E(e);
                let l = b(1);
                t && (i ? x(i) && (l = R(i)) : l = R(e));
                const s = function(e, t, n) {
                    return void 0 === t && (t = !1), !(!n || t && n !== o(e)) && t
                }(c, n, i) ? S(c) : b(0);
                let a = (u.left + s.x) / l.x,
                    f = (u.top + s.y) / l.y,
                    d = u.width / l.x,
                    p = u.height / l.y;
                if (c) {
                    const e = o(c),
                        t = i && x(i) ? o(i) : i;
                    let n = e.frameElement;
                    for (; n && i && t !== e;) {
                        const e = R(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n),
                            i = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            u = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        a *= e.x, f *= e.y, d *= e.x, p *= e.y, a += i, f += u, n = o(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: d,
                    height: p,
                    x: a,
                    y: f
                })
            }

            function C(e) {
                return x(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function P(e) {
                var t;
                return null == (t = (u(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function k(e) {
                return L(P(e)).left + C(e).scrollLeft
            }

            function A(e) {
                if ("html" === c(e)) return e;
                const t = e.assignedSlot || e.parentNode || s(e) && e.host || P(e);
                return s(t) ? t.host : t
            }

            function O(e) {
                const t = A(e);
                return m(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : l(t) && a(t) ? t : O(t)
            }

            function M(e, t) {
                var n;
                void 0 === t && (t = []);
                const r = O(e),
                    i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    u = o(r);
                return i ? t.concat(u, u.visualViewport || [], a(r) ? r : []) : t.concat(r, M(r))
            }

            function D(e, t, n) {
                let u;
                if ("viewport" === t) u = function(e, t) {
                    const n = o(e),
                        r = P(e),
                        i = n.visualViewport;
                    let u = r.clientWidth,
                        c = r.clientHeight,
                        l = 0,
                        s = 0;
                    if (i) {
                        u = i.width, c = i.height;
                        const e = p();
                        (!e || e && "fixed" === t) && (l = i.offsetLeft, s = i.offsetTop)
                    }
                    return {
                        width: u,
                        height: c,
                        x: l,
                        y: s
                    }
                }(e, n);
                else if ("document" === t) u = function(e) {
                    const t = P(e),
                        n = C(e),
                        r = e.ownerDocument.body,
                        o = g(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        u = g(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
                    let c = -n.scrollLeft + k(e);
                    const l = -n.scrollTop;
                    return "rtl" === i(r).direction && (c += g(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: u,
                        x: c,
                        y: l
                    }
                }(P(e));
                else if (x(t)) u = function(e, t) {
                    const n = L(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = l(e) ? R(e) : b(1);
                    return {
                        width: e.clientWidth * i.x,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    const n = S(e);
                    u = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(u)
            }

            function I(e, t) {
                const n = A(e);
                return !(n === t || !x(n) || m(n)) && ("fixed" === i(n).position || I(n, t))
            }

            function F(e, t, n) {
                const r = l(t),
                    o = P(t),
                    i = "fixed" === n,
                    u = L(e, !0, i, t);
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const f = b(0);
                if (r || !r && !i)
                    if (("body" !== c(t) || a(o)) && (s = C(t)), l(t)) {
                        const e = L(t, !0, i, t);
                        f.x = e.x + t.clientLeft, f.y = e.y + t.clientTop
                    } else o && (f.x = k(o));
                return {
                    x: u.left + s.scrollLeft - f.x,
                    y: u.top + s.scrollTop - f.y,
                    width: u.width,
                    height: u.height
                }
            }

            function N(e, t) {
                return l(e) && "fixed" !== i(e).position ? t ? t(e) : e.offsetParent : null
            }

            function B(e, t) {
                const n = o(e);
                if (!l(e)) return n;
                let r = N(e, t);
                for (; r && f(r) && "static" === i(r).position;) r = N(r, t);
                return r && ("html" === c(r) || "body" === c(r) && "static" === i(r).position && !d(r)) ? n : r || function(e) {
                    let t = A(e);
                    for (; l(t) && !m(t);) {
                        if (d(t)) return t;
                        t = A(t)
                    }
                    return null
                }(e) || n
            }
            const W = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e;
                    const o = l(n),
                        i = P(n);
                    if (n === i) return t;
                    let u = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        s = b(1);
                    const f = b(0);
                    if ((o || !o && "fixed" !== r) && (("body" !== c(n) || a(i)) && (u = C(n)), l(n))) {
                        const e = L(n);
                        s = R(n), f.x = e.x + n.clientLeft, f.y = e.y + n.clientTop
                    }
                    return {
                        width: t.width * s.x,
                        height: t.height * s.y,
                        x: t.x * s.x - u.scrollLeft * s.x + f.x,
                        y: t.y * s.y - u.scrollTop * s.y + f.y
                    }
                },
                getDocumentElement: P,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e;
                    const u = [..."clippingAncestors" === n ? function(e, t) {
                            const n = t.get(e);
                            if (n) return n;
                            let r = M(e).filter((e => x(e) && "body" !== c(e))),
                                o = null;
                            const u = "fixed" === i(e).position;
                            let l = u ? A(e) : e;
                            for (; x(l) && !m(l);) {
                                const t = i(l),
                                    n = d(l);
                                n || "fixed" !== t.position || (o = null), (u ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || a(l) && !n && I(e, l)) ? r = r.filter((e => e !== l)) : o = t, l = A(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r],
                        l = u[0],
                        s = u.reduce(((e, n) => {
                            const r = D(t, n, o);
                            return e.top = g(r.top, e.top), e.right = v(r.right, e.right), e.bottom = v(r.bottom, e.bottom), e.left = g(r.left, e.left), e
                        }), D(t, l, o));
                    return {
                        width: s.right - s.left,
                        height: s.bottom - s.top,
                        x: s.left,
                        y: s.top
                    }
                },
                getOffsetParent: B,
                getElementRects: async function(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e;
                    const o = this.getOffsetParent || B,
                        i = this.getDimensions;
                    return {
                        reference: F(t, await o(n), r),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await i(n)
                        }
                    }
                },
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    return w(e)
                },
                getScale: R,
                isElement: x,
                isRTL: function(e) {
                    return "rtl" === getComputedStyle(e).direction
                }
            };

            function H(e, t, n, r) {
                void 0 === r && (r = {});
                const {
                    ancestorScroll: o = !0,
                    ancestorResize: i = !0,
                    elementResize: u = "function" == typeof ResizeObserver,
                    layoutShift: c = "function" == typeof IntersectionObserver,
                    animationFrame: l = !1
                } = r, s = E(e), a = o || i ? [...s ? M(s) : [], ...M(t)] : [];
                a.forEach((e => {
                    o && e.addEventListener("scroll", n, {
                        passive: !0
                    }), i && e.addEventListener("resize", n)
                }));
                const f = s && c ? function(e, t) {
                    let n, r = null;
                    const o = P(e);

                    function i() {
                        clearTimeout(n), r && r.disconnect(), r = null
                    }
                    return function u(c, l) {
                        void 0 === c && (c = !1), void 0 === l && (l = 1), i();
                        const {
                            left: s,
                            top: a,
                            width: f,
                            height: d
                        } = e.getBoundingClientRect();
                        if (c || t(), !f || !d) return;
                        const p = {
                            rootMargin: -y(a) + "px " + -y(o.clientWidth - (s + f)) + "px " + -y(o.clientHeight - (a + d)) + "px " + -y(s) + "px",
                            threshold: g(0, v(1, l)) || 1
                        };
                        let m = !0;

                        function h(e) {
                            const t = e[0].intersectionRatio;
                            if (t !== l) {
                                if (!m) return u();
                                t ? u(!1, t) : n = setTimeout((() => {
                                    u(!1, 1e-7)
                                }), 100)
                            }
                            m = !1
                        }
                        try {
                            r = new IntersectionObserver(h, { ...p,
                                root: o.ownerDocument
                            })
                        } catch (e) {
                            r = new IntersectionObserver(h, p)
                        }
                        r.observe(e)
                    }(!0), i
                }(s, n) : null;
                let d, p = -1,
                    m = null;
                u && (m = new ResizeObserver((e => {
                    let [r] = e;
                    r && r.target === s && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame((() => {
                        m && m.observe(t)
                    }))), n()
                })), s && !l && m.observe(s), m.observe(t));
                let h = l ? L(e) : null;
                return l && function t() {
                    const r = L(e);
                    !h || r.x === h.x && r.y === h.y && r.width === h.width && r.height === h.height || n(), h = r, d = requestAnimationFrame(t)
                }(), n(), () => {
                    a.forEach((e => {
                        o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                    })), f && f(), m && m.disconnect(), m = null, l && cancelAnimationFrame(d)
                }
            }
            const V = (e, t, n) => {
                const o = new Map,
                    i = {
                        platform: W,
                        ...n
                    },
                    u = { ...i.platform,
                        _c: o
                    };
                return (0, r.oo)(e, t, { ...i,
                    platform: u
                })
            }
        }
    }
]);