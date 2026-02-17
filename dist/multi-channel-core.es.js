<<<<<<< HEAD
import { useState as q, useEffect as we, useRef as Tt, useLayoutEffect as tn, useCallback as nn, useMemo as Qe } from "react";
import { jsx as R, jsxs as U } from "react/jsx-runtime";
import { SearchField as sn, Table as rn, TableHeader as on, TableRow as et, TableCell as an, Input as ln, Pagination as un, PaginationItem as cn, Icon as Be, Button as tt, Toast as fn } from "@igds/react";
import { initReactI18next as dn, useTranslation as hn } from "react-i18next";
const pn = async (n, e, t) => new Promise((s) => {
=======
import { useState as z, useEffect as Re, useRef as kt, useLayoutEffect as on, useCallback as an, useMemo as tt } from "react";
import { jsx as O, jsxs as U } from "react/jsx-runtime";
import { SearchField as ln, Table as un, TableHeader as cn, TableRow as nt, TableCell as fn, Input as dn, Pagination as hn, PaginationItem as pn, Icon as He, Button as st, Toast as gn } from "@igds/react";
import { initReactI18next as mn, useTranslation as bn } from "react-i18next";
const yn = async (n, e, t) => new Promise((s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
function Pt(n, e) {
=======
function Ft(n, e) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  return function() {
    return n.apply(e, arguments);
  };
}
<<<<<<< HEAD
const { toString: gn } = Object.prototype, { getPrototypeOf: Ke } = Object, { iterator: Ne, toStringTag: vt } = Symbol, Te = /* @__PURE__ */ ((n) => (e) => {
  const t = gn.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), H = (n) => (n = n.toLowerCase(), (e) => Te(e) === n), Pe = (n) => (e) => typeof e === n, { isArray: ne } = Array, te = Pe("undefined");
function ue(n) {
  return n !== null && !te(n) && n.constructor !== null && !te(n.constructor) && I(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const At = H("ArrayBuffer");
function mn(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && At(n.buffer), e;
}
const yn = Pe("string"), I = Pe("function"), Ft = Pe("number"), ce = (n) => n !== null && typeof n == "object", bn = (n) => n === !0 || n === !1, ye = (n) => {
  if (Te(n) !== "object")
    return !1;
  const e = Ke(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(vt in n) && !(Ne in n);
}, Sn = (n) => {
  if (!ce(n) || ue(n))
=======
const { toString: Sn } = Object.prototype, { getPrototypeOf: We } = Object, { iterator: Pe, toStringTag: $t } = Symbol, Te = /* @__PURE__ */ ((n) => (e) => {
  const t = Sn.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), H = (n) => (n = n.toLowerCase(), (e) => Te(e) === n), ve = (n) => (e) => typeof e === n, { isArray: se } = Array, ne = ve("undefined");
function de(n) {
  return n !== null && !ne(n) && n.constructor !== null && !ne(n.constructor) && _(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const It = H("ArrayBuffer");
function xn(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && It(n.buffer), e;
}
const wn = ve("string"), _ = ve("function"), _t = ve("number"), he = (n) => n !== null && typeof n == "object", Rn = (n) => n === !0 || n === !1, Se = (n) => {
  if (Te(n) !== "object")
    return !1;
  const e = We(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !($t in n) && !(Pe in n);
}, On = (n) => {
  if (!he(n) || de(n))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
<<<<<<< HEAD
}, wn = H("Date"), xn = H("File"), Rn = H("Blob"), On = H("FileList"), Cn = (n) => ce(n) && I(n.pipe), En = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || I(n.append) && ((e = Te(n)) === "formdata" || // detect form-data instance
  e === "object" && I(n.toString) && n.toString() === "[object FormData]"));
}, Ln = H("URLSearchParams"), [Nn, Tn, Pn, vn] = ["ReadableStream", "Request", "Response", "Headers"].map(H), An = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fe(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let s, r;
  if (typeof n != "object" && (n = [n]), ne(n))
    for (s = 0, r = n.length; s < r; s++)
      e.call(null, n[s], s, n);
  else {
    if (ue(n))
=======
}, Cn = H("Date"), En = H("File"), Ln = H("Blob"), Nn = H("FileList"), Pn = (n) => he(n) && _(n.pipe), Tn = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || _(n.append) && ((e = Te(n)) === "formdata" || // detect form-data instance
  e === "object" && _(n.toString) && n.toString() === "[object FormData]"));
}, vn = H("URLSearchParams"), [An, kn, Fn, $n] = ["ReadableStream", "Request", "Response", "Headers"].map(H), In = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pe(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let s, r;
  if (typeof n != "object" && (n = [n]), se(n))
    for (s = 0, r = n.length; s < r; s++)
      e.call(null, n[s], s, n);
  else {
    if (de(n))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      return;
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (s = 0; s < o; s++)
      a = i[s], e.call(null, n[a], a, n);
  }
}
<<<<<<< HEAD
function kt(n, e) {
  if (ue(n))
=======
function Dt(n, e) {
  if (de(n))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let s = t.length, r;
  for (; s-- > 0; )
    if (r = t[s], e === r.toLowerCase())
      return r;
  return null;
}
<<<<<<< HEAD
const J = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $t = (n) => !te(n) && n !== J;
function He() {
  const { caseless: n, skipUndefined: e } = $t(this) && this || {}, t = {}, s = (r, i) => {
    const o = n && kt(t, i) || i;
    ye(t[o]) && ye(r) ? t[o] = He(t[o], r) : ye(r) ? t[o] = He({}, r) : ne(r) ? t[o] = r.slice() : (!e || !te(r)) && (t[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && fe(arguments[r], s);
  return t;
}
const Fn = (n, e, t, { allOwnKeys: s } = {}) => (fe(e, (r, i) => {
  t && I(r) ? n[i] = Pt(r, t) : n[i] = r;
}, { allOwnKeys: s }), n), kn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), $n = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, In = (n, e, t, s) => {
=======
const X = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jt = (n) => !ne(n) && n !== X;
function Me() {
  const { caseless: n, skipUndefined: e } = jt(this) && this || {}, t = {}, s = (r, i) => {
    const o = n && Dt(t, i) || i;
    Se(t[o]) && Se(r) ? t[o] = Me(t[o], r) : Se(r) ? t[o] = Me({}, r) : se(r) ? t[o] = r.slice() : (!e || !ne(r)) && (t[o] = r);
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && pe(arguments[r], s);
  return t;
}
const _n = (n, e, t, { allOwnKeys: s } = {}) => (pe(e, (r, i) => {
  t && _(r) ? n[i] = Ft(r, t) : n[i] = r;
}, { allOwnKeys: s }), n), Dn = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), jn = (n, e, t, s) => {
  n.prototype = Object.create(e.prototype, s), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, Un = (n, e, t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let r, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(n), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
<<<<<<< HEAD
    n = t !== !1 && Ke(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, _n = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, jn = (n) => {
  if (!n) return null;
  if (ne(n)) return n;
  let e = n.length;
  if (!Ft(e)) return null;
=======
    n = t !== !1 && We(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, Bn = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const s = n.indexOf(e, t);
  return s !== -1 && s === t;
}, Vn = (n) => {
  if (!n) return null;
  if (se(n)) return n;
  let e = n.length;
  if (!_t(e)) return null;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
<<<<<<< HEAD
}, Dn = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && Ke(Uint8Array)), Un = (n, e) => {
  const s = (n && n[Ne]).call(n);
=======
}, Hn = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && We(Uint8Array)), Mn = (n, e) => {
  const s = (n && n[Pe]).call(n);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(n, i[0], i[1]);
  }
<<<<<<< HEAD
}, Bn = (n, e) => {
=======
}, Kn = (n, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let t;
  const s = [];
  for (; (t = n.exec(e)) !== null; )
    s.push(t);
  return s;
<<<<<<< HEAD
}, Hn = H("HTMLFormElement"), Vn = (n) => n.toLowerCase().replace(
=======
}, qn = H("HTMLFormElement"), zn = (n) => n.toLowerCase().replace(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, s, r) {
    return s.toUpperCase() + r;
  }
<<<<<<< HEAD
), nt = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Mn = H("RegExp"), It = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  fe(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, qn = (n) => {
  It(n, (e, t) => {
    if (I(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const s = n[t];
    if (I(s)) {
=======
), rt = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Jn = H("RegExp"), Ut = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), s = {};
  pe(t, (r, i) => {
    let o;
    (o = e(r, i, n)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(n, s);
}, Wn = (n) => {
  Ut(n, (e, t) => {
    if (_(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const s = n[t];
    if (_(s)) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
<<<<<<< HEAD
}, Kn = (n, e) => {
=======
}, Gn = (n, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const t = {}, s = (r) => {
    r.forEach((i) => {
      t[i] = !0;
    });
  };
<<<<<<< HEAD
  return ne(n) ? s(n) : s(String(n).split(e)), t;
}, zn = () => {
}, Jn = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function Wn(n) {
  return !!(n && I(n.append) && n[vt] === "FormData" && n[Ne]);
}
const Gn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (ce(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (ue(s))
        return s;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = ne(s) ? [] : {};
        return fe(s, (o, a) => {
          const l = t(o, r + 1);
          !te(l) && (i[a] = l);
=======
  return se(n) ? s(n) : s(String(n).split(e)), t;
}, Xn = () => {
}, Yn = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function Qn(n) {
  return !!(n && _(n.append) && n[$t] === "FormData" && n[Pe]);
}
const Zn = (n) => {
  const e = new Array(10), t = (s, r) => {
    if (he(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (de(s))
        return s;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = se(s) ? [] : {};
        return pe(s, (o, a) => {
          const l = t(o, r + 1);
          !ne(l) && (i[a] = l);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return t(n, 0);
<<<<<<< HEAD
}, Xn = H("AsyncFunction"), Yn = (n) => n && (ce(n) || I(n)) && I(n.then) && I(n.catch), _t = ((n, e) => n ? setImmediate : e ? ((t, s) => (J.addEventListener("message", ({ source: r, data: i }) => {
  r === J && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), J.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  I(J.postMessage)
), Zn = typeof queueMicrotask < "u" ? queueMicrotask.bind(J) : typeof process < "u" && process.nextTick || _t, Qn = (n) => n != null && I(n[Ne]), f = {
  isArray: ne,
  isArrayBuffer: At,
  isBuffer: ue,
  isFormData: En,
  isArrayBufferView: mn,
  isString: yn,
  isNumber: Ft,
  isBoolean: bn,
  isObject: ce,
  isPlainObject: ye,
  isEmptyObject: Sn,
  isReadableStream: Nn,
  isRequest: Tn,
  isResponse: Pn,
  isHeaders: vn,
  isUndefined: te,
  isDate: wn,
  isFile: xn,
  isBlob: Rn,
  isRegExp: Mn,
  isFunction: I,
  isStream: Cn,
  isURLSearchParams: Ln,
  isTypedArray: Dn,
  isFileList: On,
  forEach: fe,
  merge: He,
  extend: Fn,
  trim: An,
  stripBOM: kn,
  inherits: $n,
  toFlatObject: In,
  kindOf: Te,
  kindOfTest: H,
  endsWith: _n,
  toArray: jn,
  forEachEntry: Un,
  matchAll: Bn,
  isHTMLForm: Hn,
  hasOwnProperty: nt,
  hasOwnProp: nt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: It,
  freezeMethods: qn,
  toObjectSet: Kn,
  toCamelCase: Vn,
  noop: zn,
  toFiniteNumber: Jn,
  findKey: kt,
  global: J,
  isContextDefined: $t,
  isSpecCompliantForm: Wn,
  toJSONObject: Gn,
  isAsyncFn: Xn,
  isThenable: Yn,
  setImmediate: _t,
  asap: Zn,
  isIterable: Qn
};
function S(n, e, t, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
f.inherits(S, Error, {
=======
}, es = H("AsyncFunction"), ts = (n) => n && (he(n) || _(n)) && _(n.then) && _(n.catch), Bt = ((n, e) => n ? setImmediate : e ? ((t, s) => (X.addEventListener("message", ({ source: r, data: i }) => {
  r === X && i === t && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), X.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  _(X.postMessage)
), ns = typeof queueMicrotask < "u" ? queueMicrotask.bind(X) : typeof process < "u" && process.nextTick || Bt, ss = (n) => n != null && _(n[Pe]), d = {
  isArray: se,
  isArrayBuffer: It,
  isBuffer: de,
  isFormData: Tn,
  isArrayBufferView: xn,
  isString: wn,
  isNumber: _t,
  isBoolean: Rn,
  isObject: he,
  isPlainObject: Se,
  isEmptyObject: On,
  isReadableStream: An,
  isRequest: kn,
  isResponse: Fn,
  isHeaders: $n,
  isUndefined: ne,
  isDate: Cn,
  isFile: En,
  isBlob: Ln,
  isRegExp: Jn,
  isFunction: _,
  isStream: Pn,
  isURLSearchParams: vn,
  isTypedArray: Hn,
  isFileList: Nn,
  forEach: pe,
  merge: Me,
  extend: _n,
  trim: In,
  stripBOM: Dn,
  inherits: jn,
  toFlatObject: Un,
  kindOf: Te,
  kindOfTest: H,
  endsWith: Bn,
  toArray: Vn,
  forEachEntry: Mn,
  matchAll: Kn,
  isHTMLForm: qn,
  hasOwnProperty: rt,
  hasOwnProp: rt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ut,
  freezeMethods: Wn,
  toObjectSet: Gn,
  toCamelCase: zn,
  noop: Xn,
  toFiniteNumber: Yn,
  findKey: Dt,
  global: X,
  isContextDefined: jt,
  isSpecCompliantForm: Qn,
  toJSONObject: Zn,
  isAsyncFn: es,
  isThenable: ts,
  setImmediate: Bt,
  asap: ns,
  isIterable: ss
};
function x(n, e, t, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
d.inherits(x, Error, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
const jt = S.prototype, Dt = {};
=======
const Vt = x.prototype, Ht = {};
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
  Dt[n] = { value: n };
});
Object.defineProperties(S, Dt);
Object.defineProperty(jt, "isAxiosError", { value: !0 });
S.from = (n, e, t, s, r, i) => {
  const o = Object.create(jt);
  f.toFlatObject(n, o, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", l = e == null && n ? n.code : e;
  return S.call(o, a, l, t, s, r), n && o.cause == null && Object.defineProperty(o, "cause", { value: n, configurable: !0 }), o.name = n && n.name || "Error", i && Object.assign(o, i), o;
};
const es = null;
function Ve(n) {
  return f.isPlainObject(n) || f.isArray(n);
}
function Ut(n) {
  return f.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function st(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = Ut(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
}
function ts(n) {
  return f.isArray(n) && !n.some(Ve);
}
const ns = f.toFlatObject(f, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ve(n, e, t) {
  if (!f.isObject(n))
=======
  Ht[n] = { value: n };
});
Object.defineProperties(x, Ht);
Object.defineProperty(Vt, "isAxiosError", { value: !0 });
x.from = (n, e, t, s, r, i) => {
  const o = Object.create(Vt);
  d.toFlatObject(n, o, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", l = e == null && n ? n.code : e;
  return x.call(o, a, l, t, s, r), n && o.cause == null && Object.defineProperty(o, "cause", { value: n, configurable: !0 }), o.name = n && n.name || "Error", i && Object.assign(o, i), o;
};
const rs = null;
function Ke(n) {
  return d.isPlainObject(n) || d.isArray(n);
}
function Mt(n) {
  return d.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function it(n, e, t) {
  return n ? n.concat(e).map(function(r, i) {
    return r = Mt(r), !t && i ? "[" + r + "]" : r;
  }).join(t ? "." : "") : e;
}
function is(n) {
  return d.isArray(n) && !n.some(Ke);
}
const os = d.toFlatObject(d, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ae(n, e, t) {
  if (!d.isObject(n))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = d.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
<<<<<<< HEAD
  }, !1, function(g, m) {
    return !f.isUndefined(m[g]);
=======
  }, !1, function(m, g) {
    return !d.isUndefined(g[m]);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  });
  const s = t.metaTokens, r = t.visitor || c, i = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(e);
  if (!d.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
<<<<<<< HEAD
    if (f.isDate(h))
      return h.toISOString();
    if (f.isBoolean(h))
      return h.toString();
    if (!l && f.isBlob(h))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(h) || f.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, g, m) {
    let x = h;
    if (h && !m && typeof h == "object") {
      if (f.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), h = JSON.stringify(h);
      else if (f.isArray(h) && ts(h) || (f.isFileList(h) || f.endsWith(g, "[]")) && (x = f.toArray(h)))
        return g = Ut(g), x.forEach(function(T, b) {
          !(f.isUndefined(T) || T === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? st([g], b, i) : o === null ? g : g + "[]",
            u(T)
          );
        }), !1;
    }
    return Ve(h) ? !0 : (e.append(st(m, g, i), u(h)), !1);
  }
  const p = [], d = Object.assign(ns, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ve
  });
  function y(h, g) {
    if (!f.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      p.push(h), f.forEach(h, function(x, O) {
        (!(f.isUndefined(x) || x === null) && r.call(
          e,
          x,
          f.isString(O) ? O.trim() : O,
          g,
          d
        )) === !0 && y(x, g ? g.concat(O) : [O]);
=======
    if (d.isDate(h))
      return h.toISOString();
    if (d.isBoolean(h))
      return h.toString();
    if (!l && d.isBlob(h))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(h) || d.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, m, g) {
    let R = h;
    if (h && !g && typeof h == "object") {
      if (d.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (d.isArray(h) && is(h) || (d.isFileList(h) || d.endsWith(m, "[]")) && (R = d.toArray(h)))
        return m = Mt(m), R.forEach(function(P, S) {
          !(d.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? it([m], S, i) : o === null ? m : m + "[]",
            u(P)
          );
        }), !1;
    }
    return Ke(h) ? !0 : (e.append(it(g, m, i), u(h)), !1);
  }
  const p = [], f = Object.assign(os, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ke
  });
  function b(h, m) {
    if (!d.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(h), d.forEach(h, function(R, C) {
        (!(d.isUndefined(R) || R === null) && r.call(
          e,
          R,
          d.isString(C) ? C.trim() : C,
          m,
          f
        )) === !0 && b(R, m ? m.concat(C) : [C]);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      }), p.pop();
    }
  }
  if (!d.isObject(n))
    throw new TypeError("data must be an object");
  return b(n), e;
}
<<<<<<< HEAD
function rt(n) {
=======
function ot(n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
function ze(n, e) {
  this._pairs = [], n && ve(n, this, e);
}
const Bt = ze.prototype;
Bt.append = function(e, t) {
  this._pairs.push([e, t]);
};
Bt.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, rt);
  } : rt;
=======
function Ge(n, e) {
  this._pairs = [], n && Ae(n, this, e);
}
const Kt = Ge.prototype;
Kt.append = function(e, t) {
  this._pairs.push([e, t]);
};
Kt.toString = function(e) {
  const t = e ? function(s) {
    return e.call(this, s, ot);
  } : ot;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
<<<<<<< HEAD
function ss(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ht(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || ss;
  f.isFunction(t) && (t = {
=======
function as(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function qt(n, e, t) {
  if (!e)
    return n;
  const s = t && t.encode || as;
  d.isFunction(t) && (t = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    serialize: t
  });
  const r = t && t.serialize;
  let i;
<<<<<<< HEAD
  if (r ? i = r(e, t) : i = f.isURLSearchParams(e) ? e.toString() : new ze(e, t).toString(s), i) {
=======
  if (r ? i = r(e, t) : i = d.isURLSearchParams(e) ? e.toString() : new Ge(e, t).toString(s), i) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    const o = n.indexOf("#");
    o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
}
<<<<<<< HEAD
class it {
=======
class at {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
const Vt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rs = typeof URLSearchParams < "u" ? URLSearchParams : ze, is = typeof FormData < "u" ? FormData : null, os = typeof Blob < "u" ? Blob : null, as = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rs,
    FormData: is,
    Blob: os
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Je = typeof window < "u" && typeof document < "u", Me = typeof navigator == "object" && navigator || void 0, ls = Je && (!Me || ["ReactNative", "NativeScript", "NS"].indexOf(Me.product) < 0), us = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cs = Je && window.location.href || "http://localhost", fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Je,
  hasStandardBrowserEnv: ls,
  hasStandardBrowserWebWorkerEnv: us,
  navigator: Me,
  origin: cs
}, Symbol.toStringTag, { value: "Module" })), k = {
  ...fs,
  ...as
};
function ds(n, e) {
  return ve(n, new k.classes.URLSearchParams(), {
    visitor: function(t, s, r, i) {
      return k.isNode && f.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
=======
const zt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ls = typeof URLSearchParams < "u" ? URLSearchParams : Ge, us = typeof FormData < "u" ? FormData : null, cs = typeof Blob < "u" ? Blob : null, fs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ls,
    FormData: us,
    Blob: cs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xe = typeof window < "u" && typeof document < "u", qe = typeof navigator == "object" && navigator || void 0, ds = Xe && (!qe || ["ReactNative", "NativeScript", "NS"].indexOf(qe.product) < 0), hs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ps = Xe && window.location.href || "http://localhost", gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xe,
  hasStandardBrowserEnv: ds,
  hasStandardBrowserWebWorkerEnv: hs,
  navigator: qe,
  origin: ps
}, Symbol.toStringTag, { value: "Module" })), $ = {
  ...gs,
  ...fs
};
function ms(n, e) {
  return Ae(n, new $.classes.URLSearchParams(), {
    visitor: function(t, s, r, i) {
      return $.isNode && d.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    },
    ...e
  });
}
<<<<<<< HEAD
function hs(n) {
  return f.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ps(n) {
=======
function bs(n) {
  return d.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ys(n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const e = {}, t = Object.keys(n);
  let s;
  const r = t.length;
  let i;
  for (s = 0; s < r; s++)
    i = t[s], e[i] = n[i];
  return e;
}
<<<<<<< HEAD
function Mt(n) {
=======
function Jt(n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  function e(t, s, r, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= t.length;
<<<<<<< HEAD
    return o = !o && f.isArray(r) ? r.length : o, l ? (f.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !f.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && f.isArray(r[o]) && (r[o] = ps(r[o])), !a);
=======
    return o = !o && d.isArray(r) ? r.length : o, l ? (d.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !d.isObject(r[o])) && (r[o] = []), e(t, s, r[o], i) && d.isArray(r[o]) && (r[o] = ys(r[o])), !a);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  if (d.isFormData(n) && d.isFunction(n.entries)) {
    const t = {};
<<<<<<< HEAD
    return f.forEachEntry(n, (s, r) => {
      e(hs(s), r, t, 0);
=======
    return d.forEachEntry(n, (s, r) => {
      e(bs(s), r, t, 0);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }), t;
  }
  return null;
}
<<<<<<< HEAD
function gs(n, e, t) {
  if (f.isString(n))
=======
function Ss(n, e, t) {
  if (d.isString(n))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    try {
      return (e || JSON.parse)(n), d.trim(n);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (t || JSON.stringify)(n);
}
<<<<<<< HEAD
const de = {
  transitional: Vt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = f.isObject(e);
    if (i && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
      return r ? JSON.stringify(Mt(e)) : e;
    if (f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) || f.isReadableStream(e))
=======
const ge = {
  transitional: zt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const s = t.getContentType() || "", r = s.indexOf("application/json") > -1, i = d.isObject(e);
    if (i && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e))
      return r ? JSON.stringify(Jt(e)) : e;
    if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e) || d.isReadableStream(e))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      return e;
    if (d.isArrayBufferView(e))
      return e.buffer;
    if (d.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
<<<<<<< HEAD
        return ds(e, this.formSerializer).toString();
      if ((a = f.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ve(
=======
        return ms(e, this.formSerializer).toString();
      if ((a = d.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ae(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
<<<<<<< HEAD
    return i || r ? (t.setContentType("application/json", !1), gs(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || de.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (f.isResponse(e) || f.isReadableStream(e))
=======
    return i || r ? (t.setContentType("application/json", !1), Ss(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || ge.transitional, s = t && t.forcedJSONParsing, r = this.responseType === "json";
    if (d.isResponse(e) || d.isReadableStream(e))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      return e;
    if (e && d.isString(e) && (s && !this.responseType || r)) {
      const o = !(t && t.silentJSONParsing) && r;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
<<<<<<< HEAD
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
=======
          throw a.name === "SyntaxError" ? x.from(a, x.ERR_BAD_RESPONSE, this, null, this.response) : a;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
=======
    FormData: $.classes.FormData,
    Blob: $.classes.Blob
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
f.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  de.headers[n] = {};
});
const ms = f.toObjectSet([
=======
d.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  ge.headers[n] = {};
});
const xs = d.toObjectSet([
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
]), ys = (n) => {
=======
]), ws = (n) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const e = {};
  let t, s, r;
  return n && n.split(`
`).forEach(function(o) {
<<<<<<< HEAD
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && ms[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, ot = Symbol("internals");
function ie(n) {
  return n && String(n).trim().toLowerCase();
}
function be(n) {
  return n === !1 || n == null ? n : f.isArray(n) ? n.map(be) : String(n);
}
function bs(n) {
=======
    r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!t || e[t] && xs[t]) && (t === "set-cookie" ? e[t] ? e[t].push(s) : e[t] = [s] : e[t] = e[t] ? e[t] + ", " + s : s);
  }), e;
}, lt = /* @__PURE__ */ Symbol("internals");
function ae(n) {
  return n && String(n).trim().toLowerCase();
}
function xe(n) {
  return n === !1 || n == null ? n : d.isArray(n) ? n.map(xe) : String(n);
}
function Rs(n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = t.exec(n); )
    e[s[1]] = s[2];
  return e;
}
<<<<<<< HEAD
const Ss = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function $e(n, e, t, s, r) {
  if (f.isFunction(s))
=======
const Os = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ie(n, e, t, s, r) {
  if (d.isFunction(s))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return s.call(this, e, t);
  if (r && (e = t), !!d.isString(e)) {
    if (d.isString(s))
      return e.indexOf(s) !== -1;
    if (d.isRegExp(s))
      return s.test(e);
  }
}
<<<<<<< HEAD
function ws(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function xs(n, e) {
  const t = f.toCamelCase(" " + e);
=======
function Cs(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, s) => t.toUpperCase() + s);
}
function Es(n, e) {
  const t = d.toCamelCase(" " + e);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(n, s + t, {
      value: function(r, i, o) {
        return this[s].call(this, e, r, i, o);
      },
      configurable: !0
    });
  });
}
<<<<<<< HEAD
let _ = class {
=======
let D = class {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const r = this;
    function i(a, l, u) {
<<<<<<< HEAD
      const c = ie(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = f.findKey(r, c);
      (!p || r[p] === void 0 || u === !0 || u === void 0 && r[p] !== !1) && (r[p || l] = be(a));
=======
      const c = ae(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = d.findKey(r, c);
      (!p || r[p] === void 0 || u === !0 || u === void 0 && r[p] !== !1) && (r[p || l] = xe(a));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }
    const o = (a, l) => d.forEach(a, (u, c) => i(u, c, l));
    if (d.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
<<<<<<< HEAD
    else if (f.isString(e) && (e = e.trim()) && !Ss(e))
      o(ys(e), t);
    else if (f.isObject(e) && f.isIterable(e)) {
=======
    else if (d.isString(e) && (e = e.trim()) && !Os(e))
      o(ws(e), t);
    else if (d.isObject(e) && d.isIterable(e)) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      let a = {}, l, u;
      for (const c of e) {
        if (!d.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = c[0]] = (l = a[u]) ? d.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1];
      }
      o(a, t);
    } else
      e != null && i(t, e, s);
    return this;
  }
  get(e, t) {
<<<<<<< HEAD
    if (e = ie(e), e) {
      const s = f.findKey(this, e);
=======
    if (e = ae(e), e) {
      const s = d.findKey(this, e);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      if (s) {
        const r = this[s];
        if (!t)
          return r;
        if (t === !0)
<<<<<<< HEAD
          return bs(r);
        if (f.isFunction(t))
=======
          return Rs(r);
        if (d.isFunction(t))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
          return t.call(this, r, s);
        if (d.isRegExp(t))
          return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
<<<<<<< HEAD
    if (e = ie(e), e) {
      const s = f.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || $e(this, this[s], s, t)));
=======
    if (e = ae(e), e) {
      const s = d.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || Ie(this, this[s], s, t)));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let r = !1;
    function i(o) {
<<<<<<< HEAD
      if (o = ie(o), o) {
        const a = f.findKey(s, o);
        a && (!t || $e(s, s[a], a, t)) && (delete s[a], r = !0);
=======
      if (o = ae(o), o) {
        const a = d.findKey(s, o);
        a && (!t || Ie(s, s[a], a, t)) && (delete s[a], r = !0);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      }
    }
    return d.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    const t = Object.keys(this);
    let s = t.length, r = !1;
    for (; s--; ) {
      const i = t[s];
<<<<<<< HEAD
      (!e || $e(this, this[i], i, e, !0)) && (delete this[i], r = !0);
=======
      (!e || Ie(this, this[i], i, e, !0)) && (delete this[i], r = !0);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }
    return r;
  }
  normalize(e) {
    const t = this, s = {};
    return d.forEach(this, (r, i) => {
      const o = d.findKey(s, i);
      if (o) {
<<<<<<< HEAD
        t[o] = be(r), delete t[i];
        return;
      }
      const a = e ? ws(i) : String(i).trim();
      a !== i && delete t[i], t[a] = be(r), s[a] = !0;
=======
        t[o] = xe(r), delete t[i];
        return;
      }
      const a = e ? Cs(i) : String(i).trim();
      a !== i && delete t[i], t[a] = xe(r), s[a] = !0;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const s = (this[ot] = this[ot] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = ie(o);
      s[a] || (xs(r, o), s[a] = !0);
=======
    const s = (this[lt] = this[lt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = ae(o);
      s[a] || (Es(r, o), s[a] = !0);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }
    return d.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
<<<<<<< HEAD
_.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(_.prototype, ({ value: n }, e) => {
=======
D.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(D.prototype, ({ value: n }, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(s) {
      this[t] = s;
    }
  };
});
<<<<<<< HEAD
f.freezeMethods(_);
function Ie(n, e) {
  const t = this || de, s = e || t, r = _.from(s.headers);
=======
d.freezeMethods(D);
function _e(n, e) {
  const t = this || ge, s = e || t, r = D.from(s.headers);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let i = s.data;
  return d.forEach(n, function(a) {
    i = a.call(t, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
<<<<<<< HEAD
function qt(n) {
  return !!(n && n.__CANCEL__);
}
function se(n, e, t) {
  S.call(this, n ?? "canceled", S.ERR_CANCELED, e, t), this.name = "CanceledError";
}
f.inherits(se, S, {
  __CANCEL__: !0
});
function Kt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new S(
    "Request failed with status code " + t.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
=======
function Wt(n) {
  return !!(n && n.__CANCEL__);
}
function re(n, e, t) {
  x.call(this, n ?? "canceled", x.ERR_CANCELED, e, t), this.name = "CanceledError";
}
d.inherits(re, x, {
  __CANCEL__: !0
});
function Gt(n, e, t) {
  const s = t.config.validateStatus;
  !t.status || !s || s(t.status) ? n(t) : e(new x(
    "Request failed with status code " + t.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    t.config,
    t.request,
    t
  ));
}
<<<<<<< HEAD
function Rs(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function Os(n, e) {
=======
function Ls(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function Ns(n, e) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  n = n || 10;
  const t = new Array(n), s = new Array(n);
  let r = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), c = s[i];
    o || (o = u), t[r] = l, s[r] = u;
<<<<<<< HEAD
    let p = i, d = 0;
    for (; p !== r; )
      d += t[p++], p = p % n;
    if (r = (r + 1) % n, r === i && (i = (i + 1) % n), u - o < e)
      return;
    const y = c && u - c;
    return y ? Math.round(d * 1e3 / y) : void 0;
  };
}
function Cs(n, e) {
=======
    let p = i, f = 0;
    for (; p !== r; )
      f += t[p++], p = p % n;
    if (r = (r + 1) % n, r === i && (i = (i + 1) % n), u - o < e)
      return;
    const b = c && u - c;
    return b ? Math.round(f * 1e3 / b) : void 0;
  };
}
function Ps(n, e) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
const xe = (n, e, t = 3) => {
  let s = 0;
  const r = Os(50, 250);
  return Cs((i) => {
=======
const Oe = (n, e, t = 3) => {
  let s = 0;
  const r = Ns(50, 250);
  return Ps((i) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}, at = (n, e) => {
=======
}, ut = (n, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const t = n != null;
  return [(s) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: s
  }), e[1]];
<<<<<<< HEAD
}, lt = (n) => (...e) => f.asap(() => n(...e)), Es = k.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, k.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(k.origin),
  k.navigator && /(msie|trident)/i.test(k.navigator.userAgent)
) : () => !0, Ls = k.hasStandardBrowserEnv ? (
=======
}, ct = (n) => (...e) => d.asap(() => n(...e)), Ts = $.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, $.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL($.origin),
  $.navigator && /(msie|trident)/i.test($.navigator.userAgent)
) : () => !0, vs = $.hasStandardBrowserEnv ? (
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
function Ns(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Ts(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function zt(n, e, t) {
  let s = !Ns(e);
  return n && (s || t == !1) ? Ts(n, e) : e;
}
const ut = (n) => n instanceof _ ? { ...n } : n;
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
=======
function As(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function ks(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Xt(n, e, t) {
  let s = !As(e);
  return n && (s || t == !1) ? ks(n, e) : e;
}
const ft = (n) => n instanceof D ? { ...n } : n;
function Q(n, e) {
  e = e || {};
  const t = {};
  function s(u, c, p, f) {
    return d.isPlainObject(u) && d.isPlainObject(c) ? d.merge.call({ caseless: f }, u, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function r(u, c, p, f) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(u))
        return s(void 0, u, p, f);
    } else return s(u, c, p, f);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  function i(u, c) {
    if (!d.isUndefined(c))
      return s(void 0, c);
  }
  function o(u, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(u))
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
<<<<<<< HEAD
    headers: (u, c, p) => r(ut(u), ut(c), p, !0)
  };
  return f.forEach(Object.keys({ ...n, ...e }), function(c) {
    const p = l[c] || r, d = p(n[c], e[c], c);
    f.isUndefined(d) && p !== a || (t[c] = d);
  }), t;
}
const Jt = (n) => {
  const e = G({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = _.from(o), e.url = Ht(zt(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), f.isFormData(t)) {
    if (k.hasStandardBrowserEnv || k.hasStandardBrowserWebWorkerEnv)
=======
    headers: (u, c, p) => r(ft(u), ft(c), p, !0)
  };
  return d.forEach(Object.keys({ ...n, ...e }), function(c) {
    const p = l[c] || r, f = p(n[c], e[c], c);
    d.isUndefined(f) && p !== a || (t[c] = f);
  }), t;
}
const Yt = (n) => {
  const e = Q({}, n);
  let { data: t, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = D.from(o), e.url = qt(Xt(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), d.isFormData(t)) {
    if ($.hasStandardBrowserEnv || $.hasStandardBrowserWebWorkerEnv)
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      o.setContentType(void 0);
    else if (d.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([c, p]) => {
        u.includes(c.toLowerCase()) && o.set(c, p);
      });
    }
  }
<<<<<<< HEAD
  if (k.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(e)), s || s !== !1 && Es(e.url))) {
    const l = r && i && Ls.read(i);
    l && o.set(r, l);
  }
  return e;
}, Ps = typeof XMLHttpRequest < "u", vs = Ps && function(n) {
  return new Promise(function(t, s) {
    const r = Jt(n);
    let i = r.data;
    const o = _.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = r, c, p, d, y, h;
    function g() {
      y && y(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function x() {
      if (!m)
        return;
      const T = _.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), E = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: T,
=======
  if ($.hasStandardBrowserEnv && (s && d.isFunction(s) && (s = s(e)), s || s !== !1 && Ts(e.url))) {
    const l = r && i && vs.read(i);
    l && o.set(r, l);
  }
  return e;
}, Fs = typeof XMLHttpRequest < "u", $s = Fs && function(n) {
  return new Promise(function(t, s) {
    const r = Yt(n);
    let i = r.data;
    const o = D.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = r, c, p, f, b, h;
    function m() {
      b && b(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function R() {
      if (!g)
        return;
      const P = D.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), L = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: P,
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        config: n,
        request: m
      };
<<<<<<< HEAD
      Kt(function(C) {
        t(C), g();
      }, function(C) {
        s(C), g();
      }, E), m = null;
    }
    "onloadend" in m ? m.onloadend = x : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, m.onabort = function() {
      m && (s(new S("Request aborted", S.ECONNABORTED, n, m)), m = null);
    }, m.onerror = function(b) {
      const E = b && b.message ? b.message : "Network Error", P = new S(E, S.ERR_NETWORK, n, m);
      P.event = b || null, s(P), m = null;
    }, m.ontimeout = function() {
      let b = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const E = r.transitional || Vt;
      r.timeoutErrorMessage && (b = r.timeoutErrorMessage), s(new S(
        b,
        E.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        n,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && f.forEach(o.toJSON(), function(b, E) {
      m.setRequestHeader(E, b);
    }), f.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), a && a !== "json" && (m.responseType = r.responseType), u && ([d, h] = xe(u, !0), m.addEventListener("progress", d)), l && m.upload && ([p, y] = xe(l), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", y)), (r.cancelToken || r.signal) && (c = (T) => {
      m && (s(!T || T.type ? new se(null, n, m) : T), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const O = Rs(r.url);
    if (O && k.protocols.indexOf(O) === -1) {
      s(new S("Unsupported protocol " + O + ":", S.ERR_BAD_REQUEST, n));
=======
      Gt(function(E) {
        t(E), m();
      }, function(E) {
        s(E), m();
      }, L), g = null;
    }
    "onloadend" in g ? g.onloadend = R : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, g.onabort = function() {
      g && (s(new x("Request aborted", x.ECONNABORTED, n, g)), g = null);
    }, g.onerror = function(S) {
      const L = S && S.message ? S.message : "Network Error", v = new x(L, x.ERR_NETWORK, n, g);
      v.event = S || null, s(v), g = null;
    }, g.ontimeout = function() {
      let S = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const L = r.transitional || zt;
      r.timeoutErrorMessage && (S = r.timeoutErrorMessage), s(new x(
        S,
        L.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        n,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && d.forEach(o.toJSON(), function(S, L) {
      g.setRequestHeader(L, S);
    }), d.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), u && ([f, h] = Oe(u, !0), g.addEventListener("progress", f)), l && g.upload && ([p, b] = Oe(l), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (c = (P) => {
      g && (s(!P || P.type ? new re(null, n, g) : P), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const C = Ls(r.url);
    if (C && $.protocols.indexOf(C) === -1) {
      s(new x("Unsupported protocol " + C + ":", x.ERR_BAD_REQUEST, n));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      return;
    }
    m.send(i || null);
  });
<<<<<<< HEAD
}, As = (n, e) => {
=======
}, Is = (n, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, a();
        const c = u instanceof Error ? u : this.reason;
<<<<<<< HEAD
        s.abort(c instanceof S ? c : new se(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
=======
        s.abort(c instanceof x ? c : new re(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new x(`timeout ${e} of ms exceeded`, x.ETIMEDOUT));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = s;
    return l.unsubscribe = () => d.asap(a), l;
  }
<<<<<<< HEAD
}, Fs = function* (n, e) {
=======
}, _s = function* (n, e) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let s = 0, r;
  for (; s < t; )
    r = s + e, yield n.slice(s, r), s = r;
<<<<<<< HEAD
}, ks = async function* (n, e) {
  for await (const t of $s(n))
    yield* Fs(t, e);
}, $s = async function* (n) {
=======
}, Ds = async function* (n, e) {
  for await (const t of js(n))
    yield* _s(t, e);
}, js = async function* (n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}, ct = (n, e, t, s) => {
  const r = ks(n, e);
=======
}, dt = (n, e, t, s) => {
  const r = Ds(n, e);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
          let d = i += p;
          t(d);
=======
          let f = i += p;
          t(f);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}, ft = 64 * 1024, { isFunction: ge } = f, Is = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(f.global), {
  ReadableStream: dt,
  TextEncoder: ht
} = f.global, pt = (n, ...e) => {
=======
}, ht = 64 * 1024, { isFunction: be } = d, Us = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(d.global), {
  ReadableStream: pt,
  TextEncoder: gt
} = d.global, mt = (n, ...e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
<<<<<<< HEAD
}, _s = (n) => {
  n = f.merge.call({
    skipUndefined: !0
  }, Is, n);
  const { fetch: e, Request: t, Response: s } = n, r = e ? ge(e) : typeof fetch == "function", i = ge(t), o = ge(s);
  if (!r)
    return !1;
  const a = r && ge(dt), l = r && (typeof ht == "function" ? /* @__PURE__ */ ((h) => (g) => h.encode(g))(new ht()) : async (h) => new Uint8Array(await new t(h).arrayBuffer())), u = i && a && pt(() => {
    let h = !1;
    const g = new t(k.origin, {
      body: new dt(),
=======
}, Bs = (n) => {
  n = d.merge.call({
    skipUndefined: !0
  }, Us, n);
  const { fetch: e, Request: t, Response: s } = n, r = e ? be(e) : typeof fetch == "function", i = be(t), o = be(s);
  if (!r)
    return !1;
  const a = r && be(pt), l = r && (typeof gt == "function" ? /* @__PURE__ */ ((h) => (m) => h.encode(m))(new gt()) : async (h) => new Uint8Array(await new t(h).arrayBuffer())), u = i && a && mt(() => {
    let h = !1;
    const m = new t($.origin, {
      body: new pt(),
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
<<<<<<< HEAD
    return h && !g;
  }), c = o && a && pt(() => f.isReadableStream(new s("").body)), p = {
    stream: c && ((h) => h.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (g, m) => {
      let x = g && g[h];
      if (x)
        return x.call(g);
      throw new S(`Response type '${h}' is not supported`, S.ERR_NOT_SUPPORT, m);
    });
  });
  const d = async (h) => {
    if (h == null)
      return 0;
    if (f.isBlob(h))
      return h.size;
    if (f.isSpecCompliantForm(h))
      return (await new t(k.origin, {
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
      data: x,
      signal: O,
      cancelToken: T,
      timeout: b,
      onDownloadProgress: E,
      onUploadProgress: P,
      responseType: C,
      headers: w,
      withCredentials: L = "same-origin",
      fetchOptions: N
    } = Jt(h), X = e || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let Y = As([O, T && T.toAbortSignal()], b), B = null;
    const j = Y && Y.unsubscribe && (() => {
      Y.unsubscribe();
    });
    let z;
    try {
      if (P && u && m !== "get" && m !== "head" && (z = await y(w, x)) !== 0) {
        let K = new t(g, {
          method: "POST",
          body: x,
          duplex: "half"
        }), Z;
        if (f.isFormData(x) && (Z = K.headers.get("content-type")) && w.setContentType(Z), K.body) {
          const [ke, pe] = at(
            z,
            xe(lt(P))
          );
          x = ct(K.body, ft, ke, pe);
        }
      }
      f.isString(L) || (L = L ? "include" : "omit");
      const D = i && "credentials" in t.prototype, F = {
        ...N,
        signal: Y,
        method: m.toUpperCase(),
        headers: w.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: D ? L : void 0
      };
      B = i && new t(g, F);
      let $ = await (i ? X(B, N) : X(g, F));
      const re = c && (C === "stream" || C === "response");
      if (c && (E || re && j)) {
        const K = {};
        ["status", "statusText", "headers"].forEach((Ze) => {
          K[Ze] = $[Ze];
        });
        const Z = f.toFiniteNumber($.headers.get("content-length")), [ke, pe] = E && at(
          Z,
          xe(lt(E), !0)
        ) || [];
        $ = new s(
          ct($.body, ft, ke, () => {
            pe && pe(), j && j();
          }),
          K
        );
      }
      C = C || "text";
      let he = await p[f.findKey(p, C) || "text"]($, h);
      return !re && j && j(), await new Promise((K, Z) => {
        Kt(K, Z, {
          data: he,
          headers: _.from($.headers),
          status: $.status,
          statusText: $.statusText,
          config: h,
          request: B
        });
      });
    } catch (D) {
      throw j && j(), D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, h, B),
        {
          cause: D.cause || D
        }
      ) : S.from(D, D && D.code, h, B);
    }
  };
}, js = /* @__PURE__ */ new Map(), Wt = (n) => {
=======
    return h && !m;
  }), c = o && a && mt(() => d.isReadableStream(new s("").body)), p = {
    stream: c && ((h) => h.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !p[h] && (p[h] = (m, g) => {
      let R = m && m[h];
      if (R)
        return R.call(m);
      throw new x(`Response type '${h}' is not supported`, x.ERR_NOT_SUPPORT, g);
    });
  });
  const f = async (h) => {
    if (h == null)
      return 0;
    if (d.isBlob(h))
      return h.size;
    if (d.isSpecCompliantForm(h))
      return (await new t($.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(h) || d.isArrayBuffer(h))
      return h.byteLength;
    if (d.isURLSearchParams(h) && (h = h + ""), d.isString(h))
      return (await l(h)).byteLength;
  }, b = async (h, m) => {
    const g = d.toFiniteNumber(h.getContentLength());
    return g ?? f(m);
  };
  return async (h) => {
    let {
      url: m,
      method: g,
      data: R,
      signal: C,
      cancelToken: P,
      timeout: S,
      onDownloadProgress: L,
      onUploadProgress: v,
      responseType: E,
      headers: w,
      withCredentials: N = "same-origin",
      fetchOptions: T
    } = Yt(h), B = e || fetch;
    E = E ? (E + "").toLowerCase() : "text";
    let ie = Is([C, P && P.toAbortSignal()], S), W = null;
    const j = ie && ie.unsubscribe && (() => {
      ie.unsubscribe();
    });
    let J;
    try {
      if (v && u && g !== "get" && g !== "head" && (J = await b(w, R)) !== 0) {
        let V = new t(m, {
          method: "POST",
          body: R,
          duplex: "half"
        }), Z;
        if (d.isFormData(R) && (Z = V.headers.get("content-type")) && w.setContentType(Z), V.body) {
          const [$e, me] = ut(
            J,
            Oe(ct(v))
          );
          R = dt(V.body, ht, $e, me);
        }
      }
      d.isString(N) || (N = N ? "include" : "omit");
      const I = i && "credentials" in t.prototype, oe = {
        ...T,
        signal: ie,
        method: g.toUpperCase(),
        headers: w.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: I ? N : void 0
      };
      W = i && new t(m, oe);
      let A = await (i ? B(W, T) : B(m, oe));
      const M = c && (E === "stream" || E === "response");
      if (c && (L || M && j)) {
        const V = {};
        ["status", "statusText", "headers"].forEach((et) => {
          V[et] = A[et];
        });
        const Z = d.toFiniteNumber(A.headers.get("content-length")), [$e, me] = L && ut(
          Z,
          Oe(ct(L), !0)
        ) || [];
        A = new s(
          dt(A.body, ht, $e, () => {
            me && me(), j && j();
          }),
          V
        );
      }
      E = E || "text";
      let G = await p[d.findKey(p, E) || "text"](A, h);
      return !M && j && j(), await new Promise((V, Z) => {
        Gt(V, Z, {
          data: G,
          headers: D.from(A.headers),
          status: A.status,
          statusText: A.statusText,
          config: h,
          request: W
        });
      });
    } catch (I) {
      throw j && j(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
        new x("Network Error", x.ERR_NETWORK, h, W),
        {
          cause: I.cause || I
        }
      ) : x.from(I, I && I.code, h, W);
    }
  };
}, Vs = /* @__PURE__ */ new Map(), Qt = (n) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  let e = n && n.env || {};
  const { fetch: t, Request: s, Response: r } = e, i = [
    s,
    r,
    t
  ];
<<<<<<< HEAD
  let o = i.length, a = o, l, u, c = js;
  for (; a--; )
    l = i[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : _s(e)), c = u;
  return u;
};
Wt();
const We = {
  http: es,
  xhr: vs,
  fetch: {
    get: Wt
  }
};
f.forEach(We, (n, e) => {
=======
  let o = i.length, a = o, l, u, c = Vs;
  for (; a--; )
    l = i[a], u = c.get(l), u === void 0 && c.set(l, u = a ? /* @__PURE__ */ new Map() : Bs(e)), c = u;
  return u;
};
Qt();
const Ye = {
  http: rs,
  xhr: $s,
  fetch: {
    get: Qt
  }
};
d.forEach(Ye, (n, e) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
<<<<<<< HEAD
const gt = (n) => `- ${n}`, Ds = (n) => f.isFunction(n) || n === null || n === !1;
function Us(n, e) {
  n = f.isArray(n) ? n : [n];
=======
const bt = (n) => `- ${n}`, Hs = (n) => d.isFunction(n) || n === null || n === !1;
function Ms(n, e) {
  n = d.isArray(n) ? n : [n];
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const { length: t } = n;
  let s, r;
  const i = {};
  for (let o = 0; o < t; o++) {
    s = n[o];
    let a;
<<<<<<< HEAD
    if (r = s, !Ds(s) && (r = We[(a = String(s)).toLowerCase()], r === void 0))
      throw new S(`Unknown adapter '${a}'`);
    if (r && (f.isFunction(r) || (r = r.get(e))))
=======
    if (r = s, !Hs(s) && (r = Ye[(a = String(s)).toLowerCase()], r === void 0))
      throw new x(`Unknown adapter '${a}'`);
    if (r && (d.isFunction(r) || (r = r.get(e))))
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      break;
    i[a || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(i).map(
      ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
<<<<<<< HEAD
` + o.map(gt).join(`
`) : " " + gt(o[0]) : "as no adapter specified";
    throw new S(
=======
` + o.map(bt).join(`
`) : " " + bt(o[0]) : "as no adapter specified";
    throw new x(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
<<<<<<< HEAD
const Gt = {
=======
const Zt = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
<<<<<<< HEAD
  getAdapter: Us,
=======
  getAdapter: Ms,
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
<<<<<<< HEAD
  adapters: We
};
function _e(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new se(null, n);
}
function mt(n) {
  return _e(n), n.headers = _.from(n.headers), n.data = Ie.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Gt.getAdapter(n.adapter || de.adapter, n)(n).then(function(s) {
    return _e(n), s.data = Ie.call(
      n,
      n.transformResponse,
      s
    ), s.headers = _.from(s.headers), s;
  }, function(s) {
    return qt(s) || (_e(n), s && s.response && (s.response.data = Ie.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = _.from(s.response.headers))), Promise.reject(s);
  });
}
const Xt = "1.13.1", Ae = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Ae[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const yt = {};
Ae.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + Xt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new S(
        r(o, " has been removed" + (t ? " in " + t : "")),
        S.ERR_DEPRECATED
      );
    return t && !yt[o] && (yt[o] = !0, console.warn(
=======
  adapters: Ye
};
function De(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new re(null, n);
}
function yt(n) {
  return De(n), n.headers = D.from(n.headers), n.data = _e.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Zt.getAdapter(n.adapter || ge.adapter, n)(n).then(function(s) {
    return De(n), s.data = _e.call(
      n,
      n.transformResponse,
      s
    ), s.headers = D.from(s.headers), s;
  }, function(s) {
    return Wt(s) || (De(n), s && s.response && (s.response.data = _e.call(
      n,
      n.transformResponse,
      s.response
    ), s.response.headers = D.from(s.response.headers))), Promise.reject(s);
  });
}
const en = "1.13.2", ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  ke[n] = function(s) {
    return typeof s === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const St = {};
ke.transitional = function(e, t, s) {
  function r(i, o) {
    return "[Axios v" + en + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new x(
        r(o, " has been removed" + (t ? " in " + t : "")),
        x.ERR_DEPRECATED
      );
    return t && !St[o] && (St[o] = !0, console.warn(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      r(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
<<<<<<< HEAD
Ae.spelling = function(e) {
  return (t, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function Bs(n, e, t) {
  if (typeof n != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
=======
ke.spelling = function(e) {
  return (t, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function Ks(n, e, t) {
  if (typeof n != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const s = Object.keys(n);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
    if (o) {
      const a = n[i], l = a === void 0 || o(a, i, n);
      if (l !== !0)
<<<<<<< HEAD
        throw new S("option " + i + " must be " + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const Se = {
  assertOptions: Bs,
  validators: Ae
}, V = Se.validators;
let W = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new it(),
      response: new it()
=======
        throw new x("option " + i + " must be " + l, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new x("Unknown option " + i, x.ERR_BAD_OPTION);
  }
}
const we = {
  assertOptions: Ks,
  validators: ke
}, K = we.validators;
let Y = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new at(),
      response: new at()
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = G(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && Se.assertOptions(s, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), r != null && (f.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : Se.assertOptions(r, {
      encode: V.function,
      serialize: V.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Se.assertOptions(t, {
      baseUrl: V.spelling("baseURL"),
      withXsrfToken: V.spelling("withXSRFToken")
=======
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Q(this.defaults, t);
    const { transitional: s, paramsSerializer: r, headers: i } = t;
    s !== void 0 && we.assertOptions(s, {
      silentJSONParsing: K.transitional(K.boolean),
      forcedJSONParsing: K.transitional(K.boolean),
      clarifyTimeoutError: K.transitional(K.boolean)
    }, !1), r != null && (d.isFunction(r) ? t.paramsSerializer = {
      serialize: r
    } : we.assertOptions(r, {
      encode: K.function,
      serialize: K.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), we.assertOptions(t, {
      baseUrl: K.spelling("baseURL"),
      withXsrfToken: K.spelling("withXSRFToken")
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && d.merge(
      i.common,
      i[t.method]
    );
    i && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
<<<<<<< HEAD
    ), t.headers = _.concat(o, i);
=======
    ), t.headers = D.concat(o, i);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
<<<<<<< HEAD
    let c, p = 0, d;
    if (!l) {
      const h = [mt.bind(this), void 0];
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
=======
    let c, p = 0, f;
    if (!l) {
      const h = [yt.bind(this), void 0];
      for (h.unshift(...a), h.push(...u), f = h.length, c = Promise.resolve(t); p < f; )
        c = c.then(h[p++], h[p++]);
      return c;
    }
    f = a.length;
    let b = t;
    for (; p < f; ) {
      const h = a[p++], m = a[p++];
      try {
        b = h(b);
      } catch (g) {
        m.call(this, g);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        break;
      }
    }
    try {
<<<<<<< HEAD
      c = mt.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, d = u.length; p < d; )
=======
      c = yt.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, f = u.length; p < f; )
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(e) {
<<<<<<< HEAD
    e = G(this.defaults, e);
    const t = zt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ht(t, e.params, e.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(e) {
  W.prototype[e] = function(t, s) {
    return this.request(G(s || {}, {
=======
    e = Q(this.defaults, e);
    const t = Xt(e.baseURL, e.url, e.allowAbsoluteUrls);
    return qt(t, e.params, e.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(e) {
  Y.prototype[e] = function(t, s) {
    return this.request(Q(s || {}, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      method: e,
      url: t,
      data: (s || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(e) {
  function t(s) {
    return function(i, o, a) {
<<<<<<< HEAD
      return this.request(G(a || {}, {
=======
      return this.request(Q(a || {}, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
<<<<<<< HEAD
  W.prototype[e] = t(), W.prototype[e + "Form"] = t(!0);
});
let Hs = class Yt {
=======
  Y.prototype[e] = t(), Y.prototype[e + "Form"] = t(!0);
});
let qs = class tn {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
      s.reason || (s.reason = new se(i, o, a), t(s.reason));
=======
      s.reason || (s.reason = new re(i, o, a), t(s.reason));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
      token: new Yt(function(r) {
=======
      token: new tn(function(r) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        e = r;
      }),
      cancel: e
    };
  }
};
<<<<<<< HEAD
function Vs(n) {
=======
function zs(n) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  return function(t) {
    return n.apply(null, t);
  };
}
<<<<<<< HEAD
function Ms(n) {
  return f.isObject(n) && n.isAxiosError === !0;
}
const qe = {
=======
function Js(n) {
  return d.isObject(n) && n.isAxiosError === !0;
}
const ze = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
Object.entries(qe).forEach(([n, e]) => {
  qe[e] = n;
});
function Zt(n) {
  const e = new W(n), t = Pt(W.prototype.request, e);
  return f.extend(t, W.prototype, e, { allOwnKeys: !0 }), f.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return Zt(G(n, r));
  }, t;
}
const v = Zt(de);
v.Axios = W;
v.CanceledError = se;
v.CancelToken = Hs;
v.isCancel = qt;
v.VERSION = Xt;
v.toFormData = ve;
v.AxiosError = S;
v.Cancel = v.CanceledError;
v.all = function(e) {
  return Promise.all(e);
};
v.spread = Vs;
v.isAxiosError = Ms;
v.mergeConfig = G;
v.AxiosHeaders = _;
v.formToJSON = (n) => Mt(f.isHTMLForm(n) ? new FormData(n) : n);
v.getAdapter = Gt.getAdapter;
v.HttpStatusCode = qe;
v.default = v;
const {
  Axios: ei,
  AxiosError: ti,
  CanceledError: ni,
  isCancel: si,
  CancelToken: ri,
  VERSION: ii,
  all: oi,
  Cancel: ai,
  isAxiosError: li,
  spread: ui,
  toFormData: ci,
  AxiosHeaders: fi,
  HttpStatusCode: di,
  formToJSON: hi,
  getAdapter: pi,
  mergeConfig: gi
} = v, Ge = v.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Ge.interceptors.request.use((n) => n);
Ge.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const qs = (n) => {
  const [e, t] = q(null), [s, r] = q(null), [i, o] = q(!1), { url: a, method: l, headers: u, data: c, mock: p, auto: d = !0 } = n, y = p ? (g) => pn(g.url, g.method, g.data) : (g) => Ge(g), h = async () => {
    o(!0);
    try {
      console.log("API request:", a, l, c);
      const g = await y({ url: a, method: l, headers: u, data: c, ...l === "GET" ? { params: c } : { data: c } });
      console.log("API response: status", g.data ? "ok" : "error"), t(g.data), r(null);
    } catch (g) {
      console.error("API request error:", g), r(g?.message ? g : null), t(null);
=======
Object.entries(ze).forEach(([n, e]) => {
  ze[e] = n;
});
function nn(n) {
  const e = new Y(n), t = Ft(Y.prototype.request, e);
  return d.extend(t, Y.prototype, e, { allOwnKeys: !0 }), d.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(r) {
    return nn(Q(n, r));
  }, t;
}
const k = nn(ge);
k.Axios = Y;
k.CanceledError = re;
k.CancelToken = qs;
k.isCancel = Wt;
k.VERSION = en;
k.toFormData = Ae;
k.AxiosError = x;
k.Cancel = k.CanceledError;
k.all = function(e) {
  return Promise.all(e);
};
k.spread = zs;
k.isAxiosError = Js;
k.mergeConfig = Q;
k.AxiosHeaders = D;
k.formToJSON = (n) => Jt(d.isHTMLForm(n) ? new FormData(n) : n);
k.getAdapter = Zt.getAdapter;
k.HttpStatusCode = ze;
k.default = k;
const {
  Axios: ni,
  AxiosError: si,
  CanceledError: ri,
  isCancel: ii,
  CancelToken: oi,
  VERSION: ai,
  all: li,
  Cancel: ui,
  isAxiosError: ci,
  spread: fi,
  toFormData: di,
  AxiosHeaders: hi,
  HttpStatusCode: pi,
  formToJSON: gi,
  getAdapter: mi,
  mergeConfig: bi
} = k, Qe = k.create({
  // baseURL: "https://apig2g-t.meches.gov.il:13443",//https://apig2g-t.meches.gov.il:13443/test/consume/meches/dealfile/rest/webdeclaration/v1
  withCredentials: !0
});
Qe.interceptors.request.use((n) => n);
Qe.interceptors.response.use(
  (n) => n,
  (n) => Promise.reject(n)
);
const Ws = (n) => {
  const [e, t] = z(null), [s, r] = z(null), [i, o] = z(!1), { url: a, method: l, data: u, mock: c, auto: p = !0 } = n, f = c ? (h) => yn(h.url, h.method, h.data) : (h) => Qe(h), b = async () => {
    o(!0);
    try {
      console.log("API request:", a, l, u);
      const h = await f({ url: a, method: l, data: u, ...l === "GET" ? { params: u } : { data: u } });
      console.log("API response: status", h.data ? "ok" : "error"), t(h.data), r(null);
    } catch (h) {
      console.error("API request error:", h), r(h?.message ? h : null), t(null);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    } finally {
      o(!1);
    }
  };
<<<<<<< HEAD
  return we(() => {
    d && h();
  }, [d]), {
=======
  return Re(() => {
    p && b();
  }, [p]), {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    response: {
      data: e,
      error: s,
      status: i ? "pending" : s ? "error" : "success"
    },
<<<<<<< HEAD
    refetch: h
  };
}, mi = ({ tableName: n }) => {
  const e = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${n}`, { response: t, refetch: s } = qs({ url: e, method: "GET" });
=======
    refetch: b
  };
}, yi = ({ tableName: n }) => {
  const e = `/shaarolami/CustomspilotWeb/SystemTables/api/GetTableData?tableName=${n}`, { response: t, refetch: s } = Ws({ url: e, method: "GET" });
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  return {
    response: t,
    refetch: s
  };
<<<<<<< HEAD
}, yi = ({ fields: n }) => /* @__PURE__ */ R("div", { className: "fields-grid", children: n.map((e, t) => /* @__PURE__ */ U("div", { className: "field-item", children: [
  /* @__PURE__ */ R("p", { className: "field-label", children: e.label }),
  /* @__PURE__ */ R("p", { className: `field-value strong ${e.statusColor}`, children: e.value })
] }, t)) }), Ks = "link-module__link___W6noI", zs = {
  link: Ks
}, Js = ({ text: n, onClick: e }) => /* @__PURE__ */ R("h2", { className: zs.link, onClick: e, children: n }), bi = ({ children: n }) => /* @__PURE__ */ R(
=======
}, Si = ({ fields: n }) => /* @__PURE__ */ O("div", { className: "fields-grid", children: n.map((e, t) => /* @__PURE__ */ U("div", { className: "field-item", children: [
  /* @__PURE__ */ O("p", { className: "field-label", children: e.label }),
  /* @__PURE__ */ O("p", { className: `field-value strong ${e.statusColor}`, children: e.value })
] }, t)) }), Gs = "link-module__link___W6noI", Xs = {
  link: Gs
}, Ys = ({ text: n, onClick: e }) => /* @__PURE__ */ O("h2", { className: Xs.link, onClick: e, children: n }), xi = ({ children: n }) => /* @__PURE__ */ O(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
), Ws = "title-module__titleContainer___wZFgq", Gs = "title-module__title___wc-C2", Xs = "title-module__subTitle___uy5--", je = {
  titleContainer: Ws,
  title: Gs,
  subTitle: Xs
}, Ys = ({ title: n, subTitle: e }) => /* @__PURE__ */ U("div", { className: je.titleContainer, children: [
  /* @__PURE__ */ R("h1", { className: je.title, children: n }),
  e !== "" ? /* @__PURE__ */ R("h2", { className: je.subTitle, children: e }) : null
] }), Zs = {
=======
), Qs = "title-module__titleContainer___wZFgq", Zs = "title-module__title___wc-C2", er = "title-module__subTitle___uy5--", je = {
  titleContainer: Qs,
  title: Zs,
  subTitle: er
}, tr = ({ title: n, subTitle: e }) => /* @__PURE__ */ U("div", { className: je.titleContainer, children: [
  /* @__PURE__ */ O("h1", { className: je.title, children: n }),
  e !== "" ? /* @__PURE__ */ O("h2", { className: je.subTitle, children: e }) : null
] }), y = (n) => typeof n == "string", le = () => {
  let n, e;
  const t = new Promise((s, r) => {
    n = s, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}, xt = (n) => n == null ? "" : "" + n, nr = (n, e, t) => {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, sr = /###/g, wt = (n) => n && n.indexOf("###") > -1 ? n.replace(sr, ".") : n, Rt = (n) => !n || y(n), ce = (n, e, t) => {
  const s = y(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (Rt(n)) return {};
    const i = wt(s[r]);
    !n[i] && t && (n[i] = new t()), Object.prototype.hasOwnProperty.call(n, i) ? n = n[i] : n = {}, ++r;
  }
  return Rt(n) ? {} : {
    obj: n,
    k: wt(s[r])
  };
}, Ot = (n, e, t) => {
  const {
    obj: s,
    k: r
  } = ce(n, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[r] = t;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), a = ce(n, o, Object);
  for (; a.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = ce(n, o, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = t;
}, rr = (n, e, t, s) => {
  const {
    obj: r,
    k: i
  } = ce(n, e, Object);
  r[i] = r[i] || [], r[i].push(t);
}, Ce = (n, e) => {
  const {
    obj: t,
    k: s
  } = ce(n, e);
  if (t)
    return t[s];
}, ir = (n, e, t) => {
  const s = Ce(n, t);
  return s !== void 0 ? s : Ce(e, t);
}, sn = (n, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? y(n[s]) || n[s] instanceof String || y(e[s]) || e[s] instanceof String ? t && (n[s] = e[s]) : sn(n[s], e[s], t) : n[s] = e[s]);
  return n;
}, ee = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var or = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const ar = (n) => y(n) ? n.replace(/[&<>"'\/]/g, (e) => or[e]) : n;
class lr {
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
const ur = [" ", ",", "?", "!", ";"], cr = new lr(20), fr = (n, e, t) => {
  e = e || "", t = t || "";
  const s = ur.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = cr.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(n);
  if (!i) {
    const o = n.indexOf(t);
    o > 0 && !r.test(n.substring(0, o)) && (i = !0);
  }
  return i;
}, Je = function(n, e) {
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
}, Ee = (n) => n && n.replace("_", "-"), dr = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
class Re {
=======
class Le {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
<<<<<<< HEAD
    this.prefix = t.prefix || "i18next:", this.logger = e || Zs, this.options = t, this.debug = t.debug;
=======
    this.prefix = t.prefix || "i18next:", this.logger = e || dr, this.options = t, this.debug = t.debug;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
    return r && !this.debug ? null : (y(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
<<<<<<< HEAD
    return new Re(this.logger, {
=======
    return new Le(this.logger, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
<<<<<<< HEAD
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Re(this.logger, e);
  }
}
var M = new Re();
=======
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Le(this.logger, e);
  }
}
var q = new Le();
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
function oe() {
  let n, e;
  const t = new Promise((s, r) => {
    n = s, e = r;
  });
  return t.resolve = n, t.reject = e, t;
}
function bt(n) {
  return n == null ? "" : "" + n;
}
function Qs(n, e, t) {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}
function Xe(n, e, t) {
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
function St(n, e, t) {
  const {
    obj: s,
    k: r
  } = Xe(n, e, Object);
  s[r] = t;
}
function er(n, e, t, s) {
  const {
    obj: r,
    k: i
  } = Xe(n, e, Object);
  r[i] = r[i] || [], r[i].push(t);
}
function Oe(n, e) {
  const {
    obj: t,
    k: s
  } = Xe(n, e);
  if (t)
    return t[s];
}
function tr(n, e, t) {
  const s = Oe(n, t);
  return s !== void 0 ? s : Oe(e, t);
}
function Qt(n, e, t) {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? typeof n[s] == "string" || n[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (n[s] = e[s]) : Qt(n[s], e[s], t) : n[s] = e[s]);
  return n;
}
function Q(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var nr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function sr(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => nr[e]) : n;
}
const rr = [" ", ",", "?", "!", ";"];
function ir(n, e, t) {
  e = e || "", t = t || "";
  const s = rr.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = new RegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(n);
  if (!i) {
    const o = n.indexOf(t);
    o > 0 && !r.test(n.substring(0, o)) && (i = !0);
  }
  return i;
}
function Ce(n, e) {
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
      return u ? Ce(l, u, t) : void 0;
    }
    r = r[s[i]];
  }
  return r;
}
function Ee(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class wt extends Fe {
=======
class Ct extends Fe {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    let a = [e, t];
    s && typeof s != "string" && (a = a.concat(s)), s && typeof s == "string" && (a = a.concat(i ? s.split(i) : s)), e.indexOf(".") > -1 && (a = e.split("."));
    const l = Oe(this.data, a);
    return l || !o || typeof s != "string" ? l : Ce(this.data && this.data[e] && this.data[e][t], s, i);
=======
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], s && (Array.isArray(s) ? a.push(...s) : y(s) && i ? a.push(...s.split(i)) : a.push(s)));
    const l = Ce(this.data, a);
    return !l && !t && !s && e.indexOf(".") > -1 && (e = a[0], t = a[1], s = a.slice(2).join(".")), l || !o || !y(s) ? l : Je(this.data && this.data[e] && this.data[e][t], s, i);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  addResource(e, t, s, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, t];
<<<<<<< HEAD
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), St(this.data, a, r), i.silent || this.emit("added", e, t, s, r);
=======
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), Ot(this.data, a, r), i.silent || this.emit("added", e, t, s, r);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  addResources(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (y(s[i]) || Array.isArray(s[i])) && this.addResource(e, t, i, s[i], {
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
<<<<<<< HEAD
    let l = Oe(this.data, a) || {};
    r ? Qt(l, s, i) : l = {
      ...l,
      ...s
    }, St(this.data, a, l), o.silent || this.emit("added", e, t, s);
=======
    let l = Ce(this.data, a) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? sn(l, s, i) : l = {
      ...l,
      ...s
    }, Ot(this.data, a, l), o.silent || this.emit("added", e, t, s);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
var en = {
=======
var rn = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
const xt = {};
class Le extends Fe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Qs(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = M.create("translator");
=======
const Et = {};
class Ne extends Fe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), nr(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = q.create("translator");
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !ir(e, s, r);
=======
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !fr(e, s, r);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: y(i) ? [i] : i
        };
      const u = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(r);
    }
    return {
      key: e,
      namespaces: y(i) ? [i] : i
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
        const b = t.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${l}${b}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
<<<<<<< HEAD
          usedNS: l
        } : `${l}${b}${o}`;
=======
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${S}${o}`;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    let d = p && p.res;
    const y = p && p.usedKey || o, h = p && p.exactUsedKey || o, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, O = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (O && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof x == "string" && g === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const b = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, d, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return r ? (p.res = b, p) : b;
      }
      if (i) {
        const b = g === "[object Array]", E = b ? [] : {}, P = b ? h : y;
        for (const C in d)
          if (Object.prototype.hasOwnProperty.call(d, C)) {
            const w = `${P}${i}${C}`;
            E[C] = this.translate(w, {
              ...t,
              joinArrays: !1,
              ns: a
            }), E[C] === w && (E[C] = d[C]);
          }
        d = E;
      }
    } else if (O && typeof x == "string" && g === "[object Array]")
      d = d.join(x), d && (d = this.extendTranslation(d, e, t, s));
    else {
      let b = !1, E = !1;
      const P = t.count !== void 0 && typeof t.count != "string", C = Le.hasDefaultValue(t), w = P ? this.pluralResolver.getSuffix(u, t.count, t) : "", L = t.ordinal && P ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", N = t[`defaultValue${w}`] || t[`defaultValue${L}`] || t.defaultValue;
      !this.isValidLookup(d) && C && (b = !0, d = N), this.isValidLookup(d) || (E = !0, d = o);
      const Y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : d, B = C && N !== d && this.options.updateMissing;
      if (E || b || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", u, l, o, B ? N : d), i) {
          const F = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && z && z[0])
          for (let F = 0; F < z.length; F++)
            j.push(z[F]);
        else this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(t.lng || this.language) : j.push(t.lng || this.language);
        const D = (F, $, re) => {
          const he = C && re !== d ? re : Y;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, l, $, he, B, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, l, $, he, B, t), this.emit("missingKey", F, l, $, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && P ? j.forEach((F) => {
          this.pluralResolver.getSuffixes(F, t).forEach(($) => {
            D([F], o + $, t[`defaultValue${$}`] || N);
          });
        }) : D(j, o, N));
      }
      d = this.extendTranslation(d, e, t, p, s), E && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`), (E || b) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, b ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return r ? (p.res = d, p) : d;
=======
    let f = p && p.res;
    const b = p && p.usedKey || o, h = p && p.exactUsedKey || o, m = Object.prototype.toString.apply(f), g = ["[object Number]", "[object Function]", "[object RegExp]"], R = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, P = !y(f) && typeof f != "boolean" && typeof f != "number";
    if (C && f && P && g.indexOf(m) < 0 && !(y(R) && Array.isArray(f))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, f, {
          ...t,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return r ? (p.res = S, p.usedParams = this.getUsedParamsDetails(t), p) : S;
      }
      if (i) {
        const S = Array.isArray(f), L = S ? [] : {}, v = S ? h : b;
        for (const E in f)
          if (Object.prototype.hasOwnProperty.call(f, E)) {
            const w = `${v}${i}${E}`;
            L[E] = this.translate(w, {
              ...t,
              joinArrays: !1,
              ns: a
            }), L[E] === w && (L[E] = f[E]);
          }
        f = L;
      }
    } else if (C && y(R) && Array.isArray(f))
      f = f.join(R), f && (f = this.extendTranslation(f, e, t, s));
    else {
      let S = !1, L = !1;
      const v = t.count !== void 0 && !y(t.count), E = Ne.hasDefaultValue(t), w = v ? this.pluralResolver.getSuffix(u, t.count, t) : "", N = t.ordinal && v ? this.pluralResolver.getSuffix(u, t.count, {
        ordinal: !1
      }) : "", T = v && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), B = T && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${w}`] || t[`defaultValue${N}`] || t.defaultValue;
      !this.isValidLookup(f) && E && (S = !0, f = B), this.isValidLookup(f) || (L = !0, f = o);
      const W = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : f, j = E && B !== f && this.options.updateMissing;
      if (L || S || j) {
        if (this.logger.log(j ? "updateKey" : "missingKey", u, l, o, j ? B : f), i) {
          const A = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          A && A.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let J = [];
        const I = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && I && I[0])
          for (let A = 0; A < I.length; A++)
            J.push(I[A]);
        else this.options.saveMissingTo === "all" ? J = this.languageUtils.toResolveHierarchy(t.lng || this.language) : J.push(t.lng || this.language);
        const oe = (A, M, G) => {
          const V = E && G !== f ? G : W;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(A, l, M, V, j, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(A, l, M, V, j, t), this.emit("missingKey", A, l, M, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && v ? J.forEach((A) => {
          const M = this.pluralResolver.getSuffixes(A, t);
          T && t[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`), M.forEach((G) => {
            oe([A], o + G, t[`defaultValue${G}`] || B);
          });
        }) : oe(J, o, B));
      }
      f = this.extendTranslation(f, e, t, p, s), L && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (L || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, S ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return r ? (p.res = f, p.usedParams = this.getUsedParamsDetails(t), p) : f;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
      const u = y(e) && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
<<<<<<< HEAD
        const d = e.match(this.interpolator.nestingRegexp);
        c = d && d.length;
=======
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      }
      let p = s.replace && !y(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
<<<<<<< HEAD
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
    return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = en.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: r,
=======
      }), e = this.interpolator.interpolate(e, p, s.lng || this.language || r.usedLng, s), u) {
        const f = e.match(this.interpolator.nestingRegexp), b = f && f.length;
        c < b && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, b = new Array(f), h = 0; h < f; h++)
          b[h] = arguments[h];
        return i && i[0] === b[0] && !s.context ? (o.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${t[0]}`), null) : o.translate(...b, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = y(a) ? [a] : a;
    return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = rn.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, r, i, o, a;
    return y(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      r = c;
      let p = u.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
<<<<<<< HEAD
      const d = t.count !== void 0 && typeof t.count != "string", y = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((m) => {
        this.isValidLookup(s) || (a = m, !xt[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (xt[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((x) => {
          if (this.isValidLookup(s)) return;
          o = x;
          const O = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(O, c, x, m, t);
          else {
            let b;
            d && (b = this.pluralResolver.getSuffix(x, t.count, t));
            const E = `${this.options.pluralSeparator}zero`, P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (O.push(c + b), t.ordinal && b.indexOf(P) === 0 && O.push(c + b.replace(P, this.options.pluralSeparator)), y && O.push(c + E)), h) {
              const C = `${c}${this.options.contextSeparator}${t.context}`;
              O.push(C), d && (O.push(C + b), t.ordinal && b.indexOf(P) === 0 && O.push(C + b.replace(P, this.options.pluralSeparator)), y && O.push(C + E));
            }
          }
          let T;
          for (; T = O.pop(); )
            this.isValidLookup(s) || (i = T, s = this.getResource(x, m, T, t));
=======
      const f = t.count !== void 0 && !y(t.count), b = f && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = t.context !== void 0 && (y(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((g) => {
        this.isValidLookup(s) || (a = g, !Et[`${m[0]}-${g}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Et[`${m[0]}-${g}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((R) => {
          if (this.isValidLookup(s)) return;
          o = R;
          const C = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, c, R, g, t);
          else {
            let S;
            f && (S = this.pluralResolver.getSuffix(R, t.count, t));
            const L = `${this.options.pluralSeparator}zero`, v = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(c + S), t.ordinal && S.indexOf(v) === 0 && C.push(c + S.replace(v, this.options.pluralSeparator)), b && C.push(c + L)), h) {
              const E = `${c}${this.options.contextSeparator}${t.context}`;
              C.push(E), f && (C.push(E + S), t.ordinal && S.indexOf(v) === 0 && C.push(E + S.replace(v, this.options.pluralSeparator)), b && C.push(E + L));
            }
          }
          let P;
          for (; P = C.pop(); )
            this.isValidLookup(s) || (i = P, s = this.getResource(R, g, P, t));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !y(e.replace);
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
<<<<<<< HEAD
function De(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class Rt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = M.create("languageUtils");
=======
const Ue = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class Lt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = q.create("languageUtils");
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  getScriptPartFromCode(e) {
    if (e = Ee(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ee(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (y(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let r = Intl.getCanonicalLocales(e)[0];
          if (r && this.options.lowerCaseLng && (r = r.toLowerCase()), r) return r;
        } catch {
        }
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return this.options.lowerCaseLng ? s = s.map((r) => r.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = De(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = De(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = De(s[2].toLowerCase()))), s.join("-");
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
    if (typeof e == "function" && (e = e(t)), y(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), r = [], i = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return y(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : y(e) && i(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), r;
  }
}
<<<<<<< HEAD
let or = [{
=======
let hr = [{
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}], ar = {
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
const lr = ["v1", "v2", "v3"], ur = ["v4"], Ot = {
=======
}], pr = {
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
const gr = ["v1", "v2", "v3"], mr = ["v4"], Nt = {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
<<<<<<< HEAD
};
function cr() {
  const n = {};
  return or.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: ar[e.fc]
      };
    });
  }), n;
}
class fr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = M.create("pluralResolver"), (!this.options.compatibilityJSON || ur.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = cr();
=======
}, br = () => {
  const n = {};
  return hr.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: pr[e.fc]
      };
    });
  }), n;
};
class yr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = q.create("pluralResolver"), (!this.options.compatibilityJSON || mr.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = br(), this.pluralRulesCache = {};
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
      const s = Ee(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
        cleanedCode: s,
        type: r
      });
      if (i in this.pluralRulesCache)
        return this.pluralRulesCache[i];
      let o;
      try {
<<<<<<< HEAD
        return new Intl.PluralRules(Ee(e), {
          type: t.ordinal ? "ordinal" : "cardinal"
=======
        o = new Intl.PluralRules(s, {
          type: r
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((r, i) => Ot[r] - Ot[i]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : s.numbers.map((r) => this.getSuffix(e, r, t)) : [];
=======
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((r, i) => Nt[r] - Nt[i]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : s.numbers.map((r) => this.getSuffix(e, r, t)) : [];
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    return !lr.includes(this.options.compatibilityJSON);
  }
}
function Ct(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = tr(n, e, t);
  return !i && r && typeof t == "string" && (i = Ce(n, t, s), i === void 0 && (i = Ce(e, t, s))), i;
}
class dr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = M.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
=======
    return !gr.includes(this.options.compatibilityJSON);
  }
}
const Pt = function(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = ir(n, e, t);
  return !i && r && y(t) && (i = Je(n, t, s), i === void 0 && (i = Je(e, t, s))), i;
}, Be = (n) => n.replace(/\$/g, "$$$$");
class Sr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = q.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
<<<<<<< HEAD
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : sr, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? Q(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? Q(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? Q(t.nestingPrefix) : t.nestingPrefixEscaped || Q("$t("), this.nestingSuffix = t.nestingSuffix ? Q(t.nestingSuffix) : t.nestingSuffixEscaped || Q(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
=======
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
      nestingPrefix: f,
      nestingPrefixEscaped: b,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: R,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : ar, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = i ? ee(i) : o || "{{", this.suffix = a ? ee(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? ee(f) : b || ee("$t("), this.nestingSuffix = h ? ee(h) : m || ee(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = R || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(h) {
      return h.replace(/\$/g, "$$$$");
    }
    const c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const O = Ct(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(O, void 0, s, {
          ...r,
          ...t,
          interpolationkey: h
        }) : O;
      }
      const g = h.split(this.formatSeparator), m = g.shift().trim(), x = g.join(this.formatSeparator).trim();
      return this.format(Ct(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), x, s, {
=======
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (b) => {
      if (b.indexOf(this.formatSeparator) < 0) {
        const R = Pt(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(R, void 0, s, {
          ...r,
          ...t,
          interpolationkey: b
        }) : R;
      }
      const h = b.split(this.formatSeparator), m = h.shift().trim(), g = h.join(this.formatSeparator).trim();
      return this.format(Pt(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), g, s, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        ...r,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
<<<<<<< HEAD
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
            const x = p(e, i, r);
            o = typeof x == "string" ? x : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, g))
            o = "";
          else if (d) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), o = "";
        else typeof o != "string" && !this.useRawValueToEscape && (o = bt(o));
        const m = h.safeValue(o);
        if (e = e.replace(i[0], m), d ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= i[0].length) : h.regex.lastIndex = 0, a++, a >= this.maxReplaces)
=======
    const c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, p = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (b) => Be(b)
    }, {
      regex: this.regexp,
      safeValue: (b) => this.escapeValue ? Be(this.escape(b)) : Be(b)
    }].forEach((b) => {
      for (a = 0; i = b.regex.exec(e); ) {
        const h = i[1].trim();
        if (o = u(h), o === void 0)
          if (typeof c == "function") {
            const g = c(e, i, r);
            o = y(g) ? g : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, h))
            o = "";
          else if (p) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), o = "";
        else !y(o) && !this.useRawValueToEscape && (o = xt(o));
        const m = b.safeValue(o);
        if (e = e.replace(i[0], m), p ? (b.regex.lastIndex += o.length, b.regex.lastIndex -= i[0].length) : b.regex.lastIndex = 0, a++, a >= this.maxReplaces)
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
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
=======
      let f = `{${p[1]}`;
      l = p[0], f = this.interpolate(f, o);
      const b = f.match(/'/g), h = f.match(/"/g);
      (b && b.length % 2 === 0 && !h || h.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), u && (o = {
          ...u,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${c}${f}`;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...s
      }, o = o.replace && !y(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((p) => p.trim());
        r[1] = c.shift(), l = c, u = !0;
      }
<<<<<<< HEAD
      if (i = t(a.call(this, r[1].trim(), o), o), i && r[0] === e && typeof i != "string") return i;
      typeof i != "string" && (i = bt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), u && (i = l.reduce((c, p) => this.format(c, p, s.lng, {
=======
      if (i = t(a.call(this, r[1].trim(), o), o), i && r[0] === e && !y(i)) return i;
      y(i) || (i = xt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), u && (i = l.reduce((c, p) => this.format(c, p, s.lng, {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        ...s,
        interpolationkey: r[1].trim()
      }), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
<<<<<<< HEAD
function hr(n) {
=======
const xr = (n) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}
function ee(n) {
=======
}, te = (n) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  const e = {};
  return (t, s, r) => {
    let i = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (i = {
      ...i,
      [r.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(i);
    let a = e[o];
<<<<<<< HEAD
    return a || (a = n(Ee(r), i), e[o] = a), a(s);
  };
}
class pr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = M.create("formatter"), this.options = e, this.formats = {
      number: ee((t, s) => {
=======
    return a || (a = n(Ee(s), r), e[o] = a), a(t);
  };
};
class wr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = q.create("formatter"), this.options = e, this.formats = {
      number: te((t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        const r = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
<<<<<<< HEAD
      currency: ee((t, s) => {
=======
      currency: te((t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        const r = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => r.format(i);
      }),
<<<<<<< HEAD
      datetime: ee((t, s) => {
=======
      datetime: te((t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        const r = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i);
      }),
<<<<<<< HEAD
      relativetime: ee((t, s) => {
=======
      relativetime: te((t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        const r = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => r.format(i, s.range || "day");
      }),
<<<<<<< HEAD
      list: ee((t, s) => {
=======
      list: te((t, s) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    this.formats[e.toLowerCase().trim()] = ee(t);
=======
    this.formats[e.toLowerCase().trim()] = te(t);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
      } = hr(l);
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
=======
      } = xr(l);
      if (this.formats[u]) {
        let p = a;
        try {
          const f = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, b = f.locale || f.lng || r.locale || r.lng || s;
          p = this.formats[u](a, b, {
            ...c,
            ...r,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
<<<<<<< HEAD
function gr(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class mr extends Fe {
  constructor(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = M.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, r.backend, r);
=======
const Rr = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class Or extends Fe {
  constructor(e, t, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = q.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, r.backend, r);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  }
  queueLoad(e, t, s, r) {
    const i = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((p) => {
<<<<<<< HEAD
        const d = `${u}|${p}`;
        !s.reload && this.store.hasResourceBundle(u, p) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? o[d] === void 0 && (o[d] = !0) : (this.state[d] = 1, c = !1, o[d] === void 0 && (o[d] = !0), i[d] === void 0 && (i[d] = !0), l[p] === void 0 && (l[p] = !0)));
=======
        const f = `${u}|${p}`;
        !s.reload && this.store.hasResourceBundle(u, p) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, c = !1, o[f] === void 0 && (o[f] = !0), i[f] === void 0 && (i[f] = !0), l[p] === void 0 && (l[p] = !0)));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
      er(l.loaded, [i], o), gr(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
=======
      rr(l.loaded, [i], o), Rr(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
    y(e) && (e = this.languageUtils.toResolveHierarchy(e)), y(t) && (t = [t]);
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
<<<<<<< HEAD
function Et() {
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
function Lt(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function me() {
}
function yr(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class le extends Fe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Lt(e), this.services = {}, this.logger = M, this.modules = {
      external: []
    }, yr(this), t && !this.isInitialized && !e.isClone) {
=======
const Tt = () => ({
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
    if (typeof n[1] == "object" && (e = n[1]), y(n[1]) && (e.defaultValue = n[1]), y(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
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
}), vt = (n) => (y(n.ns) && (n.ns = [n.ns]), y(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), y(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n), ye = () => {
}, Cr = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class fe extends Fe {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = vt(e), this.services = {}, this.logger = q, this.modules = {
      external: []
    }, Cr(this), t && !this.isInitialized && !e.isClone) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = Et();
    this.options = {
      ...r,
      ...this.options,
      ...Lt(t)
=======
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (y(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = Tt();
    this.options = {
      ...r,
      ...this.options,
      ...vt(t)
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
<<<<<<< HEAD
      this.modules.logger ? M.init(i(this.modules.logger), this.options) : M.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = pr);
      const p = new Rt(this.options);
      this.store = new wt(this.options.resources, this.options);
      const d = this.services;
      d.logger = M, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new fr(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = i(c), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new dr(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new mr(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(y) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(y, ...g);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Le(this.services, this.options), this.translator.on("*", function(y) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
          g[m - 1] = arguments[m];
        e.emit(y, ...g);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = me), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
=======
      this.modules.logger ? q.init(i(this.modules.logger), this.options) : q.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = wr);
      const p = new Lt(this.options);
      this.store = new Ct(this.options.resources, this.options);
      const f = this.services;
      f.logger = q, f.resourceStore = this.store, f.languageUtils = p, f.pluralResolver = new yr(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (f.formatter = i(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Sr(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Or(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(b, ...m);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ne(this.services, this.options), this.translator.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(b, ...m);
      }), this.modules.external.forEach((b) => {
        b.init && b.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = ye), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const l = oe(), u = () => {
      const c = (p, d) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), s(p, d);
=======
    const l = le(), u = () => {
      const c = (p, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), s(p, f);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
<<<<<<< HEAD
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : me;
    const r = typeof e == "string" ? e : this.language;
=======
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye;
    const r = y(e) ? e : this.language;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const r = oe();
    return e || (e = this.languages), t || (t = this.options.ns), s || (s = me), this.services.backendConnector.reload(e, t, (i) => {
=======
    const r = le();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = ye), this.services.backendConnector.reload(e, t, (i) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      r.resolve(), s(i);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
<<<<<<< HEAD
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && en.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
=======
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && rn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
    const r = oe();
=======
    const r = le();
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
      const u = y(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
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
<<<<<<< HEAD
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || s || i.keyPrefix;
      const d = r.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(o) ? y = o.map((h) => `${l.keyPrefix}${d}${h}`) : y = l.keyPrefix ? `${l.keyPrefix}${d}${o}` : o, r.t(y, l);
=======
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const f = r.options.keySeparator || ".";
      let b;
      return l.keyPrefix && Array.isArray(o) ? b = o.map((h) => `${l.keyPrefix}${f}${h}`) : b = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, r.t(b, l);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    };
    return y(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
<<<<<<< HEAD
    const s = oe();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((r) => {
=======
    const s = le();
    return this.options.ns ? (y(e) && (e = [e]), e.forEach((r) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
<<<<<<< HEAD
    const s = oe();
    typeof e == "string" && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0);
=======
    const s = le();
    y(e) && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
<<<<<<< HEAD
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new Rt(Et());
=======
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new Lt(Tt());
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
<<<<<<< HEAD
    return new le(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : me;
=======
    return new fe(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye;
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
<<<<<<< HEAD
    }, i = new le(r);
=======
    }, i = new fe(r);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
<<<<<<< HEAD
    }, s && (i.store = new wt(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Le(i.services, r), i.translator.on("*", function(a) {
=======
    }, s && (i.store = new Ct(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Ne(i.services, r), i.translator.on("*", function(a) {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
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
const br = "Search", Sr = "Clear", wr = "Query Explanation", xr = "No results found for this search", Rr = "Showing {{start}}-{{end}} of {{total}} items", Or = {
  Search: br,
  Clear: Sr,
  queryExplanation: wr,
  noResultsFound: xr,
  showingItems: Rr
}, Cr = "חיפוש", Er = "נקה", Lr = "הסבר לשאילתה", Nr = "לא נמצאו תוצאות לחיפוש זה", Tr = "מציג {{start}}-{{end}} מתוך {{total}} פריטים", Pr = {
  Search: Cr,
  Clear: Er,
  queryExplanation: Lr,
  noResultsFound: Nr,
  showingItems: Tr
};
A.use(dn).init({
=======
const F = fe.createInstance();
F.createInstance = fe.createInstance;
F.createInstance;
F.dir;
F.init;
F.loadResources;
F.reloadResources;
F.use;
F.changeLanguage;
F.getFixedT;
F.t;
F.exists;
F.setDefaultNamespace;
F.hasLoadedNamespace;
F.loadNamespaces;
F.loadLanguages;
const Er = "Search", Lr = "Clear", Nr = {
  Search: Er,
  Clear: Lr
}, Pr = "חיפוש", Tr = "נקה", vr = "הסבר לשאילתה", Ar = {
  Search: Pr,
  Clear: Tr,
  queryExplanation: vr
};
F.use(mn).init({
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
  interpolation: { escapeValue: !1 },
  fallbackLng: "en",
  lng: "he",
  resources: {
    en: {
<<<<<<< HEAD
      translations: Or
    },
    he: {
      translations: Pr
=======
      translations: Nr
    },
    he: {
      translations: Ar
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
});
<<<<<<< HEAD
A.languages = ["en", "he"];
const Ye = () => hn();
function vr(n, e = !0) {
  const t = Tt(null), [s, r] = q(n), [i, o] = q([]), a = () => {
=======
F.languages = ["en", "he"];
const Ze = () => bn();
function kr(n, e = !0) {
  const t = kt(null), [s, r] = z(n), [i, o] = z([]), a = () => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    if (!t.current) return;
    const l = t.current.offsetWidth;
    let u = 60;
    const c = [], p = [];
<<<<<<< HEAD
    for (const d of n)
      u + 128 <= l ? (c.push(d), u += 128) : p.push(d);
    r(c), o(p);
  };
  return tn(() => {
=======
    for (const f of n)
      u + 128 <= l ? (c.push(f), u += 128) : p.push(f);
    r(c), o(p);
  };
  return on(() => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    if (!e) return;
    a();
    const l = () => requestAnimationFrame(a);
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [n, e]), { containerRef: t, visible: s, hidden: i };
}
<<<<<<< HEAD
function Ar() {
  return { formatNumberWithCommas: nn(
=======
function Fr() {
  return { formatNumberWithCommas: an(
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    (e, t = !1) => {
      if (e == null || isNaN(Number(e))) return "";
      const s = Number(e).toLocaleString("en-US", {
        maximumFractionDigits: 0
      });
      return t ? `₪${s}` : s;
    },
    []
  ) };
}
<<<<<<< HEAD
const Fr = "genericTable-module__flexVision___ouZYy", kr = "genericTable-module__flexVisionIn___Z-3WC", $r = "genericTable-module__searchBox___Y8deO", Ir = "genericTable-module__table__box___1gjhA", ae = {
  flexVision: Fr,
  flexVisionIn: kr,
  searchBox: $r,
  table__box: Ir
}, Si = (n) => {
  const { rowsData: e, columns: t, hasSearch: s = !1, onSendCurrentRows: r } = n, [i, o] = q(10), [a, l] = q(1), [u, c] = q(""), { formatNumberWithCommas: p } = Ar(), { containerRef: d, visible: y, hidden: h } = vr(t), { t: g } = Ye(), m = Tt(null), x = (w) => w ? new Date(w).toLocaleDateString("he-IL") : "", O = (w, L, N) => {
    if (L == null) return "";
    switch (N) {
      case "date":
        return x(L);
      case "amount":
        return p(L, !0);
=======
const $r = "genericTable-module__flexVision___ouZYy", Ir = "genericTable-module__flexVisionIn___Z-3WC", _r = "genericTable-module__searchBox___Y8deO", Dr = "genericTable-module__table__box___1gjhA", ue = {
  flexVision: $r,
  flexVisionIn: Ir,
  searchBox: _r,
  table__box: Dr
}, wi = (n) => {
  const { rowsData: e, columns: t, hasSearch: s = !1, onSendCurrentRows: r } = n, [i, o] = z(10), [a, l] = z(1), [u, c] = z(""), { formatNumberWithCommas: p } = Fr(), { containerRef: f, visible: b, hidden: h } = kr(t), { t: m } = Ze(), g = kt(null), R = (w) => w ? new Date(w).toLocaleDateString("he-IL") : "", C = (w, N, T) => {
    if (N == null) return "";
    switch (T) {
      case "date":
        return R(N);
      case "amount":
        return p(N, !0);
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
      case "print":
        return;
      case "link":
        return;
      default:
<<<<<<< HEAD
        return String(L);
    }
  }, T = (w, L) => {
    const N = L[w.id];
    return w.type === "link" ? /* @__PURE__ */ R("a", { href: w.href || "/", style: { color: "var(--igds-primary-color)" }, children: String(N) }) : w.type === "print" ? /* @__PURE__ */ R("a", { href: w.href || "/", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--igds-primary-color)", display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ R(Be, { name: "file" }) }) : O(w.id, N, w.type);
  }, b = Qe(() => {
    if (!u) return e;
    const w = u.toLowerCase();
    return e.filter((L) => Object.values(L).some((N) => String(N).toLowerCase().includes(w)));
  }, [u, e]), E = Math.ceil(b.length / i), P = Qe(() => {
    const w = (a - 1) * i;
    return b.slice(w, w + i);
  }, [a, i, b]);
  we(() => {
    n.onSendCurrentRows && n.onSendCurrentRows(P);
  }, [P, n]), we(() => {
    const w = m.current, L = (N) => {
      const X = N.detail?.value;
      X && l(parseInt(X, 10));
    };
    return w?.addEventListener("igds-change", L), () => w?.removeEventListener("igds-change", L);
  }, [E]);
  const C = (w) => {
=======
        return String(N);
    }
  }, P = (w, N) => {
    const T = N[w.id];
    return w.type === "link" ? /* @__PURE__ */ O("a", { href: w.href || "/", style: { color: "var(--igds-primary-color)" }, children: String(T) }) : w.type === "print" ? /* @__PURE__ */ O("a", { href: w.href || "/", target: "_blank", rel: "noopener noreferrer", style: { color: "var(--igds-primary-color)", display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ O(He, { name: "file" }) }) : C(w.id, T, w.type);
  }, S = tt(() => {
    if (!u) return e;
    const w = u.toLowerCase();
    return e.filter((N) => Object.values(N).some((T) => String(T).toLowerCase().includes(w)));
  }, [u, e]), L = Math.ceil(S.length / i), v = tt(() => {
    const w = (a - 1) * i;
    return S.slice(w, w + i);
  }, [a, i, S]);
  Re(() => {
    n.onSendCurrentRows && n.onSendCurrentRows(v);
  }, [v, n]), Re(() => {
    const w = g.current, N = (T) => {
      const B = T.detail?.value;
      B && l(parseInt(B, 10));
    };
    return w?.addEventListener("igds-change", N), () => w?.removeEventListener("igds-change", N);
  }, [L]);
  const E = (w) => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
    if (w === "") {
      o(10);
      return;
    }
<<<<<<< HEAD
    let L = Number(w);
    L < 1 && (L = 1), L > 1e3 && (L = 1e3), o(L), l(1);
  };
  return /* @__PURE__ */ U("div", { className: ae.table__box, ref: d, dir: "rtl", children: [
    s && /* @__PURE__ */ R("div", { className: ae.searchBox, children: /* @__PURE__ */ R(
      sn,
      {
        dir: "rtl",
        value: u,
        placeholder: g("Search"),
=======
    let N = Number(w);
    N < 1 && (N = 1), N > 1e3 && (N = 1e3), o(N), l(1);
  };
  return /* @__PURE__ */ U("div", { className: ue.table__box, ref: f, dir: "rtl", children: [
    s && /* @__PURE__ */ O("div", { className: ue.searchBox, children: /* @__PURE__ */ O(
      ln,
      {
        dir: "rtl",
        value: u,
        placeholder: m("Search"),
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        withoutSuggestions: !0,
        onIgdsInput: (w) => {
          c(w.target.value), l(1);
        },
        onInputClear: () => {
          c(""), l(1);
        }
      }
    ) }),
<<<<<<< HEAD
    /* @__PURE__ */ U(rn, { children: [
      /* @__PURE__ */ R(on, { columns: y }),
      P.length > 0 ? P.map((w, L) => /* @__PURE__ */ U(
        et,
        {
          expanded: h.length > 0,
          cells: y.map((N) => N.slotted !== !0 ? {
            value: T(N, w)
          } : null).filter(Boolean),
          children: [
            y.map((N) => N.slotted === !0 && /* @__PURE__ */ R(an, { children: T(N, w) }, N.id)),
            h.length > 0 && /* @__PURE__ */ R("div", { className: ae.expandGridContainer, style: { display: "grid", gridTemplateColumns: `repeat(${y.length}, 1fr)`, gap: "2rem", padding: "1rem", direction: "rtl" }, children: h.map((N) => /* @__PURE__ */ U("div", { style: { display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ R("span", { style: { fontSize: "0.8rem", color: "var(--igds-light-ref-dawn-blue-800)", marginBottom: "4px" }, children: N.name }),
              /* @__PURE__ */ R("span", { style: { fontWeight: "bold", fontSize: "1rem" }, children: T(N, w) })
            ] }, N.id)) })
          ]
        },
        w.PaymentID || L
      )) : /* @__PURE__ */ R(et, { cells: [{ value: g("noResultsFound") || "לא נמצאו תוצאות לחיפוש זה" }] })
    ] }),
    /* @__PURE__ */ U("div", { className: ae.flexVision, style: { marginTop: "24px" }, children: [
      /* @__PURE__ */ R("p", { children: b.length > 0 ? g("showingItems", { start: (a - 1) * i + 1, end: Math.min(a * i, b.length), total: b.length }) : g("noItemsToShow") || "אין פריטים להצגה" }),
      /* @__PURE__ */ U("section", { className: ae.flexVisionIn, children: [
        /* @__PURE__ */ R(ln, { type: "number", value: i || "", label: g("rowsPerPage"), min: 1, max: 1e3, onChange: (w) => C(w.target.value) }),
        E > 1 && /* @__PURE__ */ R(un, { ref: m, current: a, variant: "numbered", children: Array.from({ length: E }, (w, L) => /* @__PURE__ */ R(cn, { href: `#${L + 1}` }, L + 1)) })
      ] })
    ] })
  ] });
}, _r = "SearchContainer-module__searchContainer___DJ7jd", jr = "SearchContainer-module__searchContent___xBTu-", Nt = {
  searchContainer: _r,
  searchContent: jr
}, Dr = "SearchButtonsContainer-module__searchButtonsContainer___x8BG-", Ur = {
  searchButtonsContainer: Dr
}, Br = (n) => {
  const { hasSearchButton: e = !0, hasClearButton: t = !0, isSearchDisabled: s, isClearDisabled: r, onSearch: i, onClear: o } = n, { t: a } = Ye();
  return /* @__PURE__ */ U("div", { className: Ur.searchButtonsContainer, children: [
    e && /* @__PURE__ */ R(
      tt,
      {
        label: "Search",
        icon: /* @__PURE__ */ R(Be, { name: "search" }),
=======
    /* @__PURE__ */ U(un, { children: [
      /* @__PURE__ */ O(cn, { columns: b }),
      v.length > 0 ? v.map((w, N) => /* @__PURE__ */ U(
        nt,
        {
          expanded: h.length > 0,
          cells: b.map((T) => T.slotted !== !0 ? {
            value: P(T, w)
          } : null).filter(Boolean),
          children: [
            b.map((T) => T.slotted === !0 && /* @__PURE__ */ O(fn, { children: P(T, w) }, T.id)),
            h.length > 0 && /* @__PURE__ */ O("div", { className: ue.expandGridContainer, style: { display: "grid", gridTemplateColumns: `repeat(${b.length}, 1fr)`, gap: "2rem", padding: "1rem", direction: "rtl" }, children: h.map((T) => /* @__PURE__ */ U("div", { style: { display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ O("span", { style: { fontSize: "0.8rem", color: "var(--igds-light-ref-dawn-blue-800)", marginBottom: "4px" }, children: T.name }),
              /* @__PURE__ */ O("span", { style: { fontWeight: "bold", fontSize: "1rem" }, children: P(T, w) })
            ] }, T.id)) })
          ]
        },
        w.PaymentID || N
      )) : /* @__PURE__ */ O(nt, { cells: [{ value: m("noResultsFound") || "לא נמצאו תוצאות לחיפוש זה" }] })
    ] }),
    /* @__PURE__ */ U("div", { className: ue.flexVision, style: { marginTop: "24px" }, children: [
      /* @__PURE__ */ O("p", { children: S.length > 0 ? m("showingItems", { start: (a - 1) * i + 1, end: Math.min(a * i, S.length), total: S.length }) : m("noItemsToShow") || "אין פריטים להצגה" }),
      /* @__PURE__ */ U("section", { className: ue.flexVisionIn, children: [
        /* @__PURE__ */ O(dn, { type: "number", value: i || "", label: m("rowsPerPage"), min: 1, max: 1e3, onChange: (w) => E(w.target.value) }),
        L > 1 && /* @__PURE__ */ O(hn, { ref: g, current: a, variant: "numbered", children: Array.from({ length: L }, (w, N) => /* @__PURE__ */ O(pn, { href: `#${N + 1}` }, N + 1)) })
      ] })
    ] })
  ] });
}, jr = "SearchContainer-module__searchContainer___DJ7jd", Ur = "SearchContainer-module__searchContent___xBTu-", At = {
  searchContainer: jr,
  searchContent: Ur
}, Br = "SearchButtonsContainer-module__searchButtonsContainer___x8BG-", Vr = {
  searchButtonsContainer: Br
}, Hr = (n) => {
  const { hasSearchButton: e = !0, hasClearButton: t = !0, isSearchDisabled: s, isClearDisabled: r, onSearch: i, onClear: o } = n, { t: a } = Ze();
  return /* @__PURE__ */ U("div", { className: Vr.searchButtonsContainer, children: [
    e && /* @__PURE__ */ O(
      st,
      {
        label: "Search",
        icon: /* @__PURE__ */ O(He, { name: "search" }),
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        onClick: i,
        disabled: s,
        children: a("Search")
      }
    ),
<<<<<<< HEAD
    t && /* @__PURE__ */ R(
      tt,
      {
        label: "Clear",
        icon: /* @__PURE__ */ R(Be, { name: "close" }),
=======
    t && /* @__PURE__ */ O(
      st,
      {
        label: "Clear",
        icon: /* @__PURE__ */ O(He, { name: "close" }),
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
        onClick: o,
        disabled: r,
        children: a("Clear")
      }
    )
  ] });
<<<<<<< HEAD
}, Hr = (n) => {
  const { buttonsProps: e } = n;
  return /* @__PURE__ */ U("div", { className: Nt.searchContainer, children: [
    /* @__PURE__ */ R("div", { className: Nt.searchContent, children: n.children }),
    e && /* @__PURE__ */ R(Br, { ...e })
  ] });
}, Vr = "toastInfo-module__toastInfoLink___AqiYy", Mr = "toastInfo-module__toast___-oxAT", qr = "toastInfo-module__toastText___VsPVH", Ue = {
  toastInfoLink: Vr,
  toast: Mr,
  toastText: qr
}, Kr = ({ infoTitle: n, infoContent: e }) => {
  const { t } = Ye(), [s, r] = q(!1);
  return /* @__PURE__ */ U("div", { className: Ue.toastInfoLink, children: [
    /* @__PURE__ */ R(Js, { onClick: () => r(!s), text: t("queryExplanation") }),
    s && /* @__PURE__ */ U(fn, { className: Ue.toast, children: [
      n !== "" && /* @__PURE__ */ R("strong", { slot: "title", children: n }),
      /* @__PURE__ */ R("span", { className: Ue.toastText, children: e })
    ] })
  ] });
}, zr = "MainSearchContainer-module__mainSearchContainer___99z-w", Jr = {
  mainSearchContainer: zr
}, wi = (n) => {
  const { info: e, pageTitle: t, buttonsProps: s } = n;
  return /* @__PURE__ */ U("div", { className: Jr.mainSearchContainer, children: [
    /* @__PURE__ */ R(Ys, { title: t, subTitle: "" }),
    e?.infoContent && /* @__PURE__ */ R(Kr, { infoTitle: e.infoTitle, infoContent: e.infoContent }),
    n.children && /* @__PURE__ */ R(Hr, { buttonsProps: s, children: n.children })
  ] });
}, xi = (n) => (we(() => {
=======
}, Mr = (n) => {
  const { buttonsProps: e } = n;
  return /* @__PURE__ */ U("div", { className: At.searchContainer, children: [
    /* @__PURE__ */ O("div", { className: At.searchContent, children: n.children }),
    e && /* @__PURE__ */ O(Hr, { ...e })
  ] });
}, Kr = "toastInfo-module__toastInfoLink___AqiYy", qr = "toastInfo-module__toast___-oxAT", zr = "toastInfo-module__toastText___VsPVH", Ve = {
  toastInfoLink: Kr,
  toast: qr,
  toastText: zr
}, Jr = ({ infoTitle: n, infoContent: e }) => {
  const { t } = Ze(), [s, r] = z(!1);
  return /* @__PURE__ */ U("div", { className: Ve.toastInfoLink, children: [
    /* @__PURE__ */ O(Ys, { onClick: () => r(!s), text: t("queryExplanation") }),
    s && /* @__PURE__ */ U(gn, { className: Ve.toast, children: [
      n !== "" && /* @__PURE__ */ O("strong", { slot: "title", children: n }),
      /* @__PURE__ */ O("span", { className: Ve.toastText, children: e })
    ] })
  ] });
}, Wr = "MainSearchContainer-module__mainSearchContainer___99z-w", Gr = {
  mainSearchContainer: Wr
}, Ri = (n) => {
  const { info: e, pageTitle: t, buttonsProps: s } = n;
  return /* @__PURE__ */ U("div", { className: Gr.mainSearchContainer, children: [
    /* @__PURE__ */ O(tr, { title: t, subTitle: "" }),
    e?.infoContent && /* @__PURE__ */ O(Jr, { infoTitle: e.infoTitle, infoContent: e.infoContent }),
    n.children && /* @__PURE__ */ O(Mr, { buttonsProps: s, children: n.children })
  ] });
}, Oi = (n) => (Re(() => {
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
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
<<<<<<< HEAD
}, ["prod"]), /* @__PURE__ */ R("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
export {
  bi as Button,
  yi as FieldsGrid,
  Si as GenericTable,
  Js as Link,
  wi as MainSearchContainer,
  xi as RootLayout,
  Ys as Title,
  A as i18n,
  pn as mockApiRequest,
  qs as useApiRequest,
  mi as useSystemTableApiRequest,
  Ye as useTranslation
=======
}, ["prod"]), /* @__PURE__ */ O("div", { className: "rootLayout", style: { direction: "rtl" }, children: n.children }));
export {
  xi as Button,
  Si as FieldsGrid,
  wi as GenericTable,
  Ys as Link,
  Ri as MainSearchContainer,
  Oi as RootLayout,
  tr as Title,
  F as i18n,
  yn as mockApiRequest,
  Ws as useApiRequest,
  yi as useSystemTableApiRequest,
  Ze as useTranslation
>>>>>>> 1157f517cda01e1763bb7612ec35d36ce7aaf4c6
};
