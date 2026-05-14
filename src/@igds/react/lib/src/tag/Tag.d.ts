import React from 'react';
import { Tag as TagWC } from '@igds/core-web/tag';
declare const Tag: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<TagWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "icon" | "disabled" | "size" | "onIgdsSelect" | "onIgdsRemove" | "removable"> & {
    onIgdsSelect?: ((e: CustomEvent<{
        value: string;
        id: string;
    }>) => void) | undefined;
    onIgdsRemove?: ((e: CustomEvent<{
        value: string;
        id: string;
    }>) => void) | undefined;
} & Partial<Omit<TagWC, keyof HTMLElement>> & React.RefAttributes<TagWC>, "ref"> & React.RefAttributes<TagWC>>;
export { Tag, TagWC };
