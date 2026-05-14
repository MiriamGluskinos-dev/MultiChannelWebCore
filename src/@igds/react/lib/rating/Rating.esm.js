import { jsx } from 'react/jsx-runtime';
import { createComponent } from '@lit/react';
import React__default, { forwardRef } from 'react';
import { Rating as Rating$1 } from '@igds/core-web/rating';
export { Rating as RatingWC } from '@igds/core-web/rating';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const RatingComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.rating,
  elementClass: Rating$1,
  events: {
    onIgdsHover: IGDS_EVENTS.hover,
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Rating = forwardRef((props, ref) => {
  return jsx(RatingComponent, {
    ...props,
    ref: ref
  });
});

export { Rating };
