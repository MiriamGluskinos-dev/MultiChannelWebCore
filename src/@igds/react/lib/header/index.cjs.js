'use strict';

var header_Header = require('./Header.cjs.js');
var header = require('@igds/core-web/header');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Header = header_Header.Header;
Object.defineProperty(exports, "HeaderWC", {
	enumerable: true,
	get: function () { return header.Header; }
});
