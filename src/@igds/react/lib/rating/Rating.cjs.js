'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@lit/react');
var React = require('react');
var rating = require('@igds/core-web/rating');
var constants = require('@igds/core-web/constants');

const RatingComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.rating,
  elementClass: rating.Rating,
  events: {
    onIgdsHover: constants.IGDS_EVENTS.hover,
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Rating = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(RatingComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "RatingWC", {
    enumerable: true,
    get: function () { return rating.Rating; }
});
exports.Rating = Rating;
