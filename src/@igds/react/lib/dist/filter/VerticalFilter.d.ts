import React from 'react';
import { VerticalFilter as VerticalFilterWC } from '@igds/core-web/filters';
declare const VerticalFilter: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<VerticalFilterWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "onIgdsClear" | "onClear" | "onIgdsApply" | "onIgdsFilterChanged" | "filters" | "clearLabel" | "applyLabel" | "disableSubmit" | "formValues" | "checkboxElements" | "setCheckboxValues" | "onApply" | "handleCheckboxChange" | "renderActionButtons" | "setCheckboxValue" | "renderFilters" | "onExpandIconKeyDown" | "renderSecondLevel" | "onExpand"> & {
    onIgdsApply?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
    onIgdsFilterChanged?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
    onIgdsClear?: ((e: CustomEvent<{
        value: Record<string, string | boolean>;
    }>) => void) | undefined;
} & Partial<Omit<VerticalFilterWC, keyof HTMLElement>> & React.RefAttributes<VerticalFilterWC>, "ref"> & React.RefAttributes<VerticalFilterWC>>;
export { VerticalFilter, VerticalFilterWC };
