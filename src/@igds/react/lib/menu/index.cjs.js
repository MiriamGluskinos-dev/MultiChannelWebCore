'use strict';

var menu_Menu = require('./Menu.cjs.js');
var menu_MenuItem = require('./MenuItem.cjs.js');
var menu = require('@igds/core-web/menu');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Menu = menu_Menu.Menu;
exports.MenuItem = menu_MenuItem.MenuItem;
Object.defineProperty(exports, "MenuItemWC", {
	enumerable: true,
	get: function () { return menu.MenuItem; }
});
Object.defineProperty(exports, "MenuWC", {
	enumerable: true,
	get: function () { return menu.Menu; }
});
