'use strict';

var pagination_Pagination = require('./Pagination.cjs.js');
var pagination_PaginationItem = require('./PaginationItem.cjs.js');
var pagination = require('@igds/core-web/pagination');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Pagination = pagination_Pagination.Pagination;
exports.PaginationItem = pagination_PaginationItem.PaginationItem;
Object.defineProperty(exports, "PaginationItemWC", {
	enumerable: true,
	get: function () { return pagination.PaginationItem; }
});
Object.defineProperty(exports, "PaginationWC", {
	enumerable: true,
	get: function () { return pagination.Pagination; }
});
