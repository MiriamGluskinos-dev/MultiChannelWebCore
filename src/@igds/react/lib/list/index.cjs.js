'use strict';

var list_List = require('./List.cjs.js');
var list_ListItem = require('./ListItem.cjs.js');
var list = require('@igds/core-web/list');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.List = list_List.List;
exports.ListItem = list_ListItem.ListItem;
Object.defineProperty(exports, "ListItemWC", {
	enumerable: true,
	get: function () { return list.ListItem; }
});
Object.defineProperty(exports, "ListWC", {
	enumerable: true,
	get: function () { return list.List; }
});
