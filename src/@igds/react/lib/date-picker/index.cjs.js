'use strict';

var datePicker_DatePicker = require('./DatePicker.cjs.js');
var datePicker = require('@igds/core-web/date-picker');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.DatePicker = datePicker_DatePicker.DatePicker;
Object.defineProperty(exports, "DatePickerWC", {
	enumerable: true,
	get: function () { return datePicker.DatePicker; }
});
