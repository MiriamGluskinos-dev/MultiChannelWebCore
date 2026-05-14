'use strict';

var radioGroup_RadioGroup = require('./RadioGroup.cjs.js');
var radioGroup = require('@igds/core-web/radio-group');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.RadioGroup = radioGroup_RadioGroup.RadioGroup;
Object.defineProperty(exports, "RadioGroupWC", {
	enumerable: true,
	get: function () { return radioGroup.RadioGroup; }
});
