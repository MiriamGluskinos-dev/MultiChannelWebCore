import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Drawer as Drawer$1 } from '@igds/core-web/drawer';
export { Drawer as DrawerWC } from '@igds/core-web/drawer';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const DrawerComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.drawer,
  elementClass: Drawer$1,
  events: {
    onIgdsOpen: IGDS_EVENTS.open,
    onIgdsClose: IGDS_EVENTS.close
  }
});
const Drawer = forwardRef((props, ref) => {
  return jsx(DrawerComponent, {
    ...props,
    ref: ref
  });
});

export { Drawer };
