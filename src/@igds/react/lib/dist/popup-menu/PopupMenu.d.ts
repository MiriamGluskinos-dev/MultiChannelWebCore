import React from 'react';
import { PopupMenu as PopupMenuWC } from '@igds/core-web/popup-menu';
declare const PopupMenu: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<PopupMenuWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "open" | "context" | "variant" | "items" | "onIgdsOpen" | "onIgdsClose" | "trigger" | "scrollToIndexWhenMoveDown" | "scrollToIndexWhenMoveUp" | "offset" | "requestClose" | "onIgdsSelect" | "selectedItemId" | "minWidth" | "maxWidth" | "placement" | "focusedItemId" | "findTriggerByCssSelector" | "handleOpenMenu" | "handleCloseMenu" | "requestOpen" | "handleEscapeKey" | "handleTriggerSlotChange" | "handleItemClick" | "processSelectedIndex" | "handleArrowDown" | "handleArrowUp" | "setNextFocusedItemId" | "setPrevFocusedItemId"> & {
    onIgdsOpen?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClose?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSelect?: ((e: CustomEvent<{
        value: {
            id: string;
            label: string;
        };
    }>) => void) | undefined;
} & Partial<Omit<PopupMenuWC, keyof HTMLElement>> & React.RefAttributes<PopupMenuWC>, "ref"> & React.RefAttributes<PopupMenuWC>>;
export { PopupMenu, PopupMenuWC };
