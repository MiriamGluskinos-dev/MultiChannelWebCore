import React from 'react';
import { Toggle as ToggleWC } from '@igds/core-web/toggle';
declare const Toggle: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ToggleWC>, "defaultValue" | "onFocus" | "onBlur" | "onChange" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "componentId" | "name" | "checked" | "value" | "onChangeHandler" | "labelText" | "labelTitle"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
        checked: boolean;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<ToggleWC, keyof HTMLElement>> & React.RefAttributes<ToggleWC>, "ref"> & React.RefAttributes<ToggleWC>>;
export { Toggle, ToggleWC };
