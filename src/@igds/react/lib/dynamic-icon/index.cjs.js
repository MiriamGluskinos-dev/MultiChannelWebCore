'use strict';

var dynamicIcon_DynamicIcon = require('./DynamicIcon.cjs.js');
var dynamicIcon = require('@igds/core-web/dynamic-icon');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.DynamicIcon = dynamicIcon_DynamicIcon.DynamicIcon;
Object.defineProperty(exports, "DynamicIconWC", {
	enumerable: true,
	get: function () { return dynamicIcon.DynamicIcon; }
});
