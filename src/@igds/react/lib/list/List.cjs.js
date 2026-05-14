'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var list = require('@igds/core-web/list');
var constants = require('@igds/core-web/constants');

const ListComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.list,
  elementClass: list.List,
  events: {
    onIgdsDragStart: constants.IGDS_EVENTS.dragStart,
    onIgdsDragEnd: constants.IGDS_EVENTS.dragEnd
  }
});
const List = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ListComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ListWC", {
    enumerable: true,
    get: function () { return list.List; }
});
exports.List = List;
