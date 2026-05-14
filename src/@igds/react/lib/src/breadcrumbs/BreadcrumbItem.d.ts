import React from 'react';
import { BreadcrumbItem as BreadcrumbItemWC } from '@igds/core-web/breadcrumbs';
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<BreadcrumbItemWC>, "rel" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "href" | "context" | "onIgdsNavigate" | "target" | "itemSlot" | "getText" | "emitEvent" | "handleSlotChange"> & {
    onIgdsNavigate?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<BreadcrumbItemWC, keyof HTMLElement>> & React.RefAttributes<BreadcrumbItemWC>, "ref"> & React.RefAttributes<BreadcrumbItemWC>>;
export { BreadcrumbItem, BreadcrumbItemWC };
