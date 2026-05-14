'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const Slotted = React.forwardRef(({
  slot,
  children,
  isContents
}, ref) => {
  return jsxRuntime.jsx("div", {
    ref: ref,
    slot: slot,
    style: {
      display: isContents ? 'contents' : undefined
    },
    children: children
  });
});

exports.Slotted = Slotted;
