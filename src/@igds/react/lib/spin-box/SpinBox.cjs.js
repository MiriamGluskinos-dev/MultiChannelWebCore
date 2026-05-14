'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@lit/react');
var React = require('react');
var spinBox = require('@igds/core-web/spin-box');
var constants = require('@igds/core-web/constants');

const SpinBoxComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.spinBox,
  elementClass: spinBox.SpinBox,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsInput: constants.IGDS_EVENTS.input,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const SpinBox = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SpinBoxComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SpinBoxWC", {
    enumerable: true,
    get: function () { return spinBox.SpinBox; }
});
exports.SpinBox = SpinBox;
