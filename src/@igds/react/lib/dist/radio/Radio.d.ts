import React from 'react';
import { RadioButton as RadioWC } from '@igds/core-web/radio';
declare const Radio: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<RadioWC>, "onFocus" | "onBlur" | "onChange" | "onInput" | "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "variant" | "imageAlt" | "description" | "imageSrc" | "componentId" | "required" | "helpText" | "helpIcon" | "invalid" | "name" | "error" | "validity" | "checkValidity" | "reportValidity" | "onInputChange" | "setFormValue" | "checked" | "value" | "onChangeHandler" | "textCardTitle"> & {
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
} & Partial<Omit<RadioWC, keyof HTMLElement>> & React.RefAttributes<RadioWC>, "ref"> & React.RefAttributes<RadioWC>>;
export { Radio, RadioWC };
