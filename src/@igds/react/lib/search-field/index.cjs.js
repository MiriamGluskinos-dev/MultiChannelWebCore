'use strict';

var searchField_SearchField = require('./SearchField.cjs.js');
var searchField = require('@igds/core-web/search-field');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.SearchField = searchField_SearchField.SearchField;
Object.defineProperty(exports, "SearchFieldWC", {
	enumerable: true,
	get: function () { return searchField.SearchField; }
});
