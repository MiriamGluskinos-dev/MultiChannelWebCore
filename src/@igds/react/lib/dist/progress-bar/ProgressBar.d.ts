import React from 'react';
import { ProgressBar as ProgressBarWC } from '@igds/core-web/progress-bar';
declare const ProgressBar: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ProgressBarWC>, "color" | "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "size" | "type" | "inverted" | "helpText" | "indeterminate" | "value" | "onIgdsComplete" | "statusIcon"> & {
    onIgdsComplete?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<ProgressBarWC, keyof HTMLElement>> & React.RefAttributes<ProgressBarWC>, "ref"> & React.RefAttributes<ProgressBarWC>>;
export { ProgressBar, ProgressBarWC };
