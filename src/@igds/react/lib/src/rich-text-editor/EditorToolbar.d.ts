import React from 'react';
import { EditorToolbar as EditorToolbarWC } from '@igds/core-web/rich-text-editor';
declare const EditorToolbar: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<EditorToolbarWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete"> & {} & Partial<Omit<EditorToolbarWC, keyof HTMLElement>> & React.RefAttributes<EditorToolbarWC>, "ref"> & React.RefAttributes<EditorToolbarWC>>;
export { EditorToolbar, EditorToolbarWC };
