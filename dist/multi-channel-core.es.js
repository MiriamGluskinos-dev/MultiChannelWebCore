import { useState as te, useEffect as Qe } from "react";
import { jsx as R, jsxs as $ } from "react/jsx-runtime";
import { Button as Ue, Icon as Le, Toast as Ct } from "@igds/react";
import { useTranslation as Ye } from "react-i18next";
const At = async (e, t, n) => new Promise((r) => {
  setTimeout(() => {
    s({
      data: {
        __mock__: !0,
        url: n,
        method: e,
        request: t
      }
    });
  }, 200);
});
function et(e, t) {
  return function() {
    return n.apply(e, arguments);
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
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
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
  let s, r;
  if (typeof n != "object" && (n = [n]), ne(n))
    for (s = 0, r = n.length; s < r; s++)
      e.call(null, n[s], s, n);
  else {
    if (ue(n))
      return;
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (s = 0; s < o; s++)
      a = i[s], e.call(null, n[a], a, n);
  }
}
function st(e, t) {
  if (W(e))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let s = t.length, r;
  for (; s-- > 0; )
    if (r = t[s], e === r.toLowerCase())
      return r;
  return null;
}
const j = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ot = (e) => !M(e) && e !== j;
function we() {
  const { caseless: e, skipUndefined: t } = ot(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && st(n, i) || i;
    ne(n[o]) && ne(s) ? n[o] = we(n[o], s) : ne(s) ? n[o] = we({}, s) : z(s) ? n[o] = s.slice() : (!t || !M(s)) && (n[o] = s);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && de(arguments[r], s);
  return t;
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
  function(t, s, r) {
    return s.toUpperCase() + r;
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
    const s = n[t];
    if (D(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Bn = (n, e) => {
  const t = {}, s = (r) => {
    r.forEach((i) => {
      t[i] = !0;
    });
  };
  return z(e) ? r(e) : r(String(e).split(t)), n;
}, sn = () => {
}, on = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function an(e) {
  return !!(e && C(e.append) && e[tt] === "FormData" && e[ie]);
}
const Kn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (fe(s)) {
      if (e.indexOf(s) >= 0)
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
    return s;
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
function S(n, e, t, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
d.inherits(S, Error, {
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
      config: d.toJSONObject(this.config),
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
  }, (l) => l !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", c = e == null && n ? n.code : e;
  return S.call(o, a, c, t, s, r), n && o.cause == null && Object.defineProperty(o, "cause", { value: n, configurable: !0 }), o.name = n && n.name || "Error", i && Object.assign(o, i), o;
};
const Gn = null;
function He(n) {
  return d.isPlainObject(n) || d.isArray(n);
}
function ut(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function De(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ut(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Xn(n) {
  return d.isArray(n) && !n.some(He);
}
const Qn = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ne(n, e, t) {
  if (!d.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = d.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !d.isUndefined(p[m]);
  });
  const s = t.metaTokens, r = t.visitor || u, i = t.dots, o = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(e);
  if (!d.isFunction(r))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (d.isDate(f))
      return f.toISOString();
    if (d.isBoolean(f))
      return f.toString();
    if (!c && d.isBlob(f))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(f) || d.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
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
  const h = [], g = Object.assign(Qn, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: He
  });
  function y(f, m) {
    if (!d.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(f), d.forEach(f, function(x, w) {
        (!(d.isUndefined(x) || x === null) && r.call(
          e,
          x,
          d.isString(w) ? w.trim() : w,
          m,
          g
        )) === !0 && y(x, m ? m.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!d.isObject(n))
    throw new TypeError("data must be an object");
  return y(n), e;
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
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
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
function Yn(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function dt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || yn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const r = t && t.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Te(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
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
  use(e, t, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
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
    d.forEach(this.handlers, function(s) {
      s !== null && e(s);
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
    URLSearchParams: Zn,
    FormData: es,
    Blob: ts
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
function as(n, e) {
  return Ne(n, new k.classes.URLSearchParams(), {
    visitor: function(t, s, r, i) {
      return k.isNode && d.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ls(n) {
  return d.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function cs(n) {
  const e = {}, t = Object.keys(n);
  let s;
  const r = t.length;
  let i;
  for (s = 0; s < r; s++)
    i = t[s], e[i] = n[i];
  return e;
}
function pt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), c = i >= t.length;
    return o = !o && d.isArray(r) ? r.length : o, c ? (d.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !d.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && d.isArray(r[o]) && (r[o] = cs(r[o])), !a);
  }
  if (d.isFormData(n) && d.isFunction(n.entries)) {
    const t = {};
    return d.forEachEntry(n, (s, r) => {
      e(ls(s), r, t, 0);
    }), t;
  }
  return null;
}
function us(n, e, t) {
  if (d.isString(n))
    try {
      return (e || JSON.parse)(n), d.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (t || JSON.stringify)(n);
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
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return as(e, this.formSerializer).toString();
      if ((a = d.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ne(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || r ? (t.setContentType("application/json", !1), us(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || he.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (d.isResponse(e) || d.isReadableStream(e))
      return e;
    if (e && d.isString(e) && (s && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  he.headers[n] = {};
});
const fs = d.toObjectSet([
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
]), ds = (n) => {
  const e = {};
  let t, s, r;
  return n && n.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Nn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ie = /* @__PURE__ */ Symbol("internals");
function V(e) {
  return e && String(e).trim().toLowerCase();
}
function xe(n) {
  return n === !1 || n == null ? n : d.isArray(n) ? n.map(xe) : String(n);
}
function hs(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = t.exec(n); )
    e[s[1]] = s[2];
  return e;
}
const ps = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ke(n, e, t, s, r) {
  if (d.isFunction(s))
    return s.call(this, e, t);
  if (r && (e = t), !!d.isString(e)) {
    if (d.isString(s))
      return e.indexOf(s) !== -1;
    if (d.isRegExp(s))
      return s.test(e);
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
let U = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const r = this;
    function i(a, c, l) {
      const u = ie(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = d.findKey(r, u);
      (!h || r[h] === void 0 || l === !0 || l === void 0 && r[h] !== !1) && (r[h || c] = xe(a));
    }
    const o = (a, c) => d.forEach(a, (l, u) => i(l, u, c));
    if (d.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (d.isString(e) && (e = e.trim()) && !ps(e))
      o(ds(e), t);
    else if (d.isObject(e) && d.isIterable(e)) {
      let a = {}, c, l;
      for (const u of e) {
        if (!d.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? d.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      o(a, t);
    } else
      e != null && i(t, e, s);
    return this;
  }
  get(e, t) {
    if (e = ie(e), e) {
      const s = d.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!t)
          return r;
        if (t === !0)
          return hs(r);
        if (d.isFunction(t))
          return t.call(this, r, s);
        if (d.isRegExp(t))
          return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = ie(e), e) {
      const s = d.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || ke(this, this[s], s, t)));
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = ie(o), o) {
        const a = d.findKey(s, o);
        a && (!t || ke(s, s[a], a, t)) && (delete s[a], r = !0);
      }
    }
    return d.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    const t = Object.keys(this);
    let s = t.length, r = !1;
    for (; s--; ) {
      const i = t[s];
      (!e || ke(this, this[i], i, e, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(e) {
    const t = this, s = {};
    return d.forEach(this, (r, i) => {
      const o = d.findKey(s, i);
      if (o) {
        t[o] = xe(r), delete t[i];
        return;
      }
      const c = t ? Un(i) : String(i).trim();
      c !== i && delete n[i], n[c] = re(s), r[c] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (s, r) => {
      s != null && s !== !1 && (t[r] = e && d.isArray(s) ? s.join(", ") : s);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
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
  static concat(e, ...t) {
    const s = new this(e);
    return t.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const r = (this[Ie] = this[Ie] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const c = V(o);
      r[c] || (Ln(s, o), r[c] = !0);
    }
    return d.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
U.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(U.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(s) {
      this[t] = s;
    }
  };
});
d.freezeMethods(U);
function $e(n, e) {
  const t = this || he, s = e || t, r = U.from(s.headers);
  let i = s.data;
  return d.forEach(n, function(a) {
    i = a.call(t, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
function mt(e) {
  return !!(e && e.__CANCEL__);
}
function se(n, e, t) {
  S.call(this, n ?? "canceled", S.ERR_CANCELED, e, t), this.name = "CanceledError";
}
d.inherits(se, S, {
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
function bs(n, e) {
  n = n || 10;
  const t = new Array(n), s = new Array(n);
  let r = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const l = Date.now(), u = s[i];
    o || (o = l), t[r] = c, s[r] = l;
    let h = i, g = 0;
    for (; h !== r; )
      g += t[h++], h = h % n;
    if (r = (r + 1) % n, r === i && (i = (i + 1) % n), l - o < e)
      return;
    const y = u && l - u;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function Ss(n, e) {
  let t = 0, s = 1e3 / e, r, i;
  const o = (l, u = Date.now()) => {
    t = u, r = null, i && (clearTimeout(i), i = null), n(...l);
  };
  return [(...l) => {
    const u = Date.now(), h = u - t;
    h >= s ? o(l, u) : (r = l, i || (i = setTimeout(() => {
      i = null, o(r);
    }, s - h)));
  }, () => r && o(r)];
}
const Oe = (n, e, t = 3) => {
  let s = 0;
  const r = bs(50, 250);
  return Ss((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, c = o - s, l = r(c), u = o <= a;
    s = o;
    const h = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - o) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
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
function Os(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function $n(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function bt(e, t, n) {
  let r = !Hn(t);
  return e && (r || n == !1) ? $n(e, t) : t;
}
const at = (n) => n instanceof U ? { ...n } : n;
function X(n, e) {
  e = e || {};
  const t = {};
  function s(l, u, h, g) {
    return d.isPlainObject(l) && d.isPlainObject(u) ? d.merge.call({ caseless: g }, l, u) : d.isPlainObject(u) ? d.merge({}, u) : d.isArray(u) ? u.slice() : u;
  }
  function r(l, u, h, g) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l))
        return s(void 0, l, h, g);
    } else return s(l, u, h, g);
  }
  function i(l, u) {
    if (!d.isUndefined(u))
      return s(void 0, u);
  }
  function o(l, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l))
        return s(void 0, l);
    } else return s(void 0, u);
  }
  function a(l, u, h) {
    if (h in e)
      return s(l, u);
    if (h in n)
      return s(void 0, l);
  }
  const c = {
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
    validateStatus: a,
    headers: (l, u, h) => r(at(l), at(u), h, !0)
  };
  return d.forEach(Object.keys({ ...n, ...e }), function(u) {
    const h = c[u] || r, g = h(n[u], e[u], u);
    d.isUndefined(g) && h !== a || (t[u] = g);
  }), t;
}
const wt = (e) => {
  const t = I({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = A.from(o), t.url = dt(bt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), d.isFormData(t)) {
    if (k.hasStandardBrowserEnv || k.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (d.isFunction(t.getHeaders)) {
      const c = t.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, h]) => {
        l.includes(u.toLowerCase()) && o.set(u, h);
      });
    }
  }
  if (k.hasStandardBrowserEnv && (s && d.isFunction(s) && (s = s(e)), s || s !== !1 && xs(e.url))) {
    const c = r && i && ws.read(i);
    c && o.set(r, c);
  }
  return t;
}, Mn = typeof XMLHttpRequest < "u", zn = Mn && function(e) {
  return new Promise(function(n, r) {
    const s = wt(e);
    let i = s.data;
    const o = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, u, p, b, S, l;
    function m() {
      y && y(), f && f(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(r.method.toUpperCase(), r.url, !0), p.timeout = r.timeout;
    function x() {
      if (!p)
        return;
      const R = U.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: R,
        config: n,
        request: p
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
    p.send(i || null);
  });
}, Ls = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let s = new AbortController(), r;
    const i = function(l) {
      if (!r) {
        r = !0, a();
        const u = l instanceof Error ? l : this.reason;
        s.abort(u instanceof S ? u : new se(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = s;
    return c.unsubscribe = () => d.asap(a), c;
  }
}, Ts = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let s = 0, r;
  for (; s < t; )
    r = s + e, yield n.slice(s, r), s = r;
}, Ps = async function* (n, e) {
  for await (const t of Ns(n))
    yield* Ts(t, e);
}, Ns = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: s } = await e.read();
      if (t)
        break;
      yield s;
    }
  } finally {
    await e.cancel();
  }
}, ze = (e, t, n, r) => {
  const s = Vn(e, t);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await r.next();
        if (l) {
          a(), c.close();
          return;
        }
        let h = u.byteLength;
        if (t) {
          let g = i += h;
          t(g);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), r.return();
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
    return !!n(...e);
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
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !m;
  }), u = o && c && We(() => a.isReadableStream(new r("").body)), p = {
    stream: u && ((l) => l.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !h[f] && (h[f] = (m, p) => {
      let x = m && m[f];
      if (x)
        return x.call(m);
      throw new S(`Response type '${f}' is not supported`, S.ERR_NOT_SUPPORT, p);
    });
  });
  const g = async (f) => {
    if (f == null)
      return 0;
    if (d.isBlob(f))
      return f.size;
    if (d.isSpecCompliantForm(f))
      return (await new t(k.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(f) || d.isArrayBuffer(f))
      return f.byteLength;
    if (d.isURLSearchParams(f) && (f = f + ""), d.isString(f))
      return (await c(f)).byteLength;
  }, y = async (f, m) => {
    const p = d.toFiniteNumber(f.getContentLength());
    return p ?? g(m);
  };
  return async (f) => {
    let {
      url: m,
      method: p,
      data: x,
      signal: w,
      cancelToken: R,
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
          body: x,
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
    } catch (C) {
      throw N && N(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, f, F),
        {
          cause: C.cause || C
        }
      ) : S.from(C, C && C.code, f, F);
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
    get: Xt
  }
};
a.forEach(Ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
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
function ve(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new se(null, n);
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
  return (i, o, a) => {
    if (e === !1)
      throw new S(
        r(o, " has been removed" + (t ? " in " + t : "")),
        S.ERR_DEPRECATED
      );
    return n && !Ge[o] && (Ge[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
Ae.spelling = function(e) {
  return (t, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function Yn(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const a = n[i], c = a === void 0 || o(a, i, n);
      if (c !== !0)
        throw new S("option " + i + " must be " + c, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
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
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = X(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && we.assertOptions(s, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), r != null && (d.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : we.assertOptions(r, {
      encode: V.function,
      serialize: V.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), we.assertOptions(t, {
      baseUrl: V.spelling("baseURL"),
      withXsrfToken: V.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && d.merge(
      i.common,
      i[t.method]
    );
    i && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), t.headers = U.concat(o, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
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
        y = f(y);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = Xe.call(this, S);
    } catch (l) {
      return Promise.reject(l);
    }
    for (h = 0, g = l.length; h < g; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = I(this.defaults, t);
    const n = bt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return dt(n, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(e) {
  G.prototype[e] = function(t, s) {
    return this.request(X(s || {}, {
      method: e,
      url: t,
      data: (s || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(e) {
  function t(s) {
    return function(i, o, a) {
      return this.request(X(a || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  G.prototype[e] = t(), G.prototype[e + "Form"] = t(!0);
});
let er = class Rt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((a) => {
        s.subscribe(a), i = a;
      }).then(r);
      return o.cancel = function() {
        s.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      s.reason || (s.reason = new se(i, o, a), t(s.reason));
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
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (s) => {
      e.abort(s);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Zt(function(r) {
        e = r;
      }),
      cancel: e
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
  NetworkAuthenticationRequired: 511
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
Xe.interceptors.request.use((n) => n);
Xe.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const rr = (e) => {
  const [t, n] = te(null), [r, s] = te(null), [i, o] = te(!1), { url: c, method: d, data: f, mock: u, auto: p = !0 } = e, b = u ? (l) => At(l.url, l.method, l.data) : (l) => Ae(l), S = async () => {
    o(!0);
    try {
      console.log("API request:", a, c, l);
      const f = await g({ url: a, method: c, data: l, ...c === "GET" ? { params: l } : { data: l } });
      console.log("API response: status", f.data ? "ok" : "error"), t(f.data), r(null);
    } catch (f) {
      console.error("API request error:", f), r(f?.message ? f : null), t(null);
    } finally {
      o(!1);
    }
  };
  return At(() => {
    h && y();
  }, [h]), {
    response: {
      data: e,
      error: s,
      status: i ? "pending" : s ? "error" : "success"
    },
    refetch: y
  };
}, Mr = ({ tableName: e }) => {
  const t = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${e}`, { response: n, refetch: r } = rr({ url: t, method: "GET" });
  return {
    response: t,
    refetch: s
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
    children: n
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
        icon: /* @__PURE__ */ A(Ze, { name: "search" }),
        onClick: i,
        disabled: s,
        children: a("Search")
      }
    ),
    n && /* @__PURE__ */ R(
      Ue,
      {
        label: "Clear",
        icon: /* @__PURE__ */ A(Ze, { name: "close" }),
        onClick: o,
        disabled: r,
        children: a("Clear")
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
}, ["test"]), /* @__PURE__ */ A("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
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
