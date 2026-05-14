import React from 'react';
import { TableRow as TableRowWC } from '@igds/core-web/table';
declare const TableRow: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TableRowWC>, "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "handleSlotChange" | "selected" | "expanded" | "cells" | "rowId" | "expandable"> & {} & Partial<Omit<TableRowWC, keyof HTMLElement>> & React.RefAttributes<TableRowWC>, "ref"> & React.RefAttributes<TableRowWC>>;
export { TableRow, TableRowWC };
