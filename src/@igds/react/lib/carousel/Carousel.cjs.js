'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var carousel = require('@igds/core-web/carousel');
var constants = require('@igds/core-web/constants');

const CarouselComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.carousel,
  elementClass: carousel.Carousel,
  events: {
    onIgdsSlideChange: constants.IGDS_EVENTS.slideChange,
    onIgdsNext: constants.IGDS_EVENTS.next,
    onIgdsPrev: constants.IGDS_EVENTS.prev
  }
});
const Carousel = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(CarouselComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "CarouselWC", {
    enumerable: true,
    get: function () { return carousel.Carousel; }
});
exports.Carousel = Carousel;
