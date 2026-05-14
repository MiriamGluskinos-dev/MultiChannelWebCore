'use strict';

var badge_Badge = require('./Badge.cjs.js');
var badge = require('@igds/core-web/badge');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Badge = badge_Badge.Badge;
Object.defineProperty(exports, "BadgeWC", {
	enumerable: true,
	get: function () { return badge.Badge; }
});
