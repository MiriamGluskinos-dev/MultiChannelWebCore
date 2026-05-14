import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { HorizontalFilter as HorizontalFilter$1 } from '@igds/core-web/filters';
export { HorizontalFilter as HorizontalFilterWC } from '@igds/core-web/filters';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const HorizontalFilterComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.horizontalFilter,
  elementClass: HorizontalFilter$1,
  events: {
    onIgdsApply: IGDS_EVENTS.apply,
    onIgdsFilterChanged: IGDS_EVENTS.filterChanged,
    onIgdsClear: IGDS_EVENTS.clear
  }
});
const HorizontalFilter = forwardRef((props, ref) => {
  return jsx(HorizontalFilterComponent, {
    ...props,
    ref: ref
  });
});

export { HorizontalFilter };
