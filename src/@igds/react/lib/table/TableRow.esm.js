import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { TableRow as TableRow$1 } from '@igds/core-web/table';
export { TableRow as TableRowWC } from '@igds/core-web/table';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TableRowComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tableRow,
  elementClass: TableRow$1
});
const TableRow = forwardRef((props, ref) => {
  return jsx(TableRowComponent, {
    ...props,
    ref: ref
  });
});

export { TableRow };
