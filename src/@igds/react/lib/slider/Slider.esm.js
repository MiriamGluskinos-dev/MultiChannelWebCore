import { jsx } from 'react/jsx-runtime';
import { createComponent } from '@lit/react';
import React__default, { forwardRef } from 'react';
import { Slider as Slider$1 } from '@igds/core-web/slider';
export { Slider as SliderWC } from '@igds/core-web/slider';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SliderComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.slider,
  elementClass: Slider$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Slider = forwardRef((props, ref) => {
  return jsx(SliderComponent, {
    ...props,
    ref: ref
  });
});

export { Slider };
