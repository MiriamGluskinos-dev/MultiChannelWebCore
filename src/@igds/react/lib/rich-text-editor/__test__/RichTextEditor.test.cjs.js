'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react_esm = require('../../react.esm.cjs.js');
var richTextEditor_RichTextEditor = require('../RichTextEditor.cjs.js');
require('react');
require('react-dom/test-utils');
require('react-dom');
require('react-dom/client');
require('@lit/react');
require('@igds/core-web/rich-text-editor');
require('@igds/core-web/constants');

react_esm.afterEach(() => {
  react_esm.cleanup();
});
react_esm.describe('RichTextEditor', () => {
  react_esm.it('should match snapshot', () => {
    const {
      container
    } = react_esm.render(jsxRuntime.jsx(richTextEditor_RichTextEditor.RichTextEditor, {
      label: "\u05DB\u05D5\u05EA\u05E8\u05EA",
      placeholder: "\u05DB\u05D0\u05DF \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05DC\u05D0 \u05EA\u05E9\u05D5\u05D1\u05D4 \u05D1\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05E9\u05E0\u05D9\u05D9\u05DD."
    }));
    react_esm.globalExpect(container).toMatchSnapshot();
  });
});
