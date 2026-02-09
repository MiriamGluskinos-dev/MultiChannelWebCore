import { useState as be, useEffect as Nt } from "react";
import { jsx as T, jsxs as W } from "react/jsx-runtime";
import { Button as Qe, Icon as Ye, Toast as en } from "@igds/react";
import { initReactI18next as tn, useTranslation as nn } from "react-i18next";
const sn = async (n, e, t) => new Promise((s) => {
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
function Tt(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: rn } = Object.prototype, { getPrototypeOf: qe } = Object, { iterator: Le, toStringTag: Pt } = Symbol, Ne = /* @__PURE__ */ ((n) => (e) => {
  const t = rn.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (n) => (n = n.toLowerCase(), (e) => Ne(e) === n), Te = (n) => (e) => typeof e === n, { isArray: te } = Array, ee = Te("undefined");
function ue(n) {
  return n !== null && !ee(n) && n.constructor !== null && !ee(n.constructor) && F(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const At = U("ArrayBuffer");
function on(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && At(n.buffer), e;
}
const an = Te("string"), F = Te("function"), vt = Te("number"), ce = (n) => n !== null && typeof n == "object", ln = (n) => n === !0 || n === !1, ye = (n) => {
  if (Ne(n) !== "object")
    return !1;
  const e = qe(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Pt in n) && !(Le in n);
}, un = (n) => {
  if (!ce(n) || ue(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, cn = U("Date"), fn = U("File"), dn = U("Blob"), hn = U("FileList"), pn = (n) => ce(n) && F(n.pipe), gn = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || F(n.append) && ((e = Ne(n)) === "formdata" || // detect form-data instance
  e === "object" && F(n.toString) && n.toString() === "[object FormData]"));
}, mn = U("URLSearchParams"), [bn, yn, Sn, wn] = ["ReadableStream", "Request", "Response", "Headers"].map(U), xn = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fe(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let s, r;
  if (typeof n != "object" && (n = [n]), te(n))
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
function kt(n, e) {
  if (ue(n))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let s = t.length, r;
  for (; s-- > 0; )
    if (r = t[s], e === r.toLowerCase())
      return r;
  return null;
}
const z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ft = (n) => !ee(n) && n !== z;
function Be() {
  const { caseless: n, skipUndefined: e } = Ft(this) && this || {}, t = {}, s = (r, i) => {
    const o = n && kt(t, i) || i;
    ye(t[o]) && ye(r) ? t[o] = Be(t[o], r) : ye(r) ? t[o] = Be({}, r) : te(r) ? t[o] = r.slice() : (!e || !ee(r)) && (t[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && fe(arguments[r], s);
  return t;
}
const Rn = (n, e, t, { allOwnKeys: s } = {}) => (fe(e, (r, i) => {
  t && F(r) ? Object.defineProperty(n, i, {
    value: Tt(r, t),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(n, i, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: s }), n), On = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), En = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), Object.defineProperty(n.prototype, "constructor", {
    value: n,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, Cn = (n, e, t, s) => {
  let r, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(n), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && qe(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, Ln = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, Nn = (n) => {
  if (!n) return null;
  if (te(n)) return n;
  let e = n.length;
  if (!vt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, Tn = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && qe(Uint8Array)), Pn = (n, e) => {
  const s = (n && n[Le]).call(n);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(n, i[0], i[1]);
  }
}, An = (n, e) => {
  let t;
  const s = [];
  for (; (t = n.exec(e)) !== null; )
    s.push(t);
  return s;
}, vn = U("HTMLFormElement"), kn = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, s, r) {
    return s.toUpperCase() + r;
  }
), Ze = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Fn = U("RegExp"), $t = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  fe(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, $n = (n) => {
  $t(n, (e, t) => {
    if (F(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const s = n[t];
    if (F(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Dn = (n, e) => {
  const t = {}, s = (r) => {
    r.forEach((i) => {
      t[i] = !0;
    });
  };
  return te(n) ? s(n) : s(String(n).split(e)), t;
}, In = () => {
}, Un = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function _n(n) {
  return !!(n && F(n.append) && n[Pt] === "FormData" && n[Le]);
}
const jn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (ce(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (ue(s))
        return s;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = te(s) ? [] : {};
        return fe(s, (o, a) => {
          const l = t(o, r + 1);
          !ee(l) && (i[a] = l);
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return t(n, 0);
}, Bn = U("AsyncFunction"), Hn = (n) => n && (ce(n) || F(n)) && F(n.then) && F(n.catch), Dt = ((n, e) => n ? setImmediate : e ? ((t, s) => (z.addEventListener("message", ({ source: r, data: i }) => {
  r === z && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), z.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  F(z.postMessage)
), Mn = typeof queueMicrotask < "u" ? queueMicrotask.bind(z) : typeof process < "u" && process.nextTick || Dt, Vn = (n) => n != null && F(n[Le]), f = {
  isArray: te,
  isArrayBuffer: At,
  isBuffer: ue,
  isFormData: gn,
  isArrayBufferView: on,
  isString: an,
  isNumber: vt,
  isBoolean: ln,
  isObject: ce,
  isPlainObject: ye,
  isEmptyObject: un,
  isReadableStream: bn,
  isRequest: yn,
  isResponse: Sn,
  isHeaders: wn,
  isUndefined: ee,
  isDate: cn,
  isFile: fn,
  isBlob: dn,
  isRegExp: Fn,
  isFunction: F,
  isStream: pn,
  isURLSearchParams: mn,
  isTypedArray: Tn,
  isFileList: hn,
  forEach: fe,
  merge: Be,
  extend: Rn,
  trim: xn,
  stripBOM: On,
  inherits: En,
  toFlatObject: Cn,
  kindOf: Ne,
  kindOfTest: U,
  endsWith: Ln,
  toArray: Nn,
  forEachEntry: Pn,
  matchAll: An,
  isHTMLForm: vn,
  hasOwnProperty: Ze,
  hasOwnProp: Ze,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $t,
  freezeMethods: $n,
  toObjectSet: Dn,
  toCamelCase: kn,
  noop: In,
  toFiniteNumber: Un,
  findKey: kt,
  global: z,
  isContextDefined: Ft,
  isSpecCompliantForm: _n,
  toJSONObject: jn,
  isAsyncFn: Bn,
  isThenable: Hn,
  setImmediate: Dt,
  asap: Mn,
  isIterable: Vn
};
let y = class It extends Error {
  static from(e, t, s, r, i, o) {
    const a = new It(e.message, t || e.code, s, r, i);
    return a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, t, s, r, i) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), s && (this.config = s), r && (this.request = r), i && (this.response = i, this.status = i.status);
  }
  toJSON() {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
y.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
y.ERR_BAD_OPTION = "ERR_BAD_OPTION";
y.ECONNABORTED = "ECONNABORTED";
y.ETIMEDOUT = "ETIMEDOUT";
y.ERR_NETWORK = "ERR_NETWORK";
y.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
y.ERR_DEPRECATED = "ERR_DEPRECATED";
y.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
y.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
y.ERR_CANCELED = "ERR_CANCELED";
y.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
y.ERR_INVALID_URL = "ERR_INVALID_URL";
const Kn = null;
function He(n) {
  return f.isPlainObject(n) || f.isArray(n);
}
function Ut(n) {
  return f.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function et(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = Ut(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
}
function qn(n) {
  return f.isArray(n) && !n.some(He);
}
const zn = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Pe(n, e, t) {
  if (!f.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = f.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !f.isUndefined(g[m]);
  });
  const s = t.metaTokens, r = t.visitor || c, i = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(e);
  if (!f.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (f.isDate(h))
      return h.toISOString();
    if (f.isBoolean(h))
      return h.toString();
    if (!l && f.isBlob(h))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(h) || f.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, m, g) {
    let x = h;
    if (h && !g && typeof h == "object") {
      if (f.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (f.isArray(h) && qn(h) || (f.isFileList(h) || f.endsWith(m, "[]")) && (x = f.toArray(h)))
        return m = Ut(m), x.forEach(function(C, w) {
          !(f.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? et([m], w, i) : o === null ? m : m + "[]",
            u(C)
          );
        }), !1;
    }
    return He(h) ? !0 : (e.append(et(g, m, i), u(h)), !1);
  }
  const p = [], d = Object.assign(zn, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: He
  });
  function b(h, m) {
    if (!f.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(h), f.forEach(h, function(x, R) {
        (!(f.isUndefined(x) || x === null) && r.call(
          e,
          x,
          f.isString(R) ? R.trim() : R,
          m,
          d
        )) === !0 && b(x, m ? m.concat(R) : [R]);
      }), p.pop();
    }
  }
  if (!f.isObject(n))
    throw new TypeError("data must be an object");
  return b(n), e;
}
function tt(n) {
  const e = {
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
function ze(n, e) {
  this._pairs = [], n && Pe(n, this, e);
}
const _t = ze.prototype;
_t.append = function(e, t) {
  this._pairs.push([e, t]);
};
_t.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, tt);
  } : tt;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function Jn(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function jt(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || Jn, r = f.isFunction(t) ? {
    serialize: t
  } : t, i = r && r.serialize;
  let o;
  if (i ? o = i(e, r) : o = f.isURLSearchParams(e) ? e.toString() : new ze(e, r).toString(s), o) {
    const a = n.indexOf("#");
    a !== -1 && (n = n.slice(0, a)), n += (n.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return n;
}
class nt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
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
    f.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const Bt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wn = typeof URLSearchParams < "u" ? URLSearchParams : ze, Gn = typeof FormData < "u" ? FormData : null, Xn = typeof Blob < "u" ? Blob : null, Qn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wn,
    FormData: Gn,
    Blob: Xn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Je = typeof window < "u" && typeof document < "u", Me = typeof navigator == "object" && navigator || void 0, Yn = Je && (!Me || ["ReactNative", "NativeScript", "NS"].indexOf(Me.product) < 0), Zn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", es = Je && window.location.href || "http://localhost", ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Je,
  hasStandardBrowserEnv: Yn,
  hasStandardBrowserWebWorkerEnv: Zn,
  navigator: Me,
  origin: es
}, Symbol.toStringTag, { value: "Module" })), v = {
  ...ts,
  ...Qn
};
function ns(n, e) {
  return Pe(n, new v.classes.URLSearchParams(), {
    visitor: function(t, s, r, i) {
      return v.isNode && f.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ss(n) {
  return f.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function rs(n) {
  const e = {}, t = Object.keys(n);
  let s;
  const r = t.length;
  let i;
  for (s = 0; s < r; s++)
    i = t[s], e[i] = n[i];
  return e;
}
function Ht(n) {
  function e(t, s, r, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= t.length;
    return o = !o && f.isArray(r) ? r.length : o, l ? (f.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !f.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && f.isArray(r[o]) && (r[o] = rs(r[o])), !a);
  }
  if (f.isFormData(n) && f.isFunction(n.entries)) {
    const t = {};
    return f.forEachEntry(n, (s, r) => {
      e(ss(s), r, t, 0);
    }), t;
  }
  return null;
}
function is(n, e, t) {
  if (f.isString(n))
    try {
      return (e || JSON.parse)(n), f.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (t || JSON.stringify)(n);
}
const de = {
  transitional: Bt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = f.isObject(e);
    if (i && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return r ? JSON.stringify(Ht(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return ns(e, this.formSerializer).toString();
      if ((a = f.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Pe(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || r ? (t.setContentType("application/json", !1), is(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || de.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
      return e;
    if (e && f.isString(e) && (s && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? y.from(a, y.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: v.classes.FormData,
    Blob: v.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  de.headers[n] = {};
});
const os = f.toObjectSet([
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
]), as = (n) => {
  const e = {};
  let t, s, r;
  return n && n.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && os[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, st = /* @__PURE__ */ Symbol("internals");
function ie(n) {
  return n && String(n).trim().toLowerCase();
}
function Se(n) {
  return n === !1 || n == null ? n : f.isArray(n) ? n.map(Se) : String(n);
}
function ls(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = t.exec(n); )
    e[s[1]] = s[2];
  return e;
}
const us = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Fe(n, e, t, s, r) {
  if (f.isFunction(s))
    return s.call(this, e, t);
  if (r && (e = t), !!f.isString(e)) {
    if (f.isString(s))
      return e.indexOf(s) !== -1;
    if (f.isRegExp(s))
      return s.test(e);
  }
}
function cs(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function fs(n, e) {
  const t = f.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + t, {
      value: function(r, i, o) {
        return this[s].call(this, e, r, i, o);
      },
      configurable: !0
    });
  });
}
let $ = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const r = this;
    function i(a, l, u) {
      const c = ie(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = f.findKey(r, c);
      (!p || r[p] === void 0 || u === !0 || u === void 0 && r[p] !== !1) && (r[p || l] = Se(a));
    }
    const o = (a, l) => f.forEach(a, (u, c) => i(u, c, l));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (f.isString(e) && (e = e.trim()) && !us(e))
      o(as(e), t);
    else if (f.isObject(e) && f.isIterable(e)) {
      let a = {}, l, u;
      for (const c of e) {
        if (!f.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = c[0]] = (l = a[u]) ? f.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1];
      }
      o(a, t);
    } else
      e != null && i(t, e, s);
    return this;
  }
  get(e, t) {
    if (e = ie(e), e) {
      const s = f.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!t)
          return r;
        if (t === !0)
          return ls(r);
        if (f.isFunction(t))
          return t.call(this, r, s);
        if (f.isRegExp(t))
          return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = ie(e), e) {
      const s = f.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || Fe(this, this[s], s, t)));
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = ie(o), o) {
        const a = f.findKey(s, o);
        a && (!t || Fe(s, s[a], a, t)) && (delete s[a], r = !0);
      }
    }
    return f.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    const t = Object.keys(this);
    let s = t.length, r = !1;
    for (; s--; ) {
      const i = t[s];
      (!e || Fe(this, this[i], i, e, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(e) {
    const t = this, s = {};
    return f.forEach(this, (r, i) => {
      const o = f.findKey(s, i);
      if (o) {
        t[o] = Se(r), delete t[i];
        return;
      }
      const a = e ? cs(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Se(r), s[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (s, r) => {
      s != null && s !== !1 && (t[r] = e && f.isArray(s) ? s.join(", ") : s);
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
  static accessor(e) {
    const s = (this[st] = this[st] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = ie(o);
      s[a] || (fs(r, o), s[a] = !0);
    }
    return f.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors($.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(s) {
      this[t] = s;
    }
  };
});
f.freezeMethods($);
function $e(n, e) {
  const t = this || de, s = e || t, r = $.from(s.headers);
  let i = s.data;
  return f.forEach(n, function(a) {
    i = a.call(t, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
function Mt(n) {
  return !!(n && n.__CANCEL__);
}
let he = class extends y {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, t, s) {
    super(e ?? "canceled", y.ERR_CANCELED, t, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Vt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new y(
    "Request failed with status code " + t.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function ds(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function hs(n, e) {
  n = n || 10;
  const t = new Array(n), s = new Array(n);
  let r = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), c = s[i];
    o || (o = u), t[r] = l, s[r] = u;
    let p = i, d = 0;
    for (; p !== r; )
      d += t[p++], p = p % n;
    if (r = (r + 1) % n, r === i && (i = (i + 1) % n), u - o < e)
      return;
    const b = c && u - c;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}
function ps(n, e) {
  let t = 0, s = 1e3 / e, r, i;
  const o = (u, c = Date.now()) => {
    t = c, r = null, i && (clearTimeout(i), i = null), n(...u);
  };
  return [(...u) => {
    const c = Date.now(), p = c - t;
    p >= s ? o(u, c) : (r = u, i || (i = setTimeout(() => {
      i = null, o(r);
    }, s - p)));
  }, () => r && o(r)];
}
const xe = (n, e, t = 3) => {
  let s = 0;
  const r = hs(50, 250);
  return ps((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, l = o - s, u = r(l), c = o <= a;
    s = o;
    const p = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - o) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    n(p);
  }, t);
}, rt = (n, e) => {
  const t = n != null;
  return [(s) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: s
  }), e[1]];
}, it = (n) => (...e) => f.asap(() => n(...e)), gs = v.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, v.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(v.origin),
  v.navigator && /(msie|trident)/i.test(v.navigator.userAgent)
) : () => !0, ms = v.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, s, r, i, o) {
      if (typeof document > "u") return;
      const a = [`${n}=${encodeURIComponent(e)}`];
      f.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), f.isString(s) && a.push(`path=${s}`), f.isString(r) && a.push(`domain=${r}`), i === !0 && a.push("secure"), f.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
    },
    read(n) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5, "/");
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
function bs(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function ys(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Kt(n, e, t) {
  let s = !bs(e);
  return n && (s || t == !1) ? ys(n, e) : e;
}
const ot = (n) => n instanceof $ ? { ...n } : n;
function G(n, e) {
  e = e || {};
  const t = {};
  function s(u, c, p, d) {
    return f.isPlainObject(u) && f.isPlainObject(c) ? f.merge.call({ caseless: d }, u, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function r(u, c, p, d) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(u))
        return s(void 0, u, p, d);
    } else return s(u, c, p, d);
  }
  function i(u, c) {
    if (!f.isUndefined(c))
      return s(void 0, c);
  }
  function o(u, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, c);
  }
  function a(u, c, p) {
    if (p in e)
      return s(u, c);
    if (p in n)
      return s(void 0, u);
  }
  const l = {
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
    headers: (u, c, p) => r(ot(u), ot(c), p, !0)
  };
  return f.forEach(Object.keys({ ...n, ...e }), function(c) {
    const p = l[c] || r, d = p(n[c], e[c], c);
    f.isUndefined(d) && p !== a || (t[c] = d);
  }), t;
}
const qt = (n) => {
  const e = G({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = $.from(o), e.url = jt(Kt(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), f.isFormData(t)) {
    if (v.hasStandardBrowserEnv || v.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (f.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([c, p]) => {
        u.includes(c.toLowerCase()) && o.set(c, p);
      });
    }
  }
  if (v.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(e)), s || s !== !1 && gs(e.url))) {
    const l = r && i && ms.read(i);
    l && o.set(r, l);
  }
  return e;
}, Ss = typeof XMLHttpRequest < "u", ws = Ss && function(n) {
  return new Promise(function(t, s) {
    const r = qt(n);
    let i = r.data;
    const o = $.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = r, c, p, d, b, h;
    function m() {
      b && b(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function x() {
      if (!g)
        return;
      const C = $.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: C,
        config: n,
        request: g
      };
      Vt(function(O) {
        t(O), m();
      }, function(O) {
        s(O), m();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = x : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, g.onabort = function() {
      g && (s(new y("Request aborted", y.ECONNABORTED, n, g)), g = null);
    }, g.onerror = function(w) {
      const E = w && w.message ? w.message : "Network Error", P = new y(E, y.ERR_NETWORK, n, g);
      P.event = w || null, s(P), g = null;
    }, g.ontimeout = function() {
      let w = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const E = r.transitional || Bt;
      r.timeoutErrorMessage && (w = r.timeoutErrorMessage), s(new y(
        w,
        E.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        n,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && f.forEach(o.toJSON(), function(w, E) {
      g.setRequestHeader(E, w);
    }), f.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), u && ([d, h] = xe(u, !0), g.addEventListener("progress", d)), l && g.upload && ([p, b] = xe(l), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (c = (C) => {
      g && (s(!C || C.type ? new he(null, n, g) : C), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const R = ds(r.url);
    if (R && v.protocols.indexOf(R) === -1) {
      s(new y("Unsupported protocol " + R + ":", y.ERR_BAD_REQUEST, n));
      return;
    }
    g.send(i || null);
  });
}, xs = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, a();
        const c = u instanceof Error ? u : this.reason;
        s.abort(c instanceof y ? c : new he(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new y(`timeout of ${e}ms exceeded`, y.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = s;
    return l.unsubscribe = () => f.asap(a), l;
  }
}, Rs = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let s = 0, r;
  for (; s < t; )
    r = s + e, yield n.slice(s, r), s = r;
}, Os = async function* (n, e) {
  for await (const t of Es(n))
    yield* Rs(t, e);
}, Es = async function* (n) {
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
}, at = (n, e, t, s) => {
  const r = Os(n, e);
  let i = 0, o, a = (l) => {
    o || (o = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await r.next();
        if (u) {
          a(), l.close();
          return;
        }
        let p = c.byteLength;
        if (t) {
          let d = i += p;
          t(d);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, lt = 64 * 1024, { isFunction: ge } = f, Cs = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(f.global), {
  ReadableStream: ut,
  TextEncoder: ct
} = f.global, ft = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Ls = (n) => {
  n = f.merge.call({
    skipUndefined: !0
  }, Cs, n);
  const { fetch: e, Request: t, Response: s } = n, r = e ? ge(e) : typeof fetch == "function", i = ge(t), o = ge(s);
  if (!r)
    return !1;
  const a = r && ge(ut), l = r && (typeof ct == "function" ? /* @__PURE__ */ ((h) => (m) => h.encode(m))(new ct()) : async (h) => new Uint8Array(await new t(h).arrayBuffer())), u = i && a && ft(() => {
    let h = !1;
    const m = new t(v.origin, {
      body: new ut(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !m;
  }), c = o && a && ft(() => f.isReadableStream(new s("").body)), p = {
    stream: c && ((h) => h.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (m, g) => {
      let x = m && m[h];
      if (x)
        return x.call(m);
      throw new y(`Response type '${h}' is not supported`, y.ERR_NOT_SUPPORT, g);
    });
  });
  const d = async (h) => {
    if (h == null)
      return 0;
    if (f.isBlob(h))
      return h.size;
    if (f.isSpecCompliantForm(h))
      return (await new t(v.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(h) || f.isArrayBuffer(h))
      return h.byteLength;
    if (f.isURLSearchParams(h) && (h = h + ""), f.isString(h))
      return (await l(h)).byteLength;
  }, b = async (h, m) => {
    const g = f.toFiniteNumber(h.getContentLength());
    return g ?? d(m);
  };
  return async (h) => {
    let {
      url: m,
      method: g,
      data: x,
      signal: R,
      cancelToken: C,
      timeout: w,
      onDownloadProgress: E,
      onUploadProgress: P,
      responseType: O,
      headers: H,
      withCredentials: X = "same-origin",
      fetchOptions: ne
    } = qt(h), M = e || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let se = xs([R, C && C.toAbortSignal()], w), K = null;
    const D = se && se.unsubscribe && (() => {
      se.unsubscribe();
    });
    let V;
    try {
      if (P && u && g !== "get" && g !== "head" && (V = await b(H, x)) !== 0) {
        let I = new t(m, {
          method: "POST",
          body: x,
          duplex: "half"
        }), Q;
        if (f.isFormData(x) && (Q = I.headers.get("content-type")) && H.setContentType(Q), I.body) {
          const [ke, pe] = rt(
            V,
            xe(it(P))
          );
          x = at(I.body, lt, ke, pe);
        }
      }
      f.isString(X) || (X = X ? "include" : "omit");
      const k = i && "credentials" in t.prototype, re = {
        ...ne,
        signal: se,
        method: g.toUpperCase(),
        headers: H.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: k ? X : void 0
      };
      K = i && new t(m, re);
      let L = await (i ? M(K, ne) : M(m, re));
      const _ = c && (O === "stream" || O === "response");
      if (c && (E || _ && D)) {
        const I = {};
        ["status", "statusText", "headers"].forEach((Xe) => {
          I[Xe] = L[Xe];
        });
        const Q = f.toFiniteNumber(L.headers.get("content-length")), [ke, pe] = E && rt(
          Q,
          xe(it(E), !0)
        ) || [];
        L = new s(
          at(L.body, lt, ke, () => {
            pe && pe(), D && D();
          }),
          I
        );
      }
      O = O || "text";
      let q = await p[f.findKey(p, O) || "text"](L, h);
      return !_ && D && D(), await new Promise((I, Q) => {
        Vt(I, Q, {
          data: q,
          headers: $.from(L.headers),
          status: L.status,
          statusText: L.statusText,
          config: h,
          request: K
        });
      });
    } catch (k) {
      throw D && D(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
        new y("Network Error", y.ERR_NETWORK, h, K),
        {
          cause: k.cause || k
        }
      ) : y.from(k, k && k.code, h, K);
    }
  };
}, Ns = /* @__PURE__ */ new Map(), zt = (n) => {
  let e = n && n.env || {};
  const { fetch: t, Request: s, Response: r } = e, i = [
    s,
    r,
    t
  ];
  let o = i.length, a = o, l, u, c = Ns;
  for (; a--; )
    l = i[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : Ls(e)), c = u;
  return u;
};
zt();
const We = {
  http: Kn,
  xhr: ws,
  fetch: {
    get: zt
  }
};
f.forEach(We, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const dt = (n) => `- ${n}`, Ts = (n) => f.isFunction(n) || n === null || n === !1;
function Ps(n, e) {
  n = f.isArray(n) ? n : [n];
  const { length: t } = n;
  let s, r;
  const i = {};
  for (let o = 0; o < t; o++) {
    s = n[o];
    let a;
    if (r = s, !Ts(s) && (r = We[(a = String(s)).toLowerCase()], r === void 0))
      throw new y(`Unknown adapter '${a}'`);
    if (r && (f.isFunction(r) || (r = r.get(e))))
      break;
    i[a || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(i).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(dt).join(`
`) : " " + dt(o[0]) : "as no adapter specified";
    throw new y(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Jt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ps,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: We
};
function De(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new he(null, n);
}
function ht(n) {
  return De(n), n.headers = $.from(n.headers), n.data = $e.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Jt.getAdapter(n.adapter || de.adapter, n)(n).then(function(s) {
    return De(n), s.data = $e.call(
      n,
      n.transformResponse,
      s
    ), s.headers = $.from(s.headers), s;
  }, function(s) {
    return Mt(s) || (De(n), s && s.response && (s.response.data = $e.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = $.from(s.response.headers))), Promise.reject(s);
  });
}
const Wt = "1.13.4", Ae = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Ae[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const pt = {};
Ae.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + Wt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new y(
        r(o, " has been removed" + (t ? " in " + t : "")),
        y.ERR_DEPRECATED
      );
    return t && !pt[o] && (pt[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
Ae.spelling = function(e) {
  return (t, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function As(n, e, t) {
  if (typeof n != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
    if (o) {
      const a = n[i], l = a === void 0 || o(a, i, n);
      if (l !== !0)
        throw new y("option " + i + " must be " + l, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const we = {
  assertOptions: As,
  validators: Ae
}, j = we.validators;
let J = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new nt(),
      response: new nt()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = G(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && we.assertOptions(s, {
      silentJSONParsing: j.transitional(j.boolean),
      forcedJSONParsing: j.transitional(j.boolean),
      clarifyTimeoutError: j.transitional(j.boolean)
    }, !1), r != null && (f.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : we.assertOptions(r, {
      encode: j.function,
      serialize: j.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), we.assertOptions(t, {
      baseUrl: j.spelling("baseURL"),
      withXsrfToken: j.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && f.merge(
      i.common,
      i[t.method]
    );
    i && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), t.headers = $.concat(o, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, p = 0, d;
    if (!l) {
      const h = [ht.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), d = h.length, c = Promise.resolve(t); p < d; )
        c = c.then(h[p++], h[p++]);
      return c;
    }
    d = a.length;
    let b = t;
    for (; p < d; ) {
      const h = a[p++], m = a[p++];
      try {
        b = h(b);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = ht.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, d = u.length; p < d; )
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(e) {
    e = G(this.defaults, e);
    const t = Kt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return jt(t, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  J.prototype[e] = function(t, s) {
    return this.request(G(s || {}, {
      method: e,
      url: t,
      data: (s || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function t(s) {
    return function(i, o, a) {
      return this.request(G(a || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  J.prototype[e] = t(), J.prototype[e + "Form"] = t(!0);
});
let vs = class Gt {
  constructor(e) {
    if (typeof e != "function")
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
      s.reason || (s.reason = new he(i, o, a), t(s.reason));
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
      token: new Gt(function(r) {
        e = r;
      }),
      cancel: e
    };
  }
};
function ks(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function Fs(n) {
  return f.isObject(n) && n.isAxiosError === !0;
}
const Ve = {
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
Object.entries(Ve).forEach(([n, e]) => {
  Ve[e] = n;
});
function Xt(n) {
  const e = new J(n), t = Tt(J.prototype.request, e);
  return f.extend(t, J.prototype, e, { allOwnKeys: !0 }), f.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return Xt(G(n, r));
  }, t;
}
const N = Xt(de);
N.Axios = J;
N.CanceledError = he;
N.CancelToken = vs;
N.isCancel = Mt;
N.VERSION = Wt;
N.toFormData = Pe;
N.AxiosError = y;
N.Cancel = N.CanceledError;
N.all = function(e) {
  return Promise.all(e);
};
N.spread = ks;
N.isAxiosError = Fs;
N.mergeConfig = G;
N.AxiosHeaders = $;
N.formToJSON = (n) => Ht(f.isHTMLForm(n) ? new FormData(n) : n);
N.getAdapter = Jt.getAdapter;
N.HttpStatusCode = Ve;
N.default = N;
const {
  Axios: Ur,
  AxiosError: _r,
  CanceledError: jr,
  isCancel: Br,
  CancelToken: Hr,
  VERSION: Mr,
  all: Vr,
  Cancel: Kr,
  isAxiosError: qr,
  spread: zr,
  toFormData: Jr,
  AxiosHeaders: Wr,
  HttpStatusCode: Gr,
  formToJSON: Xr,
  getAdapter: Qr,
  mergeConfig: Yr
} = N, Ge = N.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Ge.interceptors.request.use((n) => n);
Ge.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const $s = (n) => {
  const [e, t] = be(null), [s, r] = be(null), [i, o] = be(!1), { url: a, method: l, data: u, mock: c, auto: p = !0 } = n, d = c ? (h) => sn(h.url, h.method, h.data) : (h) => Ge(h), b = async () => {
    o(!0);
    try {
      console.log("API request:", a, l, u);
      const h = await d({ url: a, method: l, data: u, ...l === "GET" ? { params: u } : { data: u } });
      console.log("API response: status", h.data ? "ok" : "error"), t(h.data), r(null);
    } catch (h) {
      console.error("API request error:", h), r(h?.message ? h : null), t(null);
    } finally {
      o(!1);
    }
  };
  return Nt(() => {
    p && b();
  }, [p]), {
    response: {
      data: e,
      error: s,
      status: i ? "pending" : s ? "error" : "success"
    },
    refetch: b
  };
}, Zr = ({ tableName: n }) => {
  const e = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${n}`, { response: t, refetch: s } = $s({ url: e, method: "GET" });
  return {
    response: t,
    refetch: s
  };
}, ei = ({ fields: n }) => /* @__PURE__ */ T("div", { className: "fields-grid", children: n.map((e, t) => /* @__PURE__ */ W("div", { className: "field-item", children: [
  /* @__PURE__ */ T("p", { className: "field-label", children: e.label }),
  /* @__PURE__ */ T("p", { className: `field-value strong ${e.statusColor}`, children: e.value })
] }, t)) }), Ds = "link-module__link___W6noI", Is = {
  link: Ds
}, Us = ({ text: n, onClick: e }) => /* @__PURE__ */ T("h2", { className: Is.link, onClick: e, children: n }), ti = ({ children: n }) => /* @__PURE__ */ T(
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
), _s = "title-module__titleContainer___wZFgq", js = "title-module__title___wc-C2", Bs = "title-module__subTitle___uy5--", Ie = {
  titleContainer: _s,
  title: js,
  subTitle: Bs
}, Hs = ({ title: n, subTitle: e }) => /* @__PURE__ */ W("div", { className: Ie.titleContainer, children: [
  /* @__PURE__ */ T("h1", { className: Ie.title, children: n }),
  e !== "" ? /* @__PURE__ */ T("h2", { className: Ie.subTitle, children: e }) : null
] }), Ms = "SearchContainer-module__searchContainer___DJ7jd", Vs = "SearchContainer-module__searchContent___xBTu-", gt = {
  searchContainer: Ms,
  searchContent: Vs
}, S = (n) => typeof n == "string", oe = () => {
  let n, e;
  const t = new Promise((s, r) => {
    n = s, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}, mt = (n) => n == null ? "" : "" + n, Ks = (n, e, t) => {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, qs = /###/g, bt = (n) => n && n.indexOf("###") > -1 ? n.replace(qs, ".") : n, yt = (n) => !n || S(n), ae = (n, e, t) => {
  const s = S(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (yt(n)) return {};
    const i = bt(s[r]);
    !n[i] && t && (n[i] = new t()), Object.prototype.hasOwnProperty.call(n, i) ? n = n[i] : n = {}, ++r;
  }
  return yt(n) ? {} : {
    obj: n,
    k: bt(s[r])
  };
}, St = (n, e, t) => {
  const {
    obj: s,
    k: r
  } = ae(n, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[r] = t;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), a = ae(n, o, Object);
  for (; a.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = ae(n, o, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = t;
}, zs = (n, e, t, s) => {
  const {
    obj: r,
    k: i
  } = ae(n, e, Object);
  r[i] = r[i] || [], r[i].push(t);
}, Re = (n, e) => {
  const {
    obj: t,
    k: s
  } = ae(n, e);
  if (t)
    return t[s];
}, Js = (n, e, t) => {
  const s = Re(n, t);
  return s !== void 0 ? s : Re(e, t);
}, Qt = (n, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? S(n[s]) || n[s] instanceof String || S(e[s]) || e[s] instanceof String ? t && (n[s] = e[s]) : Qt(n[s], e[s], t) : n[s] = e[s]);
  return n;
}, Y = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Ws = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Gs = (n) => S(n) ? n.replace(/[&<>"'\/]/g, (e) => Ws[e]) : n;
class Xs {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const Qs = [" ", ",", "?", "!", ";"], Ys = new Xs(20), Zs = (n, e, t) => {
  e = e || "", t = t || "";
  const s = Qs.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = Ys.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(n);
  if (!i) {
    const o = n.indexOf(t);
    o > 0 && !r.test(n.substring(0, o)) && (i = !0);
  }
  return i;
}, Ke = function(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[e]) return n[e];
  const s = e.split(t);
  let r = n;
  for (let i = 0; i < s.length; ) {
    if (!r || typeof r != "object")
      return;
    let o, a = "";
    for (let l = i; l < s.length; ++l)
      if (l !== i && (a += t), a += s[l], o = r[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < s.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    r = o;
  }
  return r;
}, Oe = (n) => n && n.replace("_", "-"), er = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    console && console[n] && console[n].apply(console, e);
  }
};
class Ee {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || er, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, r) {
    return r && !this.debug ? null : (S(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Ee(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ee(this.logger, e);
  }
}
var B = new Ee();
class ve {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const r = this.observers[s].get(t) || 0;
      this.observers[s].set(t, r + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      s[r - 1] = arguments[r];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a.apply(a, [e, ...s]);
    });
  }
}
class wt extends ve {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, o = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], s && (Array.isArray(s) ? a.push(...s) : S(s) && i ? a.push(...s.split(i)) : a.push(s)));
    const l = Re(this.data, a);
    return !l && !t && !s && e.indexOf(".") > -1 && (e = a[0], t = a[1], s = a.slice(2).join(".")), l || !o || !S(s) ? l : Ke(this.data && this.data[e] && this.data[e][t], s, i);
  }
  addResource(e, t, s, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, t];
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), St(this.data, a, r), i.silent || this.emit("added", e, t, s, r);
  }
  addResources(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (S(s[i]) || Array.isArray(s[i])) && this.addResource(e, t, i, s[i], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, r, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), r = s, s = t, t = a[1]), this.addNamespaces(t);
    let l = Re(this.data, a) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? Qt(l, s, i) : l = {
      ...l,
      ...s
    }, St(this.data, a, l), o.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, t)
    } : this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((r) => t[r] && Object.keys(t[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Yt = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, r) {
    return n.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, t, s, r));
    }), e;
  }
};
const xt = {};
class Ce extends ve {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ks(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = B.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const s = this.resolve(e, t);
    return s && s.res !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Zs(e, s, r);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: S(i) ? [i] : i
        };
      const u = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(r);
    }
    return {
      key: e,
      namespaces: S(i) ? [i] : i
    };
  }
  translate(e, t, s) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const r = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], t), l = a[a.length - 1], u = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${l}${w}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${w}${o}`;
      }
      return r ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : o;
    }
    const p = this.resolve(e, t);
    let d = p && p.res;
    const b = p && p.usedKey || o, h = p && p.exactUsedKey || o, m = Object.prototype.toString.apply(d), g = ["[object Number]", "[object Function]", "[object RegExp]"], x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, R = !this.i18nFormat || this.i18nFormat.handleAsObject, C = !S(d) && typeof d != "boolean" && typeof d != "number";
    if (R && d && C && g.indexOf(m) < 0 && !(S(x) && Array.isArray(d))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, d, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return r ? (p.res = w, p.usedParams = this.getUsedParamsDetails(t), p) : w;
      }
      if (i) {
        const w = Array.isArray(d), E = w ? [] : {}, P = w ? h : b;
        for (const O in d)
          if (Object.prototype.hasOwnProperty.call(d, O)) {
            const H = `${P}${i}${O}`;
            E[O] = this.translate(H, {
              ...t,
              joinArrays: !1,
              ns: a
            }), E[O] === H && (E[O] = d[O]);
          }
        d = E;
      }
    } else if (R && S(x) && Array.isArray(d))
      d = d.join(x), d && (d = this.extendTranslation(d, e, t, s));
    else {
      let w = !1, E = !1;
      const P = t.count !== void 0 && !S(t.count), O = Ce.hasDefaultValue(t), H = P ? this.pluralResolver.getSuffix(u, t.count, t) : "", X = t.ordinal && P ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", ne = P && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), M = ne && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${H}`] || t[`defaultValue${X}`] || t.defaultValue;
      !this.isValidLookup(d) && O && (w = !0, d = M), this.isValidLookup(d) || (E = !0, d = o);
      const K = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : d, D = O && M !== d && this.options.updateMissing;
      if (E || w || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", u, l, o, D ? M : d), i) {
          const L = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let V = [];
        const k = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && k && k[0])
          for (let L = 0; L < k.length; L++)
            V.push(k[L]);
        else this.options.saveMissingTo === "all" ? V = this.languageUtils.toResolveHierarchy(t.lng || this.language) : V.push(t.lng || this.language);
        const re = (L, _, q) => {
          const I = O && q !== d ? q : K;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, _, I, D, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, l, _, I, D, t), this.emit("missingKey", L, l, _, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && P ? V.forEach((L) => {
          const _ = this.pluralResolver.getSuffixes(L, t);
          ne && t[`defaultValue${this.options.pluralSeparator}zero`] && _.indexOf(`${this.options.pluralSeparator}zero`) < 0 && _.push(`${this.options.pluralSeparator}zero`), _.forEach((q) => {
            re([L], o + q, t[`defaultValue${q}`] || M);
          });
        }) : re(V, o, M));
      }
      d = this.extendTranslation(d, e, t, p, s), E && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`), (E || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return r ? (p.res = d, p.usedParams = this.getUsedParamsDetails(t), p) : d;
  }
  extendTranslation(e, t, s, r, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const u = S(e) && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = e.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let p = s.replace && !S(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, s.lng || this.language || r.usedLng, s), u) {
        const d = e.match(this.interpolator.nestingRegexp), b = d && d.length;
        c < b && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var d = arguments.length, b = new Array(d), h = 0; h < d; h++)
          b[h] = arguments[h];
        return i && i[0] === b[0] && !s.context ? (o.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${t[0]}`), null) : o.translate(...b, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = S(a) ? [a] : a;
    return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = Yt.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, r, i, o, a;
    return S(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      r = c;
      let p = u.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && !S(t.count), b = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = t.context !== void 0 && (S(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((g) => {
        this.isValidLookup(s) || (a = g, !xt[`${m[0]}-${g}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (xt[`${m[0]}-${g}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((x) => {
          if (this.isValidLookup(s)) return;
          o = x;
          const R = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(R, c, x, g, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(x, t.count, t));
            const E = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (R.push(c + w), t.ordinal && w.indexOf(P) === 0 && R.push(c + w.replace(P, this.options.pluralSeparator)), b && R.push(c + E)), h) {
              const O = `${c}${this.options.contextSeparator}${t.context}`;
              R.push(O), d && (R.push(O + w), t.ordinal && w.indexOf(P) === 0 && R.push(O + w.replace(P, this.options.pluralSeparator)), b && R.push(O + E));
            }
          }
          let C;
          for (; C = R.pop(); )
            this.isValidLookup(s) || (i = C, s = this.getResource(x, g, C, t));
        }));
      });
    }), {
      res: s,
      usedKey: r,
      exactUsedKey: i,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, s, r) : this.resourceStore.getResource(e, t, s, r);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !S(e.replace);
    let r = s ? e.replace : e;
    if (s && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !s) {
      r = {
        ...r
      };
      for (const i of t)
        delete r[i];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
const Ue = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class Rt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = B.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Oe(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Oe(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (S(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let r = Intl.getCanonicalLocales(e)[0];
          if (r && this.options.lowerCaseLng && (r = r.toLowerCase()), r) return r;
        } catch {
        }
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return this.options.lowerCaseLng ? s = s.map((r) => r.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ue(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ue(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = Ue(s[2].toLowerCase()))), s.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const r = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const r = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(r)) return t = r;
      t = this.options.supportedLngs.find((i) => {
        if (i === r) return i;
        if (!(i.indexOf("-") < 0 && r.indexOf("-") < 0) && (i.indexOf("-") > 0 && r.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === r || i.indexOf(r) === 0 && r.length > 1))
          return i;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), S(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), r = [], i = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return S(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : S(e) && i(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), r;
  }
}
let tr = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], nr = {
  1: (n) => +(n > 1),
  2: (n) => +(n != 1),
  3: (n) => 0,
  4: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  5: (n) => n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5,
  6: (n) => n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2,
  7: (n) => n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  8: (n) => n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3,
  9: (n) => +(n >= 2),
  10: (n) => n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4,
  11: (n) => n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3,
  12: (n) => +(n % 10 != 1 || n % 100 == 11),
  13: (n) => +(n !== 0),
  14: (n) => n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3,
  15: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  16: (n) => n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2,
  17: (n) => n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1,
  18: (n) => n == 0 ? 0 : n == 1 ? 1 : 2,
  19: (n) => n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3,
  20: (n) => n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2,
  21: (n) => n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0,
  22: (n) => n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3
};
const sr = ["v1", "v2", "v3"], rr = ["v4"], Ot = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ir = () => {
  const n = {};
  return tr.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: nr[e.fc]
      };
    });
  }), n;
};
class or {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = B.create("pluralResolver"), (!this.options.compatibilityJSON || rr.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = ir(), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const s = Oe(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
        cleanedCode: s,
        type: r
      });
      if (i in this.pluralRulesCache)
        return this.pluralRulesCache[i];
      let o;
      try {
        o = new Intl.PluralRules(s, {
          type: r
        });
      } catch {
        if (!e.match(/-|_/)) return;
        const l = this.languageUtils.getLanguagePartFromCode(e);
        o = this.getRule(l, t);
      }
      return this.pluralRulesCache[i] = o, o;
    }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((r) => `${t}${r}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((r, i) => Ot[r] - Ot[i]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : s.numbers.map((r) => this.getSuffix(e, r, t)) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(e, s);
    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let r = e.numbers[s];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (r === 2 ? r = "plural" : r === 1 && (r = ""));
    const i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
    return this.options.compatibilityJSON === "v1" ? r === 1 ? "" : typeof r == "number" ? `_plural_${r.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !sr.includes(this.options.compatibilityJSON);
  }
}
const Et = function(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Js(n, e, t);
  return !i && r && S(t) && (i = Ke(n, t, s), i === void 0 && (i = Ke(e, t, s))), i;
}, _e = (n) => n.replace(/\$/g, "$$$$");
class ar {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = B.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: r,
      prefix: i,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: p,
      nestingPrefix: d,
      nestingPrefixEscaped: b,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: x,
      alwaysFormat: R
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Gs, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = i ? Y(i) : o || "{{", this.suffix = a ? Y(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = d ? Y(d) : b || Y("$t("), this.nestingSuffix = h ? Y(h) : m || Y(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = R !== void 0 ? R : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t && t.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, r) {
    let i, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (b) => {
      if (b.indexOf(this.formatSeparator) < 0) {
        const x = Et(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, s, {
          ...r,
          ...t,
          interpolationkey: b
        }) : x;
      }
      const h = b.split(this.formatSeparator), m = h.shift().trim(), g = h.join(this.formatSeparator).trim();
      return this.format(Et(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), g, s, {
        ...r,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, p = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (b) => _e(b)
    }, {
      regex: this.regexp,
      safeValue: (b) => this.escapeValue ? _e(this.escape(b)) : _e(b)
    }].forEach((b) => {
      for (a = 0; i = b.regex.exec(e); ) {
        const h = i[1].trim();
        if (o = u(h), o === void 0)
          if (typeof c == "function") {
            const g = c(e, i, r);
            o = S(g) ? g : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, h))
            o = "";
          else if (p) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), o = "";
        else !S(o) && !this.useRawValueToEscape && (o = mt(o));
        const m = b.safeValue(o);
        if (e = e.replace(i[0], m), p ? (b.regex.lastIndex += o.length, b.regex.lastIndex -= i[0].length) : b.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, i, o;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const p = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${p[1]}`;
      l = p[0], d = this.interpolate(d, o);
      const b = d.match(/'/g), h = d.match(/"/g);
      (b && b.length % 2 === 0 && !h || h.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        o = JSON.parse(d), u && (o = {
          ...u,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${c}${d}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...s
      }, o = o.replace && !S(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((p) => p.trim());
        r[1] = c.shift(), l = c, u = !0;
      }
      if (i = t(a.call(this, r[1].trim(), o), o), i && r[0] === e && !S(i)) return i;
      S(i) || (i = mt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), u && (i = l.reduce((c, p) => this.format(c, p, s.lng, {
        ...s,
        interpolationkey: r[1].trim()
      }), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const lr = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const s = n.split("(");
    e = s[0].toLowerCase().trim();
    const r = s[1].substring(0, s[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Z = (n) => {
  const e = {};
  return (t, s, r) => {
    let i = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (i = {
      ...i,
      [r.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(i);
    let a = e[o];
    return a || (a = n(Oe(s), r), e[o] = a), a(t);
  };
};
class ur {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = B.create("formatter"), this.options = e, this.formats = {
      number: Z((t, s) => {
        const r = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
      currency: Z((t, s) => {
        const r = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => r.format(i);
      }),
      datetime: Z((t, s) => {
        const r = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
      relativetime: Z((t, s) => {
        const r = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i, s.range || "day");
      }),
      list: Z((t, s) => {
        const r = new Intl.ListFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Z(t);
  }
  format(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = t.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((a) => a.indexOf(")") > -1)) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = lr(l);
      if (this.formats[u]) {
        let p = a;
        try {
          const d = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, b = d.locale || d.lng || r.locale || r.lng || s;
          p = this.formats[u](a, b, {
            ...c,
            ...r,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const cr = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class fr extends ve {
  constructor(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = B.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, r.backend, r);
  }
  queueLoad(e, t, s, r) {
    const i = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((p) => {
        const d = `${u}|${p}`;
        !s.reload && this.store.hasResourceBundle(u, p) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? o[d] === void 0 && (o[d] = !0) : (this.state[d] = 1, c = !1, o[d] === void 0 && (o[d] = !0), i[d] === void 0 && (i[d] = !0), l[p] === void 0 && (l[p] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, s) {
    const r = e.split("|"), i = r[0], o = r[1];
    t && this.emit("failedLoading", i, o, t), !t && s && this.store.addResourceBundle(i, o, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      zs(l.loaded, [i], o), cr(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((p) => {
          a[u][p] === void 0 && (a[u][p] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: r,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (u && c && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, r + 1, i * 2, o);
        }, i);
        return;
      }
      o(u, c);
    }, l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    S(e) && (e = this.languageUtils.toResolveHierarchy(e)), S(t) && (t = [t]);
    const i = this.queueLoad(e, t, s, r);
    if (!i.toLoad.length)
      return i.pending.length || r(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"), r = s[0], i = s[1];
    this.read(r, i, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, s, r, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: i
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, s, r, l) : c = u(e, t, s, r), c && typeof c.then == "function" ? c.then((p) => a(null, p)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(e, t, s, r, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, r);
    }
  }
}
const Ct = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), S(n[1]) && (e.defaultValue = n[1]), S(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Lt = (n) => (S(n.ns) && (n.ns = [n.ns]), S(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), S(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n), me = () => {
}, dr = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class le extends ve {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Lt(e), this.services = {}, this.logger = B, this.modules = {
      external: []
    }, dr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (S(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = Ct();
    this.options = {
      ...r,
      ...this.options,
      ...Lt(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? B.init(i(this.modules.logger), this.options) : B.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = ur);
      const p = new Rt(this.options);
      this.store = new wt(this.options.resources, this.options);
      const d = this.services;
      d.logger = B, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new or(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = i(c), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new ar(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new fr(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(b, ...m);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Ce(this.services, this.options), this.translator.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(b, ...m);
      }), this.modules.external.forEach((b) => {
        b.init && b.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = me), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments), e;
      };
    });
    const l = oe(), u = () => {
      const c = (p, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), s(p, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : me;
    const r = S(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (r && r.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const i = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
        });
      };
      r ? o(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const r = oe();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = me), this.services.backendConnector.reload(e, t, (i) => {
      r.resolve(), s(i);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Yt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const r = oe();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, u) => {
      u ? (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
        return s.t(...arguments);
      }), t && t(l, function() {
        return s.t(...arguments);
      });
    }, a = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const u = S(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        o(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), r;
  }
  getFixedT(e, t, s) {
    var r = this;
    const i = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), p = 2; p < u; p++)
          c[p - 2] = arguments[p];
        l = r.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const d = r.options.keySeparator || ".";
      let b;
      return l.keyPrefix && Array.isArray(o) ? b = o.map((h) => `${l.keyPrefix}${d}${h}`) : b = l.keyPrefix ? `${l.keyPrefix}${d}${o}` : o, r.t(b, l);
    };
    return S(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!r || o(i, e)));
  }
  loadNamespaces(e, t) {
    const s = oe();
    return this.options.ns ? (S(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = oe();
    S(e) && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new Rt(Ct());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new le(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : me;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new le(r);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s && (i.store = new wt(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Ce(i.services, r), i.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      i.emit(a, ...u);
    }), i.init(r, t), i.translator.options = r, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const A = le.createInstance();
A.createInstance = le.createInstance;
A.createInstance;
A.dir;
A.init;
A.loadResources;
A.reloadResources;
A.use;
A.changeLanguage;
A.getFixedT;
A.t;
A.exists;
A.setDefaultNamespace;
A.hasLoadedNamespace;
A.loadNamespaces;
A.loadLanguages;
const hr = "Search", pr = "Clear", gr = {
  Search: hr,
  Clear: pr
}, mr = "חיפוש", br = "נקה", yr = "הסבר לשאילתה", Sr = {
  Search: mr,
  Clear: br,
  queryExplanation: yr
};
A.use(tn).init({
  interpolation: { escapeValue: !1 },
  fallbackLng: "en",
  lng: "he",
  resources: {
    en: {
      translations: gr
    },
    he: {
      translations: Sr
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
});
A.languages = ["en", "he"];
const Zt = () => nn(), wr = "SearchButtonsContainer-module__searchButtonsContainer___x8BG-", xr = {
  searchButtonsContainer: wr
}, Rr = (n) => {
  const { hasSearchButton: e = !0, hasClearButton: t = !0, isSearchDisabled: s, isClearDisabled: r, onSearch: i, onClear: o } = n, { t: a } = Zt();
  return /* @__PURE__ */ W("div", { className: xr.searchButtonsContainer, children: [
    e && /* @__PURE__ */ T(
      Qe,
      {
        label: "Search",
        icon: /* @__PURE__ */ T(Ye, { name: "search" }),
        onClick: i,
        disabled: s,
        children: a("Search")
      }
    ),
    t && /* @__PURE__ */ T(
      Qe,
      {
        label: "Clear",
        icon: /* @__PURE__ */ T(Ye, { name: "close" }),
        onClick: o,
        disabled: r,
        children: a("Clear")
      }
    )
  ] });
}, Or = (n) => {
  const { buttonsProps: e } = n;
  return /* @__PURE__ */ W("div", { className: gt.searchContainer, children: [
    /* @__PURE__ */ T("div", { className: gt.searchContent, children: n.children }),
    e && /* @__PURE__ */ T(Rr, { ...e })
  ] });
}, Er = "toastInfo-module__toastInfoLink___AqiYy", Cr = "toastInfo-module__toast___-oxAT", Lr = "toastInfo-module__toastText___VsPVH", je = {
  toastInfoLink: Er,
  toast: Cr,
  toastText: Lr
}, Nr = ({ infoTitle: n, infoContent: e }) => {
  const { t } = Zt(), [s, r] = be(!1);
  return /* @__PURE__ */ W("div", { className: je.toastInfoLink, children: [
    /* @__PURE__ */ T(Us, { onClick: () => r(!s), text: t("queryExplanation") }),
    s && /* @__PURE__ */ W(en, { className: je.toast, children: [
      n !== "" && /* @__PURE__ */ T("strong", { slot: "title", children: n }),
      /* @__PURE__ */ T("span", { className: je.toastText, children: e })
    ] })
  ] });
}, Tr = "MainSearchContainer-module__mainSearchContainer___99z-w", Pr = {
  mainSearchContainer: Tr
}, ni = (n) => {
  const { info: e, pageTitle: t, buttonsProps: s } = n;
  return /* @__PURE__ */ W("div", { className: Pr.mainSearchContainer, children: [
    /* @__PURE__ */ T(Hs, { title: t, subTitle: "" }),
    e?.infoContent && /* @__PURE__ */ T(Nr, { infoTitle: e.infoTitle, infoContent: e.infoContent }),
    n.children && /* @__PURE__ */ T(Or, { buttonsProps: s, children: n.children })
  ] });
}, si = (n) => (Nt(() => {
  if (document.querySelector("script[data-govil='true']")) {
    console.log("Header-Footer script already loaded");
    return;
  }
  const t = document.createElement("script");
  t.src = "https://www.gov.il/govilHF/header-footer.js", t.async = !0, t.dataset.govil = "true", document.body.appendChild(t);
  const s = setInterval(() => {
    typeof window.load_HF == "function" && (clearInterval(s), window.load_HF("he", "", "application", "c0d8ba69-e309-4fe5-801f-855971774a90"), console.log("Header-Footer loaded successfully"));
  }, 300);
  return () => {
    clearInterval(s);
  };
}, ["prod"]), /* @__PURE__ */ T("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
export {
  ti as Button,
  ei as FieldsGrid,
  Us as Link,
  ni as MainSearchContainer,
  si as RootLayout,
  Hs as Title,
  A as i18n,
  sn as mockApiRequest,
  $s as useApiRequest,
  Zr as useSystemTableApiRequest,
  Zt as useTranslation
};
