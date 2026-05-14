import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Tabs as Tabs$1 } from '@igds/core-web/tabs';
export { Tabs as TabsWC } from '@igds/core-web/tabs';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const TabsComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tabs,
  elementClass: Tabs$1,
  events: {
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Tabs = forwardRef((props, ref) => {
  return jsx(TabsComponent, {
    ...props,
    ref: ref
  });
});

export { Tabs };
