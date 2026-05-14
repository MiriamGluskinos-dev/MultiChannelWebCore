'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var footer = require('@igds/core-web/footer');
var constants = require('@igds/core-web/constants');

const FooterNavigationItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.footerNavigationItem,
  elementClass: footer.FooterNavigationItem
});
const FooterNavigationItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(FooterNavigationItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "FooterNavigationItemWC", {
    enumerable: true,
    get: function () { return footer.FooterNavigationItem; }
});
exports.FooterNavigationItem = FooterNavigationItem;
