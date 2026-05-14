import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { VerticalFilter as VerticalFilter$1 } from '@igds/core-web/filters';
export { VerticalFilter as VerticalFilterWC } from '@igds/core-web/filters';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const VerticalFilterComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.verticalFilter,
  elementClass: VerticalFilter$1,
  events: {
    onIgdsApply: IGDS_EVENTS.apply,
    onIgdsFilterChanged: IGDS_EVENTS.filterChanged,
    onIgdsClear: IGDS_EVENTS.clear
  }
});
const VerticalFilter = forwardRef((props, ref) => {
  return jsx(VerticalFilterComponent, {
    ...props,
    ref: ref
  });
});

export { VerticalFilter };
