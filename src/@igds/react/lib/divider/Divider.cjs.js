'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var divider = require('@igds/core-web/divider');
var constants = require('@igds/core-web/constants');

const DividerComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.divider,
  elementClass: divider.Divider
});
const Divider = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(DividerComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "DividerWC", {
    enumerable: true,
    get: function () { return divider.Divider; }
});
exports.Divider = Divider;
