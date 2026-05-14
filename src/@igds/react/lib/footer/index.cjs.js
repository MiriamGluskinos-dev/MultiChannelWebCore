'use strict';

var footer_Footer = require('./Footer.cjs.js');
var footer_FooterNavigation = require('./FooterNavigation.cjs.js');
var footer_FooterNavigationItem = require('./FooterNavigationItem.cjs.js');
var footer = require('@igds/core-web/footer');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Footer = footer_Footer.Footer;
exports.FooterNavigation = footer_FooterNavigation.FooterNavigation;
exports.FooterNavigationItem = footer_FooterNavigationItem.FooterNavigationItem;
Object.defineProperty(exports, "FooterNavigationItemWC", {
	enumerable: true,
	get: function () { return footer.FooterNavigationItem; }
});
Object.defineProperty(exports, "FooterNavigationWC", {
	enumerable: true,
	get: function () { return footer.FooterNavigation; }
});
Object.defineProperty(exports, "FooterWC", {
	enumerable: true,
	get: function () { return footer.Footer; }
});
