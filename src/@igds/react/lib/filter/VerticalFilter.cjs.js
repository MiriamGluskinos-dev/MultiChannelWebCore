'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var filters = require('@igds/core-web/filters');
var constants = require('@igds/core-web/constants');

const VerticalFilterComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.verticalFilter,
  elementClass: filters.VerticalFilter,
  events: {
    onIgdsApply: constants.IGDS_EVENTS.apply,
    onIgdsFilterChanged: constants.IGDS_EVENTS.filterChanged,
    onIgdsClear: constants.IGDS_EVENTS.clear
  }
});
const VerticalFilter = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(VerticalFilterComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "VerticalFilterWC", {
    enumerable: true,
    get: function () { return filters.VerticalFilter; }
});
exports.VerticalFilter = VerticalFilter;
