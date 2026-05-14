import React from 'react';
import { HorizontalFilter as HorizontalFilterWC } from '@igds/core-web/filters';
declare const HorizontalFilter: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<HorizontalFilterWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "onIgdsClear" | "onClear" | "onIgdsApply" | "onIgdsFilterChanged" | "filters" | "clearLabel" | "applyLabel" | "disableSubmit" | "formValues" | "dropdownElements" | "checkboxElements" | "setCheckboxValues" | "onApply" | "dropdownFilters" | "renderDropdownFilters" | "handleDropdownChange" | "handleDropdownClear" | "checkboxFilters" | "renderCheckboxFilters" | "handleCheckboxChange" | "renderActionButtons" | "onDropdownsClear" | "onCheckboxesClear"> & {
    onIgdsApply?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
    onIgdsFilterChanged?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
    onIgdsClear?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
} & Partial<Omit<HorizontalFilterWC, keyof HTMLElement>> & React.RefAttributes<HorizontalFilterWC>, "ref"> & React.RefAttributes<HorizontalFilterWC>>;
export { HorizontalFilter, HorizontalFilterWC };
