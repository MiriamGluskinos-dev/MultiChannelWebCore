import React from 'react';
import { TabPanel as TabPanelWC } from '@igds/core-web/tabs';
declare const TabPanel: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TabPanelWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "handleSlotChange" | "tab"> & {} & Partial<Omit<TabPanelWC, keyof HTMLElement>> & React.RefAttributes<TabPanelWC>, "ref"> & React.RefAttributes<TabPanelWC>>;
export { TabPanel, TabPanelWC };
