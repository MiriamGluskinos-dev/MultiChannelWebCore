'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tabs = require('@igds/core-web/tabs');
var constants = require('@igds/core-web/constants');

const TabsComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tabs,
  elementClass: tabs.Tabs,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Tabs = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TabsComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TabsWC", {
    enumerable: true,
    get: function () { return tabs.Tabs; }
});
exports.Tabs = Tabs;
