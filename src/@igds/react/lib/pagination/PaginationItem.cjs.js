'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var pagination = require('@igds/core-web/pagination');
var constants = require('@igds/core-web/constants');

const PaginationItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.paginationItem,
  elementClass: pagination.PaginationItem
});
const PaginationItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(PaginationItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "PaginationItemWC", {
    enumerable: true,
    get: function () { return pagination.PaginationItem; }
});
exports.PaginationItem = PaginationItem;
