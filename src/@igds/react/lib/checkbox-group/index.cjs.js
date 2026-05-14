'use strict';

var checkboxGroup_CheckboxGroup = require('./CheckboxGroup.cjs.js');
var checkboxGroup = require('@igds/core-web/checkbox-group');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.CheckboxGroup = checkboxGroup_CheckboxGroup.CheckboxGroup;
Object.defineProperty(exports, "CheckboxGroupWC", {
	enumerable: true,
	get: function () { return checkboxGroup.CheckboxGroup; }
});
