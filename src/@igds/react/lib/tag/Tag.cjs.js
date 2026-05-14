'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tag = require('@igds/core-web/tag');
var constants = require('@igds/core-web/constants');

const TagComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tag,
  elementClass: tag.Tag,
  events: {
    onIgdsSelect: constants.IGDS_EVENTS.select,
    onIgdsRemove: constants.IGDS_EVENTS.remove
  }
});
const Tag = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TagComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TagWC", {
    enumerable: true,
    get: function () { return tag.Tag; }
});
exports.Tag = Tag;
