'use strict';

var filter_HorizontalFilter = require('./HorizontalFilter.cjs.js');
var filter_VerticalFilter = require('./VerticalFilter.cjs.js');
var filters = require('@igds/core-web/filters');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.HorizontalFilter = filter_HorizontalFilter.HorizontalFilter;
exports.VerticalFilter = filter_VerticalFilter.VerticalFilter;
Object.defineProperty(exports, "HorizontalFilterWC", {
	enumerable: true,
	get: function () { return filters.HorizontalFilter; }
});
Object.defineProperty(exports, "VerticalFilterWC", {
	enumerable: true,
	get: function () { return filters.VerticalFilter; }
});
