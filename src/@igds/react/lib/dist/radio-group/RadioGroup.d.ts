import React from 'react';
import { RadioGroup as RadioGroupWC } from '@igds/core-web/radio-group';
declare const RadioGroup: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<RadioGroupWC>, "defaultValue" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "onIgdsChange" | "required" | "helpText" | "helpIcon" | "name" | "error" | "getHelpContainer" | "getHelpIcon" | "getHelpText" | "getError" | "value" | "orientation" | "getLabel" | "initializeRadios" | "onRadioChange" | "getChildRadios" | "getBottomContainer"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
        checked: boolean;
    }>) => void) | undefined;
} & Partial<Omit<RadioGroupWC, keyof HTMLElement>> & React.RefAttributes<RadioGroupWC>, "ref"> & React.RefAttributes<RadioGroupWC>>;
export { RadioGroup, RadioGroupWC };
