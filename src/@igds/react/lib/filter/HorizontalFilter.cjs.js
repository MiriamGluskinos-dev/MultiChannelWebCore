'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var filters = require('@igds/core-web/filters');
var constants = require('@igds/core-web/constants');

const HorizontalFilterComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.horizontalFilter,
  elementClass: filters.HorizontalFilter,
  events: {
    onIgdsApply: constants.IGDS_EVENTS.apply,
    onIgdsFilterChanged: constants.IGDS_EVENTS.filterChanged,
    onIgdsClear: constants.IGDS_EVENTS.clear
  }
});
const HorizontalFilter = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(HorizontalFilterComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "HorizontalFilterWC", {
    enumerable: true,
    get: function () { return filters.HorizontalFilter; }
});
exports.HorizontalFilter = HorizontalFilter;
