'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var modal = require('@igds/core-web/modal');
var constants = require('@igds/core-web/constants');

const ModalComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.modal,
  elementClass: modal.Modal,
  events: {
    onIgdsOpen: constants.IGDS_EVENTS.open,
    onIgdsClose: constants.IGDS_EVENTS.close,
    onIgdsPrimaryClick: constants.IGDS_EVENTS.primaryClick,
    onIgdsSecondaryClick: constants.IGDS_EVENTS.secondaryClick
  }
});
const Modal = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(ModalComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "ModalWC", {
    enumerable: true,
    get: function () { return modal.Modal; }
});
exports.Modal = Modal;
