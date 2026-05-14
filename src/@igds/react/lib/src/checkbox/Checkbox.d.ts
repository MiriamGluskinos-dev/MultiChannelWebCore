import React from 'react';
import { Checkbox as CheckboxWC } from '@igds/core-web/checkbox';
declare const Checkbox: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<CheckboxWC>, "defaultValue" | "onFocus" | "onBlur" | "onChange" | "onInput" | "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "variant" | "imageAlt" | "description" | "imageSrc" | "componentId" | "required" | "helpText" | "helpIcon" | "invalid" | "indeterminate" | "name" | "error" | "validity" | "checkValidity" | "reportValidity" | "onInputChange" | "setFormValue" | "getHelpContainer" | "getHelpIcon" | "getHelpText" | "getError" | "checked" | "value"> & {
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
} & Partial<Omit<CheckboxWC, keyof HTMLElement>> & React.RefAttributes<CheckboxWC>, "ref"> & React.RefAttributes<CheckboxWC>>;
export { Checkbox, CheckboxWC };
