'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var menu = require('@igds/core-web/menu');
var constants = require('@igds/core-web/constants');

const MenuComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.menu,
  elementClass: menu.Menu,
  events: {
    onIgdsOpen: constants.IGDS_EVENTS.open,
    onIgdsClose: constants.IGDS_EVENTS.close,
    onIgdsClick: constants.IGDS_EVENTS.click
  }
});
const Menu = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(MenuComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "MenuWC", {
    enumerable: true,
    get: function () { return menu.Menu; }
});
exports.Menu = Menu;
