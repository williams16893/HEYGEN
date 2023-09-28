(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1557], {
        67662: function(t) {
            t.exports = function() {
                "use strict";
                var t = 1e3,
                    e = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    s = "second",
                    i = "minute",
                    a = "hour",
                    o = "day",
                    u = "week",
                    c = "month",
                    l = "quarter",
                    d = "year",
                    h = "date",
                    f = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    y = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(t) {
                            var e = ["th", "st", "nd", "rd"],
                                n = t % 100;
                            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                        }
                    },
                    p = function(t, e, n) {
                        var r = String(t);
                        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                    },
                    w = {
                        s: p,
                        z: function(t) {
                            var e = -t.utcOffset(),
                                n = Math.abs(e),
                                r = Math.floor(n / 60),
                                s = n % 60;
                            return (e <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(s, 2, "0")
                        },
                        m: function t(e, n) {
                            if (e.date() < n.date()) return -t(n, e);
                            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                s = e.clone().add(r, c),
                                i = n - s < 0,
                                a = e.clone().add(r + (i ? -1 : 1), c);
                            return +(-(r + (n - s) / (i ? s - a : a - s)) || 0)
                        },
                        a: function(t) {
                            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                        },
                        p: function(t) {
                            return {
                                M: c,
                                y: d,
                                w: u,
                                d: o,
                                D: h,
                                h: a,
                                m: i,
                                s: s,
                                ms: r,
                                Q: l
                            }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(t) {
                            return void 0 === t
                        }
                    },
                    T = "en",
                    x = {};
                x[T] = y;
                var $ = function(t) {
                        return t instanceof S
                    },
                    A = function t(e, n, r) {
                        var s;
                        if (!e) return T;
                        if ("string" == typeof e) {
                            var i = e.toLowerCase();
                            x[i] && (s = i), n && (x[i] = n, s = i);
                            var a = e.split("-");
                            if (!s && a.length > 1) return t(a[0])
                        } else {
                            var o = e.name;
                            x[o] = e, s = o
                        }
                        return !r && s && (T = s), s || !r && T
                    },
                    D = function(t, e) {
                        if ($(t)) return t.clone();
                        var n = "object" == typeof e ? e : {};
                        return n.date = t, n.args = arguments, new S(n)
                    },
                    M = w;
                M.l = A, M.i = $, M.w = function(t, e) {
                    return D(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                };
                var S = function() {
                        function y(t) {
                            this.$L = A(t.locale, null, !0), this.parse(t)
                        }
                        var p = y.prototype;
                        return p.parse = function(t) {
                            this.$d = function(t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (M.u(e)) return new Date;
                                if (e instanceof Date) return new Date(e);
                                if ("string" == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match(m);
                                    if (r) {
                                        var s = r[2] - 1 || 0,
                                            i = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)
                                    }
                                }
                                return new Date(e)
                            }(t), this.$x = t.x || {}, this.init()
                        }, p.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, p.$utils = function() {
                            return M
                        }, p.isValid = function() {
                            return !(this.$d.toString() === f)
                        }, p.isSame = function(t, e) {
                            var n = D(t);
                            return this.startOf(e) <= n && n <= this.endOf(e)
                        }, p.isAfter = function(t, e) {
                            return D(t) < this.startOf(e)
                        }, p.isBefore = function(t, e) {
                            return this.endOf(e) < D(t)
                        }, p.$g = function(t, e, n) {
                            return M.u(t) ? this[e] : this.set(n, t)
                        }, p.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, p.valueOf = function() {
                            return this.$d.getTime()
                        }, p.startOf = function(t, e) {
                            var n = this,
                                r = !!M.u(e) || e,
                                l = M.p(t),
                                f = function(t, e) {
                                    var s = M.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                    return r ? s : s.endOf(o)
                                },
                                m = function(t, e) {
                                    return M.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                },
                                g = this.$W,
                                y = this.$M,
                                p = this.$D,
                                w = "set" + (this.$u ? "UTC" : "");
                            switch (l) {
                                case d:
                                    return r ? f(1, 0) : f(31, 11);
                                case c:
                                    return r ? f(1, y) : f(0, y + 1);
                                case u:
                                    var T = this.$locale().weekStart || 0,
                                        x = (g < T ? g + 7 : g) - T;
                                    return f(r ? p - x : p + (6 - x), y);
                                case o:
                                case h:
                                    return m(w + "Hours", 0);
                                case a:
                                    return m(w + "Minutes", 1);
                                case i:
                                    return m(w + "Seconds", 2);
                                case s:
                                    return m(w + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, p.endOf = function(t) {
                            return this.startOf(t, !1)
                        }, p.$set = function(t, e) {
                            var n, u = M.p(t),
                                l = "set" + (this.$u ? "UTC" : ""),
                                f = (n = {}, n[o] = l + "Date", n[h] = l + "Date", n[c] = l + "Month", n[d] = l + "FullYear", n[a] = l + "Hours", n[i] = l + "Minutes", n[s] = l + "Seconds", n[r] = l + "Milliseconds", n)[u],
                                m = u === o ? this.$D + (e - this.$W) : e;
                            if (u === c || u === d) {
                                var g = this.clone().set(h, 1);
                                g.$d[f](m), g.init(), this.$d = g.set(h, Math.min(this.$D, g.daysInMonth())).$d
                            } else f && this.$d[f](m);
                            return this.init(), this
                        }, p.set = function(t, e) {
                            return this.clone().$set(t, e)
                        }, p.get = function(t) {
                            return this[M.p(t)]()
                        }, p.add = function(r, l) {
                            var h, f = this;
                            r = Number(r);
                            var m = M.p(l),
                                g = function(t) {
                                    var e = D(f);
                                    return M.w(e.date(e.date() + Math.round(t * r)), f)
                                };
                            if (m === c) return this.set(c, this.$M + r);
                            if (m === d) return this.set(d, this.$y + r);
                            if (m === o) return g(1);
                            if (m === u) return g(7);
                            var y = (h = {}, h[i] = e, h[a] = n, h[s] = t, h)[m] || 1,
                                p = this.$d.getTime() + r * y;
                            return M.w(p, this)
                        }, p.subtract = function(t, e) {
                            return this.add(-1 * t, e)
                        }, p.format = function(t) {
                            var e = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                                s = M.z(this),
                                i = this.$H,
                                a = this.$m,
                                o = this.$M,
                                u = n.weekdays,
                                c = n.months,
                                l = n.meridiem,
                                d = function(t, n, s, i) {
                                    return t && (t[n] || t(e, r)) || s[n].slice(0, i)
                                },
                                h = function(t) {
                                    return M.s(i % 12 || 12, t, "0")
                                },
                                m = l || function(t, e, n) {
                                    var r = t < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace(g, (function(t, r) {
                                return r || function(t) {
                                    switch (t) {
                                        case "YY":
                                            return String(e.$y).slice(-2);
                                        case "YYYY":
                                            return M.s(e.$y, 4, "0");
                                        case "M":
                                            return o + 1;
                                        case "MM":
                                            return M.s(o + 1, 2, "0");
                                        case "MMM":
                                            return d(n.monthsShort, o, c, 3);
                                        case "MMMM":
                                            return d(c, o);
                                        case "D":
                                            return e.$D;
                                        case "DD":
                                            return M.s(e.$D, 2, "0");
                                        case "d":
                                            return String(e.$W);
                                        case "dd":
                                            return d(n.weekdaysMin, e.$W, u, 2);
                                        case "ddd":
                                            return d(n.weekdaysShort, e.$W, u, 3);
                                        case "dddd":
                                            return u[e.$W];
                                        case "H":
                                            return String(i);
                                        case "HH":
                                            return M.s(i, 2, "0");
                                        case "h":
                                            return h(1);
                                        case "hh":
                                            return h(2);
                                        case "a":
                                            return m(i, a, !0);
                                        case "A":
                                            return m(i, a, !1);
                                        case "m":
                                            return String(a);
                                        case "mm":
                                            return M.s(a, 2, "0");
                                        case "s":
                                            return String(e.$s);
                                        case "ss":
                                            return M.s(e.$s, 2, "0");
                                        case "SSS":
                                            return M.s(e.$ms, 3, "0");
                                        case "Z":
                                            return s
                                    }
                                    return null
                                }(t) || s.replace(":", "")
                            }))
                        }, p.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, p.diff = function(r, h, f) {
                            var m, g = this,
                                y = M.p(h),
                                p = D(r),
                                w = (p.utcOffset() - this.utcOffset()) * e,
                                T = this - p,
                                x = function() {
                                    return M.m(g, p)
                                };
                            switch (y) {
                                case d:
                                    m = x() / 12;
                                    break;
                                case c:
                                    m = x();
                                    break;
                                case l:
                                    m = x() / 3;
                                    break;
                                case u:
                                    m = (T - w) / 6048e5;
                                    break;
                                case o:
                                    m = (T - w) / 864e5;
                                    break;
                                case a:
                                    m = T / n;
                                    break;
                                case i:
                                    m = T / e;
                                    break;
                                case s:
                                    m = T / t;
                                    break;
                                default:
                                    m = T
                            }
                            return f ? m : M.a(m)
                        }, p.daysInMonth = function() {
                            return this.endOf(c).$D
                        }, p.$locale = function() {
                            return x[this.$L]
                        }, p.locale = function(t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = A(t, e, !0);
                            return r && (n.$L = r), n
                        }, p.clone = function() {
                            return M.w(this.$d, this)
                        }, p.toDate = function() {
                            return new Date(this.valueOf())
                        }, p.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, p.toISOString = function() {
                            return this.$d.toISOString()
                        }, p.toString = function() {
                            return this.$d.toUTCString()
                        }, y
                    }(),
                    C = S.prototype;
                return D.prototype = C, [
                    ["$ms", r],
                    ["$s", s],
                    ["$m", i],
                    ["$H", a],
                    ["$W", o],
                    ["$M", c],
                    ["$y", d],
                    ["$D", h]
                ].forEach((function(t) {
                    C[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                })), D.extend = function(t, e) {
                    return t.$i || (t(e, S, D), t.$i = !0), D
                }, D.locale = A, D.isDayjs = $, D.unix = function(t) {
                    return D(1e3 * t)
                }, D.en = x[T], D.Ls = x, D.p = {}, D
            }()
        },
        83535: function(t) {
            t.exports = function() {
                "use strict";
                var t = "month",
                    e = "quarter";
                return function(n, r) {
                    var s = r.prototype;
                    s.quarter = function(t) {
                        return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1))
                    };
                    var i = s.add;
                    s.add = function(n, r) {
                        return n = Number(n), this.$utils().p(r) === e ? this.add(3 * n, t) : i.bind(this)(n, r)
                    };
                    var a = s.startOf;
                    s.startOf = function(n, r) {
                        var s = this.$utils(),
                            i = !!s.u(r) || r;
                        if (s.p(n) === e) {
                            var o = this.quarter() - 1;
                            return i ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day")
                        }
                        return a.bind(this)(n, r)
                    }
                }
            }()
        },
        43829: function(t, e, n) {
            var r = n(25898),
                s = n(71701);
            t.exports = function(t, e) {
                var n = -1,
                    i = s(t) ? Array(t.length) : [];
                return r(t, (function(t, r, s) {
                    i[++n] = e(t, r, s)
                })), i
            }
        },
        35728: function(t, e, n) {
            var r = n(67631),
                s = n(87856),
                i = n(61757),
                a = n(43829),
                o = n(28499),
                u = n(52715),
                c = n(87127),
                l = n(98958),
                d = n(2428);
            t.exports = function(t, e, n) {
                e = e.length ? r(e, (function(t) {
                    return d(t) ? function(e) {
                        return s(e, 1 === t.length ? t[0] : t)
                    } : t
                })) : [l];
                var h = -1;
                e = r(e, u(i));
                var f = a(t, (function(t, n, s) {
                    return {
                        criteria: r(e, (function(e) {
                            return e(t)
                        })),
                        index: ++h,
                        value: t
                    }
                }));
                return o(f, (function(t, e) {
                    return c(t, e, n)
                }))
            }
        },
        28499: function(t) {
            t.exports = function(t, e) {
                var n = t.length;
                for (t.sort(e); n--;) t[n] = t[n].value;
                return t
            }
        },
        1522: function(t, e, n) {
            var r = n(42848);
            t.exports = function(t, e) {
                if (t !== e) {
                    var n = void 0 !== t,
                        s = null === t,
                        i = t === t,
                        a = r(t),
                        o = void 0 !== e,
                        u = null === e,
                        c = e === e,
                        l = r(e);
                    if (!u && !l && !a && t > e || a && o && c && !u && !l || s && o && c || !n && c || !i) return 1;
                    if (!s && !a && !l && t < e || l && n && i && !s && !a || u && n && i || !o && i || !c) return -1
                }
                return 0
            }
        },
        87127: function(t, e, n) {
            var r = n(1522);
            t.exports = function(t, e, n) {
                for (var s = -1, i = t.criteria, a = e.criteria, o = i.length, u = n.length; ++s < o;) {
                    var c = r(i[s], a[s]);
                    if (c) return s >= u ? c : c * ("desc" == n[s] ? -1 : 1)
                }
                return t.index - e.index
            }
        },
        8359: function(t, e, n) {
            var r = n(35728),
                s = n(2428);
            t.exports = function(t, e, n, i) {
                return null == t ? [] : (s(e) || (e = null == e ? [] : [e]), s(n = i ? void 0 : n) || (n = null == n ? [] : [n]), r(t, e, n))
            }
        },
        24064: function(t, e, n) {
            "use strict";
            n.d(e, {
                Qc: function() {
                    return ee
                }
            });
            var r, s, i, a = n(83535),
                o = n(67662);

            function u(t, e) {
                t.assign("day", e.date()), t.assign("month", e.month() + 1), t.assign("year", e.year())
            }

            function c(t, e) {
                t.assign("hour", e.hour()), t.assign("minute", e.minute()), t.assign("second", e.second()), t.assign("millisecond", e.millisecond()), t.get("hour") < 12 ? t.assign("meridiem", r.AM) : t.assign("meridiem", r.PM)
            }

            function l(t, e) {
                t.imply("day", e.date()), t.imply("month", e.month() + 1), t.imply("year", e.year())
            }

            function d(t, e) {
                t.imply("hour", e.hour()), t.imply("minute", e.minute()), t.imply("second", e.second()), t.imply("millisecond", e.millisecond())
            }! function(t) {
                t[t.AM = 0] = "AM", t[t.PM = 1] = "PM"
            }(r || (r = {})),
            function(t) {
                t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
            }(s || (s = {})),
            function(t) {
                t[t.JANUARY = 1] = "JANUARY", t[t.FEBRUARY = 2] = "FEBRUARY", t[t.MARCH = 3] = "MARCH", t[t.APRIL = 4] = "APRIL", t[t.MAY = 5] = "MAY", t[t.JUNE = 6] = "JUNE", t[t.JULY = 7] = "JULY", t[t.AUGUST = 8] = "AUGUST", t[t.SEPTEMBER = 9] = "SEPTEMBER", t[t.OCTOBER = 10] = "OCTOBER", t[t.NOVEMBER = 11] = "NOVEMBER", t[t.DECEMBER = 12] = "DECEMBER"
            }(i || (i = {}));
            const h = {
                ACDT: 630,
                ACST: 570,
                ADT: -180,
                AEDT: 660,
                AEST: 600,
                AFT: 270,
                AKDT: -480,
                AKST: -540,
                ALMT: 360,
                AMST: -180,
                AMT: -240,
                ANAST: 720,
                ANAT: 720,
                AQTT: 300,
                ART: -180,
                AST: -240,
                AWDT: 540,
                AWST: 480,
                AZOST: 0,
                AZOT: -60,
                AZST: 300,
                AZT: 240,
                BNT: 480,
                BOT: -240,
                BRST: -120,
                BRT: -180,
                BST: 60,
                BTT: 360,
                CAST: 480,
                CAT: 120,
                CCT: 390,
                CDT: -300,
                CEST: 120,
                CET: {
                    timezoneOffsetDuringDst: 120,
                    timezoneOffsetNonDst: 60,
                    dstStart: t => m(t, i.MARCH, s.SUNDAY, 2),
                    dstEnd: t => m(t, i.OCTOBER, s.SUNDAY, 3)
                },
                CHADT: 825,
                CHAST: 765,
                CKT: -600,
                CLST: -180,
                CLT: -240,
                COT: -300,
                CST: -360,
                CT: {
                    timezoneOffsetDuringDst: -300,
                    timezoneOffsetNonDst: -360,
                    dstStart: t => f(t, i.MARCH, s.SUNDAY, 2, 2),
                    dstEnd: t => f(t, i.NOVEMBER, s.SUNDAY, 1, 2)
                },
                CVT: -60,
                CXT: 420,
                ChST: 600,
                DAVT: 420,
                EASST: -300,
                EAST: -360,
                EAT: 180,
                ECT: -300,
                EDT: -240,
                EEST: 180,
                EET: 120,
                EGST: 0,
                EGT: -60,
                EST: -300,
                ET: {
                    timezoneOffsetDuringDst: -240,
                    timezoneOffsetNonDst: -300,
                    dstStart: t => f(t, i.MARCH, s.SUNDAY, 2, 2),
                    dstEnd: t => f(t, i.NOVEMBER, s.SUNDAY, 1, 2)
                },
                FJST: 780,
                FJT: 720,
                FKST: -180,
                FKT: -240,
                FNT: -120,
                GALT: -360,
                GAMT: -540,
                GET: 240,
                GFT: -180,
                GILT: 720,
                GMT: 0,
                GST: 240,
                GYT: -240,
                HAA: -180,
                HAC: -300,
                HADT: -540,
                HAE: -240,
                HAP: -420,
                HAR: -360,
                HAST: -600,
                HAT: -90,
                HAY: -480,
                HKT: 480,
                HLV: -210,
                HNA: -240,
                HNC: -360,
                HNE: -300,
                HNP: -480,
                HNR: -420,
                HNT: -150,
                HNY: -540,
                HOVT: 420,
                ICT: 420,
                IDT: 180,
                IOT: 360,
                IRDT: 270,
                IRKST: 540,
                IRKT: 540,
                IRST: 210,
                IST: 330,
                JST: 540,
                KGT: 360,
                KRAST: 480,
                KRAT: 480,
                KST: 540,
                KUYT: 240,
                LHDT: 660,
                LHST: 630,
                LINT: 840,
                MAGST: 720,
                MAGT: 720,
                MART: -510,
                MAWT: 300,
                MDT: -360,
                MESZ: 120,
                MEZ: 60,
                MHT: 720,
                MMT: 390,
                MSD: 240,
                MSK: 180,
                MST: -420,
                MT: {
                    timezoneOffsetDuringDst: -360,
                    timezoneOffsetNonDst: -420,
                    dstStart: t => f(t, i.MARCH, s.SUNDAY, 2, 2),
                    dstEnd: t => f(t, i.NOVEMBER, s.SUNDAY, 1, 2)
                },
                MUT: 240,
                MVT: 300,
                MYT: 480,
                NCT: 660,
                NDT: -90,
                NFT: 690,
                NOVST: 420,
                NOVT: 360,
                NPT: 345,
                NST: -150,
                NUT: -660,
                NZDT: 780,
                NZST: 720,
                OMSST: 420,
                OMST: 420,
                PDT: -420,
                PET: -300,
                PETST: 720,
                PETT: 720,
                PGT: 600,
                PHOT: 780,
                PHT: 480,
                PKT: 300,
                PMDT: -120,
                PMST: -180,
                PONT: 660,
                PST: -480,
                PT: {
                    timezoneOffsetDuringDst: -420,
                    timezoneOffsetNonDst: -480,
                    dstStart: t => f(t, i.MARCH, s.SUNDAY, 2, 2),
                    dstEnd: t => f(t, i.NOVEMBER, s.SUNDAY, 1, 2)
                },
                PWT: 540,
                PYST: -180,
                PYT: -240,
                RET: 240,
                SAMT: 240,
                SAST: 120,
                SBT: 660,
                SCT: 240,
                SGT: 480,
                SRT: -180,
                SST: -660,
                TAHT: -600,
                TFT: 300,
                TJT: 300,
                TKT: 780,
                TLT: 540,
                TMT: 300,
                TVT: 720,
                ULAT: 480,
                UTC: 0,
                UYST: -120,
                UYT: -180,
                UZT: 300,
                VET: -210,
                VLAST: 660,
                VLAT: 660,
                VUT: 660,
                WAST: 120,
                WAT: 60,
                WEST: 60,
                WESZ: 60,
                WET: 0,
                WEZ: 0,
                WFT: 720,
                WGST: -120,
                WGT: -180,
                WIB: 420,
                WIT: 540,
                WITA: 480,
                WST: 780,
                WT: 0,
                YAKST: 600,
                YAKT: 600,
                YAPT: 600,
                YEKST: 360,
                YEKT: 360
            };

            function f(t, e, n, r, s = 0) {
                let i = 0,
                    a = 0;
                for (; a < r;) {
                    i++;
                    new Date(t, e - 1, i).getDay() === n && a++
                }
                return new Date(t, e - 1, i, s)
            }

            function m(t, e, n, r = 0) {
                const s = 0 === n ? 7 : n,
                    i = new Date(t, e - 1 + 1, 1, 12),
                    a = 0 === i.getDay() ? 7 : i.getDay();
                let o;
                return o = a === s ? 7 : a < s ? 7 + a - s : a - s, i.setDate(i.getDate() - o), new Date(t, e - 1, i.getDate(), r)
            }

            function g(t, e, n = {}) {
                if (null == t) return null;
                if ("number" === typeof t) return t;
                const r = n[t] ? ? h[t];
                return null == r ? null : "number" == typeof r ? r : null == e ? null : o(e).isAfter(r.dstStart(e.getFullYear())) && !o(e).isAfter(r.dstEnd(e.getFullYear())) ? r.timezoneOffsetDuringDst : r.timezoneOffsetNonDst
            }
            o.extend(a);
            class y {
                constructor(t) {
                    (t = t ? ? new Date) instanceof Date ? this.instant = t : (this.instant = t.instant ? ? new Date, this.timezoneOffset = g(t.timezone, this.instant))
                }
                getDateWithAdjustedTimezone() {
                    return new Date(this.instant.getTime() + 6e4 * this.getSystemTimezoneAdjustmentMinute(this.instant))
                }
                getSystemTimezoneAdjustmentMinute(t, e) {
                    (!t || t.getTime() < 0) && (t = new Date);
                    const n = -t.getTimezoneOffset();
                    return n - (e ? ? this.timezoneOffset ? ? n)
                }
            }
            class p {
                constructor(t, e) {
                    if (this.reference = t, this.knownValues = {}, this.impliedValues = {}, e)
                        for (const r in e) this.knownValues[r] = e[r];
                    const n = o(t.instant);
                    this.imply("day", n.date()), this.imply("month", n.month() + 1), this.imply("year", n.year()), this.imply("hour", 12), this.imply("minute", 0), this.imply("second", 0), this.imply("millisecond", 0)
                }
                get(t) {
                    return t in this.knownValues ? this.knownValues[t] : t in this.impliedValues ? this.impliedValues[t] : null
                }
                isCertain(t) {
                    return t in this.knownValues
                }
                getCertainComponents() {
                    return Object.keys(this.knownValues)
                }
                imply(t, e) {
                    return t in this.knownValues || (this.impliedValues[t] = e), this
                }
                assign(t, e) {
                    return this.knownValues[t] = e, delete this.impliedValues[t], this
                }
                delete(t) {
                    delete this.knownValues[t], delete this.impliedValues[t]
                }
                clone() {
                    const t = new p(this.reference);
                    t.knownValues = {}, t.impliedValues = {};
                    for (const e in this.knownValues) t.knownValues[e] = this.knownValues[e];
                    for (const e in this.impliedValues) t.impliedValues[e] = this.impliedValues[e];
                    return t
                }
                isOnlyDate() {
                    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second")
                }
                isOnlyTime() {
                    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month")
                }
                isOnlyWeekdayComponent() {
                    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month")
                }
                isDateWithUnknownYear() {
                    return this.isCertain("month") && !this.isCertain("year")
                }
                isValidDate() {
                    const t = this.dateWithoutTimezoneAdjustment();
                    return t.getFullYear() === this.get("year") && (t.getMonth() === this.get("month") - 1 && (t.getDate() === this.get("day") && ((null == this.get("hour") || t.getHours() == this.get("hour")) && (null == this.get("minute") || t.getMinutes() == this.get("minute")))))
                }
                toString() {
                    return `[ParsingComponents {knownValues: ${JSON.stringify(this.knownValues)}, impliedValues: ${JSON.stringify(this.impliedValues)}}, reference: ${JSON.stringify(this.reference)}]`
                }
                dayjs() {
                    return o(this.date())
                }
                date() {
                    const t = this.dateWithoutTimezoneAdjustment(),
                        e = this.reference.getSystemTimezoneAdjustmentMinute(t, this.get("timezoneOffset"));
                    return new Date(t.getTime() + 6e4 * e)
                }
                dateWithoutTimezoneAdjustment() {
                    const t = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
                    return t.setFullYear(this.get("year")), t
                }
                static createRelativeFromReference(t, e) {
                    let n = o(t.instant);
                    for (const s in e) n = n.add(e[s], s);
                    const r = new p(t);
                    return e.hour || e.minute || e.second ? (c(r, n), u(r, n), null !== t.timezoneOffset && r.assign("timezoneOffset", -t.instant.getTimezoneOffset())) : (d(r, n), null !== t.timezoneOffset && r.imply("timezoneOffset", -t.instant.getTimezoneOffset()), e.d ? (r.assign("day", n.date()), r.assign("month", n.month() + 1), r.assign("year", n.year())) : (e.week && r.imply("weekday", n.day()), r.imply("day", n.date()), e.month ? (r.assign("month", n.month() + 1), r.assign("year", n.year())) : (r.imply("month", n.month() + 1), e.year ? r.assign("year", n.year()) : r.imply("year", n.year())))), r
                }
            }
            class w {
                constructor(t, e, n, r, s) {
                    this.reference = t, this.refDate = t.instant, this.index = e, this.text = n, this.start = r || new p(t), this.end = s
                }
                clone() {
                    const t = new w(this.reference, this.index, this.text);
                    return t.start = this.start ? this.start.clone() : null, t.end = this.end ? this.end.clone() : null, t
                }
                date() {
                    return this.start.date()
                }
                toString() {
                    return `[ParsingResult {index: ${this.index}, text: '${this.text}', ...}]`
                }
            }

            function T(t, e) {
                const n = e.replace(/\((?!\?)/g, "(?:");
                return `${t}${n}\\s{0,5}(?:,?\\s{0,5}${n}){0,10}`
            }

            function x(t) {
                const e = function(t) {
                    let e;
                    return e = t instanceof Array ? [...t] : t instanceof Map ? Array.from(t.keys()) : Object.keys(t), e
                }(t).sort(((t, e) => e.length - t.length)).join("|").replace(/\./g, "\\.");
                return `(?:${e})`
            }

            function $(t) {
                return t < 100 && (t += t > 50 ? 1900 : 2e3), t
            }

            function A(t, e, n) {
                const r = o(t);
                let s = r;
                s = s.month(n - 1), s = s.date(e), s = s.year(r.year());
                const i = s.add(1, "y"),
                    a = s.add(-1, "y");
                return Math.abs(i.diff(r)) < Math.abs(s.diff(r)) ? s = i : Math.abs(a.diff(r)) < Math.abs(s.diff(r)) && (s = a), s.year()
            }
            const D = {
                    sunday: 0,
                    sun: 0,
                    "sun.": 0,
                    monday: 1,
                    mon: 1,
                    "mon.": 1,
                    tuesday: 2,
                    tue: 2,
                    "tue.": 2,
                    wednesday: 3,
                    wed: 3,
                    "wed.": 3,
                    thursday: 4,
                    thurs: 4,
                    "thurs.": 4,
                    thur: 4,
                    "thur.": 4,
                    thu: 4,
                    "thu.": 4,
                    friday: 5,
                    fri: 5,
                    "fri.": 5,
                    saturday: 6,
                    sat: 6,
                    "sat.": 6
                },
                M = {
                    january: 1,
                    february: 2,
                    march: 3,
                    april: 4,
                    may: 5,
                    june: 6,
                    july: 7,
                    august: 8,
                    september: 9,
                    october: 10,
                    november: 11,
                    december: 12
                },
                S = { ...M,
                    jan: 1,
                    "jan.": 1,
                    feb: 2,
                    "feb.": 2,
                    mar: 3,
                    "mar.": 3,
                    apr: 4,
                    "apr.": 4,
                    jun: 6,
                    "jun.": 6,
                    jul: 7,
                    "jul.": 7,
                    aug: 8,
                    "aug.": 8,
                    sep: 9,
                    "sep.": 9,
                    sept: 9,
                    "sept.": 9,
                    oct: 10,
                    "oct.": 10,
                    nov: 11,
                    "nov.": 11,
                    dec: 12,
                    "dec.": 12
                },
                C = {
                    one: 1,
                    two: 2,
                    three: 3,
                    four: 4,
                    five: 5,
                    six: 6,
                    seven: 7,
                    eight: 8,
                    nine: 9,
                    ten: 10,
                    eleven: 11,
                    twelve: 12
                },
                E = {
                    first: 1,
                    second: 2,
                    third: 3,
                    fourth: 4,
                    fifth: 5,
                    sixth: 6,
                    seventh: 7,
                    eighth: 8,
                    ninth: 9,
                    tenth: 10,
                    eleventh: 11,
                    twelfth: 12,
                    thirteenth: 13,
                    fourteenth: 14,
                    fifteenth: 15,
                    sixteenth: 16,
                    seventeenth: 17,
                    eighteenth: 18,
                    nineteenth: 19,
                    twentieth: 20,
                    "twenty first": 21,
                    "twenty-first": 21,
                    "twenty second": 22,
                    "twenty-second": 22,
                    "twenty third": 23,
                    "twenty-third": 23,
                    "twenty fourth": 24,
                    "twenty-fourth": 24,
                    "twenty fifth": 25,
                    "twenty-fifth": 25,
                    "twenty sixth": 26,
                    "twenty-sixth": 26,
                    "twenty seventh": 27,
                    "twenty-seventh": 27,
                    "twenty eighth": 28,
                    "twenty-eighth": 28,
                    "twenty ninth": 29,
                    "twenty-ninth": 29,
                    thirtieth: 30,
                    "thirty first": 31,
                    "thirty-first": 31
                },
                P = {
                    second: "second",
                    seconds: "second",
                    minute: "minute",
                    minutes: "minute",
                    hour: "hour",
                    hours: "hour",
                    day: "d",
                    days: "d",
                    week: "week",
                    weeks: "week",
                    month: "month",
                    months: "month",
                    quarter: "quarter",
                    quarters: "quarter",
                    year: "year",
                    years: "year"
                },
                O = {
                    s: "second",
                    sec: "second",
                    second: "second",
                    seconds: "second",
                    m: "minute",
                    min: "minute",
                    mins: "minute",
                    minute: "minute",
                    minutes: "minute",
                    h: "hour",
                    hr: "hour",
                    hrs: "hour",
                    hour: "hour",
                    hours: "hour",
                    d: "d",
                    day: "d",
                    days: "d",
                    w: "w",
                    week: "week",
                    weeks: "week",
                    mo: "month",
                    mon: "month",
                    mos: "month",
                    month: "month",
                    months: "month",
                    qtr: "quarter",
                    quarter: "quarter",
                    quarters: "quarter",
                    y: "year",
                    yr: "year",
                    year: "year",
                    years: "year",
                    ...P
                },
                R = `(?:${x(C)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
            const v = `(?:${x(E)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;

            function b(t) {
                let e = t.toLowerCase();
                return void 0 !== E[e] ? E[e] : (e = e.replace(/(?:st|nd|rd|th)$/i, ""), parseInt(e))
            }
            const k = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9])";

            function W(t) {
                if (/BE/i.test(t)) return t = t.replace(/BE/i, ""), parseInt(t) - 543;
                if (/BCE?/i.test(t)) return t = t.replace(/BCE?/i, ""), -parseInt(t);
                if (/(AD|CE)/i.test(t)) return t = t.replace(/(AD|CE)/i, ""), parseInt(t);
                return $(parseInt(t))
            }
            const N = `(${R})\\s{0,3}(${x(O)})`,
                Y = new RegExp(N, "i"),
                I = `(${R})\\s{0,3}(${x(P)})`,
                U = T("(?:(?:about|around)\\s{0,3})?", N),
                z = T("(?:(?:about|around)\\s{0,3})?", I);

            function F(t) {
                const e = {};
                let n = t,
                    r = Y.exec(n);
                for (; r;) V(e, r), n = n.substring(r[0].length).trim(), r = Y.exec(n);
                return e
            }

            function V(t, e) {
                const n = function(t) {
                    const e = t.toLowerCase();
                    return void 0 !== C[e] ? C[e] : "a" === e || "an" === e || "the" == e ? 1 : e.match(/few/) ? 3 : e.match(/half/) ? .5 : e.match(/couple/) ? 2 : e.match(/several/) ? 7 : parseFloat(e)
                }(e[1]);
                t[O[e[2].toLowerCase()]] = n
            }
            class H {
                constructor() {
                    this.cachedInnerPattern = null, this.cachedPattern = null
                }
                patternLeftBoundary() {
                    return "(\\W|^)"
                }
                pattern(t) {
                    const e = this.innerPattern(t);
                    return e == this.cachedInnerPattern || (this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${e.source}`, e.flags), this.cachedInnerPattern = e), this.cachedPattern
                }
                extract(t, e) {
                    const n = e[1] ? ? "";
                    e.index = e.index + n.length, e[0] = e[0].substring(n.length);
                    for (let r = 2; r < e.length; r++) e[r - 1] = e[r];
                    return this.innerExtract(t, e)
                }
            }
            const L = new RegExp(`(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${U})(?=\\W|$)`, "i"),
                B = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${U})(?=\\W|$)`, "i"),
                j = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${z})(?=\\W|$)`, "i");
            class _ extends H {
                constructor(t) {
                    super(), this.strictMode = t
                }
                innerPattern(t) {
                    return this.strictMode ? j : t.option.forwardDate ? L : B
                }
                innerExtract(t, e) {
                    const n = F(e[1]);
                    return p.createRelativeFromReference(t.reference, n)
                }
            }
            const G = new RegExp(`(?:on\\s{0,3})?(${v})(?:\\s{0,3}(?:to|\\-|\\\u2013|until|through|till)?\\s{0,3}(${v}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${x(S)})(?:(?:-|/|,?\\s{0,3})(${k}(?![^\\s]\\d)))?(?=\\W|$)`, "i");
            class K extends H {
                innerPattern() {
                    return G
                }
                innerExtract(t, e) {
                    const n = t.createParsingResult(e.index, e[0]),
                        r = S[e[3].toLowerCase()],
                        s = b(e[1]);
                    if (s > 31) return e.index = e.index + e[1].length, null;
                    if (n.start.assign("month", r), n.start.assign("day", s), e[4]) {
                        const t = W(e[4]);
                        n.start.assign("year", t)
                    } else {
                        const e = A(t.refDate, s, r);
                        n.start.imply("year", e)
                    }
                    if (e[2]) {
                        const t = b(e[2]);
                        n.end = n.start.clone(), n.end.assign("day", t)
                    }
                    return n
                }
            }
            const J = new RegExp(`(${x(S)})(?:-|/|\\s*,?\\s*)(${v})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${v})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${k}))?(?=\\W|$)(?!\\:\\d)`, "i");
            class Z extends H {
                innerPattern() {
                    return J
                }
                innerExtract(t, e) {
                    const n = S[e[1].toLowerCase()],
                        r = b(e[2]);
                    if (r > 31) return null;
                    const s = t.createParsingComponents({
                        day: r,
                        month: n
                    });
                    if (e[4]) {
                        const t = W(e[4]);
                        s.assign("year", t)
                    } else {
                        const e = A(t.refDate, r, n);
                        s.imply("year", e)
                    }
                    if (!e[3]) return s;
                    const i = b(e[3]),
                        a = t.createParsingResult(e.index, e[0]);
                    return a.start = s, a.end = s.clone(), a.end.assign("day", i), a
                }
            }
            const q = new RegExp(`((?:in)\\s*)?(${x(S)})\\s*(?:[,-]?\\s*(${k})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
            class Q extends H {
                innerPattern() {
                    return q
                }
                innerExtract(t, e) {
                    const n = e[2].toLowerCase();
                    if (e[0].length <= 3 && !M[n]) return null;
                    const r = t.createParsingResult(e.index + (e[1] || "").length, e.index + e[0].length);
                    r.start.imply("day", 1);
                    const s = S[n];
                    if (r.start.assign("month", s), e[3]) {
                        const t = W(e[3]);
                        r.start.assign("year", t)
                    } else {
                        const e = A(t.refDate, 1, s);
                        r.start.imply("year", e)
                    }
                    return r
                }
            }
            const X = new RegExp(`([0-9]{4})[\\.\\/\\s](?:(${x(S)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
            class tt extends H {
                innerPattern() {
                    return X
                }
                innerExtract(t, e) {
                    const n = e[3] ? parseInt(e[3]) : S[e[2].toLowerCase()];
                    if (n < 1 || n > 12) return null;
                    const r = parseInt(e[1]);
                    return {
                        day: parseInt(e[4]),
                        month: n,
                        year: r
                    }
                }
            }
            const et = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
            class nt extends H {
                innerPattern() {
                    return et
                }
                innerExtract(t, e) {
                    const n = parseInt(e[2]),
                        r = parseInt(e[1]);
                    return t.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n)
                }
            }
            class rt extends class {
                constructor(t = !1) {
                    this.cachedPrimaryPrefix = null, this.cachedPrimarySuffix = null, this.cachedPrimaryTimePattern = null, this.cachedFollowingPhase = null, this.cachedFollowingSuffix = null, this.cachedFollowingTimePatten = null, this.strictMode = t
                }
                patternFlags() {
                    return "i"
                }
                primaryPatternLeftBoundary() {
                    return "(^|\\s|T|\\b)"
                }
                primarySuffix() {
                    return "(?=\\W|$)"
                }
                followingSuffix() {
                    return "(?=\\W|$)"
                }
                pattern(t) {
                    return this.getPrimaryTimePatternThroughCache()
                }
                extract(t, e) {
                    const n = this.extractPrimaryTimeComponents(t, e);
                    if (!n) return e.index += e[0].length, null;
                    const r = e.index + e[1].length,
                        s = e[0].substring(e[1].length),
                        i = t.createParsingResult(r, s, n);
                    e.index += e[0].length;
                    const a = t.text.substring(e.index),
                        o = this.getFollowingTimePatternThroughCache().exec(a);
                    return s.match(/^\d{3,4}/) && o && o[0].match(/^\s*([+-])\s*\d{2,4}$/) ? null : !o || o[0].match(/^\s*([+-])\s*\d{3,4}$/) ? this.checkAndReturnWithoutFollowingPattern(i) : (i.end = this.extractFollowingTimeComponents(t, o, i), i.end && (i.text += o[0]), this.checkAndReturnWithFollowingPattern(i))
                }
                extractPrimaryTimeComponents(t, e, n = !1) {
                    const s = t.createParsingComponents();
                    let i = 0,
                        a = null,
                        o = parseInt(e[2]);
                    if (o > 100) {
                        if (this.strictMode || null != e[3]) return null;
                        i = o % 100, o = Math.floor(o / 100)
                    }
                    if (o > 24) return null;
                    if (null != e[3]) {
                        if (1 == e[3].length && !e[6]) return null;
                        i = parseInt(e[3])
                    }
                    if (i >= 60) return null;
                    if (o > 12 && (a = r.PM), null != e[6]) {
                        if (o > 12) return null;
                        const t = e[6][0].toLowerCase();
                        "a" == t && (a = r.AM, 12 == o && (o = 0)), "p" == t && (a = r.PM, 12 != o && (o += 12))
                    }
                    if (s.assign("hour", o), s.assign("minute", i), null !== a ? s.assign("meridiem", a) : o < 12 ? s.imply("meridiem", r.AM) : s.imply("meridiem", r.PM), null != e[5]) {
                        const t = parseInt(e[5].substring(0, 3));
                        if (t >= 1e3) return null;
                        s.assign("millisecond", t)
                    }
                    if (null != e[4]) {
                        const t = parseInt(e[4]);
                        if (t >= 60) return null;
                        s.assign("second", t)
                    }
                    return s
                }
                extractFollowingTimeComponents(t, e, n) {
                    const s = t.createParsingComponents();
                    if (null != e[5]) {
                        const t = parseInt(e[5].substring(0, 3));
                        if (t >= 1e3) return null;
                        s.assign("millisecond", t)
                    }
                    if (null != e[4]) {
                        const t = parseInt(e[4]);
                        if (t >= 60) return null;
                        s.assign("second", t)
                    }
                    let i = parseInt(e[2]),
                        a = 0,
                        o = -1;
                    if (null != e[3] ? a = parseInt(e[3]) : i > 100 && (a = i % 100, i = Math.floor(i / 100)), a >= 60 || i > 24) return null;
                    if (i >= 12 && (o = r.PM), null != e[6]) {
                        if (i > 12) return null;
                        const t = e[6][0].toLowerCase();
                        "a" == t && (o = r.AM, 12 == i && (i = 0, s.isCertain("day") || s.imply("day", s.get("day") + 1))), "p" == t && (o = r.PM, 12 != i && (i += 12)), n.start.isCertain("meridiem") || (o == r.AM ? (n.start.imply("meridiem", r.AM), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", r.PM), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
                    }
                    if (s.assign("hour", i), s.assign("minute", a), o >= 0) s.assign("meridiem", o);
                    else {
                        n.start.isCertain("meridiem") && n.start.get("hour") > 12 ? n.start.get("hour") - 12 > i ? s.imply("meridiem", r.AM) : i <= 12 && (s.assign("hour", i + 12), s.assign("meridiem", r.PM)) : i > 12 ? s.imply("meridiem", r.PM) : i <= 12 && s.imply("meridiem", r.AM)
                    }
                    return s.date().getTime() < n.start.date().getTime() && s.imply("day", s.get("day") + 1), s
                }
                checkAndReturnWithoutFollowingPattern(t) {
                    if (t.text.match(/^\d$/)) return null;
                    if (t.text.match(/^\d\d\d+$/)) return null;
                    if (t.text.match(/\d[apAP]$/)) return null;
                    const e = t.text.match(/[^\d:.](\d[\d.]+)$/);
                    if (e) {
                        const t = e[1];
                        if (this.strictMode) return null;
                        if (t.includes(".") && !t.match(/\d(\.\d{2})+$/)) return null;
                        if (parseInt(t) > 24) return null
                    }
                    return t
                }
                checkAndReturnWithFollowingPattern(t) {
                    if (t.text.match(/^\d+-\d+$/)) return null;
                    const e = t.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
                    if (e) {
                        if (this.strictMode) return null;
                        const t = e[1],
                            n = e[2];
                        if (n.includes(".") && !n.match(/\d(\.\d{2})+$/)) return null;
                        const r = parseInt(n),
                            s = parseInt(t);
                        if (r > 24 || s > 24) return null
                    }
                    return t
                }
                getPrimaryTimePatternThroughCache() {
                    const t = this.primaryPrefix(),
                        e = this.primarySuffix();
                    return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === e || (this.cachedPrimaryTimePattern = function(t, e, n, r) {
                        return new RegExp(`${t}${e}(\\d{1,4})(?:(?:\\.|:|\uff1a)(\\d{1,2})(?:(?::|\uff1a)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r)
                    }(this.primaryPatternLeftBoundary(), t, e, this.patternFlags()), this.cachedPrimaryPrefix = t, this.cachedPrimarySuffix = e), this.cachedPrimaryTimePattern
                }
                getFollowingTimePatternThroughCache() {
                    const t = this.followingPhase(),
                        e = this.followingSuffix();
                    return this.cachedFollowingPhase === t && this.cachedFollowingSuffix === e || (this.cachedFollowingTimePatten = function(t, e) {
                        return new RegExp(`^(${t})(\\d{1,4})(?:(?:\\.|\\:|\\\uff1a)(\\d{1,2})(?:(?:\\.|\\:|\\\uff1a)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${e}`, "i")
                    }(t, e), this.cachedFollowingPhase = t, this.cachedFollowingSuffix = e), this.cachedFollowingTimePatten
                }
            } {
                constructor(t) {
                    super(t)
                }
                followingPhase() {
                    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301c|to|until|through|till|\\?)\\s*"
                }
                primaryPrefix() {
                    return "(?:(?:at|from)\\s*)??"
                }
                primarySuffix() {
                    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)"
                }
                extractPrimaryTimeComponents(t, e) {
                    const n = super.extractPrimaryTimeComponents(t, e);
                    if (n) {
                        if (e[0].endsWith("night")) {
                            const t = n.get("hour");
                            t >= 6 && t < 12 ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.PM)) : t < 6 && n.assign("meridiem", r.AM)
                        }
                        if (e[0].endsWith("afternoon")) {
                            n.assign("meridiem", r.PM);
                            const t = n.get("hour");
                            t >= 0 && t <= 6 && n.assign("hour", n.get("hour") + 12)
                        }
                        if (e[0].endsWith("morning")) {
                            n.assign("meridiem", r.AM);
                            n.get("hour") < 12 && n.assign("hour", n.get("hour"))
                        }
                    }
                    return n
                }
            }

            function st(t) {
                const e = {};
                for (const n in t) e[n] = -t[n];
                return e
            }
            const it = new RegExp(`(${U})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
                at = new RegExp(`(${z})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
            class ot extends H {
                constructor(t) {
                    super(), this.strictMode = t
                }
                innerPattern() {
                    return this.strictMode ? at : it
                }
                innerExtract(t, e) {
                    const n = st(F(e[1]));
                    return p.createRelativeFromReference(t.reference, n)
                }
            }
            const ut = new RegExp(`(${U})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
                ct = new RegExp("(" + z + ")(later|from now)(?=(?:\\W|$))", "i");
            class lt extends H {
                constructor(t) {
                    super(), this.strictMode = t
                }
                innerPattern() {
                    return this.strictMode ? ct : ut
                }
                innerExtract(t, e) {
                    const n = F(e[1]);
                    return p.createRelativeFromReference(t.reference, n)
                }
            }
            class dt {
                refine(t, e) {
                    if (e.length < 2) return e;
                    const n = [];
                    let r = e[0],
                        s = null;
                    for (let i = 1; i < e.length; i++) {
                        s = e[i];
                        const a = t.text.substring(r.index + r.text.length, s.index);
                        if (this.shouldMergeResults(a, r, s, t)) {
                            const e = r,
                                n = s,
                                i = this.mergeResults(a, e, n, t);
                            t.debug((() => {
                                console.log(`${this.constructor.name} merged ${e} and ${n} into ${i}`)
                            })), r = i
                        } else n.push(r), r = s
                    }
                    return null != r && n.push(r), n
                }
            }
            class ht extends dt {
                shouldMergeResults(t, e, n) {
                    return !e.end && !n.end && null != t.match(this.patternBetween())
                }
                mergeResults(t, e, n) {
                    if (e.start.isOnlyWeekdayComponent() || n.start.isOnlyWeekdayComponent() || (n.start.getCertainComponents().forEach((t => {
                            e.start.isCertain(t) || e.start.imply(t, n.start.get(t))
                        })), e.start.getCertainComponents().forEach((t => {
                            n.start.isCertain(t) || n.start.imply(t, e.start.get(t))
                        }))), e.start.date().getTime() > n.start.date().getTime()) {
                        let t = e.start.dayjs(),
                            r = n.start.dayjs();
                        n.start.isOnlyWeekdayComponent() && r.add(7, "days").isAfter(t) ? (r = r.add(7, "days"), n.start.imply("day", r.date()), n.start.imply("month", r.month() + 1), n.start.imply("year", r.year())) : e.start.isOnlyWeekdayComponent() && t.add(-7, "days").isBefore(r) ? (t = t.add(-7, "days"), e.start.imply("day", t.date()), e.start.imply("month", t.month() + 1), e.start.imply("year", t.year())) : n.start.isDateWithUnknownYear() && r.add(1, "years").isAfter(t) ? (r = r.add(1, "years"), n.start.imply("year", r.year())) : e.start.isDateWithUnknownYear() && t.add(-1, "years").isBefore(r) ? (t = t.add(-1, "years"), e.start.imply("year", t.year())) : [n, e] = [e, n]
                    }
                    const r = e.clone();
                    return r.start = e.start, r.end = n.start, r.index = Math.min(e.index, n.index), e.index < n.index ? r.text = e.text + t + n.text : r.text = n.text + t + e.text, r
                }
            }
            class ft extends ht {
                patternBetween() {
                    return /^\s*(to|-|\u2013|until|through|till)\s*$/i
                }
            }

            function mt(t, e) {
                const n = t.clone(),
                    r = t.start,
                    s = e.start;
                if (n.start = gt(r, s), null != t.end || null != e.end) {
                    const r = gt(null == t.end ? t.start : t.end, null == e.end ? e.start : e.end);
                    if (null == t.end && r.date().getTime() < n.start.date().getTime()) {
                        const t = r.dayjs().add(1, "day");
                        r.isCertain("day") ? u(r, t) : l(r, t)
                    }
                    n.end = r
                }
                return n
            }

            function gt(t, e) {
                const n = t.clone();
                return e.isCertain("hour") ? (n.assign("hour", e.get("hour")), n.assign("minute", e.get("minute")), e.isCertain("second") ? (n.assign("second", e.get("second")), e.isCertain("millisecond") ? n.assign("millisecond", e.get("millisecond")) : n.imply("millisecond", e.get("millisecond"))) : (n.imply("second", e.get("second")), n.imply("millisecond", e.get("millisecond")))) : (n.imply("hour", e.get("hour")), n.imply("minute", e.get("minute")), n.imply("second", e.get("second")), n.imply("millisecond", e.get("millisecond"))), e.isCertain("timezoneOffset") && n.assign("timezoneOffset", e.get("timezoneOffset")), e.isCertain("meridiem") ? n.assign("meridiem", e.get("meridiem")) : null != e.get("meridiem") && null == n.get("meridiem") && n.imply("meridiem", e.get("meridiem")), n.get("meridiem") == r.PM && n.get("hour") < 12 && (e.isCertain("hour") ? n.assign("hour", n.get("hour") + 12) : n.imply("hour", n.get("hour") + 12)), n
            }
            class yt extends dt {
                shouldMergeResults(t, e, n) {
                    return (e.start.isOnlyDate() && n.start.isOnlyTime() || n.start.isOnlyDate() && e.start.isOnlyTime()) && null != t.match(this.patternBetween())
                }
                mergeResults(t, e, n) {
                    const r = e.start.isOnlyDate() ? mt(e, n) : mt(n, e);
                    return r.index = e.index, r.text = e.text + t + n.text, r
                }
            }
            class pt extends yt {
                patternBetween() {
                    return new RegExp("^\\s*(T|at|after|before|on|of|,|-)?\\s*$")
                }
            }
            const wt = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
            class Tt {
                constructor(t) {
                    this.timezoneOverrides = t
                }
                refine(t, e) {
                    const n = t.option.timezones ? ? {};
                    return e.forEach((e => {
                        const r = t.text.substring(e.index + e.text.length),
                            s = wt.exec(r);
                        if (!s) return;
                        const i = s[1].toUpperCase(),
                            a = e.start.date() ? ? e.refDate ? ? new Date,
                            o = { ...this.timezoneOverrides,
                                ...n
                            },
                            u = g(i, a, o);
                        if (null == u) return;
                        t.debug((() => {
                            console.log(`Extracting timezone: '${i}' into: ${u} for: ${e.start}`)
                        }));
                        const c = e.start.get("timezoneOffset");
                        if (null !== c && u != c) {
                            if (e.start.isCertain("timezoneOffset")) return;
                            if (i != s[1]) return
                        }
                        e.start.isOnlyDate() && i != s[1] || (e.text += s[0], e.start.isCertain("timezoneOffset") || e.start.assign("timezoneOffset", u), null == e.end || e.end.isCertain("timezoneOffset") || e.end.assign("timezoneOffset", u))
                    })), e
                }
            }
            const xt = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
            class $t {
                refine(t, e) {
                    return e.forEach((function(e) {
                        if (e.start.isCertain("timezoneOffset")) return;
                        const n = t.text.substring(e.index + e.text.length),
                            r = xt.exec(n);
                        if (!r) return;
                        t.debug((() => {
                            console.log(`Extracting timezone: '${r[0]}' into : ${e}`)
                        }));
                        let s = 60 * parseInt(r[2]) + parseInt(r[3] || "0");
                        s > 840 || ("-" === r[1] && (s = -s), null != e.end && e.end.assign("timezoneOffset", s), e.start.assign("timezoneOffset", s), e.text += r[0])
                    })), e
                }
            }
            class At {
                refine(t, e) {
                    if (e.length < 2) return e;
                    const n = [];
                    let r = e[0];
                    for (let s = 1; s < e.length; s++) {
                        const t = e[s];
                        t.index < r.index + r.text.length ? t.text.length > r.text.length && (r = t) : (n.push(r), r = t)
                    }
                    return null != r && n.push(r), n
                }
            }
            class Dt {
                refine(t, e) {
                    return t.option.forwardDate ? (e.forEach((function(e) {
                        let n = o(t.refDate);
                        if (e.start.isOnlyTime() && n.isAfter(e.start.dayjs()) && (n = n.add(1, "day"), l(e.start, n), e.end && e.end.isOnlyTime() && (l(e.end, n), e.start.dayjs().isAfter(e.end.dayjs()) && (n = n.add(1, "day"), l(e.end, n)))), e.start.isOnlyWeekdayComponent() && n.isAfter(e.start.dayjs()) && (n = n.day() >= e.start.get("weekday") ? n.day(e.start.get("weekday") + 7) : n.day(e.start.get("weekday")), e.start.imply("day", n.date()), e.start.imply("month", n.month() + 1), e.start.imply("year", n.year()), t.debug((() => {
                                console.log(`Forward weekly adjusted for ${e} (${e.start})`)
                            })), e.end && e.end.isOnlyWeekdayComponent() && (n = n.day() > e.end.get("weekday") ? n.day(e.end.get("weekday") + 7) : n.day(e.end.get("weekday")), e.end.imply("day", n.date()), e.end.imply("month", n.month() + 1), e.end.imply("year", n.year()), t.debug((() => {
                                console.log(`Forward weekly adjusted for ${e} (${e.end})`)
                            })))), e.start.isDateWithUnknownYear() && n.isAfter(e.start.dayjs()))
                            for (let r = 0; r < 3 && n.isAfter(e.start.dayjs()); r++) e.start.imply("year", e.start.get("year") + 1), t.debug((() => {
                                console.log(`Forward yearly adjusted for ${e} (${e.start})`)
                            })), e.end && !e.end.isCertain("year") && (e.end.imply("year", e.end.get("year") + 1), t.debug((() => {
                                console.log(`Forward yearly adjusted for ${e} (${e.end})`)
                            })))
                    })), e) : e
                }
            }
            class Mt extends class {
                refine(t, e) {
                    return e.filter((e => this.isValid(t, e)))
                }
            } {
                constructor(t) {
                    super(), this.strictMode = t
                }
                isValid(t, e) {
                    return e.text.replace(" ", "").match(/^\d*(\.\d*)?$/) ? (t.debug((() => {
                        console.log(`Removing unlikely result '${e.text}'`)
                    })), !1) : e.start.isValidDate() ? e.end && !e.end.isValidDate() ? (t.debug((() => {
                        console.log(`Removing invalid result: ${e} (${e.end})`)
                    })), !1) : !this.strictMode || this.isStrictModeValid(t, e) : (t.debug((() => {
                        console.log(`Removing invalid result: ${e} (${e.start})`)
                    })), !1)
                }
                isStrictModeValid(t, e) {
                    return e.start.isOnlyWeekdayComponent() ? (t.debug((() => {
                        console.log(`(Strict) Removing weekday only component: ${e} (${e.end})`)
                    })), !1) : !!(!e.start.isOnlyTime() || e.start.isCertain("hour") && e.start.isCertain("minute")) || (t.debug((() => {
                        console.log(`(Strict) Removing uncertain time component: ${e} (${e.end})`)
                    })), !1)
                }
            }
            const St = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(?:Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i");
            class Ct extends H {
                innerPattern() {
                    return St
                }
                innerExtract(t, e) {
                    const n = {};
                    if (n.year = parseInt(e[1]), n.month = parseInt(e[2]), n.day = parseInt(e[3]), null != e[4])
                        if (n.hour = parseInt(e[4]), n.minute = parseInt(e[5]), null != e[6] && (n.second = parseInt(e[6])), null != e[7] && (n.millisecond = parseInt(e[7])), null == e[8]) n.timezoneOffset = 0;
                        else {
                            const t = parseInt(e[8]);
                            let r = 0;
                            null != e[9] && (r = parseInt(e[9]));
                            let s = 60 * t;
                            s < 0 ? s -= r : s += r, n.timezoneOffset = s
                        }
                    return n
                }
            }
            class Et extends dt {
                mergeResults(t, e, n) {
                    const r = n.clone();
                    return r.index = e.index, r.text = e.text + t + r.text, r.start.assign("weekday", e.start.get("weekday")), r.end && r.end.assign("weekday", e.start.get("weekday")), r
                }
                shouldMergeResults(t, e, n) {
                    return e.start.isOnlyWeekdayComponent() && !e.start.isCertain("hour") && n.start.isCertain("day") && null != t.match(/^,?\s*$/)
                }
            }

            function Pt(t) {
                return function(t, e) {
                    return Ot(t, -e)
                }(t, 1)
            }

            function Ot(t, e) {
                let n = o(t.instant);
                const r = new p(t, {});
                return n = n.add(e, "day"), u(r, n), d(r, n), r
            }

            function Rt(t) {
                const e = new p(t, {}),
                    n = o(t.instant);
                return n.hour() > 2 && function(t, e) {
                    l(t, e = e.add(1, "day")), d(t, e)
                }(e, n), e.assign("hour", 0), e.imply("minute", 0), e.imply("second", 0), e.imply("millisecond", 0), e
            }
            const vt = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
            class bt extends H {
                innerPattern(t) {
                    return vt
                }
                innerExtract(t, e) {
                    let n = o(t.refDate);
                    const s = e[0].toLowerCase(),
                        i = t.createParsingComponents();
                    switch (s) {
                        case "now":
                            return function(t) {
                                const e = o(t.instant),
                                    n = new p(t, {});
                                return u(n, e), c(n, e), null !== t.timezoneOffset && n.assign("timezoneOffset", e.utcOffset()), n
                            }(t.reference);
                        case "today":
                            return function(t) {
                                const e = o(t.instant),
                                    n = new p(t, {});
                                return u(n, e), d(n, e), n
                            }(t.reference);
                        case "yesterday":
                            return Pt(t.reference);
                        case "tomorrow":
                        case "tmr":
                        case "tmrw":
                            return Ot(t.reference, 1);
                        case "tonight":
                            return function(t, e = 22) {
                                const n = o(t.instant),
                                    s = new p(t, {});
                                return s.imply("hour", e), s.imply("meridiem", r.PM), u(s, n), s
                            }(t.reference);
                        default:
                            s.match(/last\s*night/) && (n.hour() > 6 && (n = n.add(-1, "day")), u(i, n), i.imply("hour", 0))
                    }
                    return i
                }
            }
            const kt = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
            class Wt extends H {
                innerPattern() {
                    return kt
                }
                innerExtract(t, e) {
                    switch (e[1].toLowerCase()) {
                        case "afternoon":
                            return function(t, e = 15) {
                                const n = new p(t, {});
                                return n.imply("meridiem", r.PM), n.imply("hour", e), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n
                            }(t.reference);
                        case "evening":
                        case "night":
                            return function(t, e = 20) {
                                const n = new p(t, {});
                                return n.imply("meridiem", r.PM), n.imply("hour", e), n
                            }(t.reference);
                        case "midnight":
                            return Rt(t.reference);
                        case "morning":
                            return function(t, e = 6) {
                                const n = new p(t, {});
                                return n.imply("meridiem", r.AM), n.imply("hour", e), n.imply("minute", 0), n.imply("second", 0), n.imply("millisecond", 0), n
                            }(t.reference);
                        case "noon":
                        case "midday":
                            return function(t) {
                                const e = new p(t, {});
                                return e.imply("meridiem", r.AM), e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("millisecond", 0), e
                            }(t.reference)
                    }
                    return null
                }
            }

            function Nt(t, e, n) {
                const r = function(t, e, n) {
                    const r = t.getDay();
                    switch (n) {
                        case "this":
                            return Yt(t, e);
                        case "last":
                            return It(t, e);
                        case "next":
                            return r == s.SUNDAY ? e == s.SUNDAY ? 7 : e : r == s.SATURDAY ? e == s.SATURDAY ? 7 : e == s.SUNDAY ? 8 : 1 + e : e < r && e != s.SUNDAY ? Yt(t, e) : Yt(t, e) + 7
                    }
                    return function(t, e) {
                        const n = It(t, e),
                            r = Yt(t, e);
                        return r < -n ? r : n
                    }(t, e)
                }(t.getDateWithAdjustedTimezone(), e, n);
                let i = new p(t);
                return i = function(t, e) {
                    const n = t.clone();
                    let r = t.dayjs();
                    for (const s in e) r = r.add(e[s], s);
                    return ("day" in e || "d" in e || "week" in e || "month" in e || "year" in e) && (n.imply("day", r.date()), n.imply("month", r.month() + 1), n.imply("year", r.year())), ("second" in e || "minute" in e || "hour" in e) && (n.imply("second", r.second()), n.imply("minute", r.minute()), n.imply("hour", r.hour())), n
                }(i, {
                    day: r
                }), i.assign("weekday", e), i
            }

            function Yt(t, e) {
                let n = e - t.getDay();
                return n < 0 && (n += 7), n
            }

            function It(t, e) {
                let n = e - t.getDay();
                return n >= 0 && (n -= 7), n
            }
            const Ut = new RegExp(`(?:(?:\\,|\\(|\\\uff08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${x(D)})(?:\\s*(?:\\,|\\)|\\\uff09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i");
            class zt extends H {
                innerPattern() {
                    return Ut
                }
                innerExtract(t, e) {
                    const n = e[2].toLowerCase(),
                        r = D[n],
                        s = e[1],
                        i = e[3];
                    let a = s || i;
                    a = a || "", a = a.toLowerCase();
                    let o = null;
                    return "last" == a || "past" == a ? o = "last" : "next" == a ? o = "next" : "this" == a && (o = "this"), Nt(t.reference, r, o)
                }
            }
            const Ft = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${x(O)})(?=\\s*)(?=\\W|$)`, "i");
            class Vt extends H {
                innerPattern() {
                    return Ft
                }
                innerExtract(t, e) {
                    const n = e[1].toLowerCase(),
                        r = e[2].toLowerCase(),
                        s = O[r];
                    if ("next" == n || n.startsWith("after")) {
                        const e = {};
                        return e[s] = 1, p.createRelativeFromReference(t.reference, e)
                    }
                    if ("last" == n || "past" == n) {
                        const e = {};
                        return e[s] = -1, p.createRelativeFromReference(t.reference, e)
                    }
                    const i = t.createParsingComponents();
                    let a = o(t.reference.instant);
                    return r.match(/week/i) ? (a = a.add(-a.get("d"), "d"), i.imply("day", a.date()), i.imply("month", a.month() + 1), i.imply("year", a.year())) : r.match(/month/i) ? (a = a.add(1 - a.date(), "d"), i.imply("day", a.date()), i.assign("year", a.year()), i.assign("month", a.month() + 1)) : r.match(/year/i) && (a = a.add(1 - a.date(), "d"), a = a.add(-a.month(), "month"), i.imply("day", a.date()), i.imply("month", a.month() + 1), i.assign("year", a.year())), i
                }
            }
            const Ht = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i");
            class Lt {
                constructor(t) {
                    this.groupNumberMonth = t ? 3 : 2, this.groupNumberDay = t ? 2 : 3
                }
                pattern() {
                    return Ht
                }
                extract(t, e) {
                    if (0 == e[1].length && e.index > 0 && e.index < t.text.length) {
                        const n = t.text[e.index - 1];
                        if (n >= "0" && n <= "9") return
                    }
                    const n = e.index + e[1].length,
                        r = e[0].substr(e[1].length, e[0].length - e[1].length - e[5].length);
                    if (r.match(/^\d\.\d$/) || r.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) return;
                    if (!e[4] && e[0].indexOf("/") < 0) return;
                    const s = t.createParsingResult(n, r);
                    let i = parseInt(e[this.groupNumberMonth]),
                        a = parseInt(e[this.groupNumberDay]);
                    if ((i < 1 || i > 12) && i > 12) {
                        if (!(a >= 1 && a <= 12 && i <= 31)) return null;
                        [a, i] = [i, a]
                    }
                    if (a < 1 || a > 31) return null;
                    if (s.start.assign("day", a), s.start.assign("month", i), e[4]) {
                        const t = $(parseInt(e[4]));
                        s.start.assign("year", t)
                    } else {
                        const e = A(t.refDate, a, i);
                        s.start.imply("year", e)
                    }
                    return s
                }
            }
            const Bt = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${U})(?=\\W|$)`, "i"),
                jt = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${z})(?=\\W|$)`, "i");
            class _t extends H {
                constructor(t = !0) {
                    super(), this.allowAbbreviations = t
                }
                innerPattern() {
                    return this.allowAbbreviations ? Bt : jt
                }
                innerExtract(t, e) {
                    const n = e[1].toLowerCase();
                    let r = F(e[2]);
                    switch (n) {
                        case "last":
                        case "past":
                        case "-":
                            r = st(r)
                    }
                    return p.createRelativeFromReference(t.reference, r)
                }
            }

            function Gt(t) {
                return null != t.text.match(/\s+(before|from)$/i)
            }
            class Kt extends dt {
                patternBetween() {
                    return /^\s*$/i
                }
                shouldMergeResults(t, e, n) {
                    return !!t.match(this.patternBetween()) && (!(!Gt(e) && (r = e, null == r.text.match(/\s+(after|since)$/i))) && (!!n.start.get("day") && !!n.start.get("month") && !!n.start.get("year")));
                    var r
                }
                mergeResults(t, e, n) {
                    let r = F(e.text);
                    Gt(e) && (r = st(r));
                    const s = p.createRelativeFromReference(new y(n.start.date()), r);
                    return new w(n.reference, e.index, `${e.text}${t}${n.text}`, s)
                }
            }
            class Jt {
                createCasualConfiguration(t = !1) {
                    const e = this.createConfiguration(!1, t);
                    return e.parsers.unshift(new bt), e.parsers.unshift(new Wt), e.parsers.unshift(new Q), e.parsers.unshift(new Vt), e.parsers.unshift(new _t), e
                }
                createConfiguration(t = !0, e = !1) {
                    const n = function(t, e = !1) {
                        return t.parsers.unshift(new Ct), t.refiners.unshift(new Et), t.refiners.unshift(new $t), t.refiners.unshift(new At), t.refiners.push(new Tt), t.refiners.push(new At), t.refiners.push(new Dt), t.refiners.push(new Mt(e)), t
                    }({
                        parsers: [new Lt(e), new _(t), new K, new Z, new zt, new tt, new nt, new rt(t), new ot(t), new lt(t)],
                        refiners: [new Kt, new pt]
                    }, t);
                    return n.refiners.push(new pt), n.refiners.push(new ft), n
                }
            }
            class Zt {
                constructor(t) {
                    this.defaultConfig = new Jt, t = t || this.defaultConfig.createCasualConfiguration(), this.parsers = [...t.parsers], this.refiners = [...t.refiners]
                }
                clone() {
                    return new Zt({
                        parsers: [...this.parsers],
                        refiners: [...this.refiners]
                    })
                }
                parseDate(t, e, n) {
                    const r = this.parse(t, e, n);
                    return r.length > 0 ? r[0].start.date() : null
                }
                parse(t, e, n) {
                    const r = new qt(t, e, n);
                    let s = [];
                    return this.parsers.forEach((t => {
                        const e = Zt.executeParser(r, t);
                        s = s.concat(e)
                    })), s.sort(((t, e) => t.index - e.index)), this.refiners.forEach((function(t) {
                        s = t.refine(r, s)
                    })), s
                }
                static executeParser(t, e) {
                    const n = [],
                        r = e.pattern(t),
                        s = t.text;
                    let i = t.text,
                        a = r.exec(i);
                    for (; a;) {
                        const o = a.index + s.length - i.length;
                        a.index = o;
                        const u = e.extract(t, a);
                        if (!u) {
                            i = s.substring(a.index + 1), a = r.exec(i);
                            continue
                        }
                        let c = null;
                        u instanceof w ? c = u : u instanceof p ? (c = t.createParsingResult(a.index, a[0]), c.start = u) : c = t.createParsingResult(a.index, a[0], u);
                        const l = c.index,
                            d = c.text;
                        t.debug((() => console.log(`${e.constructor.name} extracted (at index=${l}) '${d}'`))), n.push(c), i = s.substring(l + d.length), a = r.exec(i)
                    }
                    return n
                }
            }
            class qt {
                constructor(t, e, n) {
                    this.text = t, this.reference = new y(e), this.option = n ? ? {}, this.refDate = this.reference.instant
                }
                createParsingComponents(t) {
                    return t instanceof p ? t : new p(this.reference, t)
                }
                createParsingResult(t, e, n, r) {
                    const s = "string" === typeof e ? e : this.text.substring(t, e),
                        i = n ? this.createParsingComponents(n) : null,
                        a = r ? this.createParsingComponents(r) : null;
                    return new w(this.reference, t, s, i, a)
                }
                debug(t) {
                    if (this.option.debug)
                        if (this.option.debug instanceof Function) this.option.debug(t);
                        else {
                            this.option.debug.debug(t)
                        }
                }
            }
            const Qt = new Jt,
                Xt = new Zt(Qt.createCasualConfiguration(!1));
            new Zt(Qt.createConfiguration(!0, !1)), new Zt(Qt.createConfiguration(!1, !0));
            const te = Xt;

            function ee(t, e, n) {
                return te.parse(t, e, n)
            }
        }
    }
]);