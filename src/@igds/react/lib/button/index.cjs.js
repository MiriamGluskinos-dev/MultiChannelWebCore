'use strict';

var button_Button = require('./Button.cjs.js');
var button = require('@igds/core-web/button');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Button = button_Button.Button;
Object.defineProperty(exports, "ButtonWC", {
	enumerable: true,
	get: function () { return button.Button; }
});
