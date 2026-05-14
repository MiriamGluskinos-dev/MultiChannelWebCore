'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var banner = require('@igds/core-web/banner');
var constants = require('@igds/core-web/constants');

const BannerComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.banner,
  elementClass: banner.Banner,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsFooterClick: constants.IGDS_EVENTS.footerClick
  }
});
const Banner = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(BannerComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "BannerWC", {
    enumerable: true,
    get: function () { return banner.Banner; }
});
exports.Banner = Banner;
