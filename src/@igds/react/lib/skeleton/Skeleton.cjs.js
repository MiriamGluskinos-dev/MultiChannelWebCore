'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var skeleton = require('@igds/core-web/skeleton');
var constants = require('@igds/core-web/constants');

const SkeletonComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.skeleton,
  elementClass: skeleton.Skeleton
});
const Skeleton = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(SkeletonComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "SkeletonWC", {
    enumerable: true,
    get: function () { return skeleton.Skeleton; }
});
exports.Skeleton = Skeleton;
