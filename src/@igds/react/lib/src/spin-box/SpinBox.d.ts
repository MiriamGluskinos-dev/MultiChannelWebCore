import React from 'react';
import { SpinBox as SpinBoxWC } from '@igds/core-web/spin-box';
declare const SpinBox: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SpinBoxWC>, "defaultValue" | "autoFocus" | "onChange" | "onInput" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "size" | "componentId" | "required" | "helpText" | "helpIcon" | "invalid" | "name" | "error" | "onInputChange" | "getHelpIcon" | "getHelpText" | "getError" | "checked" | "value" | "onIgdsInput" | "min" | "max" | "inputElement" | "onInputFocus" | "onInputBlur" | "tooltip" | "tooltipQuestion" | "tooltipIcon" | "getTooltipIcon" | "getTooltipQuestion" | "getHelpBox" | "isAddButtonDisabled" | "isSubtractButtonDisabled" | "onAdd" | "onSubtract"> & {
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsInput?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<SpinBoxWC, keyof HTMLElement>> & React.RefAttributes<SpinBoxWC>, "ref"> & React.RefAttributes<SpinBoxWC>>;
export { SpinBox, SpinBoxWC };
