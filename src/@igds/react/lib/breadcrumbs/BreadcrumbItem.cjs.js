'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var breadcrumbs = require('@igds/core-web/breadcrumbs');
var constants = require('@igds/core-web/constants');

const BreadcrumbItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.breadcrumbItem,
  elementClass: breadcrumbs.BreadcrumbItem,
  events: {
    onIgdsNavigate: constants.IGDS_EVENTS.navigate
  }
});
const BreadcrumbItem = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(BreadcrumbItemComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "BreadcrumbItemWC", {
    enumerable: true,
    get: function () { return breadcrumbs.BreadcrumbItem; }
});
exports.BreadcrumbItem = BreadcrumbItem;
