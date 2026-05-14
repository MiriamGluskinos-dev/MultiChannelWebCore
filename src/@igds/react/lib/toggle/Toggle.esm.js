import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Toggle as Toggle$1 } from '@igds/core-web/toggle';
export { Toggle as ToggleWC } from '@igds/core-web/toggle';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ToggleComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.toggle,
  elementClass: Toggle$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const Toggle = forwardRef((props, ref) => {
  return jsx(ToggleComponent, {
    ...props,
    ref: ref
  });
});

export { Toggle };
