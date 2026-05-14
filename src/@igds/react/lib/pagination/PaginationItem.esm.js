import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { PaginationItem as PaginationItem$1 } from '@igds/core-web/pagination';
export { PaginationItem as PaginationItemWC } from '@igds/core-web/pagination';
import { IGDS_TAGS } from '@igds/core-web/constants';

const PaginationItemComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.paginationItem,
  elementClass: PaginationItem$1
});
const PaginationItem = forwardRef((props, ref) => {
  return jsx(PaginationItemComponent, {
    ...props,
    ref: ref
  });
});

export { PaginationItem };
