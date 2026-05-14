'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react_esm = require('../../react.esm.cjs.js');
var tag_Tag = require('../Tag.cjs.js');
var tag_TagGroup = require('../TagGroup.cjs.js');
require('react');
require('react-dom/test-utils');
require('react-dom');
require('react-dom/client');
require('@lit/react');
require('@igds/core-web/tag');
require('@igds/core-web/constants');

react_esm.afterEach(() => {
  react_esm.cleanup();
});
react_esm.describe('Tag', () => {
  react_esm.it('should match snapshot', () => {
    const {
      container
    } = react_esm.render(jsxRuntime.jsxs(tag_TagGroup.TagGroup, {
      children: [jsxRuntime.jsx(tag_Tag.Tag, {
        children: "Tag Example"
      }), jsxRuntime.jsx(tag_Tag.Tag, {
        disabled: true,
        children: "Tag Example"
      }), jsxRuntime.jsx(tag_Tag.Tag, {
        removable: true,
        children: "Tag Example"
      })]
    }));
    react_esm.globalExpect(container).toMatchSnapshot();
  });
});
