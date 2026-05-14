'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var richTextEditor = require('@igds/core-web/rich-text-editor');
var constants = require('@igds/core-web/constants');

const ToolbarItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.toolbarItem,
  elementClass: richTextEditor.ToolbarItem,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click
  }
});
const ToolbarItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ToolbarItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ToolbarItemWC", {
    enumerable: true,
    get: function () { return richTextEditor.ToolbarItem; }
});
exports.ToolbarItem = ToolbarItem;
