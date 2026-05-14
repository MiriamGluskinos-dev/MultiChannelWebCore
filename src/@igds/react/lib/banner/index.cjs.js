'use strict';

var banner_Banner = require('./Banner.cjs.js');
var banner = require('@igds/core-web/banner');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Banner = banner_Banner.Banner;
Object.defineProperty(exports, "BannerWC", {
	enumerable: true,
	get: function () { return banner.Banner; }
});
