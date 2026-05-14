'use strict';

var drawer_Drawer = require('./Drawer.cjs.js');
var drawer = require('@igds/core-web/drawer');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Drawer = drawer_Drawer.Drawer;
Object.defineProperty(exports, "DrawerWC", {
	enumerable: true,
	get: function () { return drawer.Drawer; }
});
