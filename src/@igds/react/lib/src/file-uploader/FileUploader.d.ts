import React from 'react';
import { FileUploader as FileUploaderWC, AddedFile } from '@igds/core-web/file-uploader';
declare const FileUploader: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<FileUploaderWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "onIgdsChange" | "description" | "helpText" | "name" | "checked" | "value" | "multiple" | "onIgdsFileAdded" | "onIgdsFileRemoved" | "heading" | "acceptedFormats" | "maxFileSize" | "status" | "files" | "isFileUploadedInSingleUploader" | "getContainerCssClass" | "renderHeader" | "getUploaderStatus" | "renderUploaderStatus" | "renderError" | "renderUploadedFileList"> & {
    onIgdsFileAdded?: ((e: CustomEvent<{
        value: string;
        fileDetails: AddedFile;
    }>) => void) | undefined;
    onIgdsFileRemoved?: ((e: CustomEvent<{
        value: string;
        fileDetails: AddedFile;
    }>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
        fileDetails: AddedFile[];
    }>) => void) | undefined;
} & Partial<Omit<FileUploaderWC, keyof HTMLElement>> & React.RefAttributes<FileUploaderWC>, "ref"> & React.RefAttributes<FileUploaderWC>>;
export { FileUploader, FileUploaderWC };
