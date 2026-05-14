'use strict';

var rating_Rating = require('./Rating.cjs.js');
var rating = require('@igds/core-web/rating');
require('react/jsx-runtime');
require('@lit/react');
require('react');
require('@igds/core-web/constants');



exports.Rating = rating_Rating.Rating;
Object.defineProperty(exports, "RatingWC", {
	enumerable: true,
	get: function () { return rating.Rating; }
});
