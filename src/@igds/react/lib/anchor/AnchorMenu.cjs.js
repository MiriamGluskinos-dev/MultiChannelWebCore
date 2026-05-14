'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@lit/react');
var React = require('react');
var anchor = require('@igds/core-web/anchor');
var constants = require('@igds/core-web/constants');

const AnchorComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.anchorMenu,
  elementClass: anchor.AnchorMenu,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const AnchorMenu = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(AnchorComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "AnchorMenuWC", {
    enumerable: true,
    get: function () { return anchor.AnchorMenu; }
});
exports.AnchorMenu = AnchorMenu;
