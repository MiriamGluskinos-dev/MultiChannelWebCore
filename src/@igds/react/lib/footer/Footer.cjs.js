'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var footer = require('@igds/core-web/footer');
var constants = require('@igds/core-web/constants');

const FooterComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.footer,
  elementClass: footer.Footer,
  events: {
    onIgdsLogoClick: constants.IGDS_EVENTS.logoClick,
    onIgdsSubmit: constants.IGDS_EVENTS.submit
  }
});
const Footer = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(FooterComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "FooterWC", {
    enumerable: true,
    get: function () { return footer.Footer; }
});
exports.Footer = Footer;
