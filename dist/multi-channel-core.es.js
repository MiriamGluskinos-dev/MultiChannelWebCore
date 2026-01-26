import { useState as be, useEffect as At } from "react";
import { jsx as A, jsxs as ee } from "react/jsx-runtime";
import { Button as Ye, Icon as Ze, Toast as on } from "@igds/react";
import { initReactI18next as an, useTranslation as ln } from "react-i18next";
const cn = async (n, e, t) => new Promise((s) => {
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
function Ft(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: un } = Object.prototype, { getPrototypeOf: ze } = Object, { iterator: Le, toStringTag: kt } = Symbol, Te = /* @__PURE__ */ ((n) => (e) => {
  const t = un.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), M = (n) => (n = n.toLowerCase(), (e) => Te(e) === n), Pe = (n) => (e) => typeof e === n, { isArray: ne } = Array, te = Pe("undefined");
function ue(n) {
  return n !== null && !te(n) && n.constructor !== null && !te(n.constructor) && D(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const $t = M("ArrayBuffer");
function fn(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && $t(n.buffer), e;
}
const dn = Pe("string"), D = Pe("function"), vt = Pe("number"), fe = (n) => n !== null && typeof n == "object", hn = (n) => n === !0 || n === !1, Se = (n) => {
  if (Te(n) !== "object")
    return !1;
  const e = ze(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(kt in n) && !(Le in n);
}, pn = (n) => {
  if (!fe(n) || ue(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, gn = M("Date"), mn = M("File"), yn = M("Blob"), bn = M("FileList"), Sn = (n) => fe(n) && D(n.pipe), xn = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || D(n.append) && ((e = Te(n)) === "formdata" || // detect form-data instance
  e === "object" && D(n.toString) && n.toString() === "[object FormData]"));
}, wn = M("URLSearchParams"), [On, Rn, En, Cn] = ["ReadableStream", "Request", "Response", "Headers"].map(M), Ln = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function de(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
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
function _t(n, e) {
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
const W = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jt = (n) => !te(n) && n !== W;
function Be() {
  const { caseless: n, skipUndefined: e } = jt(this) && this || {}, t = {}, s = (r, i) => {
    const o = n && _t(t, i) || i;
    Se(t[o]) && Se(r) ? t[o] = Be(t[o], r) : Se(r) ? t[o] = Be({}, r) : ne(r) ? t[o] = r.slice() : (!e || !te(r)) && (t[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && de(arguments[r], s);
  return t;
}
const Tn = (n, e, t, { allOwnKeys: s } = {}) => (de(e, (r, i) => {
  t && D(r) ? n[i] = Ft(r, t) : n[i] = r;
}, { allOwnKeys: s }), n), Pn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Nn = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, An = (n, e, t, s) => {
  let r, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(n), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && ze(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, Fn = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, kn = (n) => {
  if (!n) return null;
  if (ne(n)) return n;
  let e = n.length;
  if (!vt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, $n = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && ze(Uint8Array)), vn = (n, e) => {
  const s = (n && n[Le]).call(n);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(n, i[0], i[1]);
  }
}, _n = (n, e) => {
  let t;
  const s = [];
  for (; (t = n.exec(e)) !== null; )
    s.push(t);
  return s;
}, jn = M("HTMLFormElement"), Dn = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, s, r) {
    return s.toUpperCase() + r;
  }
), et = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Un = M("RegExp"), Dt = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  de(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, In = (n) => {
  Dt(n, (e, t) => {
    if (D(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
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
  return ne(n) ? s(n) : s(String(n).split(e)), t;
}, Hn = () => {
}, Mn = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function Vn(n) {
  return !!(n && D(n.append) && n[kt] === "FormData" && n[Le]);
}
const Kn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (fe(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (ue(s))
        return s;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = ne(s) ? [] : {};
        return de(s, (o, a) => {
          const c = t(o, r + 1);
          !te(c) && (i[a] = c);
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return t(n, 0);
}, qn = M("AsyncFunction"), zn = (n) => n && (fe(n) || D(n)) && D(n.then) && D(n.catch), Ut = ((n, e) => n ? setImmediate : e ? ((t, s) => (W.addEventListener("message", ({ source: r, data: i }) => {
  r === W && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), W.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  D(W.postMessage)
), Jn = typeof queueMicrotask < "u" ? queueMicrotask.bind(W) : typeof process < "u" && process.nextTick || Ut, Wn = (n) => n != null && D(n[Le]), d = {
  isArray: ne,
  isArrayBuffer: $t,
  isBuffer: ue,
  isFormData: xn,
  isArrayBufferView: fn,
  isString: dn,
  isNumber: vt,
  isBoolean: hn,
  isObject: fe,
  isPlainObject: Se,
  isEmptyObject: pn,
  isReadableStream: On,
  isRequest: Rn,
  isResponse: En,
  isHeaders: Cn,
  isUndefined: te,
  isDate: gn,
  isFile: mn,
  isBlob: yn,
  isRegExp: Un,
  isFunction: D,
  isStream: Sn,
  isURLSearchParams: wn,
  isTypedArray: $n,
  isFileList: bn,
  forEach: de,
  merge: Be,
  extend: Tn,
  trim: Ln,
  stripBOM: Pn,
  inherits: Nn,
  toFlatObject: An,
  kindOf: Te,
  kindOfTest: M,
  endsWith: Fn,
  toArray: kn,
  forEachEntry: vn,
  matchAll: _n,
  isHTMLForm: jn,
  hasOwnProperty: et,
  hasOwnProp: et,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dt,
  freezeMethods: In,
  toObjectSet: Bn,
  toCamelCase: Dn,
  noop: Hn,
  toFiniteNumber: Mn,
  findKey: _t,
  global: W,
  isContextDefined: jt,
  isSpecCompliantForm: Vn,
  toJSONObject: Kn,
  isAsyncFn: qn,
  isThenable: zn,
  setImmediate: Ut,
  asap: Jn,
  isIterable: Wn
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
const It = S.prototype, Bt = {};
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
].forEach((n) => {
  Bt[n] = { value: n };
});
Object.defineProperties(S, Bt);
Object.defineProperty(It, "isAxiosError", { value: !0 });
S.from = (n, e, t, s, r, i) => {
  const o = Object.create(It);
  d.toFlatObject(n, o, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", c = e == null && n ? n.code : e;
  return S.call(o, a, c, t, s, r), n && o.cause == null && Object.defineProperty(o, "cause", { value: n, configurable: !0 }), o.name = n && n.name || "Error", i && Object.assign(o, i), o;
};
const Gn = null;
function He(n) {
  return d.isPlainObject(n) || d.isArray(n);
}
function Ht(n) {
  return d.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function tt(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = Ht(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
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
  function u(f, m, p) {
    let x = f;
    if (f && !p && typeof f == "object") {
      if (d.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (d.isArray(f) && Xn(f) || (d.isFileList(f) || d.endsWith(m, "[]")) && (x = d.toArray(f)))
        return m = Ht(m), x.forEach(function(R, O) {
          !(d.isUndefined(R) || R === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? tt([m], O, i) : o === null ? m : m + "[]",
            l(R)
          );
        }), !1;
    }
    return He(f) ? !0 : (e.append(tt(p, m, i), l(f)), !1);
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
function nt(n) {
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
function Je(n, e) {
  this._pairs = [], n && Ne(n, this, e);
}
const Mt = Je.prototype;
Mt.append = function(e, t) {
  this._pairs.push([e, t]);
};
Mt.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, nt);
  } : nt;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function Yn(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Vt(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || Yn;
  d.isFunction(t) && (t = {
    serialize: t
  });
  const r = t && t.serialize;
  let i;
  if (r ? i = r(e, t) : i = d.isURLSearchParams(e) ? e.toString() : new Je(e, t).toString(s), i) {
    const o = n.indexOf("#");
    o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
}
class st {
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
    d.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const Kt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Zn = typeof URLSearchParams < "u" ? URLSearchParams : Je, es = typeof FormData < "u" ? FormData : null, ts = typeof Blob < "u" ? Blob : null, ns = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Zn,
    FormData: es,
    Blob: ts
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, We = typeof window < "u" && typeof document < "u", Me = typeof navigator == "object" && navigator || void 0, ss = We && (!Me || ["ReactNative", "NativeScript", "NS"].indexOf(Me.product) < 0), rs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", is = We && window.location.href || "http://localhost", os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: We,
  hasStandardBrowserEnv: ss,
  hasStandardBrowserWebWorkerEnv: rs,
  navigator: Me,
  origin: is
}, Symbol.toStringTag, { value: "Module" })), k = {
  ...os,
  ...ns
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
function qt(n) {
  function e(t, s, r, i) {
    let o = t[i++];
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
const he = {
  transitional: Kt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = d.isObject(e);
    if (i && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
      return r ? JSON.stringify(qt(e)) : e;
    if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e) || d.isReadableStream(e))
      return e;
    if (d.isArrayBufferView(e))
      return e.buffer;
    if (d.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
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
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && fs[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, rt = /* @__PURE__ */ Symbol("internals");
function ie(n) {
  return n && String(n).trim().toLowerCase();
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
function gs(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function ms(n, e) {
  const t = d.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + t, {
      value: function(r, i, o) {
        return this[s].call(this, e, r, i, o);
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
      const a = e ? gs(i) : String(i).trim();
      a !== i && delete t[i], t[a] = xe(r), s[a] = !0;
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
  static accessor(e) {
    const s = (this[rt] = this[rt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = ie(o);
      s[a] || (ms(r, o), s[a] = !0);
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
function zt(n) {
  return !!(n && n.__CANCEL__);
}
function se(n, e, t) {
  S.call(this, n ?? "canceled", S.ERR_CANCELED, e, t), this.name = "CanceledError";
}
d.inherits(se, S, {
  __CANCEL__: !0
});
function Jt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new S(
    "Request failed with status code " + t.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function ys(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
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
    n(h);
  }, t);
}, it = (n, e) => {
  const t = n != null;
  return [(s) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: s
  }), e[1]];
}, ot = (n) => (...e) => d.asap(() => n(...e)), xs = k.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, k.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(k.origin),
  k.navigator && /(msie|trident)/i.test(k.navigator.userAgent)
) : () => !0, ws = k.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, s, r, i, o) {
      if (typeof document > "u") return;
      const a = [`${n}=${encodeURIComponent(e)}`];
      d.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), d.isString(s) && a.push(`path=${s}`), d.isString(r) && a.push(`domain=${r}`), i === !0 && a.push("secure"), d.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
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
function Os(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Rs(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Wt(n, e, t) {
  let s = !Os(e);
  return n && (s || t == !1) ? Rs(n, e) : e;
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
const Gt = (n) => {
  const e = X({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = U.from(o), e.url = Vt(Wt(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && o.set(
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
  return e;
}, Es = typeof XMLHttpRequest < "u", Cs = Es && function(n) {
  return new Promise(function(t, s) {
    const r = Gt(n);
    let i = r.data;
    const o = U.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = r, u, h, g, y, f;
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
      Jt(function(P) {
        t(P), m();
      }, function(P) {
        s(P), m();
      }, T), p = null;
    }
    "onloadend" in p ? p.onloadend = x : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, p.onabort = function() {
      p && (s(new S("Request aborted", S.ECONNABORTED, n, p)), p = null);
    }, p.onerror = function(O) {
      const T = O && O.message ? O.message : "Network Error", v = new S(T, S.ERR_NETWORK, n, p);
      v.event = O || null, s(v), p = null;
    }, p.ontimeout = function() {
      let O = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const T = r.transitional || Kt;
      r.timeoutErrorMessage && (O = r.timeoutErrorMessage), s(new S(
        O,
        T.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        n,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && d.forEach(o.toJSON(), function(O, T) {
      p.setRequestHeader(T, O);
    }), d.isUndefined(r.withCredentials) || (p.withCredentials = !!r.withCredentials), a && a !== "json" && (p.responseType = r.responseType), l && ([g, f] = Oe(l, !0), p.addEventListener("progress", g)), c && p.upload && ([h, y] = Oe(c), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", y)), (r.cancelToken || r.signal) && (u = (R) => {
      p && (s(!R || R.type ? new se(null, n, p) : R), p.abort(), p = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const w = ys(r.url);
    if (w && k.protocols.indexOf(w) === -1) {
      s(new S("Unsupported protocol " + w + ":", S.ERR_BAD_REQUEST, n));
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
}, lt = (n, e, t, s) => {
  const r = Ps(n, e);
  let i = 0, o, a = (c) => {
    o || (o = !0, s && s(c));
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
}, ct = 64 * 1024, { isFunction: me } = d, As = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(d.global), {
  ReadableStream: ut,
  TextEncoder: ft
} = d.global, dt = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Fs = (n) => {
  n = d.merge.call({
    skipUndefined: !0
  }, As, n);
  const { fetch: e, Request: t, Response: s } = n, r = e ? me(e) : typeof fetch == "function", i = me(t), o = me(s);
  if (!r)
    return !1;
  const a = r && me(ut), c = r && (typeof ft == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new ft()) : async (f) => new Uint8Array(await new t(f).arrayBuffer())), l = i && a && dt(() => {
    let f = !1;
    const m = new t(k.origin, {
      body: new ut(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), u = o && a && dt(() => d.isReadableStream(new s("").body)), h = {
    stream: u && ((f) => f.body)
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
      onDownloadProgress: T,
      onUploadProgress: v,
      responseType: P,
      headers: Q,
      withCredentials: I = "same-origin",
      fetchOptions: B
    } = Gt(f), pe = e || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let Y = Ls([w, R && R.toAbortSignal()], O), F = null;
    const N = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let re;
    try {
      if (v && l && p !== "get" && p !== "head" && (re = await y(Q, x)) !== 0) {
        let E = new t(m, {
          method: "POST",
          body: x,
          duplex: "half"
        }), j;
        if (d.isFormData(x) && (j = E.headers.get("content-type")) && Q.setContentType(j), E.body) {
          const [q, J] = it(
            re,
            Oe(ot(v))
          );
          x = lt(E.body, ct, q, J);
        }
      }
      d.isString(I) || (I = I ? "include" : "omit");
      const C = i && "credentials" in t.prototype, H = {
        ...B,
        signal: Y,
        method: p.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: C ? I : void 0
      };
      F = i && new t(m, H);
      let _ = await (i ? pe(F, B) : pe(m, H));
      const z = u && (P === "stream" || P === "response");
      if (u && (T || z && N)) {
        const E = {};
        ["status", "statusText", "headers"].forEach((Qe) => {
          E[Qe] = _[Qe];
        });
        const j = d.toFiniteNumber(_.headers.get("content-length")), [q, J] = T && it(
          j,
          Oe(ot(T), !0)
        ) || [];
        _ = new s(
          lt(_.body, ct, q, () => {
            J && J(), N && N();
          }),
          E
        );
      }
      P = P || "text";
      let ge = await h[d.findKey(h, P) || "text"](_, f);
      return !z && N && N(), await new Promise((E, j) => {
        Jt(E, j, {
          data: ge,
          headers: U.from(_.headers),
          status: _.status,
          statusText: _.statusText,
          config: f,
          request: F
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
}, ks = /* @__PURE__ */ new Map(), Xt = (n) => {
  let e = n && n.env || {};
  const { fetch: t, Request: s, Response: r } = e, i = [
    s,
    r,
    t
  ];
  let o = i.length, a = o, c, l, u = ks;
  for (; a--; )
    c = i[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : Fs(e)), u = l;
  return l;
};
Xt();
const Ge = {
  http: Gn,
  xhr: Cs,
  fetch: {
    get: Xt
  }
};
d.forEach(Ge, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const ht = (n) => `- ${n}`, $s = (n) => d.isFunction(n) || n === null || n === !1;
function vs(n, e) {
  n = d.isArray(n) ? n : [n];
  const { length: t } = n;
  let s, r;
  const i = {};
  for (let o = 0; o < t; o++) {
    s = n[o];
    let a;
    if (r = s, !$s(s) && (r = Ge[(a = String(s)).toLowerCase()], r === void 0))
      throw new S(`Unknown adapter '${a}'`);
    if (r && (d.isFunction(r) || (r = r.get(e))))
      break;
    i[a || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(i).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(ht).join(`
`) : " " + ht(o[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Qt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: vs,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ge
};
function ve(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new se(null, n);
}
function pt(n) {
  return ve(n), n.headers = U.from(n.headers), n.data = $e.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Qt.getAdapter(n.adapter || he.adapter, n)(n).then(function(s) {
    return ve(n), s.data = $e.call(
      n,
      n.transformResponse,
      s
    ), s.headers = U.from(s.headers), s;
  }, function(s) {
    return zt(s) || (ve(n), s && s.response && (s.response.data = $e.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = U.from(s.response.headers))), Promise.reject(s);
  });
}
const Yt = "1.13.2", Ae = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Ae[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const gt = {};
Ae.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + Yt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new S(
        r(o, " has been removed" + (t ? " in " + t : "")),
        S.ERR_DEPRECATED
      );
    return t && !gt[o] && (gt[o] = !0, console.warn(
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
function _s(n, e, t) {
  if (typeof n != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
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
const we = {
  assertOptions: _s,
  validators: Ae
}, V = we.validators;
let G = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new st(),
      response: new st()
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
    let u, h = 0, g;
    if (!c) {
      const f = [pt.bind(this), void 0];
      for (f.unshift(...a), f.push(...l), g = f.length, u = Promise.resolve(t); h < g; )
        u = u.then(f[h++], f[h++]);
      return u;
    }
    g = a.length;
    let y = t;
    for (; h < g; ) {
      const f = a[h++], m = a[h++];
      try {
        y = f(y);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      u = pt.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, g = l.length; h < g; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(e) {
    e = X(this.defaults, e);
    const t = Wt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Vt(t, e.params, e.paramsSerializer);
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
let js = class Zt {
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
function Ds(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function Us(n) {
  return d.isObject(n) && n.isAxiosError === !0;
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
function en(n) {
  const e = new G(n), t = Ft(G.prototype.request, e);
  return d.extend(t, G.prototype, e, { allOwnKeys: !0 }), d.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return en(X(n, r));
  }, t;
}
const L = en(he);
L.Axios = G;
L.CanceledError = se;
L.CancelToken = js;
L.isCancel = zt;
L.VERSION = Yt;
L.toFormData = Ne;
L.AxiosError = S;
L.Cancel = L.CanceledError;
L.all = function(e) {
  return Promise.all(e);
};
L.spread = Ds;
L.isAxiosError = Us;
L.mergeConfig = X;
L.AxiosHeaders = U;
L.formToJSON = (n) => qt(d.isHTMLForm(n) ? new FormData(n) : n);
L.getAdapter = Qt.getAdapter;
L.HttpStatusCode = Ve;
L.default = L;
const {
  Axios: vr,
  AxiosError: _r,
  CanceledError: jr,
  isCancel: Dr,
  CancelToken: Ur,
  VERSION: Ir,
  all: Br,
  Cancel: Hr,
  isAxiosError: Mr,
  spread: Vr,
  toFormData: Kr,
  AxiosHeaders: qr,
  HttpStatusCode: zr,
  formToJSON: Jr,
  getAdapter: Wr,
  mergeConfig: Gr
} = L, Xe = L.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Xe.interceptors.request.use((n) => n);
Xe.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const Is = (n) => {
  const [e, t] = be(null), [s, r] = be(null), [i, o] = be(!1), { url: a, method: c, data: l, mock: u, auto: h = !0 } = n, g = u ? (f) => cn(f.url, f.method, f.data) : (f) => Xe(f), y = async () => {
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
}, Xr = ({ tableName: n }) => {
  const e = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${n}`, { response: t, refetch: s } = Is({ url: e, method: "GET" });
  return {
    response: t,
    refetch: s
  };
}, Qr = ({ fields: n }) => /* @__PURE__ */ A("div", { className: "fields-grid", children: n.map((e, t) => /* @__PURE__ */ ee("div", { className: "field-item", children: [
  /* @__PURE__ */ A("p", { className: "field-label", children: e.label }),
  /* @__PURE__ */ A("p", { className: `field-value strong ${e.statusColor}`, children: e.value })
] }, t)) }), Bs = "link-module__link___W6noI", Hs = {
  link: Bs
}, Ms = ({ text: n, onClick: e }) => /* @__PURE__ */ A("h2", { className: Hs.link, onClick: e, children: n }), Yr = ({ children: n }) => /* @__PURE__ */ A(
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
), Vs = "title-module__titleContainer___wZFgq", Ks = "title-module__title___wc-C2", qs = "title-module__subTitle___uy5--", _e = {
  titleContainer: Vs,
  title: Ks,
  subTitle: qs
}, zs = ({ title: n, subTitle: e }) => /* @__PURE__ */ ee("div", { className: _e.titleContainer, children: [
  /* @__PURE__ */ A("h1", { className: _e.title, children: n }),
  e !== "" ? /* @__PURE__ */ A("h2", { className: _e.subTitle, children: e }) : null
] }), Js = "SearchContainer-module__searchContainer___DJ7jd", Ws = "SearchContainer-module__searchContent___xBTu-", mt = {
  searchContainer: Js,
  searchContent: Ws
}, b = (n) => typeof n == "string", oe = () => {
  let n, e;
  const t = new Promise((s, r) => {
    n = s, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}, yt = (n) => n == null ? "" : "" + n, Gs = (n, e, t) => {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Xs = /###/g, bt = (n) => n && n.indexOf("###") > -1 ? n.replace(Xs, ".") : n, St = (n) => !n || b(n), ae = (n, e, t) => {
  const s = b(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (St(n)) return {};
    const i = bt(s[r]);
    !n[i] && t && (n[i] = new t()), Object.prototype.hasOwnProperty.call(n, i) ? n = n[i] : n = {}, ++r;
  }
  return St(n) ? {} : {
    obj: n,
    k: bt(s[r])
  };
}, xt = (n, e, t) => {
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
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = ae(n, o, Object), a?.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = t;
}, Qs = (n, e, t, s) => {
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
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Ys = (n, e, t) => {
  const s = Re(n, t);
  return s !== void 0 ? s : Re(e, t);
}, tn = (n, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? b(n[s]) || n[s] instanceof String || b(e[s]) || e[s] instanceof String ? t && (n[s] = e[s]) : tn(n[s], e[s], t) : n[s] = e[s]);
  return n;
}, Z = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Zs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const er = (n) => b(n) ? n.replace(/[&<>"'\/]/g, (e) => Zs[e]) : n;
class tr {
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
const nr = [" ", ",", "?", "!", ";"], sr = new tr(20), rr = (n, e, t) => {
  e = e || "", t = t || "";
  const s = nr.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = sr.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(n);
  if (!i) {
    const o = n.indexOf(t);
    o > 0 && !r.test(n.substring(0, o)) && (i = !0);
  }
  return i;
}, Ke = (n, e, t = ".") => {
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const s = e.split(t);
  let r = n;
  for (let i = 0; i < s.length; ) {
    if (!r || typeof r != "object")
      return;
    let o, a = "";
    for (let c = i; c < s.length; ++c)
      if (c !== i && (a += t), a += s[c], o = r[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && c < s.length - 1)
          continue;
        i += c - i + 1;
        break;
      }
    r = o;
  }
  return r;
}, ce = (n) => n?.replace("_", "-"), ir = {
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
    console?.[n]?.apply?.(console, e);
  }
};
class Ee {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || ir, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, r) {
    return r && !this.debug ? null : (b(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
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
var K = new Ee();
class Fe {
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
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([r, i]) => {
      for (let o = 0; o < i; o++)
        r(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, i]) => {
      for (let o = 0; o < i; o++)
        r.apply(r, [e, ...t]);
    });
  }
}
class wt extends Fe {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, r = {}) {
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, o = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], s && (Array.isArray(s) ? a.push(...s) : b(s) && i ? a.push(...s.split(i)) : a.push(s)));
    const c = Re(this.data, a);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = a[0], t = a[1], s = a.slice(2).join(".")), c || !o || !b(s) ? c : Ke(this.data?.[e]?.[t], s, i);
  }
  addResource(e, t, s, r, i = {
    silent: !1
  }) {
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, t];
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), xt(this.data, a, r), i.silent || this.emit("added", e, t, s, r);
  }
  addResources(e, t, s, r = {
    silent: !1
  }) {
    for (const i in s)
      (b(s[i]) || Array.isArray(s[i])) && this.addResource(e, t, i, s[i], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, r, i, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), r = s, s = t, t = a[1]), this.addNamespaces(t);
    let c = Re(this.data, a) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? tn(c, s, i) : c = {
      ...c,
      ...s
    }, xt(this.data, a, c), o.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
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
var nn = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, r) {
    return n.forEach((i) => {
      e = this.processors[i]?.process(e, t, s, r) ?? e;
    }), e;
  }
};
const sn = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function or() {
  const n = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (s, r) => (t?.revoke?.(), r === sn ? n : (n.push(r), t = Proxy.revocable(s, e), t.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function qe(n, e) {
  const {
    [sn]: t
  } = n(or());
  return t.join(e?.keySeparator ?? ".");
}
const Ot = {}, je = (n) => !b(n) && typeof n != "boolean" && typeof n != "number";
class Ce extends Fe {
  constructor(e, t = {}) {
    super(), Gs(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = K.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const r = this.resolve(e, s);
    if (r?.res === void 0) return !1;
    const i = je(r.res);
    return !(s.returnObjects === !1 && i);
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !rr(e, s, r);
    if (o && !a) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: b(i) ? [i] : i
        };
      const l = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), e = l.join(r);
    }
    return {
      key: e,
      namespaces: b(i) ? [i] : i
    };
  }
  translate(e, t, s) {
    let r = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
      ...r
    }), r || (r = {}), e == null) return "";
    typeof e == "function" && (e = qe(e, {
      ...this.options,
      ...r
    })), Array.isArray(e) || (e = [String(e)]);
    const i = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], r), l = c[c.length - 1];
    let u = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const h = r.lng || this.language, g = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (h?.toLowerCase() === "cimode")
      return g ? i ? {
        res: `${l}${u}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: h,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(r)
      } : `${l}${u}${a}` : i ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: h,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(r)
      } : a;
    const y = this.resolve(e, r);
    let f = y?.res;
    const m = y?.usedKey || a, p = y?.exactUsedKey || a, x = ["[object Number]", "[object Function]", "[object RegExp]"], w = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, R = !this.i18nFormat || this.i18nFormat.handleAsObject, O = r.count !== void 0 && !b(r.count), T = Ce.hasDefaultValue(r), v = O ? this.pluralResolver.getSuffix(h, r.count, r) : "", P = r.ordinal && O ? this.pluralResolver.getSuffix(h, r.count, {
      ordinal: !1
    }) : "", Q = O && !r.ordinal && r.count === 0, I = Q && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${v}`] || r[`defaultValue${P}`] || r.defaultValue;
    let B = f;
    R && !f && T && (B = I);
    const pe = je(B), Y = Object.prototype.toString.apply(B);
    if (R && B && pe && x.indexOf(Y) < 0 && !(b(w) && Array.isArray(B))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, B, {
          ...r,
          ns: c
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return i ? (y.res = F, y.usedParams = this.getUsedParamsDetails(r), y) : F;
      }
      if (o) {
        const F = Array.isArray(B), N = F ? [] : {}, re = F ? p : m;
        for (const C in B)
          if (Object.prototype.hasOwnProperty.call(B, C)) {
            const H = `${re}${o}${C}`;
            T && !f ? N[C] = this.translate(H, {
              ...r,
              defaultValue: je(I) ? I[C] : void 0,
              joinArrays: !1,
              ns: c
            }) : N[C] = this.translate(H, {
              ...r,
              joinArrays: !1,
              ns: c
            }), N[C] === H && (N[C] = B[C]);
          }
        f = N;
      }
    } else if (R && b(w) && Array.isArray(f))
      f = f.join(w), f && (f = this.extendTranslation(f, e, r, s));
    else {
      let F = !1, N = !1;
      !this.isValidLookup(f) && T && (F = !0, f = I), this.isValidLookup(f) || (N = !0, f = a);
      const C = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && N ? void 0 : f, H = T && I !== f && this.options.updateMissing;
      if (N || F || H) {
        if (this.logger.log(H ? "updateKey" : "missingKey", h, l, a, H ? I : f), o) {
          const E = this.resolve(a, {
            ...r,
            keySeparator: !1
          });
          E && E.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let _ = [];
        const z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && z && z[0])
          for (let E = 0; E < z.length; E++)
            _.push(z[E]);
        else this.options.saveMissingTo === "all" ? _ = this.languageUtils.toResolveHierarchy(r.lng || this.language) : _.push(r.lng || this.language);
        const ge = (E, j, q) => {
          const J = T && q !== f ? q : C;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(E, l, j, J, H, r) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(E, l, j, J, H, r), this.emit("missingKey", E, l, j, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? _.forEach((E) => {
          const j = this.pluralResolver.getSuffixes(E, r);
          Q && r[`defaultValue${this.options.pluralSeparator}zero`] && j.indexOf(`${this.options.pluralSeparator}zero`) < 0 && j.push(`${this.options.pluralSeparator}zero`), j.forEach((q) => {
            ge([E], a + q, r[`defaultValue${q}`] || I);
          });
        }) : ge(_, a, I));
      }
      f = this.extendTranslation(f, e, r, y, s), N && f === a && this.options.appendNamespaceToMissingKey && (f = `${l}${u}${a}`), (N || F) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${u}${a}` : a, F ? f : void 0, r));
    }
    return i ? (y.res = f, y.usedParams = this.getUsedParamsDetails(r), y) : f;
  }
  extendTranslation(e, t, s, r, i) {
    if (this.i18nFormat?.parse)
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
      const c = b(e) && (s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let l;
      if (c) {
        const h = e.match(this.interpolator.nestingRegexp);
        l = h && h.length;
      }
      let u = s.replace && !b(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), e = this.interpolator.interpolate(e, u, s.lng || this.language || r.usedLng, s), c) {
        const h = e.match(this.interpolator.nestingRegexp), g = h && h.length;
        l < g && (s.nest = !1);
      }
      !s.lng && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...h) => i?.[0] === h[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`), null) : this.translate(...h, t), s)), s.interpolation && this.interpolator.reset();
    }
    const o = s.postProcess || this.options.postProcess, a = b(o) ? [o] : o;
    return e != null && a?.length && s.applyPostProcessor !== !1 && (e = nn.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, r, i, o, a;
    return b(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      const l = this.extractFromKey(c, t), u = l.key;
      r = u;
      let h = l.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const g = t.count !== void 0 && !b(t.count), y = g && !t.ordinal && t.count === 0, f = t.context !== void 0 && (b(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((p) => {
        this.isValidLookup(s) || (a = p, !Ot[`${m[0]}-${p}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(a) && (Ot[`${m[0]}-${p}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((x) => {
          if (this.isValidLookup(s)) return;
          o = x;
          const w = [u];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, u, x, p, t);
          else {
            let O;
            g && (O = this.pluralResolver.getSuffix(x, t.count, t));
            const T = `${this.options.pluralSeparator}zero`, v = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (t.ordinal && O.indexOf(v) === 0 && w.push(u + O.replace(v, this.options.pluralSeparator)), w.push(u + O), y && w.push(u + T)), f) {
              const P = `${u}${this.options.contextSeparator || "_"}${t.context}`;
              w.push(P), g && (t.ordinal && O.indexOf(v) === 0 && w.push(P + O.replace(v, this.options.pluralSeparator)), w.push(P + O), y && w.push(P + T));
            }
          }
          let R;
          for (; R = w.pop(); )
            this.isValidLookup(s) || (i = R, s = this.getResource(x, p, R, t));
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
  getResource(e, t, s, r = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, s, r) : this.resourceStore.getResource(e, t, s, r);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !b(e.replace);
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
class Rt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = K.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ce(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ce(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (b(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
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
      const r = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(r)) return t = r;
      const i = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
      t = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), b(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], i = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return b(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : b(e) && i(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), r;
  }
}
const Et = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ct = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class ar {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = K.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = ce(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
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
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Ct;
      if (!e.match(/-|_/)) return Ct;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(c, t);
    }
    return this.pluralRulesCache[i] = o, o;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((r) => `${t}${r}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((r, i) => Et[r] - Et[i]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const r = this.getRule(e, s);
    return r ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const Lt = (n, e, t, s = ".", r = !0) => {
  let i = Ys(n, e, t);
  return !i && r && b(t) && (i = Ke(n, t, s), i === void 0 && (i = Ke(e, t, s))), i;
}, De = (n) => n.replace(/\$/g, "$$$$");
class Tt {
  constructor(e = {}) {
    this.logger = K.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init(e = {}) {
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
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: g,
      nestingPrefixEscaped: y,
      nestingSuffix: f,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: p,
      maxReplaces: x,
      alwaysFormat: w
    } = e.interpolation;
    this.escape = t !== void 0 ? t : er, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = i ? Z(i) : o || "{{", this.suffix = a ? Z(a) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = g ? Z(g) : y || Z("$t("), this.nestingSuffix = f ? Z(f) : m || Z(")"), this.nestingOptionsSeparator = p || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = w !== void 0 ? w : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t?.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, r) {
    let i, o, a;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const x = Lt(t, c, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, s, {
          ...r,
          ...t,
          interpolationkey: y
        }) : x;
      }
      const f = y.split(this.formatSeparator), m = f.shift().trim(), p = f.join(this.formatSeparator).trim();
      return this.format(Lt(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), p, s, {
        ...r,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const u = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, h = r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => De(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? De(this.escape(y)) : De(y)
    }].forEach((y) => {
      for (a = 0; i = y.regex.exec(e); ) {
        const f = i[1].trim();
        if (o = l(f), o === void 0)
          if (typeof u == "function") {
            const p = u(e, i, r);
            o = b(p) ? p : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, f))
            o = "";
          else if (h) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`), o = "";
        else !b(o) && !this.useRawValueToEscape && (o = yt(o));
        const m = y.safeValue(o);
        if (e = e.replace(i[0], m), h ? (y.regex.lastIndex += o.length, y.regex.lastIndex -= i[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let r, i, o;
    const a = (c, l) => {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0) return c;
      const h = c.split(new RegExp(`${u}[ ]*{`));
      let g = `{${h[1]}`;
      c = h[0], g = this.interpolate(g, o);
      const y = g.match(/'/g), f = g.match(/"/g);
      ((y?.length ?? 0) % 2 === 0 && !f || f.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        o = JSON.parse(g), l && (o = {
          ...l,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, m), `${c}${u}${g}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, c;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let c = [];
      o = {
        ...s
      }, o = o.replace && !b(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const l = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
      if (l !== -1 && (c = r[1].slice(l).split(this.formatSeparator).map((u) => u.trim()).filter(Boolean), r[1] = r[1].slice(0, l)), i = t(a.call(this, r[1].trim(), o), o), i && r[0] === e && !b(i)) return i;
      b(i) || (i = yt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), c.length && (i = c.reduce((u, h) => this.format(u, h, s.lng, {
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
        const [a, ...c] = o.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        t[u] || (t[u] = l), l === "false" && (t[u] = !1), l === "true" && (t[u] = !0), isNaN(l) || (t[u] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Pt = (n) => {
  const e = {};
  return (t, s, r) => {
    let i = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (i = {
      ...i,
      [r.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(i);
    let a = e[o];
    return a || (a = n(ce(s), r), e[o] = a), a(t);
  };
}, cr = (n) => (e, t, s) => n(ce(t), s)(e);
class ur {
  constructor(e = {}) {
    this.logger = K.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? Pt : cr;
    this.formats = {
      number: s((r, i) => {
        const o = new Intl.NumberFormat(r, {
          ...i
        });
        return (a) => o.format(a);
      }),
      currency: s((r, i) => {
        const o = new Intl.NumberFormat(r, {
          ...i,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: s((r, i) => {
        const o = new Intl.DateTimeFormat(r, {
          ...i
        });
        return (a) => o.format(a);
      }),
      relativetime: s((r, i) => {
        const o = new Intl.RelativeTimeFormat(r, {
          ...i
        });
        return (a) => o.format(a, i.range || "day");
      }),
      list: s((r, i) => {
        const o = new Intl.ListFormat(r, {
          ...i
        });
        return (a) => o.format(a);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Pt(t);
  }
  format(e, t, s, r = {}) {
    const i = t.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((a) => a.indexOf(")") > -1)) {
      const a = i.findIndex((c) => c.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = lr(c);
      if (this.formats[l]) {
        let h = a;
        try {
          const g = r?.formatParams?.[r.interpolationkey] || {}, y = g.locale || g.lng || r.locale || r.lng || s;
          h = this.formats[l](a, y, {
            ...u,
            ...r,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, e);
  }
}
const fr = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class dr extends Fe {
  constructor(e, t, s, r = {}) {
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = K.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(s, r.backend, r);
  }
  queueLoad(e, t, s, r) {
    const i = {}, o = {}, a = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((h) => {
        const g = `${l}|${h}`;
        !s.reload && this.store.hasResourceBundle(l, h) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? o[g] === void 0 && (o[g] = !0) : (this.state[g] = 1, u = !1, o[g] === void 0 && (o[g] = !0), i[g] === void 0 && (i[g] = !0), c[h] === void 0 && (c[h] = !0)));
      }), u || (a[l] = !0);
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
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, s) {
    const r = e.split("|"), i = r[0], o = r[1];
    t && this.emit("failedLoading", i, o, t), !t && s && this.store.addResourceBundle(i, o, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((c) => {
      Qs(c.loaded, [i], o), fr(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((h) => {
          a[l][h] === void 0 && (a[l][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s, r = 0, i = this.retryTimeout, o) {
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
    const a = (l, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (l && u && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, r + 1, i * 2, o);
        }, i);
        return;
      }
      o(l, u);
    }, c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(e, t);
        l && typeof l.then == "function" ? l.then((u) => a(null, u)).catch(a) : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return c(e, t, a);
  }
  prepareLoading(e, t, s = {}, r) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    b(e) && (e = this.languageUtils.toResolveHierarchy(e)), b(t) && (t = [t]);
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
  loadOne(e, t = "") {
    const s = e.split("|"), r = s[0], i = s[1];
    this.read(r, i, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, s, r, i, o = {}, a = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend?.create) {
        const c = {
          ...o,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            l.length === 5 ? u = l(e, t, s, r, c) : u = l(e, t, s, r), u && typeof u.then == "function" ? u.then((h) => a(null, h)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          l(e, t, s, r, a, c);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, r);
    }
  }
}
const Ue = () => ({
  debug: !1,
  initAsync: !0,
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
    if (typeof n[1] == "object" && (e = n[1]), b(n[1]) && (e.defaultValue = n[1]), b(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
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
  },
  cacheInBuiltFormats: !0
}), Nt = (n) => (b(n.ns) && (n.ns = [n.ns]), b(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), b(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs?.indexOf?.("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n), ye = () => {
}, hr = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class le extends Fe {
  constructor(e = {}, t) {
    if (super(), this.options = Nt(e), this.services = {}, this.logger = K, this.modules = {
      external: []
    }, hr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (b(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = Ue();
    this.options = {
      ...s,
      ...this.options,
      ...Nt(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = s.overloadTranslationOptionHandler);
    const r = (l) => l ? typeof l == "function" ? new l() : l : null;
    if (!this.options.isClone) {
      this.modules.logger ? K.init(r(this.modules.logger), this.options) : K.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : l = ur;
      const u = new Rt(this.options);
      this.store = new wt(this.options.resources, this.options);
      const h = this.services;
      h.logger = K, h.resourceStore = this.store, h.languageUtils = u, h.pluralResolver = new ar(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (h.formatter = r(l), h.formatter.init && h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new Tt(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new dr(r(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (y, ...f) => {
        this.emit(y, ...f);
      }), this.modules.languageDetector && (h.languageDetector = r(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = r(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Ce(this.services, this.options), this.translator.on("*", (y, ...f) => {
        this.emit(y, ...f);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = ye), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = (...u) => this.store[l](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = (...u) => (this.store[l](...u), this);
    });
    const a = oe(), c = () => {
      const l = (u, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(h), t(u, h);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), a;
  }
  loadResources(e, t = ye) {
    let s = t;
    const r = b(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (r?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const i = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      r ? o(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => o(c)), this.options.preload?.forEach?.((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const r = oe();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = ye), this.services.backendConnector.reload(e, t, (i) => {
      r.resolve(), s(i);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && nn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = oe();
    this.emit("languageChanging", e);
    const r = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, i = (a, c) => {
      c ? this.isLanguageChangingTo === e && (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve((...l) => this.t(...l)), t && t(a, (...l) => this.t(...l));
    }, o = (a) => {
      !e && !a && this.services.languageDetector && (a = []);
      const c = b(a) ? a : a && a[0], l = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(b(a) ? [a] : a);
      l && (this.language || r(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector?.cacheUserLanguage?.(l)), this.loadResources(l, (u) => {
        i(u, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, s) {
    const r = (i, o, ...a) => {
      let c;
      typeof o != "object" ? c = this.options.overloadTranslationOptionHandler([i, o].concat(a)) : c = {
        ...o
      }, c.lng = c.lng || r.lng, c.lngs = c.lngs || r.lngs, c.ns = c.ns || r.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || r.keyPrefix);
      const l = this.options.keySeparator || ".";
      let u;
      return c.keyPrefix && Array.isArray(i) ? u = i.map((h) => (typeof h == "function" && (h = qe(h, {
        ...this.options,
        ...o
      })), `${c.keyPrefix}${l}${h}`)) : (typeof i == "function" && (i = qe(i, {
        ...this.options,
        ...o
      })), u = c.keyPrefix ? `${c.keyPrefix}${l}${i}` : i), this.t(u, c);
    };
    return b(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = s, r;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (a, c) => {
      const l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!r || o(i, e)));
  }
  loadNamespaces(e, t) {
    const s = oe();
    return this.options.ns ? (b(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = oe();
    b(e) && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const r = new Intl.Locale(e);
      if (r && r.getTextInfo) {
        const i = r.getTextInfo();
        if (i && i.direction) return i.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services?.languageUtils || new Rt(Ue());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const s = new le(e, t);
    return s.createInstance = le.createInstance, s;
  }
  cloneInstance(e = {}, t = ye) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new le(r);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s) {
      const a = Object.keys(this.store.data).reduce((c, l) => (c[l] = {
        ...this.store.data[l]
      }, c[l] = Object.keys(c[l]).reduce((u, h) => (u[h] = {
        ...c[l][h]
      }, u), c[l]), c), {});
      i.store = new wt(a, r), i.services.resourceStore = i.store;
    }
    if (e.interpolation) {
      const c = {
        ...Ue().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, l = {
        ...r,
        interpolation: c
      };
      i.services.interpolator = new Tt(l);
    }
    return i.translator = new Ce(i.services, r), i.translator.on("*", (a, ...c) => {
      i.emit(a, ...c);
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
const $ = le.createInstance();
$.createInstance;
$.dir;
$.init;
$.loadResources;
$.reloadResources;
$.use;
$.changeLanguage;
$.getFixedT;
$.t;
$.exists;
$.setDefaultNamespace;
$.hasLoadedNamespace;
$.loadNamespaces;
$.loadLanguages;
const pr = "Search", gr = "Clear", mr = {
  Search: pr,
  Clear: gr
}, yr = "חיפוש", br = "נקה", Sr = "הסבר לשאילתה", xr = {
  Search: yr,
  Clear: br,
  queryExplanation: Sr
};
$.use(an).init({
  interpolation: { escapeValue: !1 },
  fallbackLng: "en",
  lng: "he",
  resources: {
    en: {
      translations: mr
    },
    he: {
      translations: xr
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
});
$.languages = ["en", "he"];
const rn = () => ln(), wr = "SearchButtonsContainer-module__searchButtonsContainer___x8BG-", Or = {
  searchButtonsContainer: wr
}, Rr = (n) => {
  const { hasSearchButton: e = !0, hasClearButton: t = !0, isSearchDisabled: s, isClearDisabled: r, onSearch: i, onClear: o } = n, { t: a } = rn();
  return /* @__PURE__ */ ee("div", { className: Or.searchButtonsContainer, children: [
    e && /* @__PURE__ */ A(
      Ye,
      {
        label: "Search",
        icon: /* @__PURE__ */ A(Ze, { name: "search" }),
        onClick: i,
        disabled: s,
        children: a("Search")
      }
    ),
    t && /* @__PURE__ */ A(
      Ye,
      {
        label: "Clear",
        icon: /* @__PURE__ */ A(Ze, { name: "close" }),
        onClick: o,
        disabled: r,
        children: a("Clear")
      }
    )
  ] });
}, Er = (n) => {
  const { buttonsProps: e } = n;
  return /* @__PURE__ */ ee("div", { className: mt.searchContainer, children: [
    /* @__PURE__ */ A("div", { className: mt.searchContent, children: n.children }),
    e && /* @__PURE__ */ A(Rr, { ...e })
  ] });
}, Cr = "MainSearchContainer-module__mainSearchContainer___99z-w", Lr = "MainSearchContainer-module__mainSearchInfoLink___BBPWA", Tr = "MainSearchContainer-module__mainSearchToast___t-0dD", Ie = {
  mainSearchContainer: Cr,
  mainSearchInfoLink: Lr,
  mainSearchToast: Tr
}, Zr = (n) => {
  const { infoText: e, pageTitle: t, buttonsProps: s } = n, [r, i] = be(!1), { t: o } = rn();
  return /* @__PURE__ */ ee("div", { className: Ie.mainSearchContainer, children: [
    /* @__PURE__ */ A(zs, { title: t, subTitle: "" }),
    e && /* @__PURE__ */ ee("div", { className: Ie.mainSearchInfoLink, children: [
      /* @__PURE__ */ A(Ms, { onClick: () => i(!r), text: o("queryExplanation") }),
      r && /* @__PURE__ */ A(on, { className: Ie.mainSearchToast, children: e })
    ] }),
    n.children && /* @__PURE__ */ A(Er, { buttonsProps: s, children: n.children })
  ] });
}, ei = (n) => (At(() => {
  const t = document.createElement("script");
  return t.src = "https://test.newgov.gov.il/Govil.HeaderFooter.Api/govilHF/header-footer.js", t.async = !0, document.body.appendChild(t), () => {
    document.body.removeChild(t);
  };
}, ["test"]), /* @__PURE__ */ A("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
export {
  Yr as Button,
  Qr as FieldsGrid,
  Ms as Link,
  Zr as MainSearchContainer,
  ei as RootLayout,
  zs as Title,
  $ as i18n,
  cn as mockApiRequest,
  Is as useApiRequest,
  Xr as useSystemTableApiRequest,
  rn as useTranslation
};
