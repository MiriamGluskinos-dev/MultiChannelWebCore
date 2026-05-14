import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Pagination as Pagination$1 } from '@igds/core-web/pagination';
export { Pagination as PaginationWC } from '@igds/core-web/pagination';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const PaginationComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.pagination,
  elementClass: Pagination$1,
  events: {
    onIgdsClick: IGDS_EVENTS.click,
    onIgdsChange: IGDS_EVENTS.change
  }
});
const Pagination = forwardRef((props, ref) => {
  return jsx(PaginationComponent, {
    ...props,
    ref: ref
  });
});

export { Pagination };
