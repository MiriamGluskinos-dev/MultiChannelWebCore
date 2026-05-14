'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react_esm = require('../../react.esm.cjs.js');
var rating_Rating = require('../Rating.cjs.js');
require('react');
require('react-dom/test-utils');
require('react-dom');
require('react-dom/client');
require('@lit/react');
require('@igds/core-web/rating');
require('@igds/core-web/constants');

react_esm.afterEach(() => {
  react_esm.cleanup();
});
react_esm.describe('Rating', () => {
  react_esm.it('should match snapshot', () => {
    const {
      container
    } = react_esm.render(jsxRuntime.jsx(rating_Rating.Rating, {
      label: "\u05E6\u05D9\u05D5\u05DF \u05D4\u05D3\u05D9\u05E8\u05D5\u05D2"
    }));
    react_esm.globalExpect(container).toMatchSnapshot();
  });
});
