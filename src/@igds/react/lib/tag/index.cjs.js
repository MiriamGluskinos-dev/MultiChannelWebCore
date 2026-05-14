'use strict';

var tag_Tag = require('./Tag.cjs.js');
var tag_TagGroup = require('./TagGroup.cjs.js');
var tag = require('@igds/core-web/tag');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Tag = tag_Tag.Tag;
exports.TagGroup = tag_TagGroup.TagGroup;
Object.defineProperty(exports, "TagGroupWC", {
	enumerable: true,
	get: function () { return tag.TagGroup; }
});
Object.defineProperty(exports, "TagWC", {
	enumerable: true,
	get: function () { return tag.Tag; }
});
