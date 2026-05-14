'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@lit/react');
var React = require('react');
var slider = require('@igds/core-web/slider');
var constants = require('@igds/core-web/constants');

const SliderComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.slider,
  elementClass: slider.Slider,
  events: {
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Slider = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SliderComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SliderWC", {
    enumerable: true,
    get: function () { return slider.Slider; }
});
exports.Slider = Slider;
