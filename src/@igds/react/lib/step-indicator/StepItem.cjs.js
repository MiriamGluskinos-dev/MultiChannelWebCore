'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var stepIndicator = require('@igds/core-web/step-indicator');
var constants = require('@igds/core-web/constants');

const StepItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.stepItem,
  elementClass: stepIndicator.StepItem
});
const StepItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(StepItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "StepItemWC", {
    enumerable: true,
    get: function () { return stepIndicator.StepItem; }
});
exports.StepItem = StepItem;
