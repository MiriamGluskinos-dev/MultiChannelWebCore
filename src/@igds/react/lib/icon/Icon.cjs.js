'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var icon = require('@igds/core-web/icon');
var constants = require('@igds/core-web/constants');

const IconComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.icon,
  elementClass: icon.Icon
});
const Icon = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(IconComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "IconWC", {
    enumerable: true,
    get: function () { return icon.Icon; }
});
exports.Icon = Icon;
