import { jsx } from 'react/jsx-runtime';
import { a as afterEach, d as describe, i as it, r as render, g as globalExpect, c as cleanup } from '../../react.esm.esm.js';
import { RichTextEditor } from '../RichTextEditor.esm.js';
import 'react';
import 'react-dom/test-utils';
import 'react-dom';
import 'react-dom/client';
import '@lit/react';
import '@igds/core-web/rich-text-editor';
import '@igds/core-web/constants';

afterEach(() => {
  cleanup();
});
describe('RichTextEditor', () => {
  it('should match snapshot', () => {
    const {
      container
    } = render(jsx(RichTextEditor, {
      label: "\u05DB\u05D5\u05EA\u05E8\u05EA",
      placeholder: "\u05DB\u05D0\u05DF \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05DC\u05D0 \u05EA\u05E9\u05D5\u05D1\u05D4 \u05D1\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D5 \u05E9\u05E0\u05D9\u05D9\u05DD."
    }));
    globalExpect(container).toMatchSnapshot();
  });
});
