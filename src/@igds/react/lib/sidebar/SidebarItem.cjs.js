'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var sidebar = require('@igds/core-web/sidebar');
var constants = require('@igds/core-web/constants');

const SidebarItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.sidebarItem,
  elementClass: sidebar.SidebarItem,
  events: {
    onIgdsHover: constants.IGDS_EVENTS.hover,
    onIgdsClick: constants.IGDS_EVENTS.click
  }
});
const SidebarItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SidebarItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SidebarItemWC", {
    enumerable: true,
    get: function () { return sidebar.SidebarItem; }
});
exports.SidebarItem = SidebarItem;
