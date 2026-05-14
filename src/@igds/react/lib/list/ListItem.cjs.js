'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var list = require('@igds/core-web/list');
var constants = require('@igds/core-web/constants');

const ListItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.listItem,
  elementClass: list.ListItem
});
const ListItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ListItemComponent, {
    ...props,
    ref: ref,
    children: props.children !== undefined && props.children
  });
});

Object.defineProperty(exports, "ListItemWC", {
    enumerable: true,
    get: function () { return list.ListItem; }
});
exports.ListItem = ListItem;
