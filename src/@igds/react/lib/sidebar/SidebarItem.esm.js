import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { SidebarItem as SidebarItem$1 } from '@igds/core-web/sidebar';
export { SidebarItem as SidebarItemWC } from '@igds/core-web/sidebar';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SidebarItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.sidebarItem,
  elementClass: SidebarItem$1,
  events: {
    onIgdsHover: IGDS_EVENTS.hover,
    onIgdsClick: IGDS_EVENTS.click
  }
});
const SidebarItem = forwardRef((props, ref) => {
  return jsx(SidebarItemComponent, {
    ...props,
    ref: ref
  });
});

export { SidebarItem };
