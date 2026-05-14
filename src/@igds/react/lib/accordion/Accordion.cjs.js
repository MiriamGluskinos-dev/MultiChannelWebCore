'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var accordion = require('@igds/core-web/accordion');
var constants = require('@igds/core-web/constants');

const AccordionComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.accordion,
  elementClass: accordion.Accordion
});
const Accordion = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(AccordionComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "AccordionWC", {
    enumerable: true,
    get: function () { return accordion.Accordion; }
});
exports.Accordion = Accordion;
