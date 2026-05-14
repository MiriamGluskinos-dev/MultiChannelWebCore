import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Sidebar as Sidebar$1 } from '@igds/core-web/sidebar';
export { Sidebar as SidebarWC } from '@igds/core-web/sidebar';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SidebarComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.sidebar,
  elementClass: Sidebar$1,
  events: {
    onIgdsOpen: IGDS_EVENTS.open,
    onIgdsClose: IGDS_EVENTS.close
  }
});
const Sidebar = forwardRef((props, ref) => {
  return jsx(SidebarComponent, {
    ...props,
    ref: ref
  });
});

export { Sidebar };
