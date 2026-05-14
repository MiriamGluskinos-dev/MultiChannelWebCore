'use strict';

var radio_Radio = require('./Radio.cjs.js');
var radio = require('@igds/core-web/radio');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Radio = radio_Radio.Radio;
Object.defineProperty(exports, "RadioWC", {
	enumerable: true,
	get: function () { return radio.RadioButton; }
});
