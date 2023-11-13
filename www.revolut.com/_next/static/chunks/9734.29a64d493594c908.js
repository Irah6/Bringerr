"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9734], {
        53250: function(e, t, r) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(67294),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                u = n.useState,
                a = n.useEffect,
                o = n.useLayoutEffect,
                l = n.useDebugValue;

            function s(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = u({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return o(function() {
                    i.value = r, i.getSnapshot = t, s(i) && c({
                        inst: i
                    })
                }, [e, r, t]), a(function() {
                    return s(i) && c({
                        inst: i
                    }), e(function() {
                        s(i) && c({
                            inst: i
                        })
                    })
                }, [e]), l(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        61688: function(e, t, r) {
            e.exports = r(53250)
        },
        59734: function(e, t, r) {
            r.d(t, {
                ZP: function() {
                    return eo
                }
            });
            var n = r(67294),
                i = r(61688);
            let u = () => {},
                a = u(),
                o = Object,
                l = e => e === a,
                s = e => "function" == typeof e,
                c = (e, t) => ({ ...e,
                    ...t
                }),
                d = e => s(e.then),
                f = new WeakMap,
                E = 0,
                g = e => {
                    let t, r;
                    let n = typeof e,
                        i = e && e.constructor,
                        u = i == Date;
                    if (o(e) !== e || u || i == RegExp) t = u ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = f.get(e)) return t;
                        if (t = ++E + "~", f.set(e, t), i == Array) {
                            for (r = 0, t = "@"; r < e.length; r++) t += g(e[r]) + ",";
                            f.set(e, t)
                        }
                        if (i == o) {
                            t = "#";
                            let n = o.keys(e).sort();
                            for (; !l(r = n.pop());) l(e[r]) || (t += r + ":" + g(e[r]) + ",");
                            f.set(e, t)
                        }
                    }
                    return t
                },
                w = new WeakMap,
                h = {},
                p = {},
                v = "undefined",
                _ = typeof window != v,
                y = typeof document != v,
                m = () => _ && typeof window.requestAnimationFrame != v,
                R = (e, t) => {
                    let r = w.get(e);
                    return [() => !l(t) && e.get(t) || h, n => {
                        if (!l(t)) {
                            let i = e.get(t);
                            t in p || (p[t] = i), r[5](t, c(i, n), i || h)
                        }
                    }, r[6], () => !l(t) && t in p ? p[t] : !l(t) && e.get(t) || h]
                },
                T = !0,
                [b, S] = _ && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [u, u],
                O = () => {
                    let e = y && document.visibilityState;
                    return l(e) || "hidden" !== e
                },
                V = e => (y && document.addEventListener("visibilitychange", e), b("focus", e), () => {
                    y && document.removeEventListener("visibilitychange", e), S("focus", e)
                }),
                L = e => {
                    let t = () => {
                            T = !0, e()
                        },
                        r = () => {
                            T = !1
                        };
                    return b("online", t), b("offline", r), () => {
                        S("online", t), S("offline", r)
                    }
                },
                k = {
                    initFocus: V,
                    initReconnect: L
                },
                C = !n.useId,
                N = !_ || "Deno" in window,
                D = e => m() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                A = N ? n.useEffect : n.useLayoutEffect,
                x = "undefined" != typeof navigator && navigator.connection,
                I = !N && x && (["slow-2g", "2g"].includes(x.effectiveType) || x.saveData),
                P = e => {
                    if (s(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? g(e) : "", t]
                },
                M = 0,
                F = () => ++M;
            var U = {
                __proto__: null,
                ERROR_REVALIDATE_EVENT: 3,
                FOCUS_EVENT: 0,
                MUTATE_EVENT: 2,
                RECONNECT_EVENT: 1
            };
            async function W(...e) {
                let [t, r, n, i] = e, u = c({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {}), o = u.populateCache, f = u.rollbackOnError, E = u.optimisticData, g = !1 !== u.revalidate, h = e => "function" == typeof f ? f(e) : !1 !== f, p = u.throwOnError;
                if (s(r)) {
                    let e = [],
                        n = t.keys();
                    for (let i of n) !/^\$(inf|sub)\$/.test(i) && r(t.get(i)._k) && e.push(i);
                    return Promise.all(e.map(v))
                }
                return v(r);
                async function v(r) {
                    let i;
                    let [u] = P(r);
                    if (!u) return;
                    let [c, f] = R(t, u), [v, _, y, m] = w.get(t), T = () => {
                        let e = v[u];
                        return g && (delete y[u], delete m[u], e && e[0]) ? e[0](2).then(() => c().data) : c().data
                    };
                    if (e.length < 3) return T();
                    let b = n,
                        S = F();
                    _[u] = [S, 0];
                    let O = !l(E),
                        V = c(),
                        L = V.data,
                        k = V._c,
                        C = l(k) ? L : k;
                    if (O && f({
                            data: E = s(E) ? E(C, L) : E,
                            _c: C
                        }), s(b)) try {
                        b = b(C)
                    } catch (e) {
                        i = e
                    }
                    if (b && d(b)) {
                        if (b = await b.catch(e => {
                                i = e
                            }), S !== _[u][0]) {
                            if (i) throw i;
                            return b
                        }
                        i && O && h(i) && (o = !0, f({
                            data: C,
                            _c: a
                        }))
                    }
                    if (o && !i) {
                        if (s(o)) {
                            let e = o(b, C);
                            f({
                                data: e,
                                error: a,
                                _c: a
                            })
                        } else f({
                            data: b,
                            error: a,
                            _c: a
                        })
                    }
                    if (_[u][1] = F(), Promise.resolve(T()).then(() => {
                            f({
                                _c: a
                            })
                        }), i) {
                        if (p) throw i;
                        return
                    }
                    return b
                }
            }
            let j = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                $ = (e, t) => {
                    if (!w.has(e)) {
                        let r = c(k, t),
                            n = {},
                            i = W.bind(a, e),
                            o = u,
                            l = {},
                            s = (e, t) => {
                                let r = l[e] || [];
                                return l[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            d = (t, r, n) => {
                                e.set(t, r);
                                let i = l[t];
                                if (i)
                                    for (let e of i) e(r, n)
                            },
                            f = () => {
                                if (!w.has(e) && (w.set(e, [n, {}, {}, {}, i, d, s]), !N)) {
                                    let t = r.initFocus(setTimeout.bind(a, j.bind(a, n, 0))),
                                        i = r.initReconnect(setTimeout.bind(a, j.bind(a, n, 1)));
                                    o = () => {
                                        t && t(), i && i(), w.delete(e)
                                    }
                                }
                            };
                        return f(), [e, i, f, o]
                    }
                    return [e, w.get(e)[4]]
                },
                q = (e, t, r, n, i) => {
                    let u = r.errorRetryCount,
                        a = i.retryCount,
                        o = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * r.errorRetryInterval;
                    (l(u) || !(a > u)) && setTimeout(n, o, i)
                },
                J = (e, t) => g(e) == g(t),
                [Z, z] = $(new Map),
                B = c({
                    onLoadingSlow: u,
                    onSuccess: u,
                    onError: u,
                    onErrorRetry: q,
                    onDiscarded: u,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: I ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: I ? 5e3 : 3e3,
                    compare: J,
                    isPaused: () => !1,
                    cache: Z,
                    mutate: z,
                    fallback: {}
                }, {
                    isOnline: () => T,
                    isVisible: O
                }),
                G = (e, t) => {
                    let r = c(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: i
                        } = e, {
                            use: u,
                            fallback: a
                        } = t;
                        n && u && (r.use = n.concat(u)), i && a && (r.fallback = c(i, a))
                    }
                    return r
                },
                H = (0, n.createContext)({}),
                K = e => {
                    let {
                        value: t
                    } = e, r = (0, n.useContext)(H), i = s(t), u = (0, n.useMemo)(() => i ? t(r) : t, [i, r, t]), o = (0, n.useMemo)(() => i ? u : G(r, u), [i, r, u]), l = u && u.provider, d = (0, n.useRef)(a);
                    l && !d.current && (d.current = $(l(o.cache || Z), u));
                    let f = d.current;
                    return f && (o.cache = f[0], o.mutate = f[1]), A(() => {
                        if (f) return f[2] && f[2](), f[3]
                    }, []), (0, n.createElement)(H.Provider, c(e, {
                        value: o
                    }))
                },
                Q = _ && window.__SWR_DEVTOOLS_USE__,
                X = Q ? window.__SWR_DEVTOOLS_USE__ : [],
                Y = e => s(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                ee = () => c(B, (0, n.useContext)(H)),
                et = e => (t, r, n) => {
                    let i = r && ((...e) => {
                        let [n] = P(t), [, , , i] = w.get(Z);
                        if (n.startsWith("$inf$")) return r(...e);
                        let u = i[n];
                        return l(u) ? r(...e) : (delete i[n], u)
                    });
                    return e(t, i, n)
                },
                er = X.concat(et),
                en = (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                };
            Q && (window.__SWR_DEVTOOLS_REACT__ = n);
            let ei = n.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    if ("rejected" === e.status) throw e.reason;
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
                }),
                eu = {
                    dedupe: !0
                },
                ea = (e, t, r) => {
                    let {
                        cache: u,
                        compare: o,
                        suspense: d,
                        fallbackData: f,
                        revalidateOnMount: E,
                        revalidateIfStale: g,
                        refreshInterval: h,
                        refreshWhenHidden: p,
                        refreshWhenOffline: v,
                        keepPreviousData: _
                    } = r, [y, m, T, b] = w.get(u), [S, O] = P(e), V = (0, n.useRef)(!1), L = (0, n.useRef)(!1), k = (0, n.useRef)(S), x = (0, n.useRef)(t), I = (0, n.useRef)(r), M = () => I.current, j = () => M().isVisible() && M().isOnline(), [$, q, J, Z] = R(u, S), z = (0, n.useRef)({}).current, B = l(f) ? r.fallback[S] : f, G = (e, t) => {
                        for (let r in z) {
                            let n = r;
                            if ("data" === n) {
                                if (!o(e[n], t[n]) && (!l(e[n]) || !o(ea, t[n]))) return !1
                            } else if (t[n] !== e[n]) return !1
                        }
                        return !0
                    }, H = (0, n.useMemo)(() => {
                        let e = !!S && !!t && (l(E) ? !M().isPaused() && !d && (!!l(g) || g) : E),
                            r = t => {
                                let r = c(t);
                                return (delete r._k, e) ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...r
                                } : r
                            },
                            n = $(),
                            i = Z(),
                            u = r(n),
                            a = n === i ? u : r(i),
                            o = u;
                        return [() => {
                            let e = r($()),
                                t = G(e, o);
                            return t ? (o.data = e.data, o.isLoading = e.isLoading, o.isValidating = e.isValidating, o.error = e.error, o) : (o = e, e)
                        }, () => a]
                    }, [u, S]), K = (0, i.useSyncExternalStore)((0, n.useCallback)(e => J(S, (t, r) => {
                        G(r, t) || e()
                    }), [u, S]), H[0], H[1]), Q = !V.current, X = y[S] && y[S].length > 0, Y = K.data, ee = l(Y) ? B : Y, et = K.error, er = (0, n.useRef)(ee), ea = _ ? l(Y) ? er.current : Y : ee, eo = (!X || !!l(et)) && (Q && !l(E) ? E : !M().isPaused() && (d ? !l(ee) && g : l(ee) || g)), el = !!(S && t && Q && eo), es = l(K.isValidating) ? el : K.isValidating, ec = l(K.isLoading) ? el : K.isLoading, ed = (0, n.useCallback)(async e => {
                        let t, n;
                        let i = x.current;
                        if (!S || !i || L.current || M().isPaused()) return !1;
                        let u = !0,
                            c = e || {},
                            d = !T[S] || !c.dedupe,
                            f = () => C ? !L.current && S === k.current && V.current : S === k.current,
                            E = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            g = () => {
                                q(E)
                            },
                            w = () => {
                                let e = T[S];
                                e && e[1] === n && delete T[S]
                            },
                            h = {
                                isValidating: !0
                            };
                        l($().data) && (h.isLoading = !0);
                        try {
                            if (d && (q(h), r.loadingTimeout && l($().data) && setTimeout(() => {
                                    u && f() && M().onLoadingSlow(S, r)
                                }, r.loadingTimeout), T[S] = [i(O), F()]), [t, n] = T[S], t = await t, d && setTimeout(w, r.dedupingInterval), !T[S] || T[S][1] !== n) return d && f() && M().onDiscarded(S), !1;
                            E.error = a;
                            let e = m[S];
                            if (!l(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return g(), d && f() && M().onDiscarded(S), !1;
                            let s = $().data;
                            E.data = o(s, t) ? s : t, d && f() && M().onSuccess(t, S, r)
                        } catch (r) {
                            w();
                            let e = M(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            !e.isPaused() && (E.error = r, d && f() && (e.onError(r, S, e), (!0 === t || s(t) && t(r)) && j() && e.onErrorRetry(r, S, e, e => {
                                let t = y[S];
                                t && t[0] && t[0](U.ERROR_REVALIDATE_EVENT, e)
                            }, {
                                retryCount: (c.retryCount || 0) + 1,
                                dedupe: !0
                            })))
                        }
                        return u = !1, g(), !0
                    }, [S, u]), ef = (0, n.useCallback)((...e) => W(u, k.current, ...e), []);
                    if (A(() => {
                            x.current = t, I.current = r, l(Y) || (er.current = Y)
                        }), A(() => {
                            if (!S) return;
                            let e = ed.bind(a, eu),
                                t = 0,
                                r = (r, n = {}) => {
                                    if (r == U.FOCUS_EVENT) {
                                        let r = Date.now();
                                        M().revalidateOnFocus && r > t && j() && (t = r + M().focusThrottleInterval, e())
                                    } else if (r == U.RECONNECT_EVENT) M().revalidateOnReconnect && j() && e();
                                    else if (r == U.MUTATE_EVENT) return ed();
                                    else if (r == U.ERROR_REVALIDATE_EVENT) return ed(n)
                                },
                                n = en(S, y, r);
                            return L.current = !1, k.current = S, V.current = !0, q({
                                _k: O
                            }), eo && (l(ee) || N ? e() : D(e)), () => {
                                L.current = !0, n()
                            }
                        }, [S]), A(() => {
                            let e;

                            function t() {
                                let t = s(h) ? h($().data) : h;
                                t && -1 !== e && (e = setTimeout(r, t))
                            }

                            function r() {
                                !$().error && (p || M().isVisible()) && (v || M().isOnline()) ? ed(eu).then(t) : t()
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }, [h, p, v, S]), (0, n.useDebugValue)(ea), d && l(ee) && S) {
                        if (!C && N) throw Error("Fallback data is required when using suspense in SSR.");
                        x.current = t, I.current = r, L.current = !1;
                        let e = b[S];
                        if (!l(e)) {
                            let t = ef(e);
                            ei(t)
                        }
                        if (l(et)) {
                            let e = ed(eu);
                            l(ea) || (e.status = "fulfilled", e.value = !0), ei(e)
                        } else throw et
                    }
                    return {
                        mutate: ef,
                        get data() {
                            return z.data = !0, ea
                        },
                        get error() {
                            return z.error = !0, et
                        },
                        get isValidating() {
                            return z.isValidating = !0, es
                        },
                        get isLoading() {
                            return z.isLoading = !0, ec
                        }
                    }
                };
            o.defineProperty(K, "defaultValue", {
                value: B
            });
            let eo = function(...e) {
                let t = ee(),
                    [r, n, i] = Y(e),
                    u = G(t, i),
                    a = ea,
                    {
                        use: o
                    } = u,
                    l = (o || []).concat(er);
                for (let e = l.length; e--;) a = l[e](a);
                return a(r, n || u.fetcher || null, u)
            }
        }
    }
]);