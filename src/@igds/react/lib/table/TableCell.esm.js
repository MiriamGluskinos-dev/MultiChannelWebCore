import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { TableCell as TableCell$1 } from '@igds/core-web/table';
export { TableCell as TableCellWC } from '@igds/core-web/table';
import { IGDS_TAGS } from '@igds/core-web/constants';

const TableCellComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.tableCell,
  elementClass: TableCell$1
});
const TableCell = forwardRef((props, ref) => {
  return jsx(TableCellComponent, {
    ...props,
    ref: ref
  });
});

export { TableCell };
