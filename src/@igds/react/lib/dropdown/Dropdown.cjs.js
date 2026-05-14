'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var dropdown = require('@igds/core-web/dropdown');
var constants = require('@igds/core-web/constants');

const DropdownComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.dropdown,
  elementClass: dropdown.Dropdown,
  events: {
    onIgdsClear: constants.IGDS_EVENTS.clear,
    onIgdsKeydown: constants.IGDS_EVENTS.keydown,
    onIgdsBlur: constants.IGDS_EVENTS.blur,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Dropdown = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(DropdownComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "DropdownWC", {
    enumerable: true,
    get: function () { return dropdown.Dropdown; }
});
exports.Dropdown = Dropdown;
