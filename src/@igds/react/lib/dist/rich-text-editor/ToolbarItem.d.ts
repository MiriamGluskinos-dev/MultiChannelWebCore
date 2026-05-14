import React from 'react';
import { ToolbarItem as ToolbarItemWC } from '@igds/core-web/rich-text-editor';
declare const ToolbarItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ToolbarItemWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "icon" | "onIgdsClick" | "handleClick" | "getLabel" | "command" | "contextData"> & {
    onIgdsClick?: ((e: CustomEvent<{
        value: {
            command: string;
        };
    }>) => void) | undefined;
} & Partial<Omit<ToolbarItemWC, keyof HTMLElement>> & React.RefAttributes<ToolbarItemWC>, "ref"> & React.RefAttributes<ToolbarItemWC>>;
export { ToolbarItem, ToolbarItemWC };
