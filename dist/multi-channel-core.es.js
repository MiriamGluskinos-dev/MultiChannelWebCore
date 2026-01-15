import Me, { useState as ae, useEffect as we, createContext as Gt, useContext as Zt, useCallback as Qt, useRef as wt } from "react";
import { Button as Ve, Icon as Ye, Toast as en } from "@igds/react";
function St(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: tn } = Object.prototype, { getPrototypeOf: He } = Object, { iterator: Te, toStringTag: Tt } = Symbol, _e = /* @__PURE__ */ ((t) => (e) => {
  const n = tn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (t) => (t = t.toLowerCase(), (e) => _e(e) === t), Oe = (t) => (e) => typeof e === t, { isArray: Q } = Array, Z = Oe("undefined");
function ce(t) {
  return t !== null && !Z(t) && t.constructor !== null && !Z(t.constructor) && F(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const _t = I("ArrayBuffer");
function nn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && _t(t.buffer), e;
}
const rn = Oe("string"), F = Oe("function"), Ot = Oe("number"), le = (t) => t !== null && typeof t == "object", sn = (t) => t === !0 || t === !1, ye = (t) => {
  if (_e(t) !== "object")
    return !1;
  const e = He(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Tt in t) && !(Te in t);
}, on = (t) => {
  if (!le(t) || ce(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, an = I("Date"), cn = I("File"), ln = I("Blob"), un = I("FileList"), fn = (t) => le(t) && F(t.pipe), dn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || F(t.append) && ((e = _e(t)) === "formdata" || // detect form-data instance
  e === "object" && F(t.toString) && t.toString() === "[object FormData]"));
}, hn = I("URLSearchParams"), [pn, mn, bn, gn] = ["ReadableStream", "Request", "Response", "Headers"].map(I), yn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ue(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Q(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if (ce(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, t[a], a, t);
  }
}
function Ct(t, e) {
  if (ce(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const J = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xt = (t) => !Z(t) && t !== J;
function Be() {
  const { caseless: t, skipUndefined: e } = xt(this) && this || {}, n = {}, r = (s, o) => {
    const i = t && Ct(n, o) || o;
    ye(n[i]) && ye(s) ? n[i] = Be(n[i], s) : ye(s) ? n[i] = Be({}, s) : Q(s) ? n[i] = s.slice() : (!e || !Z(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && ue(arguments[s], r);
  return n;
}
const En = (t, e, n, { allOwnKeys: r } = {}) => (ue(e, (s, o) => {
  n && F(s) ? t[o] = St(s, n) : t[o] = s;
}, { allOwnKeys: r }), t), Rn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), wn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Sn = (t, e, n, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && He(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Tn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, _n = (t) => {
  if (!t) return null;
  if (Q(t)) return t;
  let e = t.length;
  if (!Ot(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, On = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && He(Uint8Array)), Cn = (t, e) => {
  const r = (t && t[Te]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, xn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, An = I("HTMLFormElement"), Nn = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ke = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), kn = I("RegExp"), At = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  ue(n, (s, o) => {
    let i;
    (i = e(s, o, t)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(t, r);
}, Pn = (t) => {
  At(t, (e, n) => {
    if (F(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (F(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, jn = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Q(t) ? r(t) : r(String(t).split(e)), n;
}, Ln = () => {
}, Fn = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function vn(t) {
  return !!(t && F(t.append) && t[Tt] === "FormData" && t[Te]);
}
const Un = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (le(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (ce(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = Q(r) ? [] : {};
        return ue(r, (i, a) => {
          const h = n(i, s + 1);
          !Z(h) && (o[a] = h);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, Bn = I("AsyncFunction"), In = (t) => t && (le(t) || F(t)) && F(t.then) && F(t.catch), Nt = ((t, e) => t ? setImmediate : e ? ((n, r) => (J.addEventListener("message", ({ source: s, data: o }) => {
  s === J && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), J.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  F(J.postMessage)
), Dn = typeof queueMicrotask < "u" ? queueMicrotask.bind(J) : typeof process < "u" && process.nextTick || Nt, $n = (t) => t != null && F(t[Te]), c = {
  isArray: Q,
  isArrayBuffer: _t,
  isBuffer: ce,
  isFormData: dn,
  isArrayBufferView: nn,
  isString: rn,
  isNumber: Ot,
  isBoolean: sn,
  isObject: le,
  isPlainObject: ye,
  isEmptyObject: on,
  isReadableStream: pn,
  isRequest: mn,
  isResponse: bn,
  isHeaders: gn,
  isUndefined: Z,
  isDate: an,
  isFile: cn,
  isBlob: ln,
  isRegExp: kn,
  isFunction: F,
  isStream: fn,
  isURLSearchParams: hn,
  isTypedArray: On,
  isFileList: un,
  forEach: ue,
  merge: Be,
  extend: En,
  trim: yn,
  stripBOM: Rn,
  inherits: wn,
  toFlatObject: Sn,
  kindOf: _e,
  kindOfTest: I,
  endsWith: Tn,
  toArray: _n,
  forEachEntry: Cn,
  matchAll: xn,
  isHTMLForm: An,
  hasOwnProperty: Ke,
  hasOwnProp: Ke,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: At,
  freezeMethods: Pn,
  toObjectSet: jn,
  toCamelCase: Nn,
  noop: Ln,
  toFiniteNumber: Fn,
  findKey: Ct,
  global: J,
  isContextDefined: xt,
  isSpecCompliantForm: vn,
  toJSONObject: Un,
  isAsyncFn: Bn,
  isThenable: In,
  setImmediate: Nt,
  asap: Dn,
  isIterable: $n
};
function E(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(E, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const kt = E.prototype, Pt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Pt[t] = { value: t };
});
Object.defineProperties(E, Pt);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
E.from = (t, e, n, r, s, o) => {
  const i = Object.create(kt);
  c.toFlatObject(t, i, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = t && t.message ? t.message : "Error", h = e == null && t ? t.code : e;
  return E.call(i, a, h, n, r, s), t && i.cause == null && Object.defineProperty(i, "cause", { value: t, configurable: !0 }), i.name = t && t.name || "Error", o && Object.assign(i, o), i;
};
const qn = null;
function Ie(t) {
  return c.isPlainObject(t) || c.isArray(t);
}
function jt(t) {
  return c.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Xe(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = jt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Mn(t) {
  return c.isArray(t) && !t.some(Ie);
}
const Hn = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ce(t, e, n) {
  if (!c.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, m) {
    return !c.isUndefined(m[b]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (c.isDate(d))
      return d.toISOString();
    if (c.isBoolean(d))
      return d.toString();
    if (!h && c.isBlob(d))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? h && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, b, m) {
    let _ = d;
    if (d && !m && typeof d == "object") {
      if (c.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && Mn(d) || (c.isFileList(d) || c.endsWith(b, "[]")) && (_ = c.toArray(d)))
        return b = jt(b), _.forEach(function(S, w) {
          !(c.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Xe([b], w, o) : i === null ? b : b + "[]",
            l(S)
          );
        }), !1;
    }
    return Ie(d) ? !0 : (e.append(Xe(m, b, o), l(d)), !1);
  }
  const p = [], g = Object.assign(Hn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ie
  });
  function R(d, b) {
    if (!c.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      p.push(d), c.forEach(d, function(_, A) {
        (!(c.isUndefined(_) || _ === null) && s.call(
          e,
          _,
          c.isString(A) ? A.trim() : A,
          b,
          g
        )) === !0 && R(_, b ? b.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!c.isObject(t))
    throw new TypeError("data must be an object");
  return R(t), e;
}
function Ge(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function ze(t, e) {
  this._pairs = [], t && Ce(t, this, e);
}
const Lt = ze.prototype;
Lt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Lt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Ge);
  } : Ge;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zn(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ft(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || zn;
  c.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(e, n) : o = c.isURLSearchParams(e) ? e.toString() : new ze(e, n).toString(r), o) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class Ze {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    c.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const vt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jn = typeof URLSearchParams < "u" ? URLSearchParams : ze, Wn = typeof FormData < "u" ? FormData : null, Vn = typeof Blob < "u" ? Blob : null, Yn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jn,
    FormData: Wn,
    Blob: Vn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Je = typeof window < "u" && typeof document < "u", De = typeof navigator == "object" && navigator || void 0, Kn = Je && (!De || ["ReactNative", "NativeScript", "NS"].indexOf(De.product) < 0), Xn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gn = Je && window.location.href || "http://localhost", Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Je,
  hasStandardBrowserEnv: Kn,
  hasStandardBrowserWebWorkerEnv: Xn,
  navigator: De,
  origin: Gn
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Zn,
  ...Yn
};
function Qn(t, e) {
  return Ce(t, new L.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return L.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function er(t) {
  return c.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function tr(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Ut(t) {
  function e(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), h = o >= n.length;
    return i = !i && c.isArray(s) ? s.length : i, h ? (c.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !c.isObject(s[i])) && (s[i] = []), e(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = tr(s[i])), !a);
  }
  if (c.isFormData(t) && c.isFunction(t.entries)) {
    const n = {};
    return c.forEachEntry(t, (r, s) => {
      e(er(r), s, n, 0);
    }), n;
  }
  return null;
}
function nr(t, e, n) {
  if (c.isString(t))
    try {
      return (e || JSON.parse)(t), c.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const fe = {
  transitional: vt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(e);
    if (o && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return s ? JSON.stringify(Ut(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qn(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Ce(
          a ? { "files[]": e } : e,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), nr(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || fe.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? E.from(a, E.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  fe.headers[t] = {};
});
const rr = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), sr = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && rr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Qe = /* @__PURE__ */ Symbol("internals");
function se(t) {
  return t && String(t).trim().toLowerCase();
}
function Ee(t) {
  return t === !1 || t == null ? t : c.isArray(t) ? t.map(Ee) : String(t);
}
function or(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const ir = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ke(t, e, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!c.isString(e)) {
    if (c.isString(r))
      return e.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(e);
  }
}
function ar(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function cr(t, e) {
  const n = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
let v = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(a, h, l) {
      const u = se(h);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = c.findKey(s, u);
      (!p || s[p] === void 0 || l === !0 || l === void 0 && s[p] !== !1) && (s[p || h] = Ee(a));
    }
    const i = (a, h) => c.forEach(a, (l, u) => o(l, u, h));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (c.isString(e) && (e = e.trim()) && !ir(e))
      i(sr(e), n);
    else if (c.isObject(e) && c.isIterable(e)) {
      let a = {}, h, l;
      for (const u of e) {
        if (!c.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (h = a[l]) ? c.isArray(h) ? [...h, u[1]] : [h, u[1]] : u[1];
      }
      i(a, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = se(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return or(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = se(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ke(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = se(i), i) {
        const a = c.findKey(r, i);
        a && (!n || ke(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || ke(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = Ee(s), delete n[o];
        return;
      }
      const a = e ? ar(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Ee(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Qe] = this[Qe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = se(i);
      r[a] || (cr(s, i), r[a] = !0);
    }
    return c.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
v.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(v.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(v);
function Pe(t, e) {
  const n = this || fe, r = e || n, s = v.from(r.headers);
  let o = r.data;
  return c.forEach(t, function(a) {
    o = a.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Bt(t) {
  return !!(t && t.__CANCEL__);
}
function ee(t, e, n) {
  E.call(this, t ?? "canceled", E.ERR_CANCELED, e, n), this.name = "CanceledError";
}
c.inherits(ee, E, {
  __CANCEL__: !0
});
function It(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new E(
    "Request failed with status code " + n.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function lr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ur(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(h) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = h, r[s] = l;
    let p = o, g = 0;
    for (; p !== s; )
      g += n[p++], p = p % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), l - i < e)
      return;
    const R = u && l - u;
    return R ? Math.round(g * 1e3 / R) : void 0;
  };
}
function fr(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const i = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), t(...l);
  };
  return [(...l) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const Se = (t, e, n = 3) => {
  let r = 0;
  const s = ur(50, 250);
  return fr((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, h = i - r, l = s(h), u = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: h,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, et = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, tt = (t) => (...e) => c.asap(() => t(...e)), dr = L.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, L.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(L.origin),
  L.navigator && /(msie|trident)/i.test(L.navigator.userAgent)
) : () => !0, hr = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${t}=${encodeURIComponent(e)}`];
      c.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), c.isString(r) && a.push(`path=${r}`), c.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), c.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function pr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function mr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Dt(t, e, n) {
  let r = !pr(e);
  return t && (r || n == !1) ? mr(t, e) : e;
}
const nt = (t) => t instanceof v ? { ...t } : t;
function Y(t, e) {
  e = e || {};
  const n = {};
  function r(l, u, p, g) {
    return c.isPlainObject(l) && c.isPlainObject(u) ? c.merge.call({ caseless: g }, l, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function s(l, u, p, g) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return r(void 0, l, p, g);
    } else return r(l, u, p, g);
  }
  function o(l, u) {
    if (!c.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, p) {
    if (p in e)
      return r(l, u);
    if (p in t)
      return r(void 0, l);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (l, u, p) => s(nt(l), nt(u), p, !0)
  };
  return c.forEach(Object.keys({ ...t, ...e }), function(u) {
    const p = h[u] || s, g = p(t[u], e[u], u);
    c.isUndefined(g) && p !== a || (n[u] = g);
  }), n;
}
const $t = (t) => {
  const e = Y({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  if (e.headers = i = v.from(i), e.url = Ft(Dt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), c.isFormData(n)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (c.isFunction(n.getHeaders)) {
      const h = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(h).forEach(([u, p]) => {
        l.includes(u.toLowerCase()) && i.set(u, p);
      });
    }
  }
  if (L.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(e)), r || r !== !1 && dr(e.url))) {
    const h = s && o && hr.read(o);
    h && i.set(s, h);
  }
  return e;
}, br = typeof XMLHttpRequest < "u", gr = br && function(t) {
  return new Promise(function(n, r) {
    const s = $t(t);
    let o = s.data;
    const i = v.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: h, onDownloadProgress: l } = s, u, p, g, R, d;
    function b() {
      R && R(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function _() {
      if (!m)
        return;
      const S = v.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: S,
        config: t,
        request: m
      };
      It(function(O) {
        n(O), b();
      }, function(O) {
        r(O), b();
      }, x), m = null;
    }
    "onloadend" in m ? m.onloadend = _ : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, m.onabort = function() {
      m && (r(new E("Request aborted", E.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function(w) {
      const x = w && w.message ? w.message : "Network Error", P = new E(x, E.ERR_NETWORK, t, m);
      P.event = w || null, r(P), m = null;
    }, m.ontimeout = function() {
      let w = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || vt;
      s.timeoutErrorMessage && (w = s.timeoutErrorMessage), r(new E(
        w,
        x.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        t,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && c.forEach(i.toJSON(), function(w, x) {
      m.setRequestHeader(x, w);
    }), c.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), a && a !== "json" && (m.responseType = s.responseType), l && ([g, d] = Se(l, !0), m.addEventListener("progress", g)), h && m.upload && ([p, R] = Se(h), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (u = (S) => {
      m && (r(!S || S.type ? new ee(null, t, m) : S), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const A = lr(s.url);
    if (A && L.protocols.indexOf(A) === -1) {
      r(new E("Unsupported protocol " + A + ":", E.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(o || null);
  });
}, yr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof E ? u : new ee(u instanceof Error ? u.message : u));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new E(`timeout ${e} of ms exceeded`, E.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", o));
    const { signal: h } = r;
    return h.unsubscribe = () => c.asap(a), h;
  }
}, Er = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Rr = async function* (t, e) {
  for await (const n of wr(t))
    yield* Er(n, e);
}, wr = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, rt = (t, e, n, r) => {
  const s = Rr(t, e);
  let o = 0, i, a = (h) => {
    i || (i = !0, r && r(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          a(), h.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let g = o += p;
          n(g);
        }
        h.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(h) {
      return a(h), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, st = 64 * 1024, { isFunction: me } = c, Sr = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(c.global), {
  ReadableStream: ot,
  TextEncoder: it
} = c.global, at = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Tr = (t) => {
  t = c.merge.call({
    skipUndefined: !0
  }, Sr, t);
  const { fetch: e, Request: n, Response: r } = t, s = e ? me(e) : typeof fetch == "function", o = me(n), i = me(r);
  if (!s)
    return !1;
  const a = s && me(ot), h = s && (typeof it == "function" ? /* @__PURE__ */ ((d) => (b) => d.encode(b))(new it()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), l = o && a && at(() => {
    let d = !1;
    const b = new n(L.origin, {
      body: new ot(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !b;
  }), u = i && a && at(() => c.isReadableStream(new r("").body)), p = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !p[d] && (p[d] = (b, m) => {
      let _ = b && b[d];
      if (_)
        return _.call(b);
      throw new E(`Response type '${d}' is not supported`, E.ERR_NOT_SUPPORT, m);
    });
  });
  const g = async (d) => {
    if (d == null)
      return 0;
    if (c.isBlob(d))
      return d.size;
    if (c.isSpecCompliantForm(d))
      return (await new n(L.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(d) || c.isArrayBuffer(d))
      return d.byteLength;
    if (c.isURLSearchParams(d) && (d = d + ""), c.isString(d))
      return (await h(d)).byteLength;
  }, R = async (d, b) => {
    const m = c.toFiniteNumber(d.getContentLength());
    return m ?? g(b);
  };
  return async (d) => {
    let {
      url: b,
      method: m,
      data: _,
      signal: A,
      cancelToken: S,
      timeout: w,
      onDownloadProgress: x,
      onUploadProgress: P,
      responseType: O,
      headers: te,
      withCredentials: q = "same-origin",
      fetchOptions: de
    } = $t(d), he = e || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let M = yr([A, S && S.toAbortSignal()], w), H = null;
    const $ = M && M.unsubscribe && (() => {
      M.unsubscribe();
    });
    let X;
    try {
      if (P && l && m !== "get" && m !== "head" && (X = await R(te, _)) !== 0) {
        let f = new n(b, {
          method: "POST",
          body: _,
          duplex: "half"
        }), y;
        if (c.isFormData(_) && (y = f.headers.get("content-type")) && te.setContentType(y), f.body) {
          const [T, C] = et(
            X,
            Se(tt(P))
          );
          _ = rt(f.body, st, T, C);
        }
      }
      c.isString(q) || (q = q ? "include" : "omit");
      const U = o && "credentials" in n.prototype, ne = {
        ...de,
        signal: M,
        method: m.toUpperCase(),
        headers: te.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: U ? q : void 0
      };
      H = o && new n(b, ne);
      let B = await (o ? he(H, de) : he(b, ne));
      const re = u && (O === "stream" || O === "response");
      if (u && (x || re && $)) {
        const f = {};
        ["status", "statusText", "headers"].forEach((z) => {
          f[z] = B[z];
        });
        const y = c.toFiniteNumber(B.headers.get("content-length")), [T, C] = x && et(
          y,
          Se(tt(x), !0)
        ) || [];
        B = new r(
          rt(B.body, st, T, () => {
            C && C(), $ && $();
          }),
          f
        );
      }
      O = O || "text";
      let pe = await p[c.findKey(p, O) || "text"](B, d);
      return !re && $ && $(), await new Promise((f, y) => {
        It(f, y, {
          data: pe,
          headers: v.from(B.headers),
          status: B.status,
          statusText: B.statusText,
          config: d,
          request: H
        });
      });
    } catch (U) {
      throw $ && $(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new E("Network Error", E.ERR_NETWORK, d, H),
        {
          cause: U.cause || U
        }
      ) : E.from(U, U && U.code, d, H);
    }
  };
}, _r = /* @__PURE__ */ new Map(), qt = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: s } = e, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, h, l, u = _r;
  for (; a--; )
    h = o[a], l = u.get(h), l === void 0 && u.set(h, l = a ? /* @__PURE__ */ new Map() : Tr(e)), u = l;
  return l;
};
qt();
const We = {
  http: qn,
  xhr: gr,
  fetch: {
    get: qt
  }
};
c.forEach(We, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const ct = (t) => `- ${t}`, Or = (t) => c.isFunction(t) || t === null || t === !1;
function Cr(t, e) {
  t = c.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = t[i];
    let a;
    if (s = r, !Or(r) && (s = We[(a = String(r)).toLowerCase()], s === void 0))
      throw new E(`Unknown adapter '${a}'`);
    if (s && (c.isFunction(s) || (s = s.get(e))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([h, l]) => `adapter ${h} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(ct).join(`
`) : " " + ct(i[0]) : "as no adapter specified";
    throw new E(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Mt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Cr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: We
};
function je(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ee(null, t);
}
function lt(t) {
  return je(t), t.headers = v.from(t.headers), t.data = Pe.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Mt.getAdapter(t.adapter || fe.adapter, t)(t).then(function(r) {
    return je(t), r.data = Pe.call(
      t,
      t.transformResponse,
      r
    ), r.headers = v.from(r.headers), r;
  }, function(r) {
    return Bt(r) || (je(t), r && r.response && (r.response.data = Pe.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = v.from(r.response.headers))), Promise.reject(r);
  });
}
const Ht = "1.13.2", xe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  xe[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ut = {};
xe.transitional = function(e, n, r) {
  function s(o, i) {
    return "[Axios v" + Ht + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new E(
        s(i, " has been removed" + (n ? " in " + n : "")),
        E.ERR_DEPRECATED
      );
    return n && !ut[i] && (ut[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
xe.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function xr(t, e, n) {
  if (typeof t != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const a = t[o], h = a === void 0 || i(a, o, t);
      if (h !== !0)
        throw new E("option " + o + " must be " + h, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const Re = {
  assertOptions: xr,
  validators: xe
}, D = Re.validators;
let W = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Ze(),
      response: new Ze()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Y(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Re.assertOptions(r, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Re.assertOptions(s, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Re.assertOptions(n, {
      baseUrl: D.spelling("baseURL"),
      withXsrfToken: D.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = v.concat(i, o);
    const a = [];
    let h = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (h = h && b.synchronous, a.unshift(b.fulfilled, b.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(b) {
      l.push(b.fulfilled, b.rejected);
    });
    let u, p = 0, g;
    if (!h) {
      const d = [lt.bind(this), void 0];
      for (d.unshift(...a), d.push(...l), g = d.length, u = Promise.resolve(n); p < g; )
        u = u.then(d[p++], d[p++]);
      return u;
    }
    g = a.length;
    let R = n;
    for (; p < g; ) {
      const d = a[p++], b = a[p++];
      try {
        R = d(R);
      } catch (m) {
        b.call(this, m);
        break;
      }
    }
    try {
      u = lt.call(this, R);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, g = l.length; p < g; )
      u = u.then(l[p++], l[p++]);
    return u;
  }
  getUri(e) {
    e = Y(this.defaults, e);
    const n = Dt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ft(n, e.params, e.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(e) {
  W.prototype[e] = function(n, r) {
    return this.request(Y(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, i, a) {
      return this.request(Y(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  W.prototype[e] = n(), W.prototype[e + "Form"] = n(!0);
});
let Ar = class zt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, a) {
      r.reason || (r.reason = new ee(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new zt(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Nr(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function kr(t) {
  return c.isObject(t) && t.isAxiosError === !0;
}
const $e = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries($e).forEach(([t, e]) => {
  $e[e] = t;
});
function Jt(t) {
  const e = new W(t), n = St(W.prototype.request, e);
  return c.extend(n, W.prototype, e, { allOwnKeys: !0 }), c.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Jt(Y(t, s));
  }, n;
}
const N = Jt(fe);
N.Axios = W;
N.CanceledError = ee;
N.CancelToken = Ar;
N.isCancel = Bt;
N.VERSION = Ht;
N.toFormData = Ce;
N.AxiosError = E;
N.Cancel = N.CanceledError;
N.all = function(e) {
  return Promise.all(e);
};
N.spread = Nr;
N.isAxiosError = kr;
N.mergeConfig = Y;
N.AxiosHeaders = v;
N.formToJSON = (t) => Ut(c.isHTMLForm(t) ? new FormData(t) : t);
N.getAdapter = Mt.getAdapter;
N.HttpStatusCode = $e;
N.default = N;
const {
  Axios: Rs,
  AxiosError: ws,
  CanceledError: Ss,
  isCancel: Ts,
  CancelToken: _s,
  VERSION: Os,
  all: Cs,
  Cancel: xs,
  isAxiosError: As,
  spread: Ns,
  toFormData: ks,
  AxiosHeaders: Ps,
  HttpStatusCode: js,
  formToJSON: Ls,
  getAdapter: Fs,
  mergeConfig: vs
} = N, Wt = N.create({
  baseURL: "https://apig2g-t.meches.gov.il:13443",
  //https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Wt.interceptors.request.use((t) => t);
Wt.interceptors.response.use((t) => t, (t) => Promise.reject(t));
const Pr = async (t, e, n) => new Promise((r) => {
  setTimeout(() => {
    r({
      data: {
        __mock__: !0,
        url: t,
        method: e,
        request: n
      }
    });
  }, 200);
}), Us = (t) => {
  const [e, n] = ae(null), [r, s] = ae(null), [o, i] = ae(!1), {
    url: a,
    method: h,
    data: l
  } = t, u = (p) => Pr(p.url, p.method, p.data);
  return we(() => {
    a && h && l && (async () => {
      i(!0);
      try {
        console.log("API request:", a, h, l);
        const g = await u({
          url: a,
          method: h,
          data: l
        });
        console.log("API response:", g.data), n(g.data), s(null);
      } catch (g) {
        console.error("API request error:", g), s(g?.message ? g : null), n(null);
      } finally {
        i(!1);
      }
    })();
  }, [a, h, l]), {
    response: {
      data: e,
      error: r,
      status: o ? "pending" : r ? "error" : "success"
    }
  };
};
var be = { exports: {} }, oe = {};
var ft;
function jr() {
  if (ft) return oe;
  ft = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: t,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return oe.Fragment = e, oe.jsx = n, oe.jsxs = n, oe;
}
var ie = {};
var dt;
function Lr() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === he ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case m:
          return "Fragment";
        case A:
          return "Profiler";
        case _:
          return "StrictMode";
        case P:
          return "Suspense";
        case O:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case b:
            return "Portal";
          case w:
            return f.displayName || "Context";
          case S:
            return (f._context.displayName || "Context") + ".Consumer";
          case x:
            var y = f.render;
            return f = f.displayName, f || (f = y.displayName || y.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case te:
            return y = f.displayName || null, y !== null ? y : t(f.type) || "Memo";
          case q:
            y = f._payload, f = f._init;
            try {
              return t(f(y));
            } catch {
            }
        }
      return null;
    }
    function e(f) {
      return "" + f;
    }
    function n(f) {
      try {
        e(f);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var T = y.error, C = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return T.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), e(f);
      }
    }
    function r(f) {
      if (f === m) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === q)
        return "<...>";
      try {
        var y = t(f);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var f = M.A;
      return f === null ? null : f.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(f) {
      if (H.call(f, "key")) {
        var y = Object.getOwnPropertyDescriptor(f, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function a(f, y) {
      function T() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: T,
        configurable: !0
      });
    }
    function h() {
      var f = t(this.type);
      return ne[f] || (ne[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function l(f, y, T, C, z, Ae) {
      var j = T.ref;
      return f = {
        $$typeof: d,
        type: f,
        key: y,
        props: T,
        _owner: C
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function u(f, y, T, C, z, Ae) {
      var j = y.children;
      if (j !== void 0)
        if (C)
          if ($(j)) {
            for (C = 0; C < j.length; C++)
              p(j[C]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(j);
      if (H.call(y, "key")) {
        j = t(f);
        var G = Object.keys(y).filter(function(Xt) {
          return Xt !== "key";
        });
        C = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", pe[j + C] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          j,
          G,
          j
        ), pe[j + C] = !0);
      }
      if (j = null, T !== void 0 && (n(T), j = "" + T), i(y) && (n(y.key), j = "" + y.key), "key" in y) {
        T = {};
        for (var Ne in y)
          Ne !== "key" && (T[Ne] = y[Ne]);
      } else T = y;
      return j && a(
        T,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), l(
        f,
        j,
        T,
        s(),
        z,
        Ae
      );
    }
    function p(f) {
      g(f) ? f._store && (f._store.validated = 1) : typeof f == "object" && f !== null && f.$$typeof === q && (f._payload.status === "fulfilled" ? g(f._payload.value) && f._payload.value._store && (f._payload.value._store.validated = 1) : f._store && (f._store.validated = 1));
    }
    function g(f) {
      return typeof f == "object" && f !== null && f.$$typeof === d;
    }
    var R = Me, d = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.suspense_list"), te = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), he = /* @__PURE__ */ Symbol.for("react.client.reference"), M = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, $ = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var U, ne = {}, B = R.react_stack_bottom_frame.bind(
      R,
      o
    )(), re = X(r(o)), pe = {};
    ie.Fragment = m, ie.jsx = function(f, y, T) {
      var C = 1e4 > M.recentlyCreatedOwnerStacks++;
      return u(
        f,
        y,
        T,
        !1,
        C ? Error("react-stack-top-frame") : B,
        C ? X(r(f)) : re
      );
    }, ie.jsxs = function(f, y, T) {
      var C = 1e4 > M.recentlyCreatedOwnerStacks++;
      return u(
        f,
        y,
        T,
        !0,
        C ? Error("react-stack-top-frame") : B,
        C ? X(r(f)) : re
      );
    };
  })()), ie;
}
var ht;
function Fr() {
  return ht || (ht = 1, process.env.NODE_ENV === "production" ? be.exports = jr() : be.exports = Lr()), be.exports;
}
var k = Fr(), ge = { exports: {} }, Le = {};
var pt;
function vr() {
  if (pt) return Le;
  pt = 1;
  var t = Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return Le.c = function(e) {
    return t.H.useMemoCache(e);
  }, Le;
}
var Fe = {};
var mt;
function Ur() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Fe.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  })()), Fe;
}
var bt;
function Br() {
  return bt || (bt = 1, process.env.NODE_ENV === "production" ? ge.exports = vr() : ge.exports = Ur()), ge.exports;
}
var K = Br();
const Bs = (t) => {
  const e = K.c(3), {
    children: n
  } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = {
    padding: "8px 16px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px"
  }, e[0] = r) : r = e[0];
  let s;
  return e[1] !== n ? (s = /* @__PURE__ */ k.jsx("button", { style: r, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}, Ir = "link-module__link___jpeXq", Dr = {
  link: Ir
}, $r = (t) => {
  const e = K.c(3), {
    text: n,
    onClick: r
  } = t;
  let s;
  return e[0] !== r || e[1] !== n ? (s = /* @__PURE__ */ k.jsx("h2", { className: Dr.link, onClick: r, children: n }), e[0] = r, e[1] = n, e[2] = s) : s = e[2], s;
}, qr = "Title-module__titleContainer___V-yQ5", Mr = "Title-module__title___cbhlu", Hr = "Title-module__subTitle___wZXux", ve = {
  titleContainer: qr,
  title: Mr,
  subTitle: Hr
}, zr = (t) => {
  const e = K.c(11), {
    title: n,
    subTitle: r,
    titleSize: s,
    titleMargin: o
  } = t, i = s === void 0 ? 32 : s, a = o === void 0 ? 50 : o, h = `${i}px`, l = `${a}px`;
  let u;
  e[0] !== h || e[1] !== l ? (u = {
    "--title-size": h,
    "--title-margin": l
  }, e[0] = h, e[1] = l, e[2] = u) : u = e[2];
  const p = u;
  let g;
  e[3] !== p || e[4] !== n ? (g = /* @__PURE__ */ k.jsx("h1", { className: ve.title, style: p, children: n }), e[3] = p, e[4] = n, e[5] = g) : g = e[5];
  let R;
  e[6] !== r ? (R = r !== "" ? /* @__PURE__ */ k.jsx("h2", { className: ve.subTitle, children: r }) : null, e[6] = r, e[7] = R) : R = e[7];
  let d;
  return e[8] !== g || e[9] !== R ? (d = /* @__PURE__ */ k.jsxs("div", { className: ve.titleContainer, children: [
    g,
    R
  ] }), e[8] = g, e[9] = R, e[10] = d) : d = e[10], d;
}, Jr = "SearchContainer-module__searchContainer___UiSUG", Wr = "SearchContainer-module__searchContent___g1iR3", gt = {
  searchContainer: Jr,
  searchContent: Wr
};
function Vr() {
  if (console && console.warn) {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    V(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const yt = {};
function qe() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  V(e[0]) && yt[e[0]] || (V(e[0]) && (yt[e[0]] = /* @__PURE__ */ new Date()), Vr(...e));
}
const Vt = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const n = () => {
      setTimeout(() => {
        t.off("initialized", n);
      }, 0), e();
    };
    t.on("initialized", n);
  }
}, Et = (t, e, n) => {
  t.loadNamespaces(e, Vt(t, n));
}, Rt = (t, e, n, r) => {
  V(n) && (n = [n]), n.forEach((s) => {
    t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
  }), t.loadLanguages(e, Vt(t, r));
}, Yr = function(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = e.languages[0], s = e.options ? e.options.fallbackLng : !1, o = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const i = (a, h) => {
    const l = e.services.backendConnector.state[`${a}|${h}`];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !i(e.isLanguageChangingTo, t) ? !1 : !!(e.hasResourceBundle(r, t) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || i(r, t) && (!s || i(o, t)));
}, Kr = function(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (qe("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(t, {
    lng: n.lng,
    precheck: (s, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !o(s.isLanguageChangingTo, t)) return !1;
    }
  }) : Yr(t, e, n);
}, V = (t) => typeof t == "string", Xr = (t) => typeof t == "object" && t !== null, Gr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Zr = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Qr = (t) => Zr[t], es = (t) => t.replace(Gr, Qr);
let ts = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: es
};
const ns = () => ts;
let rs;
const ss = () => rs, os = Gt();
class is {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces = () => Object.keys(this.usedNamespaces);
}
const as = (t, e) => {
  const n = wt();
  return we(() => {
    n.current = t;
  }, [t, e]), n.current;
}, Yt = (t, e, n, r) => t.getFixedT(e, n, r), cs = (t, e, n, r) => Qt(Yt(t, e, n, r), [t, e, n, r]), Kt = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = e, {
    i18n: r,
    defaultNS: s
  } = Zt(os) || {}, o = n || r || ss();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new is()), !o) {
    qe("You will need to pass in an i18next instance by using initReactI18next");
    const w = (P, O) => V(O) ? O : Xr(O) && V(O.defaultValue) ? O.defaultValue : Array.isArray(P) ? P[P.length - 1] : P, x = [w, {}, !1];
    return x.t = w, x.i18n = {}, x.ready = !1, x;
  }
  o.options.react && o.options.react.wait !== void 0 && qe("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i = {
    ...ns(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: h
  } = i;
  let l = s || o.options && o.options.defaultNS;
  l = V(l) ? [l] : l || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(l);
  const u = (o.isInitialized || o.initializedStoreOnce) && l.every((w) => Kr(w, o, i)), p = cs(o, e.lng || null, i.nsMode === "fallback" ? l : l[0], h), g = () => p, R = () => Yt(o, e.lng || null, i.nsMode === "fallback" ? l : l[0], h), [d, b] = ae(g);
  let m = l.join();
  e.lng && (m = `${e.lng}${m}`);
  const _ = as(m), A = wt(!0);
  we(() => {
    const {
      bindI18n: w,
      bindI18nStore: x
    } = i;
    A.current = !0, !u && !a && (e.lng ? Rt(o, e.lng, l, () => {
      A.current && b(R);
    }) : Et(o, l, () => {
      A.current && b(R);
    })), u && _ && _ !== m && A.current && b(R);
    const P = () => {
      A.current && b(R);
    };
    return w && o && o.on(w, P), x && o && o.store.on(x, P), () => {
      A.current = !1, w && o && w.split(" ").forEach((O) => o.off(O, P)), x && o && x.split(" ").forEach((O) => o.store.off(O, P));
    };
  }, [o, m]), we(() => {
    A.current && u && b(g);
  }, [o, h, u]);
  const S = [d, o, u];
  if (S.t = d, S.i18n = o, S.ready = u, u || !u && !a) return S;
  throw new Promise((w) => {
    e.lng ? Rt(o, e.lng, l, () => w()) : Et(o, l, () => w());
  });
}, ls = "SearchButtonsContainer-module__searchButtonsContainer___sSZIE", us = {
  searchButtonsContainer: ls
}, fs = (t) => {
  const e = K.c(11), {
    hasSearchButton: n,
    hasClearButton: r,
    onSearch: s,
    onClear: o
  } = t, {
    t: i
  } = Kt();
  let a;
  e[0] !== n || e[1] !== s || e[2] !== i ? (a = n && /* @__PURE__ */ k.jsx(Ve, { label: "Search", icon: /* @__PURE__ */ k.jsx(Ye, { name: "search" }), onClick: s, children: i("Search") }), e[0] = n, e[1] = s, e[2] = i, e[3] = a) : a = e[3];
  let h;
  e[4] !== r || e[5] !== o || e[6] !== i ? (h = r && /* @__PURE__ */ k.jsx(Ve, { label: "Clear", icon: /* @__PURE__ */ k.jsx(Ye, { name: "close" }), onClick: o, children: i("Clear") }), e[4] = r, e[5] = o, e[6] = i, e[7] = h) : h = e[7];
  let l;
  return e[8] !== a || e[9] !== h ? (l = /* @__PURE__ */ k.jsxs("div", { className: us.searchButtonsContainer, children: [
    a,
    h
  ] }), e[8] = a, e[9] = h, e[10] = l) : l = e[10], l;
}, ds = (t) => {
  const e = K.c(10), {
    hasSearchButton: n,
    hasClearButton: r,
    onSearch: s,
    onClear: o
  } = t;
  let i;
  e[0] !== t.children ? (i = /* @__PURE__ */ k.jsx("div", { className: gt.searchContent, children: t.children }), e[0] = t.children, e[1] = i) : i = e[1];
  let a;
  e[2] !== r || e[3] !== n || e[4] !== o || e[5] !== s ? (a = /* @__PURE__ */ k.jsx(fs, { hasSearchButton: n, hasClearButton: r, onSearch: s, onClear: o }), e[2] = r, e[3] = n, e[4] = o, e[5] = s, e[6] = a) : a = e[6];
  let h;
  return e[7] !== i || e[8] !== a ? (h = /* @__PURE__ */ k.jsxs("div", { className: gt.searchContainer, children: [
    i,
    a
  ] }), e[7] = i, e[8] = a, e[9] = h) : h = e[9], h;
}, hs = "MainSearchContainer-module__mainSearchContainer___oR1-B", ps = "MainSearchContainer-module__mainSearchInfoLink___tmN-g", ms = "MainSearchContainer-module__mainSearchToast___Kth2t", Ue = {
  mainSearchContainer: hs,
  mainSearchInfoLink: ps,
  mainSearchToast: ms
}, Is = (t) => {
  const e = K.c(16), {
    infoText: n,
    pageTitle: r,
    hasSearchButton: s,
    hasClearButton: o,
    onSearch: i,
    onClear: a
  } = t, [h, l] = ae(!1), {
    t: u
  } = Kt();
  let p;
  e[0] !== r ? (p = /* @__PURE__ */ k.jsx(zr, { title: r, subTitle: "" }), e[0] = r, e[1] = p) : p = e[1];
  let g;
  e[2] !== n || e[3] !== h || e[4] !== u ? (g = n && /* @__PURE__ */ k.jsxs("div", { className: Ue.mainSearchInfoLink, children: [
    /* @__PURE__ */ k.jsx($r, { onClick: () => l(!h), text: u("queryExplanation") }),
    h && /* @__PURE__ */ k.jsx(en, { className: Ue.mainSearchToast, children: n })
  ] }), e[2] = n, e[3] = h, e[4] = u, e[5] = g) : g = e[5];
  let R;
  e[6] !== o || e[7] !== s || e[8] !== a || e[9] !== i || e[10] !== t.children ? (R = t.children && /* @__PURE__ */ k.jsx(ds, { hasSearchButton: s, hasClearButton: o, onSearch: i, onClear: a, children: t.children }), e[6] = o, e[7] = s, e[8] = a, e[9] = i, e[10] = t.children, e[11] = R) : R = e[11];
  let d;
  return e[12] !== p || e[13] !== g || e[14] !== R ? (d = /* @__PURE__ */ k.jsxs("div", { className: Ue.mainSearchContainer, children: [
    p,
    g,
    R
  ] }), e[12] = p, e[13] = g, e[14] = R, e[15] = d) : d = e[15], d;
}, Ds = (t) => {
  const e = K.c(2);
  let n;
  return e[0] !== t.children ? (n = /* @__PURE__ */ k.jsx("div", { className: "rootLayout", children: t.children }), e[0] = t.children, e[1] = n) : n = e[1], n;
};
export {
  Bs as Button,
  Is as MainSearchContainer,
  Ds as RootLayout,
  Pr as mockApiRequest,
  Us as useApiRequest
};
