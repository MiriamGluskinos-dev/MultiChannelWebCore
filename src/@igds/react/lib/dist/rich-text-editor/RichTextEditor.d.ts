import React from 'react';
import { RichTextEditor as RichTextEditorWC } from '@igds/core-web/rich-text-editor';
declare const RichTextEditor: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<RichTextEditorWC>, "defaultValue" | "autoFocus" | "onFocus" | "onBlur" | "onChange" | "onInput" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "form" | "label" | "disabled" | "context" | "onIgdsFocus" | "onIgdsBlur" | "onIgdsChange" | "required" | "helpText" | "helpIcon" | "invalid" | "name" | "error" | "validity" | "checkValidity" | "reportValidity" | "checked" | "value" | "onIgdsInput" | "readonly" | "placeholder" | "onChangeHandler" | "tooltipQuestion" | "tooltipIcon" | "renderHeader" | "renderError" | "tooltipAnswer" | "maxHeight" | "isFocused" | "customEditorTextDirection" | "quillElement" | "toolbarContainer" | "transformText" | "makeList" | "makeIndent" | "changeTextDirection" | "emulateChangeEvent" | "handleToolbarClick" | "initToolbarSlot" | "editorMaxHeight" | "renderToolbar" | "renderEditor" | "renderHelpText"> & {
    onIgdsInput?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<RichTextEditorWC, keyof HTMLElement>> & React.RefAttributes<RichTextEditorWC>, "ref"> & React.RefAttributes<RichTextEditorWC>>;
export { RichTextEditor, RichTextEditorWC };
