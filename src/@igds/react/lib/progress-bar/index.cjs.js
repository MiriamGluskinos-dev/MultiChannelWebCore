'use strict';

var progressBar_ProgressBar = require('./ProgressBar.cjs.js');
var progressBar = require('@igds/core-web/progress-bar');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.ProgressBar = progressBar_ProgressBar.ProgressBar;
Object.defineProperty(exports, "ProgressBarWC", {
	enumerable: true,
	get: function () { return progressBar.ProgressBar; }
});
