'use strict';

var input_Input = require('./Input.cjs.js');
var input = require('@igds/core-web/input');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Input = input_Input.Input;
Object.defineProperty(exports, "InputWC", {
	enumerable: true,
	get: function () { return input.Input; }
});
