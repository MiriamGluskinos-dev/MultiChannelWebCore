import React from 'react';
import { Tab as TabWC } from '@igds/core-web/tabs';
declare const Tab: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TabWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "icon" | "disabled" | "context" | "update" | "badge"> & {} & Partial<Omit<TabWC, keyof HTMLElement>> & React.RefAttributes<TabWC>, "ref"> & React.RefAttributes<TabWC>>;
export { Tab, TabWC };
