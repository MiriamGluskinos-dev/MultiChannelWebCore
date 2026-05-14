'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var searchField = require('@igds/core-web/search-field');
var constants = require('@igds/core-web/constants');

const SearchFieldComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.searchField,
  elementClass: searchField.SearchField,
  events: {
    onIgdsInput: constants.IGDS_EVENTS.input,
    onIgdsSearch: constants.IGDS_EVENTS.search,
    onIgdsClear: constants.IGDS_EVENTS.clear,
    onIgdsSelect: constants.IGDS_EVENTS.select
  }
});
const SearchField = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SearchFieldComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SearchFieldWC", {
    enumerable: true,
    get: function () { return searchField.SearchField; }
});
exports.SearchField = SearchField;
