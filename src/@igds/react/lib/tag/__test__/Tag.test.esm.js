import { jsxs, jsx } from 'react/jsx-runtime';
import { a as afterEach, d as describe, i as it, r as render, g as globalExpect, c as cleanup } from '../../react.esm.esm.js';
import { Tag } from '../Tag.esm.js';
import { TagGroup } from '../TagGroup.esm.js';
import 'react';
import 'react-dom/test-utils';
import 'react-dom';
import 'react-dom/client';
import '@lit/react';
import '@igds/core-web/tag';
import '@igds/core-web/constants';

afterEach(() => {
  cleanup();
});
describe('Tag', () => {
  it('should match snapshot', () => {
    const {
      container
    } = render(jsxs(TagGroup, {
      children: [jsx(Tag, {
        children: "Tag Example"
      }), jsx(Tag, {
        disabled: true,
        children: "Tag Example"
      }), jsx(Tag, {
        removable: true,
        children: "Tag Example"
      })]
    }));
    globalExpect(container).toMatchSnapshot();
  });
});
