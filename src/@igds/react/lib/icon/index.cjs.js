'use strict';

var icon_Icon = require('./Icon.cjs.js');
var icon = require('@igds/core-web/icon');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Icon = icon_Icon.Icon;
Object.defineProperty(exports, "IconWC", {
	enumerable: true,
	get: function () { return icon.Icon; }
});
