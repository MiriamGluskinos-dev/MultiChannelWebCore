import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Checkbox as Checkbox$1 } from '@igds/core-web/checkbox';
export { Checkbox as CheckboxWC } from '@igds/core-web/checkbox';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const CheckboxComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.checkbox,
  elementClass: Checkbox$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsBlur: IGDS_EVENTS.blur
  }
});
const Checkbox = forwardRef((props, ref) => {
  return jsx(CheckboxComponent, {
    ...props,
    ref: ref
  });
});

export { Checkbox };
