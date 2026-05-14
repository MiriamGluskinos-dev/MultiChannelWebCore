import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { TabPanel as TabPanel$1 } from '@igds/core-web/tabs';
export { TabPanel as TabPanelWC } from '@igds/core-web/tabs';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TabPanelComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tabPanel,
  elementClass: TabPanel$1
});
const TabPanel = forwardRef((props, ref) => {
  return jsx(TabPanelComponent, {
    ...props,
    ref: ref
  });
});

export { TabPanel };
