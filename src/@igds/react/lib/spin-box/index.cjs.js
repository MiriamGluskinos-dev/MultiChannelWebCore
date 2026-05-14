'use strict';

var spinBox_SpinBox = require('./SpinBox.cjs.js');
var spinBox = require('@igds/core-web/spin-box');
require('react/jsx-runtime');
require('@lit/react');
require('react');
require('@igds/core-web/constants');



exports.SpinBox = spinBox_SpinBox.SpinBox;
Object.defineProperty(exports, "SpinBoxWC", {
	enumerable: true,
	get: function () { return spinBox.SpinBox; }
});
