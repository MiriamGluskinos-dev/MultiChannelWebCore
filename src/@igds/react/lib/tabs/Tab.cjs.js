'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tabs = require('@igds/core-web/tabs');
var constants = require('@igds/core-web/constants');

const TabComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tab,
  elementClass: tabs.Tab
});
const Tab = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TabComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TabWC", {
    enumerable: true,
    get: function () { return tabs.Tab; }
});
exports.Tab = Tab;
