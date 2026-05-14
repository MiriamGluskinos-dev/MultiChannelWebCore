import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { createComponent } from '@lit/react';
import { AccordionItem as AccordionItem$1 } from '@igds/core-web/accordion';
export { AccordionItem as AccordionItemWC } from '@igds/core-web/accordion';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';
import { Slotted } from '../hoc/Slotted.esm.js';

const AccordionItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.accordionItem,
  elementClass: AccordionItem$1,
  events: {
    onIgdsToggle: IGDS_EVENTS.toggle
  }
});
const AccordionItem = ({
  onToggle,
  icon,
  header,
  children,
  isOpen,
  disabled,
  ...restProps
}) => {
  return jsx(AccordionItemComponent, {
    onToggle: onToggle,
    open: isOpen,
    disabled: disabled,
    icon: icon,
    header: header,
    ...restProps,
    children: jsx(Slotted, {
      isContents: true,
      children: children
    })
  });
};

export { AccordionItem };
