"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2227], {
        29986: function(e, t, n) {
            var r, a = n(70079);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, o.apply(this, arguments)
            }
            t.Z = function(e) {
                return a.createElement("svg", o({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    viewBox: "0 0 24 24"
                }, e), r || (r = a.createElement("path", {
                    d: "M20 6 9 17l-5-5"
                })))
            }
        },
        4226: function(e, t, n) {
            var r, a = n(70079);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, o.apply(this, arguments)
            }
            t.Z = function(e) {
                return a.createElement("svg", o({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    viewBox: "0 0 24 24"
                }, e), r || (r = a.createElement("path", {
                    d: "M18 6 6 18M6 6l12 12"
                })))
            }
        },
        11684: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return i
                }
            });
            var r = n(67154),
                a = n(89225),
                o = (n(70079), n(35250)),
                i = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.tag,
                        s = e.onClick;
                    return (0, o.jsx)(r.Z, {
                        as: i || "div",
                        options: {
                            className: n,
                            events: s ? {
                                click: s
                            } : void 0,
                            target: function(e) {
                                try {
                                    if ("lu.ma" === new URL(e).hostname) return "_self"
                                } catch (t) {}
                                return "_blank"
                            },
                            format: function(e, t) {
                                return "url" === t && (e = a.ZP.toASCII(e)).length > 50 && (e = e.slice(0, 50) + "\u2026"), e
                            }
                        },
                        children: t
                    })
                }
        },
        52227: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return _
                },
                N: function() {
                    return w
                }
            });
            var r = n(91050),
                a = n(77759),
                o = n(55989),
                i = n(45498),
                s = n(80433),
                c = n(29986),
                l = n(4226),
                u = n(26372),
                d = n.n(u),
                m = n(22802),
                f = n(70079),
                p = n(44327),
                v = n(53132),
                g = n(94612),
                h = n(35250),
                x = ["name", "label", "className", "helperText", "type", "size", "placeholder", "autoFocus", "monospace", "textAlign", "disabled", "required", "accessoryText", "accessoryTextPlacement", "statusIndicator", "inputProps", "setValueTransformer", "onChange", "displayValueTransformer", "rounded", "validate", "suppress1Password", "id"];

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = (0, f.forwardRef)((function(e, t) {
                    var n, r = e.label,
                        a = e.placeholder,
                        i = e.id,
                        s = e.className,
                        u = e.value,
                        m = e.onChange,
                        g = e.size,
                        x = void 0 === g ? "medium" : g,
                        b = e.type,
                        w = void 0 === b ? "text" : b,
                        _ = e.disabled,
                        k = e.rounded,
                        j = e.autoFocus,
                        z = e.variant,
                        N = void 0 === z ? "outline" : z,
                        C = e.monospace,
                        T = void 0 !== C && C,
                        P = e.textAlign,
                        O = void 0 === P ? "left" : P,
                        I = e.statusIndicator,
                        E = e.error,
                        A = e.helperText,
                        B = e.errorText,
                        Z = e.accessoryText,
                        F = e.accessoryTextPlacement,
                        L = e.suppress1Password,
                        q = e.inputProps,
                        M = (0, f.useRef)(null);
                    (0, f.useEffect)((function() {
                        var e;
                        j && (null === (e = M.current) || void 0 === e || e.focus())
                    }), [j]), (0, f.useImperativeHandle)(t, (function() {
                        return {
                            focus: function() {
                                var e;
                                null === (e = M.current) || void 0 === e || e.focus()
                            }
                        }
                    })), n = "name" === w ? {
                        type: "text",
                        autoCapitalize: "words",
                        autoCorrect: "off",
                        spellCheck: "false"
                    } : "url" === w ? {
                        type: "url",
                        autoCapitalize: "off",
                        autoCorrect: "off",
                        spellCheck: "false"
                    } : "title" === w ? {
                        type: "text",
                        autoCapitalize: "sentences"
                    } : "token" === w || "eth_address" === w ? {
                        type: "text",
                        autoCorrect: "off",
                        spellCheck: "false"
                    } : "numeric" === w ? {
                        type: "number",
                        inputMode: "numeric"
                    } : "decimal" === w ? {
                        type: "text",
                        inputMode: "decimal"
                    } : {
                        type: w
                    }, L && (n["data-1p-ignore"] = !0);
                    var D = E && B ? B : A;
                    return (0, h.jsx)(p.p, {
                        label: r,
                        className: s,
                        size: x,
                        rounded: k,
                        variant: N,
                        error: E,
                        helperText: D,
                        accessoryText: Z,
                        accessoryTextPlacement: F,
                        children: (0, h.jsxs)("div", {
                            className: d()("input-inner-wrapper flex-1", x),
                            children: [(0, h.jsx)("input", y(y({
                                id: i,
                                ref: M,
                                placeholder: a,
                                disabled: _,
                                value: u,
                                onChange: function(e) {
                                    return m(e.target.value)
                                },
                                onBlur: function(e) {
                                    if ("url" === w && e.target.value) {
                                        var t = (0, o.D5)(e.target.value);
                                        t && t !== u && m(t)
                                    }
                                }
                            }, q || {}), {}, {
                                className: d()("luma-input", null === q || void 0 === q ? void 0 : q.className, {
                                    monospace: T,
                                    "align-right": "right" === O,
                                    "has-indicator": I
                                })
                            }, n)), (0, h.jsxs)("div", {
                                className: d()("indicator", I, {
                                    invisible: !I
                                }),
                                children: ["loading" === I && (0, h.jsx)(v.$, {}), "success" === I && (0, h.jsx)(c.Z, {}), "error" === I && (0, h.jsx)(l.Z, {})]
                            })]
                        })
                    })
                })),
                _ = (0, f.forwardRef)((function(e, t) {
                    var n = e.name,
                        a = e.label,
                        o = e.className,
                        c = e.helperText,
                        l = e.type,
                        u = void 0 === l ? "text" : l,
                        d = e.size,
                        f = void 0 === d ? "medium" : d,
                        p = e.placeholder,
                        v = e.autoFocus,
                        b = e.monospace,
                        _ = e.textAlign,
                        k = e.disabled,
                        j = e.required,
                        z = e.accessoryText,
                        N = e.accessoryTextPlacement,
                        C = void 0 === N ? "left" : N,
                        T = e.statusIndicator,
                        P = e.inputProps,
                        O = e.setValueTransformer,
                        I = e.onChange,
                        E = e.displayValueTransformer,
                        A = e.rounded,
                        B = e.validate,
                        Z = e.suppress1Password,
                        F = e.id,
                        L = (0, r.Z)(e, x),
                        q = (0, m.u6)(),
                        M = q.values,
                        D = q.setFieldValue,
                        R = q.isSubmitting,
                        S = q.submitCount,
                        $ = q.validateField;
                    return (0, h.jsx)(m.gN, {
                        name: n,
                        validate: B || function(e) {
                            if ((null == e || "" === e) && j) return "This field is required.";
                            if (null != e) {
                                if ("url" === u) {
                                    if (!e && !j) return;
                                    return (0, g.j)(e) ? void 0 : "Please enter a valid url."
                                }
                                return "email" !== u || (0, i.v)(e) ? "eth_address" !== u || s.q$.test(e) ? void 0 : "Please enter a valid Ethereum address." : "Please enter a valid email address."
                            }
                        },
                        children: function(e) {
                            var r = e.meta,
                                i = e.field,
                                s = Boolean(i.value !== r.initialValue && r.touched),
                                l = Boolean(r.error && (S || s));
                            return (0, h.jsx)(w, y(y({
                                ref: t
                            }, L), {}, {
                                id: F,
                                label: a,
                                className: o,
                                type: u,
                                size: f,
                                placeholder: p,
                                monospace: b,
                                textAlign: _,
                                accessoryText: z,
                                accessoryTextPlacement: C,
                                statusIndicator: T,
                                disabled: k || R,
                                autoFocus: v,
                                error: l,
                                helperText: l ? r.error : c,
                                value: function() {
                                    var e = (0, m.u9)(M, n) || "";
                                    return E && (e = E(e)), e
                                }(),
                                onChange: null !== I && void 0 !== I ? I : function(e) {
                                    O && (e = O(e)), D(n, e)
                                },
                                inputProps: y({
                                    name: n,
                                    onBlur: function(e) {
                                        var t = (0, m.u9)(M, n) || "";
                                        "url" === u && t && (t.toLowerCase().startsWith("http") || (D(n, "https://" + t), setTimeout((function() {
                                            return $(n)
                                        }), 1)));
                                        i.onBlur(e)
                                    }
                                }, P),
                                rounded: A,
                                suppress1Password: Z
                            }))
                        }
                    })
                }))
        },
        69161: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return s
                }
            });
            var r = n(26372),
                a = n.n(r),
                o = (n(70079), n(11684)),
                i = n(35250),
                s = function(e) {
                    var t = e.text,
                        n = e.size,
                        r = void 0 === n ? "medium" : n,
                        s = e.className,
                        c = e.noMargin,
                        l = e.focused,
                        u = e.htmlFor;
                    return t ? (0, i.jsx)("label", {
                        className: a()("lux-input-label", r, s, {
                            "no-margin": c,
                            focused: l,
                            clickable: u
                        }),
                        htmlFor: u,
                        children: "string" === typeof t ? (0, i.jsx)(o.Q, {
                            text: t
                        }) : t
                    }) : null
                }
        },
        44327: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return s
                }
            });
            var r = n(26372),
                a = n.n(r),
                o = (n(70079), n(69161)),
                i = n(35250),
                s = function(e) {
                    var t = e.label,
                        n = e.className,
                        r = e.children,
                        s = e.size,
                        c = e.rounded,
                        l = e.variant,
                        u = void 0 === l ? "outline" : l,
                        d = e.error,
                        m = e.helperText,
                        f = e.accessoryText,
                        p = e.accessoryTextPlacement,
                        v = void 0 === p ? "left" : p;
                    return f || (v = null), (0, i.jsxs)("div", {
                        className: a()("lux-input-wrapper", s, u, n, {
                            error: d,
                            round: c,
                            "accessory-left": "left" === v,
                            "accessory-right": "right" === v
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: "inner-wrapper",
                            children: [(0, i.jsx)(o.U, {
                                text: t,
                                size: s
                            }), (0, i.jsx)("div", {
                                className: "input-wrapper flex-baseline",
                                children: (0, i.jsxs)("div", {
                                    className: "flex-center flex-1",
                                    children: [(0, i.jsx)("div", {
                                        className: "zero-width-filler",
                                        children: "\u200b"
                                    }), "left" === v && (0, i.jsx)("div", {
                                        className: "accessory-text flex-center",
                                        children: f
                                    }), r, "right" === v && (0, i.jsx)("div", {
                                        className: "accessory-text flex-center",
                                        children: f
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: a()("helper-text", {
                                show: m
                            }),
                            children: m
                        })]
                    })
                }
        },
        94612: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return a
                },
                j: function() {
                    return o
                }
            });
            var r = n(12860),
                a = new Set(r),
                o = function(e) {
                    if (!e) return !1;
                    try {
                        var t = new URL(e).hostname.split(".");
                        if (t.length < 2) return !1;
                        var n = t[t.length - 1];
                        return a.has(n)
                    } catch (r) {
                        return !1
                    }
                }
        },
        45498: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return s
                },
                v: function() {
                    return i
                }
            });
            var r = n(60889),
                a = n(12860),
                o = new Set(a),
                i = function(e) {
                    if (!r.G(e)) return !1;
                    var t = e.split(".").pop();
                    return void 0 !== t && o.has(t.toLowerCase())
                },
                s = function(e) {
                    return e.trim().toLowerCase()
                }
        },
        80433: function(e, t, n) {
            n.d(t, {
                kJ: function() {
                    return r
                },
                q$: function() {
                    return s
                }
            });
            var r, a = n(10765),
                o = n(85170),
                i = n(93598),
                s = /^0x[0-9a-fA-F]{40}$/,
                c = /^0x[0-9a-fA-F]{64}$/;
            ! function(e) {
                var t, n;
                ! function(e) {
                    e.CoinbaseWallet = "Coinbase Wallet", e.Metamask = "Metamask"
                }(t || (t = {})), e.WalletType = t,
                    function(e) {
                        e[e.Homestead = 1] = "Homestead", e[e.Goerli = 5] = "Goerli"
                    }(n || (n = {})), e.Chain = n;
                e.ChainZ = o.z.nativeEnum(n), e.ETH_DECIMALS = 18, e.ETH_SYMBOL = "ETH";
                var l, u, d = e.AddressZ = o.z.string().regex(s);
                e.HashZ = o.z.string().regex(c), e.abbreviateHash = function(e) {
                    return e.length <= 10 ? e : "".concat(e.slice(0, 5), "\u2026").concat(e.slice(-4))
                }, e.abbreviateAddress = function(e) {
                    return e.length <= 10 ? e : "".concat(e.slice(0, 5), "\u2026").concat(e.slice(-4))
                };
                (u = l || (l = e.message || (e.message = {}))).signIn = function(e) {
                    var t = e.appName,
                        n = e.domain,
                        r = e.address,
                        a = e.nonce,
                        o = e.requestedAt;
                    return "".concat(null !== t && void 0 !== t ? t : n, " would like you to sign in with your Ethereum account:\n      ").concat(r, "\n\n      Domain: ").concat(n, "\n      Requested At: ").concat(o.toUTC().toISO(), "\n      Nonce: ").concat(a).split("\n").map((function(e) {
                        return e.trim()
                    })).join("\n")
                }, u.parseSignIn = function(e) {
                    var t = e.message,
                        n = "^(?<appName>.{0,100}) would like you to sign in with your Ethereum account:\n        (?<address>0x[0-9a-fA-F]{40})\n\n        Domain: (?<domain>[A-Za-z0-9.\\-]+)\n        Requested At: (?<requestedAt>.+)\n        Nonce: (?<nonce>[A-Za-z0-9-.]+)$".split("\n").map((function(e) {
                            return e.trim()
                        })).join("\n"),
                        r = new RegExp(n),
                        o = t.match(r);
                    if (!o || !o.groups) throw new Error("Invalid message format.");
                    var i = o.groups,
                        s = i.appName,
                        c = i.domain,
                        l = i.address,
                        u = i.nonce,
                        d = i.requestedAt;
                    return {
                        appName: s,
                        domain: c,
                        address: l,
                        nonce: u,
                        requestedAt: a.ou.fromISO(d)
                    }
                };
                var m, f, p = e.Erc20ContractInfoZ = o.z.object({
                        type: o.z.literal("erc-20"),
                        contract_name: o.z.string().nullable(),
                        contract_address: d,
                        decimals: o.z.number(),
                        symbol: o.z.string().nullable(),
                        image: o.z.string().nullable().optional()
                    }),
                    v = e.Erc20TokenBalanceZ = p.extend({
                        owner_address: d,
                        owner_balance: o.z.string()
                    }),
                    g = e.Erc721ContractInfoZ = o.z.object({
                        type: o.z.literal("erc-721"),
                        contract_name: o.z.string(),
                        contract_address: d
                    }),
                    h = e.Erc721TokenZ = g.extend({
                        owner_address: d,
                        token_id: o.z.string().regex(/^\d+$/),
                        token_name: o.z.string().nullable(),
                        image_url: o.z.string().url().nullable(),
                        external_url: o.z.string().url().nullable(),
                        opensea_url: o.z.string().url()
                    });
                o.z.union([v, h]), e.TokenRequirementZ = o.z.union([o.z.object({
                    chain: o.z.literal("ethereum"),
                    type: o.z.literal("erc-721"),
                    contract: g,
                    min_token_id: o.z.string().regex(/^\d+$/).nullable().optional(),
                    max_token_id: o.z.string().regex(/^\d+$/).nullable().optional()
                }).refine((function(e) {
                    return null == e.min_token_id || null == e.max_token_id || BigInt(e.min_token_id) <= BigInt(e.max_token_id)
                })), o.z.object({
                    chain: o.z.literal("ethereum"),
                    type: o.z.literal("erc-20"),
                    contract: p,
                    min_token_balance: o.z.string().regex(/^\d+$/).nullable().optional()
                })]), e.tokenPassesRequirement = function(e) {
                    var t = e.token,
                        n = e.filter;
                    return t.type === n.contract.type && ("erc-721" === t.type && "erc-721" === n.type ? t.contract_address.toLowerCase() === n.contract.contract_address.toLowerCase() && (!(n.min_token_id && BigInt(n.min_token_id) > BigInt(t.token_id)) && !(n.max_token_id && BigInt(n.max_token_id) < BigInt(t.token_id))) : "erc-20" === t.type && "erc-20" === n.type && (t.contract_address.toLowerCase() === n.contract.contract_address.toLowerCase() && (!n.min_token_balance || m.toBigInt({
                        amount: n.min_token_balance
                    }) <= BigInt(t.owner_balance))))
                }, e.sanitizeTokenFilters = function(e) {
                    return e.filters.map((function(e) {
                        var t = r.TokenRequirementZ.safeParse(e);
                        return t.success ? t.data : null
                    })).filter((function(e) {
                        return null !== e
                    }))
                };
                (f = m || (m = e.Erc20TokenAmount || (e.Erc20TokenAmount = {}))).toDisplay = function(e) {
                    var t = e.amount,
                        n = e.decimals,
                        r = e.symbol,
                        a = (0, i.u)({
                            num: Number(t) / Math.pow(10, n)
                        });
                    return r ? "".concat(a, " ").concat(r) : a
                }, f.toBigInt = function(e) {
                    var t = e.amount;
                    return BigInt(t)
                }, f.toStorage = function(e) {
                    var t = e.display,
                        n = e.decimals;
                    return (Number(t) * Math.pow(10, n)).toFixed(0)
                }
            }(r || (r = {}))
        },
        93598: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return r
                }
            });
            var r = function(e) {
                var t, n, r = e.num,
                    a = e.numDecimals,
                    o = e.decimalMode,
                    i = void 0 === o ? "max" : o,
                    s = e.abbreviated,
                    c = void 0 !== s && s,
                    l = e.locale;
                return n = "bigint" === typeof r ? Number(r) : "string" === typeof r ? parseFloat(r) : Number(r), null !== (t = a) && void 0 !== t || (a = function(e) {
                    var t = Math.abs(e);
                    return t >= 1e3 ? 0 : t >= 100 ? 1 : t >= 10 ? 2 : t >= 1 ? 3 : t >= 1 ? 4 : t >= .01 ? 5 : t >= .001 ? 6 : 7
                }(Number(n))), new Intl.NumberFormat(l, {
                    maximumFractionDigits: a,
                    minimumFractionDigits: "always" === i ? a : void 0,
                    notation: !0 === c ? "compact" : void 0
                }).format(n)
            }
        }
    }
]);