"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3433], {
        8233: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return k
                }
            });
            var r = n(77759),
                a = n(69414),
                o = n(44605),
                s = n.n(o),
                i = n(31789),
                c = n.n(i),
                l = n(61488),
                u = n(36149),
                d = n(11684),
                p = n(65374),
                m = n(22380),
                f = n(46855),
                h = n(10765),
                x = (n(70079), n(94189)),
                j = n(27937),
                v = n(41726),
                b = n(71843),
                g = n(97882),
                w = n(21808),
                y = n(35250);

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var k = function(e) {
                    var t = e.info,
                        n = e.isHost,
                        r = e.onComment,
                        o = (0, x.SE)().user,
                        i = (0, m.m)(),
                        _ = t.comment,
                        k = t.author,
                        P = N({
                            date: t.comment.created_at,
                            now: i
                        }),
                        C = n || (null === o || void 0 === o ? void 0 : o.api_id) === t.author.api_id,
                        S = (0, p.X)();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsxs)("div", {
                            className: "jsx-4218399960 comment flex-start gap-2",
                            children: [(0, y.jsx)("div", {
                                className: "jsx-4218399960 avatar",
                                children: (0, y.jsx)(v.q, {
                                    url: k.avatar_url,
                                    rem: 2
                                })
                            }), (0, y.jsx)("div", {
                                className: "jsx-4218399960 flex-1 min-width-0",
                                children: (0, y.jsxs)("div", {
                                    className: "jsx-4218399960 chat-bubble",
                                    children: [(0, y.jsxs)("div", {
                                        className: "jsx-4218399960 name flex-center gap-2 spread min-width-0 fs-sm",
                                        children: [(0, y.jsxs)("div", {
                                            className: "jsx-4218399960 text-ellipses flex-baseline name-inner gap-1",
                                            children: [(0, y.jsx)("span", {
                                                className: "jsx-4218399960 fw-bold text-ellipses",
                                                children: k.name || "Anonymous"
                                            }), t.author_role && (0, y.jsx)("span", {
                                                className: "jsx-4218399960 text-tertiary-alpha role",
                                                children: " \xb7 ".concat(t.author_role)
                                            }), (0, y.jsx)(u.d, {
                                                children: (0, y.jsx)("time", {
                                                    title: h.ou.fromISO(_.created_at).toLocaleString(h.ou.DATETIME_FULL),
                                                    className: "jsx-4218399960 text-tertiary-alpha",
                                                    children: " \xb7 ".concat(P)
                                                })
                                            })]
                                        }), C && (0, y.jsx)("div", {
                                            className: "jsx-4218399960 more-actions flex-center-center",
                                            children: (0, y.jsx)(j.S, {
                                                options: [{
                                                    key: "delete",
                                                    icon: (0, y.jsx)(f.Z, {}),
                                                    name: "Delete",
                                                    onClick: S.onShow
                                                }],
                                                className: "text-tertiary-alpha"
                                            })
                                        })]
                                    }), (0, y.jsx)("div", {
                                        className: "jsx-4218399960 pre-line",
                                        children: (0, y.jsx)(d.Q, {
                                            text: _.message.trim()
                                        })
                                    })]
                                })
                            })]
                        }), (0, y.jsx)(b.f, O(O({}, S), {}, {
                            text: "Are you sure you want to delete this comment?",
                            title: "Delete Comment",
                            onConfirm: (0, a.Z)(c().mark((function e() {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, g.TI)((0, a.Z)(c().mark((function e() {
                                                return c().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, w.X.post("/comment/update", {
                                                                comment_api_id: _.api_id,
                                                                deleted: !0
                                                            });
                                                        case 2:
                                                            S.onHide(), r({
                                                                info: O(O({}, t), {}, {
                                                                    comment: O(O({}, t.comment), {}, {
                                                                        deleted_at: h.ou.now().toISO()
                                                                    })
                                                                }),
                                                                type: l.Vn.CommentUpdated
                                                            });
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), {
                                                error: "There was a problem deleting your comment."
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        })), (0, y.jsx)(s(), {
                            id: "4218399960",
                            children: [".comment.jsx-4218399960{margin:1rem var(--modal-horizontal-padding);}", ".comment.jsx-4218399960 .more-actions.jsx-4218399960 .lux-menu-trigger-wrapper,.comment.jsx-4218399960 .more-actions.jsx-4218399960 .lux-menu-trigger-wrapper.menu-open{opacity:1;-webkit-transition:var(--transition);transition:var(--transition);}", "@media (hover:hover){.comment.jsx-4218399960 .more-actions.jsx-4218399960 .lux-menu-trigger-wrapper{opacity:0;}}", ".comment.jsx-4218399960:hover .more-actions.jsx-4218399960 .lux-menu-trigger-wrapper{opacity:1;}", ".avatar.jsx-4218399960{margin-top:0.125rem;}", ".chat-bubble.jsx-4218399960{border-radius:1.25rem;background:var(--secondary-bg-color);padding:0.5rem 0.875rem;display:inline-block;max-width:100%;}", ".pre-line.jsx-4218399960{margin-top:0.125rem;word-break:break-word;}"]
                        })]
                    })
                },
                N = function(e) {
                    var t = e.date,
                        n = e.now,
                        r = h.ou.fromISO(t),
                        a = n.diff(r);
                    return a.as("minutes") < 2 ? "now" : a.as("hours") < 1 ? a.as("minutes").toFixed(0) + "m" : a.as("hours") < 24 ? a.as("hours").toFixed(0) + "h" : a.as("days") < 14 ? a.as("days").toFixed(0) + "d" : a.as("weeks").toFixed(0) + "w"
                }
        },
        42816: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return w
                }
            });
            var r = n(69414),
                a = n(77759),
                o = n(31789),
                s = n.n(o),
                i = n(61488),
                c = n(22802),
                l = n(97882),
                u = n(21808),
                d = n(60034),
                p = n(78138),
                m = n(70079),
                f = n(94189),
                h = n(64689),
                x = n(65374),
                j = n(94727),
                v = n(35250);

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

            function g(e) {
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
            var w = function(e) {
                var t = e.baseComment,
                    n = e.onComment,
                    a = e.autoFocus,
                    o = (0, f.SE)().user,
                    b = (0, m.useRef)(null),
                    w = (0, x.X)();
                return (0, m.useEffect)((function() {
                    var e, t = "ontouchstart" in window;
                    a && !t && (null === (e = b.current) || void 0 === e || e.focus())
                }), [a]), null !== o && void 0 !== o && o.name ? (0, v.jsx)(c.J9, {
                    initialValues: {
                        message: ""
                    },
                    onSubmit: function() {
                        var e = (0, r.Z)(s().mark((function e(a, o) {
                            var c, d;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (c = a.message, d = o.resetForm, c) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.next = 6, (0, l.TI)((0, r.Z)(s().mark((function e() {
                                            var r, a;
                                            return s().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, u.X.post("/comment/create", {
                                                            owner_type: t.owner_type,
                                                            owner_api_id: t.owner_api_id,
                                                            message: c
                                                        });
                                                    case 2:
                                                        r = e.sent, a = r.comment, n({
                                                            info: a,
                                                            type: i.Vn.CommentUpdated
                                                        }), d({
                                                            values: {
                                                                message: ""
                                                            }
                                                        }), setTimeout((function() {
                                                            var e;
                                                            return null === (e = b.current) || void 0 === e ? void 0 : e.focus()
                                                        }), 1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))), {
                                            error: "There was a problem submitting your comment."
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    children: function(e) {
                        var t = e.submitForm;
                        return (0, v.jsx)(c.l0, {
                            children: (0, v.jsxs)("div", {
                                className: "flex-end gap-2",
                                children: [(0, v.jsx)(d.b, {
                                    ref: b,
                                    minRows: 1,
                                    name: "message",
                                    className: "flex-1",
                                    placeholder: "Leave a comment\u2026",
                                    onKeyDown: function(e) {
                                        "Enter" !== e.key || e.shiftKey || e.ctrlKey || (e.preventDefault(), t())
                                    }
                                }), (0, v.jsx)(p.w, {
                                    label: "Comment"
                                })]
                            })
                        })
                    }
                }) : (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsxs)("div", {
                        className: "flex-center gap-3",
                        children: [(0, v.jsx)("div", {
                            className: "text-secondary-alpha fs-sm",
                            children: "Please complete your profile to comment on this post."
                        }), (0, v.jsx)(h.C, {
                            label: "Complete Profile",
                            size: "small",
                            onClick: w.onShow
                        })]
                    }), (0, v.jsx)(j.O, g(g({}, w), {}, {
                        desc: "Enter your name and avatar to let people know who you are."
                    }))]
                })
            }
        },
        92970: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return R
                }
            });
            var r = n(77759),
                a = n(69414),
                o = n(44605),
                s = n.n(o),
                i = n(31789),
                c = n.n(i),
                l = n(60380),
                u = n(78846),
                d = n(37893),
                p = n(50033),
                m = n(45027),
                f = n(36149),
                h = n(65086),
                x = n(69161),
                j = n(48781),
                v = n(42860),
                b = n(78138),
                g = n(12009),
                w = n(59471),
                y = n(18950),
                _ = n(65374),
                O = n(46855),
                k = n(27752),
                N = n(26372),
                P = n.n(N),
                C = n(22802),
                S = n(10765),
                D = (n(70079), n(27937)),
                E = n(41726),
                F = n(71843),
                T = n(71131),
                Z = n(59191),
                A = n(48099),
                I = n(21808),
                V = n(97882),
                q = n(35250);

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var R = function(e) {
                    var t = e.info,
                        n = e.isHost,
                        r = e.onDelete,
                        o = e.refresh,
                        i = t.author,
                        m = t.post,
                        g = (0, _.X)(),
                        N = (0, _.X)();
                    return (0, q.jsxs)(q.Fragment, {
                        children: [(0, q.jsxs)("div", {
                            className: "jsx-181475685",
                            children: [(0, q.jsxs)("div", {
                                className: "jsx-181475685 flex-start gap-2 spread",
                                children: [(0, q.jsxs)("div", {
                                    className: "jsx-181475685 flex-center mb-3 gap-2",
                                    children: [(0, q.jsx)(E.q, {
                                        url: i.avatar_url,
                                        rem: 2
                                    }), (0, q.jsxs)("div", {
                                        className: "jsx-181475685",
                                        children: [(0, q.jsxs)("div", {
                                            className: "jsx-181475685 flex-center gap-2",
                                            children: [(0, q.jsx)("div", {
                                                className: "jsx-181475685 fw-medium",
                                                children: i.name || "Anonymous"
                                            }), t.author_role && (0, q.jsx)(w.D, {
                                                label: t.author_role,
                                                size: "tiny",
                                                rounded: !1
                                            })]
                                        }), (0, q.jsxs)("div", {
                                            className: "jsx-181475685 text-tertiary-alpha fs-xs flex-center flex-wrap gap-1 reduced-line-height",
                                            children: [m.sent_at ? (0, q.jsx)(f.d, {
                                                children: (0, q.jsx)(j.T, {
                                                    className: "text-tertiary-alpha",
                                                    href: l.p.eventPostPath({
                                                        post: t.post
                                                    }),
                                                    children: (0, q.jsx)("span", {
                                                        title: S.ou.fromISO(m.sent_at).toLocaleString(S.ou.DATETIME_FULL),
                                                        className: "jsx-181475685 nowrap",
                                                        children: u.f.postTime({
                                                            date: m.sent_at
                                                        })
                                                    })
                                                })
                                            }) : (0, q.jsx)(f.d, {
                                                children: (0, q.jsx)(j.T, {
                                                    className: "text-tertiary-alpha",
                                                    href: l.p.eventPostPath({
                                                        post: t.post
                                                    }),
                                                    children: (0, q.jsxs)("span", {
                                                        title: S.ou.fromISO(m.scheduled_for).toLocaleString(S.ou.DATETIME_FULL),
                                                        className: "jsx-181475685 nowrap",
                                                        children: ["Scheduled for", " ", (0, q.jsx)(Z.q, {
                                                            at: m.scheduled_for,
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "only-if-different",
                                                            hour: "numeric",
                                                            minute: "2-digit"
                                                        })]
                                                    })
                                                })
                                            }), m.session_start_at && (0, q.jsxs)(q.Fragment, {
                                                children: [(0, q.jsx)("span", {
                                                    className: "jsx-181475685",
                                                    children: "\xb7"
                                                }), (0, q.jsxs)("span", {
                                                    className: "jsx-181475685 nowrap",
                                                    children: ["Session", " ", (0, q.jsx)(Z.q, {
                                                        at: m.session_start_at,
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "only-if-different",
                                                        hour: "numeric",
                                                        minute: "numeric"
                                                    })]
                                                })]
                                            }), n && (0, q.jsx)(H, {
                                                approval_statuses: m.approval_statuses
                                            })]
                                        })]
                                    })]
                                }), n && (0, q.jsx)(D.f, {
                                    variant: "link",
                                    className: "pt-1",
                                    options: [{
                                        key: "edit",
                                        name: "Edit",
                                        icon: (0, q.jsx)(k.Z, {}),
                                        onClick: N.onShow
                                    }, {
                                        key: "delete",
                                        name: "Delete",
                                        icon: (0, q.jsx)(O.Z, {}),
                                        onClick: g.onShow
                                    }]
                                })]
                            }), (0, q.jsxs)("div", {
                                className: "jsx-181475685 event-post-container",
                                children: [m.subject && (0, q.jsx)("div", {
                                    className: "jsx-181475685 fw-bold fs-lg mb-2",
                                    children: m.subject
                                }), (0, q.jsx)(y.v, {
                                    doc: m.content_spark
                                })]
                            })]
                        }), (0, q.jsx)(F.f, L(L({}, g), {}, {
                            text: "Are you sure you want to delete this post?",
                            title: "Delete Post",
                            onConfirm: (0, a.Z)(c().mark((function e() {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, V.TI)((0, a.Z)(c().mark((function e() {
                                                return c().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, I.X.post("/event/admin/delete-post", {
                                                                event_post_api_id: m.api_id
                                                            });
                                                        case 2:
                                                            return g.onHide(), e.next = 5, (0, d._)(300);
                                                        case 5:
                                                            return e.next = 7, r();
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), {
                                                error: "There was a problem deleting this post."
                                            });
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        })), (0, q.jsx)(v.W, {
                            onHide: N.onShow,
                            title: "Update Post",
                            children: N.show && (0, q.jsx)(C.J9, {
                                initialValues: {
                                    content_spark: m.content_spark,
                                    scheduled_for: m.scheduled_for
                                },
                                onSubmit: function() {
                                    var e = (0, a.Z)(c().mark((function e(t) {
                                        var n, r;
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = t.content_spark, r = t.scheduled_for, e.next = 3, (0, V.TI)((0, a.Z)(c().mark((function e() {
                                                        return c().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.next = 2, I.X.post("/event/admin/update-post", {
                                                                        event_post_api_id: m.api_id,
                                                                        content_spark: n,
                                                                        scheduled_for: m.sent_at ? void 0 : r
                                                                    });
                                                                case 2:
                                                                    return e.next = 4, o();
                                                                case 4:
                                                                    N.onHide();
                                                                case 5:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    }))), {
                                                        error: "There was an issue updating this post."
                                                    });
                                                case 3:
                                                    return e.next = 5, o();
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                children: function(e) {
                                    var t = e.values,
                                        n = e.setFieldValue;
                                    return (0, q.jsxs)(C.l0, {
                                        className: "flex-column gap-3",
                                        children: [(0, q.jsx)(A.Fx, {
                                            name: "content_spark",
                                            label: "Message",
                                            placeholder: "Share a message with your guests\u2026",
                                            minHeight: "100px",
                                            required: !0
                                        }), !m.sent_at && (0, q.jsxs)("div", {
                                            className: "jsx-181475685",
                                            children: [(0, q.jsx)(x.U, {
                                                text: "Scheduled For"
                                            }), (0, q.jsx)(h.Y, {
                                                minDate: "now",
                                                date: t.scheduled_for,
                                                timezone: (0, p._8)(),
                                                setDate: function(e) {
                                                    return n("scheduled_for", e)
                                                }
                                            })]
                                        }), (0, q.jsx)(b.w, {
                                            label: "Save"
                                        })]
                                    })
                                }
                            })
                        }), (0, q.jsx)(s(), {
                            id: "181475685",
                            children: [".event-post-container h1,.event-post-container h2,.event-post-container h3,.event-post-container h4,.event-post-container h5,.event-post-container h6{font-family:var(--title-font);}"]
                        })]
                    })
                },
                H = function(e) {
                    var t = e.approval_statuses,
                        n = e.className;
                    return (0, q.jsx)(g.a, {
                        content: "Sent to ".concat(t.map((function(e) {
                            return m.Yg.ApprovalStatusToInfo[e].hostDisplay
                        })).join(", ")),
                        children: (0, q.jsxs)("div", {
                            className: "jsx-3473680836 " + (P()("flex-center", n) || ""),
                            children: [t.map((function(e) {
                                return (0, q.jsx)("div", {
                                    className: "jsx-3473680836 status",
                                    children: (0, q.jsx)(T.O, {
                                        color: m.Yg.ApprovalStatusToInfo[e].color,
                                        size: "medium"
                                    })
                                }, e)
                            })), (0, q.jsx)(s(), {
                                id: "3473680836",
                                children: [".status.jsx-3473680836:not(:first-child){margin-left:-3px;border-radius:100%;border:1px solid var(--primary-bg-color);}"]
                            })]
                        })
                    })
                }
        },
        56340: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return x
                }
            });
            var r = n(44605),
                a = n.n(r),
                o = n(61488),
                s = n(21808),
                i = (n(70079), n(44566)),
                c = n(18042),
                l = n(26372),
                u = n.n(l),
                d = n(35250),
                p = function(e) {
                    var t = e.reaction_count,
                        n = e.has_reacted,
                        r = e.owner_api_id,
                        l = e.owner_type,
                        p = e.onReact,
                        m = e.onReactionCount;
                    return (0, d.jsxs)("button", {
                        type: "button",
                        onClick: function() {
                            p({
                                has_reacted: !n,
                                owner_api_id: r,
                                owner_type: l
                            }), s.X.post("/reaction/update", {
                                owner_type: l,
                                owner_api_id: r,
                                mode: n ? "delete" : "create"
                            }).then((function(e) {
                                var t = e.reaction_count;
                                m({
                                    info: {
                                        reaction_count: t,
                                        owner: {
                                            owner_api_id: r,
                                            owner_type: l
                                        }
                                    },
                                    type: o.Vn.ReactionCountUpdated
                                })
                            }))
                        },
                        className: "jsx-814362476 " + (u()("button-reset react-button animated", {
                            hearted: n
                        }) || ""),
                        children: [n ? (0, d.jsx)(c.Z, {}) : (0, d.jsx)(i.Z, {}), t > 0 && (0, d.jsx)("span", {
                            className: "jsx-814362476 mono-number",
                            children: t.toLocaleString()
                        }), (0, d.jsx)(a(), {
                            id: "814362476",
                            children: [".react-button.jsx-814362476{padding:var(--small-input-padding);background-color:var(--light-button-bg-color);color:var(--light-button-color);border-radius:var(--border-radius);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:0.25rem;line-height:1;}", ".react-button.jsx-814362476:hover{background-color:var(--light-button-hover-bg-color);color:var(--light-button-hover-color);}", ".react-button.hearted.jsx-814362476{background-color:var(--faint-cranberry);color:var(--cranberry);}", ".react-button.hearted.jsx-814362476:hover{background-color:var(--pale-cranberry);}"]
                        })]
                    })
                },
                m = n(64689),
                f = n(78871),
                h = n(20492),
                x = function(e) {
                    var t = e.info,
                        n = e.onReact,
                        r = e.onReactionCount,
                        a = e.onClickComment,
                        o = t.post,
                        s = t.comments,
                        i = t.reaction_count,
                        c = t.has_reacted,
                        l = s.filter((function(e) {
                            return !e.comment.deleted_at
                        }));
                    return (0, d.jsxs)("div", {
                        className: "mt-3 gap-2 flex-center spread",
                        children: [(0, d.jsxs)("div", {
                            className: "flex-center gap-2",
                            children: [(0, d.jsx)(p, {
                                reaction_count: i,
                                has_reacted: c,
                                owner_type: "event_post",
                                owner_api_id: o.api_id,
                                onReact: n,
                                onReactionCount: r
                            }), a && (0, d.jsx)(m.C, {
                                label: "Comment",
                                icon: (0, d.jsx)(f.Z, {}),
                                size: "small",
                                color: "light",
                                onClick: function() {
                                    return a({
                                        autoFocus: !0
                                    })
                                }
                            })]
                        }), l.length > 0 && a && (0, d.jsx)(m.C, {
                            variant: "link",
                            label: (0, d.jsx)(h.X, {
                                num: l.length,
                                word: "Comment"
                            }),
                            color: "light",
                            size: "small",
                            onClick: function() {
                                return a({
                                    autoFocus: !1
                                })
                            }
                        })]
                    })
                }
        },
        15790: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return h
                }
            });
            var r = n(14491),
                a = n(77759),
                o = n(61488),
                s = n(2092),
                i = n(70079),
                c = n(96594),
                l = n.n(c),
                u = n(28541),
                d = n.n(u),
                p = n(89254);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t, n = e.event_api_id,
                    a = e.pause,
                    c = e.include_scheduled,
                    u = (0, s.J)({
                        path: "/event/get-posts",
                        args: {
                            event_api_id: n,
                            include_scheduled: c ? "1" : void 0
                        },
                        pause: a,
                        swrConfig: {
                            revalidateOnFocus: !1
                        }
                    }),
                    m = u.data,
                    h = u.refresh,
                    x = u.mutate,
                    j = (0, i.useCallback)((function(e) {
                        var t = e.info;
                        x((function(e) {
                            var n = t.owner,
                                r = t.reaction_count;
                            return e && "event_post" === n.owner_type ? {
                                posts: e.posts.map((function(e) {
                                    return n.owner_api_id === e.post.api_id ? f(f({}, e), {}, {
                                        reaction_count: r
                                    }) : e
                                }))
                            } : e
                        }))
                    }), [x]),
                    v = (0, i.useCallback)((function(e) {
                        var t = e.info,
                            n = t.comment;
                        x((function(e) {
                            return e ? {
                                posts: e.posts.map((function(e) {
                                    if (n.owner_api_id === e.post.api_id) {
                                        var a = d()(l()([t].concat((0, r.Z)(e.comments)), "comment.api_id"), (function(e) {
                                            return e.comment.created_at
                                        }));
                                        return f(f({}, e), {}, {
                                            comments: a
                                        })
                                    }
                                    return e
                                }))
                            } : e
                        }), {
                            revalidate: !1
                        })
                    }), [x]),
                    b = (0, i.useCallback)((function(e) {
                        var t = e.has_reacted,
                            n = e.owner_type,
                            r = e.owner_api_id;
                        x((function(e) {
                            return e && "event_post" === n ? {
                                posts: e.posts.map((function(e) {
                                    return e.post.api_id === r ? f(f({}, e), {}, {
                                        has_reacted: t,
                                        reaction_count: t && !e.has_reacted ? e.reaction_count + 1 : t && !e.has_reacted ? Math.max(e.reaction_count - 1, 0) : e.reaction_count
                                    }) : e
                                }))
                            } : e
                        }), {
                            revalidate: !1
                        })
                    }), [x]),
                    g = o.C8.eventChannel({
                        event_api_id: n
                    });
                return (0, p.J)({
                    pause: a,
                    channel: g,
                    onUpdate: function(e) {
                        e.type === o.Vn.CommentUpdated ? v(e) : e.type === o.Vn.ReactionCountUpdated && j(e)
                    }
                }), {
                    posts: null !== (t = null === m || void 0 === m ? void 0 : m.posts) && void 0 !== t ? t : null,
                    refresh: h,
                    onComment: v,
                    onReact: b,
                    onReactionCount: j
                }
            }
        },
        48099: function(e, t, n) {
            n.d(t, {
                Fx: function() {
                    return y
                },
                M: function() {
                    return _
                },
                UI: function() {
                    return O
                },
                wT: function() {
                    return k
                }
            });
            var r = n(77759),
                a = n(91050),
                o = n(44605),
                s = n.n(o),
                i = n(58720),
                c = n(69161),
                l = n(41160),
                u = n(88723),
                d = n(26372),
                p = n.n(d),
                m = n(22802),
                f = n(70079),
                h = n(54890),
                x = n(35250),
                j = ["name", "label", "className", "allowHeaders", "required"],
                v = ["name", "label", "className", "required"],
                b = ["name", "label", "className", "required"];

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = (0, f.forwardRef)((function(e, t) {
                    var n = e.name,
                        r = e.label,
                        o = e.className,
                        s = e.allowHeaders,
                        i = void 0 === s || s,
                        c = e.required,
                        l = (0, a.Z)(e, j),
                        u = (0, m.u6)(),
                        d = u.values,
                        p = u.setFieldValue,
                        f = u.isSubmitting,
                        v = u.submitForm;
                    return (0, x.jsx)(N, {
                        label: r,
                        className: o,
                        name: n,
                        required: c,
                        children: (0, x.jsx)(h.iM, w({
                            ref: t,
                            initialDocValue: (0, m.u9)(d, n),
                            setDocValue: function(e) {
                                return p(n, e)
                            },
                            disabled: f,
                            allowHeaders: i,
                            onCmdEnter: function() {
                                return v(), !0
                            }
                        }, l))
                    })
                })),
                _ = function(e) {
                    var t = e.titleName,
                        n = e.editorName,
                        r = e.autoFocus,
                        a = void 0 === r || r,
                        o = e.titlePlaceholder,
                        i = void 0 === o ? "Title" : o,
                        c = e.editorPlaceholder,
                        d = void 0 === c ? "The beginning of a masterpiece..." : c,
                        p = e.requireTitle,
                        j = void 0 === p || p,
                        v = e.cursorBottomPadding,
                        b = (0, m.u6)(),
                        g = b.values,
                        w = b.setFieldValue,
                        y = b.isSubmitting,
                        _ = b.submitCount,
                        O = b.errors,
                        k = (0, f.useRef)(null);
                    return (0, x.jsxs)("div", {
                        className: s().dynamic([
                            ["590206500", [u.A4.small, u.A4.tiny]]
                        ]) + " editor-with-title-wrapper",
                        children: [(0, x.jsx)("div", {
                            className: s().dynamic([
                                ["590206500", [u.A4.small, u.A4.tiny]]
                            ]) + " title-input",
                            children: (0, x.jsx)(l.e, {
                                value: (0, m.u9)(g, t),
                                onChange: function(e) {
                                    w(t, e)
                                },
                                placeholder: i,
                                invalid: j && _ > 0 && (0, m.u9)(O, t),
                                autoFocus: a,
                                onEnter: function() {
                                    var e;
                                    null === (e = k.current) || void 0 === e || e.focus()
                                }
                            })
                        }), (0, x.jsx)(h.iM, {
                            ref: k,
                            initialDocValue: (0, m.u9)(g, n),
                            setDocValue: function(e) {
                                return w(n, e)
                            },
                            disabled: y,
                            allowHeaders: !0,
                            inputStyle: "borderless",
                            minHeight: "70vh",
                            placeholder: d,
                            cursorBottomPadding: v
                        }), (0, x.jsx)(s(), {
                            id: "590206500",
                            dynamic: [u.A4.small, u.A4.tiny],
                            children: [".title-input.__jsx-style-dynamic-selector{--input-font-size:2rem;--naked-input-font-weight:var(--font-weight-medium);--naked-input-guidance-height:2.625rem;padding:0.25rem 0 0.5rem 0;border-bottom:1px solid var(--divider-color);margin-bottom:1.5rem;}", "@media (max-width:".concat(u.A4.small, "){.title-input.__jsx-style-dynamic-selector{--input-font-size:1.75rem;--naked-input-guidance-height:2.25rem;padding-top:0;}}"), "@media (max-width:".concat(u.A4.tiny, "){.title-input.__jsx-style-dynamic-selector{--input-font-size:1.5rem;--naked-input-guidance-height:1.9375rem;}}")]
                        })]
                    })
                },
                O = function(e) {
                    var t = e.name,
                        n = e.label,
                        r = e.className,
                        o = e.required,
                        s = (0, a.Z)(e, v),
                        i = (0, m.u6)(),
                        c = i.values,
                        l = i.setFieldValue,
                        u = i.isSubmitting;
                    return (0, x.jsx)(N, {
                        label: n,
                        className: r,
                        name: t,
                        required: o,
                        children: (0, x.jsx)(h.AX, w({
                            initialDocValue: (0, m.u9)(c, t),
                            setDocValue: function(e) {
                                return l(t, e)
                            },
                            disabled: u
                        }, s))
                    })
                },
                k = function(e) {
                    var t = e.name,
                        n = e.label,
                        r = e.className,
                        o = e.required,
                        s = (0, a.Z)(e, b),
                        i = (0, m.u6)(),
                        c = i.values,
                        l = i.setFieldValue,
                        u = i.isSubmitting;
                    return (0, x.jsx)(N, {
                        label: n,
                        className: r,
                        name: t,
                        required: o,
                        children: (0, x.jsx)(h.K6, w({
                            initialDocValue: (0, m.u9)(c, t),
                            setDocValue: function(e) {
                                return l(t, e)
                            },
                            disabled: u
                        }, s))
                    })
                },
                N = function(e) {
                    var t = e.children,
                        n = e.className,
                        r = e.label,
                        a = e.name,
                        o = e.required,
                        s = (0, m.u6)().submitCount;
                    return (0, x.jsx)(m.gN, {
                        name: a,
                        validate: function(e) {
                            if (o && !i.h.hasContent(e)) return "This field is required."
                        },
                        children: function(e) {
                            var a = e.meta,
                                o = s > 0 && a.error;
                            return (0, x.jsxs)("div", {
                                className: p()("lux-input-wrapper", n, {
                                    error: o
                                }),
                                children: [(0, x.jsxs)("div", {
                                    className: "input-wrapper",
                                    children: [r && (0, x.jsx)(c.U, {
                                        text: r
                                    }), t]
                                }), (0, x.jsx)("div", {
                                    className: p()("helper-text", {
                                        show: o
                                    }),
                                    children: a.error
                                })]
                            })
                        }
                    })
                }
        },
        32648: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return d
                }
            });
            var r = n(44605),
                a = n.n(r),
                o = n(26372),
                s = n.n(o),
                i = (n(70079), n(27957)),
                c = n(1586),
                l = n(66386),
                u = n(35250),
                d = function(e) {
                    var t = e.tab,
                        n = e.title,
                        r = e.topNavSticky,
                        o = e.topNavBlur,
                        d = e.children,
                        p = e.hideGradient,
                        m = e.createEventUnderCalendarApiId,
                        f = e.wide,
                        h = e.forceDarkNav,
                        x = e.forceStarLogoInTopNav,
                        j = e.redirectAfterSignIn,
                        v = e.noBottomPadding;
                    return (0, i.hD)() ? (0, u.jsxs)("div", {
                        className: "pt-2",
                        children: [(0, u.jsx)(c.s, {
                            title: n || null
                        }), d]
                    }) : (0, u.jsxs)("div", {
                        className: "jsx-2566509379 " + (s()("page-wrapper", {
                            "wide-page-wrapper": f,
                            "no-bottom-padding": v
                        }) || ""),
                        children: [n && (0, u.jsx)(c.s, {
                            title: n
                        }), (0, u.jsx)(l.tD, {
                            tab: null !== t && void 0 !== t ? t : null,
                            sticky: r,
                            blur: o,
                            hideGradient: p,
                            createEventUnderCalendarApiId: m,
                            forceDark: h,
                            forceStarLogo: x,
                            redirectAfterSignIn: j
                        }), (0, u.jsx)("div", {
                            className: "jsx-2566509379 " + (s()("page-content", {
                                "sticky-topnav": r
                            }) || ""),
                            children: d
                        }), (0, u.jsx)(a(), {
                            id: "2566509379",
                            children: [".page-wrapper.jsx-2566509379{min-height:100vh;min-height:100dvh;padding-bottom:4rem;background-color:var(--page-bg-color);}", ".page-wrapper.no-bottom-padding.jsx-2566509379{padding-bottom:0;}", ".page-content.sticky-topnav.jsx-2566509379{padding-top:calc(3.25rem + 1px);}"]
                        })]
                    })
                }
        }
    }
]);