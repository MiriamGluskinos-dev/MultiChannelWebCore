'use strict';

var modal_Modal = require('./Modal.cjs.js');
var modal = require('@igds/core-web/modal');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Modal = modal_Modal.Modal;
Object.defineProperty(exports, "ModalWC", {
	enumerable: true,
	get: function () { return modal.Modal; }
});
