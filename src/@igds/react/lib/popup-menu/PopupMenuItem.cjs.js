'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var popupMenu = require('@igds/core-web/popup-menu');
var constants = require('@igds/core-web/constants');

const PopupMenuItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.popupMenuItem,
  elementClass: popupMenu.PopupMenuItem,
  events: {
    onIgdsSelect: constants.IGDS_EVENTS.select
  }
});
const PopupMenuItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(PopupMenuItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "PopupMenuItemWC", {
    enumerable: true,
    get: function () { return popupMenu.PopupMenuItem; }
});
exports.PopupMenuItem = PopupMenuItem;
