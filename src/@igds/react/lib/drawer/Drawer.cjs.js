'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var drawer = require('@igds/core-web/drawer');
var constants = require('@igds/core-web/constants');

const DrawerComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.drawer,
  elementClass: drawer.Drawer,
  events: {
    onIgdsOpen: constants.IGDS_EVENTS.open,
    onIgdsClose: constants.IGDS_EVENTS.close
  }
});
const Drawer = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(DrawerComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "DrawerWC", {
    enumerable: true,
    get: function () { return drawer.Drawer; }
});
exports.Drawer = Drawer;
