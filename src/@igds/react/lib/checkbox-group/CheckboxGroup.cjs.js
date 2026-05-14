'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var checkboxGroup = require('@igds/core-web/checkbox-group');
var constants = require('@igds/core-web/constants');

const CheckboxGroupComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.checkboxGroup,
  elementClass: checkboxGroup.CheckboxGroup
});
const CheckboxGroup = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(CheckboxGroupComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "CheckboxGroupWC", {
    enumerable: true,
    get: function () { return checkboxGroup.CheckboxGroup; }
});
exports.CheckboxGroup = CheckboxGroup;
