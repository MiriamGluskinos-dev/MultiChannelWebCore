import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { Table as Table$1 } from '@igds/core-web/table';
export { Table as TableWC } from '@igds/core-web/table';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const TableComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.table,
  elementClass: Table$1,
  events: {
    onIgdsDragStart: IGDS_EVENTS.dragStart,
    onIgdsDragEnd: IGDS_EVENTS.dragEnd,
    onIgdsRowSelect: IGDS_EVENTS.rowSelect,
    onIgdsCallAction: IGDS_EVENTS.callAction,
    onIgdsSortingOrderChange: IGDS_EVENTS.sortingOrderChange,
    onIgdsCellChange: IGDS_EVENTS.cellChange,
    onIgdsCellClick: IGDS_EVENTS.cellClick,
    onIgdsCellEnterPressed: IGDS_EVENTS.cellEnterPressed,
    onIgdsCellLinkClick: IGDS_EVENTS.cellLinkClick
  }
});
const Table = forwardRef((props, ref) => {
  return jsx(TableComponent, {
    ...props,
    ref: ref
  });
});

export { Table };
