'use strict';

var checkbox_Checkbox = require('./Checkbox.cjs.js');
var checkbox = require('@igds/core-web/checkbox');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Checkbox = checkbox_Checkbox.Checkbox;
Object.defineProperty(exports, "CheckboxWC", {
	enumerable: true,
	get: function () { return checkbox.Checkbox; }
});
