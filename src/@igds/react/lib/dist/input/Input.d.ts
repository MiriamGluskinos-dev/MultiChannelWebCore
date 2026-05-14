import React from 'react';
import { Input as InputWC } from '@igds/core-web/input';
declare const Input: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<InputWC>, "defaultValue" | "autoFocus" | "autoCapitalize" | "onFocus" | "onBlur" | "onChange" | "onInput" | "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "pattern" | "icon" | "disabled" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "size" | "type" | "componentId" | "required" | "helpText" | "helpIcon" | "invalid" | "name" | "error" | "validity" | "checkValidity" | "reportValidity" | "getHelpIcon" | "getHelpText" | "getError" | "checked" | "value" | "onIgdsInput" | "labelIcon" | "readonly" | "min" | "max" | "placeholder" | "onChangeHandler" | "tooltip" | "tooltipQuestion" | "tooltipIcon" | "onIgdsInputIconClick" | "rows" | "cols" | "maxlength" | "iconPosition" | "autoComplete" | "autoHeight" | "step" | "getTopBox" | "getInputLabel" | "getTooltipIcon" | "getTooltipQuestion" | "updateTextareaHeight" | "getTextareaCssClass" | "getInputCssClass" | "getInputBox" | "getRows" | "getMaxLengthContainer" | "getMaxLengthContainerContent" | "padDigit" | "getHelpBox" | "getInputIconCssClass" | "getInputIcon" | "getIconAriaLabel" | "getIconTabIndex" | "onIconClick" | "onIconKeyDown"> & {
    onIgdsInput?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsInputIconClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<InputWC, keyof HTMLElement>> & React.RefAttributes<InputWC>, "ref"> & React.RefAttributes<InputWC>>;
export { Input, InputWC };
