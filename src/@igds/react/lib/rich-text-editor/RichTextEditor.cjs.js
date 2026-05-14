'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var richTextEditor = require('@igds/core-web/rich-text-editor');
var constants = require('@igds/core-web/constants');

const RichTextEditorComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.richTextEditor,
  elementClass: richTextEditor.RichTextEditor,
  events: {
    onIgdsInput: constants.IGDS_EVENTS.input,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsChange: constants.IGDS_EVENTS.change,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const RichTextEditor = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(RichTextEditorComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "RichTextEditorWC", {
    enumerable: true,
    get: function () { return richTextEditor.RichTextEditor; }
});
exports.RichTextEditor = RichTextEditor;
