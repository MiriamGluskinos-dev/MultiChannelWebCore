'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var header = require('@igds/core-web/header');
var constants = require('@igds/core-web/constants');

const HeaderComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.header,
  elementClass: header.Header,
  events: {
    onIgdsLogoClick: constants.IGDS_EVENTS.logoClick
  }
});
const Header = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(HeaderComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "HeaderWC", {
    enumerable: true,
    get: function () { return header.Header; }
});
exports.Header = Header;
