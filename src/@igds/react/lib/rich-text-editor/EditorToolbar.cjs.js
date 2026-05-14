'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var richTextEditor = require('@igds/core-web/rich-text-editor');
var constants = require('@igds/core-web/constants');

const EditorToolbarComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.editorToolbar,
  elementClass: richTextEditor.EditorToolbar
});
const EditorToolbar = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(EditorToolbarComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "EditorToolbarWC", {
    enumerable: true,
    get: function () { return richTextEditor.EditorToolbar; }
});
exports.EditorToolbar = EditorToolbar;
