'use strict';

var fileUploader_FileUploader = require('./FileUploader.cjs.js');
var fileUploader = require('@igds/core-web/file-uploader');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.FileUploader = fileUploader_FileUploader.FileUploader;
Object.defineProperty(exports, "FileUploaderWC", {
	enumerable: true,
	get: function () { return fileUploader.FileUploader; }
});
