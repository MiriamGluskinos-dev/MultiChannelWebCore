'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var input = require('@igds/core-web/input');
var constants = require('@igds/core-web/constants');

const InputComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.input,
  elementClass: input.Input,
  events: {
    onIgdsInput: constants.IGDS_EVENTS.input,
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsBlur: constants.IGDS_EVENTS.blur,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsInputIconClick: constants.IGDS_EVENTS.inputIconClick
  }
});
const Input = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(InputComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "InputWC", {
    enumerable: true,
    get: function () { return input.Input; }
});
exports.Input = Input;
