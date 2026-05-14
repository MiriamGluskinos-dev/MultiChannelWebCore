import React from 'react';
import { Drawer as DrawerWC } from '@igds/core-web/drawer';
declare const Drawer: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<DrawerWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "open" | "handleSlotChange" | "onIgdsOpen" | "onIgdsClose" | "position" | "hideCloseButton" | "hideOverlay" | "isDrawerShown" | "isAnimationEnded" | "disableFocusLock" | "show" | "hide" | "closeByBackdropClick"> & {
    onIgdsOpen?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsClose?: ((e: CustomEvent<any>) => void) | undefined;
} & Partial<Omit<DrawerWC, keyof HTMLElement>> & React.RefAttributes<DrawerWC>, "ref"> & React.RefAttributes<DrawerWC>>;
export { Drawer, DrawerWC };
