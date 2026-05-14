import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { RadioGroup as RadioGroup$1 } from '@igds/core-web/radio-group';
export { RadioGroup as RadioGroupWC } from '@igds/core-web/radio-group';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const RadioGroupComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.radioGroup,
  elementClass: RadioGroup$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change
  }
});
const RadioGroup = forwardRef((props, ref) => {
  return jsx(RadioGroupComponent, {
    ...props,
    ref: ref
  });
});

export { RadioGroup };
