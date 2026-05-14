import React from 'react';
import { AnchorMenu as AnchorMenuWC } from '@igds/core-web/anchor';
declare const AnchorMenu: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<AnchorMenuWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "header" | "context" | "onIgdsClick" | "onIgdsFocus" | "onIgdsBlur" | "anchorElements" | "anchors" | "selectedAnchorId"> & {
    onIgdsClick?: ((e: CustomEvent<{
        value: {
            href: string;
        };
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<any>) => void) | undefined;
} & Partial<Omit<AnchorMenuWC, keyof HTMLElement>> & React.RefAttributes<AnchorMenuWC>, "ref"> & React.RefAttributes<AnchorMenuWC>>;
export { AnchorMenu, AnchorMenuWC };
