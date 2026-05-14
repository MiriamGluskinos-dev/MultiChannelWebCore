'use strict';

var sidebar_Sidebar = require('./Sidebar.cjs.js');
var sidebar_SidebarItem = require('./SidebarItem.cjs.js');
var sidebar = require('@igds/core-web/sidebar');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Sidebar = sidebar_Sidebar.Sidebar;
exports.SidebarItem = sidebar_SidebarItem.SidebarItem;
Object.defineProperty(exports, "SidebarItemWC", {
	enumerable: true,
	get: function () { return sidebar.SidebarItem; }
});
Object.defineProperty(exports, "SidebarWC", {
	enumerable: true,
	get: function () { return sidebar.Sidebar; }
});
