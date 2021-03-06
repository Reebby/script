var unlayer = function(e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    return s.m = e, s.c = t, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s(s.s = 0)
}([function(e, t, s) {
    s(1), s(2), s(3), e.exports = s(4)
}, function(e, t) {
    Window.prototype.forceJURL = !1,
        function(e) {
            "use strict";
            var t = !1;
            if (!e.forceJURL) try {
                var s = new URL("b", "http://a");
                s.pathname = "c%20d", t = "http://a/c%20d" === s.href
            } catch (e) {}
            if (!t) {
                var i = Object.create(null);
                i.ftp = 21, i.file = 0, i.gopher = 70, i.http = 80, i.https = 443, i.ws = 80, i.wss = 443;
                var a = Object.create(null);
                a["%2e"] = ".", a[".%2e"] = "..", a["%2e."] = "..", a["%2e%2e"] = "..";
                var r = void 0,
                    n = /[a-zA-Z]/,
                    o = /[a-zA-Z0-9\+\-\.]/;
                m.prototype = {
                    toString: function() {
                        return this.href
                    },
                    get href() {
                        if (this._isInvalid) return this._url;
                        var e = "";
                        return "" == this._username && null == this._password || (e = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                    },
                    set href(e) {
                        v.call(this), p.call(this, e)
                    },
                    get protocol() {
                        return this._scheme + ":"
                    },
                    set protocol(e) {
                        this._isInvalid || p.call(this, e + ":", "scheme start")
                    },
                    get host() {
                        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                    },
                    set host(e) {
                        !this._isInvalid && this._isRelative && p.call(this, e, "host")
                    },
                    get hostname() {
                        return this._host
                    },
                    set hostname(e) {
                        !this._isInvalid && this._isRelative && p.call(this, e, "hostname")
                    },
                    get port() {
                        return this._port
                    },
                    set port(e) {
                        !this._isInvalid && this._isRelative && p.call(this, e, "port")
                    },
                    get pathname() {
                        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                    },
                    set pathname(e) {
                        !this._isInvalid && this._isRelative && (this._path = [], p.call(this, e, "relative path start"))
                    },
                    get search() {
                        return this._isInvalid || !this._query || "?" == this._query ? "" : this._query
                    },
                    set search(e) {
                        !this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), p.call(this, e, "query"))
                    },
                    get hash() {
                        return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment
                    },
                    set hash(e) {
                        this._isInvalid || (e ? (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), p.call(this, e, "fragment")) : this._fragment = "")
                    },
                    get origin() {
                        var e;
                        if (this._isInvalid || !this._scheme) return "";
                        switch (this._scheme) {
                            case "data":
                            case "file":
                            case "javascript":
                            case "mailto":
                                return "null"
                        }
                        return (e = this.host) ? this._scheme + "://" + e : ""
                    }
                };
                var l = e.URL;
                l && (m.createObjectURL = function(e) {
                    return l.createObjectURL.apply(l, arguments)
                }, m.revokeObjectURL = function(e) {
                    l.revokeObjectURL(e)
                }), e.URL = m
            }

            function h(e) {
                return void 0 !== i[e]
            }

            function c() {
                v.call(this), this._isInvalid = !0
            }

            function u(e) {
                return "" == e && c.call(this), e.toLowerCase()
            }

            function f(e) {
                var t = e.charCodeAt(0);
                return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
            }

            function d(e) {
                var t = e.charCodeAt(0);
                return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
            }

            function p(e, t, s) {
                function l(e) {
                    y.push(e)
                }
                var p = t || "scheme start",
                    v = 0,
                    m = "",
                    g = !1,
                    _ = !1,
                    y = [];
                e: for (;
                    (e[v - 1] != r || 0 == v) && !this._isInvalid;) {
                    var b = e[v];
                    switch (p) {
                        case "scheme start":
                            if (!b || !n.test(b)) {
                                if (t) {
                                    l("Invalid scheme.");
                                    break e
                                }
                                m = "", p = "no scheme";
                                continue
                            }
                            m += b.toLowerCase(), p = "scheme";
                            break;
                        case "scheme":
                            if (b && o.test(b)) m += b.toLowerCase();
                            else {
                                if (":" != b) {
                                    if (t) {
                                        if (r == b) break e;
                                        l("Code point not allowed in scheme: " + b);
                                        break e
                                    }
                                    m = "", v = 0, p = "no scheme";
                                    continue
                                }
                                if (this._scheme = m, m = "", t) break e;
                                h(this._scheme) && (this._isRelative = !0), p = "file" == this._scheme ? "relative" : this._isRelative && s && s._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                            }
                            break;
                        case "scheme data":
                            "?" == b ? (this._query = "?", p = "query") : "#" == b ? (this._fragment = "#", p = "fragment") : r != b && "\t" != b && "\n" != b && "\r" != b && (this._schemeData += f(b));
                            break;
                        case "no scheme":
                            if (s && h(s._scheme)) {
                                p = "relative";
                                continue
                            }
                            l("Missing scheme."), c.call(this);
                            break;
                        case "relative or authority":
                            if ("/" != b || "/" != e[v + 1]) {
                                l("Expected /, got: " + b), p = "relative";
                                continue
                            }
                            p = "authority ignore slashes";
                            break;
                        case "relative":
                            if (this._isRelative = !0, "file" != this._scheme && (this._scheme = s._scheme), r == b) {
                                this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;
                                break e
                            }
                            if ("/" == b || "\\" == b) "\\" == b && l("\\ is an invalid code point."), p = "relative slash";
                            else if ("?" == b) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = "?", this._username = s._username, this._password = s._password, p = "query";
                            else {
                                if ("#" != b) {
                                    var k = e[v + 1],
                                        w = e[v + 2];
                                    ("file" != this._scheme || !n.test(b) || ":" != k && "|" != k || r != w && "/" != w && "\\" != w && "?" != w && "#" != w) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), p = "relative path";
                                    continue
                                }
                                this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = "#", this._username = s._username, this._password = s._password, p = "fragment"
                            }
                            break;
                        case "relative slash":
                            if ("/" != b && "\\" != b) {
                                "file" != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), p = "relative path";
                                continue
                            }
                            "\\" == b && l("\\ is an invalid code point."), p = "file" == this._scheme ? "file host" : "authority ignore slashes";
                            break;
                        case "authority first slash":
                            if ("/" != b) {
                                l("Expected '/', got: " + b), p = "authority ignore slashes";
                                continue
                            }
                            p = "authority second slash";
                            break;
                        case "authority second slash":
                            if (p = "authority ignore slashes", "/" != b) {
                                l("Expected '/', got: " + b);
                                continue
                            }
                            break;
                        case "authority ignore slashes":
                            if ("/" != b && "\\" != b) {
                                p = "authority";
                                continue
                            }
                            l("Expected authority, got: " + b);
                            break;
                        case "authority":
                            if ("@" == b) {
                                g && (l("@ already seen."), m += "%40"), g = !0;
                                for (var M = 0; M < m.length; M++) {
                                    var I = m[M];
                                    if ("\t" != I && "\n" != I && "\r" != I)
                                        if (":" != I || null !== this._password) {
                                            var T = f(I);
                                            null !== this._password ? this._password += T : this._username += T
                                        } else this._password = "";
                                    else l("Invalid whitespace in authority.")
                                }
                                m = ""
                            } else {
                                if (r == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                    v -= m.length, m = "", p = "host";
                                    continue
                                }
                                m += b
                            }
                            break;
                        case "file host":
                            if (r == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                2 != m.length || !n.test(m[0]) || ":" != m[1] && "|" != m[1] ? 0 == m.length ? p = "relative path start" : (this._host = u.call(this, m), m = "", p = "relative path start") : p = "relative path";
                                continue
                            }
                            "\t" == b || "\n" == b || "\r" == b ? l("Invalid whitespace in file host.") : m += b;
                            break;
                        case "host":
                        case "hostname":
                            if (":" != b || _) {
                                if (r == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
                                    if (this._host = u.call(this, m), m = "", p = "relative path start", t) break e;
                                    continue
                                }
                                "\t" != b && "\n" != b && "\r" != b ? ("[" == b ? _ = !0 : "]" == b && (_ = !1), m += b) : l("Invalid code point in host/hostname: " + b)
                            } else if (this._host = u.call(this, m), m = "", p = "port", "hostname" == t) break e;
                            break;
                        case "port":
                            if (/[0-9]/.test(b)) m += b;
                            else {
                                if (r == b || "/" == b || "\\" == b || "?" == b || "#" == b || t) {
                                    if ("" != m) {
                                        var O = parseInt(m, 10);
                                        O != i[this._scheme] && (this._port = O + ""), m = ""
                                    }
                                    if (t) break e;
                                    p = "relative path start";
                                    continue
                                }
                                "\t" == b || "\n" == b || "\r" == b ? l("Invalid code point in port: " + b) : c.call(this)
                            }
                            break;
                        case "relative path start":
                            if ("\\" == b && l("'\\' not allowed in path."), p = "relative path", "/" != b && "\\" != b) continue;
                            break;
                        case "relative path":
                            var j;
                            if (r != b && "/" != b && "\\" != b && (t || "?" != b && "#" != b)) "\t" != b && "\n" != b && "\r" != b && (m += f(b));
                            else "\\" == b && l("\\ not allowed in relative path."), (j = a[m.toLowerCase()]) && (m = j), ".." == m ? (this._path.pop(), "/" != b && "\\" != b && this._path.push("")) : "." == m && "/" != b && "\\" != b ? this._path.push("") : "." != m && ("file" == this._scheme && 0 == this._path.length && 2 == m.length && n.test(m[0]) && "|" == m[1] && (m = m[0] + ":"), this._path.push(m)), m = "", "?" == b ? (this._query = "?", p = "query") : "#" == b && (this._fragment = "#", p = "fragment");
                            break;
                        case "query":
                            t || "#" != b ? r != b && "\t" != b && "\n" != b && "\r" != b && (this._query += d(b)) : (this._fragment = "#", p = "fragment");
                            break;
                        case "fragment":
                            r != b && "\t" != b && "\n" != b && "\r" != b && (this._fragment += b)
                    }
                    v++
                }
            }

            function v() {
                this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
            }

            function m(e, t) {
                void 0 === t || t instanceof m || (t = new m(String(t))), this._url = "" + e, v.call(this);
                var s = this._url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                p.call(this, s, null, t)
            }
        }(window)
}, function(e, t) {
    ! function(e) {
        var t = e.getElementsByTagName("script");
        "currentScript" in e || Object.defineProperty(e, "currentScript", {
            get: function() {
                try {
                    throw new Error
                } catch (i) {
                    var e, s = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack) || [!1])[1];
                    for (e in t)
                        if (t[e].src == s || "interactive" == t[e].readyState) return t[e];
                    return null
                }
            }
        })
    }(document)
}, function(e, t, s) {
    var i = new URL(document.currentScript.src),
        a = i.href.substring(0, i.href.lastIndexOf("/") + 1);
    s.p = a
}, function(e, t, s) {
    "use strict";

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable
            })))), i.forEach((function(t) {
                r(e, t, s[t])
            }))
        }
        return e
    }

    function a(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    s.r(t);
    var n = 0,
        o = !0,
        l = {},
        h = function() {
            function e(t) {
                var s = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), r(this, "id", void 0), r(this, "ready", void 0), r(this, "iframe", void 0), r(this, "messages", void 0), r(this, "callbackId", void 0), r(this, "callbacks", void 0), this.id = ++n, l[this.id] = this, this.ready = !1, this.iframe = this.createIframe(t), this.messages = [], this.iframe.onload = function() {
                    s.ready = !0, s.flushMessages()
                }, this.callbackId = 0, this.callbacks = {}
            }
            var t, s, o;
            return t = e, (s = [{
                key: "createIframe",
                value: function(e) {
                    var t = document.createElement("iframe");
                    return t.src = e, t.frameBorder = "0", t.width = "100%", t.height = "100%", t.style.minWidth = "1024px", t.style.minHeight = "100%", t.style.height = "100%", t.style.width = "100%", t.style.border = "0px", t
                }
            }, {
                key: "appendTo",
                value: function(e) {
                    e.appendChild(this.iframe)
                }
            }, {
                key: "postMessage",
                value: function(e, t) {
                    this.scheduleMessage(i({
                        action: e
                    }, t)), this.flushMessages()
                }
            }, {
                key: "withMessage",
                value: function(e, t, s) {
                    var a = this.callbackId++;
                    this.callbacks[a] = s, this.postMessage(e, i({
                        frameId: this.id,
                        callbackId: a
                    }, t))
                }
            }, {
                key: "scheduleMessage",
                value: function(e) {
                    this.messages.push(e)
                }
            }, {
                key: "flushMessages",
                value: function() {
                    var e = this;
                    this.ready && (this.messages.forEach((function(t) {
                        e.iframe && e.iframe.contentWindow && e.iframe.contentWindow.postMessage(t, "*")
                    })), this.messages = [])
                }
            }, {
                key: "handleMessage",
                value: function(e) {
                    var t = this,
                        s = e.action,
                        i = e.callbackId,
                        a = e.doneId,
                        r = e.result,
                        n = this.callbacks[i];
                    switch (s) {
                        case "response":
                            n && (n(r), delete this.callbacks[i]);
                            break;
                        case "callback":
                            r.attachments && (r.attachments = r.attachments.map((function(e) {
                                return new File([e.content], e.name, {
                                    type: e.type
                                })
                            }))), n && n(r, (function(e) {
                                t.postMessage("done", {
                                    doneId: a,
                                    result: e
                                })
                            }))
                    }
                }
            }, {
                key: "receiveMessage",
                value: function(e) {
                    e.data && this.handleMessage(e.data)
                }
            }]) && a(t.prototype, s), o && a(t, o), e
        }();

    function c(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    window.addEventListener("message", (function(e) {
        var t, s, i = o ? null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.frameId : 1;
        i && (null === (s = l[i]) || void 0 === s || s.receiveMessage(e))
    }), !1);
    var u = "1.0.57",
        f = function() {
            function e(t) {
                var s, i, a;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), a = null, (i = "frame") in (s = this) ? Object.defineProperty(s, i, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[i] = a, t && this.init(t)
            }
            var t, i, a;
            return t = e, (i = [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.loadEditor(e), this.renderEditor(e), this.initEditor(e)
                }
            }, {
                key: "loadEditor",
                value: function(e) {
                    var t = e.version || "1.0.80",
                        i = "".concat(s.p).concat(t, "/editor.html"),
                        a = e.offline ? "".concat(i, "?offline=true") : i;
                    t && t < u && (o = !1), this.frame = new h(a)
                }
            }, {
                key: "renderEditor",
                value: function(e) {
                    var t, s = null;
                    if (e.id ? s = document.getElementById(e.id) : e.className && (s = document.getElementsByClassName(e.className)[0]), !s) throw new Error("id or className must be provided.");
                    null === (t = this.frame) || void 0 === t || t.appendTo(s)
                }
            }, {
                key: "initEditor",
                value: function(e) {
                    var t, s = {};
                    e.source && (s.source = e.source), e.designMode && (s.designMode = e.designMode), e.displayMode && (s.displayMode = e.displayMode), e.projectId && (s.projectId = e.projectId), e.user && (s.user = e.user), e.templateId && (s.templateId = e.templateId), e.loadTimeout && (s.loadTimeout = e.loadTimeout), (e.safeHtml || e.safeHTML) && (s.safeHtml = !0), e.options && (s.options = e.options), e.tools && (s.tools = e.tools), e.excludeTools && (s.excludeTools = e.excludeTools), e.blocks && (s.blocks = e.blocks), e.editor && (s.editor = e.editor), e.fonts && (s.fonts = e.fonts), e.mergeTags && (s.mergeTags = e.mergeTags), e.designTags && (s.designTags = e.designTags), e.customCSS && (s.customCSS = e.customCSS), e.customJS && (s.customJS = e.customJS), e.locale && (s.locale = e.locale), e.translations && (s.translations = e.translations), e.appearance && (s.appearance = e.appearance), e.features && (s.features = e.features), e.designTagsConfig && (s.designTagsConfig = e.designTagsConfig), e.mergeTagsConfig && (s.mergeTagsConfig = e.mergeTagsConfig), null === (t = this.frame) || void 0 === t || t.postMessage("config", s)
                }
            }, {
                key: "registerCallback",
                value: function(e, t) {
                    var s;
                    null === (s = this.frame) || void 0 === s || s.withMessage("registerCallback", {
                        type: e
                    }, t)
                }
            }, {
                key: "unregisterCallback",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterCallback", {
                        type: e
                    })
                }
            }, {
                key: "registerProvider",
                value: function(e, t) {
                    var s;
                    null === (s = this.frame) || void 0 === s || s.withMessage("registerProvider", {
                        type: e
                    }, t)
                }
            }, {
                key: "unregisterProvider",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterProvider", {
                        type: e
                    })
                }
            }, {
                key: "reloadProvider",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("reloadProvider", {
                        type: e
                    })
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    var s;
                    null === (s = this.frame) || void 0 === s || s.withMessage("registerCallback", {
                        type: e
                    }, t)
                }
            }, {
                key: "removeEventListener",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterCallback", {
                        type: e
                    })
                }
            }, {
                key: "setDesignMode",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("setDesignMode", {
                        designMode: e
                    })
                }
            }, {
                key: "setDisplayMode",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("setDisplayMode", {
                        displayMode: e
                    })
                }
            }, {
                key: "loadProject",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("loadProject", {
                        projectId: e
                    })
                }
            }, {
                key: "loadUser",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("loadUser", {
                        user: e
                    })
                }
            }, {
                key: "loadTemplate",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("loadTemplate", {
                        templateId: e
                    })
                }
            }, {
                key: "setMergeTags",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setMergeTags", {
                        mergeTags: e
                    })
                }
            }, {
                key: "setLocale",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setLocale", {
                        locale: e
                    })
                }
            }, {
                key: "setTranslations",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setTranslations", {
                        translations: e
                    })
                }
            }, {
                key: "loadBlank",
                value: function() {
                    var e;
                    null === (e = this.frame) || void 0 === e || e.postMessage("loadBlank", {})
                }
            }, {
                key: "loadDesign",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("loadDesign", {
                        design: e
                    })
                }
            }, {
                key: "saveDesign",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("saveDesign", {}, e)
                }
            }, {
                key: "exportHtml",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("exportHtml", {}, e)
                }
            }, {
                key: "exportLiveHtml",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.withMessage("exportLiveHtml", {}, e)
                }
            }, {
                key: "setAppearance",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setAppearance", {
                        appearance: e
                    })
                }
            }, {
                key: "setDesignTagsConfig",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setDesignTagsConfig", {
                        designTagsConfig: e
                    })
                }
            }, {
                key: "setMergeTagsConfig",
                value: function(e) {
                    var t;
                    null === (t = this.frame) || void 0 === t || t.postMessage("setMergeTagsConfig", {
                        mergeTagsConfig: e
                    })
                }
            }]) && c(t.prototype, i), a && c(t, a), e
        }();

    function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function v(e, t) {
        return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), v(this, m(t).apply(this, arguments))
        }
        var s, i, a;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }(t, e), s = t, (i = [{
            key: "createEditor",
            value: function(e) {
                return new f(e)
            }
        }]) && p(s.prototype, i), a && p(s, a), t
    }(f);
    t.default = new _
}]).default;