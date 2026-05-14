import React from 'react';
import { List as ListWC } from '@igds/core-web/list';
declare const List: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ListWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "variant" | "items" | "onIgdsDragStart" | "onIgdsDragEnd" | "droppable" | "openedItemIds" | "keyboardDraggingElementId" | "dragging" | "list" | "update" | "initDragAndDrop" | "setDragging" | "hasMoreContent" | "openItem" | "closeItem" | "toggleItem" | "handleDragButtonKeyPress" | "startKeyboardDrag" | "endKeyboardDrag" | "processArrowsKeyDown" | "listenKeyboardWhileDragging" | "getDragAndDropControl" | "renderDataList" | "renderOrderedList" | "renderUnorderedList"> & {
    onIgdsDragStart?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsDragEnd?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<ListWC, keyof HTMLElement>> & React.RefAttributes<ListWC>, "ref"> & React.RefAttributes<ListWC>>;
export { List, ListWC };
