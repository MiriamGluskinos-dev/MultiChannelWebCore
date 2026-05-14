'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@lit/react');
var React = require('react');
var anchor = require('@igds/core-web/anchor');
var constants = require('@igds/core-web/constants');

const AnchorItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.anchor,
  elementClass: anchor.Anchor
});
const Anchor = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(AnchorItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "AnchorWC", {
    enumerable: true,
    get: function () { return anchor.Anchor; }
});
exports.Anchor = Anchor;
