'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var accordion = require('@igds/core-web/accordion');
var constants = require('@igds/core-web/constants');
var hoc_Slotted = require('../hoc/Slotted.cjs.js');

const AccordionItemComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.accordionItem,
  elementClass: accordion.AccordionItem,
  events: {
    onIgdsToggle: constants.IGDS_EVENTS.toggle
  }
});
const AccordionItem = ({
  onToggle,
  icon,
  header,
  children,
  isOpen,
  disabled,
  ...restProps
}) => {
  return jsxRuntime.jsx(AccordionItemComponent, {
    onToggle: onToggle,
    open: isOpen,
    disabled: disabled,
    icon: icon,
    header: header,
    ...restProps,
    children: jsxRuntime.jsx(hoc_Slotted.Slotted, {
      isContents: true,
      children: children
    })
  });
};

Object.defineProperty(exports, "AccordionItemWC", {
    enumerable: true,
    get: function () { return accordion.AccordionItem; }
});
exports.AccordionItem = AccordionItem;
