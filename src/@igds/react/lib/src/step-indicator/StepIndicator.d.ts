import React from 'react';
import { StepIndicator as StepIndicatorWC } from '@igds/core-web/step-indicator';
declare const StepIndicator: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<StepIndicatorWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "current" | "context" | "onIgdsClick" | "onIgdsChange" | "orientation" | "update" | "flat" | "parentContext" | "steps" | "renderFlatStepIndicator" | "renderHorizontalMobileHeader" | "renderStepItem" | "emitClick"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClick?: ((e: CustomEvent<{
        value: {
            stepNumber: number;
            isNested: boolean;
            parentNumber?: number;
        };
    }>) => void) | undefined;
} & Partial<Omit<StepIndicatorWC, keyof HTMLElement>> & React.RefAttributes<StepIndicatorWC>, "ref"> & React.RefAttributes<StepIndicatorWC>>;
export { StepIndicator, StepIndicatorWC };
