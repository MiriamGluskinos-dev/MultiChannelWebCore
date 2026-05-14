import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { TableHeader as TableHeader$1 } from '@igds/core-web/table';
export { TableHeader as TableHeaderWC } from '@igds/core-web/table';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TableHeaderComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tableHeader,
  elementClass: TableHeader$1
});
const TableHeader = forwardRef((props, ref) => {
  return jsx(TableHeaderComponent, {
    ...props,
    ref: ref
  });
});

export { TableHeader };
