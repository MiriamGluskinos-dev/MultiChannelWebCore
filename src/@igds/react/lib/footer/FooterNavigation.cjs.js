'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var footer = require('@igds/core-web/footer');
var constants = require('@igds/core-web/constants');

const FooterNavigationComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.footerNavigation,
  elementClass: footer.FooterNavigation
});
const FooterNavigation = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(FooterNavigationComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "FooterNavigationWC", {
    enumerable: true,
    get: function () { return footer.FooterNavigation; }
});
exports.FooterNavigation = FooterNavigation;
