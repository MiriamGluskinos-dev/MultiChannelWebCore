'use strict';

var anchor_AnchorMenu = require('./AnchorMenu.cjs.js');
var anchor_Anchor = require('./Anchor.cjs.js');
var anchor = require('@igds/core-web/anchor');
require('react/jsx-runtime');
require('@lit/react');
require('react');
require('@igds/core-web/constants');



exports.AnchorMenu = anchor_AnchorMenu.AnchorMenu;
exports.Anchor = anchor_Anchor.Anchor;
Object.defineProperty(exports, "AnchorMenuWC", {
	enumerable: true,
	get: function () { return anchor.AnchorMenu; }
});
Object.defineProperty(exports, "AnchorWC", {
	enumerable: true,
	get: function () { return anchor.Anchor; }
});
