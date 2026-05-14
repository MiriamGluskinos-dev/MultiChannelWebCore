'use strict';

var popupMenu_PopupMenu = require('./PopupMenu.cjs.js');
var popupMenu_PopupMenuItem = require('./PopupMenuItem.cjs.js');
var popupMenu = require('@igds/core-web/popup-menu');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.PopupMenu = popupMenu_PopupMenu.PopupMenu;
exports.PopupMenuItem = popupMenu_PopupMenuItem.PopupMenuItem;
Object.defineProperty(exports, "PopupMenuItemWC", {
	enumerable: true,
	get: function () { return popupMenu.PopupMenuItem; }
});
Object.defineProperty(exports, "PopupMenuWC", {
	enumerable: true,
	get: function () { return popupMenu.PopupMenu; }
});
