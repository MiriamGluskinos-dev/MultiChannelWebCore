'use strict';

var profilePicker_ProfilePicker = require('./ProfilePicker.cjs.js');
var profilePicker = require('@igds/core-web/profile-picker');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.ProfilePicker = profilePicker_ProfilePicker.ProfilePicker;
Object.defineProperty(exports, "ProfilePickerWC", {
	enumerable: true,
	get: function () { return profilePicker.ProfilePicker; }
});
