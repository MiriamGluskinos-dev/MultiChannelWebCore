import React from 'react';
import { TableHeader as TableHeaderWC } from '@igds/core-web/table';
declare const TableHeader: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TableHeaderWC>, "connectedCallback" | "disconnectedCallback" | "updated" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "columns"> & {} & Partial<Omit<TableHeaderWC, keyof HTMLElement>> & React.RefAttributes<TableHeaderWC>, "ref"> & React.RefAttributes<TableHeaderWC>>;
export { TableHeader, TableHeaderWC };
