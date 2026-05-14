'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@lit/react');
var card = require('@igds/core-web/card');
var constants = require('@igds/core-web/constants');

const CardComponent = react.createComponent({
  react: React,
  tagName: constants.IGDS_TAGS.card,
  elementClass: card.Card,
  events: {
    onIgdsClick: constants.IGDS_EVENTS.click,
    onIgdsFavoriteToggle: constants.IGDS_EVENTS.favoriteToggle,
    onIgdsPrimaryClick: constants.IGDS_EVENTS.primaryClick,
    onIgdsSecondaryClick: constants.IGDS_EVENTS.secondaryClick,
    onIgdsKeydown: constants.IGDS_EVENTS.keydown,
    onIgdsFocus: constants.IGDS_EVENTS.focus,
    onIgdsBlur: constants.IGDS_EVENTS.blur
  }
});
const Card = React.forwardRef((props, ref) => {
  return jsxRuntime.jsx(CardComponent, {
    ...props,
    ref: ref
  });
});

Object.defineProperty(exports, "CardWC", {
    enumerable: true,
    get: function () { return card.Card; }
});
exports.Card = Card;
