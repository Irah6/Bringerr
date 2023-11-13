(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3245], {
        31346: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return u
                }
            });
            var n = r(14141),
                o = r(16678),
                a = r(39072),
                i = r(30116),
                u = (0, n.ZP)(i.x).withConfig({
                    displayName: "Flex",
                    componentId: "rui__sc-p3ay74-0"
                })(a.S, o.WO, o.Me, o.cq, o.Kl);
            u.defaultProps = {
                display: "flex"
            }
        },
        50052: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return a
                }
            });
            var n = r(67294),
                o = (0, n.createContext)(!1),
                a = function(e) {
                    var t = e.nested,
                        r = e.children;
                    return n.createElement(o.Provider, {
                        value: void 0 === t || t
                    }, r)
                }
        },
        47098: function(e, t, r) {
            "use strict";
            r.d(t, {
                h: function() {
                    return i
                }
            });
            var n = r(67294),
                o = r(50052);

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e) {
                return (0, n.forwardRef)(function(t, r) {
                    return n.createElement(o.D, null, n.createElement(e, a({}, t, {
                        ref: r
                    })))
                })
            }
        },
        39072: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return i
                }
            });
            var n = r(44547),
                o = r(25348),
                a = r(32918),
                i = (0, n.By)({
                    gap: {
                        property: "gap",
                        scale: o.C.SPACE,
                        defaultScale: a.L
                    },
                    rowGap: {
                        property: "rowGap",
                        scale: o.C.SPACE,
                        defaultScale: a.L
                    },
                    columnGap: {
                        property: "columnGap",
                        scale: o.C.SPACE,
                        defaultScale: a.L
                    }
                })
        },
        9996: function(e) {
            "use strict";
            var t = function(e) {
                    var t;
                    return !!e && "object" == typeof e && "[object RegExp]" !== (t = Object.prototype.toString.call(e)) && "[object Date]" !== t && e.$$typeof !== r
                },
                r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? u(Array.isArray(e) ? [] : {}, e, t) : e
            }

            function o(e, t, r) {
                return e.concat(t).map(function(e) {
                    return n(e, r)
                })
            }

            function a(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.propertyIsEnumerable.call(e, t)
                }) : [])
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }

            function u(e, r, l) {
                (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
                var c, s, f = Array.isArray(r);
                return f !== Array.isArray(e) ? n(r, l) : f ? l.arrayMerge(e, r, l) : (s = {}, (c = l).isMergeableObject(e) && a(e).forEach(function(t) {
                    s[t] = n(e[t], c)
                }), a(r).forEach(function(t) {
                    (!i(e, t) || Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) && (i(e, t) && c.isMergeableObject(r[t]) ? s[t] = (function(e, t) {
                        if (!t.customMerge) return u;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : u
                    })(t, c)(e[t], r[t], c) : s[t] = n(r[t], c))
                }), s)
            }
            u.all = function(e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function(e, r) {
                    return u(e, r, t)
                }, {})
            }, e.exports = u
        },
        49090: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
                }
            }

            function r(e, t) {
                e.onreadystatechange = function() {
                    ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, n, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" == typeof n && (o = n, n = {}), n = n || {}, o = o || function() {}, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = !("async" in n) || !!n.async, i.src = e, n.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(i, n.attrs), n.text && (i.text = "" + n.text), ("onload" in i ? t : r)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        },
        30845: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (var r, o, a = 0; a < e.length; a++)
                    if (!((r = e[a]) === (o = t[a]) || n(r) && n(o))) return !1;
                return !0
            }
            t.default = function(e, t) {
                void 0 === t && (t = o);
                var r, n, a = [],
                    i = !1;
                return function() {
                    for (var o = [], u = 0; u < arguments.length; u++) o[u] = arguments[u];
                    return i && r === this && t(o, a) || (n = e.apply(this, o), i = !0, r = this, a = o), n
                }
            }
        },
        92703: function(e, t, r) {
            "use strict";
            var n = r(50414);

            function o() {}

            function a() {}
            a.resetWarningCache = o, e.exports = function() {
                function e(e, t, r, o, a, i) {
                    if (i !== n) {
                        var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return r.PropTypes = r, r
            }
        },
        45697: function(e, t, r) {
            e.exports = r(92703)()
        },
        50414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        69590: function(e) {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                n = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, a) {
                try {
                    return function e(a, i) {
                        if (a === i) return !0;
                        if (a && i && "object" == typeof a && "object" == typeof i) {
                            var u, l, c, s;
                            if (a.constructor !== i.constructor) return !1;
                            if (Array.isArray(a)) {
                                if ((u = a.length) != i.length) return !1;
                                for (l = u; 0 != l--;)
                                    if (!e(a[l], i[l])) return !1;
                                return !0
                            }
                            if (r && a instanceof Map && i instanceof Map) {
                                if (a.size !== i.size) return !1;
                                for (s = a.entries(); !(l = s.next()).done;)
                                    if (!i.has(l.value[0])) return !1;
                                for (s = a.entries(); !(l = s.next()).done;)
                                    if (!e(l.value[1], i.get(l.value[0]))) return !1;
                                return !0
                            }
                            if (n && a instanceof Set && i instanceof Set) {
                                if (a.size !== i.size) return !1;
                                for (s = a.entries(); !(l = s.next()).done;)
                                    if (!i.has(l.value[0])) return !1;
                                return !0
                            }
                            if (o && ArrayBuffer.isView(a) && ArrayBuffer.isView(i)) {
                                if ((u = a.length) != i.length) return !1;
                                for (l = u; 0 != l--;)
                                    if (a[l] !== i[l]) return !1;
                                return !0
                            }
                            if (a.constructor === RegExp) return a.source === i.source && a.flags === i.flags;
                            if (a.valueOf !== Object.prototype.valueOf && "function" == typeof a.valueOf && "function" == typeof i.valueOf) return a.valueOf() === i.valueOf();
                            if (a.toString !== Object.prototype.toString && "function" == typeof a.toString && "function" == typeof i.toString) return a.toString() === i.toString();
                            if ((u = (c = Object.keys(a)).length) !== Object.keys(i).length) return !1;
                            for (l = u; 0 != l--;)
                                if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
                            if (t && a instanceof Element) return !1;
                            for (l = u; 0 != l--;)
                                if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !a.$$typeof) && !e(a[c[l]], i[c[l]])) return !1;
                            return !0
                        }
                        return a != a && i != i
                    }(e, a)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        60722: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    return r.default = e, t && t.set(e, r), r
                }(r(67294)),
                i = (o = r(69590)) && o.__esModule ? o : {
                    default: o
                },
                u = r(85741),
                l = r(38045);

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(c, e);
                var t, r, o, u = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r, o = d(c);
                    if (t) {
                        var a = d(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : y(this)
                });

                function c() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, c);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return h(y(e = u.call.apply(u, [this].concat(r))), "mounted", !1), h(y(e), "isReady", !1), h(y(e), "isPlaying", !1), h(y(e), "isLoading", !0), h(y(e), "loadOnReady", null), h(y(e), "startOnPlay", !0), h(y(e), "seekOnPlay", null), h(y(e), "onDurationCalled", !1), h(y(e), "handlePlayerMount", function(t) {
                        if (e.player) {
                            e.progress();
                            return
                        }
                        e.player = t, e.player.load(e.props.url), e.progress()
                    }), h(y(e), "getInternalPlayer", function(t) {
                        return e.player ? e.player[t] : null
                    }), h(y(e), "progress", function() {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0,
                                r = e.getSecondsLoaded(),
                                n = e.getDuration();
                            if (n) {
                                var o = {
                                    playedSeconds: t,
                                    played: t / n
                                };
                                null !== r && (o.loadedSeconds = r, o.loaded = r / n), (o.playedSeconds !== e.prevPlayed || o.loadedSeconds !== e.prevLoaded) && e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    }), h(y(e), "handleReady", function() {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props,
                                r = t.onReady,
                                n = t.playing,
                                o = t.volume,
                                a = t.muted;
                            r(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : n && e.player.play(), e.handleDurationCheck()
                        }
                    }), h(y(e), "handlePlay", function() {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props,
                            r = t.onStart,
                            n = t.onPlay,
                            o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), r(), e.startOnPlay = !1), n(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    }), h(y(e), "handlePause", function(t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    }), h(y(e), "handleEnded", function() {
                        var t = e.props,
                            r = t.activePlayer,
                            n = t.loop,
                            o = t.onEnded;
                        r.loopOnEnded && n && e.seekTo(0), n || (e.isPlaying = !1, o())
                    }), h(y(e), "handleError", function() {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    }), h(y(e), "handleDurationCheck", function() {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    }), h(y(e), "handleLoaded", function() {
                        e.isLoading = !1
                    }), e
                }
                return r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        if (this.player) {
                            var r = this.props,
                                n = r.url,
                                o = r.playing,
                                a = r.volume,
                                u = r.muted,
                                c = r.playbackRate,
                                s = r.pip,
                                f = r.loop,
                                p = r.activePlayer,
                                y = r.disableDeferredLoading;
                            if (!(0, i.default)(e.url, n)) {
                                if (this.isLoading && !p.forceLoad && !y && !(0, l.isMediaStream)(n)) {
                                    console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")), this.loadOnReady = n;
                                    return
                                }
                                this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(n, this.isReady)
                            }
                            e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && s && this.player.enablePIP && this.player.enablePIP(), e.pip && !s && this.player.disablePIP && this.player.disablePIP(), e.volume !== a && null !== a && this.player.setVolume(a), e.muted !== u && (u ? this.player.mute() : (this.player.unmute(), null !== a && setTimeout(function() {
                                return t.player.setVolume(a)
                            }))), e.playbackRate !== c && this.player.setPlaybackRate && this.player.setPlaybackRate(c), e.loop !== f && this.player.setLoop && this.player.setLoop(f)
                        }
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t, r) {
                        var n = this;
                        if (!this.isReady) {
                            0 !== e && (this.seekOnPlay = e, setTimeout(function() {
                                n.seekOnPlay = null
                            }, 5e3));
                            return
                        }
                        if (t ? "fraction" === t : e > 0 && e < 1) {
                            var o = this.player.getDuration();
                            if (!o) {
                                console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                                return
                            }
                            this.player.seekTo(o * e, r);
                            return
                        }
                        this.player.seekTo(e, r)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.activePlayer;
                        return e ? a.default.createElement(e, s({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }], f(c.prototype, r), o && f(c, o), c
            }(a.Component);
            t.default = b, h(b, "displayName", "Player"), h(b, "propTypes", u.propTypes), h(b, "defaultProps", u.defaultProps)
        },
        83855: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                    }
                return r.default = e, t && t.set(e, r), r
            }(r(67294));

            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        p(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var y = "64px",
                d = {},
                h = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && c(e, t)
                    }(h, e);
                    var t, r, a, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r, o = f(h);
                        if (t) {
                            var a = f(this).constructor;
                            r = Reflect.construct(o, arguments, a)
                        } else r = o.apply(this, arguments);
                        return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : s(this)
                    });

                    function h() {
                        var e;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, h);
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return p(s(e = i.call.apply(i, [this].concat(r))), "mounted", !1), p(s(e), "state", {
                            image: null
                        }), p(s(e), "handleKeyPress", function(t) {
                            ("Enter" === t.key || " " === t.key) && e.props.onClick()
                        }), e
                    }
                    return r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                r = t.url,
                                n = t.light;
                            (e.url !== r || e.light !== n) && this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "fetchImage",
                        value: function(e) {
                            var t = this,
                                r = e.url,
                                n = e.light,
                                a = e.oEmbedUrl;
                            if (!o.default.isValidElement(n)) {
                                if ("string" == typeof n) {
                                    this.setState({
                                        image: n
                                    });
                                    return
                                }
                                if (d[r]) {
                                    this.setState({
                                        image: d[r]
                                    });
                                    return
                                }
                                return this.setState({
                                    image: null
                                }), window.fetch(a.replace("{url}", r)).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    if (e.thumbnail_url && t.mounted) {
                                        var n = e.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                                        t.setState({
                                            image: n
                                        }), d[r] = n
                                    }
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.light,
                                r = e.onClick,
                                n = e.playIcon,
                                a = e.previewTabIndex,
                                i = this.state.image,
                                l = o.default.isValidElement(t),
                                c = {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                s = {
                                    preview: u({
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: i && !l ? "url(".concat(i, ")") : void 0,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        cursor: "pointer"
                                    }, c),
                                    shadow: u({
                                        background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                        borderRadius: y,
                                        width: y,
                                        height: y,
                                        position: l ? "absolute" : void 0
                                    }, c),
                                    playIcon: {
                                        borderStyle: "solid",
                                        borderWidth: "16px 0 16px 26px",
                                        borderColor: "transparent transparent transparent white",
                                        marginLeft: "7px"
                                    }
                                },
                                f = o.default.createElement("div", {
                                    style: s.shadow,
                                    className: "react-player__shadow"
                                }, o.default.createElement("div", {
                                    style: s.playIcon,
                                    className: "react-player__play-icon"
                                }));
                            return o.default.createElement("div", {
                                style: s.preview,
                                className: "react-player__preview",
                                onClick: r,
                                tabIndex: a,
                                onKeyPress: this.handleKeyPress
                            }, l ? t : null, n || f)
                        }
                    }], l(h.prototype, r), a && l(h, a), h
                }(o.Component);
            t.default = h
        },
        70390: function(e, t, r) {
            "use strict";
            t.e = void 0;
            var n = _(r(67294)),
                o = s(r(9996)),
                a = s(r(30845)),
                i = s(r(69590)),
                u = r(85741),
                l = r(38045),
                c = s(r(60722));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach(function(t) {
                        P(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return b(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function P(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return w = function() {
                    return e
                }, e
            }

            function _(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" != typeof e) return {
                    default: e
                };
                var t = w();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                    }
                return r.default = e, t && t.set(e, r), r
            }
            var S = (0, n.lazy)(function() {
                    return Promise.resolve().then(function() {
                        return _(r(83855))
                    })
                }),
                j = "undefined" != typeof window && window.document,
                k = void 0 !== r.g && r.g.window && r.g.window.document,
                E = Object.keys(u.propTypes),
                T = j || k ? n.Suspense : function() {
                    return null
                },
                A = [];
            t.e = function(e, t) {
                var r, s;
                return s = r = function(r) {
                    (function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t)
                    })(_, r);
                    var s, p, b, w = (s = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, t, r = O(_);
                        if (s) {
                            var n = O(this).constructor;
                            t = Reflect.construct(r, arguments, n)
                        } else t = r.apply(this, arguments);
                        return (e = t) && ("object" === f(e) || "function" == typeof e) ? e : g(this)
                    });

                    function _() {
                        var r;
                        (function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        })(this, _);
                        for (var i = arguments.length, s = Array(i), f = 0; f < i; f++) s[f] = arguments[f];
                        return P(g(r = w.call.apply(w, [this].concat(s))), "state", {
                            showPreview: !!r.props.light
                        }), P(g(r), "references", {
                            wrapper: function(e) {
                                r.wrapper = e
                            },
                            player: function(e) {
                                r.player = e
                            }
                        }), P(g(r), "handleClickPreview", function(e) {
                            r.setState({
                                showPreview: !1
                            }), r.props.onClickPreview(e)
                        }), P(g(r), "showPreview", function() {
                            r.setState({
                                showPreview: !0
                            })
                        }), P(g(r), "getDuration", function() {
                            return r.player ? r.player.getDuration() : null
                        }), P(g(r), "getCurrentTime", function() {
                            return r.player ? r.player.getCurrentTime() : null
                        }), P(g(r), "getSecondsLoaded", function() {
                            return r.player ? r.player.getSecondsLoaded() : null
                        }), P(g(r), "getInternalPlayer", function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return r.player ? r.player.getInternalPlayer(e) : null
                        }), P(g(r), "seekTo", function(e, t, n) {
                            if (!r.player) return null;
                            r.player.seekTo(e, t, n)
                        }), P(g(r), "handleReady", function() {
                            r.props.onReady(g(r))
                        }), P(g(r), "getActivePlayer", (0, a.default)(function(r) {
                            for (var n = 0, o = [].concat(A, h(e)); n < o.length; n++) {
                                var a = o[n];
                                if (a.canPlay(r)) return a
                            }
                            return t || null
                        })), P(g(r), "getConfig", (0, a.default)(function(e, t) {
                            var n = r.props.config;
                            return o.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, n, n[t] || {}])
                        })), P(g(r), "getAttributes", (0, a.default)(function(e) {
                            return (0, l.omit)(r.props, E)
                        })), P(g(r), "renderActivePlayer", function(e) {
                            if (!e) return null;
                            var t = r.getActivePlayer(e);
                            if (!t) return null;
                            var o = r.getConfig(e, t.key);
                            return n.default.createElement(c.default, d({}, r.props, {
                                key: t.key,
                                ref: r.references.player,
                                config: o,
                                activePlayer: t.lazyPlayer || t,
                                onReady: r.handleReady
                            }))
                        }), r
                    }
                    return p = [{
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                    }, {
                        key: "renderPreview",
                        value: function(e) {
                            if (!e) return null;
                            var t = this.props,
                                r = t.light,
                                o = t.playIcon,
                                a = t.previewTabIndex,
                                i = t.oEmbedUrl;
                            return n.default.createElement(S, {
                                url: e,
                                light: r,
                                playIcon: o,
                                previewTabIndex: a,
                                oEmbedUrl: i,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                r = e.style,
                                o = e.width,
                                a = e.height,
                                i = e.fallback,
                                u = e.wrapper,
                                l = this.state.showPreview,
                                c = this.getAttributes(t),
                                s = "string" == typeof u ? this.references.wrapper : void 0;
                            return n.default.createElement(u, d({
                                ref: s,
                                style: y(y({}, r), {}, {
                                    width: o,
                                    height: a
                                })
                            }, c), n.default.createElement(T, {
                                fallback: i
                            }, l ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }], v(_.prototype, p), b && v(_, b), _
                }(n.Component), P(r, "displayName", "ReactPlayer"), P(r, "propTypes", u.propTypes), P(r, "defaultProps", u.defaultProps), P(r, "addCustomPlayer", function(e) {
                    A.push(e)
                }), P(r, "removeCustomPlayers", function() {
                    A.length = 0
                }), P(r, "canPlay", function(t) {
                    for (var r = 0, n = [].concat(A, h(e)); r < n.length; r++)
                        if (n[r].canPlay(t)) return !0;
                    return !1
                }), P(r, "canEnablePIP", function(t) {
                    for (var r = 0, n = [].concat(A, h(e)); r < n.length; r++) {
                        var o = n[r];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                }), s
            }
        },
        71776: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var n = r(38045);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var a = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = a;
            var i = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = i;
            var u = /vimeo\.com\/(?!progressive_redirect).+/;
            t.MATCH_URL_VIMEO = u;
            var l = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = l;
            var c = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = c;
            var s = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = s;
            var f = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
            t.MATCH_URL_WISTIA = f;
            var p = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = p;
            var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = y;
            var d = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
            t.MATCH_URL_DAILYMOTION = d;
            var h = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = h;
            var b = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
            t.MATCH_URL_VIDYARD = b;
            var v = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
            t.MATCH_URL_KALTURA = v;
            var m = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = m;
            var g = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
            t.VIDEO_EXTENSIONS = g;
            var O = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = O;
            var P = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = P;
            var w = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = w, t.canPlay = {
                youtube: function(e) {
                    return e instanceof Array ? e.every(function(e) {
                        return a.test(e)
                    }) : a.test(e)
                },
                soundcloud: function(e) {
                    return i.test(e) && !m.test(e)
                },
                vimeo: function(e) {
                    return u.test(e) && !g.test(e) && !O.test(e)
                },
                facebook: function(e) {
                    return l.test(e) || c.test(e)
                },
                streamable: function(e) {
                    return s.test(e)
                },
                wistia: function(e) {
                    return f.test(e)
                },
                twitch: function(e) {
                    return p.test(e) || y.test(e)
                },
                dailymotion: function(e) {
                    return d.test(e)
                },
                mixcloud: function(e) {
                    return h.test(e)
                },
                vidyard: function(e) {
                    return b.test(e)
                },
                kaltura: function(e) {
                    return v.test(e)
                },
                file: function e(t) {
                    if (t instanceof Array) {
                        var r, a = function(e, t) {
                            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                if (Array.isArray(e) || (a = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return o(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t)
                                        }
                                    }(e))) {
                                    a && (e = a);
                                    var r = 0,
                                        n = function() {};
                                    return {
                                        s: n,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: n
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var a, i, u = !0,
                                l = !1;
                            return {
                                s: function() {
                                    a = e[Symbol.iterator]()
                                },
                                n: function() {
                                    var e = a.next();
                                    return u = e.done, e
                                },
                                e: function(e) {
                                    l = !0, i = e
                                },
                                f: function() {
                                    try {
                                        u || null == a.return || a.return()
                                    } finally {
                                        if (l) throw i
                                    }
                                }
                            }
                        }(t);
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var i = r.value;
                                if ("string" == typeof i && e(i) || e(i.src)) return !0
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !!((0, n.isMediaStream)(t) || (0, n.isBlobUrl)(t)) || m.test(t) || g.test(t) || O.test(t) || P.test(t) || w.test(t)
                }
            }
        },
        80868: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.Z = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    return r.default = e, t && t.set(e, r), r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(d, e);
                var t, r, i, u = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r, o = p(d);
                    if (t) {
                        var a = p(this).constructor;
                        r = Reflect.construct(o, arguments, a)
                    } else r = o.apply(this, arguments);
                    return (e = r) && ("object" === n(e) || "function" == typeof e) ? e : f(this)
                });

                function d() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, d);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return y(f(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), y(f(e), "duration", null), y(f(e), "currentTime", null), y(f(e), "secondsLoaded", null), y(f(e), "mute", function() {
                        e.setMuted(!0)
                    }), y(f(e), "unmute", function() {
                        e.setMuted(!1)
                    }), y(f(e), "ref", function(t) {
                        e.container = t
                    }), e
                }
                return r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        this.duration = null, (0, a.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then(function(r) {
                            if (t.container) {
                                var n = t.props.config,
                                    o = n.playerOptions,
                                    a = n.title;
                                t.player = new r.Player(t.container, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? l(Object(r), !0).forEach(function(t) {
                                            y(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({
                                    url: e.replace("/manage/videos", ""),
                                    autoplay: t.props.playing,
                                    muted: t.props.muted,
                                    loop: t.props.loop,
                                    playsinline: t.props.playsinline,
                                    controls: t.props.controls
                                }, o)), t.player.ready().then(function() {
                                    var e = t.container.querySelector("iframe");
                                    e.style.width = "100%", e.style.height = "100%", a && (e.title = a)
                                }).catch(t.props.onError), t.player.on("loaded", function() {
                                    t.props.onReady(), t.refreshDuration()
                                }), t.player.on("play", function() {
                                    t.props.onPlay(), t.refreshDuration()
                                }), t.player.on("pause", t.props.onPause), t.player.on("seeked", function(e) {
                                    return t.props.onSeek(e.seconds)
                                }), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", function(e) {
                                    var r = e.seconds;
                                    t.currentTime = r
                                }), t.player.on("progress", function(e) {
                                    var r = e.seconds;
                                    t.secondsLoaded = r
                                }), t.player.on("bufferstart", t.props.onBuffer), t.player.on("bufferend", t.props.onBufferEnd), t.player.on("playbackratechange", function(e) {
                                    return t.props.onPlaybackRateChange(e.playbackRate)
                                })
                            }
                        }, this.props.onError)
                    }
                }, {
                    key: "refreshDuration",
                    value: function() {
                        var e = this;
                        this.player.getDuration().then(function(t) {
                            e.duration = t
                        })
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this.callPlayer("play");
                        e && e.catch(this.props.onError)
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.callPlayer("unload")
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        this.callPlayer("setCurrentTime", e), t || this.pause()
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        this.callPlayer("setMuted", e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("setPlaybackRate", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.display;
                        return o.default.createElement("div", {
                            key: this.props.url,
                            ref: this.ref,
                            style: {
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                display: e
                            }
                        })
                    }
                }], c(d.prototype, r), i && c(d, i), d
            }(o.Component);
            t.Z = d, y(d, "displayName", "Vimeo"), y(d, "canPlay", i.canPlay.vimeo), y(d, "forceLoad", !0)
        },
        85741: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultProps = t.propTypes = void 0;
            var n, o = (n = r(45697)) && n.__esModule ? n : {
                    default: n
                },
                a = o.default.string,
                i = o.default.bool,
                u = o.default.number,
                l = o.default.array,
                c = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                p = o.default.func,
                y = o.default.node,
                d = {
                    url: c([a, l, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: u,
                    muted: i,
                    playbackRate: u,
                    width: c([a, u]),
                    height: c([a, u]),
                    style: f,
                    progressInterval: u,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: c([i, a, f]),
                    playIcon: y,
                    previewTabIndex: u,
                    fallback: y,
                    oEmbedUrl: a,
                    wrapper: c([a, p, s({
                        render: p.isRequired
                    })]),
                    config: s({
                        soundcloud: s({
                            options: f
                        }),
                        youtube: s({
                            playerVars: f,
                            embedOptions: f,
                            onUnstarted: p
                        }),
                        facebook: s({
                            appId: a,
                            version: a,
                            playerId: a,
                            attributes: f
                        }),
                        dailymotion: s({
                            params: f
                        }),
                        vimeo: s({
                            playerOptions: f,
                            title: a
                        }),
                        file: s({
                            attributes: f,
                            tracks: l,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceSafariHLS: i,
                            forceDisableHls: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: s({
                            options: f,
                            playerId: a,
                            customControls: l
                        }),
                        mixcloud: s({
                            options: f
                        }),
                        twitch: s({
                            options: f,
                            playerId: a
                        }),
                        vidyard: s({
                            options: f
                        })
                    }),
                    onReady: p,
                    onStart: p,
                    onPlay: p,
                    onPause: p,
                    onBuffer: p,
                    onBufferEnd: p,
                    onEnded: p,
                    onError: p,
                    onDuration: p,
                    onSeek: p,
                    onPlaybackRateChange: p,
                    onPlaybackQualityChange: p,
                    onProgress: p,
                    onClickPreview: p,
                    onEnablePIP: p,
                    onDisablePIP: p
                };
            t.propTypes = d;
            var h = function() {};
            t.defaultProps = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: {
                        options: {
                            visual: !0,
                            buying: !1,
                            liking: !1,
                            download: !1,
                            sharing: !1,
                            show_comments: !1,
                            show_playcount: !1
                        }
                    },
                    youtube: {
                        playerVars: {
                            playsinline: 1,
                            showinfo: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            modestbranding: 1
                        },
                        embedOptions: {},
                        onUnstarted: h
                    },
                    facebook: {
                        appId: "1309697205772819",
                        version: "v3.3",
                        playerId: null,
                        attributes: {}
                    },
                    dailymotion: {
                        params: {
                            api: 1,
                            "endscreen-enable": !1
                        }
                    },
                    vimeo: {
                        playerOptions: {
                            autopause: !1,
                            byline: !1,
                            portrait: !1,
                            title: !1
                        },
                        title: null
                    },
                    file: {
                        attributes: {},
                        tracks: [],
                        forceVideo: !1,
                        forceAudio: !1,
                        forceHLS: !1,
                        forceDASH: !1,
                        forceFLV: !1,
                        hlsOptions: {},
                        hlsVersion: "1.1.4",
                        dashVersion: "3.1.3",
                        flvVersion: "1.5.0",
                        forceDisableHls: !1
                    },
                    wistia: {
                        options: {},
                        playerId: null,
                        customControls: null
                    },
                    mixcloud: {
                        options: {
                            hide_cover: 1
                        }
                    },
                    twitch: {
                        options: {},
                        playerId: null
                    },
                    vidyard: {
                        options: {}
                    }
                },
                onReady: h,
                onStart: h,
                onPlay: h,
                onPause: h,
                onBuffer: h,
                onBufferEnd: h,
                onEnded: h,
                onError: h,
                onDuration: h,
                onSeek: h,
                onPlaybackRateChange: h,
                onPlaybackQualityChange: h,
                onProgress: h,
                onClickPreview: h,
                onEnablePIP: h,
                onDisablePIP: h
            }
        },
        38045: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStartTime = function(e) {
                return f(e, u)
            }, t.parseEndTime = function(e) {
                return f(e, l)
            }, t.randomString = function() {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function(e) {
                return Object.keys(e).map(function(t) {
                    return "".concat(t, "=").concat(e[t])
                }).join("&")
            }, t.getSDK = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return !0
                    },
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.default,
                    i = p(t);
                return i && o(i) ? Promise.resolve(i) : new Promise(function(n, o) {
                    if (y[e]) {
                        y[e].push({
                            resolve: n,
                            reject: o
                        });
                        return
                    }
                    y[e] = [{
                        resolve: n,
                        reject: o
                    }];
                    var i = function(t) {
                        y[e].forEach(function(e) {
                            return e.resolve(t)
                        })
                    };
                    if (r) {
                        var u = window[r];
                        window[r] = function() {
                            u && u(), i(p(t))
                        }
                    }
                    a(e, function(n) {
                        n ? (y[e].forEach(function(e) {
                            return e.reject(n)
                        }), y[e] = null) : r || i(p(t))
                    })
                })
            }, t.getConfig = function(e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function(e) {
                for (var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, n), i = {}, u = Object.keys(e), l = 0; l < u.length; l++) {
                    var c = u[l]; - 1 === a.indexOf(c) && (i[c] = e[c])
                }
                return i
            }, t.callPlayer = function(e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
                    return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available", console.warn(r, "font-weight: bold", ""), null
                }
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function(e) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
            }, t.isBlobUrl = function(e) {
                return /^blob:/.test(e)
            }, t.supportsWebKitPresentationMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
            };
            var n = a(r(49090)),
                o = a(r(9996));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var u = /[?&#](?:start|t)=([0-9hms]+)/,
                l = /[?&#]end=([0-9hms]+)/,
                c = /(\d+)(h|m|s)/g,
                s = /^\d+$/;

            function f(e, t) {
                if (!(e instanceof Array)) {
                    var r = e.match(t);
                    if (r) {
                        var n = r[1];
                        if (n.match(c)) return function(e) {
                            for (var t = 0, r = c.exec(e); null !== r;) {
                                var n, o = function(e) {
                                        if (Array.isArray(e)) return e
                                    }(n = r) || function(e, t) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                            var r = [],
                                                n = !0,
                                                o = !1,
                                                a = void 0;
                                            try {
                                                for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                                            } catch (e) {
                                                o = !0, a = e
                                            } finally {
                                                try {
                                                    n || null == u.return || u.return()
                                                } finally {
                                                    if (o) throw a
                                                }
                                            }
                                            return r
                                        }
                                    }(n, 3) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
                                        }
                                    }(n, 3) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(),
                                    a = o[1],
                                    u = o[2];
                                "h" === u && (t += 3600 * parseInt(a, 10)), "m" === u && (t += 60 * parseInt(a, 10)), "s" === u && (t += parseInt(a, 10)), r = c.exec(e)
                            }
                            return t
                        }(n);
                        if (s.test(n)) return parseInt(n)
                    }
                }
            }

            function p(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            var y = {}
        },
        40712: function(e, t, r) {
            var n = r(70390).e,
                o = r(80868).Z;
            e.exports = n([{
                key: "vimeo",
                canPlay: o.canPlay,
                lazyPlayer: o
            }])
        }
    }
]);