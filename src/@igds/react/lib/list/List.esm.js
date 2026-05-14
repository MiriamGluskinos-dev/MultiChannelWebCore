import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { List as List$1 } from '@igds/core-web/list';
export { List as ListWC } from '@igds/core-web/list';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const ListComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.list,
  elementClass: List$1,
  events: {
    onIgdsDragStart: IGDS_EVENTS.dragStart,
    onIgdsDragEnd: IGDS_EVENTS.dragEnd
  }
});
const List = forwardRef((props, ref) => {
  return jsx(ListComponent, {
    ...props,
    ref: ref
  });
});

export { List };
