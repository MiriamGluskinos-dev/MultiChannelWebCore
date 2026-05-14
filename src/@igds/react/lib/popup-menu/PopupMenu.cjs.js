'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var popupMenu = require('@igds/core-web/popup-menu');
var constants = require('@igds/core-web/constants');

const PopupMenuComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.popupMenu,
  elementClass: popupMenu.PopupMenu,
  events: {
    onIgdsOpen: constants.IGDS_EVENTS.open,
    onIgdsClose: constants.IGDS_EVENTS.close,
    onIgdsSelect: constants.IGDS_EVENTS.select
  }
});
const PopupMenu = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(PopupMenuComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "PopupMenuWC", {
    enumerable: true,
    get: function () { return popupMenu.PopupMenu; }
});
exports.PopupMenu = PopupMenu;
