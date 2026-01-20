import { useState as te, useEffect as Qe } from "react";
import { jsx as R, jsxs as $ } from "react/jsx-runtime";
import { Button as Ue, Icon as Le, Toast as Ct } from "@igds/react";
import { useTranslation as Ye } from "react-i18next";
const At = async (e, t, n) => new Promise((r) => {
  setTimeout(() => {
    r({
      data: {
        __mock__: !0,
        url: e,
        method: t,
        request: n
      }
    });
  }, 200);
});
function et(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _t } = Object.prototype, { getPrototypeOf: Re } = Object, { iterator: ie, toStringTag: tt } = Symbol, ae = /* @__PURE__ */ ((e) => (t) => {
  const n = _t.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => ae(t) === e), ce = (e) => (t) => typeof t === e, { isArray: z } = Array, M = ce("undefined");
function W(e) {
  return e !== null && !M(e) && e.constructor !== null && !M(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const nt = P("ArrayBuffer");
function xt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && nt(e.buffer), t;
}
const Nt = ce("string"), C = ce("function"), rt = ce("number"), K = (e) => e !== null && typeof e == "object", Pt = (e) => e === !0 || e === !1, ne = (e) => {
  if (ae(e) !== "object")
    return !1;
  const t = Re(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(tt in e) && !(ie in e);
}, Ft = (e) => {
  if (!K(e) || W(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, kt = P("Date"), Ut = P("File"), Lt = P("Blob"), Bt = P("FileList"), Dt = (e) => K(e) && C(e.pipe), jt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = ae(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, qt = P("URLSearchParams"), [It, Ht, $t, Mt] = ["ReadableStream", "Request", "Response", "Headers"].map(P), zt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), z(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (W(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function st(e, t) {
  if (W(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ot = (e) => !M(e) && e !== j;
function we() {
  const { caseless: e, skipUndefined: t } = ot(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && st(n, i) || i;
    ne(n[o]) && ne(s) ? n[o] = we(n[o], s) : ne(s) ? n[o] = we({}, s) : z(s) ? n[o] = s.slice() : (!t || !M(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && X(arguments[s], r);
  return n;
}
const vt = (e, t, n, { allOwnKeys: r } = {}) => (X(t, (s, i) => {
  n && C(s) ? e[i] = et(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), Jt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Vt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Wt = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Re(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Kt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Xt = (e) => {
  if (!e) return null;
  if (z(e)) return e;
  let t = e.length;
  if (!rt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Gt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Re(Uint8Array)), Zt = (e, t) => {
  const r = (e && e[ie]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Qt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Yt = P("HTMLFormElement"), en = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Be = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), tn = P("RegExp"), it = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  X(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, nn = (e) => {
  it(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (C(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, rn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return z(e) ? r(e) : r(String(e).split(t)), n;
}, sn = () => {
}, on = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function an(e) {
  return !!(e && C(e.append) && e[tt] === "FormData" && e[ie]);
}
const cn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (W(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = z(r) ? [] : {};
        return X(r, (o, c) => {
          const d = n(o, s + 1);
          !M(d) && (i[c] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, ln = P("AsyncFunction"), un = (e) => e && (K(e) || C(e)) && C(e.then) && C(e.catch), at = ((e, t) => e ? setImmediate : t ? ((n, r) => (j.addEventListener("message", ({ source: s, data: i }) => {
  s === j && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), j.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(j.postMessage)
), fn = typeof queueMicrotask < "u" ? queueMicrotask.bind(j) : typeof process < "u" && process.nextTick || at, dn = (e) => e != null && C(e[ie]), a = {
  isArray: z,
  isArrayBuffer: nt,
  isBuffer: W,
  isFormData: jt,
  isArrayBufferView: xt,
  isString: Nt,
  isNumber: rt,
  isBoolean: Pt,
  isObject: K,
  isPlainObject: ne,
  isEmptyObject: Ft,
  isReadableStream: It,
  isRequest: Ht,
  isResponse: $t,
  isHeaders: Mt,
  isUndefined: M,
  isDate: kt,
  isFile: Ut,
  isBlob: Lt,
  isRegExp: tn,
  isFunction: C,
  isStream: Dt,
  isURLSearchParams: qt,
  isTypedArray: Gt,
  isFileList: Bt,
  forEach: X,
  merge: we,
  extend: vt,
  trim: zt,
  stripBOM: Jt,
  inherits: Vt,
  toFlatObject: Wt,
  kindOf: ae,
  kindOfTest: P,
  endsWith: Kt,
  toArray: Xt,
  forEachEntry: Zt,
  matchAll: Qt,
  isHTMLForm: Yt,
  hasOwnProperty: Be,
  hasOwnProp: Be,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: it,
  freezeMethods: nn,
  toObjectSet: rn,
  toCamelCase: en,
  noop: sn,
  toFiniteNumber: on,
  findKey: st,
  global: j,
  isContextDefined: ot,
  isSpecCompliantForm: an,
  toJSONObject: cn,
  isAsyncFn: ln,
  isThenable: un,
  setImmediate: at,
  asap: fn,
  isIterable: dn
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
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
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ct = y.prototype, lt = {};
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
].forEach((e) => {
  lt[e] = { value: e };
});
Object.defineProperties(y, lt);
Object.defineProperty(ct, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, i) => {
  const o = Object.create(ct);
  a.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return y.call(o, c, d, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const hn = null;
function Se(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ut(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function De(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ut(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function pn(e) {
  return a.isArray(e) && !e.some(Se);
}
const mn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function le(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !a.isUndefined(h[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(l) {
    if (l === null) return "";
    if (a.isDate(l))
      return l.toISOString();
    if (a.isBoolean(l))
      return l.toString();
    if (!d && a.isBlob(l))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(l) || a.isTypedArray(l) ? d && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function u(l, m, h) {
    let E = l;
    if (l && !h && typeof l == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), l = JSON.stringify(l);
      else if (a.isArray(l) && pn(l) || (a.isFileList(l) || a.endsWith(m, "[]")) && (E = a.toArray(l)))
        return m = ut(m), E.forEach(function(g, O) {
          !(a.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? De([m], O, i) : o === null ? m : m + "[]",
            f(g)
          );
        }), !1;
    }
    return Se(l) ? !0 : (t.append(De(h, m, i), f(l)), !1);
  }
  const p = [], b = Object.assign(mn, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Se
  });
  function S(l, m) {
    if (!a.isUndefined(l)) {
      if (p.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(l), a.forEach(l, function(E, _) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(_) ? _.trim() : _,
          m,
          b
        )) === !0 && S(E, m ? m.concat(_) : [_]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function je(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Te(e, t) {
  this._pairs = [], e && le(e, this, t);
}
const ft = Te.prototype;
ft.append = function(t, n) {
  this._pairs.push([t, n]);
};
ft.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, je);
  } : je;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function yn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function dt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || yn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Te(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class qe {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ht = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bn = typeof URLSearchParams < "u" ? URLSearchParams : Te, wn = typeof FormData < "u" ? FormData : null, Sn = typeof Blob < "u" ? Blob : null, En = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bn,
    FormData: wn,
    Blob: Sn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Oe = typeof window < "u" && typeof document < "u", Ee = typeof navigator == "object" && navigator || void 0, gn = Oe && (!Ee || ["ReactNative", "NativeScript", "NS"].indexOf(Ee.product) < 0), Rn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tn = Oe && window.location.href || "http://localhost", On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Oe,
  hasStandardBrowserEnv: gn,
  hasStandardBrowserWebWorkerEnv: Rn,
  navigator: Ee,
  origin: Tn
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...On,
  ...En
};
function Cn(e, t) {
  return le(e, new T.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return T.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function An(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _n(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function pt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), d = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, d ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = _n(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(An(r), s, n, 0);
    }), n;
  }
  return null;
}
function xn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const G = {
  transitional: ht,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(pt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Cn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return le(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), xn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || G.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
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
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  G.headers[e] = {};
});
const Nn = a.toObjectSet([
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
]), Pn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Nn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ie = /* @__PURE__ */ Symbol("internals");
function V(e) {
  return e && String(e).trim().toLowerCase();
}
function re(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(re) : String(e);
}
function Fn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const kn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function he(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Un(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ln(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, d, f) {
      const u = V(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, u);
      (!p || s[p] === void 0 || f === !0 || f === void 0 && s[p] !== !1) && (s[p || d] = re(c));
    }
    const o = (c, d) => a.forEach(c, (f, u) => i(f, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !kn(t))
      o(Pn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, f;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = u[0]] = (d = c[f]) ? a.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = V(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Fn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = V(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || he(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = V(o), o) {
        const c = a.findKey(r, o);
        c && (!n || he(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || he(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = re(s), delete n[i];
        return;
      }
      const c = t ? Un(i) : String(i).trim();
      c !== i && delete n[i], n[c] = re(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ie] = this[Ie] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = V(o);
      r[c] || (Ln(s, o), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function pe(e, t) {
  const n = this || G, r = t || n, s = A.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function mt(e) {
  return !!(e && e.__CANCEL__);
}
function v(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(v, y, {
  __CANCEL__: !0
});
function yt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Bn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Dn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), u = r[i];
    o || (o = f), n[s] = d, r[s] = f;
    let p = i, b = 0;
    for (; p !== s; )
      b += n[p++], p = p % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), f - o < t)
      return;
    const S = u && f - u;
    return S ? Math.round(b * 1e3 / S) : void 0;
  };
}
function jn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (f, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), e(...f);
  };
  return [(...f) => {
    const u = Date.now(), p = u - n;
    p >= r ? o(f, u) : (s = f, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - p)));
  }, () => s && o(s)];
}
const oe = (e, t, n = 3) => {
  let r = 0;
  const s = Dn(50, 250);
  return jn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, d = o - r, f = s(d), u = o <= c;
    r = o;
    const p = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && u ? (c - o) / f : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, He = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, $e = (e) => (...t) => a.asap(() => e(...t)), qn = T.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, T.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(T.origin),
  T.navigator && /(msie|trident)/i.test(T.navigator.userAgent)
) : () => !0, In = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      a.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && c.push(`path=${r}`), a.isString(s) && c.push(`domain=${s}`), i === !0 && c.push("secure"), a.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function Hn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $n(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function bt(e, t, n) {
  let r = !Hn(t);
  return e && (r || n == !1) ? $n(e, t) : t;
}
const Me = (e) => e instanceof A ? { ...e } : e;
function I(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, p, b) {
    return a.isPlainObject(f) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, f, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(f, u, p, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return r(void 0, f, p, b);
    } else return r(f, u, p, b);
  }
  function i(f, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function o(f, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, u);
  }
  function c(f, u, p) {
    if (p in t)
      return r(f, u);
    if (p in e)
      return r(void 0, f);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (f, u, p) => s(Me(f), Me(u), p, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(u) {
    const p = d[u] || s, b = p(e[u], t[u], u);
    a.isUndefined(b) && p !== c || (n[u] = b);
  }), n;
}
const wt = (e) => {
  const t = I({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = A.from(o), t.url = dt(bt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(d).forEach(([u, p]) => {
        f.includes(u.toLowerCase()) && o.set(u, p);
      });
    }
  }
  if (T.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && qn(t.url))) {
    const d = s && i && In.read(i);
    d && o.set(s, d);
  }
  return t;
}, Mn = typeof XMLHttpRequest < "u", zn = Mn && function(e) {
  return new Promise(function(n, r) {
    const s = wt(e);
    let i = s.data;
    const o = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, u, p, b, S, l;
    function m() {
      S && S(), l && l(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const g = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), N = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      yt(function(x) {
        n(x), m();
      }, function(x) {
        r(x), m();
      }, N), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new y("Request aborted", y.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(O) {
      const N = O && O.message ? O.message : "Network Error", B = new y(N, y.ERR_NETWORK, e, h);
      B.event = O || null, r(B), h = null;
    }, h.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || ht;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(new y(
        O,
        N.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in h && a.forEach(o.toJSON(), function(O, N) {
      h.setRequestHeader(N, O);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), f && ([b, l] = oe(f, !0), h.addEventListener("progress", b)), d && h.upload && ([p, S] = oe(d), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (u = (g) => {
      h && (r(!g || g.type ? new v(null, e, h) : g), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const _ = Bn(s.url);
    if (_ && T.protocols.indexOf(_) === -1) {
      r(new y("Unsupported protocol " + _ + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, vn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(f) {
      if (!s) {
        s = !0, c();
        const u = f instanceof Error ? f : this.reason;
        r.abort(u instanceof y ? u : new v(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(i) : f.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, Jn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Vn = async function* (e, t) {
  for await (const n of Wn(e))
    yield* Jn(n, t);
}, Wn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ze = (e, t, n, r) => {
  const s = Vn(e, t);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: u } = await s.next();
        if (f) {
          c(), d.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let b = i += p;
          n(b);
        }
        d.enqueue(new Uint8Array(u));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, ve = 64 * 1024, { isFunction: ee } = a, Kn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: Je,
  TextEncoder: Ve
} = a.global, We = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Xn = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, Kn, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? ee(t) : typeof fetch == "function", i = ee(n), o = ee(r);
  if (!s)
    return !1;
  const c = s && ee(Je), d = s && (typeof Ve == "function" ? /* @__PURE__ */ ((l) => (m) => l.encode(m))(new Ve()) : async (l) => new Uint8Array(await new n(l).arrayBuffer())), f = i && c && We(() => {
    let l = !1;
    const m = new n(T.origin, {
      body: new Je(),
      method: "POST",
      get duplex() {
        return l = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !m;
  }), u = o && c && We(() => a.isReadableStream(new r("").body)), p = {
    stream: u && ((l) => l.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
    !p[l] && (p[l] = (m, h) => {
      let E = m && m[l];
      if (E)
        return E.call(m);
      throw new y(`Response type '${l}' is not supported`, y.ERR_NOT_SUPPORT, h);
    });
  });
  const b = async (l) => {
    if (l == null)
      return 0;
    if (a.isBlob(l))
      return l.size;
    if (a.isSpecCompliantForm(l))
      return (await new n(T.origin, {
        method: "POST",
        body: l
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(l) || a.isArrayBuffer(l))
      return l.byteLength;
    if (a.isURLSearchParams(l) && (l = l + ""), a.isString(l))
      return (await d(l)).byteLength;
  }, S = async (l, m) => {
    const h = a.toFiniteNumber(l.getContentLength());
    return h ?? b(m);
  };
  return async (l) => {
    let {
      url: m,
      method: h,
      data: E,
      signal: _,
      cancelToken: g,
      timeout: O,
      onDownloadProgress: N,
      onUploadProgress: B,
      responseType: x,
      headers: fe,
      withCredentials: Z = "same-origin",
      fetchOptions: _e
    } = wt(l), xe = t || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let Q = vn([_, g && g.toAbortSignal()], O), J = null;
    const D = Q && Q.unsubscribe && (() => {
      Q.unsubscribe();
    });
    let Ne;
    try {
      if (B && f && h !== "get" && h !== "head" && (Ne = await S(fe, E)) !== 0) {
        let L = new n(m, {
          method: "POST",
          body: E,
          duplex: "half"
        }), H;
        if (a.isFormData(E) && (H = L.headers.get("content-type")) && fe.setContentType(H), L.body) {
          const [de, Y] = He(
            Ne,
            oe($e(B))
          );
          E = ze(L.body, ve, de, Y);
        }
      }
      a.isString(Z) || (Z = Z ? "include" : "omit");
      const F = i && "credentials" in n.prototype, Pe = {
        ..._e,
        signal: Q,
        method: h.toUpperCase(),
        headers: fe.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: F ? Z : void 0
      };
      J = i && new n(m, Pe);
      let U = await (i ? xe(J, _e) : xe(m, Pe));
      const Fe = u && (x === "stream" || x === "response");
      if (u && (N || Fe && D)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((ke) => {
          L[ke] = U[ke];
        });
        const H = a.toFiniteNumber(U.headers.get("content-length")), [de, Y] = N && He(
          H,
          oe($e(N), !0)
        ) || [];
        U = new r(
          ze(U.body, ve, de, () => {
            Y && Y(), D && D();
          }),
          L
        );
      }
      x = x || "text";
      let Ot = await p[a.findKey(p, x) || "text"](U, l);
      return !Fe && D && D(), await new Promise((L, H) => {
        yt(L, H, {
          data: Ot,
          headers: A.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: l,
          request: J
        });
      });
    } catch (F) {
      throw D && D(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, l, J),
        {
          cause: F.cause || F
        }
      ) : y.from(F, F && F.code, l, J);
    }
  };
}, Gn = /* @__PURE__ */ new Map(), St = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, d, f, u = Gn;
  for (; c--; )
    d = i[c], f = u.get(d), f === void 0 && u.set(d, f = c ? /* @__PURE__ */ new Map() : Xn(t)), u = f;
  return f;
};
St();
const Ce = {
  http: hn,
  xhr: zn,
  fetch: {
    get: St
  }
};
a.forEach(Ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ke = (e) => `- ${e}`, Zn = (e) => a.isFunction(e) || e === null || e === !1;
function Qn(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let c;
    if (s = r, !Zn(r) && (s = Ce[(c = String(r)).toLowerCase()], s === void 0))
      throw new y(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([d, f]) => `adapter ${d} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Ke).join(`
`) : " " + Ke(o[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Et = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Qn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ce
};
function me(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new v(null, e);
}
function Xe(e) {
  return me(e), e.headers = A.from(e.headers), e.data = pe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Et.getAdapter(e.adapter || G.adapter, e)(e).then(function(r) {
    return me(e), r.data = pe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return mt(r) || (me(e), r && r.response && (r.response.data = pe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const gt = "1.13.2", ue = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ue[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ge = {};
ue.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + gt + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new y(
        s(o, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ge[o] && (Ge[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
  };
};
ue.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Yn(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], d = c === void 0 || o(c, i, e);
      if (d !== !0)
        throw new y("option " + i + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: Yn,
  validators: ue
}, k = se.validators;
let q = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new qe(),
      response: new qe()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = I(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: k.function,
      serialize: k.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), se.assertOptions(n, {
      baseUrl: k.spelling("baseURL"),
      withXsrfToken: k.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (l) => {
        delete i[l];
      }
    ), n.headers = A.concat(o, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (d = d && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, p = 0, b;
    if (!d) {
      const l = [Xe.bind(this), void 0];
      for (l.unshift(...c), l.push(...f), b = l.length, u = Promise.resolve(n); p < b; )
        u = u.then(l[p++], l[p++]);
      return u;
    }
    b = c.length;
    let S = n;
    for (; p < b; ) {
      const l = c[p++], m = c[p++];
      try {
        S = l(S);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      u = Xe.call(this, S);
    } catch (l) {
      return Promise.reject(l);
    }
    for (p = 0, b = f.length; p < b; )
      u = u.then(f[p++], f[p++]);
    return u;
  }
  getUri(t) {
    t = I(this.defaults, t);
    const n = bt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return dt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  q.prototype[t] = function(n, r) {
    return this.request(I(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(I(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  q.prototype[t] = n(), q.prototype[t + "Form"] = n(!0);
});
let er = class Rt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      r.reason || (r.reason = new v(i, o, c), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Rt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function tr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function nr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ge = {
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
Object.entries(ge).forEach(([e, t]) => {
  ge[t] = e;
});
function Tt(e) {
  const t = new q(e), n = et(q.prototype.request, t);
  return a.extend(n, q.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Tt(I(e, s));
  }, n;
}
const w = Tt(G);
w.Axios = q;
w.CanceledError = v;
w.CancelToken = er;
w.isCancel = mt;
w.VERSION = gt;
w.toFormData = le;
w.AxiosError = y;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = tr;
w.isAxiosError = nr;
w.mergeConfig = I;
w.AxiosHeaders = A;
w.formToJSON = (e) => pt(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Et.getAdapter;
w.HttpStatusCode = ge;
w.default = w;
const {
  Axios: Ar,
  AxiosError: _r,
  CanceledError: xr,
  isCancel: Nr,
  CancelToken: Pr,
  VERSION: Fr,
  all: kr,
  Cancel: Ur,
  isAxiosError: Lr,
  spread: Br,
  toFormData: Dr,
  AxiosHeaders: jr,
  HttpStatusCode: qr,
  formToJSON: Ir,
  getAdapter: Hr,
  mergeConfig: $r
} = w, Ae = w.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Ae.interceptors.request.use((e) => e);
Ae.interceptors.response.use(
  (e) => e,
  (e) => Promise.reject(e)
);
const rr = (e) => {
  const [t, n] = te(null), [r, s] = te(null), [i, o] = te(!1), { url: c, method: d, data: f, mock: u, auto: p = !0 } = e, b = u ? (l) => At(l.url, l.method, l.data) : (l) => Ae(l), S = async () => {
    o(!0);
    try {
      console.log("API request:", c, d, f);
      const l = await b({ url: c, method: d, data: f });
      console.log("API response:", l.data), n(l.data), s(null);
    } catch (l) {
      console.error("API request error:", l), s(l?.message ? l : null), n(null);
    } finally {
      o(!1);
    }
  };
  return Qe(() => {
    p && S();
  }, [p]), {
    response: {
      data: t,
      error: r,
      status: i ? "pending" : r ? "error" : "success"
    },
    refetch: S
  };
}, Mr = ({ tableName: e }) => {
  const t = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${e}`, { response: n, refetch: r } = rr({ url: t, method: "GET" });
  return {
    response: n,
    refetch: r
  };
}, zr = ({ fields: e }) => /* @__PURE__ */ R("div", { className: "fields-grid", children: e.map((t, n) => /* @__PURE__ */ $("div", { className: "field-item", children: [
  /* @__PURE__ */ R("p", { className: "field-label", children: t.label }),
  /* @__PURE__ */ R("p", { className: `field-value strong ${t.statusColor}`, children: t.value })
] }, n)) }), sr = "link-module__link___jpeXq", or = {
  link: sr
}, ir = ({ text: e, onClick: t }) => /* @__PURE__ */ R("h2", { className: or.link, onClick: t, children: e }), vr = ({ children: e }) => /* @__PURE__ */ R(
  "button",
  {
    style: {
      padding: "8px 16px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "6px"
    },
    children: e
  }
), ar = "Title-module__titleContainer___V-yQ5", cr = "Title-module__title___cbhlu", lr = "Title-module__subTitle___wZXux", ye = {
  titleContainer: ar,
  title: cr,
  subTitle: lr
}, ur = ({ title: e, subTitle: t, titleSize: n = 32, titleMargin: r = 50 }) => /* @__PURE__ */ $("div", { className: ye.titleContainer, children: [
  /* @__PURE__ */ R(
    "h1",
    {
      className: ye.title,
      style: { "--title-size": `${n}px`, "--title-margin": `${r}px` },
      children: e
    }
  ),
  t !== "" ? /* @__PURE__ */ R("h2", { className: ye.subTitle, children: t }) : null
] }), fr = "SearchContainer-module__searchContainer___UiSUG", dr = "SearchContainer-module__searchContent___g1iR3", Ze = {
  searchContainer: fr,
  searchContent: dr
}, hr = "SearchButtonsContainer-module__searchButtonsContainer___sSZIE", pr = {
  searchButtonsContainer: hr
}, mr = (e) => {
  const { hasSearchButton: t = !0, hasClearButton: n = !0, isSearchDisabled: r, isClearDisabled: s, onSearch: i, onClear: o } = e, { t: c } = Ye();
  return /* @__PURE__ */ $("div", { className: pr.searchButtonsContainer, children: [
    t && /* @__PURE__ */ R(
      Ue,
      {
        label: "Search",
        icon: /* @__PURE__ */ R(Le, { name: "search" }),
        onClick: i,
        disabled: r,
        children: c("Search")
      }
    ),
    n && /* @__PURE__ */ R(
      Ue,
      {
        label: "Clear",
        icon: /* @__PURE__ */ R(Le, { name: "close" }),
        onClick: o,
        disabled: s,
        children: c("Clear")
      }
    )
  ] });
}, yr = (e) => {
  const { buttonsProps: t } = e;
  return /* @__PURE__ */ $("div", { className: Ze.searchContainer, children: [
    /* @__PURE__ */ R("div", { className: Ze.searchContent, children: e.children }),
    t && /* @__PURE__ */ R(mr, { ...t })
  ] });
}, br = "MainSearchContainer-module__mainSearchContainer___oR1-B", wr = "MainSearchContainer-module__mainSearchInfoLink___tmN-g", Sr = "MainSearchContainer-module__mainSearchToast___Kth2t", be = {
  mainSearchContainer: br,
  mainSearchInfoLink: wr,
  mainSearchToast: Sr
}, Jr = (e) => {
  const { infoText: t, pageTitle: n, buttonsProps: r } = e, [s, i] = te(!1), { t: o } = Ye();
  return /* @__PURE__ */ $("div", { className: be.mainSearchContainer, children: [
    /* @__PURE__ */ R(ur, { title: n, subTitle: "" }),
    t && /* @__PURE__ */ $("div", { className: be.mainSearchInfoLink, children: [
      /* @__PURE__ */ R(ir, { onClick: () => i(!s), text: o("queryExplanation") }),
      s && /* @__PURE__ */ R(Ct, { className: be.mainSearchToast, children: t })
    ] }),
    e.children && /* @__PURE__ */ R(yr, { buttonsProps: r, children: e.children })
  ] });
}, Vr = (e) => (Qe(() => {
  const n = document.createElement("script");
  return n.src = "https://test.newgov.gov.il/Govil.HeaderFooter.Api/govilHF/header-footer.js", n.async = !0, document.body.appendChild(n), () => {
    document.body.removeChild(n);
  };
}, ["test"]), /* @__PURE__ */ R("div", { className: "rootLayout", style: { direction: "rtl" }, children: e.children }));
export {
  vr as Button,
  zr as FieldsGrid,
  ir as Link,
  Jr as MainSearchContainer,
  Vr as RootLayout,
  ur as Title,
  At as mockApiRequest,
  rr as useApiRequest,
  Mr as useSystemTableApiRequest
};
