'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tabs = require('@igds/core-web/tabs');
var constants = require('@igds/core-web/constants');

const TabPanelComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tabPanel,
  elementClass: tabs.TabPanel
});
const TabPanel = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TabPanelComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TabPanelWC", {
    enumerable: true,
    get: function () { return tabs.TabPanel; }
});
exports.TabPanel = TabPanel;
