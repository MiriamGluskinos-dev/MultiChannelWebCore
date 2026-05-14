'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var toggle = require('@igds/core-web/toggle');
var constants = require('@igds/core-web/constants');

const ToggleComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.toggle,
  elementClass: toggle.Toggle,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const Toggle = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ToggleComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ToggleWC", {
    enumerable: true,
    get: function () { return toggle.Toggle; }
});
exports.Toggle = Toggle;
