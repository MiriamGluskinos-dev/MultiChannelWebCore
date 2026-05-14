'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var badge = require('@igds/core-web/badge');
var constants = require('@igds/core-web/constants');

const BadgeComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.badge,
  elementClass: badge.Badge,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsChange: constants.IGDS_EVENTS.change
  }
});
const Badge = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(BadgeComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "BadgeWC", {
    enumerable: true,
    get: function () { return badge.Badge; }
});
exports.Badge = Badge;
