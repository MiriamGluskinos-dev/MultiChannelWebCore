'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var dynamicIcon = require('@igds/core-web/dynamic-icon');
var constants = require('@igds/core-web/constants');

const DynamicIconComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.dynamicIcon,
  elementClass: dynamicIcon.DynamicIcon
});
const DynamicIcon = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(DynamicIconComponent, {
    ...props,
    ref: ref
  });
});
DynamicIcon.displayName = 'DynamicIcon';

Object.defineProperty(exports, "DynamicIconWC", {
    enumerable: true,
    get: function () { return dynamicIcon.DynamicIcon; }
});
exports.DynamicIcon = DynamicIcon;
