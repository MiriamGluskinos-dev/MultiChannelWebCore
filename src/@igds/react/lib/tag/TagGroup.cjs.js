'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var tag = require('@igds/core-web/tag');
var constants = require('@igds/core-web/constants');

const TagGroupComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.tagGroup,
  elementClass: tag.TagGroup
});
const TagGroup = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(TagGroupComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "TagGroupWC", {
    enumerable: true,
    get: function () { return tag.TagGroup; }
});
exports.TagGroup = TagGroup;
