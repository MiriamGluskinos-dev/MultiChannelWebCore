import { jsx } from 'react/jsx-runtime';
import { a as afterEach, d as describe, i as it, r as render, g as globalExpect, c as cleanup } from '../../react.esm.esm.js';
import { Rating } from '../Rating.esm.js';
import 'react';
import 'react-dom/test-utils';
import 'react-dom';
import 'react-dom/client';
import '@lit/react';
import '@igds/core-web/rating';
import '@igds/core-web/constants';

afterEach(() => {
  cleanup();
});
describe('Rating', () => {
  it('should match snapshot', () => {
    const {
      container
    } = render(jsx(Rating, {
      label: "\u05E6\u05D9\u05D5\u05DF \u05D4\u05D3\u05D9\u05E8\u05D5\u05D2"
    }));
    globalExpect(container).toMatchSnapshot();
  });
});
