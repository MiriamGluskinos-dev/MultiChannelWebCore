import React from 'react';
import { Sidebar as SidebarWC } from '@igds/core-web/sidebar';
declare const Sidebar: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SidebarWC>, "onKeyDown" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "open" | "variant" | "onIgdsOpen" | "onIgdsClose" | "highlightedId" | "removeHighlightedClass" | "handleEnterOrSpaceDown" | "isRelevantKey" | "slottedSidebarItems" | "sidebarElements" | "onSelectSidebarItem" | "removeSelectedClass" | "getSidebarItems" | "getSidebarItemElements" | "updateSlottedSidebarItems" | "getHighlightedItemIndex" | "handleArrowsDown" | "handleLeftOrRightDown" | "openSubmenuAndAddSubMenuItem" | "closeSubMenuAndRemoveSubMenuItem" | "closeAllSubMenus"> & {
    onIgdsOpen?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsClose?: ((e: CustomEvent<any>) => void) | undefined;
} & Partial<Omit<SidebarWC, keyof HTMLElement>> & React.RefAttributes<SidebarWC>, "ref"> & React.RefAttributes<SidebarWC>>;
export { Sidebar, SidebarWC };
