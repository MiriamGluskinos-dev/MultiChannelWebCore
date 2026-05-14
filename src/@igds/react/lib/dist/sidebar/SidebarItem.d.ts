import React from 'react';
import { SidebarItem as SidebarItemWC } from '@igds/core-web/sidebar';
declare const SidebarItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SidebarItemWC>, "onClick" | "onMouseEnter" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "icon" | "disabled" | "onIgdsClick" | "componentId" | "onIgdsHover" | "subMenu" | "isSubMenuItem" | "expanded"> & {
    onIgdsHover?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
        isSubMenuItem: boolean;
    }>) => void) | undefined;
} & Partial<Omit<SidebarItemWC, keyof HTMLElement>> & React.RefAttributes<SidebarItemWC>, "ref"> & React.RefAttributes<SidebarItemWC>>;
export { SidebarItem, SidebarItemWC };
