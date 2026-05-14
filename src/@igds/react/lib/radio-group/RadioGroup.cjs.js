'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var radioGroup = require('@igds/core-web/radio-group');
var constants = require('@igds/core-web/constants');

const RadioGroupComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.radioGroup,
  elementClass: radioGroup.RadioGroup,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const RadioGroup = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(RadioGroupComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "RadioGroupWC", {
    enumerable: true,
    get: function () { return radioGroup.RadioGroup; }
});
exports.RadioGroup = RadioGroup;
