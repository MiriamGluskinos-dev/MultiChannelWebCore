import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Carousel as Carousel$1 } from '@igds/core-web/carousel';
export { Carousel as CarouselWC } from '@igds/core-web/carousel';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const CarouselComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.carousel,
  elementClass: Carousel$1,
  events: {
    onIgdsSlideChange: IGDS_EVENTS.slideChange,
    onIgdsNext: IGDS_EVENTS.next,
    onIgdsPrev: IGDS_EVENTS.prev
  }
});
const Carousel = forwardRef((props, ref) => {
  return jsx(CarouselComponent, {
    ...props,
    ref: ref
  });
});

export { Carousel };
