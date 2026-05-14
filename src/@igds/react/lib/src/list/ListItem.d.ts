import React from 'react';
import { ListItem as ListItemWC } from '@igds/core-web/list';
declare const ListItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ListItemWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "header" | "icon" | "context" | "imageAlt" | "itemSlot" | "imageSrc" | "subheader" | "moreText" | "itemId" | "moreInfo" | "draggableItem"> & {} & Partial<Omit<ListItemWC, keyof HTMLElement>> & React.RefAttributes<ListItemWC>, "ref"> & React.RefAttributes<ListItemWC>>;
export { ListItem, ListItemWC };
