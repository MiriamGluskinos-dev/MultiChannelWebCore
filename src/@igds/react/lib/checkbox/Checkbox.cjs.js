'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var checkbox = require('@igds/core-web/checkbox');
var constants = require('@igds/core-web/constants');

const CheckboxComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.checkbox,
  elementClass: checkbox.Checkbox,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const Checkbox = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(CheckboxComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "CheckboxWC", {
    enumerable: true,
    get: function () { return checkbox.Checkbox; }
});
exports.Checkbox = Checkbox;
