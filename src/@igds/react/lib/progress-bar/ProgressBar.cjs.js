'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var progressBar = require('@igds/core-web/progress-bar');
var constants = require('@igds/core-web/constants');

const ProgressBarComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.progressBar,
  elementClass: progressBar.ProgressBar,
  events: {
    onIgdsComplete: constants.IGDS_EVENTS.complete
  }
});
const ProgressBar = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ProgressBarComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ProgressBarWC", {
    enumerable: true,
    get: function () { return progressBar.ProgressBar; }
});
exports.ProgressBar = ProgressBar;
