import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Dropdown as Dropdown$1 } from '@igds/core-web/dropdown';
export { Dropdown as DropdownWC } from '@igds/core-web/dropdown';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const DropdownComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.dropdown,
  elementClass: Dropdown$1,
  events: {
    onIgdsClear: IGDS_EVENTS.clear,
    onIgdsKeydown: IGDS_EVENTS.keydown,
    onIgdsBlur: IGDS_EVENTS.blur,
    onIgdsFocus: IGDS_EVENTS.focus,
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Dropdown = forwardRef((props, ref) => {
  return jsx(DropdownComponent, {
    ...props,
    ref: ref
  });
});

export { Dropdown };
