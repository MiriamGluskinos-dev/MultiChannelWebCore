import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { MenuItem as MenuItem$1 } from '@igds/core-web/menu';
export { MenuItem as MenuItemWC } from '@igds/core-web/menu';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const MenuItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.menuItem,
  elementClass: MenuItem$1,
  events: {
    onIgdsHover: IGDS_EVENTS.hover,
    onIgdsClick: IGDS_EVENTS.click
  }
});
const MenuItem = forwardRef((props, ref) => {
  return jsx(MenuItemComponent, {
    ...props,
    ref: ref
  });
});

export { MenuItem };
