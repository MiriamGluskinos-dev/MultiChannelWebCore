import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { PopupMenu as PopupMenu$1 } from '@igds/core-web/popup-menu';
export { PopupMenu as PopupMenuWC } from '@igds/core-web/popup-menu';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const PopupMenuComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.popupMenu,
  elementClass: PopupMenu$1,
  events: {
    onIgdsOpen: IGDS_EVENTS.open,
    onIgdsClose: IGDS_EVENTS.close,
    onIgdsSelect: IGDS_EVENTS.select
  }
});
const PopupMenu = forwardRef((props, ref) => {
  return jsx(PopupMenuComponent, {
    ...props,
    ref: ref
  });
});

export { PopupMenu };
