'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var segmentedControl = require('@igds/core-web/segmented-control');
var constants = require('@igds/core-web/constants');

const SegmentedControlComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.segmentedControl,
  elementClass: segmentedControl.SegmentedControl,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const SegmentedControl = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SegmentedControlComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SegmentedControlWC", {
    enumerable: true,
    get: function () { return segmentedControl.SegmentedControl; }
});
exports.SegmentedControl = SegmentedControl;
