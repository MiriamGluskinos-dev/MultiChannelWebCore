'use strict';

var slider_Slider = require('./Slider.cjs.js');
var slider = require('@igds/core-web/slider');
require('react/jsx-runtime');
require('@lit/react');
require('react');
require('@igds/core-web/constants');



exports.Slider = slider_Slider.Slider;
Object.defineProperty(exports, "SliderWC", {
	enumerable: true,
	get: function () { return slider.Slider; }
});
