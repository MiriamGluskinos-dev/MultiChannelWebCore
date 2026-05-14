'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var sidebar = require('@igds/core-web/sidebar');
var constants = require('@igds/core-web/constants');

const SidebarComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.sidebar,
  elementClass: sidebar.Sidebar,
  events: {
    onIgdsOpen: constants.IGDS_EVENTS.open,
    onIgdsClose: constants.IGDS_EVENTS.close
  }
});
const Sidebar = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SidebarComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SidebarWC", {
    enumerable: true,
    get: function () { return sidebar.Sidebar; }
});
exports.Sidebar = Sidebar;
