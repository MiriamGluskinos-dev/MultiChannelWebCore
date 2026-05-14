'use strict';

var toast_Toast = require('./Toast.cjs.js');
var toast = require('@igds/core-web/toast');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Toast = toast_Toast.Toast;
Object.defineProperty(exports, "ToastWC", {
	enumerable: true,
	get: function () { return toast.Toast; }
});
