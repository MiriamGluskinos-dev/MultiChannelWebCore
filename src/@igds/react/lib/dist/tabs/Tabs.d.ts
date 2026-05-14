import React from 'react';
import { Tabs as TabsWC } from '@igds/core-web/tabs';
declare const Tabs: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TabsWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "onIgdsChange" | "tabs" | "currentTabId" | "centered"> & {
    onIgdsChange?: ((e: CustomEvent<any>) => void) | undefined;
} & Partial<Omit<TabsWC, keyof HTMLElement>> & React.RefAttributes<TabsWC>, "ref"> & React.RefAttributes<TabsWC>>;
export { Tabs, TabsWC };
