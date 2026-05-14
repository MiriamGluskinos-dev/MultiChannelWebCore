'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tooltip = require('@igds/core-web/tooltip');
var constants = require('@igds/core-web/constants');

const TooltipComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tooltip,
  elementClass: tooltip.Tooltip,
  events: {
    onIgdsHide: constants.IGDS_EVENTS.hide,
    onIgdsShow: constants.IGDS_EVENTS.show
  }
});
const Tooltip = React.forwardRef((props, ref) => {
  return jsxRuntime.jsxs(TooltipComponent, {
    ...props,
    ref: ref,
    children: [props.htmlContent !== undefined && jsxRuntime.jsx("div", {
      slot: "content",
      children: props.htmlContent
    }), props.children !== undefined && props.children]
  });
});

Object.defineProperty(exports, "TooltipWC", {
    enumerable: true,
    get: function () { return tooltip.Tooltip; }
});
exports.Tooltip = Tooltip;
