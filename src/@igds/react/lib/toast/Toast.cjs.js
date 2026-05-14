'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var toast = require('@igds/core-web/toast');
var constants = require('@igds/core-web/constants');

const ToastComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.toast,
  elementClass: toast.Toast,
  events: {
    onIgdsClose: constants.IGDS_EVENTS.close
  }
});
const Toast = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ToastComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ToastWC", {
    enumerable: true,
    get: function () { return toast.Toast; }
});
exports.Toast = Toast;
