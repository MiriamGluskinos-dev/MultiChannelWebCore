'use strict';

var dropdown_Dropdown = require('./Dropdown.cjs.js');
var dropdown = require('@igds/core-web/dropdown');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Dropdown = dropdown_Dropdown.Dropdown;
Object.defineProperty(exports, "DropdownWC", {
	enumerable: true,
	get: function () { return dropdown.Dropdown; }
});
