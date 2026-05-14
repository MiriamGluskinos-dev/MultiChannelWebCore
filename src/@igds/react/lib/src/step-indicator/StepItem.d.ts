import React from 'react';
import { StepItem as StepItemWC } from '@igds/core-web/step-indicator';
declare const StepItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<StepItemWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "context" | "itemSlot" | "secondaryLabel"> & {} & Partial<Omit<StepItemWC, keyof HTMLElement>> & React.RefAttributes<StepItemWC>, "ref"> & React.RefAttributes<StepItemWC>>;
export { StepItem, StepItemWC };
