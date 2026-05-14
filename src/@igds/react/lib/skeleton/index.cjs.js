'use strict';

var skeleton_Skeleton = require('./Skeleton.cjs.js');
var skeleton = require('@igds/core-web/skeleton');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Skeleton = skeleton_Skeleton.Skeleton;
Object.defineProperty(exports, "SkeletonWC", {
	enumerable: true,
	get: function () { return skeleton.Skeleton; }
});
