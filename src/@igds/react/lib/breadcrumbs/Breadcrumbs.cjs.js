'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var breadcrumbs = require('@igds/core-web/breadcrumbs');
var constants = require('@igds/core-web/constants');

const BreadcrumbsComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.breadcrumbs,
  elementClass: breadcrumbs.Breadcrumbs,
  events: {
    onIgdsExpand: constants.IGDS_EVENTS.expand,
    onIgdsNavigate: constants.IGDS_EVENTS.navigate
  }
});
const Breadcrumbs = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(BreadcrumbsComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "BreadcrumbsWC", {
    enumerable: true,
    get: function () { return breadcrumbs.Breadcrumbs; }
});
exports.Breadcrumbs = Breadcrumbs;
