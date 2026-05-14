import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { RadioButton } from '@igds/core-web/radio';
export { RadioButton as RadioWC } from '@igds/core-web/radio';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const RadioComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.radio,
  elementClass: RadioButton,
  events: {
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const Radio = forwardRef((props, ref) => {
  return jsx(RadioComponent, {
    ...props,
    ref: ref
  });
});

export { Radio };
