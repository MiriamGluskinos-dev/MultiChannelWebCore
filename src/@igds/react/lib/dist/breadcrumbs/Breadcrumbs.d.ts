import React from 'react';
import { Breadcrumbs as BreadcrumbsWC } from '@igds/core-web/breadcrumbs';
declare const Breadcrumbs: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<BreadcrumbsWC>, "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "context" | "onIgdsNavigate" | "onIgdsExpand" | "preventDefault" | "items" | "middleSectionWidth" | "shownOnMobile" | "breadcrumbsElement" | "startElement" | "middleElement" | "endElement" | "middleItems" | "shouldSkipOverflowingCheck" | "checkOverflowing" | "measureCssProperty" | "getMiddleSectionWidth" | "navigateTo" | "emulateDefaultLinkClickBehavior" | "renderItemContent" | "renderItem" | "formattedItems" | "invisibleItems" | "renderStandardBreadcrumbs"> & {
    onIgdsExpand?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsNavigate?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<BreadcrumbsWC, keyof HTMLElement>> & React.RefAttributes<BreadcrumbsWC>, "ref"> & React.RefAttributes<BreadcrumbsWC>>;
export { Breadcrumbs, BreadcrumbsWC };
