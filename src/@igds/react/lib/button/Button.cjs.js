'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var button = require('@igds/core-web/button');
var constants = require('@igds/core-web/constants');

const ButtonComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.button,
  elementClass: button.Button,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur,
    onIgdsKeydown: constants.IGDS_EVENTS.keydown,
    onIgdsKeyup: constants.IGDS_EVENTS.keyup
  }
});
const Button = React.forwardRef((props, ref) => {
  return jsxRuntime.jsxs(ButtonComponent, {
    ...props,
    ref: ref,
    children: [props.icon && jsxRuntime.jsx("div", {
      slot: "icon",
      children: props.icon
    }), props.secondIcon && jsxRuntime.jsx("div", {
      slot: "second-icon",
      children: props.secondIcon
    }), props.children !== undefined && props.children]
  });
});

Object.defineProperty(exports, "ButtonWC", {
    enumerable: true,
    get: function () { return button.Button; }
});
exports.Button = Button;
