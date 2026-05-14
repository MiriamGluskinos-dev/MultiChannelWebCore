import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Tab as Tab$1 } from '@igds/core-web/tabs';
export { Tab as TabWC } from '@igds/core-web/tabs';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TabComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tab,
  elementClass: Tab$1
});
const Tab = forwardRef((props, ref) => {
  return jsx(TabComponent, {
    ...props,
    ref: ref
  });
});

export { Tab };
