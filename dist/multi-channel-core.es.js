import { useState as pe, useEffect as Rt } from "react";
import { jsx as L, jsxs as z } from "react/jsx-runtime";
import { Button as Ge, Icon as Xe, Toast as Yt } from "@igds/react";
import { initReactI18next as Qt, useTranslation as Zt } from "react-i18next";
const en = async (n, e, t) => new Promise((s) => {
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
function Et(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: tn } = Object.prototype, { getPrototypeOf: Me } = Object, { iterator: Ee, toStringTag: Ct } = Symbol, Ce = /* @__PURE__ */ ((n) => (e) => {
  const t = tn.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (n) => (n = n.toLowerCase(), (e) => Ce(e) === n), Le = (n) => (e) => typeof e === n, { isArray: ee } = Array, Z = Le("undefined");
function oe(n) {
  return n !== null && !Z(n) && n.constructor !== null && !Z(n.constructor) && k(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Lt = I("ArrayBuffer");
function nn(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && Lt(n.buffer), e;
}
const sn = Le("string"), k = Le("function"), Nt = Le("number"), ae = (n) => n !== null && typeof n == "object", rn = (n) => n === !0 || n === !1, ge = (n) => {
  if (Ce(n) !== "object")
    return !1;
  const e = Me(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ct in n) && !(Ee in n);
}, on = (n) => {
  if (!ae(n) || oe(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, an = I("Date"), ln = I("File"), un = I("Blob"), cn = I("FileList"), fn = (n) => ae(n) && k(n.pipe), dn = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || k(n.append) && ((e = Ce(n)) === "formdata" || // detect form-data instance
  e === "object" && k(n.toString) && n.toString() === "[object FormData]"));
}, hn = I("URLSearchParams"), [pn, gn, mn, yn] = ["ReadableStream", "Request", "Response", "Headers"].map(I), bn = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function le(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let s, r;
  if (typeof n != "object" && (n = [n]), ee(n))
    for (s = 0, r = n.length; s < r; s++)
      e.call(null, n[s], s, n);
  else {
    if (oe(n))
      return;
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (s = 0; s < o; s++)
      a = i[s], e.call(null, n[a], a, n);
  }
}
function Tt(n, e) {
  if (oe(n))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let s = t.length, r;
  for (; s-- > 0; )
    if (r = t[s], e === r.toLowerCase())
      return r;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Pt = (n) => !Z(n) && n !== q;
function De() {
  const { caseless: n, skipUndefined: e } = Pt(this) && this || {}, t = {}, s = (r, i) => {
    const o = n && Tt(t, i) || i;
    ge(t[o]) && ge(r) ? t[o] = De(t[o], r) : ge(r) ? t[o] = De({}, r) : ee(r) ? t[o] = r.slice() : (!e || !Z(r)) && (t[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && le(arguments[r], s);
  return t;
}
const Sn = (n, e, t, { allOwnKeys: s } = {}) => (le(e, (r, i) => {
  t && k(r) ? n[i] = Et(r, t) : n[i] = r;
}, { allOwnKeys: s }), n), wn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), xn = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, On = (n, e, t, s) => {
  let r, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(n), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && Me(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, Rn = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, En = (n) => {
  if (!n) return null;
  if (ee(n)) return n;
  let e = n.length;
  if (!Nt(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, Cn = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && Me(Uint8Array)), Ln = (n, e) => {
  const s = (n && n[Ee]).call(n);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(n, i[0], i[1]);
  }
}, Nn = (n, e) => {
  let t;
  const s = [];
  for (; (t = n.exec(e)) !== null; )
    s.push(t);
  return s;
}, Tn = I("HTMLFormElement"), Pn = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, s, r) {
    return s.toUpperCase() + r;
  }
), Ye = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), An = I("RegExp"), At = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  le(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, vn = (n) => {
  At(n, (e, t) => {
    if (k(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const s = n[t];
    if (k(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, kn = (n, e) => {
  const t = {}, s = (r) => {
    r.forEach((i) => {
      t[i] = !0;
    });
  };
  return ee(n) ? s(n) : s(String(n).split(e)), t;
}, Fn = () => {
}, $n = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function jn(n) {
  return !!(n && k(n.append) && n[Ct] === "FormData" && n[Ee]);
}
const Un = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (ae(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (oe(s))
        return s;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = ee(s) ? [] : {};
        return le(s, (o, a) => {
          const l = t(o, r + 1);
          !Z(l) && (i[a] = l);
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return t(n, 0);
}, In = I("AsyncFunction"), Dn = (n) => n && (ae(n) || k(n)) && k(n.then) && k(n.catch), vt = ((n, e) => n ? setImmediate : e ? ((t, s) => (q.addEventListener("message", ({ source: r, data: i }) => {
  r === q && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), q.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  k(q.postMessage)
), _n = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || vt, Bn = (n) => n != null && k(n[Ee]), f = {
  isArray: ee,
  isArrayBuffer: Lt,
  isBuffer: oe,
  isFormData: dn,
  isArrayBufferView: nn,
  isString: sn,
  isNumber: Nt,
  isBoolean: rn,
  isObject: ae,
  isPlainObject: ge,
  isEmptyObject: on,
  isReadableStream: pn,
  isRequest: gn,
  isResponse: mn,
  isHeaders: yn,
  isUndefined: Z,
  isDate: an,
  isFile: ln,
  isBlob: un,
  isRegExp: An,
  isFunction: k,
  isStream: fn,
  isURLSearchParams: hn,
  isTypedArray: Cn,
  isFileList: cn,
  forEach: le,
  merge: De,
  extend: Sn,
  trim: bn,
  stripBOM: wn,
  inherits: xn,
  toFlatObject: On,
  kindOf: Ce,
  kindOfTest: I,
  endsWith: Rn,
  toArray: En,
  forEachEntry: Ln,
  matchAll: Nn,
  isHTMLForm: Tn,
  hasOwnProperty: Ye,
  hasOwnProp: Ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: At,
  freezeMethods: vn,
  toObjectSet: kn,
  toCamelCase: Pn,
  noop: Fn,
  toFiniteNumber: $n,
  findKey: Tt,
  global: q,
  isContextDefined: Pt,
  isSpecCompliantForm: jn,
  toJSONObject: Un,
  isAsyncFn: In,
  isThenable: Dn,
  setImmediate: vt,
  asap: _n,
  isIterable: Bn
};
function b(n, e, t, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
f.inherits(b, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const kt = b.prototype, Ft = {};
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
  Ft[n] = { value: n };
});
Object.defineProperties(b, Ft);
Object.defineProperty(kt, "isAxiosError", { value: !0 });
b.from = (n, e, t, s, r, i) => {
  const o = Object.create(kt);
  f.toFlatObject(n, o, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", l = e == null && n ? n.code : e;
  return b.call(o, a, l, t, s, r), n && o.cause == null && Object.defineProperty(o, "cause", { value: n, configurable: !0 }), o.name = n && n.name || "Error", i && Object.assign(o, i), o;
};
const Hn = null;
function _e(n) {
  return f.isPlainObject(n) || f.isArray(n);
}
function $t(n) {
  return f.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Qe(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = $t(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
}
function Mn(n) {
  return f.isArray(n) && !n.some(_e);
}
const Vn = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ne(n, e, t) {
  if (!f.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = f.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !f.isUndefined(m[g]);
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
      throw new b("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(h) || f.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, g, m) {
    let w = h;
    if (h && !m && typeof h == "object") {
      if (f.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), h = JSON.stringify(h);
      else if (f.isArray(h) && Mn(h) || (f.isFileList(h) || f.endsWith(g, "[]")) && (w = f.toArray(h)))
        return g = $t(g), w.forEach(function(E, S) {
          !(f.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Qe([g], S, i) : o === null ? g : g + "[]",
            u(E)
          );
        }), !1;
    }
    return _e(h) ? !0 : (e.append(Qe(m, g, i), u(h)), !1);
  }
  const p = [], d = Object.assign(Vn, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: _e
  });
  function y(h, g) {
    if (!f.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      p.push(h), f.forEach(h, function(w, x) {
        (!(f.isUndefined(w) || w === null) && r.call(
          e,
          w,
          f.isString(x) ? x.trim() : x,
          g,
          d
        )) === !0 && y(w, g ? g.concat(x) : [x]);
      }), p.pop();
    }
  }
  if (!f.isObject(n))
    throw new TypeError("data must be an object");
  return y(n), e;
}
function Ze(n) {
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
function Ve(n, e) {
  this._pairs = [], n && Ne(n, this, e);
}
const jt = Ve.prototype;
jt.append = function(e, t) {
  this._pairs.push([e, t]);
};
jt.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, Ze);
  } : Ze;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
function qn(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ut(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || qn;
  f.isFunction(t) && (t = {
    serialize: t
  });
  const r = t && t.serialize;
  let i;
  if (r ? i = r(e, t) : i = f.isURLSearchParams(e) ? e.toString() : new Ve(e, t).toString(s), i) {
    const o = n.indexOf("#");
    o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
}
class et {
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
    f.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const It = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Kn = typeof URLSearchParams < "u" ? URLSearchParams : Ve, zn = typeof FormData < "u" ? FormData : null, Jn = typeof Blob < "u" ? Blob : null, Wn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Kn,
    FormData: zn,
    Blob: Jn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qe = typeof window < "u" && typeof document < "u", Be = typeof navigator == "object" && navigator || void 0, Gn = qe && (!Be || ["ReactNative", "NativeScript", "NS"].indexOf(Be.product) < 0), Xn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yn = qe && window.location.href || "http://localhost", Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qe,
  hasStandardBrowserEnv: Gn,
  hasStandardBrowserWebWorkerEnv: Xn,
  navigator: Be,
  origin: Yn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...Qn,
  ...Wn
};
function Zn(n, e) {
  return Ne(n, new A.classes.URLSearchParams(), {
    visitor: function(t, s, r, i) {
      return A.isNode && f.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function es(n) {
  return f.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ts(n) {
  const e = {}, t = Object.keys(n);
  let s;
  const r = t.length;
  let i;
  for (s = 0; s < r; s++)
    i = t[s], e[i] = n[i];
  return e;
}
function Dt(n) {
  function e(t, s, r, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= t.length;
    return o = !o && f.isArray(r) ? r.length : o, l ? (f.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !f.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && f.isArray(r[o]) && (r[o] = ts(r[o])), !a);
  }
  if (f.isFormData(n) && f.isFunction(n.entries)) {
    const t = {};
    return f.forEachEntry(n, (s, r) => {
      e(es(s), r, t, 0);
    }), t;
  }
  return null;
}
function ns(n, e, t) {
  if (f.isString(n))
    try {
      return (e || JSON.parse)(n), f.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (t || JSON.stringify)(n);
}
const ue = {
  transitional: It,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = f.isObject(e);
    if (i && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return r ? JSON.stringify(Dt(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
      return e;
    if (f.isArrayBufferView(e))
      return e.buffer;
    if (f.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Zn(e, this.formSerializer).toString();
      if ((a = f.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ne(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || r ? (t.setContentType("application/json", !1), ns(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || ue.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
      return e;
    if (e && f.isString(e) && (s && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
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
  ue.headers[n] = {};
});
const ss = f.toObjectSet([
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
]), rs = (n) => {
  const e = {};
  let t, s, r;
  return n && n.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && ss[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, tt = Symbol("internals");
function se(n) {
  return n && String(n).trim().toLowerCase();
}
function me(n) {
  return n === !1 || n == null ? n : f.isArray(n) ? n.map(me) : String(n);
}
function is(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = t.exec(n); )
    e[s[1]] = s[2];
  return e;
}
const os = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ke(n, e, t, s, r) {
  if (f.isFunction(s))
    return s.call(this, e, t);
  if (r && (e = t), !!f.isString(e)) {
    if (f.isString(s))
      return e.indexOf(s) !== -1;
    if (f.isRegExp(s))
      return s.test(e);
  }
}
function as(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function ls(n, e) {
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
let F = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const r = this;
    function i(a, l, u) {
      const c = se(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = f.findKey(r, c);
      (!p || r[p] === void 0 || u === !0 || u === void 0 && r[p] !== !1) && (r[p || l] = me(a));
    }
    const o = (a, l) => f.forEach(a, (u, c) => i(u, c, l));
    if (f.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (f.isString(e) && (e = e.trim()) && !os(e))
      o(rs(e), t);
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
    if (e = se(e), e) {
      const s = f.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!t)
          return r;
        if (t === !0)
          return is(r);
        if (f.isFunction(t))
          return t.call(this, r, s);
        if (f.isRegExp(t))
          return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = se(e), e) {
      const s = f.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || ke(this, this[s], s, t)));
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = se(o), o) {
        const a = f.findKey(s, o);
        a && (!t || ke(s, s[a], a, t)) && (delete s[a], r = !0);
      }
    }
    return f.isArray(e) ? e.forEach(i) : i(e), r;
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
    return f.forEach(this, (r, i) => {
      const o = f.findKey(s, i);
      if (o) {
        t[o] = me(r), delete t[i];
        return;
      }
      const a = e ? as(i) : String(i).trim();
      a !== i && delete t[i], t[a] = me(r), s[a] = !0;
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
    const s = (this[tt] = this[tt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = se(o);
      s[a] || (ls(r, o), s[a] = !0);
    }
    return f.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
F.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(F.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(s) {
      this[t] = s;
    }
  };
});
f.freezeMethods(F);
function Fe(n, e) {
  const t = this || ue, s = e || t, r = F.from(s.headers);
  let i = s.data;
  return f.forEach(n, function(a) {
    i = a.call(t, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
function _t(n) {
  return !!(n && n.__CANCEL__);
}
function te(n, e, t) {
  b.call(this, n ?? "canceled", b.ERR_CANCELED, e, t), this.name = "CanceledError";
}
f.inherits(te, b, {
  __CANCEL__: !0
});
function Bt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new b(
    "Request failed with status code " + t.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function us(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function cs(n, e) {
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
    const y = c && u - c;
    return y ? Math.round(d * 1e3 / y) : void 0;
  };
}
function fs(n, e) {
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
const be = (n, e, t = 3) => {
  let s = 0;
  const r = cs(50, 250);
  return fs((i) => {
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
}, nt = (n, e) => {
  const t = n != null;
  return [(s) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: s
  }), e[1]];
}, st = (n) => (...e) => f.asap(() => n(...e)), ds = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, A.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, hs = A.hasStandardBrowserEnv ? (
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
function ps(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function gs(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Ht(n, e, t) {
  let s = !ps(e);
  return n && (s || t == !1) ? gs(n, e) : e;
}
const rt = (n) => n instanceof F ? { ...n } : n;
function J(n, e) {
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
    headers: (u, c, p) => r(rt(u), rt(c), p, !0)
  };
  return f.forEach(Object.keys({ ...n, ...e }), function(c) {
    const p = l[c] || r, d = p(n[c], e[c], c);
    f.isUndefined(d) && p !== a || (t[c] = d);
  }), t;
}
const Mt = (n) => {
  const e = J({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = F.from(o), e.url = Ut(Ht(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), f.isFormData(t)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (f.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([c, p]) => {
        u.includes(c.toLowerCase()) && o.set(c, p);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(e)), s || s !== !1 && ds(e.url))) {
    const l = r && i && hs.read(i);
    l && o.set(r, l);
  }
  return e;
}, ms = typeof XMLHttpRequest < "u", ys = ms && function(n) {
  return new Promise(function(t, s) {
    const r = Mt(n);
    let i = r.data;
    const o = F.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = r, c, p, d, y, h;
    function g() {
      y && y(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function w() {
      if (!m)
        return;
      const E = F.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: E,
        config: n,
        request: m
      };
      Bt(function(O) {
        t(O), g();
      }, function(O) {
        s(O), g();
      }, R), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (s(new b("Request aborted", b.ECONNABORTED, n, m)), m = null);
    }, m.onerror = function(S) {
      const R = S && S.message ? S.message : "Network Error", N = new b(R, b.ERR_NETWORK, n, m);
      N.event = S || null, s(N), m = null;
    }, m.ontimeout = function() {
      let S = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const R = r.transitional || It;
      r.timeoutErrorMessage && (S = r.timeoutErrorMessage), s(new b(
        S,
        R.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        n,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && f.forEach(o.toJSON(), function(S, R) {
      m.setRequestHeader(R, S);
    }), f.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), a && a !== "json" && (m.responseType = r.responseType), u && ([d, h] = be(u, !0), m.addEventListener("progress", d)), l && m.upload && ([p, y] = be(l), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", y)), (r.cancelToken || r.signal) && (c = (E) => {
      m && (s(!E || E.type ? new te(null, n, m) : E), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const x = us(r.url);
    if (x && A.protocols.indexOf(x) === -1) {
      s(new b("Unsupported protocol " + x + ":", b.ERR_BAD_REQUEST, n));
      return;
    }
    m.send(i || null);
  });
}, bs = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, a();
        const c = u instanceof Error ? u : this.reason;
        s.abort(c instanceof b ? c : new te(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new b(`timeout ${e} of ms exceeded`, b.ETIMEDOUT));
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
}, Ss = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let s = 0, r;
  for (; s < t; )
    r = s + e, yield n.slice(s, r), s = r;
}, ws = async function* (n, e) {
  for await (const t of xs(n))
    yield* Ss(t, e);
}, xs = async function* (n) {
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
}, it = (n, e, t, s) => {
  const r = ws(n, e);
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
}, ot = 64 * 1024, { isFunction: de } = f, Os = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(f.global), {
  ReadableStream: at,
  TextEncoder: lt
} = f.global, ut = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Rs = (n) => {
  n = f.merge.call({
    skipUndefined: !0
  }, Os, n);
  const { fetch: e, Request: t, Response: s } = n, r = e ? de(e) : typeof fetch == "function", i = de(t), o = de(s);
  if (!r)
    return !1;
  const a = r && de(at), l = r && (typeof lt == "function" ? /* @__PURE__ */ ((h) => (g) => h.encode(g))(new lt()) : async (h) => new Uint8Array(await new t(h).arrayBuffer())), u = i && a && ut(() => {
    let h = !1;
    const g = new t(A.origin, {
      body: new at(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !g;
  }), c = o && a && ut(() => f.isReadableStream(new s("").body)), p = {
    stream: c && ((h) => h.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (g, m) => {
      let w = g && g[h];
      if (w)
        return w.call(g);
      throw new b(`Response type '${h}' is not supported`, b.ERR_NOT_SUPPORT, m);
    });
  });
  const d = async (h) => {
    if (h == null)
      return 0;
    if (f.isBlob(h))
      return h.size;
    if (f.isSpecCompliantForm(h))
      return (await new t(A.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(h) || f.isArrayBuffer(h))
      return h.byteLength;
    if (f.isURLSearchParams(h) && (h = h + ""), f.isString(h))
      return (await l(h)).byteLength;
  }, y = async (h, g) => {
    const m = f.toFiniteNumber(h.getContentLength());
    return m ?? d(g);
  };
  return async (h) => {
    let {
      url: g,
      method: m,
      data: w,
      signal: x,
      cancelToken: E,
      timeout: S,
      onDownloadProgress: R,
      onUploadProgress: N,
      responseType: O,
      headers: B,
      withCredentials: W = "same-origin",
      fetchOptions: H
    } = Mt(h), Ae = e || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let G = bs([x, E && E.toAbortSignal()], S), U = null;
    const $ = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let V;
    try {
      if (N && u && m !== "get" && m !== "head" && (V = await y(B, w)) !== 0) {
        let M = new t(g, {
          method: "POST",
          body: w,
          duplex: "half"
        }), X;
        if (f.isFormData(w) && (X = M.headers.get("content-type")) && B.setContentType(X), M.body) {
          const [ve, fe] = nt(
            V,
            be(st(N))
          );
          w = it(M.body, ot, ve, fe);
        }
      }
      f.isString(W) || (W = W ? "include" : "omit");
      const j = i && "credentials" in t.prototype, P = {
        ...H,
        signal: G,
        method: m.toUpperCase(),
        headers: B.normalize().toJSON(),
        body: w,
        duplex: "half",
        credentials: j ? W : void 0
      };
      U = i && new t(g, P);
      let v = await (i ? Ae(U, H) : Ae(g, P));
      const ne = c && (O === "stream" || O === "response");
      if (c && (R || ne && $)) {
        const M = {};
        ["status", "statusText", "headers"].forEach((We) => {
          M[We] = v[We];
        });
        const X = f.toFiniteNumber(v.headers.get("content-length")), [ve, fe] = R && nt(
          X,
          be(st(R), !0)
        ) || [];
        v = new s(
          it(v.body, ot, ve, () => {
            fe && fe(), $ && $();
          }),
          M
        );
      }
      O = O || "text";
      let ce = await p[f.findKey(p, O) || "text"](v, h);
      return !ne && $ && $(), await new Promise((M, X) => {
        Bt(M, X, {
          data: ce,
          headers: F.from(v.headers),
          status: v.status,
          statusText: v.statusText,
          config: h,
          request: U
        });
      });
    } catch (j) {
      throw $ && $(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, h, U),
        {
          cause: j.cause || j
        }
      ) : b.from(j, j && j.code, h, U);
    }
  };
}, Es = /* @__PURE__ */ new Map(), Vt = (n) => {
  let e = n && n.env || {};
  const { fetch: t, Request: s, Response: r } = e, i = [
    s,
    r,
    t
  ];
  let o = i.length, a = o, l, u, c = Es;
  for (; a--; )
    l = i[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : Rs(e)), c = u;
  return u;
};
Vt();
const Ke = {
  http: Hn,
  xhr: ys,
  fetch: {
    get: Vt
  }
};
f.forEach(Ke, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const ct = (n) => `- ${n}`, Cs = (n) => f.isFunction(n) || n === null || n === !1;
function Ls(n, e) {
  n = f.isArray(n) ? n : [n];
  const { length: t } = n;
  let s, r;
  const i = {};
  for (let o = 0; o < t; o++) {
    s = n[o];
    let a;
    if (r = s, !Cs(s) && (r = Ke[(a = String(s)).toLowerCase()], r === void 0))
      throw new b(`Unknown adapter '${a}'`);
    if (r && (f.isFunction(r) || (r = r.get(e))))
      break;
    i[a || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(i).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(ct).join(`
`) : " " + ct(o[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const qt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ls,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ke
};
function $e(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new te(null, n);
}
function ft(n) {
  return $e(n), n.headers = F.from(n.headers), n.data = Fe.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), qt.getAdapter(n.adapter || ue.adapter, n)(n).then(function(s) {
    return $e(n), s.data = Fe.call(
      n,
      n.transformResponse,
      s
    ), s.headers = F.from(s.headers), s;
  }, function(s) {
    return _t(s) || ($e(n), s && s.response && (s.response.data = Fe.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = F.from(s.response.headers))), Promise.reject(s);
  });
}
const Kt = "1.13.1", Te = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Te[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const dt = {};
Te.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + Kt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new b(
        r(o, " has been removed" + (t ? " in " + t : "")),
        b.ERR_DEPRECATED
      );
    return t && !dt[o] && (dt[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
Te.spelling = function(e) {
  return (t, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function Ns(n, e, t) {
  if (typeof n != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
    if (o) {
      const a = n[i], l = a === void 0 || o(a, i, n);
      if (l !== !0)
        throw new b("option " + i + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const ye = {
  assertOptions: Ns,
  validators: Te
}, D = ye.validators;
let K = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new et(),
      response: new et()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = J(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && ye.assertOptions(s, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), r != null && (f.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : ye.assertOptions(r, {
      encode: D.function,
      serialize: D.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), ye.assertOptions(t, {
      baseUrl: D.spelling("baseURL"),
      withXsrfToken: D.spelling("withXSRFToken")
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
    ), t.headers = F.concat(o, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, p = 0, d;
    if (!l) {
      const h = [ft.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), d = h.length, c = Promise.resolve(t); p < d; )
        c = c.then(h[p++], h[p++]);
      return c;
    }
    d = a.length;
    let y = t;
    for (; p < d; ) {
      const h = a[p++], g = a[p++];
      try {
        y = h(y);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      c = ft.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, d = u.length; p < d; )
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(e) {
    e = J(this.defaults, e);
    const t = Ht(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ut(t, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  K.prototype[e] = function(t, s) {
    return this.request(J(s || {}, {
      method: e,
      url: t,
      data: (s || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(e) {
  function t(s) {
    return function(i, o, a) {
      return this.request(J(a || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  K.prototype[e] = t(), K.prototype[e + "Form"] = t(!0);
});
let Ts = class zt {
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
      s.reason || (s.reason = new te(i, o, a), t(s.reason));
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
      token: new zt(function(r) {
        e = r;
      }),
      cancel: e
    };
  }
};
function Ps(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function As(n) {
  return f.isObject(n) && n.isAxiosError === !0;
}
const He = {
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
Object.entries(He).forEach(([n, e]) => {
  He[e] = n;
});
function Jt(n) {
  const e = new K(n), t = Et(K.prototype.request, e);
  return f.extend(t, K.prototype, e, { allOwnKeys: !0 }), f.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return Jt(J(n, r));
  }, t;
}
const C = Jt(ue);
C.Axios = K;
C.CanceledError = te;
C.CancelToken = Ts;
C.isCancel = _t;
C.VERSION = Kt;
C.toFormData = Ne;
C.AxiosError = b;
C.Cancel = C.CanceledError;
C.all = function(e) {
  return Promise.all(e);
};
C.spread = Ps;
C.isAxiosError = As;
C.mergeConfig = J;
C.AxiosHeaders = F;
C.formToJSON = (n) => Dt(f.isHTMLForm(n) ? new FormData(n) : n);
C.getAdapter = qt.getAdapter;
C.HttpStatusCode = He;
C.default = C;
const {
  Axios: Ar,
  AxiosError: vr,
  CanceledError: kr,
  isCancel: Fr,
  CancelToken: $r,
  VERSION: jr,
  all: Ur,
  Cancel: Ir,
  isAxiosError: Dr,
  spread: _r,
  toFormData: Br,
  AxiosHeaders: Hr,
  HttpStatusCode: Mr,
  formToJSON: Vr,
  getAdapter: qr,
  mergeConfig: Kr
} = C, ze = C.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
ze.interceptors.request.use((n) => n);
ze.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const vs = (n) => {
  const [e, t] = pe(null), [s, r] = pe(null), [i, o] = pe(!1), { url: a, method: l, headers: u, data: c, mock: p, auto: d = !0 } = n, y = p ? (g) => en(g.url, g.method, g.data) : (g) => ze(g), h = async () => {
    o(!0);
    try {
      console.log("API request:", a, l, c);
      const g = await y({ url: a, method: l, headers: u, data: c, ...l === "GET" ? { params: c } : { data: c } });
      console.log("API response: status", g.data ? "ok" : "error"), t(g.data), r(null);
    } catch (g) {
      console.error("API request error:", g), r(g?.message ? g : null), t(null);
    } finally {
      o(!1);
    }
  };
  return Rt(() => {
    d && h();
  }, [d]), {
    response: {
      data: e,
      error: s,
      status: i ? "pending" : s ? "error" : "success"
    },
    refetch: h
  };
}, zr = ({ tableName: n }) => {
  const e = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${n}`, { response: t, refetch: s } = vs({ url: e, method: "GET" });
  return {
    response: t,
    refetch: s
  };
}, Jr = ({ fields: n }) => /* @__PURE__ */ L("div", { className: "fields-grid", children: n.map((e, t) => /* @__PURE__ */ z("div", { className: "field-item", children: [
  /* @__PURE__ */ L("p", { className: "field-label", children: e.label }),
  /* @__PURE__ */ L("p", { className: `field-value strong ${e.statusColor}`, children: e.value })
] }, t)) }), ks = "link-module__link___W6noI", Fs = {
  link: ks
}, $s = ({ text: n, onClick: e }) => /* @__PURE__ */ L("h2", { className: Fs.link, onClick: e, children: n }), Wr = ({ children: n }) => /* @__PURE__ */ L(
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
), js = "title-module__titleContainer___wZFgq", Us = "title-module__title___wc-C2", Is = "title-module__subTitle___uy5--", je = {
  titleContainer: js,
  title: Us,
  subTitle: Is
}, Ds = ({ title: n, subTitle: e }) => /* @__PURE__ */ z("div", { className: je.titleContainer, children: [
  /* @__PURE__ */ L("h1", { className: je.title, children: n }),
  e !== "" ? /* @__PURE__ */ L("h2", { className: je.subTitle, children: e }) : null
] }), _s = "SearchContainer-module__searchContainer___DJ7jd", Bs = "SearchContainer-module__searchContent___xBTu-", ht = {
  searchContainer: _s,
  searchContent: Bs
}, Hs = {
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
class Se {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Hs, this.options = t, this.debug = t.debug;
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
    return r && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Se(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Se(this.logger, e);
  }
}
var _ = new Se();
class Pe {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] = this.observers[s] || [], this.observers[s].push(t);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e] = this.observers[e].filter((s) => s !== t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      s[r - 1] = arguments[r];
    this.observers[e] && [].concat(this.observers[e]).forEach((o) => {
      o(...s);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((o) => {
      o.apply(o, [e, ...s]);
    });
  }
}
function re() {
  let n, e;
  const t = new Promise((s, r) => {
    n = s, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}
function pt(n) {
  return n == null ? "" : "" + n;
}
function Ms(n, e, t) {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}
function Je(n, e, t) {
  function s(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function r() {
    return !n || typeof n == "string";
  }
  const i = typeof e != "string" ? [].concat(e) : e.split(".");
  for (; i.length > 1; ) {
    if (r()) return {};
    const o = s(i.shift());
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {};
  }
  return r() ? {} : {
    obj: n,
    k: s(i.shift())
  };
}
function gt(n, e, t) {
  const {
    obj: s,
    k: r
  } = Je(n, e, Object);
  s[r] = t;
}
function Vs(n, e, t, s) {
  const {
    obj: r,
    k: i
  } = Je(n, e, Object);
  r[i] = r[i] || [], r[i].push(t);
}
function we(n, e) {
  const {
    obj: t,
    k: s
  } = Je(n, e);
  if (t)
    return t[s];
}
function qs(n, e, t) {
  const s = we(n, t);
  return s !== void 0 ? s : we(e, t);
}
function Wt(n, e, t) {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? typeof n[s] == "string" || n[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (n[s] = e[s]) : Wt(n[s], e[s], t) : n[s] = e[s]);
  return n;
}
function Y(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Ks = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function zs(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Ks[e]) : n;
}
const Js = [" ", ",", "?", "!", ";"];
function Ws(n, e, t) {
  e = e || "", t = t || "";
  const s = Js.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = new RegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(n);
  if (!i) {
    const o = n.indexOf(t);
    o > 0 && !r.test(n.substring(0, o)) && (i = !0);
  }
  return i;
}
function xe(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[e]) return n[e];
  const s = e.split(t);
  let r = n;
  for (let i = 0; i < s.length; ++i) {
    if (!r || typeof r[s[i]] == "string" && i + 1 < s.length)
      return;
    if (r[s[i]] === void 0) {
      let o = 2, a = s.slice(i, i + o).join(t), l = r[a];
      for (; l === void 0 && s.length > i + o; )
        o++, a = s.slice(i, i + o).join(t), l = r[a];
      if (l === void 0) return;
      if (l === null) return null;
      if (e.endsWith(a)) {
        if (typeof l == "string") return l;
        if (a && typeof l[a] == "string") return l[a];
      }
      const u = s.slice(i + o).join(t);
      return u ? xe(l, u, t) : void 0;
    }
    r = r[s[i]];
  }
  return r;
}
function Oe(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class mt extends Pe {
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
    let a = [e, t];
    s && typeof s != "string" && (a = a.concat(s)), s && typeof s == "string" && (a = a.concat(i ? s.split(i) : s)), e.indexOf(".") > -1 && (a = e.split("."));
    const l = we(this.data, a);
    return l || !o || typeof s != "string" ? l : xe(this.data && this.data[e] && this.data[e][t], s, i);
  }
  addResource(e, t, s, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, t];
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), gt(this.data, a, r), i.silent || this.emit("added", e, t, s, r);
  }
  addResources(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (typeof s[i] == "string" || Object.prototype.toString.apply(s[i]) === "[object Array]") && this.addResource(e, t, i, s[i], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, r, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), r = s, s = t, t = a[1]), this.addNamespaces(t);
    let l = we(this.data, a) || {};
    r ? Wt(l, s, i) : l = {
      ...l,
      ...s
    }, gt(this.data, a, l), o.silent || this.emit("added", e, t, s);
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
var Gt = {
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
const yt = {};
class Re extends Pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ms(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = _.create("translator");
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
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ws(e, s, r);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const u = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(r);
    }
    return typeof i == "string" && (i = [i]), {
      key: e,
      namespaces: i
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
        const S = t.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${l}${S}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l
        } : `${l}${S}${o}`;
      }
      return r ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: u,
        usedNS: l
      } : o;
    }
    const p = this.resolve(e, t);
    let d = p && p.res;
    const y = p && p.usedKey || o, h = p && p.exactUsedKey || o, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (x && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof w == "string" && g === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, d, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return r ? (p.res = S, p) : S;
      }
      if (i) {
        const S = g === "[object Array]", R = S ? [] : {}, N = S ? h : y;
        for (const O in d)
          if (Object.prototype.hasOwnProperty.call(d, O)) {
            const B = `${N}${i}${O}`;
            R[O] = this.translate(B, {
              ...t,
              joinArrays: !1,
              ns: a
            }), R[O] === B && (R[O] = d[O]);
          }
        d = R;
      }
    } else if (x && typeof w == "string" && g === "[object Array]")
      d = d.join(w), d && (d = this.extendTranslation(d, e, t, s));
    else {
      let S = !1, R = !1;
      const N = t.count !== void 0 && typeof t.count != "string", O = Re.hasDefaultValue(t), B = N ? this.pluralResolver.getSuffix(u, t.count, t) : "", W = t.ordinal && N ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", H = t[`defaultValue${B}`] || t[`defaultValue${W}`] || t.defaultValue;
      !this.isValidLookup(d) && O && (S = !0, d = H), this.isValidLookup(d) || (R = !0, d = o);
      const G = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : d, U = O && H !== d && this.options.updateMissing;
      if (R || S || U) {
        if (this.logger.log(U ? "updateKey" : "missingKey", u, l, o, U ? H : d), i) {
          const P = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let $ = [];
        const V = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && V && V[0])
          for (let P = 0; P < V.length; P++)
            $.push(V[P]);
        else this.options.saveMissingTo === "all" ? $ = this.languageUtils.toResolveHierarchy(t.lng || this.language) : $.push(t.lng || this.language);
        const j = (P, v, ne) => {
          const ce = O && ne !== d ? ne : G;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, l, v, ce, U, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(P, l, v, ce, U, t), this.emit("missingKey", P, l, v, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && N ? $.forEach((P) => {
          this.pluralResolver.getSuffixes(P, t).forEach((v) => {
            j([P], o + v, t[`defaultValue${v}`] || H);
          });
        }) : j($, o, H));
      }
      d = this.extendTranslation(d, e, t, p, s), R && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`), (R || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, S ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return r ? (p.res = d, p) : d;
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
      const u = typeof e == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = e.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let p = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, s.lng || this.language, s), u) {
        const d = e.match(this.interpolator.nestingRegexp), y = d && d.length;
        c < y && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (s.lng = r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var d = arguments.length, y = new Array(d), h = 0; h < d; h++)
          y[h] = arguments[h];
        return i && i[0] === y[0] && !s.context ? (o.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${t[0]}`), null) : o.translate(...y, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = Gt.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: r,
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, r, i, o, a;
    return typeof e == "string" && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      r = c;
      let p = u.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && typeof t.count != "string", y = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((m) => {
        this.isValidLookup(s) || (a = m, !yt[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (yt[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
          if (this.isValidLookup(s)) return;
          o = w;
          const x = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, c, w, m, t);
          else {
            let S;
            d && (S = this.pluralResolver.getSuffix(w, t.count, t));
            const R = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (x.push(c + S), t.ordinal && S.indexOf(N) === 0 && x.push(c + S.replace(N, this.options.pluralSeparator)), y && x.push(c + R)), h) {
              const O = `${c}${this.options.contextSeparator}${t.context}`;
              x.push(O), d && (x.push(O + S), t.ordinal && S.indexOf(N) === 0 && x.push(O + S.replace(N, this.options.pluralSeparator)), y && x.push(O + R));
            }
          }
          let E;
          for (; E = x.pop(); )
            this.isValidLookup(s) || (i = E, s = this.getResource(w, m, E, t));
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
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
function Ue(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class bt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = _.create("languageUtils");
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
    if (typeof e == "string" && e.indexOf("-") > -1) {
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
        if (!(i.indexOf("-") < 0 && r.indexOf("-") < 0) && i.indexOf(r) === 0)
          return i;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Object.prototype.toString.apply(e) === "[object Array]") return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), r = [], i = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), r;
  }
}
let Gs = [{
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
}], Xs = {
  1: function(n) {
    return +(n > 1);
  },
  2: function(n) {
    return +(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  5: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  },
  6: function(n) {
    return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
  },
  7: function(n) {
    return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  8: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
  },
  9: function(n) {
    return +(n >= 2);
  },
  10: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
  },
  11: function(n) {
    return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
  },
  12: function(n) {
    return +(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return +(n !== 0);
  },
  14: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
  },
  15: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  16: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2;
  },
  17: function(n) {
    return n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1;
  },
  18: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : 2;
  },
  19: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
  },
  20: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
  },
  21: function(n) {
    return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
  },
  22: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3;
  }
};
const Ys = ["v1", "v2", "v3"], Qs = ["v4"], St = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Zs() {
  const n = {};
  return Gs.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: Xs[e.fc]
      };
    });
  }), n;
}
class er {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = _.create("pluralResolver"), (!this.options.compatibilityJSON || Qs.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Zs();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Oe(e), {
          type: t.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
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
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((r, i) => St[r] - St[i]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : s.numbers.map((r) => this.getSuffix(e, r, t)) : [];
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
    return !Ys.includes(this.options.compatibilityJSON);
  }
}
function wt(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = qs(n, e, t);
  return !i && r && typeof t == "string" && (i = xe(n, t, s), i === void 0 && (i = xe(e, t, s))), i;
}
class tr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = _.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : zs, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? Y(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? Y(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? Y(t.nestingPrefix) : t.nestingPrefixEscaped || Y("$t("), this.nestingSuffix = t.nestingSuffix ? Y(t.nestingSuffix) : t.nestingSuffixEscaped || Y(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(e, "g");
    const t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(t, "g");
    const s = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(s, "g");
  }
  interpolate(e, t, s, r) {
    let i, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(h) {
      return h.replace(/\$/g, "$$$$");
    }
    const c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const x = wt(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, s, {
          ...r,
          ...t,
          interpolationkey: h
        }) : x;
      }
      const g = h.split(this.formatSeparator), m = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(wt(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), w, s, {
        ...r,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const p = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, d = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => u(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? u(this.escape(h)) : u(h)
    }].forEach((h) => {
      for (a = 0; i = h.regex.exec(e); ) {
        const g = i[1].trim();
        if (o = c(g), o === void 0)
          if (typeof p == "function") {
            const w = p(e, i, r);
            o = typeof w == "string" ? w : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, g))
            o = "";
          else if (d) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), o = "";
        else typeof o != "string" && !this.useRawValueToEscape && (o = pt(o));
        const m = h.safeValue(o);
        if (e = e.replace(i[0], m), d ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= i[0].length) : h.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, i, o;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const p = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${p[1]}`;
      l = p[0], d = this.interpolate(d, o);
      const y = d.match(/'/g), h = d.match(/"/g);
      (y && y.length % 2 === 0 && !h || h.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        o = JSON.parse(d), u && (o = {
          ...u,
          ...o
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${c}${d}`;
      }
      return delete o.defaultValue, l;
    }
    for (; r = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...s
      }, o = o.replace && typeof o.replace != "string" ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((p) => p.trim());
        r[1] = c.shift(), l = c, u = !0;
      }
      if (i = t(a.call(this, r[1].trim(), o), o), i && r[0] === e && typeof i != "string") return i;
      typeof i != "string" && (i = pt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), u && (i = l.reduce((c, p) => this.format(c, p, s.lng, {
        ...s,
        interpolationkey: r[1].trim()
      }), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function nr(n) {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const s = n.split("(");
    e = s[0].toLowerCase().trim();
    const r = s[1].substring(0, s[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((o) => {
      if (!o) return;
      const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, "");
      t[a.trim()] || (t[a.trim()] = u), u === "false" && (t[a.trim()] = !1), u === "true" && (t[a.trim()] = !0), isNaN(u) || (t[a.trim()] = parseInt(u, 10));
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function Q(n) {
  const e = {};
  return function(s, r, i) {
    const o = r + JSON.stringify(i);
    let a = e[o];
    return a || (a = n(Oe(r), i), e[o] = a), a(s);
  };
}
class sr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = _.create("formatter"), this.options = e, this.formats = {
      number: Q((t, s) => {
        const r = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
      currency: Q((t, s) => {
        const r = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => r.format(i);
      }),
      datetime: Q((t, s) => {
        const r = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
      relativetime: Q((t, s) => {
        const r = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i, s.range || "day");
      }),
      list: Q((t, s) => {
        const r = new Intl.ListFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Q(t);
  }
  format(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = nr(l);
      if (this.formats[u]) {
        let p = a;
        try {
          const d = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, y = d.locale || d.lng || r.locale || r.lng || s;
          p = this.formats[u](a, y, {
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
function rr(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class ir extends Pe {
  constructor(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = _.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, r.backend, r);
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
    t && this.emit("failedLoading", i, o, t), s && this.store.addResourceBundle(i, o, s), this.state[e] = t ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      Vs(l.loaded, [i], o), rr(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
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
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
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
function xt() {
  return {
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
    overloadTranslationOptionHandler: function(e) {
      let t = {};
      if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
        const s = e[3] || e[2];
        Object.keys(s).forEach((r) => {
          t[r] = s[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (n, e, t, s) => n,
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
  };
}
function Ot(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function he() {
}
function or(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class ie extends Pe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ot(e), this.services = {}, this.logger = _, this.modules = {
      external: []
    }, or(this), t && !this.isInitialized && !e.isClone) {
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
    typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = xt();
    this.options = {
      ...r,
      ...this.options,
      ...Ot(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function i(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? _.init(i(this.modules.logger), this.options) : _.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = sr);
      const p = new bt(this.options);
      this.store = new mt(this.options.resources, this.options);
      const d = this.services;
      d.logger = _, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new er(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = i(c), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new tr(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new ir(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(y) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(y, ...g);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Re(this.services, this.options), this.translator.on("*", function(y) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(y, ...g);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = he), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = re(), u = () => {
      const c = (p, d) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), s(p, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : he;
    const r = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (r && r.toLowerCase() === "cimode") return s();
      const i = [], o = (a) => {
        if (!a) return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          i.indexOf(u) < 0 && i.push(u);
        });
      };
      r ? o(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const r = re();
    return e || (e = this.languages), t || (t = this.options.ns), s || (s = he), this.services.backendConnector.reload(e, t, (i) => {
      r.resolve(), s(i);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Gt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const r = re();
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
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
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
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || s || i.keyPrefix;
      const d = r.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(o) ? y = o.map((h) => `${l.keyPrefix}${d}${h}`) : y = l.keyPrefix ? `${l.keyPrefix}${d}${o}` : o, r.t(y, l);
    };
    return typeof e == "string" ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
      return u === -1 || u === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!r || o(i, e)));
  }
  loadNamespaces(e, t) {
    const s = re();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = re();
    typeof e == "string" && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0);
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new bt(xt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ie(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : he;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new ie(r);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s && (i.store = new mt(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Re(i.services, r), i.translator.on("*", function(a) {
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
const T = ie.createInstance();
T.createInstance = ie.createInstance;
T.createInstance;
T.dir;
T.init;
T.loadResources;
T.reloadResources;
T.use;
T.changeLanguage;
T.getFixedT;
T.t;
T.exists;
T.setDefaultNamespace;
T.hasLoadedNamespace;
T.loadNamespaces;
T.loadLanguages;
const ar = "Search", lr = "Clear", ur = {
  Search: ar,
  Clear: lr
}, cr = "חיפוש", fr = "נקה", dr = "הסבר לשאילתה", hr = {
  Search: cr,
  Clear: fr,
  queryExplanation: dr
};
T.use(Qt).init({
  interpolation: { escapeValue: !1 },
  fallbackLng: "en",
  lng: "he",
  resources: {
    en: {
      translations: ur
    },
    he: {
      translations: hr
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
});
T.languages = ["en", "he"];
const Xt = () => Zt(), pr = "SearchButtonsContainer-module__searchButtonsContainer___x8BG-", gr = {
  searchButtonsContainer: pr
}, mr = (n) => {
  const { hasSearchButton: e = !0, hasClearButton: t = !0, isSearchDisabled: s, isClearDisabled: r, onSearch: i, onClear: o } = n, { t: a } = Xt();
  return /* @__PURE__ */ z("div", { className: gr.searchButtonsContainer, children: [
    e && /* @__PURE__ */ L(
      Ge,
      {
        label: "Search",
        icon: /* @__PURE__ */ L(Xe, { name: "search" }),
        onClick: i,
        disabled: s,
        children: a("Search")
      }
    ),
    t && /* @__PURE__ */ L(
      Ge,
      {
        label: "Clear",
        icon: /* @__PURE__ */ L(Xe, { name: "close" }),
        onClick: o,
        disabled: r,
        children: a("Clear")
      }
    )
  ] });
}, yr = (n) => {
  const { buttonsProps: e } = n;
  return /* @__PURE__ */ z("div", { className: ht.searchContainer, children: [
    /* @__PURE__ */ L("div", { className: ht.searchContent, children: n.children }),
    e && /* @__PURE__ */ L(mr, { ...e })
  ] });
}, br = "toastInfo-module__toastInfoLink___AqiYy", Sr = "toastInfo-module__toast___-oxAT", wr = "toastInfo-module__toastText___VsPVH", Ie = {
  toastInfoLink: br,
  toast: Sr,
  toastText: wr
}, xr = ({ infoTitle: n, infoContent: e }) => {
  const { t } = Xt(), [s, r] = pe(!1);
  return /* @__PURE__ */ z("div", { className: Ie.toastInfoLink, children: [
    /* @__PURE__ */ L($s, { onClick: () => r(!s), text: t("queryExplanation") }),
    s && /* @__PURE__ */ z(Yt, { className: Ie.toast, children: [
      n !== "" && /* @__PURE__ */ L("strong", { slot: "title", children: n }),
      /* @__PURE__ */ L("span", { className: Ie.toastText, children: e })
    ] })
  ] });
}, Or = "MainSearchContainer-module__mainSearchContainer___99z-w", Rr = {
  mainSearchContainer: Or
}, Gr = (n) => {
  const { info: e, pageTitle: t, buttonsProps: s } = n;
  return /* @__PURE__ */ z("div", { className: Rr.mainSearchContainer, children: [
    /* @__PURE__ */ L(Ds, { title: t, subTitle: "" }),
    e?.infoContent && /* @__PURE__ */ L(xr, { infoTitle: e.infoTitle, infoContent: e.infoContent }),
    n.children && /* @__PURE__ */ L(yr, { buttonsProps: s, children: n.children })
  ] });
}, Xr = (n) => (Rt(() => {
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
}, ["prod"]), /* @__PURE__ */ L("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
export {
  Wr as Button,
  Jr as FieldsGrid,
  $s as Link,
  Gr as MainSearchContainer,
  Xr as RootLayout,
  Ds as Title,
  T as i18n,
  en as mockApiRequest,
  vs as useApiRequest,
  zr as useSystemTableApiRequest,
  Xt as useTranslation
};
