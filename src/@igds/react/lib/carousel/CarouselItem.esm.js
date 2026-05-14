import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { CarouselItem as CarouselItem$1 } from '@igds/core-web/carousel';
export { CarouselItem as CarouselItemWC } from '@igds/core-web/carousel';
import { IGDS_TAGS } from '@igds/core-web/constants';

const CarouselItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.carouselItem,
  elementClass: CarouselItem$1
});
const CarouselItem = forwardRef((props, ref) => {
  return jsx(CarouselItemComponent, {
    ...props,
    ref: ref
  });
});

export { CarouselItem };
