import { useState as ne, useEffect as Ct } from "react";
import { jsx as T, jsxs as W } from "react/jsx-runtime";
import { c as $ } from "react/compiler-runtime";
import { Button as ke, Icon as Le, Toast as At } from "@igds/react";
import { useTranslation as Qe } from "react-i18next";
function Ye(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: _t } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: ae, toStringTag: et } = Symbol, ce = /* @__PURE__ */ ((t) => (e) => {
  const n = _t.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (t) => (t = t.toLowerCase(), (e) => ce(e) === t), le = (t) => (e) => typeof e === t, { isArray: z } = Array, M = le("undefined");
function K(t) {
  return t !== null && !M(t) && t.constructor !== null && !M(t.constructor) && C(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const tt = P("ArrayBuffer");
function xt(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && tt(t.buffer), e;
}
const Nt = le("string"), C = le("function"), nt = le("number"), X = (t) => t !== null && typeof t == "object", Pt = (t) => t === !0 || t === !1, re = (t) => {
  if (ce(t) !== "object")
    return !1;
  const e = Te(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(et in t) && !(ae in t);
}, Ft = (t) => {
  if (!X(t) || K(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, Bt = P("Date"), kt = P("File"), Lt = P("Blob"), Ut = P("FileList"), Dt = (t) => X(t) && C(t.pipe), jt = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || C(t.append) && ((e = ce(t)) === "formdata" || // detect form-data instance
  e === "object" && C(t.toString) && t.toString() === "[object FormData]"));
}, qt = P("URLSearchParams"), [It, $t, Ht, Mt] = ["ReadableStream", "Request", "Response", "Headers"].map(P), zt = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function G(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), z(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if (K(t))
      return;
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], e.call(null, t[c], c, t);
  }
}
function rt(t, e) {
  if (K(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, st = (t) => !M(t) && t !== j;
function Se() {
  const { caseless: t, skipUndefined: e } = st(this) && this || {}, n = {}, r = (s, i) => {
    const o = t && rt(n, i) || i;
    re(n[o]) && re(s) ? n[o] = Se(n[o], s) : re(s) ? n[o] = Se({}, s) : z(s) ? n[o] = s.slice() : (!e || !M(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && G(arguments[s], r);
  return n;
}
const Jt = (t, e, n, { allOwnKeys: r } = {}) => (G(e, (s, i) => {
  n && C(s) ? t[i] = Ye(s, n) : t[i] = s;
}, { allOwnKeys: r }), t), vt = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Vt = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Wt = (t, e, n, r) => {
  let s, i, o;
  const c = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, t, e)) && !c[o] && (e[o] = t[o], c[o] = !0);
    t = n !== !1 && Te(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Kt = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Xt = (t) => {
  if (!t) return null;
  if (z(t)) return t;
  let e = t.length;
  if (!nt(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Gt = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Te(Uint8Array)), Zt = (t, e) => {
  const r = (t && t[ae]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    e.call(t, i[0], i[1]);
  }
}, Qt = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Yt = P("HTMLFormElement"), en = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ue = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), tn = P("RegExp"), ot = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  G(n, (s, i) => {
    let o;
    (o = e(s, i, t)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(t, r);
}, nn = (t) => {
  ot(t, (e, n) => {
    if (C(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (C(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, rn = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return z(t) ? r(t) : r(String(t).split(e)), n;
}, sn = () => {
}, on = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function an(t) {
  return !!(t && C(t.append) && t[et] === "FormData" && t[ae]);
}
const cn = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (X(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (K(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const i = z(r) ? [] : {};
        return G(r, (o, c) => {
          const d = n(o, s + 1);
          !M(d) && (i[c] = d);
        }), e[s] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, ln = P("AsyncFunction"), un = (t) => t && (X(t) || C(t)) && C(t.then) && C(t.catch), it = ((t, e) => t ? setImmediate : e ? ((n, r) => (j.addEventListener("message", ({ source: s, data: i }) => {
  s === j && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), j.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(j.postMessage)
), fn = typeof queueMicrotask < "u" ? queueMicrotask.bind(j) : typeof process < "u" && process.nextTick || it, dn = (t) => t != null && C(t[ae]), a = {
  isArray: z,
  isArrayBuffer: tt,
  isBuffer: K,
  isFormData: jt,
  isArrayBufferView: xt,
  isString: Nt,
  isNumber: nt,
  isBoolean: Pt,
  isObject: X,
  isPlainObject: re,
  isEmptyObject: Ft,
  isReadableStream: It,
  isRequest: $t,
  isResponse: Ht,
  isHeaders: Mt,
  isUndefined: M,
  isDate: Bt,
  isFile: kt,
  isBlob: Lt,
  isRegExp: tn,
  isFunction: C,
  isStream: Dt,
  isURLSearchParams: qt,
  isTypedArray: Gt,
  isFileList: Ut,
  forEach: G,
  merge: Se,
  extend: Jt,
  trim: zt,
  stripBOM: vt,
  inherits: Vt,
  toFlatObject: Wt,
  kindOf: ce,
  kindOfTest: P,
  endsWith: Kt,
  toArray: Xt,
  forEachEntry: Zt,
  matchAll: Qt,
  isHTMLForm: Yt,
  hasOwnProperty: Ue,
  hasOwnProp: Ue,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ot,
  freezeMethods: nn,
  toObjectSet: rn,
  toCamelCase: en,
  noop: sn,
  toFiniteNumber: on,
  findKey: rt,
  global: j,
  isContextDefined: st,
  isSpecCompliantForm: an,
  toJSONObject: cn,
  isAsyncFn: ln,
  isThenable: un,
  setImmediate: it,
  asap: fn,
  isIterable: dn
};
function b(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(b, Error, {
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
const at = b.prototype, ct = {};
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
  ct[t] = { value: t };
});
Object.defineProperties(b, ct);
Object.defineProperty(at, "isAxiosError", { value: !0 });
b.from = (t, e, n, r, s, i) => {
  const o = Object.create(at);
  a.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const c = t && t.message ? t.message : "Error", d = e == null && t ? t.code : e;
  return b.call(o, c, d, n, r, s), t && o.cause == null && Object.defineProperty(o, "cause", { value: t, configurable: !0 }), o.name = t && t.name || "Error", i && Object.assign(o, i), o;
};
const hn = null;
function ge(t) {
  return a.isPlainObject(t) || a.isArray(t);
}
function lt(t) {
  return a.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function De(t, e, n) {
  return t ? t.concat(e).map(function(s, i) {
    return s = lt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function pn(t) {
  return a.isArray(t) && !t.some(ge);
}
const mn = a.toFlatObject(a, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ue(t, e, n) {
  if (!a.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !a.isUndefined(p[y]);
  });
  const r = n.metaTokens, s = n.visitor || l, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(e);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (a.isBoolean(f))
      return f.toString();
    if (!d && a.isBlob(f))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, y, p) {
    let g = f;
    if (f && !p && typeof f == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && pn(f) || (a.isFileList(f) || a.endsWith(y, "[]")) && (g = a.toArray(f)))
        return y = lt(y), g.forEach(function(E, O) {
          !(a.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? De([y], O, i) : o === null ? y : y + "[]",
            u(E)
          );
        }), !1;
    }
    return ge(f) ? !0 : (e.append(De(p, y, i), u(f)), !1);
  }
  const h = [], m = Object.assign(mn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ge
  });
  function w(f, y) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(f), a.forEach(f, function(g, _) {
        (!(a.isUndefined(g) || g === null) && s.call(
          e,
          g,
          a.isString(_) ? _.trim() : _,
          y,
          m
        )) === !0 && w(g, y ? y.concat(_) : [_]);
      }), h.pop();
    }
  }
  if (!a.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function je(t) {
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
function Oe(t, e) {
  this._pairs = [], t && ue(t, this, e);
}
const ut = Oe.prototype;
ut.append = function(e, n) {
  this._pairs.push([e, n]);
};
ut.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, je);
  } : je;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function yn(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ft(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || yn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(e, n) : i = a.isURLSearchParams(e) ? e.toString() : new Oe(e, n).toString(r), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
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
    a.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const dt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bn = typeof URLSearchParams < "u" ? URLSearchParams : Oe, wn = typeof FormData < "u" ? FormData : null, Sn = typeof Blob < "u" ? Blob : null, gn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bn,
    FormData: wn,
    Blob: Sn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ce = typeof window < "u" && typeof document < "u", Ee = typeof navigator == "object" && navigator || void 0, En = Ce && (!Ee || ["ReactNative", "NativeScript", "NS"].indexOf(Ee.product) < 0), Rn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tn = Ce && window.location.href || "http://localhost", On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ce,
  hasStandardBrowserEnv: En,
  hasStandardBrowserWebWorkerEnv: Rn,
  navigator: Ee,
  origin: Tn
}, Symbol.toStringTag, { value: "Module" })), R = {
  ...On,
  ...gn
};
function Cn(t, e) {
  return ue(t, new R.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return R.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function An(t) {
  return a.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function _n(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function ht(t) {
  function e(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), d = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, d ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), e(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = _n(s[o])), !c);
  }
  if (a.isFormData(t) && a.isFunction(t.entries)) {
    const n = {};
    return a.forEachEntry(t, (r, s) => {
      e(An(r), s, n, 0);
    }), n;
  }
  return null;
}
function xn(t, e, n) {
  if (a.isString(t))
    try {
      return (e || JSON.parse)(t), a.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Z = {
  transitional: dt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(e);
    if (i && a.isHTMLForm(e) && (e = new FormData(e)), a.isFormData(e))
      return s ? JSON.stringify(ht(e)) : e;
    if (a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) || a.isReadableStream(e))
      return e;
    if (a.isArrayBufferView(e))
      return e.buffer;
    if (a.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Cn(e, this.formSerializer).toString();
      if ((c = a.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return ue(
          c ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), xn(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Z.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(e) || a.isReadableStream(e))
      return e;
    if (e && a.isString(e) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
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
a.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Z.headers[t] = {};
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
]), Pn = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || e[n] && Nn[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Ie = /* @__PURE__ */ Symbol("internals");
function V(t) {
  return t && String(t).trim().toLowerCase();
}
function se(t) {
  return t === !1 || t == null ? t : a.isArray(t) ? t.map(se) : String(t);
}
function Fn(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Bn = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function pe(t, e, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!a.isString(e)) {
    if (a.isString(r))
      return e.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(e);
  }
}
function kn(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Ln(t, e) {
  const n = a.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
let A = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function i(c, d, u) {
      const l = V(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || d] = se(c));
    }
    const o = (c, d) => a.forEach(c, (u, l) => i(u, l, d));
    if (a.isPlainObject(e) || e instanceof this.constructor)
      o(e, n);
    else if (a.isString(e) && (e = e.trim()) && !Bn(e))
      o(Pn(e), n);
    else if (a.isObject(e) && a.isIterable(e)) {
      let c = {}, d, u;
      for (const l of e) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (d = c[u]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      o(c, n);
    } else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = V(e), e) {
      const r = a.findKey(this, e);
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
  has(e, n) {
    if (e = V(e), e) {
      const r = a.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || pe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = V(o), o) {
        const c = a.findKey(r, o);
        c && (!n || pe(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || pe(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = se(s), delete n[i];
        return;
      }
      const c = e ? kn(i) : String(i).trim();
      c !== i && delete n[i], n[c] = se(s), r[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && a.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Ie] = this[Ie] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = V(o);
      r[c] || (Ln(s, o), r[c] = !0);
    }
    return a.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function me(t, e) {
  const n = this || Z, r = e || n, s = A.from(r.headers);
  let i = r.data;
  return a.forEach(t, function(c) {
    i = c.call(n, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function pt(t) {
  return !!(t && t.__CANCEL__);
}
function J(t, e, n) {
  b.call(this, t ?? "canceled", b.ERR_CANCELED, e, n), this.name = "CanceledError";
}
a.inherits(J, b, {
  __CANCEL__: !0
});
function mt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Un(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Dn(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const u = Date.now(), l = r[i];
    o || (o = u), n[s] = d, r[s] = u;
    let h = i, m = 0;
    for (; h !== s; )
      m += n[h++], h = h % t;
    if (s = (s + 1) % t, s === i && (i = (i + 1) % t), u - o < e)
      return;
    const w = l && u - l;
    return w ? Math.round(m * 1e3 / w) : void 0;
  };
}
function jn(t, e) {
  let n = 0, r = 1e3 / e, s, i;
  const o = (u, l = Date.now()) => {
    n = l, s = null, i && (clearTimeout(i), i = null), t(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - n;
    h >= r ? o(u, l) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const ie = (t, e, n = 3) => {
  let r = 0;
  const s = Dn(50, 250);
  return jn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, d = o - r, u = s(d), l = o <= c;
    r = o;
    const h = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && c && l ? (c - o) / u : void 0,
      event: i,
      lengthComputable: c != null,
      [e ? "download" : "upload"]: !0
    };
    t(h);
  }, n);
}, $e = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, He = (t) => (...e) => a.asap(() => t(...e)), qn = R.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, R.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(R.origin),
  R.navigator && /(msie|trident)/i.test(R.navigator.userAgent)
) : () => !0, In = R.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, i, o) {
      if (typeof document > "u") return;
      const c = [`${t}=${encodeURIComponent(e)}`];
      a.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && c.push(`path=${r}`), a.isString(s) && c.push(`domain=${s}`), i === !0 && c.push("secure"), a.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
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
function $n(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Hn(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function yt(t, e, n) {
  let r = !$n(e);
  return t && (r || n == !1) ? Hn(t, e) : e;
}
const Me = (t) => t instanceof A ? { ...t } : t;
function I(t, e) {
  e = e || {};
  const n = {};
  function r(u, l, h, m) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: m }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h, m) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, m);
    } else return r(u, l, h, m);
  }
  function i(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in e)
      return r(u, l);
    if (h in t)
      return r(void 0, u);
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
    headers: (u, l, h) => s(Me(u), Me(l), h, !0)
  };
  return a.forEach(Object.keys({ ...t, ...e }), function(l) {
    const h = d[l] || s, m = h(t[l], e[l], l);
    a.isUndefined(m) && h !== c || (n[l] = m);
  }), n;
}
const bt = (t) => {
  const e = I({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = e;
  if (e.headers = o = A.from(o), e.url = ft(yt(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([l, h]) => {
        u.includes(l.toLowerCase()) && o.set(l, h);
      });
    }
  }
  if (R.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(e)), r || r !== !1 && qn(e.url))) {
    const d = s && i && In.read(i);
    d && o.set(s, d);
  }
  return e;
}, Mn = typeof XMLHttpRequest < "u", zn = Mn && function(t) {
  return new Promise(function(n, r) {
    const s = bt(t);
    let i = s.data;
    const o = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = s, l, h, m, w, f;
    function y() {
      w && w(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function g() {
      if (!p)
        return;
      const E = A.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), N = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: E,
        config: t,
        request: p
      };
      mt(function(x) {
        n(x), y();
      }, function(x) {
        r(x), y();
      }, N), p = null;
    }
    "onloadend" in p ? p.onloadend = g : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, p.onabort = function() {
      p && (r(new b("Request aborted", b.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function(O) {
      const N = O && O.message ? O.message : "Network Error", U = new b(N, b.ERR_NETWORK, t, p);
      U.event = O || null, r(U), p = null;
    }, p.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || dt;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(new b(
        O,
        N.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        t,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(O, N) {
      p.setRequestHeader(N, O);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), u && ([m, f] = ie(u, !0), p.addEventListener("progress", m)), d && p.upload && ([h, w] = ie(d), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (l = (E) => {
      p && (r(!E || E.type ? new J(null, t, p) : E), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const _ = Un(s.url);
    if (_ && R.protocols.indexOf(_) === -1) {
      r(new b("Unsupported protocol " + _ + ":", b.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Jn = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof b ? l : new J(l instanceof Error ? l.message : l));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new b(`timeout ${e} of ms exceeded`, b.ETIMEDOUT));
    }, e);
    const c = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, vn = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, Vn = async function* (t, e) {
  for await (const n of Wn(t))
    yield* vn(n, e);
}, Wn = async function* (t) {
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
}, ze = (t, e, n, r) => {
  const s = Vn(t, e);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), d.close();
          return;
        }
        let h = l.byteLength;
        if (n) {
          let m = i += h;
          n(m);
        }
        d.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Je = 64 * 1024, { isFunction: te } = a, Kn = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(a.global), {
  ReadableStream: ve,
  TextEncoder: Ve
} = a.global, We = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Xn = (t) => {
  t = a.merge.call({
    skipUndefined: !0
  }, Kn, t);
  const { fetch: e, Request: n, Response: r } = t, s = e ? te(e) : typeof fetch == "function", i = te(n), o = te(r);
  if (!s)
    return !1;
  const c = s && te(ve), d = s && (typeof Ve == "function" ? /* @__PURE__ */ ((f) => (y) => f.encode(y))(new Ve()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), u = i && c && We(() => {
    let f = !1;
    const y = new n(R.origin, {
      body: new ve(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !y;
  }), l = o && c && We(() => a.isReadableStream(new r("").body)), h = {
    stream: l && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !h[f] && (h[f] = (y, p) => {
      let g = y && y[f];
      if (g)
        return g.call(y);
      throw new b(`Response type '${f}' is not supported`, b.ERR_NOT_SUPPORT, p);
    });
  });
  const m = async (f) => {
    if (f == null)
      return 0;
    if (a.isBlob(f))
      return f.size;
    if (a.isSpecCompliantForm(f))
      return (await new n(R.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(f) || a.isArrayBuffer(f))
      return f.byteLength;
    if (a.isURLSearchParams(f) && (f = f + ""), a.isString(f))
      return (await d(f)).byteLength;
  }, w = async (f, y) => {
    const p = a.toFiniteNumber(f.getContentLength());
    return p ?? m(y);
  };
  return async (f) => {
    let {
      url: y,
      method: p,
      data: g,
      signal: _,
      cancelToken: E,
      timeout: O,
      onDownloadProgress: N,
      onUploadProgress: U,
      responseType: x,
      headers: de,
      withCredentials: Q = "same-origin",
      fetchOptions: _e
    } = bt(f), xe = e || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let Y = Jn([_, E && E.toAbortSignal()], O), v = null;
    const D = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let Ne;
    try {
      if (U && u && p !== "get" && p !== "head" && (Ne = await w(de, g)) !== 0) {
        let L = new n(y, {
          method: "POST",
          body: g,
          duplex: "half"
        }), H;
        if (a.isFormData(g) && (H = L.headers.get("content-type")) && de.setContentType(H), L.body) {
          const [he, ee] = $e(
            Ne,
            ie(He(U))
          );
          g = ze(L.body, Je, he, ee);
        }
      }
      a.isString(Q) || (Q = Q ? "include" : "omit");
      const F = i && "credentials" in n.prototype, Pe = {
        ..._e,
        signal: Y,
        method: p.toUpperCase(),
        headers: de.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: F ? Q : void 0
      };
      v = i && new n(y, Pe);
      let k = await (i ? xe(v, _e) : xe(y, Pe));
      const Fe = l && (x === "stream" || x === "response");
      if (l && (N || Fe && D)) {
        const L = {};
        ["status", "statusText", "headers"].forEach((Be) => {
          L[Be] = k[Be];
        });
        const H = a.toFiniteNumber(k.headers.get("content-length")), [he, ee] = N && $e(
          H,
          ie(He(N), !0)
        ) || [];
        k = new r(
          ze(k.body, Je, he, () => {
            ee && ee(), D && D();
          }),
          L
        );
      }
      x = x || "text";
      let Ot = await h[a.findKey(h, x) || "text"](k, f);
      return !Fe && D && D(), await new Promise((L, H) => {
        mt(L, H, {
          data: Ot,
          headers: A.from(k.headers),
          status: k.status,
          statusText: k.statusText,
          config: f,
          request: v
        });
      });
    } catch (F) {
      throw D && D(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, f, v),
        {
          cause: F.cause || F
        }
      ) : b.from(F, F && F.code, f, v);
    }
  };
}, Gn = /* @__PURE__ */ new Map(), wt = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: s } = e, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, d, u, l = Gn;
  for (; c--; )
    d = i[c], u = l.get(d), u === void 0 && l.set(d, u = c ? /* @__PURE__ */ new Map() : Xn(e)), l = u;
  return u;
};
wt();
const Ae = {
  http: hn,
  xhr: zn,
  fetch: {
    get: wt
  }
};
a.forEach(Ae, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ke = (t) => `- ${t}`, Zn = (t) => a.isFunction(t) || t === null || t === !1;
function Qn(t, e) {
  t = a.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = t[o];
    let c;
    if (s = r, !Zn(r) && (s = Ae[(c = String(r)).toLowerCase()], s === void 0))
      throw new b(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(e))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Ke).join(`
`) : " " + Ke(o[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const St = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Qn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ae
};
function ye(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new J(null, t);
}
function Xe(t) {
  return ye(t), t.headers = A.from(t.headers), t.data = me.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), St.getAdapter(t.adapter || Z.adapter, t)(t).then(function(r) {
    return ye(t), r.data = me.call(
      t,
      t.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return pt(r) || (ye(t), r && r.response && (r.response.data = me.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const gt = "1.13.2", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  fe[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ge = {};
fe.transitional = function(e, n, r) {
  function s(i, o) {
    return "[Axios v" + gt + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (e === !1)
      throw new b(
        s(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Ge[o] && (Ge[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, o, c) : !0;
  };
};
fe.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Yn(t, e, n) {
  if (typeof t != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = e[i];
    if (o) {
      const c = t[i], d = c === void 0 || o(c, i, t);
      if (d !== !0)
        throw new b("option " + i + " must be " + d, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const oe = {
  assertOptions: Yn,
  validators: fe
}, B = oe.validators;
let q = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
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
  async request(e, n) {
    try {
      return await this._request(e, n);
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
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = I(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && oe.assertOptions(r, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : oe.assertOptions(s, {
      encode: B.function,
      serialize: B.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), oe.assertOptions(n, {
      baseUrl: B.spelling("baseURL"),
      withXsrfToken: B.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = A.concat(o, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (d = d && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, h = 0, m;
    if (!d) {
      const f = [Xe.bind(this), void 0];
      for (f.unshift(...c), f.push(...u), m = f.length, l = Promise.resolve(n); h < m; )
        l = l.then(f[h++], f[h++]);
      return l;
    }
    m = c.length;
    let w = n;
    for (; h < m; ) {
      const f = c[h++], y = c[h++];
      try {
        w = f(w);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      l = Xe.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, m = u.length; h < m; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(e) {
    e = I(this.defaults, e);
    const n = yt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ft(n, e.params, e.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(e) {
  q.prototype[e] = function(n, r) {
    return this.request(I(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, o, c) {
      return this.request(I(c || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  q.prototype[e] = n(), q.prototype[e + "Form"] = n(!0);
});
let er = class Et {
  constructor(e) {
    if (typeof e != "function")
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
    }, e(function(i, o, c) {
      r.reason || (r.reason = new J(i, o, c), n(r.reason));
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
      token: new Et(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function tr(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function nr(t) {
  return a.isObject(t) && t.isAxiosError === !0;
}
const Re = {
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
Object.entries(Re).forEach(([t, e]) => {
  Re[e] = t;
});
function Rt(t) {
  const e = new q(t), n = Ye(q.prototype.request, e);
  return a.extend(n, q.prototype, e, { allOwnKeys: !0 }), a.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Rt(I(t, s));
  }, n;
}
const S = Rt(Z);
S.Axios = q;
S.CanceledError = J;
S.CancelToken = er;
S.isCancel = pt;
S.VERSION = gt;
S.toFormData = ue;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(e) {
  return Promise.all(e);
};
S.spread = tr;
S.isAxiosError = nr;
S.mergeConfig = I;
S.AxiosHeaders = A;
S.formToJSON = (t) => ht(a.isHTMLForm(t) ? new FormData(t) : t);
S.getAdapter = St.getAdapter;
S.HttpStatusCode = Re;
S.default = S;
const {
  Axios: _r,
  AxiosError: xr,
  CanceledError: Nr,
  isCancel: Pr,
  CancelToken: Fr,
  VERSION: Br,
  all: kr,
  Cancel: Lr,
  isAxiosError: Ur,
  spread: Dr,
  toFormData: jr,
  AxiosHeaders: qr,
  HttpStatusCode: Ir,
  formToJSON: $r,
  getAdapter: Hr,
  mergeConfig: Mr
} = S, Tt = S.create({
  baseURL: "https://apig2g-t.meches.gov.il:13443",
  //https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Tt.interceptors.request.use((t) => t);
Tt.interceptors.response.use((t) => t, (t) => Promise.reject(t));
const rr = async (t, e, n) => new Promise((r) => {
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
}), zr = (t) => {
  const [e, n] = ne(null), [r, s] = ne(null), [i, o] = ne(!1), {
    url: c,
    method: d,
    data: u
  } = t, l = (h) => rr(h.url, h.method, h.data);
  return Ct(() => {
    c && d && u && (async () => {
      o(!0);
      try {
        console.log("API request:", c, d, u);
        const m = await l({
          url: c,
          method: d,
          data: u
        });
        console.log("API response:", m.data), n(m.data), s(null);
      } catch (m) {
        console.error("API request error:", m), s(m?.message ? m : null), n(null);
      } finally {
        o(!1);
      }
    })();
  }, [c, d, u]), {
    response: {
      data: e,
      error: r,
      status: i ? "pending" : r ? "error" : "success"
    }
  };
}, Jr = (t) => {
  const e = $(3), {
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
  return e[1] !== n ? (s = /* @__PURE__ */ T("button", { style: r, children: n }), e[1] = n, e[2] = s) : s = e[2], s;
}, sr = "link-module__link___jpeXq", or = {
  link: sr
}, ir = (t) => {
  const e = $(3), {
    text: n,
    onClick: r
  } = t;
  let s;
  return e[0] !== r || e[1] !== n ? (s = /* @__PURE__ */ T("h2", { className: or.link, onClick: r, children: n }), e[0] = r, e[1] = n, e[2] = s) : s = e[2], s;
}, ar = "Title-module__titleContainer___V-yQ5", cr = "Title-module__title___cbhlu", lr = "Title-module__subTitle___wZXux", be = {
  titleContainer: ar,
  title: cr,
  subTitle: lr
}, ur = (t) => {
  const e = $(11), {
    title: n,
    subTitle: r,
    titleSize: s,
    titleMargin: i
  } = t, o = s === void 0 ? 32 : s, c = i === void 0 ? 50 : i, d = `${o}px`, u = `${c}px`;
  let l;
  e[0] !== d || e[1] !== u ? (l = {
    "--title-size": d,
    "--title-margin": u
  }, e[0] = d, e[1] = u, e[2] = l) : l = e[2];
  const h = l;
  let m;
  e[3] !== h || e[4] !== n ? (m = /* @__PURE__ */ T("h1", { className: be.title, style: h, children: n }), e[3] = h, e[4] = n, e[5] = m) : m = e[5];
  let w;
  e[6] !== r ? (w = r !== "" ? /* @__PURE__ */ T("h2", { className: be.subTitle, children: r }) : null, e[6] = r, e[7] = w) : w = e[7];
  let f;
  return e[8] !== m || e[9] !== w ? (f = /* @__PURE__ */ W("div", { className: be.titleContainer, children: [
    m,
    w
  ] }), e[8] = m, e[9] = w, e[10] = f) : f = e[10], f;
}, fr = "SearchContainer-module__searchContainer___UiSUG", dr = "SearchContainer-module__searchContent___g1iR3", Ze = {
  searchContainer: fr,
  searchContent: dr
}, hr = "SearchButtonsContainer-module__searchButtonsContainer___sSZIE", pr = {
  searchButtonsContainer: hr
}, mr = (t) => {
  const e = $(11), {
    hasSearchButton: n,
    hasClearButton: r,
    onSearch: s,
    onClear: i
  } = t, {
    t: o
  } = Qe();
  let c;
  e[0] !== n || e[1] !== s || e[2] !== o ? (c = n && /* @__PURE__ */ T(ke, { label: "Search", icon: /* @__PURE__ */ T(Le, { name: "search" }), onClick: s, children: o("Search") }), e[0] = n, e[1] = s, e[2] = o, e[3] = c) : c = e[3];
  let d;
  e[4] !== r || e[5] !== i || e[6] !== o ? (d = r && /* @__PURE__ */ T(ke, { label: "Clear", icon: /* @__PURE__ */ T(Le, { name: "close" }), onClick: i, children: o("Clear") }), e[4] = r, e[5] = i, e[6] = o, e[7] = d) : d = e[7];
  let u;
  return e[8] !== c || e[9] !== d ? (u = /* @__PURE__ */ W("div", { className: pr.searchButtonsContainer, children: [
    c,
    d
  ] }), e[8] = c, e[9] = d, e[10] = u) : u = e[10], u;
}, yr = (t) => {
  const e = $(10), {
    hasSearchButton: n,
    hasClearButton: r,
    onSearch: s,
    onClear: i
  } = t;
  let o;
  e[0] !== t.children ? (o = /* @__PURE__ */ T("div", { className: Ze.searchContent, children: t.children }), e[0] = t.children, e[1] = o) : o = e[1];
  let c;
  e[2] !== r || e[3] !== n || e[4] !== i || e[5] !== s ? (c = /* @__PURE__ */ T(mr, { hasSearchButton: n, hasClearButton: r, onSearch: s, onClear: i }), e[2] = r, e[3] = n, e[4] = i, e[5] = s, e[6] = c) : c = e[6];
  let d;
  return e[7] !== o || e[8] !== c ? (d = /* @__PURE__ */ W("div", { className: Ze.searchContainer, children: [
    o,
    c
  ] }), e[7] = o, e[8] = c, e[9] = d) : d = e[9], d;
}, br = "MainSearchContainer-module__mainSearchContainer___oR1-B", wr = "MainSearchContainer-module__mainSearchInfoLink___tmN-g", Sr = "MainSearchContainer-module__mainSearchToast___Kth2t", we = {
  mainSearchContainer: br,
  mainSearchInfoLink: wr,
  mainSearchToast: Sr
}, vr = (t) => {
  const e = $(16), {
    infoText: n,
    pageTitle: r,
    hasSearchButton: s,
    hasClearButton: i,
    onSearch: o,
    onClear: c
  } = t, [d, u] = ne(!1), {
    t: l
  } = Qe();
  let h;
  e[0] !== r ? (h = /* @__PURE__ */ T(ur, { title: r, subTitle: "" }), e[0] = r, e[1] = h) : h = e[1];
  let m;
  e[2] !== n || e[3] !== d || e[4] !== l ? (m = n && /* @__PURE__ */ W("div", { className: we.mainSearchInfoLink, children: [
    /* @__PURE__ */ T(ir, { onClick: () => u(!d), text: l("queryExplanation") }),
    d && /* @__PURE__ */ T(At, { className: we.mainSearchToast, children: n })
  ] }), e[2] = n, e[3] = d, e[4] = l, e[5] = m) : m = e[5];
  let w;
  e[6] !== i || e[7] !== s || e[8] !== c || e[9] !== o || e[10] !== t.children ? (w = t.children && /* @__PURE__ */ T(yr, { hasSearchButton: s, hasClearButton: i, onSearch: o, onClear: c, children: t.children }), e[6] = i, e[7] = s, e[8] = c, e[9] = o, e[10] = t.children, e[11] = w) : w = e[11];
  let f;
  return e[12] !== h || e[13] !== m || e[14] !== w ? (f = /* @__PURE__ */ W("div", { className: we.mainSearchContainer, children: [
    h,
    m,
    w
  ] }), e[12] = h, e[13] = m, e[14] = w, e[15] = f) : f = e[15], f;
}, Vr = (t) => {
  const e = $(2);
  let n;
  return e[0] !== t.children ? (n = /* @__PURE__ */ T("div", { className: "rootLayout", children: t.children }), e[0] = t.children, e[1] = n) : n = e[1], n;
};
export {
  Jr as Button,
  vr as MainSearchContainer,
  Vr as RootLayout,
  rr as mockApiRequest,
  zr as useApiRequest
};
