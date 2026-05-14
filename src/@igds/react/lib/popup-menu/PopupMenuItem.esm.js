import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { PopupMenuItem as PopupMenuItem$1 } from '@igds/core-web/popup-menu';
export { PopupMenuItem as PopupMenuItemWC } from '@igds/core-web/popup-menu';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const PopupMenuItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.popupMenuItem,
  elementClass: PopupMenuItem$1,
  events: {
    onIgdsSelect: IGDS_EVENTS.select
  }
});
const PopupMenuItem = forwardRef((props, ref) => {
  return jsx(PopupMenuItemComponent, {
    ...props,
    ref: ref
  });
});

export { PopupMenuItem };
