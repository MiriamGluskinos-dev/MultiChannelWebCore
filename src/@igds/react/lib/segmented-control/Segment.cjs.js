'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var segmentedControl = require('@igds/core-web/segmented-control');
var constants = require('@igds/core-web/constants');

const SegmentComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.segment,
  elementClass: segmentedControl.Segment
});
const Segment = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SegmentComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SegmentWC", {
    enumerable: true,
    get: function () { return segmentedControl.Segment; }
});
exports.Segment = Segment;
