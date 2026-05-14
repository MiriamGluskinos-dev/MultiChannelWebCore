'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var menu = require('@igds/core-web/menu');
var constants = require('@igds/core-web/constants');

const MenuItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.menuItem,
  elementClass: menu.MenuItem,
  events: {
    onIgdsHover: constants.IGDS_EVENTS.hover,
    onIgdsClick: constants.IGDS_EVENTS.click
  }
});
const MenuItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(MenuItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "MenuItemWC", {
    enumerable: true,
    get: function () { return menu.MenuItem; }
});
exports.MenuItem = MenuItem;
