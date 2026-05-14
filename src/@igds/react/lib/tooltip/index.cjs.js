'use strict';

var tooltip_Tooltip = require('./Tooltip.cjs.js');
var tooltip = require('@igds/core-web/tooltip');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Tooltip = tooltip_Tooltip.Tooltip;
Object.defineProperty(exports, "TooltipWC", {
	enumerable: true,
	get: function () { return tooltip.Tooltip; }
});
