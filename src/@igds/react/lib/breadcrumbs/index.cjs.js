'use strict';

var breadcrumbs_Breadcrumbs = require('./Breadcrumbs.cjs.js');
var breadcrumbs_BreadcrumbItem = require('./BreadcrumbItem.cjs.js');
var breadcrumbs = require('@igds/core-web/breadcrumbs');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Breadcrumbs = breadcrumbs_Breadcrumbs.Breadcrumbs;
exports.BreadcrumbItem = breadcrumbs_BreadcrumbItem.BreadcrumbItem;
Object.defineProperty(exports, "BreadcrumbItemWC", {
	enumerable: true,
	get: function () { return breadcrumbs.BreadcrumbItem; }
});
Object.defineProperty(exports, "BreadcrumbsWC", {
	enumerable: true,
	get: function () { return breadcrumbs.Breadcrumbs; }
});
