import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Card as Card$1 } from '@igds/core-web/card';
export { Card as CardWC } from '@igds/core-web/card';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const CardComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.card,
  elementClass: Card$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsFavoriteToggle: IGDS_EVENTS.favoriteToggle,
    onIgdsPrimaryClick: IGDS_EVENTS.primaryClick,
    onIgdsSecondaryClick: IGDS_EVENTS.secondaryClick,
    onIgdsKeydown: IGDS_EVENTS.keydown,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const Card = forwardRef((props, ref) => {
  return jsx(CardComponent, {
    ...props,
    ref: ref
  });
});

export { Card };
