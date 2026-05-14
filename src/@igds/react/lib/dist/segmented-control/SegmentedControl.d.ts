import React from 'react';
import { SegmentedControl as SegmentedControlWC } from '@igds/core-web/segmented-control';
declare const SegmentedControl: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SegmentedControlWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "disabled" | "onIgdsChange" | "size" | "name" | "contextData" | "segmentsWithText" | "isIconOnly" | "updateSelectedId" | "reportAboutTextSegment"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: {
            id: string | undefined;
        };
    }>) => void) | undefined;
} & Partial<Omit<SegmentedControlWC, keyof HTMLElement>> & React.RefAttributes<SegmentedControlWC>, "ref"> & React.RefAttributes<SegmentedControlWC>>;
export { SegmentedControl, SegmentedControlWC };
