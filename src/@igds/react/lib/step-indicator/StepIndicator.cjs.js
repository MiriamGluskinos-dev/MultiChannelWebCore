'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var stepIndicator = require('@igds/core-web/step-indicator');
var constants = require('@igds/core-web/constants');

const StepIndicatorComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.stepIndicator,
  elementClass: stepIndicator.StepIndicator,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsClick: constants.IGDS_EVENTS.click
  }
});
const StepIndicator = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(StepIndicatorComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "StepIndicatorWC", {
    enumerable: true,
    get: function () { return stepIndicator.StepIndicator; }
});
exports.StepIndicator = StepIndicator;
