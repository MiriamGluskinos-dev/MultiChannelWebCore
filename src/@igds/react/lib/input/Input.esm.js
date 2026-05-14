import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Input as Input$1 } from '@igds/core-web/input';
export { Input as InputWC } from '@igds/core-web/input';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const InputComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.input,
  elementClass: Input$1,
  events: {
    onIgdsInput: IGDS_EVENTS.input,
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsBlur: IGDS_EVENTS.blur,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsInputIconClick: IGDS_EVENTS.inputIconClick
  }
});
const Input = forwardRef((props, ref) => {
  return jsx(InputComponent, {
    ...props,
    ref: ref
  });
});

export { Input };
