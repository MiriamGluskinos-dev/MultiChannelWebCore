import React from 'react';
import { PopupMenuItem as PopupMenuItemWC } from '@igds/core-web/popup-menu';
declare const PopupMenuItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<PopupMenuItemWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "icon" | "context" | "itemSlot" | "getText" | "emitEvent" | "handleSlotChange" | "update" | "onIgdsSelect" | "iconVariant"> & {
    onIgdsSelect?: ((e: CustomEvent<{
        value: {
            id: string;
            label: string;
        };
    }>) => void) | undefined;
} & Partial<Omit<PopupMenuItemWC, keyof HTMLElement>> & React.RefAttributes<PopupMenuItemWC>, "ref"> & React.RefAttributes<PopupMenuItemWC>>;
export { PopupMenuItem, PopupMenuItemWC };
