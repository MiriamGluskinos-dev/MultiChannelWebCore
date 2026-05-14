'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var radio = require('@igds/core-web/radio');
var constants = require('@igds/core-web/constants');

const RadioComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.radio,
  elementClass: radio.RadioButton,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const Radio = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(RadioComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "RadioWC", {
    enumerable: true,
    get: function () { return radio.RadioButton; }
});
exports.Radio = Radio;
