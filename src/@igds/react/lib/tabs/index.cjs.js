'use strict';

var tabs_Tabs = require('./Tabs.cjs.js');
var tabs_Tab = require('./Tab.cjs.js');
var tabs_TabPanel = require('./TabPanel.cjs.js');
var tabs = require('@igds/core-web/tabs');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Tabs = tabs_Tabs.Tabs;
exports.Tab = tabs_Tab.Tab;
exports.TabPanel = tabs_TabPanel.TabPanel;
Object.defineProperty(exports, "TabPanelWC", {
	enumerable: true,
	get: function () { return tabs.TabPanel; }
});
Object.defineProperty(exports, "TabWC", {
	enumerable: true,
	get: function () { return tabs.Tab; }
});
Object.defineProperty(exports, "TabsWC", {
	enumerable: true,
	get: function () { return tabs.Tabs; }
});
