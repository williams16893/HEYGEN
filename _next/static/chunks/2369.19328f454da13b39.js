"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2369], {
        2369: function(t, e, i) {
            i.d(e, {
                g: function() {
                    return Dn
                }
            });
            class n {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            var s = i(14696),
                o = i(21149);
            const r = t => "mouse" === t.pointerType ? "number" !== typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function a(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            var l = i(46256);

            function h(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function u(t, e, i, n) {
                return h(t, e, (t => e => r(e) && t(e, a(e)))(i), n)
            }
            var c = i(91852);
            const d = (t, e) => Math.abs(t - e);
            var p = i(75309);
            class m {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                            const t = y(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    const i = d(t.x, e.x),
                                        n = d(t.y, e.y);
                                    return Math.sqrt(i ** 2 + n ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            const {
                                point: n
                            } = t, {
                                timestamp: s
                            } = p.frameData;
                            this.history.push({ ...n,
                                timestamp: s
                            });
                            const {
                                onStart: o,
                                onMove: r
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = f(e, this.transformPagePoint), p.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                            const {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, s = y("pointercancel" === t.type ? this.lastMoveEventInfo : f(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !r(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    const n = f(a(t), this.transformPagePoint),
                        {
                            point: s
                        } = n,
                        {
                            timestamp: o
                        } = p.frameData;
                    this.history = [{ ...s,
                        timestamp: o
                    }];
                    const {
                        onSessionStart: l
                    } = e;
                    l && l(t, y(n, this.history)), this.removeListeners = (0, c.z)(u(window, "pointermove", this.handlePointerMove), u(window, "pointerup", this.handlePointerUp), u(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, p.Pn)(this.updatePoint)
                }
            }

            function f(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function g(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function y({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: g(t, x(e)),
                    offset: g(t, v(e)),
                    velocity: P(e, .1)
                }
            }

            function v(t) {
                return t[0]
            }

            function x(t) {
                return t[t.length - 1]
            }

            function P(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let i = t.length - 1,
                    n = null;
                const s = x(t);
                for (; i >= 0 && (n = t[i], !(s.timestamp - n.timestamp > (0, l.w)(e)));) i--;
                if (!n) return {
                    x: 0,
                    y: 0
                };
                const o = (0, l.X)(s.timestamp - n.timestamp);
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                const r = {
                    x: (s.x - n.x) / o,
                    y: (s.y - n.y) / o
                };
                return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
            }

            function T(t) {
                let e = null;
                return () => {
                    const i = () => {
                        e = null
                    };
                    return null === e && (e = t, i)
                }
            }
            const S = T("dragHorizontal"),
                V = T("dragVertical");

            function A(t) {
                let e = !1;
                if ("y" === t) e = V();
                else if ("x" === t) e = S();
                else {
                    const t = S(),
                        i = V();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function C() {
                const t = A(!0);
                return !t || (t(), !1)
            }
            var E = i(28176),
                b = i(653),
                w = i(4393);

            function D(t) {
                return t.max - t.min
            }

            function L(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function R(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, w.C)(e.min, e.max, t.origin), t.scale = D(i) / D(e), (L(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, w.C)(i.min, i.max, t.origin) - t.originPoint, (L(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function B(t, e, i, n) {
                R(t.x, e.x, i.x, n ? n.originX : void 0), R(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function j(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + D(e)
            }

            function M(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + D(e)
            }

            function k(t, e, i) {
                M(t.x, e.x, i.x), M(t.y, e.y, i.y)
            }
            var F = i(59600);

            function I(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function U(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }
            const O = .35;

            function $(t, e, i) {
                return {
                    min: N(t, e),
                    max: N(t, i)
                }
            }

            function N(t, e) {
                return "number" === typeof t ? t : t[e] || 0
            }

            function W(t) {
                return [t("x"), t("y")]
            }

            function G({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function z(t) {
                return void 0 === t || 1 === t
            }

            function H({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !z(t) || !z(e) || !z(i)
            }

            function X(t) {
                return H(t) || Y(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function Y(t) {
                return Z(t.x) || Z(t.y)
            }

            function Z(t) {
                return t && "0%" !== t
            }

            function K(t, e, i) {
                return i + e * (t - i)
            }

            function _(t, e, i, n, s) {
                return void 0 !== s && (t = K(t, s, n)), K(t, i, n) + e
            }

            function q(t, e = 0, i = 1, n, s) {
                t.min = _(t.min, e, i, n, s), t.max = _(t.max, e, i, n, s)
            }

            function Q(t, {
                x: e,
                y: i
            }) {
                q(t.x, e.translate, e.scale, e.originPoint), q(t.y, i.translate, i.scale, i.originPoint)
            }

            function J(t) {
                return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function tt(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function et(t, e, [i, n, s]) {
                const o = void 0 !== e[s] ? e[s] : .5,
                    r = (0, w.C)(t.min, t.max, o);
                q(t, e[i], e[n], r, e.scale)
            }
            const it = ["x", "scaleX", "originX"],
                nt = ["y", "scaleY", "originY"];

            function st(t, e) {
                et(t.x, e, it), et(t.y, e, nt)
            }

            function ot(t, e) {
                return G(function(t, e) {
                    if (!e) return t;
                    const i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var rt = i(34497);
            const at = !1,
                lt = t => Array.isArray(t) && "number" === typeof t[0];

            function ht(t) {
                return Boolean(!t || "string" === typeof t && ct[t] || lt(t) || Array.isArray(t) && t.every(ht))
            }
            const ut = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                ct = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: ut([0, .65, .55, 1]),
                    circOut: ut([.55, 0, 1, .45]),
                    backIn: ut([.31, .01, .66, -.59]),
                    backOut: ut([.33, 1.53, .69, .99])
                };

            function dt(t) {
                if (t) return lt(t) ? ut(t) : Array.isArray(t) ? t.map(dt) : ct[t]
            }
            var pt = i(31497);
            const mt = function(t) {
                    let e;
                    return () => (void 0 === e && (e = t()), e)
                }((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
                ft = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);

            function gt(t, e, {
                onUpdate: i,
                onComplete: n,
                ...o
            }) {
                if (!(mt() && ft.has(e) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping && "inertia" !== o.type)) return !1;
                let r, a, h = !1;
                const u = () => {
                    a = new Promise((t => {
                        r = t
                    }))
                };
                u();
                let {
                    keyframes: c,
                    duration: d = 300,
                    ease: m,
                    times: f
                } = o;
                if (((t, e) => "spring" === e.type || "backgroundColor" === t || !ht(e.ease))(e, o)) {
                    const t = (0, pt.y)({ ...o,
                        repeat: 0,
                        delay: 0
                    });
                    let e = {
                        done: !1,
                        value: c[0]
                    };
                    const i = [];
                    let n = 0;
                    for (; !e.done && n < 2e4;) e = t.sample(n), i.push(e.value), n += 10;
                    f = void 0, c = i, d = n - 10, m = "linear"
                }
                const g = function(t, e, i, {
                        delay: n = 0,
                        duration: s,
                        repeat: o = 0,
                        repeatType: r = "loop",
                        ease: a,
                        times: l
                    } = {}) {
                        const h = {
                            [e]: i
                        };
                        l && (h.offset = l);
                        const u = dt(a);
                        return Array.isArray(u) && (h.easing = u), t.animate(h, {
                            delay: n,
                            duration: s,
                            easing: Array.isArray(u) ? "linear" : u,
                            fill: "both",
                            iterations: o + 1,
                            direction: "reverse" === r ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, c, { ...o,
                        duration: d,
                        ease: m,
                        times: f
                    }),
                    y = () => g.cancel(),
                    v = () => {
                        p.Wi.update(y), r(), u()
                    };
                g.onfinish = () => {
                    t.set(function(t, {
                        repeat: e,
                        repeatType: i = "loop"
                    }) {
                        return t[e && "loop" !== i && e % 2 === 1 ? 0 : t.length - 1]
                    }(c, o)), n && n(), v()
                };
                return {
                    then: (t, e) => a.then(t, e),
                    attachTimeline: t => (g.timeline = t, g.onfinish = null, s.Z),
                    get time() {
                        return (0, l.X)(g.currentTime || 0)
                    },
                    set time(t) {
                        g.currentTime = (0, l.w)(t)
                    },
                    get speed() {
                        return g.playbackRate
                    },
                    set speed(t) {
                        g.playbackRate = t
                    },
                    get duration() {
                        return (0, l.X)(d)
                    },
                    play: () => {
                        h || (g.play(), (0, p.Pn)(y))
                    },
                    pause: () => g.pause(),
                    stop: () => {
                        if (h = !0, "idle" === g.playState) return;
                        const {
                            currentTime: e
                        } = g;
                        if (e) {
                            const i = (0, pt.y)({ ...o,
                                autoplay: !1
                            });
                            t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                        }
                        v()
                    },
                    complete: () => g.finish(),
                    cancel: v
                }
            }
            var yt = i(72751);
            const vt = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                xt = {
                    type: "keyframes",
                    duration: .8
                },
                Pt = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                Tt = (t, {
                    keyframes: e
                }) => e.length > 2 ? xt : yt.G.has(t) ? t.startsWith("scale") ? {
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                } : vt : Pt;
            var St = i(90705);
            const Vt = (t, e) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !St.P.test(e) && "0" !== e || e.startsWith("url(")));
            var At = i(5002);
            const Ct = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function Et(t) {
                const [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                const [n] = i.match(At.KP) || [];
                if (!n) return t;
                const s = i.replace(n, "");
                let o = Ct.has(e) ? 1 : 0;
                return n !== i && (o *= 100), e + "(" + o + s + ")"
            }
            const bt = /([a-z-]*)\(.*?\)/g,
                wt = { ...St.P,
                    getAnimatableNone: t => {
                        const e = t.match(bt);
                        return e ? e.map(Et).join(" ") : t
                    }
                };
            var Dt = i(50458);
            const Lt = { ...i(87340).j,
                    color: Dt.$,
                    backgroundColor: Dt.$,
                    outlineColor: Dt.$,
                    fill: Dt.$,
                    stroke: Dt.$,
                    borderColor: Dt.$,
                    borderTopColor: Dt.$,
                    borderRightColor: Dt.$,
                    borderBottomColor: Dt.$,
                    borderLeftColor: Dt.$,
                    filter: wt,
                    WebkitFilter: wt
                },
                Rt = t => Lt[t];

            function Bt(t, e) {
                let i = Rt(t);
                return i !== wt && (i = St.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            const jt = t => /^0[^.\s]+$/.test(t);

            function Mt(t) {
                return "number" === typeof t ? 0 === t : null !== t ? "none" === t || "0" === t || jt(t) : void 0
            }

            function kt(t, e) {
                return t[e] || t.default || t
            }
            const Ft = (t, e, i, n = {}) => r => {
                    const a = kt(n, t) || {},
                        h = a.delay || n.delay || 0;
                    let {
                        elapsed: u = 0
                    } = n;
                    u -= (0, l.w)(h);
                    const c = function(t, e, i, n) {
                            const s = Vt(e, i);
                            let o;
                            o = Array.isArray(i) ? [...i] : [null, i];
                            const r = void 0 !== n.from ? n.from : t.get();
                            let a;
                            const l = [];
                            for (let h = 0; h < o.length; h++) null === o[h] && (o[h] = 0 === h ? r : o[h - 1]), Mt(o[h]) && l.push(h), "string" === typeof o[h] && "none" !== o[h] && "0" !== o[h] && (a = o[h]);
                            if (s && l.length && a)
                                for (let h = 0; h < l.length; h++) o[l[h]] = Bt(e, a);
                            return o
                        }(e, t, i, a),
                        d = c[0],
                        p = c[c.length - 1],
                        m = Vt(t, d),
                        f = Vt(t, p);
                    (0, o.K)(m === f, `You are trying to animate ${t} from "${d}" to "${p}". ${d} is not an animatable value - to enable this animation set ${d} to a value animatable to ${p} via the \`style\` property.`);
                    let g = {
                        keyframes: c,
                        velocity: e.getVelocity(),
                        ease: "easeOut",
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            r(), a.onComplete && a.onComplete()
                        }
                    };
                    if (function({
                            when: t,
                            delay: e,
                            delayChildren: i,
                            staggerChildren: n,
                            staggerDirection: s,
                            repeat: o,
                            repeatType: r,
                            repeatDelay: a,
                            from: l,
                            elapsed: h,
                            ...u
                        }) {
                            return !!Object.keys(u).length
                        }(a) || (g = { ...g,
                            ...Tt(t, g)
                        }), g.duration && (g.duration = (0, l.w)(g.duration)), g.repeatDelay && (g.repeatDelay = (0, l.w)(g.repeatDelay)), !m || !f || at || !1 === a.type) return function({
                        keyframes: t,
                        delay: e,
                        onUpdate: i,
                        onComplete: n
                    }) {
                        const o = () => (i && i(t[t.length - 1]), n && n(), {
                            time: 0,
                            speed: 1,
                            duration: 0,
                            play: s.Z,
                            pause: s.Z,
                            stop: s.Z,
                            then: t => (t(), Promise.resolve()),
                            cancel: s.Z,
                            complete: s.Z
                        });
                        return e ? (0, pt.y)({
                            keyframes: [0, 1],
                            duration: 0,
                            delay: e,
                            onComplete: o
                        }) : o()
                    }(at ? { ...g,
                        delay: 0
                    } : g);
                    if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                        const i = gt(e, t, g);
                        if (i) return i
                    }
                    return (0, pt.y)(g)
                },
                It = new WeakMap;
            class Ut {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }, this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    const {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    this.panSession = new m(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(a(t, "page").point)
                        },
                        onStart: (t, e) => {
                            const {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: s
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = A(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), W((t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (rt.aQ.test(e)) {
                                    const {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        const n = i.layout.layoutBox[t];
                                        if (n) {
                                            e = D(n) * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            })), s && p.Wi.update((() => s(t, e)), !1, !0);
                            const {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            const {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: s,
                                onDrag: o
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            const {
                                offset: r
                            } = e;
                            if (n && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                                let i = null;
                                Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x");
                                return i
                            }(r), void(null !== this.currentDirection && s && s(this.currentDirection));
                            this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    const i = this.isDragging;
                    if (this.cancel(), !i) return;
                    const {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    const {
                        onDragEnd: s
                    } = this.getProps();
                    s && p.Wi.update((() => s(t, e)))
                }
                cancel() {
                    this.isDragging = !1;
                    const {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    const {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    const {
                        drag: n
                    } = this.getProps();
                    if (!i || !Ot(t, n, this.currentDirection)) return;
                    const s = this.getAxisMotionValue(t);
                    let o = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, w.C)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, w.C)(i, t, n.max) : Math.min(t, i)), t
                    }(o, this.constraints[t], this.elastic[t])), s.set(o)
                }
                resolveConstraints() {
                    const {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && (0, E.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: s
                    }) {
                        return {
                            x: I(t.x, i, s),
                            y: I(t.y, e, n)
                        }
                    }(i.layoutBox, t), this.elastic = function(t = O) {
                        return !1 === t ? t = 0 : !0 === t && (t = O), {
                            x: $(t, "left", "right"),
                            y: $(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && W((t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            const i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    }))
                }
                resolveRefConstraints() {
                    const {
                        dragConstraints: t,
                        onMeasureDragConstraints: e
                    } = this.getProps();
                    if (!t || !(0, E.I)(t)) return !1;
                    const i = t.current;
                    (0, o.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    const {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    const s = function(t, e, i) {
                        const n = ot(t, i),
                            {
                                scroll: s
                            } = e;
                        return s && (tt(n.x, s.offset.x), tt(n.y, s.offset.y)), n
                    }(i, n.root, this.visualElement.getTransformPagePoint());
                    let r = function(t, e) {
                        return {
                            x: U(t.x, e.x),
                            y: U(t.y, e.y)
                        }
                    }(n.layout.layoutBox, s);
                    if (e) {
                        const t = e(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(r));
                        this.hasMutatedConstraints = !!t, t && (r = G(t))
                    }
                    return r
                }
                startAnimation(t) {
                    const {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: s,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: r
                    } = this.getProps(), a = this.constraints || {}, l = W((r => {
                        if (!Ot(r, e, this.currentDirection)) return;
                        let l = a && a[r] || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        const h = n ? 200 : 1e6,
                            u = n ? 40 : 1e7,
                            c = {
                                type: "inertia",
                                velocity: i ? t[r] : 0,
                                bounceStiffness: h,
                                bounceDamping: u,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                                ...s,
                                ...l
                            };
                        return this.startAxisValueAnimation(r, c)
                    }));
                    return Promise.all(l).then(r)
                }
                startAxisValueAnimation(t, e) {
                    const i = this.getAxisMotionValue(t);
                    return i.start(Ft(t, i, 0, e))
                }
                stopAnimation() {
                    W((t => this.getAxisMotionValue(t).stop()))
                }
                getAxisMotionValue(t) {
                    const e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        n = i[e];
                    return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    W((e => {
                        const {
                            drag: i
                        } = this.getProps();
                        if (!Ot(e, i, this.currentDirection)) return;
                        const {
                            projection: n
                        } = this.visualElement, s = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            const {
                                min: i,
                                max: o
                            } = n.layout.layoutBox[e];
                            s.set(t[e] - (0, w.C)(i, o, .5))
                        }
                    }))
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    const {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!(0, E.I)(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    const n = {
                        x: 0,
                        y: 0
                    };
                    W((t => {
                        const e = this.getAxisMotionValue(t);
                        if (e) {
                            const i = e.get();
                            n[t] = function(t, e) {
                                let i = .5;
                                const n = D(t),
                                    s = D(e);
                                return s > n ? i = (0, b.Y)(e.min, e.max - n, t.min) : n > s && (i = (0, b.Y)(t.min, t.max - s, e.min)), (0, F.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    }));
                    const {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), W((e => {
                        if (!Ot(e, t, null)) return;
                        const i = this.getAxisMotionValue(e),
                            {
                                min: s,
                                max: o
                            } = this.constraints[e];
                        i.set((0, w.C)(s, o, n[e]))
                    }))
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    It.set(this.visualElement, this);
                    const t = u(this.visualElement.current, "pointerdown", (t => {
                            const {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        })),
                        e = () => {
                            const {
                                dragConstraints: t
                            } = this.getProps();
                            (0, E.I)(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), e();
                    const s = h(window, "resize", (() => this.scalePositionWithinConstraints())),
                        o = i.addEventListener("didUpdate", (({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (W((e => {
                                const i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            })), this.visualElement.render())
                        }));
                    return () => {
                        s(), t(), n(), o && o()
                    }
                }
                getProps() {
                    const t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: s = !1,
                            dragElastic: o = O,
                            dragMomentum: r = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: s,
                        dragElastic: o,
                        dragMomentum: r
                    }
                }
            }

            function Ot(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            const $t = t => (e, i) => {
                t && p.Wi.update((() => t(e, i)))
            };
            var Nt = i(70079),
                Wt = i(62949);
            var Gt = i(15269),
                zt = i(37723);
            const Ht = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function Xt(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            const Yt = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" === typeof t) {
                            if (!rt.px.test(t)) return t;
                            t = parseFloat(t)
                        }
                        return `${Xt(t,e.target.x)}% ${Xt(t,e.target.y)}%`
                    }
                },
                Zt = {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        const n = t,
                            s = St.P.parse(t);
                        if (s.length > 5) return n;
                        const o = St.P.createTransformer(t),
                            r = "number" !== typeof s[0] ? 1 : 0,
                            a = i.x.scale * e.x,
                            l = i.y.scale * e.y;
                        s[0 + r] /= a, s[1 + r] /= l;
                        const h = (0, w.C)(a, l, .5);
                        return "number" === typeof s[2 + r] && (s[2 + r] /= h), "number" === typeof s[3 + r] && (s[3 + r] /= h), o(s)
                    }
                };
            var Kt = i(11379);
            class _t extends Nt.Component {
                componentDidMount() {
                    const {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: s
                    } = t;
                    (0, Kt.B)(Qt), s && (e.group && e.group.add(s), i && i.register && n && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (() => {
                        this.safeToRemove()
                    })), s.setOptions({ ...s.options,
                        onExitComplete: () => this.safeToRemove()
                    })), Ht.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    const {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: s
                    } = this.props, o = i.projection;
                    return o ? (o.isPresent = s, n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || p.Wi.postRender((() => {
                        const t = o.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null) : null
                }
                componentDidUpdate() {
                    const {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask((() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    })))
                }
                componentWillUnmount() {
                    const {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    const {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function qt(t) {
                const [e, i] = function() {
                    const t = (0, Nt.useContext)(Wt.O);
                    if (null === t) return [!0, null];
                    const {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, s = (0, Nt.useId)();
                    return (0, Nt.useEffect)((() => n(s)), []), !e && i ? [!1, () => i && i(s)] : [!0]
                }(), n = (0, Nt.useContext)(Gt.p);
                return Nt.createElement(_t, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, Nt.useContext)(zt.g),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            const Qt = {
                borderRadius: { ...Yt,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: Yt,
                borderTopRightRadius: Yt,
                borderBottomLeftRadius: Yt,
                borderBottomRightRadius: Yt,
                boxShadow: Zt
            };
            var Jt = i(7483),
                te = i(8033);
            const ee = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ie = ee.length,
                ne = t => "string" === typeof t ? parseFloat(t) : t,
                se = t => "number" === typeof t || rt.px.test(t);

            function oe(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            const re = le(0, .5, te.Bn),
                ae = le(.5, .95, s.Z);

            function le(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, b.Y)(t, e, n))
            }

            function he(t, e) {
                t.min = e.min, t.max = e.max
            }

            function ue(t, e) {
                he(t.x, e.x), he(t.y, e.y)
            }

            function ce(t, e, i, n, s) {
                return t = K(t -= e, 1 / i, n), void 0 !== s && (t = K(t, 1 / s, n)), t
            }

            function de(t, e, [i, n, s], o, r) {
                ! function(t, e = 0, i = 1, n = .5, s, o = t, r = t) {
                    rt.aQ.test(e) && (e = parseFloat(e), e = (0, w.C)(r.min, r.max, e / 100) - r.min);
                    if ("number" !== typeof e) return;
                    let a = (0, w.C)(o.min, o.max, n);
                    t === o && (a -= e), t.min = ce(t.min, e, i, a, s), t.max = ce(t.max, e, i, a, s)
                }(t, e[i], e[n], e[s], e.scale, o, r)
            }
            const pe = ["x", "scaleX", "originX"],
                me = ["y", "scaleY", "originY"];

            function fe(t, e, i, n) {
                de(t.x, e, pe, i ? i.x : void 0, n ? n.x : void 0), de(t.y, e, me, i ? i.y : void 0, n ? n.y : void 0)
            }

            function ge(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function ye(t) {
                return ge(t.x) && ge(t.y)
            }

            function ve(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function xe(t) {
                return D(t.x) / D(t.y)
            }
            var Pe = i(32183);
            class Te {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, Pe.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, Pe.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        const t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    const e = this.members.findIndex((e => t === e));
                    if (0 === e) return !1;
                    let i;
                    for (let n = e; n >= 0; n--) {
                        const t = this.members[n];
                        if (!1 !== t.isPresent) {
                            i = t;
                            break
                        }
                    }
                    return !!i && (this.promote(i), !0)
                }
                promote(t, e) {
                    const i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        const {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((t => {
                        const {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    }))
                }
                scheduleRender() {
                    this.members.forEach((t => {
                        t.instance && t.scheduleRender(!1)
                    }))
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function Se(t, e, i) {
                let n = "";
                const s = t.x.translate / e.x,
                    o = t.y.translate / e.y;
                if ((s || o) && (n = `translate3d(${s}px, ${o}px, 0) `), 1 === e.x && 1 === e.y || (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    const {
                        rotate: t,
                        rotateX: e,
                        rotateY: s
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), s && (n += `rotateY(${s}deg) `)
                }
                const r = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return 1 === r && 1 === a || (n += `scale(${r}, ${a})`), n || "none"
            }
            const Ve = (t, e) => t.depth - e.depth;
            class Ae {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, Pe.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, Pe.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(Ve), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var Ce = i(43156);
            var Ee = i(47521),
                be = i(35016);
            const we = ["", "X", "Y", "Z"];
            let De = 0;
            const Le = {
                type: "projectionFrame",
                totalNodes: 0,
                resolvedTargetDeltas: 0,
                recalculatedProjection: 0
            };

            function Re({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: s
            }) {
                return class {
                    constructor(t = {}, i = (null === e || void 0 === e ? void 0 : e())) {
                        this.id = De++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            var t;
                            Le.totalNodes = Le.resolvedTargetDeltas = Le.recalculatedProjection = 0, this.nodes.forEach(Me), this.nodes.forEach(Ne), this.nodes.forEach(We), this.nodes.forEach(ke), t = Le, window.MotionDebug && window.MotionDebug.record(t)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new Ae)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Jt.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        const i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        var n;
                        this.isSVG = (n = e) instanceof SVGElement && "svg" !== n.tagName, this.instance = e;
                        const {
                            layoutId: s,
                            layout: o,
                            visualElement: r
                        } = this.options;
                        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (o || s) && (this.isLayoutDirty = !0), t) {
                            let i;
                            const n = () => this.root.updateBlockedByResize = !1;
                            t(e, (() => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    const i = performance.now(),
                                        n = ({
                                            timestamp: s
                                        }) => {
                                            const o = s - i;
                                            o >= e && ((0, p.Pn)(n), t(o - e))
                                        };
                                    return p.Wi.read(n, !0), () => (0, p.Pn)(n)
                                }(n, 250), Ht.hasAnimatedSinceResize && (Ht.hasAnimatedSinceResize = !1, this.nodes.forEach($e))
                            }))
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || o) && this.addEventListener("didUpdate", (({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                            const s = this.options.transition || r.getDefaultTransition() || Ze,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = r.getProps(),
                                l = !this.targetLayout || !ve(this.targetLayout, n) || i,
                                h = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
                                const e = { ...kt(s, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || $e(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        }))
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        const t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, p.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ge), this.animationId++)
                    }
                    getTransformTemplate() {
                        const {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
                        if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let s = 0; s < this.path.length; s++) {
                            const t = this.path[s];
                            t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
                        }
                        const {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        const n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Ie);
                        this.isUpdating || this.nodes.forEach(Ue), this.isUpdating = !1, this.nodes.forEach(Oe), this.nodes.forEach(Be), this.nodes.forEach(je), this.clearAllSnapshots();
                        const t = performance.now();
                        p.frameData.delta = (0, F.u)(0, 1e3 / 60, t - p.frameData.timestamp), p.frameData.timestamp = t, p.frameData.isProcessing = !0, p.S6.update.process(p.frameData), p.S6.preRender.process(p.frameData), p.S6.render.process(p.frameData), p.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(Fe), this.sharedNodes.forEach(ze)
                    }
                    scheduleUpdateProjection() {
                        p.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        p.Wi.postRender((() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        }))
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance) return;
                        if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let i = 0; i < this.path.length; i++) {
                                this.path[i].updateScroll()
                            }
                        const t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        const {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!s) return;
                        const t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !ye(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            o = n !== this.prevTransformTemplateValue;
                        t && (e || X(this.latestValues) || o) && (s(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        const e = this.measurePageBox();
                        let i = this.removeElementScroll(e);
                        var n;
                        return t && (i = this.removeTransform(i)), qe((n = i).x), qe(n.y), {
                            animationId: this.root.animationId,
                            measuredBox: e,
                            layoutBox: i,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        const {
                            visualElement: t
                        } = this.options;
                        if (!t) return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        const e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (tt(e.x, i.offset.x), tt(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        const e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        ue(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            const n = this.path[i],
                                {
                                    scroll: s,
                                    options: o
                                } = n;
                            if (n !== this.root && s && o.layoutScroll) {
                                if (s.isRoot) {
                                    ue(e, t);
                                    const {
                                        scroll: i
                                    } = this.root;
                                    i && (tt(e.x, -i.offset.x), tt(e.y, -i.offset.y))
                                }
                                tt(e.x, s.offset.x), tt(e.y, s.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        const i = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        ue(i, t);
                        for (let n = 0; n < this.path.length; n++) {
                            const t = this.path[n];
                            !e && t.options.layoutScroll && t.scroll && t !== t.root && st(i, {
                                x: -t.scroll.offset.x,
                                y: -t.scroll.offset.y
                            }), X(t.latestValues) && st(i, t.latestValues)
                        }
                        return X(this.latestValues) && st(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        const e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        ue(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            const t = this.path[i];
                            if (!t.instance) continue;
                            if (!X(t.latestValues)) continue;
                            H(t.latestValues) && t.updateSnapshot();
                            const n = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            ue(n, t.measurePageBox()), fe(e, t.latestValues, t.snapshot ? t.snapshot.layoutBox : void 0, n)
                        }
                        return X(this.latestValues) && fe(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== p.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e;
                        const i = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
                        const n = Boolean(this.resumingFrom) || this !== i;
                        if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        const {
                            layout: s,
                            layoutId: o
                        } = this.options;
                        if (this.layout && (s || o)) {
                            if (this.resolvedRelativeTargetAt = p.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                const t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                }, this.relativeTargetOrigin = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                }, k(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                var r, a, l;
                                if (this.target || (this.target = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }, this.targetWithTransforms = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), r = this.target, a = this.relativeTarget, l = this.relativeParent.target, j(r.x, a.x, l.x), j(r.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ue(this.target, this.layout.layoutBox), Q(this.target, this.targetDelta)) : ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    const t = this.getClosestProjectingParent();
                                    t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }, this.relativeTargetOrigin = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }, k(this.relativeTargetOrigin, this.target, t.target), ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                Le.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (this.parent && !H(this.parent.latestValues) && !Y(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        const e = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== e;
                        let n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === p.frameData.timestamp && (n = !1), n) return;
                        const {
                            layout: s,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !o) return;
                        ue(this.layoutCorrected, this.layout.layoutBox);
                        const r = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            const s = i.length;
                            if (!s) return;
                            let o, r;
                            e.x = e.y = 1;
                            for (let a = 0; a < s; a++) {
                                o = i[a], r = o.projectionDelta;
                                const s = o.instance;
                                s && s.style && "contents" === s.style.display || (n && o.options.layoutScroll && o.scroll && o !== o.root && st(t, {
                                    x: -o.scroll.offset.x,
                                    y: -o.scroll.offset.y
                                }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Q(t, r)), n && X(o.latestValues) && st(t, o.latestValues))
                            }
                            e.x = J(e.x), e.y = J(e.y)
                        }(this.layoutCorrected, this.treeScale, this.path, i), !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox);
                        const {
                            target: l
                        } = e;
                        if (!l) return void(this.projectionTransform && (this.projectionDelta = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        }, this.projectionTransform = "none", this.scheduleRender()));
                        this.projectionDelta || (this.projectionDelta = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        }, this.projectionDeltaWithTransform = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        });
                        const h = this.projectionTransform;
                        B(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Se(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === r && this.treeScale.y === a || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Le.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            const t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        const i = this.snapshot,
                            n = i ? i.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            };
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        const r = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            a = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            l = this.getStack(),
                            h = !l || l.members.length <= 1,
                            u = Boolean(a && !h && !0 === this.options.crossfade && !this.path.some(Ye));
                        let c;
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            const i = e / 1e3;
                            var l, d, p, m, f, g;
                            He(o.x, t.x, i), He(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (k(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = r, g = i, Xe(p.x, m.x, f.x, g), Xe(p.y, m.y, f.y, g), c && (l = this.relativeTarget, d = c, l.x.min === d.x.min && l.x.max === d.x.max && l.y.min === d.y.min && l.y.max === d.y.max) && (this.isProjectionDirty = !1), c || (c = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            }), ue(c, this.relativeTarget)), a && (this.animationValues = s, function(t, e, i, n, s, o) {
                                s ? (t.opacity = (0, w.C)(0, void 0 !== i.opacity ? i.opacity : 1, re(n)), t.opacityExit = (0, w.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ae(n))) : o && (t.opacity = (0, w.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < ie; r++) {
                                    const s = `border${ee[r]}Radius`;
                                    let o = oe(e, s),
                                        a = oe(i, s);
                                    void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || se(o) === se(a) ? (t[s] = Math.max((0, w.C)(ne(o), ne(a), n), 0), (rt.aQ.test(a) || rt.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, w.C)(e.rotate || 0, i.rotate || 0, n))
                            }(s, n, this.latestValues, i, u, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, p.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = p.Wi.update((() => {
                            Ht.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                const n = (0, be.i)(t) ? t : (0, Ee.BX)(t);
                                return n.start(Ft("", n, e, i)), n.animation
                            }(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        }))
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        const t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        const t = this.getLead();
                        let {
                            targetWithTransforms: e,
                            target: i,
                            layout: n,
                            latestValues: s
                        } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && Qe(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                const e = D(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                const n = D(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            ue(e, i), st(e, s), B(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new Te);
                        this.sharedNodes.get(t).add(e);
                        const i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        const t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        const {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        const {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        const {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        const n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        const t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        const {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1;
                        const {
                            latestValues: i
                        } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        const n = {};
                        for (let s = 0; s < we.length; s++) {
                            const e = "rotate" + we[s];
                            i[e] && (n[e] = i[e], t.setStaticValue(e, 0))
                        }
                        t.render();
                        for (const s in n) t.setStaticValue(s, n[s]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        const n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        const s = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = (0, Ce.b)(t.pointerEvents) || "", n.transform = s ? s(this.latestValues, "") : "none", n;
                        const o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            const e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Ce.b)(t.pointerEvents) || ""), this.hasProjected && !X(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
                        }
                        const r = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), n.transform = Se(this.projectionDeltaWithTransform, this.treeScale, r), s && (n.transform = s(r, n.transform));
                        const {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, o.animationValues ? n.opacity = o === this ? null !== (i = null !== (e = r.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : n.opacity = o === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0;
                        for (const h in Kt.P) {
                            if (void 0 === r[h]) continue;
                            const {
                                correct: t,
                                applyTo: e
                            } = Kt.P[h], i = "none" === n.transform ? r[h] : t(r[h], o);
                            if (e) {
                                const t = e.length;
                                for (let s = 0; s < t; s++) n[e[s]] = i
                            } else n[h] = i
                        }
                        return this.options.layoutId && (n.pointerEvents = o === this ? (0, Ce.b)(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach((t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        })), this.root.nodes.forEach(Ie), this.root.sharedNodes.clear()
                    }
                }
            }

            function Be(t) {
                t.updateLayout()
            }

            function je(t) {
                var e;
                const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    const {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: s
                    } = t.options, o = i.source !== t.layout.source;
                    "size" === s ? W((t => {
                        const n = o ? i.measuredBox[t] : i.layoutBox[t],
                            s = D(n);
                        n.min = e[t].min, n.max = n.min + s
                    })) : Qe(s, i.layoutBox, e) && W((n => {
                        const s = o ? i.measuredBox[n] : i.layoutBox[n],
                            r = D(e[n]);
                        s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + r)
                    }));
                    const r = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    B(r, e, i.layoutBox);
                    const a = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    o ? B(a, t.applyTransform(n, !0), i.measuredBox) : B(a, e, i.layoutBox);
                    const l = !ye(r);
                    let h = !1;
                    if (!t.resumeFrom) {
                        const n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            const {
                                snapshot: s,
                                layout: o
                            } = n;
                            if (s && o) {
                                const r = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                k(r, i.layoutBox, s.layoutBox);
                                const a = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                k(a, e, o.layoutBox), ve(r, a) || (h = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: r,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: h
                    })
                } else if (t.isLead()) {
                    const {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function Me(t) {
                Le.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function ke(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function Fe(t) {
                t.clearSnapshot()
            }

            function Ie(t) {
                t.clearMeasurements()
            }

            function Ue(t) {
                t.isLayoutDirty = !1
            }

            function Oe(t) {
                const {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function $e(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function Ne(t) {
                t.resolveTargetDelta()
            }

            function We(t) {
                t.calcProjection()
            }

            function Ge(t) {
                t.resetRotation()
            }

            function ze(t) {
                t.removeLeadSnapshot()
            }

            function He(t, e, i) {
                t.translate = (0, w.C)(e.translate, 0, i), t.scale = (0, w.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function Xe(t, e, i, n) {
                t.min = (0, w.C)(e.min, i.min, n), t.max = (0, w.C)(e.max, i.max, n)
            }

            function Ye(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            const Ze = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                Ke = t => "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                _e = Ke("applewebkit/") && !Ke("chrome/") ? Math.round : s.Z;

            function qe(t) {
                t.min = _e(t.min), t.max = _e(t.max)
            }

            function Qe(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !L(xe(e), xe(i), .2)
            }
            const Je = Re({
                    attachResizeListener: (t, e) => h(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ti = {
                    current: void 0
                },
                ei = Re({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ti.current) {
                            const t = new Je({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ti.current = t
                        }
                        return ti.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                ii = {
                    pan: {
                        Feature: class extends n {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = s.Z
                            }
                            onPointerDown(t) {
                                this.session = new m(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                const {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: $t(t),
                                    onStart: $t(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, n && p.Wi.update((() => n(t, e)))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = u(this.node.current, "pointerdown", (t => this.onPointerDown(t)))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends n {
                            constructor(t) {
                                super(t), this.removeGroupControls = s.Z, this.removeListeners = s.Z, this.controls = new Ut(t)
                            }
                            mount() {
                                const {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || s.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: ei,
                        MeasureLayout: qt
                    }
                },
                ni = {
                    layout: {
                        ProjectionNode: ei,
                        MeasureLayout: qt
                    }
                };
            var si = i(4356),
                oi = i(12275);

            function ri(t, e) {
                if (!Array.isArray(e)) return !1;
                const i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var ai = i(66558),
                li = i(93008);

            function hi(t, e, i) {
                const n = t.getProps();
                return (0, li.o)(n, e, void 0 !== i ? i : n.custom, function(t) {
                    const e = {};
                    return t.values.forEach(((t, i) => e[i] = t.get())), e
                }(t), function(t) {
                    const e = {};
                    return t.values.forEach(((t, i) => e[i] = t.getVelocity())), e
                }(t))
            }
            var ui = i(65058),
                ci = i(20758);
            const di = "data-" + (0, ci.D)("framerAppearId");

            function pi(t) {
                return Boolean((0, be.i)(t) && t.add)
            }
            const mi = t => /^\-?\d*\.?\d+$/.test(t);
            var fi = i(69936),
                gi = i(3343);
            const yi = t => e => e.test(t),
                vi = [gi.Rx, rt.px, rt.aQ, rt.RW, rt.vw, rt.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                xi = t => vi.find(yi(t)),
                Pi = [...vi, Dt.$, St.P];

            function Ti(t, e, i) {
                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, Ee.BX)(i))
            }

            function Si(t, e) {
                const i = hi(t, e);
                let {
                    transitionEnd: n = {},
                    transition: s = {},
                    ...o
                } = i ? t.makeTargetAnimatable(i, !1) : {};
                o = { ...o,
                    ...n
                };
                for (const r in o) {
                    Ti(t, r, (0, fi.Y)(o[r]))
                }
            }

            function Vi(t, e) {
                if (!e) return;
                return (e[t] || e.default || e).from
            }

            function Ai({
                protectedKeys: t,
                needsAnimating: e
            }, i) {
                const n = t.hasOwnProperty(i) && !0 !== e[i];
                return e[i] = !1, n
            }

            function Ci(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: s
            } = {}) {
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: r,
                    ...a
                } = t.makeTargetAnimatable(e);
                const l = t.getValue("willChange");
                n && (o = n);
                const h = [],
                    u = s && t.animationState && t.animationState.getState()[s];
                for (const c in a) {
                    const e = t.getValue(c),
                        n = a[c];
                    if (!e || void 0 === n || u && Ai(u, c)) continue;
                    const s = {
                        delay: i,
                        elapsed: 0,
                        ...o
                    };
                    if (window.HandoffAppearAnimations && !e.hasAnimated) {
                        const i = t.getProps()[di];
                        i && (s.elapsed = window.HandoffAppearAnimations(i, c, e, p.Wi))
                    }
                    e.start(Ft(c, e, n, t.shouldReduceMotion && yt.G.has(c) ? {
                        type: !1
                    } : s));
                    const r = e.animation;
                    pi(l) && (l.add(c), r.then((() => l.remove(c)))), h.push(r)
                }
                return r && Promise.all(h).then((() => {
                    r && Si(t, r)
                })), h
            }

            function Ei(t, e, i = {}) {
                const n = hi(t, e, i.custom);
                let {
                    transition: s = t.getDefaultTransition() || {}
                } = n || {};
                i.transitionOverride && (s = i.transitionOverride);
                const o = n ? () => Promise.all(Ci(t, n, i)) : () => Promise.resolve(),
                    r = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        const {
                            delayChildren: o = 0,
                            staggerChildren: r,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, s = 1, o) {
                            const r = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === s ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(bi).forEach(((t, n) => {
                                t.notify("AnimationStart", e), r.push(Ei(t, e, { ...o,
                                    delay: i + l(n)
                                }).then((() => t.notify("AnimationComplete", e))))
                            })), Promise.all(r)
                        }(t, e, o + n, r, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = s;
                if (a) {
                    const [t, e] = "beforeChildren" === a ? [o, r] : [r, o];
                    return t().then((() => e()))
                }
                return Promise.all([o(), r(i.delay)])
            }

            function bi(t, e) {
                return t.sortNodePosition(e)
            }
            const wi = [...ui.e].reverse(),
                Di = ui.e.length;

            function Li(t) {
                return e => Promise.all(e.map((({
                    animation: e,
                    options: i
                }) => function(t, e, i = {}) {
                    let n;
                    if (t.notify("AnimationStart", e), Array.isArray(e)) {
                        const s = e.map((e => Ei(t, e, i)));
                        n = Promise.all(s)
                    } else if ("string" === typeof e) n = Ei(t, e, i);
                    else {
                        const s = "function" === typeof e ? hi(t, e, i.custom) : e;
                        n = Promise.all(Ci(t, s, i))
                    }
                    return n.then((() => t.notify("AnimationComplete", e)))
                }(t, e, i))))
            }

            function Ri(t) {
                let e = Li(t);
                const i = {
                    animate: ji(!0),
                    whileInView: ji(),
                    whileHover: ji(),
                    whileTap: ji(),
                    whileDrag: ji(),
                    whileFocus: ji(),
                    exit: ji()
                };
                let n = !0;
                const s = (e, i) => {
                    const n = hi(t, i);
                    if (n) {
                        const {
                            transition: t,
                            transitionEnd: i,
                            ...s
                        } = n;
                        e = { ...e,
                            ...s,
                            ...i
                        }
                    }
                    return e
                };

                function o(o, r) {
                    const a = t.getProps(),
                        l = t.getVariantContext(!0) || {},
                        h = [],
                        u = new Set;
                    let c = {},
                        d = 1 / 0;
                    for (let e = 0; e < Di; e++) {
                        const p = wi[e],
                            m = i[p],
                            f = void 0 !== a[p] ? a[p] : l[p],
                            g = (0, ai.$)(f),
                            y = p === r ? m.isActive : null;
                        !1 === y && (d = e);
                        let v = f === l[p] && f !== a[p] && g;
                        if (v && n && t.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...c
                            }, !m.isActive && null === y || !f && !m.prevProp || (0, si.H)(f) || "boolean" === typeof f) continue;
                        const x = Bi(m.prevProp, f);
                        let P = x || p === r && m.isActive && !v && g || e > d && g;
                        const T = Array.isArray(f) ? f : [f];
                        let S = T.reduce(s, {});
                        !1 === y && (S = {});
                        const {
                            prevResolvedValues: V = {}
                        } = m, A = { ...V,
                            ...S
                        }, C = t => {
                            P = !0, u.delete(t), m.needsAnimating[t] = !0
                        };
                        for (const t in A) {
                            const e = S[t],
                                i = V[t];
                            c.hasOwnProperty(t) || (e !== i ? (0, oi.C)(e) && (0, oi.C)(i) ? !ri(e, i) || x ? C(t) : m.protectedKeys[t] = !0 : void 0 !== e ? C(t) : u.add(t) : void 0 !== e && u.has(t) ? C(t) : m.protectedKeys[t] = !0)
                        }
                        m.prevProp = f, m.prevResolvedValues = S, m.isActive && (c = { ...c,
                            ...S
                        }), n && t.blockInitialAnimation && (P = !1), P && !v && h.push(...T.map((t => ({
                            animation: t,
                            options: {
                                type: p,
                                ...o
                            }
                        }))))
                    }
                    if (u.size) {
                        const e = {};
                        u.forEach((i => {
                            const n = t.getBaseTarget(i);
                            void 0 !== n && (e[i] = n)
                        })), h.push({
                            animation: e
                        })
                    }
                    let p = Boolean(h.length);
                    return n && !1 === a.initial && !t.manuallyAnimateOnMount && (p = !1), n = !1, p ? e(h) : Promise.resolve()
                }
                return {
                    animateChanges: o,
                    setActive: function(e, n, s) {
                        var r;
                        if (i[e].isActive === n) return Promise.resolve();
                        null === (r = t.variantChildren) || void 0 === r || r.forEach((t => {
                            var i;
                            return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                        })), i[e].isActive = n;
                        const a = o(s, e);
                        for (const t in i) i[t].protectedKeys = {};
                        return a
                    },
                    setAnimateFunction: function(i) {
                        e = i(t)
                    },
                    getState: () => i
                }
            }

            function Bi(t, e) {
                return "string" === typeof e ? e !== t : !!Array.isArray(e) && !ri(e, t)
            }

            function ji(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let Mi = 0;
            const ki = {
                animation: {
                    Feature: class extends n {
                        constructor(t) {
                            super(t), t.animationState || (t.animationState = Ri(t))
                        }
                        updateAnimationControlsSubscription() {
                            const {
                                animate: t
                            } = this.node.getProps();
                            this.unmount(), (0, si.H)(t) && (this.unmount = t.subscribe(this.node))
                        }
                        mount() {
                            this.updateAnimationControlsSubscription()
                        }
                        update() {
                            const {
                                animate: t
                            } = this.node.getProps(), {
                                animate: e
                            } = this.node.prevProps || {};
                            t !== e && this.updateAnimationControlsSubscription()
                        }
                        unmount() {}
                    }
                },
                exit: {
                    Feature: class extends n {
                        constructor() {
                            super(...arguments), this.id = Mi++
                        }
                        update() {
                            if (!this.node.presenceContext) return;
                            const {
                                isPresent: t,
                                onExitComplete: e,
                                custom: i
                            } = this.node.presenceContext, {
                                isPresent: n
                            } = this.node.prevPresenceContext || {};
                            if (!this.node.animationState || t === n) return;
                            const s = this.node.animationState.setActive("exit", !t, {
                                custom: null !== i && void 0 !== i ? i : this.node.getProps().custom
                            });
                            e && !t && s.then((() => e(this.id)))
                        }
                        mount() {
                            const {
                                register: t
                            } = this.node.presenceContext || {};
                            t && (this.unmount = t(this.id))
                        }
                        unmount() {}
                    }
                }
            };

            function Fi(t, e) {
                const i = "pointer" + (e ? "enter" : "leave"),
                    n = "onHover" + (e ? "Start" : "End");
                return u(t.current, i, ((i, s) => {
                    if ("touch" === i.type || C()) return;
                    const o = t.getProps();
                    t.animationState && o.whileHover && t.animationState.setActive("whileHover", e), o[n] && p.Wi.update((() => o[n](i, s)))
                }), {
                    passive: !t.getProps()[n]
                })
            }
            const Ii = (t, e) => !!e && (t === e || Ii(t, e.parentElement));

            function Ui(t, e) {
                if (!e) return;
                const i = new PointerEvent("pointer" + t);
                e(i, a(i))
            }
            const Oi = new WeakMap,
                $i = new WeakMap,
                Ni = t => {
                    const e = Oi.get(t.target);
                    e && e(t)
                },
                Wi = t => {
                    t.forEach(Ni)
                };

            function Gi(t, e, i) {
                const n = function({
                    root: t,
                    ...e
                }) {
                    const i = t || document;
                    $i.has(i) || $i.set(i, {});
                    const n = $i.get(i),
                        s = JSON.stringify(e);
                    return n[s] || (n[s] = new IntersectionObserver(Wi, {
                        root: t,
                        ...e
                    })), n[s]
                }(e);
                return Oi.set(t, i), n.observe(t), () => {
                    Oi.delete(t), n.unobserve(t)
                }
            }
            const zi = {
                some: 0,
                all: 1
            };
            const Hi = {
                inView: {
                    Feature: class extends n {
                        constructor() {
                            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                        }
                        startObserver() {
                            this.unmount();
                            const {
                                viewport: t = {}
                            } = this.node.getProps(), {
                                root: e,
                                margin: i,
                                amount: n = "some",
                                once: s
                            } = t, o = {
                                root: e ? e.current : void 0,
                                rootMargin: i,
                                threshold: "number" === typeof n ? n : zi[n]
                            };
                            return Gi(this.node.current, o, (t => {
                                const {
                                    isIntersecting: e
                                } = t;
                                if (this.isInView === e) return;
                                if (this.isInView = e, s && !e && this.hasEnteredView) return;
                                e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                const {
                                    onViewportEnter: i,
                                    onViewportLeave: n
                                } = this.node.getProps(), o = e ? i : n;
                                o && o(t)
                            }))
                        }
                        mount() {
                            this.startObserver()
                        }
                        update() {
                            if ("undefined" === typeof IntersectionObserver) return;
                            const {
                                props: t,
                                prevProps: e
                            } = this.node;
                            ["amount", "margin", "root"].some(function({
                                viewport: t = {}
                            }, {
                                viewport: e = {}
                            } = {}) {
                                return i => t[i] !== e[i]
                            }(t, e)) && this.startObserver()
                        }
                        unmount() {}
                    }
                },
                tap: {
                    Feature: class extends n {
                        constructor() {
                            super(...arguments), this.removeStartListeners = s.Z, this.removeEndListeners = s.Z, this.removeAccessibleListeners = s.Z, this.startPointerPress = (t, e) => {
                                if (this.removeEndListeners(), this.isPressing) return;
                                const i = this.node.getProps(),
                                    n = u(window, "pointerup", ((t, e) => {
                                        if (!this.checkPressEnd()) return;
                                        const {
                                            onTap: i,
                                            onTapCancel: n
                                        } = this.node.getProps();
                                        p.Wi.update((() => {
                                            Ii(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                        }))
                                    }), {
                                        passive: !(i.onTap || i.onPointerUp)
                                    }),
                                    s = u(window, "pointercancel", ((t, e) => this.cancelPress(t, e)), {
                                        passive: !(i.onTapCancel || i.onPointerCancel)
                                    });
                                this.removeEndListeners = (0, c.z)(n, s), this.startPress(t, e)
                            }, this.startAccessiblePress = () => {
                                const t = h(this.node.current, "keydown", (t => {
                                        if ("Enter" !== t.key || this.isPressing) return;
                                        this.removeEndListeners(), this.removeEndListeners = h(this.node.current, "keyup", (t => {
                                            "Enter" === t.key && this.checkPressEnd() && Ui("up", ((t, e) => {
                                                const {
                                                    onTap: i
                                                } = this.node.getProps();
                                                i && p.Wi.update((() => i(t, e)))
                                            }))
                                        })), Ui("down", ((t, e) => {
                                            this.startPress(t, e)
                                        }))
                                    })),
                                    e = h(this.node.current, "blur", (() => {
                                        this.isPressing && Ui("cancel", ((t, e) => this.cancelPress(t, e)))
                                    }));
                                this.removeAccessibleListeners = (0, c.z)(t, e)
                            }
                        }
                        startPress(t, e) {
                            this.isPressing = !0;
                            const {
                                onTapStart: i,
                                whileTap: n
                            } = this.node.getProps();
                            n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && p.Wi.update((() => i(t, e)))
                        }
                        checkPressEnd() {
                            this.removeEndListeners(), this.isPressing = !1;
                            return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !C()
                        }
                        cancelPress(t, e) {
                            if (!this.checkPressEnd()) return;
                            const {
                                onTapCancel: i
                            } = this.node.getProps();
                            i && p.Wi.update((() => i(t, e)))
                        }
                        mount() {
                            const t = this.node.getProps(),
                                e = u(this.node.current, "pointerdown", this.startPointerPress, {
                                    passive: !(t.onTapStart || t.onPointerStart)
                                }),
                                i = h(this.node.current, "focus", this.startAccessiblePress);
                            this.removeStartListeners = (0, c.z)(e, i)
                        }
                        unmount() {
                            this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                        }
                    }
                },
                focus: {
                    Feature: class extends n {
                        constructor() {
                            super(...arguments), this.isActive = !1
                        }
                        onFocus() {
                            let t = !1;
                            try {
                                t = this.node.current.matches(":focus-visible")
                            } catch (e) {
                                t = !0
                            }
                            t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                        }
                        onBlur() {
                            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                        }
                        mount() {
                            this.unmount = (0, c.z)(h(this.node.current, "focus", (() => this.onFocus())), h(this.node.current, "blur", (() => this.onBlur())))
                        }
                        unmount() {}
                    }
                },
                hover: {
                    Feature: class extends n {
                        mount() {
                            this.unmount = (0, c.z)(Fi(this.node, !0), Fi(this.node, !1))
                        }
                        unmount() {}
                    }
                }
            };
            var Xi = i(8384),
                Yi = i(18738),
                Zi = i(59918),
                Ki = i(32721);
            const _i = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function qi(t, e, i = 1) {
                (0, o.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                const [n, s] = function(t) {
                    const e = _i.exec(t);
                    if (!e) return [, ];
                    const [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                const r = window.getComputedStyle(e).getPropertyValue(n);
                if (r) {
                    const t = r.trim();
                    return mi(t) ? parseFloat(t) : t
                }
                return (0, Yi.tm)(s) ? qi(s, e, i + 1) : s
            }
            var Qi = i(85586);
            const Ji = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                tn = t => Ji.has(t),
                en = t => t === gi.Rx || t === rt.px,
                nn = (t, e) => parseFloat(t.split(", ")[e]),
                sn = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    const s = n.match(/^matrix3d\((.+)\)$/);
                    if (s) return nn(s[1], e); {
                        const e = n.match(/^matrix\((.+)\)$/);
                        return e ? nn(e[1], t) : 0
                    }
                },
                on = new Set(["x", "y", "z"]),
                rn = yt._.filter((t => !on.has(t)));
            const an = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: sn(4, 13),
                y: sn(5, 14)
            };
            an.translateX = an.x, an.translateY = an.y;
            const ln = (t, e, i = {}, n = {}) => {
                e = { ...e
                }, n = { ...n
                };
                const s = Object.keys(e).filter(tn);
                let r = [],
                    a = !1;
                const l = [];
                if (s.forEach((s => {
                        const h = t.getValue(s);
                        if (!t.hasValue(s)) return;
                        let u = i[s],
                            c = xi(u);
                        const d = e[s];
                        let p;
                        if ((0, oi.C)(d)) {
                            const t = d.length,
                                e = null === d[0] ? 1 : 0;
                            u = d[e], c = xi(u);
                            for (let i = e; i < t && null !== d[i]; i++) p ? (0, o.k)(xi(d[i]) === p, "All keyframes must be of the same type") : (p = xi(d[i]), (0, o.k)(p === c || en(c) && en(p), "Keyframes must be of the same dimension as the current value"))
                        } else p = xi(d);
                        if (c !== p)
                            if (en(c) && en(p)) {
                                const t = h.get();
                                "string" === typeof t && h.set(parseFloat(t)), "string" === typeof d ? e[s] = parseFloat(d) : Array.isArray(d) && p === rt.px && (e[s] = d.map(parseFloat))
                            } else(null === c || void 0 === c ? void 0 : c.transform) && (null === p || void 0 === p ? void 0 : p.transform) && (0 === u || 0 === d) ? 0 === u ? h.set(p.transform(u)) : e[s] = c.transform(d) : (a || (r = function(t) {
                                const e = [];
                                return rn.forEach((i => {
                                    const n = t.getValue(i);
                                    void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                })), e.length && t.render(), e
                            }(t), a = !0), l.push(s), n[s] = void 0 !== n[s] ? n[s] : e[s], h.jump(d))
                    })), l.length) {
                    const i = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                        s = ((t, e, i) => {
                            const n = e.measureViewportBox(),
                                s = e.current,
                                o = getComputedStyle(s),
                                {
                                    display: r
                                } = o,
                                a = {};
                            "none" === r && e.setStaticValue("display", t.display || "block"), i.forEach((t => {
                                a[t] = an[t](n, o)
                            })), e.render();
                            const l = e.measureViewportBox();
                            return i.forEach((i => {
                                const n = e.getValue(i);
                                n && n.jump(a[i]), t[i] = an[i](l, o)
                            })), t
                        })(e, t, l);
                    return r.length && r.forEach((([e, i]) => {
                        t.getValue(e).set(i)
                    })), t.render(), Qi.j && null !== i && window.scrollTo({
                        top: i
                    }), {
                        target: s,
                        transitionEnd: n
                    }
                }
                return {
                    target: e,
                    transitionEnd: n
                }
            };

            function hn(t, e, i, n) {
                return (t => Object.keys(t).some(tn))(e) ? ln(t, e, i, n) : {
                    target: e,
                    transitionEnd: n
                }
            }
            const un = (t, e, i, n) => {
                    const s = function(t, { ...e
                    }, i) {
                        const n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        i && (i = { ...i
                        }), t.values.forEach((t => {
                            const e = t.get();
                            if (!(0, Yi.tm)(e)) return;
                            const i = qi(e, n);
                            i && t.set(i)
                        }));
                        for (const s in e) {
                            const t = e[s];
                            if (!(0, Yi.tm)(t)) continue;
                            const o = qi(t, n);
                            o && (e[s] = o, i || (i = {}), void 0 === i[s] && (i[s] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return hn(t, e = s.target, i, n = s.transitionEnd)
                },
                cn = {
                    current: null
                },
                dn = {
                    current: !1
                };
            var pn = i(89247);
            var mn = i(99926);
            const fn = new WeakMap,
                gn = Object.keys(mn.A),
                yn = gn.length,
                vn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                xn = ui.V.length;
            class Pn extends class {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => p.Wi.render(this.render, !1, !0);
                    const {
                        latestValues: r,
                        renderState: a
                    } = s;
                    this.latestValues = r, this.baseTarget = { ...r
                    }, this.initialValues = e.initial ? { ...r
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = (0, pn.G)(e), this.isVariantNode = (0, pn.M)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
                    const {
                        willChange: l,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (const u in h) {
                        const t = h[u];
                        void 0 !== r[u] && (0, be.i)(t) && (t.set(r[u], !1), pi(l) && l.add(u))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, fn.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), dn.current || function() {
                        if (dn.current = !0, Qi.j)
                            if (window.matchMedia) {
                                const t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => cn.current = t.matches;
                                t.addListener(e), e()
                            } else cn.current = !1
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || cn.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    fn.delete(this.current), this.projection && this.projection.unmount(), (0, p.Pn)(this.notifyUpdate), (0, p.Pn)(this.render), this.valueSubscriptions.forEach((t => t())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
                    for (const t in this.events) this.events[t].clear();
                    for (const t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    const i = yt.G.has(t),
                        n = e.on("change", (e => {
                            this.latestValues[t] = e, this.props.onUpdate && p.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        })),
                        s = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, (() => {
                        n(), s()
                    }))
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, s) {
                    let o, r;
                    for (let a = 0; a < yn; a++) {
                        const t = gn[a],
                            {
                                isEnabled: i,
                                Feature: n,
                                ProjectionNode: s,
                                MeasureLayout: l
                            } = mn.A[t];
                        s && (o = s), i(e) && (!this.features[t] && n && (this.features[t] = new n(this)), l && (r = l))
                    }
                    if (!this.projection && o) {
                        this.projection = new o(this.latestValues, this.parent && this.parent.projection);
                        const {
                            layoutId: t,
                            layout: i,
                            drag: n,
                            dragConstraints: r,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: Boolean(n) || r && (0, E.I)(r),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" === typeof i ? i : "both",
                            initialPromotionConfig: s,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return r
                }
                updateFeatures() {
                    for (const t in this.features) {
                        const e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let i = 0; i < vn.length; i++) {
                        const e = vn[i];
                        this.propEventSubscriptions[e] && (this.propEventSubscriptions[e](), delete this.propEventSubscriptions[e]);
                        const n = t["on" + e];
                        n && (this.propEventSubscriptions[e] = this.on(e, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        const {
                            willChange: n
                        } = e;
                        for (const s in e) {
                            const o = e[s],
                                r = i[s];
                            if ((0, be.i)(o)) t.addValue(s, o), pi(n) && n.add(s);
                            else if ((0, be.i)(r)) t.addValue(s, (0, Ee.BX)(o, {
                                owner: t
                            })), pi(n) && n.remove(s);
                            else if (r !== o)
                                if (t.hasValue(s)) {
                                    const e = t.getValue(s);
                                    !e.hasAnimated && e.set(o)
                                } else {
                                    const e = t.getStaticValue(s);
                                    t.addValue(s, (0, Ee.BX)(void 0 !== e ? e : o, {
                                        owner: t
                                    }))
                                }
                        }
                        for (const s in i) void 0 === e[s] && t.removeValue(s);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        const t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    const e = {};
                    for (let i = 0; i < xn; i++) {
                        const t = ui.V[i],
                            n = this.props[t];
                        ((0, ai.$)(n) || !1 === n) && (e[t] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    const e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    const e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, Ee.BX)(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    const {
                        initial: i
                    } = this.props, n = "string" === typeof i || "object" === typeof i ? null === (e = (0, li.o)(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    const s = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === s || (0, be.i)(s) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : s
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new Jt.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            } {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: n
                }, s) {
                    let o = function(t, e, i) {
                        const n = {};
                        for (const s in t) {
                            const t = Vi(s, e);
                            if (void 0 !== t) n[s] = t;
                            else {
                                const t = i.getValue(s);
                                t && (n[s] = t.get())
                            }
                        }
                        return n
                    }(i, t || {}, this);
                    if (n && (e && (e = n(e)), i && (i = n(i)), o && (o = n(o))), s) {
                        ! function(t, e, i) {
                            var n, s;
                            const o = Object.keys(e).filter((e => !t.hasValue(e))),
                                r = o.length;
                            var a;
                            if (r)
                                for (let l = 0; l < r; l++) {
                                    const r = o[l],
                                        h = e[r];
                                    let u = null;
                                    Array.isArray(h) && (u = h[0]), null === u && (u = null !== (s = null !== (n = i[r]) && void 0 !== n ? n : t.readValue(r)) && void 0 !== s ? s : e[r]), void 0 !== u && null !== u && ("string" === typeof u && (mi(u) || jt(u)) ? u = parseFloat(u) : (a = u, !Pi.find(yi(a)) && St.P.test(h) && (u = Bt(r, h))), t.addValue(r, (0, Ee.BX)(u, {
                                        owner: t
                                    })), void 0 === i[r] && (i[r] = u), null !== u && t.setBaseTarget(r, u))
                                }
                        }(this, i, o);
                        const t = un(this, i, o, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class Tn extends Pn {
                readValueFromInstance(t, e) {
                    if (yt.G.has(e)) {
                        const t = Rt(e);
                        return t && t.default || 0
                    } {
                        const n = (i = t, window.getComputedStyle(i)),
                            s = ((0, Yi.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" === typeof s ? s.trim() : s
                    }
                    var i
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return ot(t, e)
                }
                build(t, e, i, n) {
                    (0, Xi.r)(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, Zi.U)(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    const {
                        children: t
                    } = this.props;
                    (0, be.i)(t) && (this.childSubscription = t.on("change", (t => {
                        this.current && (this.current.textContent = `${t}`)
                    })))
                }
                renderInstance(t, e, i, n) {
                    (0, Ki.N)(t, e, i, n)
                }
            }
            var Sn = i(69282),
                Vn = i(31968),
                An = i(93246),
                Cn = i(40122),
                En = i(74883);
            class bn extends Pn {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (yt.G.has(e)) {
                        const t = Rt(e);
                        return t && t.default || 0
                    }
                    return e = An.s.has(e) ? e : (0, ci.D)(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, Sn.U)(t, e)
                }
                build(t, e, i, n) {
                    (0, Vn.i)(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    (0, Cn.K)(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = (0, En.a)(t.tagName), super.mount(t)
                }
            }
            var wn = i(4699);
            const Dn = { ...{
                    renderer: (t, e) => (0, wn.q)(t) ? new bn(e, {
                        enableHardwareAcceleration: !1
                    }) : new Tn(e, {
                        enableHardwareAcceleration: !0
                    }),
                    ...ki,
                    ...Hi
                },
                ...ii,
                ...ni
            }
        }
    }
]);