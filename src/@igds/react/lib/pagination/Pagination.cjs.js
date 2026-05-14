'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var pagination = require('@igds/core-web/pagination');
var constants = require('@igds/core-web/constants');

const PaginationComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.pagination,
  elementClass: pagination.Pagination,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Pagination = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(PaginationComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "PaginationWC", {
    enumerable: true,
    get: function () { return pagination.Pagination; }
});
exports.Pagination = Pagination;
