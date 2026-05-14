import React from 'react';
import { MenuItem as MenuItemWC } from '@igds/core-web/menu';
declare const MenuItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<MenuItemWC>, "onMouseEnter" | "onMouseLeave" | "onSelect" | "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "header" | "label" | "icon" | "disabled" | "onIgdsClick" | "componentId" | "isMobile" | "isSubMenuShown" | "onIgdsHover" | "subMenu" | "withDivider" | "menuItemElement" | "subMenuSlotElement" | "updateDeviceType" | "setMenuItemEventListeners" | "removeMenuItemEventListeners" | "getSubMenu" | "setSubmenuPosition" | "getSubMenuPlacement"> & {
    onIgdsHover?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
        id: string;
        subMenu: boolean;
    }>) => void) | undefined;
} & Partial<Omit<MenuItemWC, keyof HTMLElement>> & React.RefAttributes<MenuItemWC>, "ref"> & React.RefAttributes<MenuItemWC>>;
export { MenuItem, MenuItemWC };
