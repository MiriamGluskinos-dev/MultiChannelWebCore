import React from 'react';
import { Pagination as PaginationWC } from '@igds/core-web/pagination';
declare const Pagination: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<PaginationWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "current" | "context" | "onIgdsClick" | "onIgdsChange" | "variant" | "renderItem" | "willUpdate" | "update" | "paginationItems" | "isLtr" | "isNumbered" | "isFirstPage" | "isLastPage" | "prevHref" | "nextHref" | "getPrevLinkCssClasses" | "getNextLinkCssClasses" | "getPaginationCssClass" | "renderPreviousLink" | "renderNextLink"> & {
    onIgdsClick?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<PaginationWC, keyof HTMLElement>> & React.RefAttributes<PaginationWC>, "ref"> & React.RefAttributes<PaginationWC>>;
export { Pagination, PaginationWC };
