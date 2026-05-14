'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var carousel = require('@igds/core-web/carousel');
var constants = require('@igds/core-web/constants');

const CarouselItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.carouselItem,
  elementClass: carousel.CarouselItem
});
const CarouselItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(CarouselItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "CarouselItemWC", {
    enumerable: true,
    get: function () { return carousel.CarouselItem; }
});
exports.CarouselItem = CarouselItem;
