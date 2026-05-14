'use strict';

var toggle_Toggle = require('./Toggle.cjs.js');
var toggle = require('@igds/core-web/toggle');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Toggle = toggle_Toggle.Toggle;
Object.defineProperty(exports, "ToggleWC", {
	enumerable: true,
	get: function () { return toggle.Toggle; }
});
