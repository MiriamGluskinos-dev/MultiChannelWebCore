import React from 'react';
import { TableCell as TableCellWC } from '@igds/core-web/table';
declare const TableCell: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TableCellWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete"> & {} & Partial<Omit<TableCellWC, keyof HTMLElement>> & React.RefAttributes<TableCellWC>, "ref"> & React.RefAttributes<TableCellWC>>;
export { TableCell, TableCellWC };
