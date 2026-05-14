import React from 'react';
import { Toast as ToastWC } from '@igds/core-web/toast';
declare const Toast: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ToastWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "inline" | "variant" | "type" | "onIgdsClose" | "show" | "duration" | "autoClose" | "closable" | "linkActionLabel" | "linkActionUrl" | "closeActionLabel" | "close"> & {
    onIgdsClose?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<ToastWC, keyof HTMLElement>> & React.RefAttributes<ToastWC>, "ref"> & React.RefAttributes<ToastWC>>;
export { Toast, ToastWC };
