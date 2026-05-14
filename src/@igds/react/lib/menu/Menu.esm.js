import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Menu as Menu$1 } from '@igds/core-web/menu';
export { Menu as MenuWC } from '@igds/core-web/menu';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const MenuComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.menu,
  elementClass: Menu$1,
  events: {
    onIgdsOpen: IGDS_EVENTS.open,
    onIgdsClose: IGDS_EVENTS.close,
    onIgdsClick: IGDS_EVENTS.click
  }
});
const Menu = forwardRef((props, ref) => {
  return jsx(MenuComponent, {
    ...props,
    ref: ref
  });
});

export { Menu };
