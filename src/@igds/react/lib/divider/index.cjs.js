'use strict';

var divider_Divider = require('./Divider.cjs.js');
var divider = require('@igds/core-web/divider');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Divider = divider_Divider.Divider;
Object.defineProperty(exports, "DividerWC", {
	enumerable: true,
	get: function () { return divider.Divider; }
});
