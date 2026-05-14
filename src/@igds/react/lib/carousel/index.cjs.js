'use strict';

var carousel_Carousel = require('./Carousel.cjs.js');
var carousel_CarouselItem = require('./CarouselItem.cjs.js');
var carousel = require('@igds/core-web/carousel');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Carousel = carousel_Carousel.Carousel;
exports.CarouselItem = carousel_CarouselItem.CarouselItem;
Object.defineProperty(exports, "CarouselItemWC", {
	enumerable: true,
	get: function () { return carousel.CarouselItem; }
});
Object.defineProperty(exports, "CarouselWC", {
	enumerable: true,
	get: function () { return carousel.Carousel; }
});
