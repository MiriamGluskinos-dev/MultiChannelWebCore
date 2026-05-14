import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Accordion as Accordion$1 } from '@igds/core-web/accordion';
export { Accordion as AccordionWC } from '@igds/core-web/accordion';
import { IGDS_TAGS } from '@igds/core-web/constants';

const AccordionComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.accordion,
  elementClass: Accordion$1
});
const Accordion = forwardRef((props, ref) => {
  return jsx(AccordionComponent, {
    ...props,
    ref: ref
  });
});

export { Accordion };
