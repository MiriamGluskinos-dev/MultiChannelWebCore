'use strict';

var card_Card = require('./Card.cjs.js');
var card = require('@igds/core-web/card');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Card = card_Card.Card;
Object.defineProperty(exports, "CardWC", {
	enumerable: true,
	get: function () { return card.Card; }
});
